import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';

export function TopNav() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-purple-500/10 backdrop-blur-sm border-b border-[#460073] z-50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-[#A100FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-semibold hidden sm:block">myAFS.io</span>
          </Link>

          {/* Search */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search everything..."
                className="w-full bg-black/50 border border-[#460073] rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#A100FF] focus:ring-1 focus:ring-[#A100FF] transition duration-200"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-[#460073] rounded-lg transition-all duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#00FFFF] rounded-full"></span>
            </button>
            <button className="flex items-center space-x-2 p-2 hover:bg-[#460073] rounded-lg transition-all duration-200">
              <User className="w-5 h-5" />
              <span className="hidden sm:block">John Doe</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}