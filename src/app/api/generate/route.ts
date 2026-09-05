import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { niche, audience, vibe } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GEMINI_API_KEY. Please add it to your .env.local file.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Using the fastest, most cost-effective model (which is free in the free tier)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are an expert YouTube Shorts and Instagram Reels strategist. 
    Create a highly engaging, viral 15-second video script based on these details:
    - Niche/Business: ${niche || 'General Creator'}
    - Target Audience: ${audience || 'Everyone'}
    - Vibe/Tone: ${vibe || 'Fast-paced'}

    Format your response exactly like this, using plain text (no markdown symbols if possible):
    HOOK: [Write a 1-sentence scroll-stopping hook]
    
    VISUALS: [Describe what the viewer sees on screen]
    
    VOICEOVER: [Write the exact script to be spoken]
    
    CAPTION: [Write a highly engaging caption with a Call to Action]
    
    HASHTAGS: [Provide 5 trending hashtags]`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ result: responseText });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate content.' },
      { status: 500 }
    );
  }
}
