"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Film, Sparkles, Lock, CheckCircle2 } from "lucide-react"

export default function VideoMakerClient({ currencySymbol, price, country }: { currencySymbol: string, price: string, country: string }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="max-w-6xl mx-auto relative">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">AI Video Maker</h1>
          <p className="text-muted-foreground">Turn your text ideas directly into rendered video files.</p>
        </div>
      </div>

      {/* Paywall Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center pt-24 pb-12 px-4">
        <div className="glass-card p-8 rounded-3xl border border-purple-500/30 max-w-md w-full text-center shadow-2xl shadow-purple-500/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
          
          <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
            <Lock className="text-purple-400" size={32} />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-2">Unlock Video Rendering</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Generating full .mp4 video files requires heavy cloud computing. Upgrade to Pro to unlock this feature.
          </p>

          <div className="bg-[#0a0a0f] rounded-2xl p-6 border border-white/5 mb-6">
            <div className="text-4xl font-bold text-white mb-1">
              {currencySymbol}{price} <span className="text-sm font-normal text-muted-foreground">/ month</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Cancel anytime.</p>
            
            <div className="space-y-3 text-sm text-left">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-emerald-400" size={16} /> Generate up to 30 videos/mo
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-emerald-400" size={16} /> 4K Cinematic Quality
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="text-emerald-400" size={16} /> Commercial Use License
              </div>
            </div>
          </div>

          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 text-lg rounded-xl transition-all hover:scale-[1.02]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? "Redirecting to Stripe..." : "Upgrade to Pro"}
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4 opacity-50">
            Detected Region: {country === 'IN' ? 'India' : country === 'US' ? 'United States' : country}
          </p>
        </div>
      </div>

      {/* Blurred Background UI to show what they are missing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 blur-sm select-none opacity-40 pointer-events-none">
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-foreground mb-2">What should the video be about?</label>
            <textarea 
              rows={5}
              disabled
              placeholder="e.g. A cinematic hyper-realistic shot of a coffee cup steaming on a wooden table in a busy cafe, 4k resolution..." 
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white resize-none"
            />
          </div>
          <Button className="w-full bg-purple-600 text-white" disabled>
            <Film className="mr-2" size={18} />
            Generate .MP4 Video
          </Button>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[400px] bg-black/40">
          <Film className="text-white/20 mb-4" size={64} />
          <h3 className="text-xl font-medium text-white/50">Video Canvas</h3>
        </div>
      </div>
    </div>
  )
}
