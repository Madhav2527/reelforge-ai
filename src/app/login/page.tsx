import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-background">
      {/* Visual Side */}
      <div className="hidden md:flex flex-1 relative overflow-hidden bg-card border-r border-white/5 items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="relative z-10 max-w-lg">
          <Link href="/" className="flex items-center gap-2 mb-12">
            <Image src="/icon.png" alt="ReelForge AI Logo" width={40} height={40} className="rounded-md" />
            <span className="font-bold text-2xl tracking-tight text-white">
              Reel<span className="text-primary">Forge</span>
            </span>
          </Link>
          <h1 className="text-4xl font-bold font-outfit text-white mb-6">Welcome back to the forge.</h1>
          <p className="text-lg text-muted-foreground">Log in to access your saved projects, content calendars, and generate new viral scripts.</p>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center md:text-left md:hidden mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <Image src="/icon.png" alt="ReelForge AI Logo" width={32} height={32} className="rounded-md" />
              <span className="font-bold text-xl tracking-tight text-white">ReelForge</span>
            </Link>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Sign in to your account</h2>
            <p className="text-muted-foreground text-sm">Enter your email and password to access your dashboard.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email</label>
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-sm font-medium text-muted-foreground">Password</label>
                <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
              </div>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-background border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
            <Link href="/dashboard" className="block pt-2">
              <Button className="w-full" variant="glow">Sign In</Button>
            </Link>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account? <Link href="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
