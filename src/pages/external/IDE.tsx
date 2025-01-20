import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export function ExternalIDE() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-[calc(100vh-12rem)]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="flex flex-col items-center space-y-4">
            <Loader2 className="w-8 h-8 text-[#A100FF] animate-spin" />
            <p className="text-gray-400">Loading IDE...</p>
          </div>
        </div>
      )}
      <iframe
        src="http://localhost:3001/proxy?url=https://www.vscode.dev"
        className="w-full min-h-[calc(100vh-12rem)] border border-[#460073] rounded-lg"
        sandbox="allow-same-origin allow-scripts allow-forms"
        onLoad={() => setIsLoading(false)}
        title="IDE Integration"
      />
    </div>
  );
}