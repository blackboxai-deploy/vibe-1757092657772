import Link from 'next/link';
import Image from 'next/image';
import { Campaign } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CampaignCardProps {
  campaign: Campaign;
  featured?: boolean;
}

export function CampaignCard({ campaign, featured = false }: CampaignCardProps) {
  const progressPercentage = Math.round((campaign.raised / campaign.goal) * 100);
  const daysLeft = Math.ceil((new Date(campaign.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className={`h-full transition-all hover:shadow-lg ${featured ? 'ring-2 ring-primary' : ''}`}>
      <div className="relative">
        <div className="aspect-video relative overflow-hidden rounded-t-lg">
          <Image
            src={campaign.images[0] || 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8ae099d8-35b5-4601-b9d1-1ee1bf77b856.png'}
            alt={campaign.title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        {featured && (
          <Badge className="absolute top-3 right-3 bg-primary">
            Featured
          </Badge>
        )}
        <Badge 
          className={`absolute top-3 left-3 ${campaign.category.color} text-white`}
        >
          {campaign.category.icon} {campaign.category.name}
        </Badge>
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="line-clamp-2 text-lg">
          <Link href={`/campaigns/${campaign.id}`} className="hover:text-primary transition-colors">
            {campaign.title}
          </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {campaign.shortDescription}
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-3">
        <div className="space-y-3">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{formatCurrency(campaign.raised)} raised</span>
              <span className="text-muted-foreground">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Goal: {formatCurrency(campaign.goal)}</span>
              <span>{campaign.donorCount} donors</span>
            </div>
          </div>

          {/* Creator */}
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={campaign.creator.profileImage} alt={campaign.creator.name} />
              <AvatarFallback className="text-xs">{campaign.creator.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-muted-foreground truncate">
                by {campaign.creator.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {campaign.creator.role === 'student' ? 'Student' : 'Faculty'} • {campaign.creator.department}
              </p>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full text-sm text-muted-foreground">
          <span>
            {daysLeft > 0 ? `${daysLeft} days left` : 'Campaign ended'}
          </span>
          <span>
            Created {formatDate(campaign.createdAt)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}