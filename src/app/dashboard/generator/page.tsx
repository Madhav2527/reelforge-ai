import { Video, Sparkles } from "lucide-react"

export default function GeneratorPage() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
        <Video size={40} className="text-primary" />
      </div>
      <h1 className="text-3xl font-bold font-outfit text-white mb-4">Script Generator</h1>
      <p className="text-muted-foreground max-w-lg mb-8">
        The advanced script generator is currently being upgraded. Soon you'll be able to generate full 10-minute YouTube scripts with precise pacing and B-roll cues.
      </p>
      <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
        <Sparkles size={18} /> Notify Me When Live
      </button>
    </div>
  )
}
