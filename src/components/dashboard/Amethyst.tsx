import React, { useState } from 'react';
import { Send, Bot, BookOpen, GitBranch, HelpCircle, Zap } from 'lucide-react';

export function Amethyst() {
  const [message, setMessage] = useState('');

  const quickLinks = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      title: 'Documentation',
      description: 'Access project documentation'
    },
    {
      icon: <GitBranch className="w-4 h-4" />,
      title: 'Git Commands',
      description: 'Common Git operations'
    },
    {
      icon: <HelpCircle className="w-4 h-4" />,
      title: 'Troubleshooting',
      description: 'Common issues and solutions'
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: 'Best Practices',
      description: 'Development guidelines'
    }
  ];

  const messages = [
    {
      type: 'bot',
      content: 'Hello! How can I help you today?'
    },
    {
      type: 'user',
      content: 'How do I set up the development environment?'
    },
    {
      type: 'bot',
      content: 'I can help you with that! Here are the steps:\n\n1. Clone the repository\n2. Install dependencies using `npm install`\n3. Copy `.env.example` to `.env`\n4. Run `npm run dev` to start the development server'
    }
  ];

  return (
    <div className="p-6 h-[calc(100vh-16rem)]">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
        {/* Main Chat Area */}
        <div className="lg:col-span-3 flex flex-col h-full">
          <div className="flex-1 space-y-4 overflow-y-auto mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  msg.type === 'user' ? 'justify-end' : ''
                }`}
              >
                {msg.type === 'bot' && (
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-purple-400" />
                  </div>
                )}
                <div
                  className={`max-w-xl rounded-lg p-4 ${
                    msg.type === 'user'
                      ? 'bg-purple-500/20 text-purple-100'
                      : 'bg-gray-900/50 text-gray-100'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
                {msg.type === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&q=80"
                      alt="User"
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything..."
              className="w-full bg-black/40 text-white rounded-lg pl-4 pr-12 py-3 border border-gray-800 focus:outline-none focus:border-purple-500"
            />
            <button className="absolute right-2 top-2 p-2 text-purple-400 hover:text-purple-300 rounded-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-white">Quick Links</h3>
          <div className="space-y-2">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="w-full p-4 bg-black/40 rounded-lg border border-gray-800 hover:border-purple-500/50 transition-colors text-left"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-purple-400">{link.icon}</div>
                  <div>
                    <div className="text-white font-medium">{link.title}</div>
                    <div className="text-gray-400 text-sm">
                      {link.description}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}