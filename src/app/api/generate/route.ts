import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

// Initialize OpenAI client
// Note: This requires an OPENAI_API_KEY in your .env.local file
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'dummy_key_to_prevent_crash',
});

export async function POST(req: Request) {
  try {
    const { niche, audience, vibe } = await req.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'Missing OPENAI_API_KEY. Please add it to your .env.local file.' },
        { status: 400 }
      );
    }

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

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
    });

    return NextResponse.json({ result: response.choices[0].message.content });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate content.' },
      { status: 500 }
    );
  }
}
