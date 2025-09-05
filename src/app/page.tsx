'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Campaign } from '@/types';
import { getFeaturedCampaigns } from '@/lib/database';
import { CampaignCard } from '@/components/CampaignCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const [featuredCampaigns, setFeaturedCampaigns] = useState<Campaign[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedCampaigns = async () => {
      try {
        const campaigns = await getFeaturedCampaigns();
        setFeaturedCampaigns(campaigns);
      } catch (error) {
        console.error('Failed to load featured campaigns:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedCampaigns();
  }, []);

  const stats = [
    { label: 'Total Raised', value: '$2.4M+', description: 'Donated by our community' },
    { label: 'Campaigns Funded', value: '1,200+', description: 'Successfully completed projects' },
    { label: 'Active Students', value: '25,000+', description: 'Engaged in crowdfunding' },
    { label: 'Success Rate', value: '87%', description: 'Campaigns reach their goals' }
  ];

  const categories = [
    {
      name: 'Academic Research',
      description: 'Support groundbreaking research projects',
      icon: '🔬',
      color: 'bg-blue-500'
    },
    {
      name: 'Student Organizations',
      description: 'Fund club activities and events',
      icon: '👥',
      color: 'bg-green-500'
    },
    {
      name: 'Community Outreach',
      description: 'Make a difference in local communities',
      icon: '🤝',
      color: 'bg-purple-500'
    },
    {
      name: 'Campus Infrastructure',
      description: 'Improve campus facilities and amenities',
      icon: '🏗️',
      color: 'bg-orange-500'
    }
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Fund Your
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> University Dreams</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Empower student initiatives, research projects, and campus improvements through community-driven crowdfunding.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/campaigns">Browse Campaigns</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/campaigns/create">Start a Campaign</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">$2.4M+</div>
                  <div className="text-sm text-muted-foreground">Total Raised</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">1,200+</div>
                  <div className="text-sm text-muted-foreground">Projects Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">87%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b2f431d2-ba37-4471-a7b2-7f9efc91451c.png"
                  alt="University students collaborating on campus projects"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating stats cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600">$18.7K</div>
                <div className="text-sm text-muted-foreground">Recent donation</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-blue-600">247</div>
                <div className="text-sm text-muted-foreground">Active campaigns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Campaigns */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Campaigns</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the most impactful projects from students and faculty across our university
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
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
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCampaigns.map((campaign) => (
                <CampaignCard key={campaign.id} campaign={campaign} featured />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link href="/campaigns">View All Campaigns</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Campaign Categories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find campaigns that match your interests and make a meaningful impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center text-3xl mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold mb-2">{category.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/campaigns?category=${category.name}`}>
                    Explore
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Together, we&apos;re transforming ideas into reality and creating positive change on campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <Card key={stat.label} className="p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <h3 className="font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Whether you want to support existing projects or start your own campaign, 
              join our community of changemakers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/campaigns/create">Start Your Campaign</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/campaigns">Browse & Donate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}