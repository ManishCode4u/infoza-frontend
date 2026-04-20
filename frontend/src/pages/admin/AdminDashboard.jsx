import React from "react";
import { Users, MessageSquare, TrendingUp, CheckCircle, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [];

export default function AdminDashboard() {
  const stats = [
    { title: "Total Leads", value: "0", icon: Users, change: "0%", isPositive: true },
    { title: "Total Messages", value: "0", icon: MessageSquare, change: "0%", isPositive: true },
    { title: "Today Leads", value: "0", icon: TrendingUp, change: "0%", isPositive: true },
    { title: "Converted", value: "0%", icon: CheckCircle, change: "0%", isPositive: true },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Welcome back. Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mt-2 tracking-tight">{stat.value}</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-zinc-800 flex items-center justify-center">
                  <Icon size={20} className="text-gray-700 dark:text-gray-300" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm">
                <span className={`flex items-center font-medium ${stat.isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                  {stat.change}
                  {stat.isPositive && <ArrowUpRight size={16} className="ml-1" />}
                </span>
                <span className="text-gray-400 dark:text-gray-500 ml-2">vs last week</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-gray-100 dark:border-zinc-800 shadow-sm">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">Lead Activity</h2>
          <select className="bg-gray-50 dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 text-sm rounded-lg px-3 py-1.5 outline-none focus:ring-2 focus:ring-indigo-500/20 text-gray-700 dark:text-gray-300">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
          </select>
        </div>
        
        <div className="h-[300px] w-full flex items-center justify-center border-2 border-dashed border-gray-100 dark:border-zinc-800 rounded-xl">
          {data.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" className="dark:opacity-10" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', backgroundColor: 'var(--tw-prose-body, white)' }}
                  itemStyle={{ color: '#111827', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="leads" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          ) : (
            <div className="text-center text-gray-400 dark:text-gray-500 font-medium">No activity data available</div>
          )}
        </div>
      </div>
    </div>
  );
}
