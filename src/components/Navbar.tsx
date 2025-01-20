import React from 'react';
import { Search, Settings, User, Code2, BookOpen, FileCode2, Package, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Code2 className="w-8 h-8 text-[#a100ff]" />
            <span className="text-white font-bold text-xl">myAFS.io</span>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem icon={<Package className="w-5 h-5" />} text="Catalog" />
            <NavItem icon={<FileCode2 className="w-5 h-5" />} text="Templates" />
            <NavItem icon={<BookOpen className="w-5 h-5" />} text="Docs" />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search AFS..."
                className="w-full bg-gray-900 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-300" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <User className="w-5 h-5 text-gray-300" />
            </button>
            <button className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-lg transition-colors">
      {icon}
      <span>{text}</span>
    </button>
  );
}