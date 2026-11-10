import React, { useState } from 'react';
import {
  ShieldAlert,
  GraduationCap,
  UserCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  BookOpen,
  Code2,
  Briefcase,
  Lightbulb,
  FileCheck2,
  FolderOpen,
  FileSpreadsheet,
  Users,
  Sparkles,
  Check,
  Minus,
  Calendar,
  ChevronDown,
  Layers,
  X,
  UserPlus,
  LogIn,
  Lock,
  Mail,
  IdCard,
  FileText,
} from 'lucide-react';

const HomePage = ({
  selectedYear,
  setSelectedYear,
  onOpenAuth,
  authModal,
  setAuthModal,
  onLoginSuccess,
}) => {
  const [activeNaacCriterion, setActiveNaacCriterion] = useState('C1');
  const [selectedCategoryModal, setSelectedCategoryModal] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    identifier: '',
    semesterOrDesig: 'Semester 6 (TE)',
    password: '',
  });

  const academicYears = [
    'AY 2026-27',
    'AY 2025-26',
    'AY 2024-25',
    'AY 2023-24',
    'AY 2022-23',
  ];

  const yearCategories = [
    {
      name: 'Training & Placement Record',
      icon: Briefcase,
      tag: 'Student & TPO',
      desc: 'Company drives, student offer letters, salary packages (LPA), and internship completion certificates.',
      checklist: [
        'Offer Letter PDF with CTC mentioned',
        'Company Drive Attendance Sheet',
        'Internship Completion Certificate',
        'Consolidated Placement Excel Sheet',
      ],
    },
    {
      name: 'Publications & Research',
      icon: BookOpen,
      tag: 'Faculty & Student',
      desc: 'Scopus/SCI journal papers, IEEE conference proceedings, book chapters, patents, and copyrights.',
      checklist: [
        'Published Paper PDF with DOI/ISSN',
        'Indexing Proof (Scopus / WoS / UGC Care)',
        'Conference Presentation Certificate',
        'Patent Grant / Publication Copy',
      ],
    },
    {
      name: 'Hackathons',
      icon: Code2,
      tag: 'Competitions',
      desc: 'Smart India Hackathon (SIH), national/inter-college hackathons, team rosters, and winning certificates.',
      checklist: [
        'Problem Statement & Team Registration',
        'Participation / Winner Certificates',
        'Geo-tagged Event Photographs',
        'Mentor Nomination Letter',
      ],
    },
    {
      name: 'Codethons',
      icon: Award,
      tag: 'Technical Events',
      desc: 'Competitive coding contests, platform rankings, participant sheets, and merit certificates.',
      checklist: [
        'Event Circular & Brochure',
        'Platform Leaderboard Export',
        'Winner & Participation Certificates',
        '1-Page Event Summary Report',
      ],
    },
    {
      name: 'Ideathons & Project Expos',
      icon: Lightbulb,
      tag: 'Innovation',
      desc: 'IoT, Cyber Security & Blockchain project abstracts, posters, funding grants, and awards.',
      checklist: [
        'Project Abstract & Architecture Poster',
        'Judge Evaluation Sheet',
        'Prototype Geo-tagged Photos',
        'Innovation / Incubation Award Proof',
      ],
    },
    {
      name: 'Course Files & Academics',
      icon: FileCheck2,
      tag: 'Teaching Activity',
      desc: 'Subject syllabus, teaching plans, lecture notes, question papers, lab manuals, and CO-PO attainment.',
      checklist: [
        'University Syllabus & Academic Calendar',
        'Lesson Plan & Lab Manual',
        'Internal Assessment Question Papers',
        'CO-PO Mapping & Attainment Sheet',
      ],
    },
    {
      name: 'FDPs, Workshops & Certifications',
      icon: FileSpreadsheet,
      tag: 'Faculty Growth',
      desc: 'Faculty Development Programs, STTPs, NPTEL/Swayam certificates, and organized seminars.',
      checklist: [
        'FDP / STTP Completion Certificate',
        'NPTEL / Swayam Score Card',
        'Official Sanction / Relieving Letter',
        'Workshop Brochure & Attendance',
      ],
    },
    {
      name: 'Student Performance & Mentoring',
      icon: Users,
      tag: 'Academic Care',
      desc: 'Attendance logs, internal exam marks, slow/advanced learner lists, and remedial class records.',
      checklist: [
        'Slow & Advanced Learner Identification',
        'Remedial Class Timetable & Attendance',
        'Mentor-Mentee Counselling Logbook',
        'Parent-Teacher Meeting Minutes',
      ],
    },
  ];

  const roles = [
    {
      id: 'ADMIN',
      title: 'ADMIN',
      subtitle: 'Super Administrator',
      badge: 'Complete System Authority',
      icon: ShieldAlert,
      cardBg: 'bg-[#17645F] text-[#F3EEE8] border-[#17645F]',
      btnStyle: 'bg-[#FF6848] text-white hover:bg-[#E85535]',
      description:
        'Complete authority over the website, users, academic years, categories, permissions and documents.',
      highlights: [
        'View & download all department documents',
        'Add new academic years & manage categories',
        'Manage users & role-wise permissions',
        'Approve student & faculty submissions',
        'Delete any document & generate audit reports',
      ],
    },
    {
      id: 'FACULTY',
      title: 'TEACHER / FACULTY',
      subtitle: 'Faculty Access',
      badge: 'Upload & Verify Desk',
      icon: UserCheck,
      cardBg: 'bg-[#FAF7F2] text-[#17645F] border-[#17645F]/15',
      btnStyle: 'bg-[#17645F] text-[#F3EEE8] hover:bg-[#124E4A]',
      description:
        'Upload faculty records, submit activity evidence, view department records and download authorized documents.',
      highlights: [
        'Upload course files, FDPs & publications',
        'Approve or reject student document uploads',
        'View department records & download files',
        'Delete own uploads (if permitted)',
        'Generate departmental summary reports',
      ],
    },
    {
      id: 'STUDENT',
      title: 'STUDENT',
      subtitle: 'Student Access',
      badge: 'Student Portfolio',
      icon: GraduationCap,
      cardBg: 'bg-[#FAF7F2] text-[#17645F] border-[#17645F]/15',
      btnStyle: 'bg-[#17645F] text-[#F3EEE8] hover:bg-[#124E4A]',
      description:
        'Upload internship certificates, placements, hackathons, publications, achievements and supporting documents.',
      highlights: [
        'Upload placements, internships & hackathons',
        'Submit codethons, ideathons & publications',
        'View & download own uploaded records only',
        'Track faculty approval status & remarks',
        'Delete own pending document uploads',
      ],
    },
  ];

  const naacCriteria = [
    {
      id: 'C1',
      code: 'Criterion 1',
      title: 'Curricular Aspects',
      weight: '150 Marks',
      metrics: [
        { code: '1.1.1', name: 'Curriculum Delivery & Academic Calendar Compliance', owner: 'Faculty' },
        { code: '1.2.1', name: 'Value-Added Courses (IoT, Cyber Security, Blockchain)', owner: 'Faculty' },
        { code: '1.3.2', name: 'Field Projects, Internships & Final Year Dissertations', owner: 'Student & Faculty' },
        { code: '1.4.1', name: 'Stakeholder Curriculum Feedback & Action Taken Report', owner: 'Admin / HOD' },
      ],
    },
    {
      id: 'C2',
      code: 'Criterion 2',
      title: 'Teaching-Learning & Evaluation',
      weight: '200 Marks',
      metrics: [
        { code: '2.2.1', name: 'Slow & Advanced Learners Identification & Remedial Records', owner: 'Faculty' },
        { code: '2.3.1', name: 'ICT-Enabled Teaching, IoT Labs & Experiential Learning', owner: 'Faculty' },
        { code: '2.5.1', name: 'Internal Assessment Transparency & Grievance Redressal', owner: 'Faculty' },
        { code: '2.6.2', name: 'CO-PO & PSO Attainment Calculation Sheets', owner: 'Faculty' },
      ],
    },
    {
      id: 'C3',
      code: 'Criterion 3',
      title: 'Research, Innovations & Extension',
      weight: '120 Marks',
      metrics: [
        { code: '3.1.1', name: 'Research Grants, Seed Money & Sponsored IoT/Security Projects', owner: 'Faculty' },
        { code: '3.2.2', name: 'Workshops/Seminars on IPR, Cyber Security & Entrepreneurship', owner: 'Faculty' },
        { code: '3.3.1', name: 'Research Papers in Scopus / WoS / UGC Care Journals', owner: 'Faculty & Student' },
        { code: '3.4.3', name: 'NSS / Technical Extension & Cyber Awareness Drives', owner: 'Student & Faculty' },
      ],
    },
    {
      id: 'C4',
      code: 'Criterion 4',
      title: 'Infrastructure & Learning Resources',
      weight: '100 Marks',
      metrics: [
        { code: '4.1.2', name: 'IoT Sensor Labs, Cyber Forensics & Blockchain Testbed Logs', owner: 'Admin / Lab Incharge' },
        { code: '4.2.1', name: 'Department Library & E-Journals (IEEE/ACM) Usage Records', owner: 'Faculty' },
      ],
    },
    {
      id: 'C5',
      code: 'Criterion 5',
      title: 'Student Support & Progression',
      weight: '130 Marks',
      metrics: [
        { code: '5.1.3', name: 'Capacity Building, Soft Skills & Competitive Coding Bootcamps', owner: 'Faculty & TPO' },
        { code: '5.2.1', name: 'Campus Placement Offer Letters & Higher Studies (GATE/GRE)', owner: 'Student & TPO' },
        { code: '5.3.1', name: 'Awards in Hackathons (SIH), Codethons & Ideathons', owner: 'Student' },
      ],
    },
    {
      id: 'C6',
      code: 'Criterion 6',
      title: 'Governance, Leadership & Management',
      weight: '100 Marks',
      metrics: [
        { code: '6.3.2', name: 'Financial Support for Faculty Attending FDPs & Conferences', owner: 'Faculty' },
        { code: '6.3.3', name: 'FDPs, STTPs & NPTEL Certifications Completed by Faculty', owner: 'Faculty' },
      ],
    },
    {
      id: 'C7',
      code: 'Criterion 7',
      title: 'Institutional Values & Best Practices',
      weight: '100 Marks',
      metrics: [
        { code: '7.1.1', name: 'Green Campus, E-Waste Management & Cyber Safety Drives', owner: 'Department' },
        { code: '7.2.1', name: 'Department Best Practices (Centralized Digital Repository)', owner: 'All Roles' },
      ],
    },
  ];

  const permissionMatrix = [
    { func: 'Login', admin: true, teacher: true, student: true },
    { func: 'Upload documents', admin: true, teacher: true, student: true },
    { func: 'View documents', admin: 'All', teacher: 'Department records', student: 'Own records' },
    { func: 'Download documents', admin: 'All', teacher: 'Authorized records', student: 'Own records' },
    { func: 'Approve student uploads', admin: true, teacher: true, student: false },
    { func: 'Add academic years', admin: true, teacher: false, student: false },
    { func: 'Add/delete categories', admin: true, teacher: false, student: false },
    { func: 'Manage users', admin: true, teacher: false, student: false },
    { func: 'Delete documents', admin: 'All', teacher: 'Own uploads, if permitted', student: 'Own pending uploads' },
    { func: 'Generate reports', admin: true, teacher: true, student: false },
    { func: 'Manage permissions', admin: true, teacher: false, student: false },
  ];

  const renderCell = (val) => {
    if (val === true) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#E6F0EF] text-[#17645F]">
          <Check className="h-4 w-4 stroke-[2.5]" />
        </span>
      );
    }
    if (val === false) {
      return (
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F3EEE8] text-[#17645F]/35">
          <Minus className="h-4 w-4" />
        </span>
      );
    }
    return (
      <span className="inline-block rounded-lg bg-[#FFF0EC] px-2.5 py-1 text-xs font-bold text-[#FF6848] border border-[#FF6848]/20">
        {val}
      </span>
    );
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      role: authModal.role,
      name:
        formData.name ||
        (authModal.role === 'ADMIN'
          ? 'Dept. Admin'
          : authModal.role === 'FACULTY'
          ? 'Prof. Faculty Member'
          : 'CSE Student'),
      email: formData.email || 'user@acpce.ac.in',
      identifier: formData.identifier || 'ID-2026',
    });
  };

  const activeCriterionObj =
    naacCriteria.find((c) => c.id === activeNaacCriterion) || naacCriteria[0];

  return (
    <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#17645F] via-[#145854] to-[#0E3E3B] px-6 py-12 text-[#F3EEE8] shadow-[0_25px_50px_-12px_rgba(23,100,95,0.28)] sm:px-12 sm:py-16">
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FF6848] px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
              <span>A. C. Patil College of Engineering • Kharghar</span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl leading-[1.15]">
              Department Centralized Documentation Portal
            </h2>

            <p className="mt-3 text-xs sm:text-sm font-bold text-[#FF6848] uppercase tracking-wider">
              CSE (Internet of Things and Cyber Security Including Blockchain Technology)
            </p>

            <p className="mt-4 text-sm sm:text-base text-[#F3EEE8]/85 leading-relaxed max-w-2xl">
              Collect, verify, and organize year-wise records for{' '}
              <strong className="text-white">
                Training & Placements, Publications, Hackathons, Codethons, Ideathons, and Course Files
              </strong>
              —built for everyday departmental teaching activities and seamless{' '}
              <strong className="text-white">NBA & NAAC</strong> audits.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenAuth('FACULTY', 'login')}
                className="flex items-center gap-2 rounded-xl bg-[#FF6848] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-[#E85535] transition-all cursor-pointer"
              >
                <UserCheck className="h-4 w-4" />
                <span>Faculty Login / Signup</span>
              </button>
              <button
                onClick={() => onOpenAuth('STUDENT', 'register')}
                className="flex items-center gap-2 rounded-xl bg-[#FAF7F2] px-5 py-3 text-xs sm:text-sm font-bold text-[#17645F] shadow-md hover:bg-white transition-all cursor-pointer"
              >
                <GraduationCap className="h-4 w-4 text-[#FF6848]" />
                <span>Student Create Account</span>
              </button>
              <button
                onClick={() => onOpenAuth('ADMIN', 'login')}
                className="flex items-center gap-2 rounded-xl bg-[#FAF7F2]/15 px-4 py-3 text-xs sm:text-sm font-bold text-[#F3EEE8] border border-[#FAF7F2]/25 hover:bg-[#FAF7F2]/25 transition-all cursor-pointer"
              >
                <ShieldAlert className="h-4 w-4 text-[#FF6848]" />
                <span>Admin</span>
              </button>
            </div>
          </div>

          {/* Right Hero Card: Illustrative Dashboard */}
          <div id="dashboard-preview" className="lg:col-span-5">
            <div className="rounded-3xl bg-[#FAF7F2] p-6 text-[#17645F] shadow-2xl border border-[#17645F]/10">
              <div className="flex items-center justify-between border-b border-[#17645F]/10 pb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6848]">
                    Department Status ({selectedYear})
                  </span>
                  <h3 className="text-lg font-extrabold text-[#17645F]">
                    Faculty Documentation Dashboard
                  </h3>
                </div>
                <span className="rounded-xl bg-[#E6F0EF] px-3 py-1 text-xs font-bold text-[#17645F]">
                  Live Metrics
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3.5">
                <div className="rounded-2xl bg-[#F3EEE8] p-4 border border-[#17645F]/10">
                  <p className="text-2xl font-black text-[#17645F]">125</p>
                  <p className="text-xs font-bold text-[#17645F]/75 mt-0.5">Total Documents</p>
                </div>
                <div className="rounded-2xl bg-[#E6F0EF] p-4 border border-[#17645F]/15">
                  <p className="text-2xl font-black text-[#17645F]">85</p>
                  <p className="text-xs font-bold text-[#17645F]/80 mt-0.5">Approved Documents</p>
                </div>
                <div className="rounded-2xl bg-[#FFF0EC] p-4 border border-[#FF6848]/25">
                  <p className="text-2xl font-black text-[#FF6848]">25</p>
                  <p className="text-xs font-bold text-[#FF6848] mt-0.5">Pending Review</p>
                </div>
                <div className="rounded-2xl bg-[#F3EEE8] p-4 border border-[#17645F]/10">
                  <p className="text-2xl font-black text-[#17645F]/70">15</p>
                  <p className="text-xs font-bold text-[#17645F]/65 mt-0.5">Missing Documents</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-[#F3EEE8] p-4 border border-[#17645F]/10">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span>Documentation Completion (Overall progress)</span>
                  <span className="text-sm font-black text-[#FF6848]">68%</span>
                </div>
                <div className="mt-2.5 h-3 w-full overflow-hidden rounded-full bg-[#17645F]/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#17645F] to-[#FF6848]"
                    style={{ width: '68%' }}
                  ></div>
                </div>
                <p className="mt-2 text-[11px] text-[#17645F]/60 italic">
                  * Illustrative dashboard data, not actual college records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE TYPES OF LOGIN */}
      <section id="login-portals" className="mt-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="rounded-full bg-[#FFF0EC] px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-[#FF6848] border border-[#FF6848]/20">
            Role-Based Access & Account Creation
          </span>
          <h3 className="mt-3 text-2xl font-extrabold text-[#17645F] sm:text-3xl">
            Three Types of Login Portals
          </h3>
          <p className="mt-2 text-sm text-[#17645F]/75">
            Select your role to log in or register a new Faculty / Student account.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {roles.map((role) => {
            const IconComponent = role.icon;
            const isAdmin = role.id === 'ADMIN';

            return (
              <div
                key={role.id}
                className={`flex flex-col justify-between rounded-3xl p-7 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.08)] border-2 transition-all hover:-translate-y-1 ${role.cardBg}`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                        isAdmin ? 'bg-[#FF6848] text-white' : 'bg-[#E6F0EF] text-[#17645F]'
                      }`}
                    >
                      {role.badge}
                    </span>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        isAdmin ? 'bg-[#FAF7F2]/15 text-[#FF6848]' : 'bg-[#17645F] text-[#F3EEE8]'
                      }`}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-2xl font-extrabold tracking-tight">{role.title}</h4>
                    <p
                      className={`text-sm font-bold ${
                        isAdmin ? 'text-[#F3EEE8]/80' : 'text-[#FF6848]'
                      }`}
                    >
                      {role.subtitle}
                    </p>
                    <p
                      className={`mt-3 text-xs leading-relaxed ${
                        isAdmin ? 'text-[#F3EEE8]/85' : 'text-[#17645F]/80'
                      }`}
                    >
                      {role.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-current/10 pt-5">
                    <p className="text-xs font-bold uppercase tracking-wider opacity-75 mb-3">
                      Key Capabilities:
                    </p>
                    <ul className="space-y-2.5">
                      {role.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2
                            className={`h-4 w-4 shrink-0 mt-0.5 ${
                              isAdmin ? 'text-[#FF6848]' : 'text-[#17645F]'
                            }`}
                          />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 space-y-2.5">
                  <button
                    onClick={() => onOpenAuth(role.id, 'login')}
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-3.5 text-sm font-bold shadow-md transition-all cursor-pointer ${role.btnStyle}`}
                  >
                    <LogIn className="h-4 w-4" />
                    <span>Login as {role.title}</span>
                  </button>

                  {!isAdmin && (
                    <button
                      onClick={() => onOpenAuth(role.id, 'register')}
                      className="flex w-full items-center justify-center gap-2 rounded-2xl border border-[#17645F]/20 bg-[#F3EEE8] px-5 py-2.5 text-xs font-bold text-[#17645F] hover:border-[#FF6848] hover:text-[#FF6848] transition-all cursor-pointer"
                    >
                      <UserPlus className="h-3.5 w-3.5" />
                      <span>
                        Create {role.id === 'FACULTY' ? 'Faculty' : 'Student'} Account
                      </span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CATEGORIES INSIDE EVERY ACADEMIC YEAR (WITH DROPDOWN) */}
      <section id="year-categories" className="mt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6848]">
              Year-Wise Documentation
            </span>
            <h3 className="mt-1 text-2xl font-extrabold text-[#17645F] sm:text-3xl">
              Categories Inside Every Academic Year
            </h3>
            <p className="mt-1 text-sm text-[#17645F]/75">
              Choose an academic year from the dropdown to inspect folders and required checklists.
            </p>
          </div>

          <div className="relative min-w-[230px]">
            <label className="block text-[11px] font-bold uppercase tracking-wider text-[#17645F]/70 mb-1.5">
              Select Academic Year
            </label>
            <div className="relative flex items-center">
              <Calendar className="pointer-events-none absolute left-3.5 h-4 w-4 text-[#FF6848]" />
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full appearance-none rounded-xl bg-[#17645F] pl-10 pr-10 py-3 text-xs font-bold text-[#F3EEE8] shadow-md border border-[#17645F] focus:outline-none focus:ring-2 focus:ring-[#FF6848] cursor-pointer"
              >
                {academicYears.map((yr) => (
                  <option key={yr} value={yr} className="bg-[#FAF7F2] text-[#17645F] font-bold">
                    {yr}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 h-4 w-4 text-[#F3EEE8]" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {yearCategories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <div
                key={idx}
                onClick={() => setSelectedCategoryModal(cat)}
                className="group flex flex-col justify-between rounded-2xl bg-[#FAF7F2] p-5 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.06)] border border-[#17645F]/10 hover:border-[#FF6848] transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E6F0EF] text-[#17645F] group-hover:bg-[#17645F] group-hover:text-[#F3EEE8] transition-colors">
                      <IconComponent className="h-5 w-5 text-[#FF6848]" />
                    </div>
                    <span className="rounded-lg bg-[#F3EEE8] px-2.5 py-1 text-[11px] font-bold text-[#17645F]">
                      {selectedYear}
                    </span>
                  </div>
                  <h4 className="mt-4 font-extrabold text-[#17645F] text-base">{cat.name}</h4>
                  <p className="mt-1.5 text-xs text-[#17645F]/75 leading-relaxed">{cat.desc}</p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-[#17645F]/10 pt-3 text-[11px] font-bold">
                  <span className="text-[#FF6848]">{cat.tag}</span>
                  <span className="flex items-center gap-1 text-[#17645F] group-hover:text-[#FF6848]">
                    <FolderOpen className="h-3.5 w-3.5" /> Checklist →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. NAAC CRITERIA 1 TO 7 HUB */}
      <section id="naac-hub" className="mt-16">
        <div className="rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.08)] border border-[#17645F]/10">
          <div className="border-b border-[#17645F]/10 pb-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FF6848]">
              <Layers className="h-3.5 w-3.5" /> NAAC & NBA Accreditation Mapping
            </span>
            <h3 className="mt-2 text-2xl font-extrabold text-[#17645F]">
              NAAC Criteria 1–7 Documentation Hub
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-[#17645F]/75">
              Select a criterion below to view mapped departmental documentation for CSE (IoT, CS & BCT).
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {naacCriteria.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNaacCriterion(item.id)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                  activeNaacCriterion === item.id
                    ? 'bg-[#17645F] text-[#F3EEE8] shadow-sm'
                    : 'bg-[#F3EEE8] text-[#17645F] hover:bg-[#E6F0EF]'
                }`}
              >
                {item.code}: {item.title}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-[#F3EEE8] p-5 border border-[#17645F]/10">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div>
                <h4 className="text-lg font-extrabold text-[#17645F]">
                  {activeCriterionObj.code} — {activeCriterionObj.title}
                </h4>
                <p className="text-xs text-[#17645F]/70">
                  Required departmental evidence for {selectedYear}
                </p>
              </div>
              <span className="rounded-xl bg-[#FF6848] px-3.5 py-1.5 text-xs font-bold text-white">
                Weightage: {activeCriterionObj.weight}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {activeCriterionObj.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-3 rounded-xl bg-[#FAF7F2] p-4 border border-[#17645F]/10"
                >
                  <div>
                    <span className="inline-block rounded bg-[#E6F0EF] px-2 py-0.5 text-[11px] font-extrabold text-[#17645F]">
                      Metric {m.code}
                    </span>
                    <p className="mt-1.5 text-xs sm:text-sm font-bold text-[#17645F]">{m.name}</p>
                    <p className="mt-1 text-[11px] font-semibold text-[#FF6848]">
                      Uploaded by: {m.owner}
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      onOpenAuth(m.owner.includes('Student') ? 'STUDENT' : 'FACULTY', 'login')
                    }
                    className="shrink-0 rounded-lg bg-[#17645F] px-3 py-1.5 text-[11px] font-bold text-[#F3EEE8] hover:bg-[#FF6848] transition-colors cursor-pointer"
                  >
                    Upload
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. ROLE-WISE PERMISSION MATRIX TABLE */}
      <section id="permissions" className="mt-16">
        <div className="rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.08)] border border-[#17645F]/10">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6848]">
              Access Control Policy
            </span>
            <h3 className="mt-1 text-2xl font-extrabold text-[#17645F]">
              Role-Wise Permission System
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-[#17645F]/15 text-xs font-extrabold uppercase tracking-wider text-[#17645F]">
                  <th className="py-3.5 px-4">Function</th>
                  <th className="py-3.5 px-4 text-center">Admin</th>
                  <th className="py-3.5 px-4 text-center">Teacher</th>
                  <th className="py-3.5 px-4 text-center">Student</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#17645F]/10 text-sm">
                {permissionMatrix.map((row, index) => (
                  <tr key={index} className="hover:bg-[#F3EEE8]/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#17645F]">{row.func}</td>
                    <td className="py-3.5 px-4 text-center">{renderCell(row.admin)}</td>
                    <td className="py-3.5 px-4 text-center">{renderCell(row.teacher)}</td>
                    <td className="py-3.5 px-4 text-center">{renderCell(row.student)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MODAL 1: FOLDER CHECKLIST */}
      {selectedCategoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl bg-[#FAF7F2] p-6 text-[#17645F] shadow-2xl border border-[#17645F]/15">
            <div className="flex items-center justify-between border-b border-[#17645F]/10 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#FF6848]">
                  {selectedYear} Mandatory Checklist
                </span>
                <h4 className="text-lg font-extrabold">{selectedCategoryModal.name}</h4>
              </div>
              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="rounded-lg p-1.5 hover:bg-[#F3EEE8] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-3 text-xs text-[#17645F]/75">{selectedCategoryModal.desc}</p>
            <ul className="mt-4 space-y-2.5">
              {selectedCategoryModal.checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2.5 rounded-xl bg-[#F3EEE8] p-3 text-xs font-bold"
                >
                  <FileText className="h-4 w-4 text-[#FF6848] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCategoryModal(null)}
                className="rounded-xl bg-[#F3EEE8] px-4 py-2 text-xs font-bold cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCategoryModal(null);
                  onOpenAuth('STUDENT', 'login');
                }}
                className="rounded-xl bg-[#FF6848] px-4 py-2 text-xs font-bold text-white cursor-pointer"
              >
                Login to Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: LOGIN & CREATE ACCOUNT */}
      {authModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-3xl bg-[#FAF7F2] p-6 sm:p-7 text-[#17645F] shadow-2xl border border-[#17645F]/15">
            <div className="flex items-center justify-between border-b border-[#17645F]/10 pb-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6848]">
                  ACPCE CSE (IoT, CS & BCT)
                </span>
                <h3 className="text-xl font-extrabold text-[#17645F]">
                  {authModal.mode === 'register' ? 'Create New Account' : 'Portal Login'}
                </h3>
              </div>
              <button
                onClick={() => setAuthModal({ ...authModal, isOpen: false })}
                className="rounded-xl p-1.5 hover:bg-[#F3EEE8] cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#F3EEE8] p-1">
              {['STUDENT', 'FACULTY', 'ADMIN'].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() =>
                    setAuthModal({
                      ...authModal,
                      role: r,
                      mode: r === 'ADMIN' ? 'login' : authModal.mode,
                    })
                  }
                  className={`rounded-lg py-2 text-xs font-extrabold transition-all cursor-pointer ${
                    authModal.role === r
                      ? 'bg-[#17645F] text-[#F3EEE8] shadow-xs'
                      : 'text-[#17645F]/70 hover:text-[#17645F]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>

            {authModal.role !== 'ADMIN' && (
              <div className="mt-3 flex justify-center gap-4 text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setAuthModal({ ...authModal, mode: 'login' })}
                  className={`pb-1 border-b-2 cursor-pointer ${
                    authModal.mode === 'login'
                      ? 'border-[#FF6848] text-[#FF6848]'
                      : 'border-transparent text-[#17645F]/60'
                  }`}
                >
                  Existing User Login
                </button>
                <button
                  type="button"
                  onClick={() => setAuthModal({ ...authModal, mode: 'register' })}
                  className={`pb-1 border-b-2 cursor-pointer ${
                    authModal.mode === 'register'
                      ? 'border-[#FF6848] text-[#FF6848]'
                      : 'border-transparent text-[#17645F]/60'
                  }`}
                >
                  + Create {authModal.role === 'FACULTY' ? 'Faculty' : 'Student'} Account
                </button>
              </div>
            )}

            <form onSubmit={handleAuthSubmit} className="mt-5 space-y-3.5">
              {authModal.mode === 'register' && (
                <div>
                  <label className="block text-xs font-bold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder={
                      authModal.role === 'FACULTY'
                        ? 'Prof. Firstname Lastname'
                        : 'Student Full Name'
                    }
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-medium border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold mb-1">Official Email ID</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-[#17645F]/50" />
                  <input
                    type="email"
                    required
                    placeholder="name@acpce.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl bg-[#F3EEE8] pl-9 pr-3.5 py-2.5 text-xs font-medium border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                  />
                </div>
              </div>

              {authModal.mode === 'register' && authModal.role !== 'ADMIN' && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">
                      {authModal.role === 'FACULTY' ? 'Employee ID' : 'PRN / Roll No.'}
                    </label>
                    <div className="relative">
                      <IdCard className="absolute left-3 top-2.5 h-4 w-4 text-[#17645F]/50" />
                      <input
                        type="text"
                        required
                        placeholder={authModal.role === 'FACULTY' ? 'ACP-CSE-104' : '2023IOT042'}
                        value={formData.identifier}
                        onChange={(e) =>
                          setFormData({ ...formData, identifier: e.target.value })
                        }
                        className="w-full rounded-xl bg-[#F3EEE8] pl-9 pr-3 py-2.5 text-xs font-medium border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">
                      {authModal.role === 'FACULTY' ? 'Designation' : 'Semester'}
                    </label>
                    <select
                      value={formData.semesterOrDesig}
                      onChange={(e) =>
                        setFormData({ ...formData, semesterOrDesig: e.target.value })
                      }
                      className="w-full rounded-xl bg-[#F3EEE8] px-3 py-2.5 text-xs font-bold border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                    >
                      {authModal.role === 'FACULTY' ? (
                        <>
                          <option>Assistant Professor</option>
                          <option>Associate Professor</option>
                          <option>HOD / Professor</option>
                        </>
                      ) : (
                        <>
                          <option>Semester 3 (SE)</option>
                          <option>Semester 4 (SE)</option>
                          <option>Semester 5 (TE)</option>
                          <option>Semester 6 (TE)</option>
                          <option>Semester 7 (BE)</option>
                          <option>Semester 8 (BE)</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 h-4 w-4 text-[#17645F]/50" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full rounded-xl bg-[#F3EEE8] pl-9 pr-3.5 py-2.5 text-xs font-medium border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6848] py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#E85535] transition-all cursor-pointer"
              >
                {authModal.mode === 'register'
                  ? `Create ${authModal.role} Account`
                  : `Login to ${authModal.role} Portal`}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default HomePage;