import React from 'react';
import { TrendingUp, Clock, Bug, CheckCircle2, GitMerge, AlertTriangle } from 'lucide-react';

export function KPISection() {
  const metrics = [
    {
      title: 'Sprint Velocity',
      value: '45',
      trend: '+5%',
      isPositive: true,
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'text-green-400'
    },
    {
      title: 'Code Coverage',
      value: '87%',
      trend: '+2%',
      isPositive: true,
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: 'text-blue-400'
    },
    {
      title: 'Bug Resolution Time',
      value: '4.2d',
      trend: '-12%',
      isPositive: true,
      icon: <Bug className="w-5 h-5" />,
      color: 'text-orange-400'
    },
    {
      title: 'MTTR',
      value: '2.5h',
      trend: '+15%',
      isPositive: false,
      icon: <Clock className="w-5 h-5" />,
      color: 'text-red-400'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-black/40 rounded-lg p-4 border border-gray-800">
            <div className="flex items-start justify-between">
              <div className={`p-2 rounded-lg ${metric.color} bg-opacity-10`}>
                {metric.icon}
              </div>
              <span className={`text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {metric.trend}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-300">{metric.title}</h3>
            <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black/40 rounded-lg p-6 border border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Sprint Burndown</h3>
          <div className="h-64 flex items-center justify-center border-b border-gray-800">
            <span className="text-gray-500">Sprint Burndown Chart Placeholder</span>
          </div>
        </div>
        <div className="bg-black/40 rounded-lg p-6 border border-gray-800">
          <h3 className="text-lg font-medium text-white mb-4">Team Velocity Trend</h3>
          <div className="h-64 flex items-center justify-center border-b border-gray-800">
            <span className="text-gray-500">Velocity Trend Chart Placeholder</span>
          </div>
        </div>
      </div>

      {/* Release Metrics */}
      <div className="bg-black/40 rounded-lg p-6 border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-white">Release Metrics</h3>
          <select className="bg-gray-900 text-gray-300 rounded-lg px-3 py-1.5 border border-gray-700">
            <option>Last 30 days</option>
            <option>Last quarter</option>
            <option>Last year</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg">
            <div className="p-3 bg-green-500/10 rounded-lg">
              <GitMerge className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Successful Deployments</p>
              <p className="text-xl font-bold text-white">94.8%</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg">
            <div className="p-3 bg-purple-500/10 rounded-lg">
              <Clock className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Release Frequency</p>
              <p className="text-xl font-bold text-white">2.4/week</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 p-4 bg-black/20 rounded-lg">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <AlertTriangle className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Failed Deployments</p>
              <p className="text-xl font-bold text-white">5.2%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}