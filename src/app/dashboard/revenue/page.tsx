"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, DollarSign, Users, CreditCard, Activity, TrendingUp } from "lucide-react"
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts'

const data = [
  { name: 'Jan', revenue: 400, costs: 240, profit: 160 },
  { name: 'Feb', revenue: 800, costs: 300, profit: 500 },
  { name: 'Mar', revenue: 1200, costs: 400, profit: 800 },
  { name: 'Apr', revenue: 2100, costs: 600, profit: 1500 },
  { name: 'May', revenue: 3500, costs: 800, profit: 2700 },
  { name: 'Jun', revenue: 5200, costs: 1100, profit: 4100 },
]

export default function RevenueDashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-emerald-500/20 p-2 rounded-lg">
            <TrendingUp className="text-emerald-400" size={24} />
          </div>
          <h1 className="text-3xl font-bold font-outfit text-white">SaaS Revenue Tracker</h1>
        </div>
        <p className="text-muted-foreground">Admin overview of ReelForge AI subscriptions, API costs, and net profit.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total MRR</CardTitle>
            <DollarSign className="h-4 w-4 text-emerald-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,200.00</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +48.5% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">API Costs (Luma)</CardTitle>
            <Activity className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,100.00</div>
            <p className="text-xs text-red-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +37.5% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Profit</CardTitle>
            <CreditCard className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,100.00</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +51.8% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pro Subscribers</CardTitle>
            <Users className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+1,040</div>
            <p className="text-xs text-emerald-400 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> +180 new this month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Revenue vs Costs Over Time</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorCosts" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                    itemStyle={{ color: '#e4e4e7' }}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue ($)" />
                  <Area type="monotone" dataKey="costs" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorCosts)" name="API Costs ($)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-white/5 border-white/10 text-white">
          <CardHeader>
            <CardTitle>Net Profit Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                    cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
                  />
                  <Bar dataKey="profit" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Net Profit ($)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
