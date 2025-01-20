import React from 'react';

export function Documentation() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Documentation</h1>
      <div className="bg-black/40 rounded-lg border border-[#460073] p-6">
        {/* Placeholder content */}
        <div className="prose prose-invert">
          <h2>Getting Started</h2>
          <p>Documentation content goes here</p>
        </div>
      </div>
    </div>
  );
}