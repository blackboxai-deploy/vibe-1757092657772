import { NextRequest, NextResponse } from 'next/server';
import { getCampaigns } from '@/lib/database';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const filters = {
      category: searchParams.get('category') || undefined,
      status: searchParams.get('status') || undefined,
      sortBy: searchParams.get('sortBy') as any || undefined,
      search: searchParams.get('search') || undefined,
    };

    const campaigns = await getCampaigns(filters);

    return NextResponse.json({
      success: true,
      data: campaigns
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch campaigns'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // In a real application, this would create a new campaign in the database
    console.log('Creating campaign:', body);
    
    // Mock response
    const newCampaign = {
      id: Math.random().toString(36).substring(2, 11),
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      raised: 0,
      donorCount: 0,
      status: 'pending',
      universityApproved: false,
      featured: false,
      updates: [],
      donations: []
    };

    return NextResponse.json({
      success: true,
      data: newCampaign,
      message: 'Campaign created successfully'
    });
  } catch (error) {
    console.error('Error creating campaign:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create campaign'
      },
      { status: 500 }
    );
  }
}