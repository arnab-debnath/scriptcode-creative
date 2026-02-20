// app/demos/healthcare/page.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Video, Clock, User, FileText, Activity, 
  Thermometer, Droplets, Heart, AlertCircle, CheckCircle2, Loader2
} from 'lucide-react';

// --- MOCK MEDICAL DATA ---
const patientVitals = [
  { title: "Heart Rate", value: "72", unit: "bpm", status: "Normal", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" },
  { title: "Blood Pressure", value: "118/76", unit: "mmHg", status: "Optimal", icon: Activity, color: "text-blue-500", bg: "bg-blue-50" },
  { title: "Temperature", value: "98.6", unit: "°F", status: "Normal", icon: Thermometer, color: "text-amber-500", bg: "bg-amber-50" },
  { title: "Oxygen Level", value: "99", unit: "%", status: "Normal", icon: Droplets, color: "text-cyan-500", bg: "bg-cyan-50" },
];

const schedule = [
  { id: 1, patient: "Sarah Jenkins", time: "10:00 AM", type: "Video Consult", reason: "Post-op Follow up", status: "Next" },
  { id: 2, patient: "Michael Chen", time: "11:30 AM", type: "In-Person", reason: "Annual Physical", status: "Waiting" },
  { id: 3, patient: "Elena Rodriguez", time: "01:00 PM", type: "Video Consult", reason: "Prescription Renewal", status: "Scheduled" },
  { id: 4, patient: "David Smith", time: "02:45 PM", type: "In-Person", reason: "Lab Results Review", status: "Scheduled" },
];

export default function HealthcareDashboard() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [callJoined, setCallJoined] = useState(false);

  // Simulate connecting to a secure video call
  const handleJoinCall = () => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
      setCallJoined(true);
    }, 2000);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8">
      
      {/* 1. WELCOME BANNER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden">
        {/* Decorative subtle pattern */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Good morning, Dr. Sharma.</h1>
          <p className="text-slate-500 font-medium">You have <span className="text-blue-600 font-bold">4 appointments</span> scheduled for today.</p>
        </div>
        
        <div className="relative z-10 flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center gap-2">
            <FileText size={18} /> View Daily Brief
          </button>
        </div>
      </div>

      {/* 2. MAIN GRID LAYOUT */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Telemedicine & Schedule */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Active Telemedicine Card */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div>
                <h2 className="text-lg font-bold text-slate-900">Up Next: Secure Video Consult</h2>
              </div>
              <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">10:00 AM</span>
            </div>
            
            <div className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
              {/* Patient Avatar/Video Placeholder */}
              {/* Patient Avatar/Video Placeholder (Pure CSS Monogram) */}
              <div className="w-32 h-32 rounded-2xl bg-slate-100 border-2 border-slate-200 flex items-center justify-center relative overflow-hidden shrink-0">
                
                {/* CSS Initials instead of an image */}
                <span className="text-4xl font-black text-slate-300 tracking-widest">
                  SJ
                </span>

                {!callJoined && (
                  <div className="absolute inset-0 bg-slate-900/5 backdrop-blur-[2px] flex items-center justify-center">
                    <Video size={32} className="text-slate-400" />
                  </div>
                )}
                {callJoined && (
                  <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                     <span className="text-white text-xs font-bold animate-pulse flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Connected
                     </span>
                  </div>
                )}
              </div>

              {/* Patient Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Sarah Jenkins</h3>
                <p className="text-slate-500 mb-4">Female, 34 yrs • Post-op Follow up</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">ID: P-88291</span>
                  <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">Last visit: 2 weeks ago</span>
                </div>

                {/* Interactive Join Button */}
                {callJoined ? (
                  <button className="w-full md:w-auto px-6 py-3 bg-red-50 text-red-600 border border-red-200 font-bold rounded-xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
                    End Consultation
                  </button>
                ) : (
                  <button 
                    onClick={handleJoinCall}
                    disabled={isConnecting}
                    className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isConnecting ? (
                      <><Loader2 size={18} className="animate-spin" /> Establishing Secure Link...</>
                    ) : (
                      <><Video size={18} /> Join Video Room</>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Today's Schedule List */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h2 className="text-lg font-bold text-slate-900">Today's Schedule</h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View Full Calendar</button>
            </div>
            
            <div className="divide-y divide-slate-100">
              {schedule.map((apt) => (
                <div key={apt.id} className="p-4 md:p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group cursor-pointer">
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold border border-slate-200">
                      {apt.time.split(':')[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{apt.patient}</h4>
                      <div className="flex items-center gap-2 text-sm text-slate-500 mt-1">
                        <Clock size={14} /> {apt.time} • {apt.type}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
                    <span className="text-sm text-slate-600">{apt.reason}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      apt.status === 'Next' ? 'bg-blue-50 text-blue-600 border-blue-200' :
                      apt.status === 'Waiting' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                      'bg-slate-50 text-slate-600 border-slate-200'
                    }`}>
                      {apt.status}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Patient Context (Changes based on selected patient) */}
        <div className="space-y-8">
          
          <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
              <User size={20} className="text-slate-400" /> Patient Overview
            </h2>
            
            <div className="mb-6 p-4 bg-amber-50 border border-amber-100 rounded-xl flex items-start gap-3">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-amber-800">Allergy Alert</p>
                <p className="text-xs text-amber-700 mt-1">Patient has a documented severe allergy to Penicillin.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {patientVitals.map((vital, idx) => {
                const Icon = vital.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <div className="flex justify-between items-start mb-2">
                      <div className={`p-2 rounded-lg ${vital.bg} ${vital.color}`}>
                        <Icon size={16} />
                      </div>
                      <CheckCircle2 size={14} className="text-emerald-500" />
                    </div>
                    <p className="text-xs text-slate-500 font-medium mb-1">{vital.title}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-slate-900">{vital.value}</span>
                      <span className="text-xs text-slate-500">{vital.unit}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="w-full mt-6 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-colors text-sm">
              View Full Medical History
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}