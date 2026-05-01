/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Download, 
  TrendingUp,   Table, 
  Info, 
  ChevronRight, 
  Zap, 
  ShieldCheck, 
  Clock,
  Play
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface Market {
  id: string;
  name: string;
  openTime: string;
  closeTime: string;
  result: string; // Format: "123-45-678"
  status: 'running' | 'closed';
}

interface GameRate {
  title: string;
  rate: string;
}

// --- Mock Data ---
const MARKETS: Market[] = [
  { id: '1', name: 'MILAN MORNING', openTime: '10:15 AM', closeTime: '11:15 AM', result: '123-45-678', status: 'closed' },
  { id: '2', name: 'SRIDEVI', openTime: '11:35 AM', closeTime: '12:35 PM', result: '246-80-135', status: 'closed' },
  { id: '3', name: 'KALYAN MORNING', openTime: '11:00 AM', closeTime: '12:02 PM', result: '***-**-***', status: 'running' },
  { id: '4', name: 'PADMAVATI', openTime: '11:40 AM', closeTime: '12:40 PM', result: '456-78-901', status: 'closed' },
  { id: '5', name: 'MADHUR MORNING', openTime: '11:30 AM', closeTime: '12:30 PM', result: '***-**-***', status: 'running' },
  { id: '6', name: 'TIME BAZAR', openTime: '01:00 PM', closeTime: '02:00 PM', result: '***-**-***', status: 'running' },
  { id: '7', name: 'MILAN DAY', openTime: '03:00 PM', closeTime: '05:00 PM', result: '***-**-***', status: 'running' },
  { id: '8', name: 'KALYAN', openTime: '04:00 PM', closeTime: '06:00 PM', result: '***-**-***', status: 'running' },
];

const GAME_RATES: GameRate[] = [
  { title: 'Single Digit', rate: '10 Ka 95' },
  { title: 'Jodi Digits', rate: '10 Ka 950' },
  { title: 'Single Pana', rate: '10 Ka 1500' },
  { title: 'Double Pana', rate: '10 Ka 3000' },
  { title: 'Triple Pana', rate: '10 Ka 7000' },
  { title: 'Half Sangam', rate: '10 Ka 10000' },
  { title: 'Full Sangam', rate: '10 Ka 100000' },
];

