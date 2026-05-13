import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/icon.png" alt="ReelForge AI Logo" width={32} height={32} className="rounded-md" />
              <span className="font-bold text-xl tracking-tight text-white">ReelForge</span>
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Create your account</h2>
            <p className="text-muted-foreground text-sm">Start your free trial today. No credit card required.</p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">First Name</label>
                <input 
                  type="text" 
                  placeholder="John" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Doe" 
                  className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
              <p className="text-xs text-muted-foreground mt-1.5">Must be at least 8 characters.</p>
            </div>
            <Link href="/dashboard" className="block pt-2">
              <Button className="w-full" variant="glow">Start Free Trial</Button>
            </Link>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-primary hover:underline">Log in</Link>
          </p>
        </div>
      </div>

      {/* Visual Side */}
      <div className="hidden md:flex flex-1 relative overflow-hidden bg-card border-l border-white/5 items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>
        <div className="relative z-10 max-w-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-8 mx-auto shadow-[0_0_30px_rgba(6,182,212,0.3)]">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-3xl font-bold font-outfit text-white mb-4">Join 10,000+ Creators</h2>
          <p className="text-lg text-muted-foreground mb-8">Stop struggling with content ideas. Let AI generate your next viral hit while you focus on your business.</p>
          
          <div className="glass p-6 rounded-xl border border-white/10 text-left">
            <div className="flex gap-1 text-yellow-500 mb-3">
              ★★★★★
            </div>
            <p className="text-sm italic mb-4">"ReelForge AI completely changed how I run my agency. I can generate 30 days of high-quality content for a client in 10 minutes."</p>
            <p className="text-sm font-medium text-white">- David Chen, Marketing Agency Owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}
