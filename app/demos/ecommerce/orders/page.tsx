// app/demos/ecommerce/orders/page.tsx
"use client";

import React, { useState } from 'react';
import { 
  Search, Download, Filter, 
  MoreHorizontal, Check, Clock, Package
} from 'lucide-react';

// --- HIGH-END APPAREL DUMMY DATA ---
const initialOrders = [
  { id: "ORD-0992", customer: "Alexander Wright", item: "Aura Street Fashionwear Hoodie", qty: 1, total: "$185.00", status: "Processing", date: "Feb 20, 2026" },
  { id: "ORD-0991", customer: "Sophia Laurent", item: "Aura Essentials Ribbed Vest", qty: 3, total: "$135.00", status: "Shipped", date: "Feb 19, 2026" },
  { id: "ORD-0990", customer: "Marcus Chen", item: "Nylon Cargo Trousers", qty: 1, total: "$220.00", status: "Delivered", date: "Feb 18, 2026" },
  { id: "ORD-0989", customer: "Emma Thompson", item: "Essentials Innerwear Pack", qty: 2, total: "$90.00", status: "Processing", date: "Feb 18, 2026" },
  { id: "ORD-0988", customer: "Julian Silva", item: "Oversized Graphic Tee", qty: 1, total: "$85.00", status: "Delivered", date: "Feb 15, 2026" },
  { id: "ORD-0987", customer: "Isabella Rossi", item: "Aura Street Fashionwear Jacket", qty: 1, total: "$340.00", status: "Shipped", date: "Feb 14, 2026" },
  { id: "ORD-0986", customer: "Liam O'Connor", item: "Essentials Base Layer", qty: 2, total: "$110.00", status: "Delivered", date: "Feb 12, 2026" },
];

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // --- INTERACTIVE FILTERING LOGIC ---
  const filteredOrders = initialOrders.filter((order) => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          order.item.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || order.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8">
      
      {/* 1. HEADER & EXPORT */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black mb-1">Order Management</h1>
          <p className="text-neutral-500 font-medium text-sm">Fulfillment, tracking, and customer logistics.</p>
        </div>
        <button className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white px-5 py-2.5 transition-colors text-xs font-bold uppercase tracking-widest shadow-md">
          <Download size={14} /> Export CSV
        </button>
      </div>

      {/* 2. STARK FILTER TOOLBAR */}
      <div className="bg-white border border-neutral-200 p-4 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
          <input 
            type="text" 
            placeholder="Search by Order ID, Customer, or Product..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-neutral-100 border-none rounded-none py-2.5 pl-12 pr-4 text-sm text-black focus:outline-none focus:ring-1 focus:ring-black transition-all placeholder:text-neutral-500 font-medium"
          />
        </div>

        {/* Dropdown Filter */}
        <div className="flex w-full md:w-auto">
          <div className="flex items-center gap-3 bg-neutral-100 px-4 py-2.5 w-full md:w-auto focus-within:ring-1 focus-within:ring-black transition-all">
            <Filter size={14} className="text-neutral-500" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-xs font-bold uppercase tracking-widest text-black focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. BRUTALIST DATA GRID */}
      <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-[10px] uppercase tracking-widest text-white border-b border-black">
                <th className="p-4 font-bold">Order ID</th>
                <th className="p-4 font-bold">Customer</th>
                <th className="p-4 font-bold">Primary Item</th>
                <th className="p-4 font-bold text-center">Qty</th>
                <th className="p-4 font-bold text-right">Total</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm font-medium">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer group">
                    <td className="p-4 text-black font-black tracking-tight">{order.id}</td>
                    <td className="p-4 text-neutral-600 group-hover:text-black transition-colors">{order.customer}</td>
                    <td className="p-4 text-neutral-500 text-xs">{order.item}</td>
                    <td className="p-4 text-center text-neutral-400">{order.qty}</td>
                    <td className="p-4 text-right text-black font-bold tracking-tight">{order.total}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-900 border border-amber-200' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-900 border border-blue-200' :
                        'bg-emerald-100 text-emerald-900 border border-emerald-200'
                      }`}>
                        {order.status === 'Processing' && <Clock size={10} strokeWidth={3} />}
                        {order.status === 'Shipped' && <Package size={10} strokeWidth={3} />}
                        {order.status === 'Delivered' && <Check size={10} strokeWidth={3} />}
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right text-neutral-400 text-xs uppercase tracking-wider">{order.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="p-16 text-center text-neutral-400">
                    <Package size={32} className="mx-auto mb-4 opacity-50" />
                    <p className="font-bold uppercase tracking-widest text-xs text-black mb-1">No Orders Found</p>
                    <p className="text-xs">Adjust your search or filter criteria.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Minimalist Pagination */}
        <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-neutral-400">
          <span>{filteredOrders.length} Results</span>
          <div className="flex gap-1">
            <button className="px-3 py-2 bg-white border border-neutral-200 hover:border-black hover:text-black transition-colors">Prev</button>
            <button className="px-3 py-2 bg-black text-white">1</button>
            <button className="px-3 py-2 bg-white border border-neutral-200 hover:border-black hover:text-black transition-colors">2</button>
            <button className="px-3 py-2 bg-white border border-neutral-200 hover:border-black hover:text-black transition-colors">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}