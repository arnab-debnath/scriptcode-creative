// app/demos/healthcare/records/page.tsx
"use client";

import React, { useState } from 'react';
import { 
  Search, Download, Filter, 
  FileText, UserCircle, Activity, 
  CheckCircle2, Clock, AlertCircle 
} from 'lucide-react';

// --- MOCK PATIENT DATA ---
const initialRecords = [
  { id: "PT-77382", name: "Sarah Jenkins", age: "34", gender: "F", diagnosis: "Post-op Knee Replacement", dept: "Orthopedics", date: "Feb 20, 2026", status: "Active Treatment" },
  { id: "PT-77381", name: "Michael Chen", age: "45", gender: "M", diagnosis: "Hypertension Management", dept: "Cardiology", date: "Feb 19, 2026", status: "Routine Monitoring" },
  { id: "PT-77380", name: "Elena Rodriguez", age: "28", gender: "F", diagnosis: "Acute Bronchitis", dept: "Pulmonology", date: "Feb 18, 2026", status: "Pending Review" },
  { id: "PT-77379", name: "David Smith", age: "62", gender: "M", diagnosis: "Type 2 Diabetes", dept: "Endocrinology", date: "Feb 15, 2026", status: "Active Treatment" },
  { id: "PT-77378", name: "James Wilson", age: "51", gender: "M", diagnosis: "Myocardial Infarction", dept: "Cardiology", date: "Feb 10, 2026", status: "Discharged" },
  { id: "PT-77377", name: "Emily Davis", age: "22", gender: "F", diagnosis: "Migraine Protocol", dept: "Neurology", date: "Feb 05, 2026", status: "Routine Monitoring" },
];

export default function MedicalRecordsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  // --- INTERACTIVE FILTERING LOGIC ---
  const filteredRecords = initialRecords.filter((record) => {
    const matchesSearch = record.name.toLowerCase().includes(searchTerm.toLowerCase()) || record.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = filterDept === "All" || record.dept === filterDept;
    const matchesStatus = filterStatus === "All" || record.status === filterStatus;
    
    return matchesSearch && matchesDept && matchesStatus;
  });

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      
      {/* 1. HEADER & EXPORT */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Electronic Medical Records (EMR)</h1>
          <p className="text-slate-500">Secure, encrypted access to patient histories and diagnoses.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-600 px-4 py-2 rounded-xl transition-colors font-medium text-sm shadow-sm">
          <Download size={16} /> Export HL7
        </button>
      </div>

      {/* 2. FILTER TOOLBAR */}
      <div className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col md:flex-row gap-4 items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        
        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by Patient Name or ID..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2 pl-10 pr-4 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
            <Filter size={14} className="text-slate-400" />
            <select 
              value={filterDept}
              onChange={(e) => setFilterDept(e.target.value)}
              className="bg-transparent text-sm text-slate-700 font-medium focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Departments</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Pulmonology">Pulmonology</option>
              <option value="Endocrinology">Endocrinology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>

          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full sm:w-auto">
            <Filter size={14} className="text-slate-400" />
            <select 
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="bg-transparent text-sm text-slate-700 font-medium focus:outline-none cursor-pointer w-full"
            >
              <option value="All">All Statuses</option>
              <option value="Active Treatment">Active Treatment</option>
              <option value="Routine Monitoring">Routine Monitoring</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Discharged">Discharged</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. PATIENT DATA GRID */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <th className="p-4 font-bold">Patient ID</th>
                <th className="p-4 font-bold">Patient Name</th>
                <th className="p-4 font-bold">Diagnosis</th>
                <th className="p-4 font-bold">Department</th>
                <th className="p-4 font-bold">Status</th>
                <th className="p-4 font-bold text-right">Last Visit</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredRecords.length > 0 ? (
                filteredRecords.map((record) => (
                  <tr key={record.id} className="border-b border-slate-100 hover:bg-blue-50/50 transition-colors cursor-pointer group">
                    <td className="p-4 font-mono text-xs text-slate-400 font-medium">{record.id}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200 group-hover:bg-white group-hover:border-blue-200 group-hover:text-blue-500 transition-colors">
                          <UserCircle size={18} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors">{record.name}</p>
                          <p className="text-xs text-slate-500">{record.age} yrs • {record.gender}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 font-medium text-slate-700">{record.diagnosis}</td>
                    <td className="p-4 text-slate-500">{record.dept}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full border ${
                        record.status === 'Active Treatment' ? 'bg-rose-50 border-rose-200 text-rose-600' : 
                        record.status === 'Routine Monitoring' ? 'bg-emerald-50 border-emerald-200 text-emerald-600' : 
                        record.status === 'Pending Review' ? 'bg-amber-50 border-amber-200 text-amber-600' : 
                        'bg-slate-100 border-slate-200 text-slate-600'
                      }`}>
                        {record.status === 'Active Treatment' && <Activity size={12} />}
                        {record.status === 'Routine Monitoring' && <CheckCircle2 size={12} />}
                        {record.status === 'Pending Review' && <AlertCircle size={12} />}
                        {record.status}
                      </span>
                    </td>
                    <td className="p-4 text-slate-500 text-right font-medium">{record.date}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-500">
                    <FileText size={48} className="mx-auto mb-4 text-slate-300" />
                    <p className="font-medium text-slate-600">No patient records found.</p>
                    <p className="text-sm">Try adjusting your search terms or filters.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Fake Pagination */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center text-sm text-slate-500">
          <span className="font-medium">Showing {filteredRecords.length} records</span>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-700 transition-colors font-medium shadow-sm">Previous</button>
            <button className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-blue-700 font-bold shadow-sm">1</button>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-700 transition-colors font-medium shadow-sm">2</button>
            <button className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 hover:text-slate-700 transition-colors font-medium shadow-sm">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
}