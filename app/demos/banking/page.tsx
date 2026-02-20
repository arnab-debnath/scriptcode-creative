// app/demos/banking/page.tsx
"use client";

import React, { useState } from 'react';
import { 
  Eye, EyeOff, ArrowUpRight, ArrowDownRight, ArrowRightLeft,
  Building2, CreditCard, Lock, FileText, Search, MoreVertical
} from 'lucide-react';

const accounts = [
  { id: "1", name: "Corporate Operating - USD", number: "•••• •••• •••• 8832", balance: 4250000.50, type: "Checking" },
  { id: "2", name: "Payroll Disbursement", number: "•••• •••• •••• 4419", balance: 185000.00, type: "Checking" },
  { id: "3", name: "Commercial Reserve", number: "•••• •••• •••• 0091", balance: 12500000.00, type: "Savings" },
];

const transactions = [
  { id: "TXN-9921", date: "Feb 20, 2026", desc: "Incoming Wire - ScriptCode Innovation", ref: "INV-2026-04", type: "Credit", amount: 12500.00, status: "Cleared" },
  { id: "TXN-9920", date: "Feb 19, 2026", desc: "ACH Debit - Amazon Web Services", ref: "AWS-BILL-02", type: "Debit", amount: 4850.25, status: "Cleared" },
  { id: "TXN-9919", date: "Feb 19, 2026", desc: "Payroll Batch Processing", ref: "PAY-WK08", type: "Debit", amount: 145000.00, status: "Processing" },
  { id: "TXN-9918", date: "Feb 18, 2026", desc: "Outgoing Wire - Supplier Payment", ref: "PO-88392", type: "Debit", amount: 55000.00, status: "Cleared" },
  { id: "TXN-9917", date: "Feb 17, 2026", desc: "Incoming ACH - Stripe Payout", ref: "STRIPE-TRANSFER", type: "Credit", amount: 89400.50, status: "Cleared" },
];

export default function BankingDashboard() {
  // State for the security mask toggle
  const [isMasked, setIsMasked] = useState(true);

  // Helper to format currency or mask it
  const formatCurrency = (amount: number) => {
    if (isMasked) return "••••••••";
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
  };

  return (
    <div className="space-y-8">
      
      {/* 1. PAGE HEADER & SECURITY TOGGLE */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-1">Accounts Overview</h1>
          <p className="text-slate-500 text-sm">Welcome back, Administrator. Last login from IP: 192.168.1.1</p>
        </div>
        
        {/* Interactive Balance Toggle */}
        <button 
          onClick={() => setIsMasked(!isMasked)}
          className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded shadow-sm hover:bg-slate-50 transition-colors text-sm font-medium"
        >
          {isMasked ? <Eye size={16} /> : <EyeOff size={16} />}
          {isMasked ? "Show Balances" : "Hide Balances"}
        </button>
      </div>

      {/* 2. ACCOUNTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((acc) => (
          <div key={acc.id} className="bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            {/* Corporate Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#0A192F]"></div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-bold text-slate-900">{acc.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mt-1">{acc.number}</p>
                </div>
                <button className="text-slate-400 hover:text-[#0A192F]">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Available Balance</p>
                <div className="text-3xl font-light text-[#0A192F] font-mono tracking-tight">
                  {formatCurrency(acc.balance)}
                </div>
              </div>
            </div>
            
            <div className="bg-slate-50 border-t border-slate-100 p-3 flex gap-2">
              <button className="flex-1 text-center text-xs font-bold text-[#0A192F] hover:bg-slate-200 py-1.5 rounded transition-colors">Transfer</button>
              <button className="flex-1 text-center text-xs font-bold text-[#0A192F] hover:bg-slate-200 py-1.5 rounded transition-colors">Statements</button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. QUICK ACTIONS & RECENT ACTIVITY */}
      <div className="grid lg:grid-cols-4 gap-8">
        
        {/* Quick Actions Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-bold text-slate-900 border-b border-slate-200 pb-2">Quick Actions</h3>
          
          <div className="flex flex-col gap-3">
            <button className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#0A192F] transition-colors text-left group">
              <div className="bg-blue-50 text-blue-700 p-2 rounded group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                <ArrowRightLeft size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Initiate Wire</p>
                <p className="text-xs text-slate-500">Domestic or International</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#0A192F] transition-colors text-left group">
              <div className="bg-emerald-50 text-emerald-700 p-2 rounded group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                <FileText size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">ACH Batch</p>
                <p className="text-xs text-slate-500">Upload NACHA file</p>
              </div>
            </button>

            <button className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-lg shadow-sm hover:border-[#0A192F] transition-colors text-left group">
              <div className="bg-slate-100 text-slate-700 p-2 rounded group-hover:bg-[#0A192F] group-hover:text-white transition-colors">
                <Lock size={18} />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Stop Payment</p>
                <p className="text-xs text-slate-500">Block a check or ACH</p>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Transactions Table */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 md:p-6 border-b border-slate-200 flex flex-col md:flex-row justify-between md:items-center gap-4">
            <h3 className="font-bold text-slate-900">Recent Transactions</h3>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search by amount or ref..." 
                className="w-full pl-9 pr-3 py-1.5 text-sm border border-slate-300 rounded focus:outline-none focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F]"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-50 text-xs font-bold text-slate-600 border-b border-slate-200">
                  <th className="p-4">Date</th>
                  <th className="p-4">Description</th>
                  <th className="p-4">Reference</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {transactions.map((txn, idx) => (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-600">{txn.date}</td>
                    <td className="p-4 font-medium text-[#0A192F]">{txn.desc}</td>
                    <td className="p-4 text-xs font-mono text-slate-500">{txn.ref}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-bold ${
                        txn.status === 'Cleared' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {txn.status}
                      </span>
                    </td>
                    <td className={`p-4 text-right font-mono font-medium ${txn.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}`}>
                      {txn.type === 'Credit' ? '+' : '-'}{isMasked ? '••••••' : `$${txn.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 text-center">
             <button className="text-sm font-semibold text-[#0A192F] hover:underline">View All Transactions →</button>
          </div>
        </div>

      </div>
    </div>
  );
}