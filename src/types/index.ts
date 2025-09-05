export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'faculty' | 'donor' | 'admin';
  studentId?: string;
  department?: string;
  profileImage?: string;
  createdAt: string;
  isVerified: boolean;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  goal: number;
  raised: number;
  deadline: string;
  createdAt: string;
  updatedAt: string;
  category: CampaignCategory;
  status: 'draft' | 'pending' | 'active' | 'completed' | 'cancelled';
  creatorId: string;
  creator: User;
  images: string[];
  tags: string[];
  donorCount: number;
  updates: CampaignUpdate[];
  donations: Donation[];
  featured: boolean;
  universityApproved: boolean;
}

export interface Donation {
  id: string;
  campaignId: string;
  donorId?: string;
  donorName: string;
  donorEmail: string;
  amount: number;
  message?: string;
  anonymous: boolean;
  createdAt: string;
  paymentStatus: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: 'card' | 'university_account' | 'other';
}

export interface CampaignUpdate {
  id: string;
  campaignId: string;
  title: string;
  content: string;
  createdAt: string;
  author: string;
}

export interface CampaignCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface DashboardStats {
  totalCampaigns: number;
  totalRaised: number;
  totalDonors: number;
  activeCampaigns: number;
  pendingApprovals: number;
  successRate: number;
}

export interface CreateCampaignForm {
  title: string;
  shortDescription: string;
  description: string;
  goal: number;
  deadline: string;
  categoryId: string;
  images: File[];
  tags: string[];
}

export interface DonationForm {
  amount: number;
  donorName: string;
  donorEmail: string;
  message?: string;
  anonymous: boolean;
  paymentMethod: 'card' | 'university_account';
}

export interface FilterOptions {
  category?: string;
  status?: string;
  sortBy?: 'newest' | 'deadline' | 'raised' | 'goal';
  search?: string;
  priceRange?: [number, number];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}