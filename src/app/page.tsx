import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Sparkles, Video, PenTool, Hash, Calendar, Zap, CheckCircle2, Star, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex-1">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary mb-8 animate-fade-in-up">
            <Sparkles size={16} />
            <span>ReelForge AI 2.0 is now live</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 font-outfit text-white animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Forge <span className="text-gradient">Viral Video Content</span><br className="hidden md:block" /> in Seconds.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Upload a product photo or describe your business. Our AI instantly generates viral scripts, hooks, captions, and a 30-day content calendar.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Link href="/signup">
              <Button size="lg" variant="glow" className="w-full sm:w-auto text-lg px-8">
                Start For Free <ChevronRight className="ml-2" size={20} />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4 sm:mt-0 sm:ml-4">No credit card required.</p>
          </div>
          
          {/* Mockup Dashboard Preview */}
          <div className="mt-20 relative mx-auto max-w-5xl animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-20 animate-pulse-slow"></div>
            <div className="relative glass-card rounded-xl border border-white/10 p-2 md:p-4 shadow-2xl">
              <div className="aspect-video bg-[#0a0a0f] rounded-lg border border-white/5 flex items-center justify-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                 <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
                 <div className="text-center z-10">
                    <Video size={48} className="mx-auto text-primary/50 mb-4" />
                    <p className="text-muted-foreground font-medium">ReelForge Dashboard Preview</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Your Entire Content Team <span className="text-gradient">in One AI</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to dominate Instagram Reels and TikTok, generated instantly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Video size={24} className="text-primary" />, title: "Viral Reel Scripts", desc: "AI writes engaging scripts optimized for watch time and shares." },
              { icon: <Zap size={24} className="text-secondary" />, title: "Hook Generator", desc: "Stop the scroll with proven hooks tailored to your niche." },
              { icon: <PenTool size={24} className="text-primary" />, title: "Ad Copy & Captions", desc: "Persuasive captions with high-converting call-to-actions." },
              { icon: <Hash size={24} className="text-secondary" />, title: "Trending Hashtags", desc: "Discover low-competition, high-reach hashtags instantly." },
              { icon: <Calendar size={24} className="text-primary" />, title: "30-Day Content Calendar", desc: "Generate a month's worth of content ideas in one click." },
              { icon: <Sparkles size={24} className="text-secondary" />, title: "Cinematic Prompts", desc: "Get detailed prompts for Midjourney to create stunning visuals." },
            ].map((feature, i) => (
              <div key={i} className="glass p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 border border-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-center mb-16">Loved by <span className="text-gradient">Creators & Brands</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", role: "Coffee Shop Owner", quote: "I used to spend 5 hours a week planning Reels. Now I click 'Generate 30 Days' and I'm done. Traffic is up 40%!" },
              { name: "Mike T.", role: "Marketing Agency", quote: "The ROI on the Agency plan is insane. We manage 10 clients' content calendars completely through ReelForge AI." },
              { name: "Elena R.", role: "Fitness Influencer", quote: "The hook generator alone is worth the price. My last 3 Reels hit over 1M views using ReelForge scripts." }
            ].map((t, i) => (
              <div key={i} className="glass p-8 rounded-2xl relative">
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-lg italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-card/20 border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Simple, Transparent <span className="text-gradient">Pricing</span></h2>
            <p className="text-muted-foreground">Start for free, upgrade when you need more power.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Starter Plan */}
            <div className="glass p-8 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-muted-foreground mb-6">Perfect for small businesses and solo creators.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">₹999</span><span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['50 AI Credits/month', 'Basic Script Generator', 'Caption & Hashtags', 'Email Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full" variant="outline">Get Started</Button>
              </Link>
            </div>
            
            {/* Agency Plan */}
            <div className="glass-card p-8 rounded-3xl border-primary/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
              <h3 className="text-2xl font-bold mb-2">Agency</h3>
              <p className="text-muted-foreground mb-6">For agencies managing multiple clients.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">₹2999</span><span className="text-muted-foreground">/mo</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['Unlimited AI Credits', 'Advanced Script Generator', '30-Day Calendar Generator', 'Export to PDF', 'Priority Support'].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full" variant="glow">Upgrade to Agency</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-6">Ready to go viral?</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of creators who are scaling their reach with ReelForge AI.</p>
          <Link href="/signup">
            <Button size="lg" variant="glow" className="text-lg px-8">
              Generate Your First Reel Free
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
