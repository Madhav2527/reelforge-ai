import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!process.env.LUMA_API_KEY) {
      return NextResponse.json(
        { error: 'Missing LUMA_API_KEY in environment variables.' },
        { status: 400 }
      );
    }

    const response = await fetch('https://api.lumalabs.ai/dream-machine/v1/generations', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${process.env.LUMA_API_KEY}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        prompt: prompt,
        model: 'ray-2',
        resolution: '720p',
        duration: '5s'
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || 'Failed to generate video with Luma');
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Luma API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
