import React from 'react';

export function Database() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Database Management</h1>
      <div className="bg-black/40 rounded-lg border border-[#460073] p-6">
        {/* Placeholder content */}
        <div className="space-y-4">
          <div className="p-4 border border-[#460073] rounded-lg">
            <h2 className="text-lg font-medium text-white">Database 1</h2>
            <p className="text-gray-400">Database details go here</p>
          </div>
        </div>
      </div>
    </div>
  );
}