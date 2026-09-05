"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Video, PenTool, Hash, Calendar, Download, Copy, Sparkles, Zap, Image as ImageIcon } from "lucide-react"

export default function DashboardPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  // Form State
  const [niche, setNiche] = useState("")
  const [audience, setAudience] = useState("")
  const [vibe, setVibe] = useState("Energetic & Fast-paced")
  
  const handleGenerate = async () => {
    setIsGenerating(true)
    setError(null)
    setResult(null)
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, audience, vibe }),
      })
      
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }
      
      setResult(data.result)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsGenerating(false)
    }
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
          {isGenerating ? "Generating..." : "Generate Reel Script"}
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
                  value={niche}
                  onChange={(e) => setNiche(e.target.value)}
                  placeholder="e.g. Coffee Shop in Austin" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Target Audience</label>
                <input 
                  type="text" 
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  placeholder="e.g. College students, remote workers" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Vibe / Tone</label>
                <select 
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none"
                >
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
                  <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(result)}><Copy size={16} className="mr-2"/> Copy</Button>
                </div>
              )}
            </div>
            
            {isGenerating ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
                <h3 className="text-lg font-medium text-white mb-2">Forging Your Content...</h3>
                <p className="text-muted-foreground max-w-sm">Analyzing niche trends, writing viral hooks, and generating cinematic prompts.</p>
              </div>
            ) : error ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
                  <h3 className="font-bold mb-2">API Error</h3>
                  <p>{error}</p>
                </div>
              </div>
            ) : result ? (
              <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-white whitespace-pre-wrap font-medium leading-relaxed">
                  {result}
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
