import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import StudentDashboard from './components/StudentDashboard';
import FacultyDashboard from './components/FacultyDashboard';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [selectedYear, setSelectedYear] = useState('AY 2025-26');
  const [currentUser, setCurrentUser] = useState(null);
  const [viewPublicHome, setViewPublicHome] = useState(false);

  const [authModal, setAuthModal] = useState({
    isOpen: false,
    role: 'STUDENT',
    mode: 'login',
  });

  const handleOpenAuth = (role, mode = 'login') => {
    setAuthModal({ isOpen: true, role, mode });
  };

  const handleLoginSuccess = (userObj) => {
    setCurrentUser(userObj);
    setViewPublicHome(false);
    setAuthModal({ ...authModal, isOpen: false });
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setViewPublicHome(false);
  };

  return (
    <div className="min-h-screen bg-[#F3EEE8] text-[#17645F] flex flex-col justify-between">
      <Navbar
        currentUser={currentUser}
        onOpenAuth={handleOpenAuth}
        onLogout={handleLogout}
      />

      {currentUser && currentUser.role === 'STUDENT' && !viewPublicHome ? (
        <StudentDashboard
          currentUser={currentUser}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          onBackHome={() => setViewPublicHome(true)}
        />
      ) : currentUser && currentUser.role === 'FACULTY' && !viewPublicHome ? (
        <FacultyDashboard
          currentUser={currentUser}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          onBackHome={() => setViewPublicHome(true)}
        />
      ) : currentUser && currentUser.role === 'ADMIN' && !viewPublicHome ? (
        <AdminDashboard
          currentUser={currentUser}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          onBackHome={() => setViewPublicHome(true)}
        />
      ) : (
        <HomePage
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          onOpenAuth={handleOpenAuth}
          authModal={authModal}
          setAuthModal={setAuthModal}
          onLoginSuccess={handleLoginSuccess}
        />
      )}

      <Footer onOpenAuth={handleOpenAuth} />
    </div>
  );
}

export default App;