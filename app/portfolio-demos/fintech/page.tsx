"use client";

import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, TrendingDown, DollarSign, BrainCircuit, 
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Zap,
  Loader2, CheckCircle2
} from 'lucide-react';

// --- TRADING DATA ---
const stats = [
  { title: "Net Portfolio Value", amount: "$1,245,630.00", change: "+14.5%", isPositive: true, icon: DollarSign },
  { title: "24h Trading Volume", amount: "$345,231.89", change: "+8.2%", isPositive: true, icon: TrendingUp },
  { title: "Active AI Positions", amount: "12 Open Trades", change: "-2.4%", isPositive: false, icon: BrainCircuit },
  { title: "Total Realized Profit", amount: "$184,210.50", change: "+12.1%", isPositive: true, icon: TrendingUp },
];

const trades = [
  { id: 1, pair: "BTC / USD", date: "Feb 20, 2026", type: "LONG", status: "Active", pnl: "+$2,499.00", isProfit: true },
  { id: 2, pair: "ETH / USD", date: "Feb 19, 2026", type: "SHORT", status: "Closed", pnl: "+$1,500.00", isProfit: true },
  { id: 3, pair: "SOL / USDT", date: "Feb 18, 2026", type: "LONG", status: "Active", pnl: "-$145.20", isProfit: false },
  { id: 4, pair: "AAPL (Tokenized)", date: "Feb 16, 2026", type: "SHORT", status: "Closed", pnl: "+$3,200.00", isProfit: true },
  { id: 5, pair: "NVDA (Tokenized)", date: "Feb 15, 2026", type: "LONG", status: "Active", pnl: "+$8,000.00", isProfit: true },
];

// Mock chart data for different timeframes
const chartDataSets = {
  "1 Hour": [30, 40, 35, 50, 45, 60, 55, 75, 65, 80, 70, 90, 85, 95, 80, 100],
  "24 Hours": [60, 50, 70, 45, 80, 55, 90, 65, 100, 75, 85, 60, 95, 70, 80, 90],
  "7 Days": [100, 80, 95, 70, 85, 60, 75, 50, 65, 45, 55, 30, 40, 20, 35, 50]
};

