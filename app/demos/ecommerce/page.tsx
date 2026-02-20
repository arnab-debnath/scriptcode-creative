// app/demos/ecommerce/page.tsx
"use client";

import React, { useState } from 'react';
import { 
  ArrowUpRight, ArrowDownRight, Package, Tag, 
  RefreshCw, DollarSign, MousePointerClick, Check
} from 'lucide-react';

// --- MOCK E-COMMERCE DATA ---
const metrics = [
  { title: "Total Revenue", value: "$124,500.00", change: "+14.2%", isUp: true, icon: DollarSign },
  { title: "Conversion Rate", value: "3.24%", change: "+0.8%", isUp: true, icon: MousePointerClick },
  { title: "Total Orders", value: "842", change: "-2.1%", isUp: false, icon: Package },
  { title: "Return Rate", value: "1.2%", change: "-0.5%", isUp: true, icon: RefreshCw }, // Lower return rate is "Up/Good"
];

const recentOrders = [
  { id: "#ORD-0992", customer: "Alexander Wright", date: "Today, 14:22", total: "$450.00", status: "Processing", items: 2 },
  { id: "#ORD-0991", customer: "Sophia Laurent", date: "Today, 11:05", total: "$1,250.00", status: "Shipped", items: 4 },
  { id: "#ORD-0990", customer: "Marcus Chen", date: "Yesterday", total: "$185.00", status: "Delivered", items: 1 },
  { id: "#ORD-0989", customer: "Emma Thompson", date: "Yesterday", total: "$890.00", status: "Shipped", items: 3 },
  { id: "#ORD-0988", customer: "Julian Silva", date: "Feb 18, 2026", total: "$320.00", status: "Delivered", items: 1 },
];

const topProducts = [
  { id: "SKU-A1", name: "Heavyweight Boxy Hoodie", category: "Outerwear", stock: 14, price: "$185.00", sales: 245 },
  { id: "SKU-B2", name: "Nylon Cargo Trousers", category: "Bottoms", stock: 3, price: "$220.00", sales: 189 },
  { id: "SKU-C3", name: "Oversized Graphic Tee", category: "T-Shirts", stock: 85, price: "$85.00", sales: 412 },
];

export default function EcommerceDashboard() {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-10">
      
      {/* 1. HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black uppercase tracking-tighter text-black mb-1">Store Performance</h1>
          <p className="text-neutral-500 font-medium text-sm">Real-time overview of Aura Aesthetics.</p>
        </div>
        
        <div className="flex gap-3">
          <button 
            onClick={handleRefresh}
            className="flex items-center justify-center w-10 h-10 bg-white border border-neutral-300 hover:bg-neutral-100 transition-colors shadow-sm"
          >
            <RefreshCw size={16} className={`text-black ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>
          <select className="bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2 focus:outline-none cursor-pointer shadow-md">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Year</option>
          </select>
        </div>
      </div>

      {/* 2. METRICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div key={idx} className="bg-white p-6 border border-neutral-200 shadow-sm hover:border-black transition-colors group cursor-default">
              <div className="flex justify-between items-start mb-6">
                <div className="text-neutral-400 group-hover:text-black transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <span className={`flex items-center text-xs font-bold tracking-wider ${metric.isUp ? 'text-emerald-600' : 'text-red-600'}`}>
                  {metric.isUp ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                  {metric.change}
                </span>
              </div>
              <div>
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">{metric.title}</p>
                <h3 className="text-3xl font-black tracking-tighter text-black">{metric.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* 3. RECENT ORDERS (Takes up 2 columns) */}
        <div className="lg:col-span-2 bg-white border border-neutral-200 shadow-sm">
          <div className="p-6 border-b border-neutral-200 flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black">Recent Orders</h2>
            <button className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-black transition-colors">View All →</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50 text-[10px] uppercase tracking-widest text-neutral-500 border-b border-neutral-200">
                  <th className="p-4 font-bold">Order</th>
                  <th className="p-4 font-bold">Customer</th>
                  <th className="p-4 font-bold">Date</th>
                  <th className="p-4 font-bold">Status</th>
                  <th className="p-4 font-bold text-right">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium">
                {recentOrders.map((order, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors cursor-pointer">
                    <td className="p-4 text-black font-bold">{order.id}</td>
                    <td className="p-4 text-neutral-600">{order.customer}</td>
                    <td className="p-4 text-neutral-400 text-xs">{order.date}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-1 ${
                        order.status === 'Processing' ? 'bg-amber-100 text-amber-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {order.status === 'Delivered' && <Check size={10} />}
                        {order.status}
                      </span>
                    </td>
                    <td className="p-4 text-right text-black font-bold tracking-tight">{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. TOP PERFORMING PRODUCTS */}
        <div className="bg-white border border-neutral-200 shadow-sm flex flex-col">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-sm font-bold uppercase tracking-widest text-black">Top Products</h2>
          </div>
          
          <div className="p-6 flex-1 flex flex-col gap-6">
            {topProducts.map((product) => (
              <div key={product.id} className="flex items-center gap-4 group cursor-pointer">
                {/* Product Image Placeholder (Using a stark gray box to simulate high-fashion minimalism) */}
                <div className="w-16 h-16 bg-neutral-100 border border-neutral-200 shrink-0 flex items-center justify-center group-hover:border-black transition-colors">
                   <Tag size={20} className="text-neutral-300" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-black truncate group-hover:underline underline-offset-2">{product.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-500">{product.category}</span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[10px] font-bold tracking-widest text-neutral-900">{product.sales} Sales</span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-black">{product.price}</p>
                  <p className={`text-[10px] uppercase tracking-widest mt-1 font-bold ${product.stock < 5 ? 'text-red-500' : 'text-emerald-500'}`}>
                    {product.stock < 5 ? `Low Stock (${product.stock})` : 'In Stock'}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-neutral-200 bg-neutral-50">
             <button className="w-full py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors shadow-md">
                Manage Inventory
             </button>
          </div>
        </div>

      </div>
    </div>
  );
}