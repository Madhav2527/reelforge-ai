import { Hash, Sparkles } from "lucide-react"

export default function HashtagsPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
        <Hash size={40} className="text-emerald-400" />
      </div>
      <h1 className="text-3xl font-bold font-outfit text-white mb-4">Trending Hashtags</h1>
      <p className="text-muted-foreground max-w-lg mb-8">
        We're currently syncing with the latest TikTok and Instagram APIs to bring you real-time hashtag analytics. Check back shortly!
      </p>
      <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
        <Sparkles size={18} /> Notify Me When Live
      </button>
    </div>
  )
}
