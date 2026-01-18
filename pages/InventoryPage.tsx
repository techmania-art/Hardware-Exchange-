
import React, { useState } from 'react';
import { HardwareItem } from '../types';

const INITIAL_INVENTORY: HardwareItem[] = [
  { id: '1', name: 'Arduino R4 WiFi', category: 'Controller', quantity: 12, status: 'Available', maxDuration: 14, icon: '⚡' },
  { id: '2', name: 'LiDAR Module X1', category: 'Sensor', quantity: 3, status: 'Limited', maxDuration: 7, icon: '🛰️' },
  { id: '3', name: 'NVIDIA Jetson Nano', category: 'Compute', quantity: 0, status: 'Unavailable', maxDuration: 30, icon: '🧠' },
  { id: '4', name: 'Ultrasonic Sensor SR04', category: 'Sensor', quantity: 45, status: 'Available', maxDuration: 21, icon: '🔊' },
  { id: '5', name: 'Raspberry Pi 5 (8GB)', category: 'Compute', quantity: 5, status: 'Limited', maxDuration: 14, icon: '🍓' },
  { id: '6', name: '6-Axis Robot Arm Kit', category: 'Actuator', quantity: 2, status: 'Limited', maxDuration: 30, icon: '🤖' },
  { id: '7', name: 'ESP32 Development Board', category: 'Controller', quantity: 28, status: 'Available', maxDuration: 14, icon: '📶' },
  { id: '8', name: 'Load Cell + HX711', category: 'Sensor', quantity: 15, status: 'Available', maxDuration: 7, icon: '⚖️' },
];

const InventoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredItems = INITIAL_INVENTORY.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || item.category === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Hardware Inventory</h1>
          <p className="text-slate-400">Discover and request professional components for your next prototype.</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-2 glass rounded-xl flex items-center gap-3 border border-white/5 focus-within:border-cyan-500/50 transition-all">
            <span className="text-slate-500">🔍</span>
            <input 
              type="text" 
              placeholder="Search components..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-none outline-none text-sm text-white w-48 placeholder:text-slate-600"
            />
          </div>
          <select 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-2 glass rounded-xl border border-white/5 text-sm text-slate-300 focus:outline-none focus:ring-1 focus:ring-cyan-500/50"
          >
            <option value="All">All Categories</option>
            <option value="Controller">Controllers</option>
            <option value="Sensor">Sensors</option>
            <option value="Compute">Compute</option>
            <option value="Actuator">Actuators</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative glass p-6 rounded-[2rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
            <div className="absolute top-4 right-4 text-[10px] uppercase font-bold tracking-widest text-slate-500">
              ID: {item.id}
            </div>
            
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center text-3xl mb-6 shadow-inner">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.name}</h3>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">{item.category}</p>

            <div className="mt-auto space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Availability</span>
                <span className={`font-bold ${item.status === 'Available' ? 'text-teal-400' : item.status === 'Limited' ? 'text-amber-400' : 'text-rose-500'}`}>
                  {item.status === 'Available' ? `${item.quantity} units` : item.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Max Exchange</span>
                <span className="text-slate-200">{item.maxDuration} Days</span>
              </div>

              <button 
                disabled={item.status === 'Unavailable'}
                className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${item.status === 'Unavailable' ? 'bg-slate-800 text-slate-600 cursor-not-allowed' : 'bg-white/5 hover:bg-cyan-500 hover:text-slate-950 text-white border border-white/10 hover:border-transparent'}`}
              >
                {item.status === 'Unavailable' ? 'Out of Stock' : 'Request Exchange'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="py-20 text-center">
          <div className="text-4xl mb-4">🔦</div>
          <h3 className="text-xl font-bold text-white mb-2">No components found</h3>
          <p className="text-slate-500">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export default InventoryPage;
