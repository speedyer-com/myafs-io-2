import React from 'react';
import { MessageSquare, Hash, Search, ThumbsUp, MessageCircle } from 'lucide-react';

export function Forum() {
  const categories = [
    { id: 'tech', name: 'Technical', count: 45 },
    { id: 'process', name: 'Process', count: 23 },
    { id: 'general', name: 'General', count: 67 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for API versioning',
      category: 'Technical',
      author: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80',
      replies: 12,
      votes: 34,
      tags: ['api', 'best-practices', 'versioning']
    },
    {
      id: 2,
      title: 'Sprint planning improvements',
      category: 'Process',
      author: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop&q=80',
      replies: 8,
      votes: 21,
      tags: ['agile', 'planning', 'scrum']
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Discussion Forum</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30">
          <MessageSquare className="w-4 h-4" />
          <span>New Discussion</span>
        </button>
      </div>

      {/* Search and Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search discussions..."
              className="w-full bg-black/40 text-white rounded-lg pl-10 pr-4 py-2 border border-gray-800 focus:outline-none focus:border-purple-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
        </div>
        <div className="flex space-x-2 overflow-x-auto lg:justify-end">
          {categories.map(category => (
            <button
              key={category.id}
              className="flex items-center space-x-2 px-3 py-1.5 bg-gray-900/50 text-gray-300 rounded-lg hover:bg-gray-800 whitespace-nowrap"
            >
              <Hash className="w-4 h-4" />
              <span>{category.name}</span>
              <span className="px-1.5 py-0.5 text-xs bg-gray-800 rounded-full">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Discussions */}
      <div className="space-y-4">
        {discussions.map(discussion => (
          <div
            key={discussion.id}
            className="bg-black/40 rounded-lg border border-gray-800 p-4 hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-start space-x-4">
              <img
                src={discussion.avatar}
                alt={discussion.author}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white font-medium">{discussion.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-400 text-sm">
                        {discussion.author}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">2 hours ago</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-400">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{discussion.votes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400">
                      <MessageCircle className="w-4 h-4" />
                      <span>{discussion.replies}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  {discussion.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}