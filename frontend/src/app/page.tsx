'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function Home() {
  const { data: health, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const { data } = await axios.get(`${apiUrl}/api/health`);
      return data;
    },
    retry: false,
  });

  const { data: risks } = useQuery({
    queryKey: ['risks'],
    queryFn: async () => {
      const { data } = await axios.get(`${apiUrl}/api/risks`);
      return data.data || [];
    },
    retry: false,
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Kondwani</h1>
            <p className="text-xl text-slate-600 mb-8">Identify, assess, and mitigate project risks</p>
          </div>

          {/* Status Card */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">API Status</h2>
            {isLoading && <p className="text-slate-600">Connecting to backend...</p>}
            {error && <p className="text-red-600">Failed to connect to backend</p>}
            {health && (
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <p className="text-green-600 font-medium">Backend is running ✓</p>
              </div>
            )}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Risk Identification</h3>
              <p className="text-slate-600">Log and categorize project risks</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Assessment</h3>
              <p className="text-slate-600">Evaluate probability and impact</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Mitigation Plans</h3>
              <p className="text-slate-600">Create and track action plans</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Collaboration</h3>
              <p className="text-slate-600">Share risks with your team</p>
            </div>
          </div>

          {/* Risks Section */}
          {risks && risks.length > 0 && (
            <div className="bg-white rounded-lg shadow-md p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Recent Risks</h2>
              <div className="space-y-4">
                {risks.map((risk: any, index: number) => (
                  <div key={index} className="border border-slate-200 rounded p-4">
                    <p className="text-slate-600">{JSON.stringify(risk)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Getting Started */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Getting Started</h3>
            <ul className="text-blue-800 space-y-2">
              <li>✓ Backend is running at http://localhost:5000</li>
              <li>✓ Frontend is running at http://localhost:3000</li>
              <li>→ Next: Create your first risk assessment</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
