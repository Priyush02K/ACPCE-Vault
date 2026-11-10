import React, { useState } from 'react';
import {
  ShieldAlert,
  Calendar,
  FolderPlus,
  Users,
  FileSpreadsheet,
  Plus,
  Trash2,
  CheckCircle2,
  Download,
  ArrowLeft,
  Settings,
  Database,
  Lock,
  FileText,
  Layers,
} from 'lucide-react';

const AdminDashboard = ({ currentUser, selectedYear, setSelectedYear, onBackHome }) => {
  const [activeTab, setActiveTab] = useState('years-categories'); // 'years-categories', 'users-permissions', 'audit-reports'

  // Academic Years state
  const [academicYears, setAcademicYears] = useState([
    'AY 2026-27',
    'AY 2025-26',
    'AY 2024-25',
    'AY 2023-24',
    'AY 2022-23',
  ]);
  const [newYearInput, setNewYearInput] = useState('');

  // Categories state
  const [categories, setCategories] = useState([
    { id: 1, name: 'Training & Placement Record', tag: 'Student & TPO' },
    { id: 2, name: 'Publications & Research', tag: 'Faculty & Student' },
    { id: 3, name: 'Hackathons', tag: 'Competitions' },
    { id: 4, name: 'Codethons', tag: 'Technical Events' },
    { id: 5, name: 'Ideathons & Project Expos', tag: 'Innovation' },
    { id: 6, name: 'Course Files & Academics', tag: 'Teaching Activity' },
    { id: 7, name: 'FDPs, Workshops & Certifications', tag: 'Faculty Growth' },
    { id: 8, name: 'Student Performance & Mentoring', tag: 'Academic Care' },
  ]);
  const [newCategoryInput, setNewCategoryInput] = useState('');

  // Mock Users List
  const [usersList, setUsersList] = useState([
    { id: 'U-01', name: 'Dr. Rajesh Patil', role: 'FACULTY', identifier: 'ACP-CSE-101', email: 'rajesh.patil@acpce.ac.in', status: 'Active' },
    { id: 'U-02', name: 'Prof. Sneha Kulkarni', role: 'FACULTY', identifier: 'ACP-CSE-104', email: 'sneha.kulkarni@acpce.ac.in', status: 'Active' },
    { id: 'U-03', name: 'Rahul Sharma', role: 'STUDENT', identifier: '2023IOT012', email: 'rahul.sharma@acpce.ac.in', status: 'Active' },
    { id: 'U-04', name: 'Priya Patil', role: 'STUDENT', identifier: '2023IOT025', email: 'priya.patil@acpce.ac.in', status: 'Active' },
  ]);

  // Add Academic Year
  const handleAddYear = (e) => {
    e.preventDefault();
    if (!newYearInput.trim()) return;
    if (!academicYears.includes(newYearInput.trim())) {
      setAcademicYears([newYearInput.trim(), ...academicYears]);
    }
    setNewYearInput('');
  };

  // Add Category
  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCategoryInput.trim()) return;
    const newCat = {
      id: Date.now(),
      name: newCategoryInput.trim(),
      tag: 'Custom Folder',
    };
    setCategories([...categories, newCat]);
    setNewCategoryInput('');
  };

  // Delete Category
  const handleDeleteCategory = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 w-full">
      {/* 1. ADMIN HEADER BANNER */}
      <section className="rounded-3xl bg-gradient-to-r from-[#17645F] via-[#124E4A] to-[#0E3E3B] p-6 sm:p-8 text-[#F3EEE8] shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#FF6848] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                Super Administrator Authority
              </span>
              <span className="rounded-full bg-[#FAF7F2]/15 px-3 py-1 text-xs font-bold text-[#F3EEE8]">
                CSE (IoT, CS & BCT)
              </span>
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-1 rounded-full bg-[#FAF7F2]/10 px-3 py-1 text-xs font-bold text-[#F3EEE8] hover:bg-[#FAF7F2]/20 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> View Public Home
              </button>
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              System Control Panel: {currentUser?.name || 'Super Admin'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#F3EEE8]/80">
              Complete authority over academic years, documentation categories, user permissions, and master NAAC/NBA audit reports.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-[#FAF7F2]/10 px-5 py-3 border border-[#FAF7F2]/20">
              <p className="text-2xl font-black text-white">{academicYears.length}</p>
              <p className="text-[11px] font-bold text-[#F3EEE8]/75">Active Years</p>
            </div>
            <div className="rounded-2xl bg-[#FAF7F2]/10 px-5 py-3 border border-[#FAF7F2]/20">
              <p className="text-2xl font-black text-white">{categories.length}</p>
              <p className="text-[11px] font-bold text-[#F3EEE8]/75">Master Folders</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ADMIN TAB SWITCHER */}
      <div className="mt-8 flex flex-wrap border-b border-[#17645F]/15">
        <button
          onClick={() => setActiveTab('years-categories')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold transition-all cursor-pointer border-b-2 ${
            activeTab === 'years-categories'
              ? 'border-[#FF6848] text-[#FF6848] bg-[#FAF7F2]'
              : 'border-transparent text-[#17645F]/70 hover:text-[#17645F]'
          }`}
        >
          <FolderPlus className="h-4 w-4" />
          <span>Academic Years & Categories Manager</span>
        </button>

        <button
          onClick={() => setActiveTab('users-permissions')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold transition-all cursor-pointer border-b-2 ${
            activeTab === 'users-permissions'
              ? 'border-[#FF6848] text-[#FF6848] bg-[#FAF7F2]'
              : 'border-transparent text-[#17645F]/70 hover:text-[#17645F]'
          }`}
        >
          <Users className="h-4 w-4" />
          <span>User Accounts & Permissions ({usersList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('audit-reports')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold transition-all cursor-pointer border-b-2 ${
            activeTab === 'audit-reports'
              ? 'border-[#FF6848] text-[#FF6848] bg-[#FAF7F2]'
              : 'border-transparent text-[#17645F]/70 hover:text-[#17645F]'
          }`}
        >
          <FileSpreadsheet className="h-4 w-4" />
          <span>Master NBA & NAAC Audit Reports</span>
        </button>
      </div>

      {/* 3. TAB 1: ACADEMIC YEARS & CATEGORIES MANAGER */}
      {activeTab === 'years-categories' && (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Academic Years Management */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FAF7F2] p-6 shadow-sm border border-[#17645F]/15">
              <div className="flex items-center gap-2 border-b border-[#17645F]/10 pb-4">
                <Calendar className="h-5 w-5 text-[#FF6848]" />
                <h3 className="text-base font-extrabold text-[#17645F]">
                  Manage Academic Years
                </h3>
              </div>

              <form onSubmit={handleAddYear} className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., AY 2027-28"
                  value={newYearInput}
                  onChange={(e) => setNewYearInput(e.target.value)}
                  className="rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-bold text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848] grow"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#17645F] px-4 py-2.5 text-xs font-extrabold text-white hover:bg-[#124E4A] cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </form>

              <div className="mt-5 space-y-2.5">
                {academicYears.map((yr) => (
                  <div
                    key={yr}
                    className="flex items-center justify-between rounded-xl bg-[#F3EEE8] p-3 text-xs font-bold text-[#17645F] border border-[#17645F]/10"
                  >
                    <span>{yr}</span>
                    <span className="rounded-md bg-[#E6F0EF] px-2.5 py-0.5 text-[10px] font-extrabold text-[#17645F]">
                      Active Vault
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Documentation Categories Management */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#FAF7F2] p-6 shadow-sm border border-[#17645F]/15">
              <div className="flex items-center justify-between border-b border-[#17645F]/10 pb-4">
                <div className="flex items-center gap-2">
                  <FolderPlus className="h-5 w-5 text-[#FF6848]" />
                  <h3 className="text-base font-extrabold text-[#17645F]">
                    Documentation Categories & Folders
                  </h3>
                </div>
              </div>

              <form onSubmit={handleAddCategory} className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Add new category folder name..."
                  value={newCategoryInput}
                  onChange={(e) => setNewCategoryInput(e.target.value)}
                  className="rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-bold text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848] grow"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-[#FF6848] px-4 py-2.5 text-xs font-extrabold text-white hover:bg-[#E85535] cursor-pointer flex items-center gap-1"
                >
                  <Plus className="h-4 w-4" /> Add Folder
                </button>
              </form>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="flex items-center justify-between rounded-xl bg-[#F3EEE8] p-3.5 border border-[#17645F]/10"
                  >
                    <div>
                      <p className="text-xs font-extrabold text-[#17645F]">{cat.name}</p>
                      <span className="text-[10px] font-bold text-[#FF6848]">{cat.tag}</span>
                    </div>
                    <button
                      onClick={() => handleDeleteCategory(cat.id)}
                      className="rounded-lg p-1 text-[#17645F]/50 hover:bg-[#FFF0EC] hover:text-[#FF6848] transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. TAB 2: USER ACCOUNTS & PERMISSIONS */}
      {activeTab === 'users-permissions' && (
        <div className="mt-6 rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm border border-[#17645F]/15">
          <div className="flex items-center justify-between border-b border-[#17645F]/10 pb-5">
            <div>
              <h3 className="text-lg font-extrabold text-[#17645F]">
                Department User Accounts & Role Permissions
              </h3>
              <p className="text-xs text-[#17645F]/70">
                Manage registered teachers and students for ACPCE CSE (IoT, Cyber Security & Blockchain).
              </p>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#17645F]/15 text-xs font-extrabold uppercase tracking-wider text-[#17645F]">
                  <th className="py-3 px-4">User Name</th>
                  <th className="py-3 px-4">Role</th>
                  <th className="py-3 px-4">Identifier (ID / PRN)</th>
                  <th className="py-3 px-4">Email ID</th>
                  <th className="py-3 px-4 text-center">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17645F]/10 text-xs font-medium">
                {usersList.map((u) => (
                  <tr key={u.id} className="hover:bg-[#F3EEE8]/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#17645F]">{u.name}</td>
                    <td className="py-3.5 px-4">
                      <span className="rounded-md bg-[#17645F] px-2.5 py-0.5 text-[10px] font-extrabold text-[#F3EEE8]">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#17645F]/80">{u.identifier}</td>
                    <td className="py-3.5 px-4 text-[#17645F]/80">{u.email}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="inline-flex items-center gap-1 text-[#17645F] font-bold">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#17645F]" /> {u.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => alert(`Managing permissions for ${u.name}`)}
                        className="rounded-lg bg-[#E6F0EF] px-3 py-1 text-[11px] font-bold text-[#17645F] hover:bg-[#17645F] hover:text-white transition-colors cursor-pointer"
                      >
                        Edit Access
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. TAB 3: MASTER NBA & NAAC AUDIT REPORTS & EXPORT */}
      {activeTab === 'audit-reports' && (
        <div className="mt-6 rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm border border-[#17645F]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#17645F]/10 pb-5">
            <div>
              <h3 className="text-lg font-extrabold text-[#17645F]">
                Master NBA & NAAC Accreditation Audit Exports
              </h3>
              <p className="text-xs text-[#17645F]/70">
                Download consolidated year-wise audit packages for institutional inspection.
              </p>
            </div>
            <button
              onClick={() => alert('Generating complete NAAC Criteria 1–7 ZIP package...')}
              className="flex items-center gap-2 rounded-xl bg-[#FF6848] px-4 py-3 text-xs font-extrabold text-white shadow-md hover:bg-[#E85535] cursor-pointer"
            >
              <Download className="h-4 w-4" /> Download Complete Audit Package (.ZIP)
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'NAAC Criteria 1–7 Master Report', desc: 'Consolidated summary of all 7 NAAC criteria with metrics proofs.', weight: '1000 Marks' },
              { title: 'NBA Course Outcome & CO-PO Attainment', desc: 'Direct (80%) vs Indirect (20%) attainment computation sheets.', weight: 'NBA Standard' },
              { title: 'Training & Placement Master Sheet', desc: 'Verified student placement offer letters and CTC packages.', weight: 'Criterion 5' },
              { title: 'Hackathons, Codethons & Ideathons Log', desc: 'SIH participation records, winning certificates, and mentor notes.', weight: 'Criterion 3 & 5' },
              { title: 'Faculty Research & FDP Records', desc: 'Scopus/SCI papers, patents, and 5-day FDP completion certificates.', weight: 'Criterion 3 & 6' },
              { title: 'Slow & Advanced Learner Remedial Report', desc: 'Attendance logs, internal exam marks, and counselling history.', weight: 'Criterion 2' },
            ].map((rep, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#F3EEE8] p-5 border border-[#17645F]/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded bg-[#17645F] px-2.5 py-0.5 text-[10px] font-extrabold text-[#F3EEE8]">
                      {rep.weight}
                    </span>
                    <FileText className="h-4 w-4 text-[#FF6848]" />
                  </div>
                  <h4 className="mt-3 text-sm font-extrabold text-[#17645F]">{rep.title}</h4>
                  <p className="mt-1 text-xs text-[#17645F]/75 leading-relaxed">{rep.desc}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#17645F]/10 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#17645F]">Format: PDF / Excel</span>
                  <button
                    onClick={() => alert(`Downloading ${rep.title}...`)}
                    className="inline-flex items-center gap-1 rounded-lg bg-[#E6F0EF] px-3 py-1.5 text-xs font-bold text-[#17645F] hover:bg-[#17645F] hover:text-white transition-colors cursor-pointer"
                  >
                    <Download className="h-3.5 w-3.5" /> Export
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default AdminDashboard;