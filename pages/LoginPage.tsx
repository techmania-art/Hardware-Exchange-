
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>(UserRole.USER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onLogin(selectedRole);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="w-full max-w-md z-10">
        <div className="glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-xl shadow-cyan-500/20">
               <span className="text-white font-black text-2xl">HX</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm">Access your hardware exchange hub</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex p-1 glass rounded-xl mb-6 border border-white/5">
              <button
                type="button"
                onClick={() => setSelectedRole(UserRole.USER)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${selectedRole === UserRole.USER ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                Developer
              </button>
              <button
                type="button"
                onClick={() => setSelectedRole(UserRole.RENTER)}
                className={`flex-1 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-all ${selectedRole === UserRole.RENTER ? 'bg-cyan-500 text-slate-950' : 'text-slate-400 hover:text-white'}`}
              >
                Organization
              </button>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Organization ID / Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="id@org.hardware.exchange"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Secure Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                required
              />
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-4 rounded-xl transition-all shadow-lg shadow-cyan-500/20 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>Sign In to Vault</>
              )}
            </button>
          </form>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500 font-medium">
            <button className="hover:text-cyan-400 transition-colors">Forgot Password?</button>
            <button className="hover:text-cyan-400 transition-colors">Register Entity</button>
          </div>
        </div>
        
        <p className="mt-8 text-center text-slate-500 text-[10px] uppercase tracking-widest font-bold">
          Encrypted Session • Merit-Based Protocol v2.5
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
