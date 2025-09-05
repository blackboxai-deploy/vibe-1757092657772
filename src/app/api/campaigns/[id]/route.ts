import { NextRequest, NextResponse } from 'next/server';
import { getCampaignById } from '@/lib/database';

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  try {
    const campaign = await getCampaignById(params.id);

    if (!campaign) {
      return NextResponse.json(
        {
          success: false,
          error: 'Campaign not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: campaign
    });
  } catch (error) {
    console.error('Error fetching campaign:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch campaign'
      },
      { status: 500 }
    );
  }
}