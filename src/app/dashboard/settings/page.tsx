"use client"

import { Button } from "@/components/ui/button"
import { Crown, Settings, User, CreditCard, Bell, Shield } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-outfit text-white mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account, billing, and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Settings Sidebar */}
        <div className="md:col-span-1 space-y-1">
          <Button variant="secondary" className="w-full justify-start font-medium bg-white/10 text-white">
            <User size={16} className="mr-2" /> Profile
          </Button>
          <Button variant="ghost" className="w-full justify-start font-medium text-muted-foreground hover:text-white">
            <CreditCard size={16} className="mr-2" /> Billing
          </Button>
          <Button variant="ghost" className="w-full justify-start font-medium text-muted-foreground hover:text-white">
            <Bell size={16} className="mr-2" /> Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start font-medium text-muted-foreground hover:text-white">
            <Shield size={16} className="mr-2" /> Security
          </Button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-3 space-y-6">
          {/* Subscription Section */}
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Crown className="text-yellow-400" size={20} /> Subscription Plan
            </h2>
            
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-medium text-white mb-1">Free Forever Plan</h3>
                <p className="text-sm text-muted-foreground">You are currently on the free plan (2 generations/day).</p>
              </div>
              <div className="shrink-0">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-0">
                  Upgrade to Pro
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Section */}
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h2 className="text-xl font-semibold text-white mb-4">Profile Details</h2>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">First Name</label>
                  <input type="text" placeholder="Creator" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary outline-none disabled:opacity-50" disabled />
                </div>
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-1.5">Last Name</label>
                  <input type="text" placeholder="User" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary outline-none disabled:opacity-50" disabled />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1.5">Email Address</label>
                <input type="email" placeholder="user@example.com" className="w-full bg-background border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary outline-none disabled:opacity-50" disabled />
                <p className="text-xs text-muted-foreground mt-2">Email changes are currently disabled for security reasons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
