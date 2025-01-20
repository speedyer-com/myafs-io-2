import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
      <Link
        to="/"
        className="flex items-center hover:text-[#A100FF] transition-colors duration-200"
      >
        <Home className="w-4 h-4" />
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return (
          <React.Fragment key={name}>
            <ChevronRight className="w-4 h-4" />
            <Link
              to={routeTo}
              className={`
                capitalize hover:text-[#A100FF] transition-colors duration-200
                ${isLast ? 'text-[#A100FF] font-medium' : ''}
              `}
            >
              {name.replace('-', ' ')}
            </Link>
          </React.Fragment>
        );
      })}
    </nav>
  );
}