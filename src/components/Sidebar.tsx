import React from 'react';
import { FolderGit2, GitBranch, Users, Database, Cloud } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-gray-900 border-r border-purple-500/20 hidden md:block">
      <div className="p-4">
        <div className="space-y-6">
          <SidebarSection title="Development">
            <SidebarItem icon={<FolderGit2 />} text="Projects" count={12} />
            <SidebarItem icon={<GitBranch />} text="Pull Requests" count={5} />
            <SidebarItem icon={<Users />} text="Teams" count={3} />
          </SidebarSection>
          
          <SidebarSection title="Infrastructure">
            <SidebarItem icon={<Database />} text="Databases" count={8} />
            <SidebarItem icon={<Cloud />} text="Services" count={15} />
          </SidebarSection>
        </div>
      </div>
    </div>
  );
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium text-gray-400 px-3">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarItem({ icon, text, count }: { icon: React.ReactNode; text: string; count: number }) {
  return (
    <button className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors group">
      <div className="flex items-center space-x-3">
        <span className="text-gray-400 group-hover:text-[#a100ff] transition-colors">{React.cloneElement(icon as any, { size: 18 })}</span>
        <span>{text}</span>
      </div>
      <span className="text-xs bg-gray-800 group-hover:bg-[#a100ff] px-2 py-1 rounded-full transition-colors">{count}</span>
    </button>
  );
}