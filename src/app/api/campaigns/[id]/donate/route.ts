import { NextRequest, NextResponse } from 'next/server';
import { donationSchema } from '@/lib/validations';

export async function POST(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  try {
    const body = await request.json();
    
    // Validate the donation data
    const validationResult = donationSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Invalid donation data',
          details: validationResult.error.errors
        },
        { status: 400 }
      );
    }

    const donationData = validationResult.data;
    
    // In a real application, this would:
    // 1. Process the payment through a payment gateway
    // 2. Create a donation record in the database
    // 3. Update the campaign's raised amount
    // 4. Send confirmation emails
    
    console.log('Processing donation for campaign:', params.id, donationData);
    
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock successful donation response
    const donation = {
      id: Math.random().toString(36).substring(2, 11),
      campaignId: params.id,
      ...donationData,
      paymentStatus: 'completed',
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      data: donation,
      message: 'Donation processed successfully'
    });
  } catch (error) {
    console.error('Error processing donation:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process donation'
      },
      { status: 500 }
    );
  }
}