"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Hash, Copy, Sparkles, AlertCircle } from "lucide-react"

export default function HashtagsPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const [niche, setNiche] = useState("")
  const [audience, setAudience] = useState("")
  
  const handleGenerate = async () => {
    setIsGenerating(true)
    setError(null)
    setResult(null)
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ niche, audience, mode: 'hashtags' }),
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
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">Trending Hashtags</h1>
          <p className="text-muted-foreground">Find the exact tags to break the algorithm.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Niche</label>
                <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g. Fitness" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Audience</label>
                <input type="text" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g. Beginners" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <Button className="w-full" variant="default" onClick={handleGenerate} disabled={isGenerating}>
                {isGenerating ? "Analyzing..." : "Find Hashtags"}
              </Button>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="glass-card p-6 rounded-2xl border border-white/10 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <h2 className="text-xl font-semibold text-white">Targeted Hashtag Clusters</h2>
              {result && (
                <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(result)}><Copy size={16} className="mr-2"/> Copy All</Button>
              )}
            </div>
            
            {isGenerating ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <Sparkles className="animate-pulse text-primary mb-4" size={32} />
                <p className="text-muted-foreground">Scraping trending tags...</p>
              </div>
            ) : error ? (
               <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <AlertCircle className="text-red-500 mb-2" size={32} />
                  <p className="text-red-400">{error}</p>
               </div>
            ) : result ? (
              <div className="flex-1 overflow-y-auto pr-2 text-white whitespace-pre-wrap leading-relaxed">
                {result}
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50">
                <Hash size={48} className="text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Fill out the details to generate targeted hashtag clusters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
