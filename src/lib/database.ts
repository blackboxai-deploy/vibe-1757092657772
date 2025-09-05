import { Campaign, User, Donation, CampaignCategory } from '@/types';

// Mock database - In production, this would connect to a real database
export const categories: CampaignCategory[] = [
  {
    id: '1',
    name: 'Academic Research',
    description: 'Research projects, equipment, and academic conferences',
    icon: '🔬',
    color: 'bg-blue-500'
  },
  {
    id: '2',
    name: 'Student Organizations',
    description: 'Club activities, events, and organizational needs',
    icon: '👥',
    color: 'bg-green-500'
  },
  {
    id: '3',
    name: 'Community Outreach',
    description: 'Service projects and community engagement initiatives',
    icon: '🤝',
    color: 'bg-purple-500'
  },
  {
    id: '4',
    name: 'Campus Infrastructure',
    description: 'Campus improvements and facility upgrades',
    icon: '🏗️',
    color: 'bg-orange-500'
  },
  {
    id: '5',
    name: 'Student Support',
    description: 'Scholarships and student financial assistance',
    icon: '🎓',
    color: 'bg-indigo-500'
  },
  {
    id: '6',
    name: 'Technology',
    description: 'Tech equipment, software, and digital initiatives',
    icon: '💻',
    color: 'bg-cyan-500'
  }
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@university.edu',
    role: 'student',
    studentId: 'STU2024001',
    department: 'Computer Science',
    profileImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/343c984e-5b6b-4a21-be29-1d0491216bc9.png',
    createdAt: '2024-01-15T10:00:00Z',
    isVerified: true
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    email: 'michael.chen@university.edu',
    role: 'faculty',
    department: 'Biology',
    profileImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/85028f38-1f22-4ff2-ac94-e84a98dbbd8b.png',
    createdAt: '2024-01-10T09:00:00Z',
    isVerified: true
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    email: 'emily.rodriguez@university.edu',
    role: 'student',
    studentId: 'STU2024002',
    department: 'Environmental Science',
    profileImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/76d7cf9a-4730-4a60-8d31-d6347d1c47ff.png',
    createdAt: '2024-01-20T14:30:00Z',
    isVerified: true
  },
  {
    id: '4',
    name: 'James Wilson',
    email: 'james.wilson@gmail.com',
    role: 'donor',
    profileImage: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d426dd6e-a0f5-41a3-ad28-d455ef5f2fd9.png',
    createdAt: '2024-02-01T11:00:00Z',
    isVerified: true
  }
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Advanced AI Research Lab Equipment',
    shortDescription: 'High-performance computing cluster for machine learning research',
    description: 'Our Computer Science department is seeking funding to acquire state-of-the-art GPU computing equipment for our AI research lab. This equipment will enable groundbreaking research in machine learning, natural language processing, and computer vision. The lab will serve 50+ graduate students and faculty members, contributing to publications and industry partnerships.',
    goal: 25000,
    raised: 18750,
    deadline: '2024-06-30T23:59:59Z',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-15T16:30:00Z',
    category: categories[0],
    status: 'active',
    creatorId: '2',
    creator: mockUsers[1],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a286cd9c-355b-4c4f-8202-77b20623eb95.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/66c6cac3-911d-482d-b59d-824ab505c20c.png'
    ],
    tags: ['AI', 'Research', 'Technology', 'Graduate Studies'],
    donorCount: 47,
    updates: [],
    donations: [],
    featured: true,
    universityApproved: true
  },
  {
    id: '2',
    title: 'Student Environmental Club Tree Planting Initiative',
    shortDescription: 'Campus-wide sustainability project to plant 500 native trees',
    description: 'The Environmental Club is launching an ambitious project to plant 500 native trees across our campus. This initiative will improve air quality, provide natural habitat, and demonstrate our commitment to sustainability. We need funding for saplings, planting supplies, and maintenance equipment.',
    goal: 8000,
    raised: 6200,
    deadline: '2024-05-15T23:59:59Z',
    createdAt: '2024-01-25T14:00:00Z',
    updatedAt: '2024-02-10T12:00:00Z',
    category: categories[2],
    status: 'active',
    creatorId: '3',
    creator: mockUsers[2],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13c584b5-5c8d-4607-8961-73e9f528d34f.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9692825e-d617-45c7-8123-84a2fc3a3da2.png'
    ],
    tags: ['Environment', 'Sustainability', 'Community', 'Campus'],
    donorCount: 32,
    updates: [],
    donations: [],
    featured: true,
    universityApproved: true
  },
  {
    id: '3',
    title: 'Scholarship Fund for First-Generation Students',
    shortDescription: 'Supporting students who are first in their family to attend college',
    description: 'This scholarship fund aims to provide financial assistance to first-generation college students who face unique challenges. The fund will cover tuition, books, and living expenses, helping to ensure these students can focus on their studies without financial stress.',
    goal: 50000,
    raised: 12500,
    deadline: '2024-08-31T23:59:59Z',
    createdAt: '2024-01-30T09:00:00Z',
    updatedAt: '2024-02-12T15:45:00Z',
    category: categories[4],
    status: 'active',
    creatorId: '1',
    creator: mockUsers[0],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/47064ad6-f43a-4dc3-893e-17f7970604e5.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2a97ad53-1936-4314-b89d-9ace66ea3b7e.png'
    ],
    tags: ['Scholarship', 'Education', 'First-Generation', 'Support'],
    donorCount: 28,
    updates: [],
    donations: [],
    featured: false,
    universityApproved: true
  },
  {
    id: '4',
    title: 'New Student Recreation Center Equipment',
    shortDescription: 'Modern fitness equipment for improved student health and wellness',
    description: 'Our student recreation center needs updated fitness equipment to better serve our growing student population. The new equipment will include cardio machines, strength training equipment, and group fitness accessories to promote student health and wellness.',
    goal: 35000,
    raised: 8900,
    deadline: '2024-07-01T23:59:59Z',
    createdAt: '2024-02-05T11:30:00Z',
    updatedAt: '2024-02-14T10:15:00Z',
    category: categories[3],
    status: 'active',
    creatorId: '2',
    creator: mockUsers[1],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a2a4e539-eeed-410a-8e71-a4e3ad009540.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/13afb42f-f6be-46a9-af9a-e813b50cf4dc.png'
    ],
    tags: ['Fitness', 'Health', 'Recreation', 'Student Life'],
    donorCount: 19,
    updates: [],
    donations: [],
    featured: false,
    universityApproved: true
  },
  {
    id: '5',
    title: 'Engineering Robotics Competition Team',
    shortDescription: 'Funding for robotics team to compete in national championships',
    description: 'Our engineering robotics team has qualified for the national championships! We need funding for travel expenses, competition fees, and final robot improvements. This is a fantastic opportunity to showcase our university\'s engineering excellence on a national stage.',
    goal: 15000,
    raised: 11200,
    deadline: '2024-04-30T23:59:59Z',
    createdAt: '2024-02-08T13:00:00Z',
    updatedAt: '2024-02-16T17:20:00Z',
    category: categories[1],
    status: 'active',
    creatorId: '1',
    creator: mockUsers[0],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2863dabc-7702-4f4a-b3dc-e92dd07b9897.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/55543444-f813-4cc5-840e-fb1974a3d1cf.png'
    ],
    tags: ['Engineering', 'Robotics', 'Competition', 'STEM'],
    donorCount: 41,
    updates: [],
    donations: [],
    featured: true,
    universityApproved: true
  },
  {
    id: '6',
    title: 'Digital Arts Studio Upgrade',
    shortDescription: 'Professional software and equipment for digital arts students',
    description: 'The Digital Arts program needs updated software licenses and professional equipment to keep pace with industry standards. This upgrade will include design software, drawing tablets, 4K monitors, and specialized audio equipment for multimedia projects.',
    goal: 22000,
    raised: 5600,
    deadline: '2024-09-15T23:59:59Z',
    createdAt: '2024-02-10T10:45:00Z',
    updatedAt: '2024-02-17T14:30:00Z',
    category: categories[5],
    status: 'active',
    creatorId: '3',
    creator: mockUsers[2],
    images: [
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6bc1c632-52d3-4bab-b970-7aaf42bcb955.png',
      'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bf024041-b1d5-4c4a-8c34-2284cf3ca7f3.png'
    ],
    tags: ['Arts', 'Digital', 'Technology', 'Creative'],
    donorCount: 15,
    updates: [],
    donations: [],
    featured: false,
    universityApproved: true
  }
];

