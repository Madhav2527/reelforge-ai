"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Hash, Copy, Sparkles, Crown, Lock } from "lucide-react"

const FREE_LIMIT = 2

export default function HashtagsPage() {
  const [isGenerating, setIsGenerating] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [usageCount, setUsageCount] = useState(0)
  const [showPaywall, setShowPaywall] = useState(false)
  
  const [niche, setNiche] = useState("")
  const [audience, setAudience] = useState("")

  useEffect(() => {
    const count = parseInt(localStorage.getItem('rf_gen_count') || '0', 10)
    setUsageCount(count)
  }, [])
  
  const handleGenerate = async () => {
    if (usageCount >= FREE_LIMIT) {
      setShowPaywall(true)
      return
    }

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
      if (!response.ok) throw new Error(data.error || 'Something went wrong')
      
      setResult(data.result)
      const newCount = usageCount + 1
      localStorage.setItem('rf_gen_count', newCount.toString())
      setUsageCount(newCount)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setIsGenerating(false)
    }
  }

  const remaining = Math.max(0, FREE_LIMIT - usageCount)

  return (
    <div className="max-w-6xl mx-auto">
      {showPaywall && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowPaywall(false)}>
          <div className="bg-[#0d0d14] border border-purple-500/30 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-purple-500/10" onClick={(e) => e.stopPropagation()}>
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-6">
              <Crown className="text-yellow-400" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Free Limit Reached</h2>
            <p className="text-muted-foreground text-sm mb-6">You have used all {FREE_LIMIT} free generations. Upgrade to Pro for unlimited AI content.</p>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 text-lg rounded-xl mb-3">
              Upgrade to Pro
            </Button>
            <button className="text-xs text-muted-foreground hover:text-white transition-colors" onClick={() => setShowPaywall(false)}>Maybe later</button>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">Trending Hashtags</h1>
          <p className="text-muted-foreground">Find the exact tags to break the algorithm.</p>
        </div>
        <span className={`text-sm font-medium ${remaining > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
          {remaining > 0 ? `${remaining} free left` : 'Limit reached'}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Niche</label>
              <input type="text" value={niche} onChange={(e) => setNiche(e.target.value)} placeholder="e.g. Fitness" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Audience</label>
              <input type="text" value={audience} onChange={(e) => setAudience(e.target.value)} placeholder="e.g. Beginners" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-2 focus:ring-primary outline-none" />
            </div>
            <Button className="w-full" onClick={handleGenerate} disabled={isGenerating}>
              {isGenerating ? "Analyzing..." : usageCount >= FREE_LIMIT ? <><Lock className="mr-2" size={16}/> Upgrade to Generate</> : "Find Hashtags"}
            </Button>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="glass-card p-6 rounded-2xl border border-white/10 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/5">
              <h2 className="text-xl font-semibold text-white">Targeted Hashtag Clusters</h2>
              {result && <Button variant="outline" size="sm" onClick={() => navigator.clipboard.writeText(result)}><Copy size={16} className="mr-2"/> Copy All</Button>}
            </div>
            {isGenerating ? (
              <div className="flex-1 flex flex-col items-center justify-center"><Sparkles className="animate-pulse text-primary mb-4" size={32} /><p className="text-muted-foreground">Scraping trending tags...</p></div>
            ) : error ? (
              <div className="flex-1 flex flex-col items-center justify-center"><div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">{error}</div></div>
            ) : result ? (
              <div className="flex-1 overflow-y-auto pr-2 text-white whitespace-pre-wrap leading-relaxed">{result}</div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center opacity-50"><Hash size={48} className="text-muted-foreground mb-4" /><p className="text-muted-foreground">Fill out the details to generate targeted hashtags.</p></div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
