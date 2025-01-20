import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { KPISection } from './dashboard/KPISection';
import { CalendarView } from './dashboard/CalendarView';
import { TodoManager } from './dashboard/TodoManager';
import { JiraPanel } from './dashboard/JiraPanel';
import { Forum } from './dashboard/Forum';
import { AIAssistant } from './dashboard/AIAssistant';
import { BarChart2, Calendar, CheckSquare, GitPullRequest, MessageSquare, Bot } from 'lucide-react';

export function Dashboard() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('kpi');

  const tabs = [
    { id: 'kpi', label: 'KPIs & Metrics', icon: <BarChart2 className="w-4 h-4" />, path: '' },
    { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-4 h-4" />, path: 'calendar' },
    { id: 'todo', label: 'Todo', icon: <CheckSquare className="w-4 h-4" />, path: 'todo' },
    { id: 'jira', label: 'Jira Board', icon: <GitPullRequest className="w-4 h-4" />, path: 'jira' },
    { id: 'forum', label: 'Forum', icon: <MessageSquare className="w-4 h-4" />, path: 'forum' },
    { id: 'ai', label: 'AI Assistant', icon: <Bot className="w-4 h-4" />, path: 'ai' }
  ];

  const handleTabChange = (tab: string, path: string) => {
    setSelectedTab(tab);
    navigate(path);
  };

  return (
    <div className="space-y-6">
      {/* Navigation Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-thin">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id, `/dashboard/${tab.path}`)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              selectedTab === tab.id
                ? 'bg-[#A100FF]/20 text-[#A100FF] border border-[#A100FF]/50'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Routes for Dashboard Components */}
      <Routes>
        <Route path="/" element={<KPISection />} />
        <Route path="/calendar" element={<CalendarView />} />
        <Route path="/todo" element={<TodoManager />} />
        <Route path="/jira" element={<JiraPanel />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/ai" element={<AIAssistant />} />
      </Routes>
    </div>
  );
}