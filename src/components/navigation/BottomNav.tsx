import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Layout,
  FileCode,
  Book,
  FolderGit2,
  GitPullRequest,
  Users,
  Database,
  Cloud,
  Chrome,
  LayoutDashboard
} from 'lucide-react';

export function BottomNav() {
  const navItems = [
    { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/catalog', icon: Layout, label: 'Catalog' },
    { to: '/templates', icon: FileCode, label: 'Templates' },
    { to: '/documentation', icon: Book, label: 'Docs' },
    { to: '/projects', icon: FolderGit2, label: 'Projects' },
    { to: '/pull-requests', icon: GitPullRequest, label: 'PRs' },
    { to: '/teams', icon: Users, label: 'Teams' },
    { to: '/database', icon: Database, label: 'Database' },
    { to: '/services', icon: Cloud, label: 'Services' },
    { to: '/external/google', icon: Chrome, label: 'Google' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-black/95 backdrop-blur-sm border-t border-[#460073] z-50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full overflow-x-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `
                flex flex-col items-center justify-center px-3 py-1
                text-sm font-medium transition-all duration-200
                hover:text-[#00FFFF] hover:scale-105
                ${isActive ? 'text-[#A100FF]' : 'text-gray-400'}
              `}
            >
              <item.icon className="w-5 h-5" />
              <span className="mt-1 text-xs">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}