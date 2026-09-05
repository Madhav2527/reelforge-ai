"use client"

import { useState } from "react"
import { Calendar as CalendarIcon, Video, CheckCircle2, Circle, Search, Filter } from "lucide-react"

// Data from the generated 30-day plan
const calendarData = [
  // Week 1
  { day: 1, type: "Short", title: "3 AI tools that feel illegal to know (for creators)", status: "pending", date: "Sept 6" },
  { day: 2, type: "Community", title: "Image poll: How many hours a week do you spend editing?", status: "pending", date: "Sept 7" },
  { day: 3, type: "Long-Form", title: "I Automated My Entire YouTube Workflow", status: "pending", date: "Sept 8" },
  { day: 4, type: "Short", title: "The 5-second hook formula that MrBeast uses", status: "pending", date: "Sept 9" },
  { day: 5, type: "Short", title: "Stop writing your own scripts", status: "pending", date: "Sept 10" },
  { day: 6, type: "Community", title: "Behind the scenes screenshot of ReelForge dashboard", status: "pending", date: "Sept 11" },
  { day: 7, type: "Rest", title: "Review week 1 metrics", status: "pending", date: "Sept 12" },
  // Week 2
  { day: 8, type: "Short", title: "How to generate 30 days of content in 30 seconds", status: "pending", date: "Sept 13" },
  { day: 9, type: "Short", title: "Why your Shorts are stuck at 200 views", status: "pending", date: "Sept 14" },
  { day: 10, type: "Long-Form", title: "Full Tutorial: Going Viral with AI Scripts in 2024", status: "pending", date: "Sept 15" },
  { day: 11, type: "Community", title: "Q&A request: What's your biggest struggle with YouTube?", status: "pending", date: "Sept 16" },
  { day: 12, type: "Short", title: "The exact prompt to get cinematic Midjourney images", status: "pending", date: "Sept 17" },
  { day: 13, type: "Short", title: "Reacting to AI writing my YouTube intro", status: "pending", date: "Sept 18" },
  { day: 14, type: "Rest", title: "Reply to comments on the Long-Form video", status: "pending", date: "Sept 19" },
  // Week 3
  { day: 15, type: "Short", title: "Faceless YouTube channels are taking over", status: "pending", date: "Sept 20" },
  { day: 16, type: "Long-Form", title: "Can AI Build a Faceless Channel from Scratch?", status: "pending", date: "Sept 21" },
  { day: 17, type: "Short", title: "Coffee Shop Owner uses AI to go viral", status: "pending", date: "Sept 22" },
  { day: 18, type: "Community", title: "Share a success story or an impressive metric", status: "pending", date: "Sept 23" },
  { day: 19, type: "Short", title: "The secret to finding trending hashtags", status: "pending", date: "Sept 24" },
  { day: 20, type: "Short", title: "AI vs. Human: Who writes a better hook?", status: "pending", date: "Sept 25" },
  { day: 21, type: "Rest", title: "Plan Week 4 based on analytics", status: "pending", date: "Sept 26" },
  // Week 4
  { day: 22, type: "Short", title: "This one website replaced my entire marketing team", status: "pending", date: "Sept 27" },
  { day: 23, type: "Long-Form", title: "The Future of the Creator Economy (2025 Predictions)", status: "pending", date: "Sept 28" },
  { day: 24, type: "Short", title: "POV: You finally stopped stressing about what to post", status: "pending", date: "Sept 29" },
  { day: 25, type: "Community", title: "ReelForge is officially 100% Free. Link in bio.", status: "pending", date: "Sept 30" },
  { day: 26, type: "Short", title: "Day in the life of a solo founder building an AI app", status: "pending", date: "Oct 1" },
  { day: 27, type: "Short", title: "Don't start a YouTube channel in 2024 until you watch this", status: "pending", date: "Oct 2" },
  { day: 28, type: "Long-Form", title: "My biggest mistakes building ReelForge AI", status: "pending", date: "Oct 3" },
  { day: 29, type: "Community", title: "What feature should we build next?", status: "pending", date: "Oct 4" },
  { day: 30, type: "Short", title: "Thank you for 10,000 views! (Milestone celebration)", status: "pending", date: "Oct 5" },
]

export default function CalendarPage() {
  const [filter, setFilter] = useState("All")
  
  const filteredData = filter === "All" 
    ? calendarData 
    : calendarData.filter(item => item.type === filter)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold font-outfit text-white mb-2 flex items-center">
            <CalendarIcon className="mr-3 text-primary" />
            30-Day Content Calendar
          </h1>
          <p className="text-muted-foreground">Your AI-generated YouTube growth strategy.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
            <input 
              type="text" 
              placeholder="Search ideas..." 
              className="w-full bg-background border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <button className="p-2 border border-white/10 rounded-lg hover:bg-white/5 text-white transition-colors flex items-center justify-center">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Filter Pills */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {["All", "Short", "Long-Form", "Community", "Rest"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === type 
                ? "bg-primary text-white" 
                : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white border border-white/5"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredData.map((item, index) => (
          <div 
            key={index} 
            className="glass-card p-5 rounded-xl border border-white/10 hover:border-primary/50 transition-all group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                item.type === 'Short' ? 'bg-blue-500/20 text-blue-400' :
                item.type === 'Long-Form' ? 'bg-purple-500/20 text-purple-400' :
                item.type === 'Community' ? 'bg-emerald-500/20 text-emerald-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {item.type}
              </span>
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>
            
            <h3 className="text-white font-medium mb-4 flex-1 line-clamp-3 group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            
            <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-auto">
              <span className="text-xs font-medium text-muted-foreground">Day {item.day}</span>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                <Circle size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
