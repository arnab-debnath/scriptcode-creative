// app/demos/banking/transfers/page.tsx
"use client";

import React, { useState } from 'react';
import { 
  Search, Download, Filter, 
  ArrowRight, CheckCircle2, Clock, AlertCircle, Plus
} from 'lucide-react';

// --- CORPORATE BANKING DUMMY DATA ---
const initialTransfers = [
  { id: "WR-2026-8891", beneficiary: "Amazon Web Services Inc.", type: "Domestic Wire", account: "•••• 4419", amount: 48500.00, date: "Feb 20, 2026", status: "Pending Approval", approvers: "1 of 2" },
  { id: "ACH-2026-8890", beneficiary: "Global Logistics Partners", type: "ACH Batch", account: "•••• 8832", amount: 12450.75, date: "Feb 19, 2026", status: "Processed", approvers: "Auto" },
  { id: "WR-2026-8889", beneficiary: "Overseas Manufacturing Ltd.", type: "Intl Wire (USD)", account: "•••• 8832", amount: 250000.00, date: "Feb 18, 2026", status: "Processed", approvers: "2 of 2" },
  { id: "INT-2026-8888", beneficiary: "Payroll Disbursement", type: "Internal Transfer", account: "•••• 0091", amount: 185000.00, date: "Feb 17, 2026", status: "Processed", approvers: "Auto" },
  { id: "WR-2026-8887", beneficiary: "Stripe Escrow Account", type: "Domestic Wire", account: "•••• 8832", amount: 75000.00, date: "Feb 15, 2026", status: "Failed", approvers: "Rejected" },
  { id: "ACH-2026-8886", beneficiary: "State Tax Authority", type: "ACH Payment", account: "•••• 4419", amount: 32400.00, date: "Feb 14, 2026", status: "Scheduled", approvers: "2 of 2" },
];

export default function TransfersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // --- INTERACTIVE FILTERING LOGIC ---
  const filteredTransfers = initialTransfers.filter((transfer) => {
    const matchesSearch = transfer.beneficiary.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          transfer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || transfer.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      
      {/* 1. HEADER & ACTIONS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#0A192F] mb-1">Wire Transfers & ACH</h1>
          <p className="text-slate-500 text-sm">Manage outgoing payments, batches, and approval workflows.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded shadow-sm hover:bg-slate-50 transition-colors text-sm font-medium">
            <Download size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-[#0A192F] text-white px-4 py-2 rounded shadow-sm hover:bg-[#112240] transition-colors text-sm font-medium">
            <Plus size={16} /> Initiate Payment
          </button>
        </div>
      </div>

      {/* 2. INSTITUTIONAL FILTER TOOLBAR */}
      <div className="bg-white border border-slate-200 p-4 rounded-lg shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search by Beneficiary or Reference ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:outline-none focus:border-[#0A192F] focus:ring-1 focus:ring-[#0A192F]"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="flex w-full md:w-auto">
          <div className="flex items-center gap-2 border border-slate-300 rounded px-3 py-2 w-full md:w-auto focus-within:ring-1 focus-within:ring-[#0A192F]">
            <Filter size={14} className="text-slate-500" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-sm text-slate-700 font-medium focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Pending Approval">Pending Approval</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Processed">Processed</option>
              <option value="Failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. SECURE DATA GRID */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                <th className="p-4">Reference ID</th>
                <th className="p-4">Beneficiary</th>
                <th className="p-4">Payment Type</th>
                <th className="p-4">Funding Acct</th>
                <th className="p-4 text-right">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Approvals</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredTransfers.length > 0 ? (
                filteredTransfers.map((transfer) => (
                  <tr key={transfer.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors cursor-pointer group">
                    <td className="p-4 font-mono text-xs text-slate-500 group-hover:text-[#0A192F] transition-colors">{transfer.id}</td>
                    <td className="p-4 font-bold text-[#0A192F]">{transfer.beneficiary}</td>
                    <td className="p-4 text-slate-600">{transfer.type}</td>
                    <td className="p-4 font-mono text-xs text-slate-500">{transfer.account}</td>
                    <td className="p-4 text-right font-mono font-bold text-slate-900">
                      ${transfer.amount.toLocaleString(undefined, {minimumFractionDigits: 2})}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-bold ${
                        transfer.status === 'Processed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        transfer.status === 'Pending Approval' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        transfer.status === 'Scheduled' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-red-50 text-red-700 border border-red-200'
                      }`}>
                        {transfer.status === 'Processed' && <CheckCircle2 size={12} />}
                        {transfer.status === 'Pending Approval' && <Clock size={12} />}
                        {transfer.status === 'Scheduled' && <ArrowRight size={12} />}
                        {transfer.status === 'Failed' && <AlertCircle size={12} />}
                        {transfer.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`text-xs font-semibold ${transfer.approvers.includes('1 of') || transfer.approvers === 'Rejected' ? 'text-amber-600' : 'text-slate-500'}`}>
                        {transfer.approvers}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-slate-500">
                    <p className="font-semibold text-slate-700 mb-1">No transfers found</p>
                    <p className="text-sm">Try adjusting your search or filters.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Institutional Pagination */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-between items-center text-sm text-slate-600">
          <span>Showing {filteredTransfers.length} records</span>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors font-medium">Prev</button>
            <button className="px-3 py-1.5 bg-[#0A192F] text-white rounded font-medium">1</button>
            <button className="px-3 py-1.5 bg-white border border-slate-300 rounded hover:bg-slate-100 transition-colors font-medium">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}