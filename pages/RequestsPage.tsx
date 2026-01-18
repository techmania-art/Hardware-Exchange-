
import React, { useState } from 'react';
import { UserRole, ExchangeRequest } from '../types';

interface RequestsPageProps {
  role: UserRole;
}

const MOCK_REQUESTS: ExchangeRequest[] = [
  { id: 'RQ-882', itemName: 'Arduino R4 WiFi', user: 'TechLab Alpha', date: '2025-05-12', status: 'Pending', trustScore: 98, role: UserRole.USER },
  { id: 'RQ-879', itemName: 'NVIDIA Jetson Nano', user: 'Robotics Core', date: '2025-05-10', status: 'Active', trustScore: 85, role: UserRole.USER },
  { id: 'RQ-850', itemName: 'LiDAR Module X1', user: 'Vision AI Inc', date: '2025-04-22', status: 'Completed', trustScore: 92, role: UserRole.RENTER },
  { id: 'RQ-842', itemName: '6-Axis Arm', user: 'University Lab', date: '2025-04-15', status: 'Rejected', trustScore: 45, role: UserRole.RENTER },
];

const RequestsPage: React.FC<RequestsPageProps> = ({ role }) => {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Active' | 'Completed' | 'Rejected'>('Pending');

  const filteredRequests = MOCK_REQUESTS.filter(r => r.status === activeTab);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending': return 'text-amber-400 bg-amber-400/10 border-amber-400/20';
      case 'Active': return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20';
      case 'Completed': return 'text-teal-400 bg-teal-400/10 border-teal-400/20';
      case 'Rejected': return 'text-rose-400 bg-rose-400/10 border-rose-400/20';
      default: return 'text-slate-400 bg-slate-400/10 border-slate-400/20';
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-white">Exchange Requests</h1>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest ${role === UserRole.RENTER ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'}`}>
              {role} View
            </span>
          </div>
          <p className="text-slate-400">Monitor your outgoing and incoming hardware exchange pipelines.</p>
        </div>
        
        {role === UserRole.USER && (
          <button className="px-6 py-3 bg-cyan-500 text-slate-950 font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all">
            New Request
          </button>
        )}
      </div>

      <div className="flex gap-4 p-1 glass rounded-2xl w-fit mb-8 border border-white/5">
        {(['Pending', 'Active', 'Completed', 'Rejected'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-white/10 text-white shadow-xl' : 'text-slate-500 hover:text-slate-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredRequests.map(req => (
          <div key={req.id} className="glass p-6 rounded-[2rem] border border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/10 transition-all">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/5 flex items-center justify-center text-xl">
                {req.itemName.includes('Arduino') ? '⚡' : req.itemName.includes('Jetson') ? '🧠' : '🛰️'}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">{req.itemName}</h3>
                  <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${getStatusColor(req.status)}`}>
                    {req.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  <span>ID: <span className="text-slate-300 font-mono">{req.id}</span></span>
                  <span>•</span>
                  <span>{role === UserRole.RENTER ? 'Requested by: ' : 'Organization: '} <span className="text-slate-300 font-semibold">{req.user}</span></span>
                  <span>•</span>
                  <span>{req.date}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:items-end gap-1">
              <span className="text-[10px] uppercase tracking-widest font-bold text-slate-500">Applicant Trust Score</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${req.trustScore > 90 ? 'bg-teal-400' : req.trustScore > 70 ? 'bg-cyan-400' : 'bg-rose-500'}`} 
                    style={{ width: `${req.trustScore}%` }}
                  ></div>
                </div>
                <span className={`text-sm font-bold ${req.trustScore > 90 ? 'text-teal-400' : req.trustScore > 70 ? 'text-cyan-400' : 'text-rose-500'}`}>{req.trustScore}%</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {role === UserRole.RENTER && req.status === 'Pending' ? (
                <>
                  <button className="flex-1 md:flex-none px-4 py-2 bg-teal-500/20 text-teal-400 border border-teal-500/30 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-teal-500 hover:text-slate-950 transition-all">Accept</button>
                  <button className="flex-1 md:flex-none px-4 py-2 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-rose-500 hover:text-white transition-all">Reject</button>
                </>
              ) : (
                <button className="w-full md:w-auto px-6 py-2 glass hover:bg-white/10 text-white border border-white/5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all">View Timeline</button>
              )}
            </div>
          </div>
        ))}

        {filteredRequests.length === 0 && (
          <div className="py-20 glass rounded-[3rem] border border-dashed border-white/10 text-center">
            <p className="text-slate-500 font-medium">No requests in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RequestsPage;
