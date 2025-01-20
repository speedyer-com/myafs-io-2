import React, { useState } from 'react';
import { Plus, Clock, AlertCircle, CheckCircle, MoreVertical, Users } from 'lucide-react';

export function TodoManager() {
  const [filter, setFilter] = useState('all');
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Review API documentation',
      priority: 'high',
      status: 'in-progress',
      dueDate: '2024-03-20',
      assignee: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80',
      dependencies: ['API-123', 'DOC-456'],
      timeSpent: '2h 30m'
    },
    {
      id: 2,
      title: 'Update unit tests for auth module',
      priority: 'medium',
      status: 'todo',
      dueDate: '2024-03-22',
      assignee: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&q=80',
      dependencies: ['AUTH-789'],
      timeSpent: '1h 45m'
    },
    {
      id: 3,
      title: 'Fix responsive layout issues',
      priority: 'low',
      status: 'done',
      dueDate: '2024-03-18',
      assignee: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&q=80',
      dependencies: [],
      timeSpent: '4h 15m'
    }
  ]);

  const handleTaskStatusChange = (taskId: number) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          status: task.status === 'done' ? 'todo' : 'done'
        };
      }
      return task;
    }));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold text-white">Tasks</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                filter === 'all'
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('my')}
              className={`px-3 py-1.5 rounded-lg text-sm ${
                filter === 'my'
                  ? 'bg-purple-500/20 text-purple-300'
                  : 'text-gray-400 hover:bg-gray-800'
              }`}
            >
              My Tasks
            </button>
          </div>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30">
          <Plus className="w-4 h-4" />
          <span>New Task</span>
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="bg-black/40 rounded-lg border border-gray-800 p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <input
                  type="checkbox"
                  checked={task.status === 'done'}
                  onChange={() => handleTaskStatusChange(task.id)}
                  className="mt-1 rounded border-gray-600 text-purple-500 focus:ring-purple-500"
                />
                <div>
                  <h3 className="text-white font-medium">{task.title}</h3>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>Due {task.dueDate}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Users className="w-4 h-4" />
                      <span>{task.assignee}</span>
                    </div>
                  </div>
                  {task.dependencies.length > 0 && (
                    <div className="flex items-center space-x-2 mt-2">
                      {task.dependencies.map((dep, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded"
                        >
                          {dep}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    task.priority === 'high'
                      ? 'bg-red-500/20 text-red-300'
                      : task.priority === 'medium'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-green-500/20 text-green-300'
                  }`}
                >
                  {task.priority}
                </span>
                <button className="p-1 hover:bg-gray-800 rounded">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Time Tracking Summary */}
      <div className="bg-black/40 rounded-lg border border-gray-800 p-4">
        <h3 className="text-lg font-medium text-white mb-4">Time Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">Today</div>
            <div className="text-xl font-bold text-white">4h 30m</div>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">This Week</div>
            <div className="text-xl font-bold text-white">23h 15m</div>
          </div>
          <div className="p-4 bg-gray-900/50 rounded-lg">
            <div className="text-gray-400 text-sm mb-1">This Sprint</div>
            <div className="text-xl font-bold text-white">87h 45m</div>
          </div>
        </div>
      </div>
    </div>
  );
}