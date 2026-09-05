"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Film, Sparkles, AlertCircle, PlayCircle } from "lucide-react"

export default function VideoMakerPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [prompt, setPrompt] = useState("")
  
  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setIsGenerating(false)
      alert("Notice: Generating actual .mp4 video files requires a paid API like Replicate or HeyGen. This free version currently generates the scripts and concepts for you to edit!")
    }, 1500)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">AI Video Maker</h1>
          <p className="text-muted-foreground">Turn your text ideas directly into rendered video files.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">What should the video be about?</label>
            <textarea 
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A cinematic hyper-realistic shot of a coffee cup steaming on a wooden table in a busy cafe, 4k resolution..." 
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white" 
            onClick={handleGenerate} 
            disabled={isGenerating || !prompt}
          >
            {isGenerating ? <Sparkles className="mr-2 animate-spin" size={18} /> : <Film className="mr-2" size={18} />}
            {isGenerating ? "Rendering Video..." : "Generate .MP4 Video"}
          </Button>

          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-start gap-3">
            <AlertCircle className="text-yellow-500 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-yellow-200/80">
              <strong className="text-yellow-500">Important Note:</strong> Generating actual video files requires intense cloud computing. To make this button return a real video, you must connect a paid video API (like Replicate, Runway, or Luma).
            </p>
          </div>
        </div>

        {/* Output */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[400px] bg-black/40">
          <PlayCircle className="text-white/20 mb-4" size={64} />
          <h3 className="text-xl font-medium text-white/50">Your Video Preview</h3>
          <p className="text-sm text-white/30 mt-2">Enter a prompt and click generate to render.</p>
        </div>
      </div>
    </div>
  )
}