const CHARTS = [
  'Milan Morning Chart', 'Sridevi Chart', 'Kalyan Morning Chart', 
  'Padmavati Chart', 'Madhur Morning Chart', 'Time Bazar Chart', 
  'Tara Mumbai Day Chart', 'Milan Day Chart', 'Kalyan Chart'
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const DOWNLOAD_LINK = "https://sara777offical.com/sara777.apk";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfcf0] text-black font-sans selection:bg-yellow-400 selection:text-black">
      {/* --- Navbar --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex flex-col items-start justify-center p-2 shadow-lg shadow-yellow-500/20 leading-none">
              <span className="text-[14px] font-black text-black">Sara</span>
              <span className="text-[10px] font-bold text-black self-end">777</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black tracking-tighter text-black leading-none">
                SARA<span className="text-yellow-600">777</span>
              </h1>
              <p className="text-[8px] font-bold text-neutral-400 uppercase tracking-[0.2em]">Official App</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-neutral-600">
              <a href="#markets" className="hover:text-yellow-600 transition-colors">Markets</a>
              <a href="#rates" className="hover:text-yellow-600 transition-colors">Rates</a>
              <a href="#charts" className="hover:text-yellow-600 transition-colors">Charts</a>
            </div>

            <a 
              href={DOWNLOAD_LINK}
              target="_blank"
              rel="no-referrer"
              className="flex items-center gap-2 bg-black text-white hover:bg-neutral-800 px-6 py-3 rounded-2xl transition-all shadow-lg shadow-black/10 active:scale-95"
            >
              <Download size={18} className="text-yellow-400" />
              <span className="text-xs font-black uppercase tracking-widest">Download App</span>
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-yellow-300/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 border border-yellow-200 rounded-full text-xs font-bold text-yellow-700 mb-8 uppercase tracking-widest">
              <Zap size={14} className="fill-yellow-500" /> Trusted by 10 Lakh+ India Users
            </span>
            <h2 className="text-5xl md:text-7xl xl:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-black">
              ORIGINAL <span className="text-yellow-500">SARA777</span> <br/> OFFICIAL APP
            </h2>
            <p className="text-xl text-neutral-600 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              India's fastest results and premium gaming experience. Download the official Sara777 app now and join the winner's club.
            </p>
            
            <div className="flex flex-col lg:items-start items-center justify-center gap-6">
              <a 
                href={DOWNLOAD_LINK}
                target="_blank"
                rel="no-referrer"
                className="group relative w-full sm:w-auto bg-black hover:bg-neutral-900 text-white px-12 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-4 transition-all active:scale-95 shadow-2xl shadow-black/20"
              >
                <Download size={24} className="group-hover:translate-y-1 transition-transform" />
                DOWNLOAD OFFICIAL APP
              </a>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Safe & Secure APK File</p>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12 opacity-60">
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><ShieldCheck size={18} className="text-yellow-600" /> 100% Secure</div>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><TrendingUp size={18} className="text-yellow-600" /> Live Results</div>
              <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest"><Zap size={18} className="text-yellow-600" /> Instant Withdrawal</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mx-auto lg:ml-auto max-w-[320px] md:max-w-[360px]"
          >
            <div className="absolute inset-0 bg-yellow-400 blur-[100px] opacity-20 -z-10" />
            
            {/* --- CSS iPhone Frame Mockup --- */}
            <div className="relative w-full aspect-[9/19.5] bg-neutral-900 rounded-[3.5rem] p-2 border-8 border-[#333] shadow-2xl overflow-hidden">
               {/* Internal Phone View */}
               <div className="w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col font-sans">
                 {/* App Header */}
                 <div className="bg-white px-4 pt-10 pb-4 flex items-center justify-between border-b border-black/5">
                   <div className="text-yellow-500 font-black text-lg">SARA 777</div>
                   <div className="p-2 bg-yellow-400 rounded-lg text-[10px] font-black">LOGIN</div>
                 </div>

                 {/* Welcome Banner */}
                 <div className="bg-blue-900 m-3 rounded-2xl p-4 text-white">
                   <div className="text-xs font-bold mb-1 opacity-80 italic">Bharat ka No.1 Platform</div>
                   <div className="text-lg font-black leading-tight">Fastest Results & Best Rates</div>
                   <div className="mt-3 flex gap-2">
                     <div className="flex-1 bg-yellow-500 rounded-lg h-8 flex items-center justify-center text-black text-[10px] font-black">ADD FUND</div>
                     <div className="flex-1 bg-red-500 rounded-lg h-8 flex items-center justify-center text-white text-[10px] font-black">WITHDRAW</div>
                   </div>
                 </div>

                 {/* Market List Mock */}
                 <div className="flex-1 overflow-y-auto px-3 space-y-3 pb-4">
                   {[
                     { name: 'SARA MORNING', time: '09:00 AM', res: '466-61-236' },
                     { name: 'RADHA MORNING', time: '09:00 AM', res: '390-20-460' },
                     { name: 'SITA MORNING', time: '09:30 AM', res: '446-48-369' },
                     { name: 'SRIDEVI NIGHT', time: '07:00 PM', res: '***-**-***' }
                   ].map((m, i) => (
                     <div key={i} className="bg-white border border-black/5 rounded-xl p-3 shadow-sm">
                       <div className="flex justify-between items-center mb-2">
                         <span className="text-[10px] font-black uppercase text-neutral-400">{m.name}</span>
                         <span className="text-[8px] font-bold text-neutral-400">{m.time}</span>
                       </div>
                       <div className="text-center bg-neutral-50 py-2 rounded-lg text-lg font-mono font-black text-blue-900 tracking-widest">{m.res}</div>
                     </div>
                   ))}
                 </div>
               </div>
               
               {/* iPhone Notch */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-2xl z-20" />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -left-10 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-black/5 animate-bounce-subtle">
              <div className="text-green-500 font-black text-xl">950+</div>
              <div className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">Winning Jodi</div>
            </div>
            <div className="absolute -right-10 bottom-1/4 bg-white p-4 rounded-2xl shadow-xl border border-black/5 delay-700 animate-bounce-subtle">
              <div className="text-yellow-500 font-black text-xl">100%</div>
              <div className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">Safe Payout</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Live Markets --- */}
      <section id="markets" className="py-20 bg-white/50 relative border-y border-black/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
            <div>
              <h3 className="text-4xl font-black mb-2 italic">LIVE RESULTS</h3>
              <p className="text-neutral-500 text-sm font-medium">Flash updates from all major Matka markets.</p>
            </div>
            <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-widest bg-green-50 px-4 py-2 rounded-full border border-green-100">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Live Network Active
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARKETS.map((market, index) => (
              <motion.div 
                key={market.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group p-6 bg-white border border-black/5 rounded-[32px] hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 transition-all"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${market.status === 'running' ? 'bg-green-100 text-green-600' : 'bg-red-50 text-red-500'}`}>
                    {market.status}
                  </span>
                  <div className="text-[10px] text-neutral-400 font-bold uppercase flex items-center gap-1">
                    <Clock size={10} /> {market.openTime}
                  </div>
                </div>
                <h4 className="text-lg font-black mb-6 tracking-tight">{market.name}</h4>
                <div className="text-center bg-neutral-50 py-5 rounded-2xl border border-black/5 group-hover:bg-yellow-50 transition-colors">
                  <p className="text-2xl font-black tracking-widest font-mono text-black group-hover:text-yellow-600 transition-colors">{market.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Game Rates --- */}
      <section id="rates" className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-5xl font-black mb-8 leading-tight">UNBEATABLE <br/><span className="text-yellow-500">WINNING RATES</span></h3>
            <p className="text-neutral-600 mb-12 text-lg leading-relaxed">
              We provide the highest return on investment in the industry. Play smart, win big, and enjoy total transparency with Sara777.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Secure Deposits', desc: 'Auto-add money system' },
                { title: 'Super Fast', desc: 'Results in seconds' },
                { title: '24/7 Support', desc: 'Direct admin help' },
                { title: 'Easy Payouts', desc: 'Direct bank transfer' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-yellow-400 rounded-full flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-sm">{item.title}</h5>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border-8 border-yellow-100 rounded-[48px] p-8 md:p-12 shadow-2xl relative"
          >
            <div className="space-y-5">
              {GAME_RATES.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between py-4 border-b border-black/5 last:border-0 group">
                  <span className="font-bold text-neutral-500 group-hover:text-black transition-colors">{item.title}</span>
                  <div className="flex flex-col items-end">
                    <span className="text-black font-black text-xl italic">{item.rate}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 bg-black rounded-3xl p-6 text-center">
              <p className="text-yellow-400 font-black text-sm uppercase tracking-[0.2em]">Play Now & Win Big</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Charts --- */}
      <section id="charts" className="py-24 bg-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h3 className="text-5xl font-black flex items-center gap-4">
                <Table className="text-black" size={40} /> CHARTS
              </h3>
              <p className="text-neutral-600 font-medium max-w-md italic">Expert data collection for Radha Morning, Sridevi, Kalyan and many more.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CHARTS.map((chart, idx) => (
              <div 
                key={idx}
                className="group flex items-center justify-between p-6 bg-white border border-black/5 rounded-2xl cursor-default text-left"
              >
                <span className="font-black text-sm uppercase tracking-tight">{chart}</span>
                <ChevronRight size={18} className="text-yellow-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white py-20 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center font-bold text-yellow-400">S</div>
              <h1 className="text-2xl font-black tracking-tighter">SARA777</h1>
            </div>
            <p className="text-neutral-500 text-xs leading-relaxed font-medium">
              Join India's most trusted Satta Matka network. Experience real-time results, high rates, and a community of millions.
            </p>
          </div>

          <div>
            <h6 className="font-black text-xs uppercase tracking-widest text-black mb-8 border-b-2 border-yellow-400 w-fit pb-1">Essential Links</h6>
            <ul className="space-y-4 text-sm font-bold text-neutral-400">
              <li><a href="#" className="hover:text-black transition-colors">Main Console</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Market Timings</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Panel Charts</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-black text-xs uppercase tracking-widest text-black mb-8 border-b-2 border-yellow-400 w-fit pb-1">Official Status</h6>
            <div className="bg-yellow-50 p-6 rounded-3xl border border-yellow-100 italic text-xs text-neutral-600 font-medium">
              "Providing the most authentic Satta Matka results since inception. Trust the original, play the best."
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-20 pt-10 border-t border-black/5 text-center text-[10px] text-neutral-400 font-black tracking-[0.4em]">
           &copy; 2026 SARA777 OFFICIAL | ALL RIGHTS RESERVED
        </div>
      </footer>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
