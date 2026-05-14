import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card/30 border-t border-white/5 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/icon.png" alt="ReelForge AI Logo" width={32} height={32} className="rounded-md" />
              <span className="font-bold text-xl tracking-tight text-white">
                Reel<span className="text-primary">Forge</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              AI-powered video creation for modern brands. Generate viral content in seconds.
            </p>
            <div className="flex gap-4 text-sm font-medium text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-primary transition-colors">YouTube</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/use-cases" className="hover:text-white transition-colors">Use Cases</Link></li>
              <li><Link href="/templates" className="hover:text-white transition-colors">Templates</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ReelForge AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
