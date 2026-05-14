"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video, PenTool, Hash, Calendar, Download, Copy, Sparkles, Zap, Image as ImageIcon } from "lucide-react"

export default function DashboardPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  
  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setResult("Sample output generated!")
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">Welcome back, Creator</h1>
          <p className="text-muted-foreground">What viral content are we making today?</p>
        </div>
        <Button variant="glow" onClick={handleGenerate} disabled={isGenerating}>
          <Sparkles className="mr-2" size={18} />
          {isGenerating ? "Generating..." : "Generate 30 Days of Content"}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Input Form */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold mb-4 text-white">Project Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Business / Niche</label>
                <input 
                  type="text" 
                  placeholder="e.g. Coffee Shop in Austin" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Target Audience</label>
                <input 
                  type="text" 
                  placeholder="e.g. College students, remote workers" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Vibe / Tone</label>
                <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                  <option>Energetic & Fast-paced</option>
                  <option>Aesthetic & Cinematic</option>
                  <option>Educational & Professional</option>
                  <option>Funny & Trendy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Product Photo (Optional)</label>
                <div className="border-2 border-dashed border-white/10 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer bg-white/5">
                  <ImageIcon className="mx-auto text-muted-foreground mb-2" size={24} />
                  <p className="text-sm text-muted-foreground">Click to upload or drag & drop</p>
                </div>
              </div>
              
              <Button className="w-full" variant="default" onClick={handleGenerate} disabled={isGenerating}>
                {isGenerating ? "Analyzing..." : "Generate Reel Script"}
              </Button>
            </div>
          </div>
        </div>

        {/* Results Area */}
        <div className="md:col-span-2">
          <div className="glass-card p-6 rounded-2xl border border-white/10 min-h-[500px] flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <h2 className="text-xl font-semibold text-white">Generated Content</h2>
              {result && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Copy size={16} className="mr-2"/> Copy</Button>
                  <Button variant="outline" size="sm"><Download size={16} className="mr-2"/> Export PDF</Button>
                </div>
              )}
            </div>
            
            {isGenerating ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                <h3 className="text-lg font-medium text-white mb-2">Forging Your Content...</h3>
                <p className="text-muted-foreground max-w-sm">Analyzing niche trends, writing viral hooks, and generating cinematic prompts.</p>
              </div>
            ) : result ? (
              <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-sm font-medium text-primary mb-2 flex items-center"><Zap size={14} className="mr-1"/> Viral Hook</h3>
                  <p className="text-white text-lg font-medium">"Stop scrolling! If you live in Austin and drink coffee, you're probably making this one huge mistake."</p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-sm font-medium text-secondary mb-2 flex items-center"><Video size={14} className="mr-1"/> Video Script (0:15s)</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><strong className="text-white">Visual 0:00-0:03:</strong> Fast zoom into a perfectly poured latte art breaking.</p>
                    <p><strong className="text-white">Audio:</strong> Trending CapCut audio (#4 on charts right now).</p>
                    <p><strong className="text-white">Voiceover:</strong> "Stop scrolling! If you live in Austin and drink coffee, you're probably making this one huge mistake."</p>
                    <p><strong className="text-white">Visual 0:03-0:08:</strong> B-roll of aesthetic cafe interior, showing customers working.</p>
                    <p><strong className="text-white">Voiceover:</strong> "You're paying $8 for basic beans. At RoastCraft, we source directly from single-origin farms."</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-sm font-medium text-primary mb-2 flex items-center"><PenTool size={14} className="mr-1"/> Caption & Ad Copy</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">
                    Don't settle for average coffee in the ATX. ☕️✨
                    
                    We just dropped our new single-origin Ethiopian roast and it's life-changing. Come visit us on 5th Street and mention this reel for 15% off your first cup!
                    
                    Save this post for your next coffee run! 👇
                  </p>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <h3 className="text-sm font-medium text-secondary mb-2 flex items-center"><Hash size={14} className="mr-1"/> Hashtags</h3>
                  <p className="text-sm text-muted-foreground">
                    #AustinCoffee #ATXLife #CoffeeRoasters #SpecialtyCoffee #AustinEats #TexasCoffee
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                <Video size={48} className="text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium text-white mb-2">No Content Yet</h3>
                <p className="text-muted-foreground max-w-sm">Fill out the project details on the left and click Generate to see the magic happen.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
