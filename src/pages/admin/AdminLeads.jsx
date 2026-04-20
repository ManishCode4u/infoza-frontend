import React, { useState, useEffect } from "react";
import API_URL from "../../config";
import { Search, Filter, MoreHorizontal, Trash2, Star, RefreshCw } from "lucide-react";

export default function AdminLeads() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`${API_URL}/api/leads`);
      const data = await res.json();
      
      console.log("Leads API Response:", data);
      
      if (data.success) {
        const sorted = data.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLeads(sorted);
      } else {
        setError(data.message || "Failed to load leads.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Cannot reach server. Please ensure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const toggleStar = (id) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, isImportant: !lead.isImportant } : lead));
  };

  const deleteLead = (id) => {
    setLeads(leads.filter(lead => lead.id !== id));
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "New": return "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 border-blue-200 dark:border-blue-800";
      case "Contacted": return "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800";
      case "In Progress": return "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800";
      case "Converted": return "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 border-green-200 dark:border-green-800";
      default: return "bg-gray-50 text-gray-700 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700";
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Leads</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Manage and track your incoming leads.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <button 
            onClick={fetchLeads}
            disabled={loading}
            className="p-2 border border-gray-200 dark:border-zinc-800 text-gray-500 hover:bg-gray-50 dark:hover:bg-zinc-800 rounded-xl transition-colors bg-white dark:bg-zinc-900 shadow-sm"
            title="Refresh Leads"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          </button>
          <div className="flex items-center bg-white dark:bg-zinc-900 px-3 py-2 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm focus-within:border-indigo-500 focus-within:ring-[3px] focus-within:ring-indigo-500/10 transition-all">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="bg-transparent border-none outline-none text-sm ml-2 w-full sm:w-48 text-gray-700 dark:text-gray-200"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-xl shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-zinc-800 flex-shrink-0 transition-colors">
            <Filter size={16} />
            <span className="hidden sm:inline">Filter</span>
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 dark:border-zinc-800 bg-gray-50/50 dark:bg-zinc-900/50 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold">
                <th className="px-6 py-4">Lead Email</th>
                <th className="px-6 py-4">Date Added</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
              {loading ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                      <div className="w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                      <p className="text-sm font-medium">Loading leads...</p>
                    </div>
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <div className="inline-flex flex-col items-center p-4 rounded-xl bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400 text-sm font-medium border border-red-100 dark:border-red-500/20">
                      {error}
                      <button onClick={fetchLeads} className="mt-3 underline text-red-700 hover:text-red-800 dark:hover:text-red-300">Try Again</button>
                    </div>
                  </td>
                </tr>
              ) : leads.length > 0 ? leads.map((lead) => {
                const dateOptions = { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute:'2-digit' };
                const formattedDate = new Date(lead.createdAt).toLocaleDateString(undefined, dateOptions);
                return (
                <tr key={lead.id} className="hover:bg-gray-50/50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                    {lead.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                    {formattedDate}
                  </td>
                  <td className="px-6 py-4">
                    <select 
                      className={`text-xs font-medium px-2.5 py-1 rounded-md border appearance-none outline-none cursor-pointer ${getStatusStyle(lead.status)}`}
                      defaultValue={lead.status}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Converted">Converted</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 text-gray-400 dark:text-gray-500">
                      <button 
                        onClick={() => toggleStar(lead.id)}
                        className={`p-1 transition-colors rounded ${lead.isImportant ? 'text-yellow-500 hover:text-yellow-600' : 'hover:text-yellow-500'}`}
                        title="Mark as important"
                      >
                        <Star size={16} fill={lead.isImportant ? "currentColor" : "none"} />
                      </button>
                      <button className="p-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors rounded">
                        <MoreHorizontal size={18} />
                      </button>
                      <button 
                        onClick={() => deleteLead(lead.id)}
                        className="p-1 hover:text-red-500 transition-colors rounded"
                        title="Delete lead"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              )}) : (
                <tr>
                  <td colSpan="4" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center justify-center text-gray-400 dark:text-gray-500">
                      <Search size={32} className="mb-3 opacity-20" />
                      <p className="text-sm font-medium">No leads found</p>
                      <p className="text-xs mt-1">Your incoming leads will appear here.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{leads.length > 0 ? `Showing 1 to ${leads.length} of ${leads.length} leads` : '0 leads'}</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 rounded bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors border border-gray-200 dark:border-zinc-700">Prev</button>
            <button className="px-3 py-1 rounded bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 font-medium font-medium">1</button>
            <button className="px-3 py-1 rounded bg-gray-50 dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors border border-gray-200 dark:border-zinc-700">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
