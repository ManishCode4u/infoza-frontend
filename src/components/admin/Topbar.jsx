import React, { useEffect, useState, useRef } from "react";
import { Search, Bell, Menu, Moon, Sun, User, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Topbar({ toggleSidebar }) {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("admin_theme") === "dark" || false;
  });
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();
  
  const notificationsRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("admin_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("admin_theme", "light");
    }
  }, [isDark]);

  return (
    <header className="h-16 px-4 sm:px-6 bg-white dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-800 flex items-center justify-between sticky top-0 z-20 transition-colors duration-200">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="p-2 sm:hidden text-gray-500 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg">
          <Menu size={20} />
        </button>
        <div className="hidden sm:flex items-center bg-gray-50 dark:bg-zinc-800/50 px-3 py-2 rounded-xl border border-gray-200/60 dark:border-zinc-700/50 focus-within:border-indigo-500 focus-within:ring-[3px] focus-within:ring-indigo-500/10 transition-all duration-200">
          <Search size={16} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border-none outline-none text-sm ml-2 w-64 text-gray-700 dark:text-gray-200 placeholder-gray-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <button 
          onClick={() => setIsDark(!isDark)}
          className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Notifications Dropdown */}
        <div className="relative" ref={notificationsRef}>
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors relative"
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-zinc-900"></span>
          </button>
          
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-zinc-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-2 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-900/50">
                <span className="font-bold text-gray-900 dark:text-white text-sm">Notifications</span>
                <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-400 px-2 py-0.5 rounded-full font-medium">2 New</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 cursor-pointer border-b border-gray-50 dark:border-zinc-800/50 transition-colors">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">New lead: Anna Smith</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">2 minutes ago</p>
                </div>
                <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-200">New message from David</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">1 hour ago</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile / Logout Dropdown */}
        <div className="relative" ref={profileRef}>
          <div 
            onClick={() => setShowProfile(!showProfile)}
            className="ml-2 w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center border border-indigo-100 dark:border-indigo-800/50 cursor-pointer hover:shadow-sm transition-shadow"
          >
            <User size={16} className="text-indigo-600 dark:text-indigo-400" />
          </div>
          
          {showProfile && (
            <div className="absolute right-0 mt-3 w-48 bg-white dark:bg-zinc-900 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-zinc-800 py-1 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="px-4 py-3 border-b border-gray-100 dark:border-zinc-800">
                <p className="text-sm font-bold text-gray-900 dark:text-white truncate">manish12643@gmail.com</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Administrator</p>
              </div>
              <div className="p-1">
                <button 
                  onClick={() => {
                    localStorage.removeItem('admin_authenticated');
                    navigate('/admin/login');
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 font-medium hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors"
                >
                  <LogOut size={16} />
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