// Mock donations
export const mockDonations: Donation[] = [
  {
    id: '1',
    campaignId: '1',
    donorId: '4',
    donorName: 'James Wilson',
    donorEmail: 'james.wilson@gmail.com',
    amount: 500,
    message: 'Excited to support AI research at the university!',
    anonymous: false,
    createdAt: '2024-02-15T14:30:00Z',
    paymentStatus: 'completed',
    paymentMethod: 'card'
  },
  {
    id: '2',
    campaignId: '1',
    donorName: 'Anonymous Donor',
    donorEmail: 'anonymous@donor.com',
    amount: 1000,
    anonymous: true,
    createdAt: '2024-02-14T09:15:00Z',
    paymentStatus: 'completed',
    paymentMethod: 'card'
  },
  {
    id: '3',
    campaignId: '2',
    donorId: '4',
    donorName: 'James Wilson',
    donorEmail: 'james.wilson@gmail.com',
    amount: 100,
    message: 'Great environmental initiative!',
    anonymous: false,
    createdAt: '2024-02-12T16:45:00Z',
    paymentStatus: 'completed',
    paymentMethod: 'card'
  }
];

// Database query functions
export async function getCampaigns(filters?: any): Promise<Campaign[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100));
  
  let filteredCampaigns = [...mockCampaigns];
  
  if (filters?.category) {
    filteredCampaigns = filteredCampaigns.filter(c => c.category.id === filters.category);
  }
  
  if (filters?.status) {
    filteredCampaigns = filteredCampaigns.filter(c => c.status === filters.status);
  }
  
  if (filters?.search) {
    const searchTerm = filters.search.toLowerCase();
    filteredCampaigns = filteredCampaigns.filter(c => 
      c.title.toLowerCase().includes(searchTerm) ||
      c.description.toLowerCase().includes(searchTerm) ||
      c.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }
  
  // Sort campaigns
  if (filters?.sortBy) {
    filteredCampaigns.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'deadline':
          return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
        case 'raised':
          return b.raised - a.raised;
        case 'goal':
          return b.goal - a.goal;
        default:
          return 0;
      }
    });
  }
  
  return filteredCampaigns;
}

export async function getCampaignById(id: string): Promise<Campaign | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockCampaigns.find(c => c.id === id) || null;
}

export async function getFeaturedCampaigns(): Promise<Campaign[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockCampaigns.filter(c => c.featured && c.status === 'active');
}

export async function getDonationsByCampaign(campaignId: string): Promise<Donation[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockDonations.filter(d => d.campaignId === campaignId);
}

export async function getUserById(id: string): Promise<User | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return mockUsers.find(u => u.id === id) || null;
}

export async function getCategories(): Promise<CampaignCategory[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return categories;
}