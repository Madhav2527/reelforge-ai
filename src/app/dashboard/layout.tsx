import Link from "next/link"
import Image from "next/image"
import { LayoutDashboard, Video, PenTool, Hash, Calendar, Settings, CreditCard, LogOut } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-card/20 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/icon.png" alt="ReelForge AI Logo" width={28} height={28} className="rounded-md" />
            <span className="font-bold text-lg tracking-tight text-white">
              Reel<span className="text-primary">Forge</span>
            </span>
          </Link>
        </div>
        
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <Link href="/dashboard" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium">
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link href="/dashboard/generator" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <Video size={18} />
            Script Generator
          </Link>
          <Link href="/dashboard/captions" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <PenTool size={18} />
            Captions & Hooks
          </Link>
          <Link href="/dashboard/hashtags" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <Hash size={18} />
            Trending Hashtags
          </Link>
          <Link href="/dashboard/calendar" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <Calendar size={18} />
            Content Calendar
          </Link>
        </div>
        
        <div className="p-4 border-t border-white/5 space-y-1">
          <div className="mb-4 px-3 py-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs text-muted-foreground mb-2">Credits Remaining</p>
            <div className="flex justify-between items-end">
              <span className="text-lg font-bold text-white">42<span className="text-sm text-muted-foreground font-normal">/50</span></span>
              <Link href="/dashboard/billing" className="text-xs text-primary hover:underline">Upgrade</Link>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full mt-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-primary to-secondary w-[84%]"></div>
            </div>
          </div>
          
          <Link href="/dashboard/billing" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <CreditCard size={18} />
            Billing
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={18} />
            Settings
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-red-400 hover:bg-red-400/10 transition-colors">
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar (Mobile) */}
        <header className="h-16 border-b border-white/5 bg-card/20 flex items-center px-4 md:hidden">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Image src="/icon.png" alt="ReelForge AI Logo" width={28} height={28} className="rounded-md" />
            <span className="font-bold text-lg text-white">ReelForge</span>
          </Link>
        </header>
        
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
