import React, { useState } from 'react';
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trash2,
  Download,
  Filter,
  Calendar,
  Award,
  Briefcase,
  Code2,
  BookOpen,
  Lightbulb,
  Plus,
  Search,
  MessageSquare,
  ArrowLeft,
} from 'lucide-react';

const StudentDashboard = ({ currentUser, selectedYear, setSelectedYear, onBackHome }) => {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  // Form State for New Upload
  const [uploadForm, setUploadForm] = useState({
    title: '',
    academicYear: selectedYear || 'AY 2025-26',
    category: 'Hackathons',
    semester: 'Semester 6 (TE)',
    organization: '',
    achievementType: 'Winner / Top Finalist',
    fileName: '',
  });

  // Initial Sample Student Records
  const [submissions, setSubmissions] = useState([
    {
      id: 'DOC-STU-101',
      title: 'Smart India Hackathon (SIH) - Blockchain Land Registry',
      academicYear: 'AY 2025-26',
      category: 'Hackathons',
      semester: 'Semester 6 (TE)',
      organization: 'AICTE & Ministry of Education',
      achievementType: 'Grand Finale Finalist',
      fileName: 'SIH_2025_Finalist_Certificate.pdf',
      uploadedOn: '12 Oct 2025',
      status: 'Approved',
      remarks: 'Verified with geo-tagged photo & team roster. Mapped to NAAC 5.3.1.',
    },
    {
      id: 'DOC-STU-102',
      title: 'Cyber Security Analyst Summer Internship',
      academicYear: 'AY 2025-26',
      category: 'Training & Placement',
      semester: 'Semester 5 (TE)',
      organization: 'QuickHeal Security Labs, Pune',
      achievementType: '2 Months Internship Certificate',
      fileName: 'QuickHeal_Internship_Completion.pdf',
      uploadedOn: '04 Nov 2025',
      status: 'Pending',
      remarks: 'Awaiting faculty verification.',
    },
    {
      id: 'DOC-STU-103',
      title: 'National IoT & Edge AI Ideathon 2025',
      academicYear: 'AY 2025-26',
      category: 'Ideathons',
      semester: 'Semester 6 (TE)',
      organization: 'IIT Bombay Techfest',
      achievementType: 'Participation & Abstract',
      fileName: 'IoT_Ideathon_Poster.pdf',
      uploadedOn: '28 Oct 2025',
      status: 'Revision Needed',
      remarks: 'Please re-upload a clearer PDF that includes the Certificate ID QR code.',
    },
    {
      id: 'DOC-STU-104',
      title: 'CodeChef / HackerRank Dept Codethon Rank 2',
      academicYear: 'AY 2024-25',
      category: 'Codethons',
      semester: 'Semester 4 (SE)',
      organization: 'ACPCE CSE (IoT, CS & BCT)',
      achievementType: '2nd Place Winner',
      fileName: 'ACPCE_Codethon_Rank2.pdf',
      uploadedOn: '19 Mar 2025',
      status: 'Approved',
      remarks: 'Approved by Event Coordinator.',
    },
  ]);

  const academicYears = [
    'AY 2026-27',
    'AY 2025-26',
    'AY 2024-25',
    'AY 2023-24',
    'AY 2022-23',
  ];

const studentCategories = [
  'Training & Placement',
  'Placement Offers',
  'Internships',
  'Hackathons',
  'Codethons',
  'Ideathons',
  'Coding Competitions',
  'Technical Events',
  'Workshops & Seminars',
  'Certifications',
  'Online Courses',
  'Publications & Research',
  'Research Papers',
  'Journal Publications',
  'Conference Papers',
  'Patents & Copyrights',
  'Academic Projects',
  'Mini Projects',
  'Major Projects',
  'Final Year Projects',
  'Live Projects',
  'Higher Studies',
  'GATE / GRE / TOEFL / IELTS',
  'Entrepreneurship & Startups',
  'Sports Achievements',
  'Cultural Activities',
  'NSS / NCC Activities',
  'Social Activities',
  'Awards & Recognitions',
  'Scholarships',
  'Academic Achievements',
  'Technical Achievements',
  'Leadership Activities',
  'Student Club Activities',
  'Event Organization',
  'Resume / CV',
  'LinkedIn Profile',
  'GitHub Profile',
  'Other Achievements'
];

  // Handle New Submission
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadForm.title || !uploadForm.organization) return;

    const newDoc = {
      id: `DOC-STU-${Math.floor(200 + Math.random() * 800)}`,
      title: uploadForm.title,
      academicYear: uploadForm.academicYear,
      category: uploadForm.category,
      semester: uploadForm.semester,
      organization: uploadForm.organization,
      achievementType: uploadForm.achievementType,
      fileName:
        uploadForm.fileName ||
        `${uploadForm.category.replace(/\s+/g, '_')}_Proof.pdf`,
      uploadedOn: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      status: 'Pending',
      remarks: 'Submitted to Department Faculty Verification Desk.',
    };

    setSubmissions([newDoc, ...submissions]);
    setUploadForm({
      ...uploadForm,
      title: '',
      organization: '',
      fileName: '',
    });
  };

  // Delete Own Pending Upload (Enforcing Role Permission Rule)
  const handleDeletePending = (id) => {
    setSubmissions(submissions.filter((item) => item.id !== id));
  };

  // Filtered Submissions
  const filteredSubmissions = submissions.filter((item) => {
    const matchesYear = selectedYear === 'ALL' || item.academicYear === selectedYear;
    const matchesCat =
      activeCategoryFilter === 'ALL' || item.category === activeCategoryFilter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.organization.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYear && matchesCat && matchesSearch;
  });

  // Stats calculation
  const totalCount = submissions.length;
  const approvedCount = submissions.filter((s) => s.status === 'Approved').length;
  const pendingCount = submissions.filter((s) => s.status === 'Pending').length;
  const revisionCount = submissions.filter((s) => s.status === 'Revision Needed').length;

  const getStatusBadge = (status) => {
    if (status === 'Approved') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#E6F0EF] px-3 py-1 text-xs font-extrabold text-[#17645F] border border-[#17645F]/20">
          <CheckCircle2 className="h-3.5 w-3.5 text-[#17645F]" /> Approved
        </span>
      );
    }
    if (status === 'Pending') {
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF0EC] px-3 py-1 text-xs font-extrabold text-[#FF6848] border border-[#FF6848]/30">
          <Clock className="h-3.5 w-3.5 text-[#FF6848]" /> Pending Verification
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-extrabold text-amber-800 border border-amber-300">
        <AlertCircle className="h-3.5 w-3.5 text-amber-700" /> Revision Needed
      </span>
    );
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 w-full">
      {/* 1. TOP STUDENT PROFILE & METRICS BANNER */}
      <section className="rounded-3xl bg-gradient-to-r from-[#17645F] to-[#0F4743] p-6 sm:p-8 text-[#F3EEE8] shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#FF6848] px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white">
                Student Self-Service Portfolio
              </span>
              <span className="rounded-full bg-[#FAF7F2]/15 px-3 py-1 text-xs font-bold text-[#F3EEE8]">
                PRN: {currentUser?.identifier || '2023IOT042'}
              </span>
              <button
                onClick={onBackHome}
                className="inline-flex items-center gap-1 rounded-full bg-[#FAF7F2]/10 px-3 py-1 text-xs font-bold text-[#F3EEE8] hover:bg-[#FAF7F2]/20 cursor-pointer"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> View Public Home
              </button>
            </div>

            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white">
              Welcome, {currentUser?.name || 'CSE Student'}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#F3EEE8]/80">
              Department of CSE (IoT, Cyber Security & Blockchain Technology) • Upload & track your year-wise achievements
            </p>
          </div>

          {/* 4 Summary Metric Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
            <div className="rounded-2xl bg-[#FAF7F2]/10 px-4 py-3 border border-[#FAF7F2]/15">
              <p className="text-2xl font-black text-white">{totalCount}</p>
              <p className="text-[11px] font-bold text-[#F3EEE8]/75">My Uploads</p>
            </div>
            <div className="rounded-2xl bg-[#E6F0EF] px-4 py-3 text-[#17645F]">
              <p className="text-2xl font-black">{approvedCount}</p>
              <p className="text-[11px] font-bold">Approved</p>
            </div>
            <div className="rounded-2xl bg-[#FFF0EC] px-4 py-3 text-[#FF6848]">
              <p className="text-2xl font-black">{pendingCount}</p>
              <p className="text-[11px] font-bold">Pending</p>
            </div>
            <div className="rounded-2xl bg-[#FAF7F2]/10 px-4 py-3 border border-[#FAF7F2]/15">
              <p className="text-2xl font-black text-amber-300">{revisionCount}</p>
              <p className="text-[11px] font-bold text-[#F3EEE8]/75">Needs Fix</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN WORKSPACE GRID: UPLOAD FORM (LEFT) + OWN RECORDS TABLE (RIGHT) */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* LEFT COLUMN: UPLOAD NEW ACHIEVEMENT / CERTIFICATE */}
        <div className="lg:col-span-4">
          <div className="rounded-3xl bg-[#FAF7F2] p-6 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.08)] border border-[#17645F]/15 sticky top-24">
            <div className="flex items-center gap-3 border-b border-[#17645F]/10 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF6848] text-white">
                <UploadCloud className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#17645F]">
                  Upload New Evidence
                </h3>
                <p className="text-xs text-[#17645F]/70">
                  Submit PDF/Certificate for faculty approval
                </p>
              </div>
            </div>

            <form onSubmit={handleUploadSubmit} className="mt-5 space-y-4">
              {/* Academic Year & Category */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                    Academic Year
                  </label>
                  <select
                    value={uploadForm.academicYear}
                    onChange={(e) =>
                      setUploadForm({ ...uploadForm, academicYear: e.target.value })
                    }
                    className="w-full rounded-xl bg-[#F3EEE8] px-3 py-2.5 text-xs font-bold text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                  >
                    {academicYears.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                    Semester
                  </label>
                  <select
                    value={uploadForm.semester}
                    onChange={(e) =>
                      setUploadForm({ ...uploadForm, semester: e.target.value })
                    }
                    className="w-full rounded-xl bg-[#F3EEE8] px-3 py-2.5 text-xs font-bold text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                  >
                    <option>Semester 3 (SE)</option>
                    <option>Semester 4 (SE)</option>
                    <option>Semester 5 (TE)</option>
                    <option>Semester 6 (TE)</option>
                    <option>Semester 7 (BE)</option>
                    <option>Semester 8 (BE)</option>
                  </select>
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                  Documentation Category
                </label>
                <select
                  value={uploadForm.category}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, category: e.target.value })
                  }
                  className="w-full rounded-xl bg-[#17645F] px-3.5 py-2.5 text-xs font-bold text-[#F3EEE8] border border-[#17645F] focus:outline-none focus:ring-2 focus:ring-[#FF6848]"
                >
                  {studentCategories.map((cat) => (
                    <option key={cat} value={cat} className="bg-[#FAF7F2] text-[#17645F]">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Event / Title */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                  Activity / Event / Job Offer Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Smart India Hackathon 2025 / TCS Offer Letter"
                  value={uploadForm.title}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, title: e.target.value })
                  }
                  className="w-full rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-medium text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                />
              </div>

              {/* Organizing Body / Company */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                  Company / Organizer / Journal Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., AICTE, Infosys, IEEE Access, IIT Bombay"
                  value={uploadForm.organization}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, organization: e.target.value })
                  }
                  className="w-full rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-medium text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                />
              </div>

              {/* Achievement Level */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                  Achievement / Package / Outcome
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., 1st Runner Up / Placed 7.5 LPA / Scopus Indexed"
                  value={uploadForm.achievementType}
                  onChange={(e) =>
                    setUploadForm({ ...uploadForm, achievementType: e.target.value })
                  }
                  className="w-full rounded-xl bg-[#F3EEE8] px-3.5 py-2.5 text-xs font-medium text-[#17645F] border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                />
              </div>

              {/* File Picker Simulation */}
              <div>
                <label className="block text-[11px] font-extrabold uppercase text-[#17645F]/80 mb-1">
                  Attach Proof (PDF / DOCX / Certificate)
                </label>
                <label className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#17645F]/25 bg-[#F3EEE8]/70 p-4 text-center hover:border-[#FF6848] transition-colors cursor-pointer">
                  <FileText className="h-6 w-6 text-[#FF6848]" />
                  <span className="mt-1.5 text-xs font-bold text-[#17645F]">
                    {uploadForm.fileName || 'Click to choose PDF, Certificate or Geo-Photo'}
                  </span>
                  <span className="text-[10px] text-[#17645F]/60 mt-0.5">
                    Max size 10MB • Stored in Department Year-Wise Vault
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files?.[0]) {
                        setUploadForm({ ...uploadForm, fileName: e.target.files[0].name });
                      }
                    }}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FF6848] py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md hover:bg-[#E85535] transition-all cursor-pointer"
              >
                <Plus className="h-4 w-4" />
                <span>Submit for Faculty Verification</span>
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT COLUMN: STUDENT'S SUBMITTED DOCUMENTS & VERIFICATION TRACKER */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl bg-[#FAF7F2] p-6 shadow-[0_20px_40px_-15px_rgba(23,100,95,0.08)] border border-[#17645F]/15">
            {/* Filter & Search Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#17645F]/10 pb-5">
              <div>
                <h3 className="text-lg font-extrabold text-[#17645F]">
                  My Uploaded Documents & Verification Status
                </h3>
                <p className="text-xs text-[#17645F]/70">
                  Permissions: View & download own records • Delete own pending uploads
                </p>
              </div>

              {/* Academic Year Filter Dropdown */}
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

            {/* Category Filter Pills & Search */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {['ALL', ...studentCategories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategoryFilter(cat)}
                    className={`rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all cursor-pointer ${
                      activeCategoryFilter === cat
                        ? 'bg-[#17645F] text-[#F3EEE8]'
                        : 'bg-[#F3EEE8] text-[#17645F] hover:bg-[#E6F0EF]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[200px]">
                <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#17645F]/50" />
                <input
                  type="text"
                  placeholder="Search my records..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl bg-[#F3EEE8] pl-8 pr-3 py-2 text-xs font-medium border border-[#17645F]/15 focus:outline-none focus:border-[#FF6848]"
                />
              </div>
            </div>

            {/* Submissions List */}
            <div className="mt-6 space-y-4">
              {filteredSubmissions.length === 0 ? (
                <div className="rounded-2xl bg-[#F3EEE8] p-10 text-center">
                  <FileText className="mx-auto h-8 w-8 text-[#17645F]/40" />
                  <p className="mt-2 text-sm font-bold text-[#17645F]">
                    No documents found for the selected filter.
                  </p>
                  <p className="text-xs text-[#17645F]/65">
                    Use the upload form on the left to add your certificates or offer letters.
                  </p>
                </div>
              ) : (
                filteredSubmissions.map((doc) => (
                  <div
                    key={doc.id}
                    className="rounded-2xl bg-[#F3EEE8] p-5 border border-[#17645F]/10 hover:border-[#17645F]/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-md bg-[#17645F] px-2.5 py-0.5 text-[10px] font-extrabold text-[#F3EEE8]">
                            {doc.academicYear}
                          </span>
                          <span className="rounded-md bg-[#FFF0EC] px-2.5 py-0.5 text-[10px] font-extrabold text-[#FF6848] border border-[#FF6848]/20">
                            {doc.category}
                          </span>
                          <span className="text-[11px] font-bold text-[#17645F]/60">
                            {doc.semester} • ID: {doc.id}
                          </span>
                        </div>

                        <h4 className="mt-2 text-base font-extrabold text-[#17645F]">
                          {doc.title}
                        </h4>

                        <p className="mt-1 text-xs font-semibold text-[#17645F]/80">
                          Organization: <span className="font-bold">{doc.organization}</span> •{' '}
                          Outcome: <span className="text-[#FF6848] font-bold">{doc.achievementType}</span>
                        </p>
                      </div>

                      <div className="shrink-0">{getStatusBadge(doc.status)}</div>
                    </div>

                    {/* Faculty Verification Remarks Box */}
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-[#FAF7F2] p-3 text-xs border border-[#17645F]/10">
                      <MessageSquare className="h-4 w-4 text-[#FF6848] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-[#17645F]">
                          Faculty Remarks:{' '}
                        </span>
                        <span className="text-[#17645F]/80">{doc.remarks}</span>
                      </div>
                    </div>

                    {/* File Attachment & Action Buttons */}
                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#17645F]/10 pt-3 text-xs">
                      <div className="flex items-center gap-2 font-bold text-[#17645F]">
                        <FileText className="h-4 w-4 text-[#FF6848]" />
                        <span>{doc.fileName}</span>
                        <span className="text-[#17645F]/50">• Uploaded {doc.uploadedOn}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => alert(`Downloading ${doc.fileName}...`)}
                          className="inline-flex items-center gap-1 rounded-lg bg-[#E6F0EF] px-3 py-1.5 text-xs font-bold text-[#17645F] hover:bg-[#17645F] hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5" /> Download
                        </button>

                        {/* Student Permission Rule: Can only delete OWN PENDING uploads */}
                        {doc.status !== 'Approved' && (
                          <button
                            onClick={() => handleDeletePending(doc.id)}
                            className="inline-flex items-center gap-1 rounded-lg bg-[#FFF0EC] px-3 py-1.5 text-xs font-bold text-[#FF6848] hover:bg-[#FF6848] hover:text-white transition-colors cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" /> Delete Pending
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default StudentDashboard;