
import React from 'react';
import { Page, UserRole } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
  onLogout: () => void;
  role: UserRole;
  toggleRole: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, onLogout, role, toggleRole }) => {
  const navItems = [
    { label: 'Inventory', page: Page.INVENTORY },
    { label: 'Requests', page: Page.REQUESTS },
    { label: 'Fines & Deposits', page: Page.FINES },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-6 py-3 rounded-2xl">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => setPage(Page.INVENTORY)}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-white font-bold text-xs">HX</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Hardware<span className="text-cyan-400">Exchange</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => setPage(item.page)}
              className={`text-sm font-medium transition-colors hover:text-cyan-400 ${currentPage === item.page ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleRole}
            className="hidden sm:block text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full border border-white/10 hover:border-cyan-500/50 transition-all text-slate-400 hover:text-cyan-400"
          >
            Switch to {role === UserRole.USER ? 'Renter' : 'User'}
          </button>
          <div className="h-6 w-px bg-white/10 hidden sm:block"></div>
          <button 
            onClick={onLogout}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
