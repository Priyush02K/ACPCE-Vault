import React from 'react';
import {
  ShieldCheck,
  LogIn,
  LogOut,
  UserPlus,
  MapPin,
  Cpu,
  Bell,
} from 'lucide-react';

const Navbar = ({ currentUser, onOpenAuth, onLogout }) => {
  return (
    <>
      {/* 1. Top Official College & Branch Identity Banner */}
      <div className="bg-[#0F4743] text-[#F3EEE8] border-b border-[#FAF7F2]/10">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FF6848] text-white font-black text-base shadow-md">
                ACPCE
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase text-white">
                    A. C. Patil College of Engineering, Kharghar, Navi Mumbai
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-md bg-[#FAF7F2]/15 px-2 py-0.5 text-[10px] font-semibold text-[#F3EEE8]">
                    <MapPin className="h-3 w-3 text-[#FF6848]" /> Sector 4, Kharghar
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-[#FF6848] mt-0.5 flex items-center justify-center md:justify-start gap-1.5">
                  <Cpu className="h-3.5 w-3.5 shrink-0" />
                  <span>
                    Department of Computer Science & Engineering (Internet of Things and Cyber Security Including Blockchain Technology)
                  </span>
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <span className="rounded-lg bg-[#17645F] px-3 py-1 text-[11px] font-bold text-[#F3EEE8] border border-[#FAF7F2]/15">
                NBA & NAAC Aligned
              </span>
              <span className="rounded-lg bg-[#FF6848]/20 px-3 py-1 text-[11px] font-bold text-[#FF6848] border border-[#FF6848]/30">
                CSE (IoT, CS & BCT)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Live Academic Notice Ticker */}
      <div className="bg-[#FAF7F2] border-b border-[#17645F]/10 py-1.5 px-4">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-[11px] font-semibold text-[#17645F]">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="inline-flex items-center gap-1 rounded bg-[#FF6848] px-2 py-0.5 text-[10px] font-bold uppercase text-white shrink-0">
              <Bell className="h-3 w-3" /> Live
            </span>
            <span className="truncate">
              AY 2025-26 Documentation Open: Upload Training & Placement Offers, Hackathons, Codethons, Ideathons, and Course Files.
            </span>
          </div>
          <a
            href="#naac-hub"
            className="hidden sm:inline-block text-[#FF6848] font-bold hover:underline shrink-0 ml-4"
          >
            NAAC Criteria Hub →
          </a>
        </div>
      </div>

      {/* 3. Floating Spatial Navigation Bar */}
      <header className="sticky top-3 z-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3 w-full">
        <div className="flex items-center justify-between rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md px-5 py-3.5 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.10)] border border-[#17645F]/10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17645F] text-[#F3EEE8] shadow-md">
              <ShieldCheck className="h-6 w-6 text-[#FF6848]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold tracking-tight text-[#17645F]">
                  ACPCE Vault
                </h1>
                <span className="rounded-full bg-[#FFF0EC] px-2.5 py-0.5 text-[11px] font-bold text-[#FF6848] border border-[#FF6848]/20">
                  IoT • CS • BCT
                </span>
              </div>
              <p className="text-xs text-[#17645F]/70 hidden sm:block">
                Department Centralized Documentation Portal
              </p>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold text-[#17645F]/80">
            <a href="#login-portals" className="hover:text-[#FF6848] transition-colors">
              Role Portals
            </a>
            <a href="#year-categories" className="hover:text-[#FF6848] transition-colors">
              Year-Wise Folders
            </a>
            <a href="#naac-hub" className="hover:text-[#FF6848] transition-colors">
              NAAC Criteria Hub
            </a>
            <a href="#dashboard-preview" className="hover:text-[#FF6848] transition-colors">
              Live Progress
            </a>
            <a href="#permissions" className="hover:text-[#FF6848] transition-colors">
              Permissions
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-2.5">
            {currentUser ? (
              <div className="flex items-center gap-2.5">
                <div className="flex items-center gap-2 rounded-xl bg-[#17645F] px-3.5 py-2 text-xs font-bold text-[#F3EEE8]">
                  <span className="h-2 w-2 rounded-full bg-[#FF6848]"></span>
                  <span>
                    {currentUser.name} ({currentUser.role})
                  </span>
                </div>
                <button
                  onClick={onLogout}
                  className="flex items-center gap-1 rounded-xl bg-[#FFF0EC] px-3 py-2 text-xs font-bold text-[#FF6848] border border-[#FF6848]/20 hover:bg-[#FF6848] hover:text-white transition-all cursor-pointer"
                >
                  <LogOut className="h-3.5 w-3.5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => onOpenAuth('STUDENT', 'register')}
                  className="hidden sm:flex items-center gap-1.5 rounded-xl bg-[#E6F0EF] px-3.5 py-2.5 text-xs font-bold text-[#17645F] hover:bg-[#17645F] hover:text-[#F3EEE8] transition-all cursor-pointer"
                >
                  <UserPlus className="h-4 w-4 text-[#FF6848]" />
                  <span>Create Account</span>
                </button>
                <button
                  onClick={() => onOpenAuth('FACULTY', 'login')}
                  className="flex items-center gap-1.5 rounded-xl bg-[#FF6848] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#E85535] transition-all cursor-pointer"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login Portal</span>
                </button>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;