export default function NovaTradeDashboard() {
  // --- INTERACTIVE STATES ---
  const [timeframe, setTimeframe] = useState<"1 Hour" | "24 Hours" | "7 Days">("1 Hour");
  const [chartData, setChartData] = useState(chartDataSets["1 Hour"]);
  const [isExecuting, setIsExecuting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Handle Chart Animation
  useEffect(() => {
    setChartData(chartDataSets[timeframe]);
  }, [timeframe]);

  // Handle Trade Execution Simulation
  const handleExecuteTrade = () => {
    if (isExecuting) return;
    setIsExecuting(true);
    
    // Simulate API Call
    setTimeout(() => {
      setIsExecuting(false);
      setShowToast(true);
      
      // Hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-8 pb-12 relative">
      
      {/* SUCCESS TOAST NOTIFICATION */}
      <div className={`fixed top-24 right-10 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 px-6 py-4 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.2)] flex items-center gap-3 transition-all duration-500 z-50 ${showToast ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
        <CheckCircle2 size={24} />
        <div>
          <p className="font-bold text-sm">Trade Executed</p>
          <p className="text-xs text-emerald-400/80">ETH/USD Long position opened successfully.</p>
        </div>
      </div>

      {/* 1. PAGE HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Live Trading Terminal</h1>
        <p className="text-slate-400">High-frequency AI execution and real-time portfolio analytics.</p>
      </div>

      {/* 2. STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-[#0f172a] border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/30 transition-all group cursor-default">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-800/50 rounded-xl text-cyan-400 group-hover:text-cyan-300 transition-colors shadow-inner">
                  <Icon size={20} />
                </div>
                <span className={`flex items-center text-sm font-bold ${stat.isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.isPositive ? <ArrowUpRight size={16} className="mr-1" /> : <ArrowDownRight size={16} className="mr-1" />}
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium mb-1">{stat.title}</p>
                <h3 className="text-2xl font-black text-white tracking-tight">{stat.amount}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. MIDDLE SECTION: CHART & AI ENGINE */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Interactive Chart Area */}
        <div className="lg:col-span-2 bg-[#0f172a] border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-lg font-bold text-white">Portfolio Performance (Algorithm V4)</h3>
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value as any)}
              className="bg-[#020617] border border-slate-700 text-sm text-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-cyan-500 cursor-pointer transition-colors"
            >
              <option value="1 Hour">1 Hour</option>
              <option value="24 Hours">24 Hours</option>
              <option value="7 Days">7 Days</option>
            </select>
          </div>
          
          {/* Animated Wave Chart */}
          <div className="h-64 flex items-end justify-between gap-1 border-b border-slate-800 pb-4 relative overflow-hidden">
            <div className="absolute w-full border-t border-slate-800/50 top-1/4"></div>
            <div className="absolute w-full border-t border-slate-800/50 top-2/4"></div>
            <div className="absolute w-full border-t border-slate-800/50 top-3/4"></div>
            
            {chartData.map((height, i) => (
              <div key={i} className="w-full relative group h-full flex items-end">
                <div 
                  className="bg-gradient-to-t from-cyan-500/10 to-cyan-400/80 hover:to-cyan-300 rounded-t-sm w-full transition-all duration-500 ease-in-out relative"
                  style={{ height: `${height}%` }}
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-slate-500 mt-4 font-mono">
            <span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>00:00</span>
          </div>
        </div>

        {/* AI Action Widget */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] border border-cyan-500/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[60px] rounded-full pointer-events-none"></div>
          
          <h3 className="text-lg font-bold text-white mb-6 relative z-10 flex items-center gap-2">
            <BrainCircuit className="text-cyan-400" size={20}/> AI Copilot
          </h3>
          
          <div className="space-y-4 relative z-10">
            <div className="bg-[#020617]/50 border border-slate-800 rounded-xl p-4 hover:border-cyan-500/30 transition-colors">
               <p className="text-xs text-cyan-400 font-bold mb-1 tracking-widest uppercase">Signal Detected</p>
               <p className="text-sm text-white font-medium">Strong Buy signal on ETH/USD based on on-chain volume spikes.</p>
            </div>

            <div className="bg-[#020617]/50 border border-slate-800 rounded-xl p-4 hover:border-emerald-500/30 transition-colors">
               <p className="text-xs text-emerald-400 font-bold mb-1 tracking-widest uppercase">Risk Management</p>
               <p className="text-sm text-white font-medium">Stop-loss updated for active TSLA short position.</p>
            </div>

            {/* Interactive Execute Button */}
            <button 
              onClick={handleExecuteTrade}
              disabled={isExecuting}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isExecuting ? (
                <>
                  <Loader2 size={18} className="animate-spin" /> Processing AI Trade...
                </>
              ) : (
                <>
                  Execute Auto-Trade <Zap size={16} />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. RECENT TRADES TABLE */}
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex justify-between items-center">
          <h3 className="text-lg font-bold text-white">Recent Executions</h3>
          <button className="text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors">View Ledger</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#020617] text-xs uppercase tracking-wider text-slate-500 border-b border-slate-800 font-mono">
                <th className="p-4 font-bold">Trading Pair</th>
                <th className="p-4 font-bold">Type</th>
                <th className="p-4 font-bold">Execution Date</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">P&L</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {trades.map((trade) => (
                <tr key={trade.id} className="border-b border-slate-800 hover:bg-[#020617] transition-colors cursor-pointer group">
                  <td className="p-4 font-bold text-white group-hover:text-cyan-400 transition-colors">{trade.pair}</td>
                  <td className="p-4">
                     <span className={`text-xs font-bold px-2 py-1 rounded border ${trade.type === 'LONG' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 'border-red-500/30 text-red-400 bg-red-500/10'}`}>
                        {trade.type}
                     </span>
                  </td>
                  <td className="p-4 text-slate-400">{trade.date}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      trade.status === 'Active' ? 'bg-blue-500/10 text-blue-400' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {trade.status}
                    </span>
                  </td>
                  <td className={`p-4 text-right font-bold tracking-tight font-mono ${trade.isProfit ? 'text-emerald-400' : 'text-red-400'}`}>
                    {trade.pnl}
                  </td>
                  <td className="p-4 text-right">
                    <button className="text-slate-500 hover:text-white transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}