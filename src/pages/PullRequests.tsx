import React from 'react';

export function PullRequests() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Pull Requests</h1>
      <div className="bg-black/40 rounded-lg border border-[#460073] p-6">
        {/* Placeholder content */}
        <div className="space-y-4">
          <div className="p-4 border border-[#460073] rounded-lg hover:border-[#A100FF] transition-colors">
            <h2 className="text-lg font-medium text-white">PR #123: Feature Implementation</h2>
            <p className="text-gray-400">Pull request description goes here</p>
          </div>
        </div>
      </div>
    </div>
  );
}