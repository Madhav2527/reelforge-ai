import { PenTool, Sparkles } from "lucide-react"

export default function CaptionsPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6">
        <PenTool size={40} className="text-blue-400" />
      </div>
      <h1 className="text-3xl font-bold font-outfit text-white mb-4">Captions & Hooks</h1>
      <p className="text-muted-foreground max-w-lg mb-8">
        Crafting the perfect hook is an art. Our dedicated hook and caption engine is currently undergoing maintenance to bring you the latest viral trends.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
        <Sparkles size={18} /> Notify Me When Live
      </button>
    </div>
  )
}
