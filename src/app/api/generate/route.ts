import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { niche, audience, vibe, mode } = await req.json();

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GEMINI_API_KEY. Please add it to your environment variables.' },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    let prompt = '';

    if (mode === 'captions') {
      prompt = `You are an expert social media copywriter. 
      Generate 3 highly engaging, viral Instagram/TikTok captions for a video in the "${niche}" niche, targeting "${audience}" with a "${vibe}" vibe.
      Format as:
      CAPTION 1: [Text]
      CAPTION 2: [Text]
      CAPTION 3: [Text]`;
    } else if (mode === 'hashtags') {
      prompt = `You are a social media growth expert.
      Generate 15 highly trending and targeted hashtags for a video in the "${niche}" niche, targeting "${audience}".
      Group them by:
      BROAD: [5 hashtags]
      NICHE: [5 hashtags]
      TRENDING: [5 hashtags]`;
    } else {
      // Default to script generator
      prompt = `You are an expert YouTube Shorts and Instagram Reels strategist. 
      Create a highly engaging, viral 15-second video script based on these details:
      - Niche/Business: ${niche || 'General Creator'}
      - Target Audience: ${audience || 'Everyone'}
      - Vibe/Tone: ${vibe || 'Fast-paced'}

      Format your response exactly like this:
      HOOK: [1-sentence scroll-stopping hook]
      VISUALS: [Describe what the viewer sees]
      VOICEOVER: [The exact script to be spoken]`;
    }

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
