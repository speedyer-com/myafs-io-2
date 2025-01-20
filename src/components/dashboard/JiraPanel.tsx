import React, { useState } from 'react';
import { Plus, Filter, ArrowUpRight, AlertCircle } from 'lucide-react';

export function JiraPanel() {
  const [view, setView] = useState('board');

  const tickets = {
    'To Do': [
      {
        id: 'PROJ-123',
        title: 'Implement user authentication',
        priority: 'high',
        assignee: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80',
        type: 'feature'
      },
      {
        id: 'PROJ-124',
        title: 'Update API documentation',
        priority: 'medium',
        assignee: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&q=80',
        type: 'task'
      }
    ],
    'In Progress': [
      {
        id: 'PROJ-125',
        title: 'Fix responsive layout issues',
        priority: 'high',
        assignee: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&q=80',
        type: 'bug',
        blocked: true
      }
    ],
    'Review': [
      {
        id: 'PROJ-126',
        title: 'Implement search functionality',
        priority: 'medium',
        assignee: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80',
        type: 'feature'
      }
    ],
    'Done': [
      {
        id: 'PROJ-127',
        title: 'Setup CI/CD pipeline',
        priority: 'high',
        assignee: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&q=80',
        type: 'task'
      }
    ]
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-white">Sprint Board</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setView('board')}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                view === 'board'
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              Board
            </button>
            <button
              onClick={() => setView('backlog')}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                view === 'backlog'
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              Backlog
            </button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-3 py-1.5 text-gray-400 hover:bg-gray-800 rounded-lg">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30">
            <Plus className="w-4 h-4" />
            <span>Create Issue</span>
          </button>
        </div>
      </div>

      {/* Sprint Progress */}
      <div className="bg-black/40 rounded-lg border border-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-white font-medium">Sprint 24</h3>
            <p className="text-gray-400 text-sm">March 15 - March 29</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-gray-400 text-sm">Time Remaining</div>
              <div className="text-white font-medium">8 days</div>
            </div>
            <div className="text-right">
              <div className="text-gray-400 text-sm">Points</div>
              <div className="text-white font-medium">34/45</div>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '75%' }}></div>
        </div>
      </div>

      {/* Board */}
      <div className="grid grid-cols-4 gap-4">
        {Object.entries(tickets).map(([status, items]) => (
          <div key={status} className="bg-black/40 rounded-lg border border-gray-800 p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">{status}</h3>
              <span className="text-gray-400 text-sm">{items.length}</span>
            </div>
            <div className="space-y-3">
              {items.map(ticket => (
                <div
                  key={ticket.id}
                  className="bg-gray-900/50 rounded-lg p-3 border border-gray-800 hover:border-purple-500/50 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-sm text-blue-400">{ticket.id}</span>
                    <span
                      className={`px-2 py-0.5 text-xs rounded ${
                        ticket.priority === 'high'
                          ? 'bg-red-500/20 text-red-300'
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                  <h4 className="text-white text-sm mb-3">{ticket.title}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={ticket.avatar}
                        alt={ticket.assignee}
                        className="w-6 h-6 rounded-full"
                      />
                      <span
                        className={`px-2 py-0.5 text-xs rounded ${
                          ticket.type === 'bug'
                            ? 'bg- red-500/20 text-red-300'
                            : ticket.type === 'feature'
                            ? 'bg-green-500/20 text-green-300'
                            : 'bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {ticket.type}
                      </span>
                    </div>
                    {ticket.blocked && (
                      <AlertCircle className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}