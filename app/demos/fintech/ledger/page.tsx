"use client";

import React, { useState } from 'react';
import { 
  Search, Download, Filter, 
  ArrowRightLeft, ArrowUpRight, ArrowDownRight, 
  CheckCircle2, Clock, XCircle 
} from 'lucide-react';

// --- MASSIVE DUMMY DATA SET ---
const initialLedger = [
  { id: "TXN-88291", asset: "BTC / USD", type: "BUY", amount: "2.5 BTC", price: "$42,150.00", total: "$105,375.00", status: "Completed", date: "Feb 20, 2026 14:32" },
  { id: "TXN-88290", asset: "ETH / USD", type: "SELL", amount: "15.0 ETH", price: "$2,240.00", total: "$33,600.00", status: "Completed", date: "Feb 20, 2026 11:15" },
  { id: "TXN-88289", asset: "USDT", type: "DEPOSIT", amount: "50,000 USDT", price: "$1.00", total: "$50,000.00", status: "Pending", date: "Feb 19, 2026 09:45" },
  { id: "TXN-88288", asset: "SOL / USDT", type: "BUY", amount: "150 SOL", price: "$95.20", total: "$14,280.00", status: "Completed", date: "Feb 18, 2026 16:20" },
  { id: "TXN-88287", asset: "NVDA (Token)", type: "SELL", amount: "50 NVDA", price: "$780.00", total: "$39,000.00", status: "Failed", date: "Feb 18, 2026 10:05" },
  { id: "TXN-88286", asset: "AAPL (Token)", type: "BUY", amount: "100 AAPL", price: "$185.50", total: "$18,550.00", status: "Completed", date: "Feb 17, 2026 13:50" },
  { id: "TXN-88285", asset: "USDC", type: "WITHDRAW", amount: "25,000 USDC", price: "$1.00", total: "$25,000.00", status: "Completed", date: "Feb 16, 2026 08:30" },
  { id: "TXN-88284", asset: "BTC / EUR", type: "SELL", amount: "0.5 BTC", price: "€39,500.00", total: "€19,750.00", status: "Completed", date: "Feb 15, 2026 19:10" },
];

export default function LedgerPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // --- INTERACTIVE FILTERING LOGIC ---
  const filteredLedger = initialLedger.filter((txn) => {
    const matchesSearch = txn.asset.toLowerCase().includes(searchTerm.toLowerCase()) || txn.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || txn.type === filterType;
    const matchesStatus = filterStatus === "All" || txn.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="space-y-6 pb-12">
      
      {/* 1. HEADER & EXPORT */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Transaction Ledger</h1>
          <p className="text-slate-400">Complete immutable history of all platform executions.</p>
        </div>
        <button className="flex items-center gap-2 bg-[#0f172a] border border-slate-700 hover:border-cyan-500 hover:text-cyan-400 text-slate-300 px-4 py-2 rounded-lg transition-colors font-medium text-sm">
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* 2. FILTER TOOLBAR */}
      <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by Asset or TXN ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#020617] border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 w-full md:w-auto">
            <Filter size={14} className="text-slate-500" />
            <select 
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Types</option>
              <option value="BUY">Buy</option>
              <option value="SELL">Sell</option>
              <option value="DEPOSIT">Deposit</option>
              <option value="WITHDRAW">Withdraw</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 w-full md:w-auto">
            <Filter size={14} className="text-slate-500" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. DATA GRID */}
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#020617] text-xs uppercase tracking-wider text-slate-500 border-b border-slate-800 font-mono">
                <th className="p-4 font-bold">TXN ID</th>
                <th className="p-4 font-bold">Asset</th>
                <th className="p-4 font-bold">Type</th>
                <th className="p-4 font-bold text-right">Amount</th>
                <th className="p-4 font-bold text-right">Price</th>
                <th className="p-4 font-bold text-right">Total</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredLedger.length > 0 ? (
                filteredLedger.map((txn) => (
                  <tr key={txn.id} className="border-b border-slate-800 hover:bg-white/[0.02] transition-colors cursor-pointer">
                    <td className="p-4 font-mono text-xs text-slate-400">{txn.id}</td>
                    <td className="p-4 font-bold text-white">{txn.asset}</td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded border ${
                        txn.type === 'BUY' || txn.type === 'DEPOSIT' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10' : 
                        txn.type === 'SELL' || txn.type === 'WITHDRAW' ? 'border-red-500/30 text-red-400 bg-red-500/10' : 
                        'border-slate-500/30 text-slate-400 bg-slate-800'
                      }`}>
                        {txn.type}
                      </span>
                    </td>
                    <td className="p-4 text-right font-medium text-slate-300">{txn.amount}</td>
                    <td className="p-4 text-right text-slate-400">{txn.price}</td>
                    <td className="p-4 text-right font-bold text-white tracking-tight">{txn.total}</td>
                    <td className="p-4 flex items-center gap-2">
                      {txn.status === "Completed" && <CheckCircle2 size={16} className="text-emerald-400" />}
                      {txn.status === "Pending" && <Clock size={16} className="text-yellow-400" />}
                      {txn.status === "Failed" && <XCircle size={16} className="text-red-400" />}
                      <span className={`font-medium ${
                        txn.status === "Completed" ? "text-emerald-400" :
                        txn.status === "Pending" ? "text-yellow-400" : "text-red-400"
                      }`}>{txn.status}</span>
                    </td>
                    <td className="p-4 text-slate-500 text-xs">{txn.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-12 text-center text-slate-500">
                    No transactions found matching your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Fake Pagination */}
        <div className="p-4 border-t border-slate-800 flex justify-between items-center text-sm text-slate-500">
          <span>Showing {filteredLedger.length} results</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-[#020617] border border-slate-700 hover:text-white transition-colors">Previous</button>
            <button className="px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">1</button>
            <button className="px-3 py-1 rounded bg-[#020617] border border-slate-700 hover:text-white transition-colors">2</button>
            <button className="px-3 py-1 rounded bg-[#020617] border border-slate-700 hover:text-white transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}