import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { niche, audience, vibe, mode } = await req.json();

    // Now using Groq instead of Gemini!
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Missing GROQ_API_KEY in environment variables.' },
        { status: 400 }
      );
    }

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

    // Raw fetch to Groq API (OpenAI compatible)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile', // Using Meta's newest Llama 3.1 70B model
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      })
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate content from Groq');
    }

    const resultText = data.choices[0].message.content;

    return NextResponse.json({ result: resultText });
  } catch (error: any) {
    console.error('Groq API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Server error' },
      { status: 500 }
    );
  }
}
