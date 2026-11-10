import React, { useState } from 'react';
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  Clock,
  UploadCloud,
  FileText,
  Download,
  Filter,
  Calendar,
  Users,
  Search,
  MessageSquare,
  ArrowLeft,
  BookOpen,
  Award,
} from 'lucide-react';

const FacultyDashboard = ({ currentUser, selectedYear, setSelectedYear, onBackHome }) => {
  const [activeTab, setActiveTab] = useState('student-verification'); // 'student-verification' or 'faculty-uploads'
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [remarkInput, setRemarkInput] = useState({});

  // Faculty's own uploads
  const [facultyUploads, setFacultyUploads] = useState([
    {
      id: 'DOC-FAC-301',
      title: 'Advanced IoT & Embedded Systems - Course File & CO-PO Mapping',
      academicYear: 'AY 2025-26',
      category: 'Course Files & Academics',
      semester: 'Semester 6 (TE)',
      fileName: 'IoT_CourseFile_CO_PO_2025.pdf',
      uploadedOn: '10 Jun 2025',
      status: 'Verified by HOD',
    },
    {
      id: 'DOC-FAC-302',
      title: 'Faculty Development Program (FDP) on Blockchain Security',
      academicYear: 'AY 2025-26',
      category: 'FDPs & Certifications',
      semester: 'Departmental',
      fileName: 'IIT_Bombay_FDP_Blockchain.pdf',
      uploadedOn: '15 Jul 2025',
      status: 'Approved',
    },
  ]);

  // Student submissions awaiting teacher verification
  const [studentSubmissions, setStudentSubmissions] = useState([
    {
      id: 'DOC-STU-101',
      studentName: 'Rahul Sharma',
      prn: '2023IOT012',
      title: 'Smart India Hackathon (SIH) - Blockchain Land Registry',
      academicYear: 'AY 2025-26',
      category: 'Hackathons',
      organization: 'AICTE & Ministry of Education',
      fileName: 'SIH_2025_Finalist_Certificate.pdf',
      uploadedOn: '12 Oct 2025',
      status: 'Pending',
      remarks: 'Awaiting faculty verification',
    },
    {
      id: 'DOC-STU-102',
      studentName: 'Priya Patil',
      prn: '2023IOT025',
      title: 'Cyber Security Analyst Summer Internship',
      academicYear: 'AY 2025-26',
      category: 'Training & Placement',
      organization: 'QuickHeal Security Labs, Pune',
      fileName: 'QuickHeal_Internship_Completion.pdf',
      uploadedOn: '04 Nov 2025',
      status: 'Pending',
      remarks: 'Awaiting faculty verification',
    },
    {
      id: 'DOC-STU-103',
      studentName: 'Amit Deshmukh',
      prn: '2023IOT042',
      title: 'National IoT & Edge AI Ideathon 2025',
      academicYear: 'AY 2025-26',
      category: 'Ideathons',
      organization: 'IIT Bombay Techfest',
      fileName: 'IoT_Ideathon_Poster.pdf',
      uploadedOn: '28 Oct 2025',
      status: 'Revision Needed',
      remarks: 'Please re-upload a clearer PDF that includes the Certificate ID QR code.',
    },
  ]);

  const academicYears = ['AY 2026-27', 'AY 2025-26', 'AY 2024-25', 'AY 2023-24'];

  // Handle Approve / Reject / Revision
  const handleUpdateStatus = (id, newStatus) => {
    const customRemark = remarkInput[id] || (newStatus === 'Approved' ? 'Approved by Department Faculty Reviewer.' : 'Revision requested.');
    setStudentSubmissions(
      studentSubmissions.map((item) =>
        item.id === id ? { ...item, status: newStatus, remarks: customRemark } : item
      )
    );
  };

  const pendingVerificationCount = studentSubmissions.filter((s) => s.status === 'Pending').length;

  return (
    <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 w-full">
      {/* 1. FACULTY HEADER BANNER */}
      <section className="rounded-3xl bg-gradient-to-r from-[#17645F] to-[#0F4743] p-6 sm:p-8 text-[#F3EEE8] shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#FF6848] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                Teacher / Faculty Desk
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
              Welcome, {currentUser?.name || 'Prof. Faculty Member'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#F3EEE8]/80">
              Review student uploads, manage course files, and maintain departmental NBA/NAAC audit compliance.
            </p>
          </div>

          <div className="flex gap-3">
            <div className="rounded-2xl bg-[#FFF0EC] px-5 py-3 text-[#FF6848] border border-[#FF6848]/30">
              <p className="text-2xl font-black">{pendingVerificationCount}</p>
              <p className="text-[11px] font-bold">Pending Approvals</p>
            </div>
            <div className="rounded-2xl bg-[#E6F0EF] px-5 py-3 text-[#17645F]">
              <p className="text-2xl font-black">{studentSubmissions.length}</p>
              <p className="text-[11px] font-bold">Total Department Submissions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB SWITCHER */}
      <div className="mt-8 flex border-b border-[#17645F]/15">
        <button
          onClick={() => setActiveTab('student-verification')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold transition-all cursor-pointer border-b-2 ${
            activeTab === 'student-verification'
              ? 'border-[#FF6848] text-[#FF6848] bg-[#FAF7F2]'
              : 'border-transparent text-[#17645F]/70 hover:text-[#17645F]'
          }`}
        >
          <Users className="h-4 w-4" />
          <span>Student Verification Desk ({pendingVerificationCount} Pending)</span>
        </button>

        <button
          onClick={() => setActiveTab('faculty-uploads')}
          className={`flex items-center gap-2 px-6 py-3.5 text-xs font-extrabold transition-all cursor-pointer border-b-2 ${
            activeTab === 'faculty-uploads'
              ? 'border-[#FF6848] text-[#FF6848] bg-[#FAF7F2]'
              : 'border-transparent text-[#17645F]/70 hover:text-[#17645F]'
          }`}
        >
          <BookOpen className="h-4 w-4" />
          <span>My Course Files & FDP Records</span>
        </button>
      </div>

      {/* 3. TAB 1: STUDENT VERIFICATION DESK */}
      {activeTab === 'student-verification' && (
        <div className="mt-6 rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm border border-[#17645F]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#17645F]/10 pb-5">
            <div>
              <h3 className="text-lg font-extrabold text-[#17645F]">
                Review & Approve Student Submissions
              </h3>
              <p className="text-xs text-[#17645F]/70">
                Check student hackathon certificates, placement offer letters, and internships for NAAC/NBA audit readiness.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#FF6848]" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="rounded-xl bg-[#17645F] px-3 py-2 text-xs font-bold text-[#F3EEE8] cursor-pointer"
              >
                <option value="ALL">All Academic Years</option>
                {academicYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {studentSubmissions.map((sub) => (
              <div
                key={sub.id}
                className="rounded-2xl bg-[#F3EEE8] p-5 border border-[#17645F]/10 hover:border-[#17645F]/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-md bg-[#17645F] px-2.5 py-0.5 text-[10px] font-extrabold text-[#F3EEE8]">
                        {sub.academicYear}
                      </span>
                      <span className="rounded-md bg-[#FFF0EC] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FF6848] border border-[#FF6848]/20">
                        {sub.category}
                      </span>
                      <span className="text-xs font-bold text-[#17645F]">
                        Student: {sub.studentName} (PRN: {sub.prn})
                      </span>
                    </div>

                    <h4 className="mt-2 text-base font-extrabold text-[#17645F]">
                      {sub.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#17645F]/80">
                      Organization / Company: <strong className="text-[#17645F]">{sub.organization}</strong>
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="shrink-0">
                    {sub.status === 'Approved' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#E6F0EF] px-3 py-1 text-xs font-bold text-[#17645F]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#17645F]" /> Approved
                      </span>
                    ) : sub.status === 'Pending' ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-bold text-[#FF6848]">
                        <Clock className="h-3.5 w-3.5 text-[#FF6848]" /> Pending Review
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800">
                        Revision Requested
                      </span>
                    )}
                  </div>
                </div>

                {/* File Attachment & Remarks Input */}
                <div className="mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-[#17645F]/10 pt-3 text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#17645F]">
                    <FileText className="h-4 w-4 text-[#FF6848]" />
                    <span>{sub.fileName}</span>
                    <button onClick={() => alert(`Downloading ${sub.fileName}...`)} className="text-[#FF6848] hover:underline ml-2">
                      [Download PDF]
                    </button>
                  </div>

                  {/* Action Buttons for Faculty */}
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <input
                      type="text"
                      placeholder="Add remark for student..."
                      defaultValue={sub.remarks}
                      onChange={(e) =>
                        setRemarkInput({ ...remarkInput, [sub.id]: e.target.value })
                      }
                      className="rounded-xl bg-white px-3 py-1.5 text-xs font-medium border border-[#17645F]/20 focus:outline-none focus:border-[#FF6848] grow md:w-64"
                    />
                    <button
                      onClick={() => handleUpdateStatus(sub.id, 'Approved')}
                      className="rounded-xl bg-[#17645F] px-3.5 py-1.5 text-xs font-bold text-[#F3EEE8] hover:bg-[#124E4A] cursor-pointer"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleUpdateStatus(sub.id, 'Revision Needed')}
                      className="rounded-xl bg-[#FFF0EC] px-3.5 py-1.5 text-xs font-bold text-[#FF6848] border border-[#FF6848]/30 hover:bg-[#FF6848] hover:text-white cursor-pointer"
                    >
                      Request Revision
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. TAB 2: FACULTY'S OWN COURSE FILES & FDPs */}
      {activeTab === 'faculty-uploads' && (
        <div className="mt-6 rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm border border-[#17645F]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#17645F]/10 pb-5">
            <div>
              <h3 className="text-lg font-extrabold text-[#17645F]">
                My Teaching Files & Research Publications
              </h3>
              <p className="text-xs text-[#17645F]/70">
                Upload subject syllabi, lesson plans, question papers, and CO-PO attainment sheets.
              </p>
            </div>
            <button
              onClick={() => alert('Faculty course file upload modal open')}
              className="flex items-center gap-1.5 rounded-xl bg-[#FF6848] px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-[#E85535] cursor-pointer"
            >
              <UploadCloud className="h-4 w-4" /> Upload New Course File
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {facultyUploads.map((fac) => (
              <div key={fac.id} className="rounded-2xl bg-[#F3EEE8] p-5 border border-[#17645F]/10 flex items-center justify-between">
                <div>
                  <span className="rounded-md bg-[#17645F] px-2 py-0.5 text-[10px] font-bold text-white">
                    {fac.academicYear} • {fac.category}
                  </span>
                  <h4 className="mt-2 text-sm font-extrabold text-[#17645F]">{fac.title}</h4>
                  <p className="mt-1 text-xs text-[#17645F]/70">File: {fac.fileName} • Status: <strong className="text-[#17645F]">{fac.status}</strong></p>
                </div>
                <button
                  onClick={() => alert(`Downloading ${fac.fileName}...`)}
                  className="rounded-lg bg-[#E6F0EF] px-3 py-2 text-xs font-bold text-[#17645F] hover:bg-[#17645F] hover:text-white cursor-pointer"
                >
                  <Download className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default FacultyDashboard;