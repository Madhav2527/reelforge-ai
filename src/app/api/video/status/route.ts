import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing generation ID' }, { status: 400 });
    }

    if (!process.env.LUMA_API_KEY) {
      return NextResponse.json(
        { error: 'Missing LUMA_API_KEY in environment variables.' },
        { status: 400 }
      );
    }

    const response = await fetch(`https://api.lumalabs.ai/dream-machine/v1/generations/${id}`, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${process.env.LUMA_API_KEY}`
      }
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to check video status');
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Luma Status Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
