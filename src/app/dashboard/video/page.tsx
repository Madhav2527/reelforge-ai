"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Film, ExternalLink, Sparkles, Star } from "lucide-react"

const FREE_TOOLS = [
  {
    name: "PixVerse",
    url: "https://pixverse.ai",
    desc: "Generate 4-second cinematic AI videos for free. No credit card needed.",
    tag: "Best for Reels",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Haiper AI",
    url: "https://haiper.ai",
    desc: "Create 2-4 second HD AI videos from text prompts. Completely free tier.",
    tag: "Fastest",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Pika",
    url: "https://pika.art",
    desc: "Generate and edit short AI videos. Free plan gives you credits daily.",
    tag: "Most Creative",
    color: "from-orange-500 to-yellow-500"
  },
  {
    name: "CapCut (Free Editor)",
    url: "https://www.capcut.com",
    desc: "Free video editor with AI effects, auto-captions, transitions. Perfect for Reels/Shorts.",
    tag: "Best Editor",
    color: "from-emerald-500 to-green-500"
  },
  {
    name: "InVideo AI",
    url: "https://invideo.io",
    desc: "Type a topic and it generates a full video with stock footage, voiceover, and music.",
    tag: "Full Auto",
    color: "from-red-500 to-pink-500"
  },
  {
    name: "Canva Video",
    url: "https://www.canva.com/video-editor",
    desc: "Drag-and-drop video maker with thousands of free templates for social media.",
    tag: "Easiest",
    color: "from-violet-500 to-purple-500"
  }
]

export default function VideoMakerPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">AI Video Maker</h1>
          <p className="text-muted-foreground">Use these 100% free tools to turn your AI scripts into real videos.</p>
        </div>
      </div>

      <div className="mb-8 p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5">
        <h2 className="text-lg font-bold text-emerald-400 mb-2 flex items-center gap-2"><Sparkles size={20}/> Your Free Workflow</h2>
        <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
          <li><strong>Generate your script</strong> using the Script Generator tab (powered by free Groq AI).</li>
          <li><strong>Generate captions and hashtags</strong> using the other free tabs.</li>
          <li><strong>Create your video</strong> using any of the free AI tools below.</li>
          <li><strong>Upload to YouTube/Instagram</strong> with your AI-generated caption and hashtags.</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FREE_TOOLS.map((tool) => (
          <a 
            key={tool.name} 
            href={tool.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-card p-5 rounded-2xl border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02] cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                  <Film size={16} className="text-white" />
                </div>
                <h3 className="font-bold text-white">{tool.name}</h3>
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-white transition-colors" />
            </div>
            <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
            <span className={`inline-block text-xs px-2.5 py-1 rounded-full bg-gradient-to-r ${tool.color} text-white font-medium`}>
              {tool.tag}
            </span>
          </a>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 text-center">
        <p className="text-sm text-muted-foreground">
          All tools above are <strong className="text-white">100% free</strong> with no credit card required.
          Combined with your free ReelForge AI scripts, you have a complete content creation pipeline at zero cost.
        </p>
      </div>
    </div>
  )
}
