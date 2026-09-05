"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Film, Sparkles, AlertCircle, PlayCircle, Download } from "lucide-react"

export default function VideoMakerClient({ currencySymbol, price, country }: { currencySymbol: string, price: string, country: string }) {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [videoUrl, setVideoUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  
  const handleGenerate = async () => {
    setIsGenerating(true)
    setError(null)
    setStatus("Initializing AI Engine...")
    setVideoUrl(null)

    try {
      // Step 1: Trigger Generation
      const genRes = await fetch('/api/video/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      
      const genData = await genRes.json();
      if (!genRes.ok) throw new Error(genData.error || 'Failed to start generation');
      
      const jobId = genData.id;
      if (!jobId) throw new Error('No Job ID returned from Luma');

      setStatus("Rendering Video (This takes 1-3 minutes)...");

      // Step 2: Poll for status
      const pollInterval = setInterval(async () => {
        try {
          const statusRes = await fetch(`/api/video/status?id=${jobId}`);
          const statusData = await statusRes.json();
          
          if (statusData.state === 'completed' || statusData.state === 'success') {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setStatus(null);
            // Safely grab the video URL (adjust based on Luma's exact response structure)
            const url = statusData.assets?.video || statusData.video?.url || statusData.url;
            setVideoUrl(url);
          } else if (statusData.state === 'failed') {
            clearInterval(pollInterval);
            setIsGenerating(false);
            setStatus(null);
            setError("Luma API failed to render the video.");
          }
        } catch (pollErr) {
          console.error("Polling error", pollErr);
        }
      }, 5000); // Check every 5 seconds

    } catch (err: any) {
      setError(err.message);
      setIsGenerating(false);
      setStatus(null);
    }
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2">AI Video Maker (Luma)</h1>
          <p className="text-muted-foreground">Powered by Luma Dream Machine Ray-2 Model.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 space-y-6 flex flex-col">
          <div className="flex-1">
            <label className="block text-sm font-medium text-muted-foreground mb-2">What should the video be about?</label>
            <textarea 
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. an old lady laughing underwater, wearing a scuba diving suit..." 
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            />
          </div>
          
          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-6 text-lg rounded-xl transition-all" 
            onClick={handleGenerate} 
            disabled={isGenerating || !prompt}
          >
            {isGenerating ? <Sparkles className="mr-2 animate-spin" size={18} /> : <Film className="mr-2" size={18} />}
            {isGenerating ? "Rendering..." : "Generate 720p Video"}
          </Button>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400 text-sm">
              <AlertCircle size={18} className="shrink-0 mt-0.5" />
              <p>{error}</p>
            </div>
          )}
        </div>

        {/* Output */}
        <div className="glass-card p-6 rounded-2xl border border-white/10 flex flex-col items-center justify-center min-h-[400px] bg-black/40 relative overflow-hidden">
          {isGenerating ? (
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin mb-4"></div>
              <p className="text-white font-medium animate-pulse">{status}</p>
              <p className="text-xs text-muted-foreground mt-2">Do not refresh this page.</p>
            </div>
          ) : videoUrl ? (
            <div className="w-full h-full flex flex-col">
              <video 
                src={videoUrl} 
                controls 
                autoPlay 
                loop 
                className="w-full rounded-lg bg-black flex-1 object-contain"
              />
              <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-emerald-400 font-medium flex items-center gap-2">
                  <Sparkles size={16}/> Generation Complete
                </p>
                <a href={videoUrl} target="_blank" download>
                  <Button variant="outline" size="sm">
                    <Download size={16} className="mr-2" /> Download MP4
                  </Button>
                </a>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center text-center opacity-50">
              <PlayCircle className="text-white/50 mb-4" size={64} />
              <h3 className="text-xl font-medium text-white">Video Canvas</h3>
              <p className="text-sm text-muted-foreground mt-2">Your 5-second cinematic video will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
