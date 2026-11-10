import React from 'react';
import { MapPin, Cpu } from 'lucide-react';

const Footer = ({ onOpenAuth }) => {
  return (
    <footer className="mt-20 bg-[#17645F] text-[#F3EEE8] border-t-4 border-[#FF6848]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* College & Department Identity */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6848] text-white font-black text-sm">
                ACPCE
              </div>
              <div>
                <h4 className="text-base font-extrabold text-white">
                  A. C. Patil College of Engineering
                </h4>
                <p className="text-xs text-[#F3EEE8]/75 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-[#FF6848]" /> Plot 17, Sector 4, Kharghar, Navi Mumbai - 410210
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-[#0F4743] p-3.5 border border-[#FAF7F2]/10">
              <p className="text-xs font-bold text-[#FF6848] flex items-center gap-1.5">
                <Cpu className="h-4 w-4 shrink-0" /> Department of Computer Science & Engineering
              </p>
              <p className="text-xs text-[#F3EEE8]/90 mt-1 font-medium">
                (Internet of Things and Cyber Security Including Blockchain Technology)
              </p>
            </div>
          </div>

          {/* NAAC Links */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#FF6848]">
              NAAC Criteria
            </h5>
            <ul className="mt-3 space-y-2 text-xs text-[#F3EEE8]/80">
              <li><a href="#naac-hub" className="hover:text-white">Criterion 1: Curricular Aspects</a></li>
              <li><a href="#naac-hub" className="hover:text-white">Criterion 2: Teaching-Learning</a></li>
              <li><a href="#naac-hub" className="hover:text-white">Criterion 3: Research & IoT Labs</a></li>
              <li><a href="#naac-hub" className="hover:text-white">Criterion 5: Student Progression</a></li>
              <li><a href="#naac-hub" className="hover:text-white">Criterion 6: Faculty FDPs</a></li>
            </ul>
          </div>

          {/* NBA Links */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#FF6848]">
              NBA Compliance
            </h5>
            <ul className="mt-3 space-y-2 text-xs text-[#F3EEE8]/80">
              <li><a href="#year-categories" className="hover:text-white">Course Files & Lesson Plans</a></li>
              <li><a href="#year-categories" className="hover:text-white">CO-PO & PSO Attainment</a></li>
              <li><a href="#year-categories" className="hover:text-white">Slow & Advanced Learners</a></li>
              <li><a href="#year-categories" className="hover:text-white">Internal Assessment Analysis</a></li>
              <li><a href="#year-categories" className="hover:text-white">Action Taken Reports (ATR)</a></li>
            </ul>
          </div>

          {/* Student & Faculty Portals */}
          <div>
            <h5 className="text-xs font-extrabold uppercase tracking-wider text-[#FF6848]">
              Student Data & Portals
            </h5>
            <ul className="mt-3 space-y-2 text-xs text-[#F3EEE8]/80">
              <li>
                <button onClick={() => onOpenAuth('STUDENT', 'register')} className="hover:text-white cursor-pointer">
                  Student Create Account
                </button>
              </li>
              <li>
                <button onClick={() => onOpenAuth('FACULTY', 'register')} className="hover:text-white cursor-pointer">
                  Faculty Create Account
                </button>
              </li>
              <li><a href="#year-categories" className="hover:text-white">Training & Placement Offers</a></li>
              <li><a href="#year-categories" className="hover:text-white">Hackathons, Codethons & SIH</a></li>
              <li><a href="#year-categories" className="hover:text-white">Internships & Publications</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: NAAC | NBA | Student Data */}
        <div className="mt-10 border-t border-[#FAF7F2]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EEE8]/75">
          <p>
            © {new Date().getFullYear()} A. C. Patil College of Engineering, Kharghar — Dept. of CSE (IoT, CS & BCT).
          </p>
          <div className="flex flex-wrap items-center gap-3 font-extrabold text-white">
            <a href="#naac-hub" className="hover:text-[#FF6848]">NAAC</a>
            <span className="text-[#FF6848]">|</span>
            <a href="#naac-hub" className="hover:text-[#FF6848]">NBA</a>
            <span className="text-[#FF6848]">|</span>
            <button onClick={() => onOpenAuth('STUDENT', 'login')} className="hover:text-[#FF6848] cursor-pointer">
              Student Data
            </button>
            <span className="text-[#FF6848]">|</span>
            <button onClick={() => onOpenAuth('FACULTY', 'login')} className="hover:text-[#FF6848] cursor-pointer">
              Faculty Records
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;