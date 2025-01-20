import React from 'react';

export function Catalog() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-white">Product Catalog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder content */}
        <div className="bg-black/40 rounded-lg border border-[#460073] p-6 hover:border-[#A100FF] transition-colors">
          <h2 className="text-lg font-medium text-white mb-2">Product 1</h2>
          <p className="text-gray-400">Product description goes here</p>
        </div>
      </div>
    </div>
  );
}