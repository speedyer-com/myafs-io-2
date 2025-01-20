import { Routes, Route, Navigate } from 'react-router-dom';
import { TopNav } from './components/navigation/TopNav';
import { BottomNav } from './components/navigation/BottomNav';
import { Breadcrumbs } from './components/navigation/Breadcrumbs';
import { Dashboard } from './components/Dashboard';
import { Catalog } from './pages/Catalog';
import { Templates } from './pages/Templates';
import { Documentation } from './pages/Documentation';
import { Projects } from './pages/Projects';
import { PullRequests } from './pages/PullRequests';
import { Teams } from './pages/Teams';
import { Database } from './pages/Database';
import { Services } from './pages/Services';
import { ExternalIDE } from './pages/external/IDE';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <TopNav />
      <div className="pt-16 pb-16">
        <main className="container mx-auto px-4 py-6">
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/pull-requests" element={<PullRequests />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/database" element={<Database />} />
            <Route path="/services" element={<Services />} />
            <Route path="/external/IDE" element={<ExternalIDE />} />
          </Routes>
        </main>
      </div>
      <BottomNav />
    </div>
  );
}