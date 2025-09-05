'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Campaign, CampaignCategory, FilterOptions } from '@/types';
import { getCampaigns, getCategories } from '@/lib/database';
import { CampaignCard } from '@/components/CampaignCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

function CampaignsContent() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [categories, setCategories] = useState<CampaignCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterOptions>({
    search: '',
    category: '',
    status: 'active',
    sortBy: 'newest'
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const loadData = async () => {
      try {
        const [campaignsData, categoriesData] = await Promise.all([
          getCampaigns(filters),
          getCategories()
        ]);
        setCampaigns(campaignsData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Failed to load campaigns:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [filters]);

  useEffect(() => {
    // Handle URL parameters
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setFilters(prev => ({ ...prev, category: categoryParam }));
    }
  }, [searchParams]);

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      status: 'active',
      sortBy: 'newest'
    });
  };

  const totalRaised = campaigns.reduce((sum, campaign) => sum + campaign.raised, 0);
  const totalGoal = campaigns.reduce((sum, campaign) => sum + campaign.goal, 0);
  const averageProgress = campaigns.length > 0 ? Math.round((totalRaised / totalGoal) * 100) : 0;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold mb-2">Browse Campaigns</h1>
              <p className="text-muted-foreground">
                Discover and support amazing projects from our university community
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-green-600">{formatCurrency(totalRaised)}</div>
                <div className="text-sm text-muted-foreground">Total Raised</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-2xl font-bold text-blue-600">{campaigns.length}</div>
                <div className="text-sm text-muted-foreground">Active Campaigns</div>
              </Card>
              <Card className="text-center p-4 col-span-2 lg:col-span-1">
                <div className="text-2xl font-bold text-purple-600">{averageProgress}%</div>
                <div className="text-sm text-muted-foreground">Avg Progress</div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Filters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Search</label>
                  <Input
                    placeholder="Search campaigns..."
                    value={filters.search || ''}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select
                    value={filters.category || ''}
                    onValueChange={(value) => handleFilterChange('category', value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All categories</SelectItem>
                      {categories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.icon} {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Status */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Status</label>
                  <Select
                    value={filters.status || ''}
                    onValueChange={(value) => handleFilterChange('status', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Sort by</label>
                  <Select
                    value={filters.sortBy || ''}
                    onValueChange={(value) => handleFilterChange('sortBy', value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest</SelectItem>
                      <SelectItem value="deadline">Deadline</SelectItem>
                      <SelectItem value="raised">Most Raised</SelectItem>
                      <SelectItem value="goal">Highest Goal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={clearFilters} variant="outline" className="w-full">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleFilterChange('category', 
                        filters.category === category.id ? '' : category.id
                      )}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        filters.category === category.id 
                          ? 'bg-primary text-primary-foreground' 
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{category.icon}</span>
                        <div>
                          <div className="font-medium">{category.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {campaigns.filter(c => c.category.id === category.id).length} campaigns
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Campaigns Grid */}
          <div className="lg:col-span-3">
            {/* Active Filters */}
            {(filters.search || filters.category || (filters.status && filters.status !== 'active')) && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium">Active filters:</span>
                  <Button onClick={clearFilters} variant="ghost" size="sm">
                    Clear all
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {filters.search && (
                    <Badge variant="secondary" className="gap-1">
                      Search: {filters.search}
                      <button
                        onClick={() => handleFilterChange('search', '')}
                        className="ml-1 hover:text-red-500"
                        aria-label="Remove search filter"
                      >
                        &times;
                      </button>
                    </Badge>
                  )}
                  {filters.category && (
                    <Badge variant="secondary" className="gap-1">
                      {categories.find(c => c.id === filters.category)?.name}
                      <button
                        onClick={() => handleFilterChange('category', '')}
                        className="ml-1 hover:text-red-500"
                        aria-label="Remove category filter"
                      >
                        &times;
                      </button>
                    </Badge>
                  )}
                  {filters.status && filters.status !== 'active' && (
                    <Badge variant="secondary" className="gap-1">
                      Status: {filters.status}
                      <button
                        onClick={() => handleFilterChange('status', 'active')}
                        className="ml-1 hover:text-red-500"
                        aria-label="Remove status filter"
                      >
                        &times;
                      </button>
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Results */}
            <div className="mb-6">
              <p className="text-muted-foreground">
                Showing {campaigns.length} campaign{campaigns.length !== 1 ? 's' : ''}
              </p>
            </div>

            {isLoading ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="h-[400px] animate-pulse">
                    <div className="aspect-video bg-gray-200 rounded-t-lg"></div>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : campaigns.length === 0 ? (
              <Card className="p-12 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No campaigns found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CampaignsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading campaigns...</div>}>
      <CampaignsContent />
    </Suspense>
  );
}