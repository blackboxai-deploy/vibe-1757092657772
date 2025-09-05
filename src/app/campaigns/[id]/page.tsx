'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Campaign, Donation } from '@/types';
import { getCampaignById, getDonationsByCampaign } from '@/lib/database';
import { DonationModal } from '@/components/DonationModal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CampaignDetailsPage() {
  const params = useParams();
  const campaignId = params.id as string;
  
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadCampaignDetails = async () => {
      if (!campaignId) return;
      
      try {
        const [campaignData, donationsData] = await Promise.all([
          getCampaignById(campaignId),
          getDonationsByCampaign(campaignId)
        ]);
        
        setCampaign(campaignData);
        setDonations(donationsData);
      } catch (error) {
        console.error('Failed to load campaign details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadCampaignDetails();
  }, [campaignId]);

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Card className="p-6 animate-pulse">
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-10 bg-gray-200 rounded"></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return (
      <div className="container py-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold mb-2">Campaign Not Found</h1>
          <p className="text-muted-foreground mb-4">
            The campaign you&apos;re looking for doesn&apos;t exist or has been removed.
          </p>
          <Button asChild>
            <a href="/campaigns">Browse Campaigns</a>
          </Button>
        </div>
      </div>
    );
  }

  const progressPercentage = Math.round((campaign.raised / campaign.goal) * 100);
  const daysLeft = Math.ceil((new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Image */}
            <div className="aspect-video relative mb-6 rounded-lg overflow-hidden">
              <Image
                src={campaign.images[0] || 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fb953320-8b31-4e1b-80c8-0088f6221f2a.png'}
                alt={campaign.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <Badge className={`${campaign.category.color} text-white`}>
                  {campaign.category.icon} {campaign.category.name}
                </Badge>
              </div>
              {campaign.featured && (
                <Badge className="absolute top-4 right-4 bg-primary">
                  Featured
                </Badge>
              )}
            </div>

            {/* Campaign Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold mb-4">{campaign.title}</h1>
                <p className="text-xl text-muted-foreground">{campaign.shortDescription}</p>
              </div>

              {/* Creator Info */}
              <div className="flex items-center space-x-4 p-4 bg-white rounded-lg">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={campaign.creator.profileImage} alt={campaign.creator.name} />
                  <AvatarFallback>{campaign.creator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{campaign.creator.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {campaign.creator.role === 'student' ? 'Student' : 'Faculty'} • {campaign.creator.department}
                  </p>
                  <div className="flex items-center mt-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Verified University Member</span>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="donors">Donors</TabsTrigger>
                </TabsList>

                <TabsContent value="description" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="prose prose-gray max-w-none">
                        <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                          {campaign.description}
                        </div>
                      </div>
                      
                      {/* Tags */}
                      {campaign.tags.length > 0 && (
                        <div className="mt-6 pt-6 border-t">
                          <h4 className="font-semibold mb-3">Tags</h4>
                          <div className="flex flex-wrap gap-2">
                            {campaign.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Additional Images */}
                      {campaign.images.length > 1 && (
                        <div className="mt-6 pt-6 border-t">
                          <h4 className="font-semibold mb-3">Additional Images</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {campaign.images.slice(1).map((image, index) => (
                              <div key={index} className="aspect-video relative rounded-lg overflow-hidden">
                                <Image
                                  src={image}
                                  alt={`${campaign.title} - Image ${index + 2}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="updates" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      {campaign.updates.length === 0 ? (
                        <div className="text-center py-8">
                          <div className="text-4xl mb-4">📢</div>
                          <p className="text-muted-foreground">No updates yet</p>
                          <p className="text-sm text-muted-foreground">
                            The campaign creator will post updates here as the project progresses.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          {campaign.updates.map((update, index) => (
                            <div key={update.id}>
                              {index > 0 && <Separator className="my-6" />}
                              <div>
                                <h4 className="font-semibold mb-2">{update.title}</h4>
                                <p className="text-sm text-muted-foreground mb-3">
                                  By {update.author} • {formatDate(update.createdAt)}
                                </p>
                                <div className="prose prose-gray max-w-none">
                                  <p className="whitespace-pre-wrap">{update.content}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="donors" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      {donations.length === 0 ? (
                        <div className="text-center py-8">
                          <div className="text-4xl mb-4">❤️</div>
                          <p className="text-muted-foreground">Be the first to support this campaign!</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <h4 className="font-semibold">
                            Recent Donors ({donations.length})
                          </h4>
                          <div className="space-y-4">
                            {donations.map((donation) => (
                              <div key={donation.id} className="flex items-start justify-between p-4 bg-gray-50 rounded-lg">
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2 mb-1">
                                    <span className="font-medium">
                                      {donation.anonymous ? 'Anonymous' : donation.donorName}
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                      donated {formatCurrency(donation.amount)}
                                    </span>
                                  </div>
                                  {donation.message && (
                                    <p className="text-sm text-gray-600 mt-2 italic">
                                      &quot;{donation.message}&quot;
                                    </p>
                                  )}
                                  <p className="text-xs text-muted-foreground mt-2">
                                    {formatDate(donation.createdAt)}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Card */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{formatCurrency(campaign.raised)}</span>
                  <span className="text-sm font-normal text-muted-foreground">
                    {progressPercentage}%
                  </span>
                </CardTitle>
                <CardDescription>
                  raised of {formatCurrency(campaign.goal)} goal
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={progressPercentage} className="h-3" />
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">{campaign.donorCount}</div>
                    <div className="text-sm text-muted-foreground">donors</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">
                      {daysLeft > 0 ? daysLeft : 0}
                    </div>
                    <div className="text-sm text-muted-foreground">days left</div>
                  </div>
                </div>

                <DonationModal campaign={campaign}>
                  <Button className="w-full" size="lg">
                    Donate Now
                  </Button>
                </DonationModal>

                <div className="text-xs text-muted-foreground text-center">
                  Secure payment processing • University verified campaign
                </div>
              </CardContent>
            </Card>

            {/* Campaign Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Campaign Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Created</span>
                  <span className="text-sm font-medium">
                    {formatDate(campaign.createdAt)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Deadline</span>
                  <span className="text-sm font-medium">
                    {formatDate(campaign.deadline)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge
                    variant={campaign.status === 'active' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">University Approved</span>
                  <div className="flex items-center">
                    {campaign.universityApproved ? (
                      <>
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm text-green-600">Yes</span>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                        <span className="text-sm text-yellow-600">Pending</span>
                      </>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Share Campaign</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <svg className="w-4 h-4 mr-2 fill-current text-blue-600" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Share on Facebook
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <svg className="w-4 h-4 mr-2 fill-current text-blue-400" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Share on Twitter
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  📧 Share via Email
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  📋 Copy Link
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}