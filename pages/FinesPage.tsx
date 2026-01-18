
import React from 'react';
import { UserRole } from '../types';

interface FinesPageProps {
  role: UserRole;
}

const FinesPage: React.FC<FinesPageProps> = ({ role }) => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-2">Fines & Deposits</h1>
        <p className="text-slate-400">Manage financial security and compliance metrics for active exchanges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="glass p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-cyan-500/5 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-4">Held Deposit</span>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$1,250.00</span>
            <span className="text-xs text-teal-400 font-bold mb-1.5 underline underline-offset-4 decoration-teal-400/30">Refundable</span>
          </div>
          <p className="mt-4 text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">Security pooled from 4 active exchanges</p>
        </div>

        <div className="glass p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-rose-500/5 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-4">Outstanding Fines</span>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">$45.00</span>
            <span className="text-xs text-rose-400 font-bold mb-1.5 uppercase tracking-widest">Urgent</span>
          </div>
          <p className="mt-4 text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">Late return fee for Module-092-B</p>
        </div>

        <div className="glass p-8 rounded-[2rem] border border-white/5 bg-gradient-to-br from-teal-500/5 to-transparent">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 block mb-4">Trust Score Impact</span>
          <div className="flex items-end gap-2">
            <span className="text-4xl font-bold text-white">+12</span>
            <span className="text-xs text-teal-400 font-bold mb-1.5 uppercase tracking-widest">Pts</span>
          </div>
          <p className="mt-4 text-[10px] text-slate-500 leading-relaxed uppercase tracking-wider font-semibold">Based on consistent damage-free returns</p>
        </div>
      </div>

      <div className="glass rounded-[2.5rem] border border-white/5 overflow-hidden">
        <div className="px-8 py-6 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-bold text-lg text-white">Compliance Ledger</h3>
          <button className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Download Report</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-widest text-slate-500 border-b border-white/5">
                <th className="px-8 py-4 font-bold">Exchange ID</th>
                <th className="px-8 py-4 font-bold">Category</th>
                <th className="px-8 py-4 font-bold">Amount</th>
                <th className="px-8 py-4 font-bold">Reason</th>
                <th className="px-8 py-4 font-bold">Evidence</th>
                <th className="px-8 py-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: 'TXN-001', cat: 'Late Return', amt: '$45.00', reason: 'Returned 2 days after deadline', status: 'Unpaid' },
                { id: 'TXN-002', cat: 'Damage', amt: '$120.00', reason: 'Micro-USB port replacement', status: 'Disputed' },
                { id: 'TXN-003', cat: 'Deposit', amt: '$500.00', reason: 'Standard security hold', status: 'Active' },
              ].map(txn => (
                <tr key={txn.id} className="text-sm group hover:bg-white/5 transition-colors">
                  <td className="px-8 py-6 font-mono text-slate-300">{txn.id}</td>
                  <td className="px-8 py-6 text-white">{txn.cat}</td>
                  <td className="px-8 py-6 font-bold text-white">{txn.amt}</td>
                  <td className="px-8 py-6 text-slate-400 italic max-w-xs truncate">{txn.reason}</td>
                  <td className="px-8 py-6">
                    <button className="text-xs text-cyan-400 font-bold underline underline-offset-4 opacity-0 group-hover:opacity-100 transition-opacity">View JPEG</button>
                  </td>
                  <td className="px-8 py-6">
                    {role === UserRole.USER ? (
                      <div className="flex gap-3">
                        <button className="px-3 py-1 bg-cyan-500 text-slate-950 rounded text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform">Pay Now</button>
                        <button className="px-3 py-1 border border-white/10 text-white rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-colors">Dispute</button>
                      </div>
                    ) : (
                      <button className="px-3 py-1 bg-white/10 text-white rounded text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-colors">Adjust Fine</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12 p-8 glass rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-4xl opacity-10">🛡️</div>
        <h4 className="text-lg font-bold text-white mb-2">Merit-Based Settlement Process</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
          {[
            { step: '01', title: 'Return', desc: 'Hardware checked in' },
            { step: '02', title: 'Inspection', desc: 'Condition verified' },
            { step: '03', title: 'Settlement', desc: 'Final balance calculated' },
            { step: '04', title: 'Release', desc: 'Deposit returned to wallet' },
          ].map(item => (
            <div key={item.step}>
              <div className="text-cyan-400 font-bold mb-1">{item.step}. {item.title}</div>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinesPage;
