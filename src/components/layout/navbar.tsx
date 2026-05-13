import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass border-b-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
          <Image src="/icon.png" alt="ReelForge AI Logo" width={32} height={32} className="rounded-md" />
          <span className="font-bold text-xl tracking-tight text-white">
            Reel<span className="text-primary">Forge</span> <span className="text-gradient">AI</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link>
          <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">Log in</Button>
          </Link>
          <Link href="/signup">
            <Button variant="glow">Start Free Trial</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
