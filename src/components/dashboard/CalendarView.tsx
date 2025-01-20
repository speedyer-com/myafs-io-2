import React from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export function CalendarView() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = new Date();

  // Sample events data
  const events = [
    { date: 15, type: 'sprint', title: 'Sprint Planning', time: '10:00 AM' },
    { date: 15, type: 'release', title: 'v2.1.0 Release', time: '2:00 PM' },
    { date: 16, type: 'meeting', title: 'Daily Standup', time: '9:30 AM' },
    { date: 17, type: 'deadline', title: 'Code Freeze', time: '6:00 PM' },
    { date: 18, type: 'meeting', title: 'Retrospective', time: '11:00 AM' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Calendar Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <CalendarIcon className="w-5 h-5 text-purple-400" />
          <h2 className="text-xl font-semibold text-white">March 2024</h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <button className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30">
            Today
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg">
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="bg-black/40 rounded-lg border border-gray-800">
        {/* Days Header */}
        <div className="grid grid-cols-7 border-b border-gray-800">
          {days.map(day => (
            <div key={day} className="p-4 text-center text-gray-400 font-medium">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7">
          {Array.from({ length: 35 }).map((_, i) => {
            const date = i + 1;
            const isToday = date === currentDate.getDate();
            const hasEvents = events.some(event => event.date === date);

            return (
              <div
                key={i}
                className={`min-h-[120px] p-2 border-r border-b border-gray-800 last:border-r-0 ${
                  isToday ? 'bg-purple-500/10' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm ${isToday ? 'text-purple-400 font-bold' : 'text-gray-400'}`}>
                    {date}
                  </span>
                  {hasEvents && (
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                  )}
                </div>
                <div className="space-y-1">
                  {events
                    .filter(event => event.date === date)
                    .map((event, index) => (
                      <div
                        key={index}
                        className={`text-xs p-1 rounded ${
                          event.type === 'sprint'
                            ? 'bg-blue-500/20 text-blue-300'
                            : event.type === 'release'
                            ? 'bg-green-500/20 text-green-300'
                            : event.type === 'deadline'
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-gray-700/50 text-gray-300'
                        }`}
                      >
                        <div className="font-medium">{event.title}</div>
                        <div className="text-xs opacity-75">{event.time}</div>
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-black/40 rounded-lg border border-gray-800 p-4">
        <h3 className="text-lg font-medium text-white mb-4">Upcoming Events</h3>
        <div className="space-y-2">
          {events.map((event, index) => (
            <div key={index} className="flex items-center space-x-4 p-3 hover:bg-gray-800/50 rounded-lg">
              <div
                className={`w-2 h-2 rounded-full ${
                  event.type === 'sprint'
                    ? 'bg-blue-400'
                    : event.type === 'release'
                    ? 'bg-green-400'
                    : event.type === 'deadline'
                    ? 'bg-red-400'
                    : 'bg-gray-400'
                }`}
              ></div>
              <div className="flex-1">
                <h4 className="text-white font-medium">{event.title}</h4>
                <p className="text-gray-400 text-sm">March {event.date}, {event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}