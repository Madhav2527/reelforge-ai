"use client"

import Link from "next/link"
import { Video, PenTool, Hash, Film, Sparkles, TrendingUp, Zap, Crown, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const FREE_LIMIT = 2

export default function DashboardPage() {
  const [usageCount, setUsageCount] = useState(0)
  const [pricing, setPricing] = useState({ symbol: '$', price: '4.99', perGen: '0.99' })

  useEffect(() => {
    const count = parseInt(localStorage.getItem('rf_gen_count') || '0', 10)
    setUsageCount(count)

    // Detect country client-side using free API
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code === 'IN') {
          setPricing({ symbol: '₹', price: '49', perGen: '9' })
        }
      })
      .catch(() => {}) // Silently fallback to USD
  }, [])

  const remaining = Math.max(0, FREE_LIMIT - usageCount)
  const isLocked = usageCount >= FREE_LIMIT
  const usagePercent = Math.min(100, (usageCount / FREE_LIMIT) * 100)

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Welcome */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/10 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-3">
            Welcome to Reel<span className="text-primary">Forge</span> AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-6">
            Your free AI-powered content studio. Generate viral scripts, captions, hashtags, and create stunning videos — all in one place.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/dashboard/generator">
              <Button variant="glow" className="gap-2">
                <Sparkles size={16} /> Start Creating
              </Button>
            </Link>
            <Link href="/dashboard/video">
              <Button variant="outline" className="gap-2">
                <Film size={16} /> Video Tools
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Usage Tracker + Upgrade Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Usage Card */}
        <div className="md:col-span-2 glass-card p-6 rounded-2xl border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
              <Zap size={18} className="text-primary" /> Your Free Usage
            </h2>
            <span className="text-sm text-muted-foreground">{usageCount}/{FREE_LIMIT} generations used</span>
          </div>
          
          <div className="w-full h-3 rounded-full bg-white/5 mb-4 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ${isLocked ? 'bg-red-500' : 'bg-gradient-to-r from-primary to-emerald-400'}`}
              style={{ width: `${usagePercent}%` }}
            />
          </div>

          {isLocked ? (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
              <p className="text-red-400 text-sm font-medium">You have used all {FREE_LIMIT} free generations. Upgrade to Pro for unlimited access.</p>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              You have <strong className="text-emerald-400">{remaining} free generation{remaining !== 1 ? 's' : ''}</strong> remaining. Make them count!
            </p>
          )}
        </div>

        {/* Upgrade Card */}
        <div className="glass-card p-6 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Crown size={18} className="text-yellow-400" />
              <h3 className="font-bold text-white">Pro Plan</h3>
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {pricing.symbol}{pricing.price}<span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">Or {pricing.symbol}{pricing.perGen} per single generation</p>
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-xl">
            Upgrade Now
          </Button>
        </div>
      </div>

      {/* Tool Cards */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <TrendingUp size={20} className="text-primary" /> Your AI Tools
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href="/dashboard/generator" className="group">
            <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:scale-[1.02] h-full">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                <Video size={20} className="text-primary" />
              </div>
              <h3 className="font-semibold text-white mb-1">Script Generator</h3>
              <p className="text-xs text-muted-foreground mb-3">Generate viral Reel and Shorts scripts with AI.</p>
              <span className="text-xs text-primary flex items-center gap-1">Create Script <ArrowRight size={12} /></span>
            </div>
          </Link>

          <Link href="/dashboard/captions" className="group">
            <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all hover:scale-[1.02] h-full">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-3 group-hover:bg-blue-500/20 transition-colors">
                <PenTool size={20} className="text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Captions & Hooks</h3>
              <p className="text-xs text-muted-foreground mb-3">Scroll-stopping captions that boost engagement.</p>
              <span className="text-xs text-blue-400 flex items-center gap-1">Write Captions <ArrowRight size={12} /></span>
            </div>
          </Link>

          <Link href="/dashboard/hashtags" className="group">
            <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all hover:scale-[1.02] h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3 group-hover:bg-emerald-500/20 transition-colors">
                <Hash size={20} className="text-emerald-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">Trending Hashtags</h3>
              <p className="text-xs text-muted-foreground mb-3">Find the perfect tags to break the algorithm.</p>
              <span className="text-xs text-emerald-400 flex items-center gap-1">Find Tags <ArrowRight size={12} /></span>
            </div>
          </Link>

          <Link href="/dashboard/video" className="group">
            <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all hover:scale-[1.02] h-full">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-3 group-hover:bg-purple-500/20 transition-colors">
                <Film size={20} className="text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-1">AI Video Maker</h3>
              <p className="text-xs text-muted-foreground mb-3">Free tools to turn your scripts into real videos.</p>
              <span className="text-xs text-purple-400 flex items-center gap-1">Make Videos <ArrowRight size={12} /></span>
            </div>
          </Link>
        </div>
      </div>

      {/* Pro Benefits */}
      <div className="glass-card p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-bold text-white mb-4">Why Go Pro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Unlimited AI script generations",
            "Priority speed (no queue)",
            "Advanced viral analysis",
            "Trending audio suggestions",
            "Competitor content breakdown",
            "Cancel anytime"
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
