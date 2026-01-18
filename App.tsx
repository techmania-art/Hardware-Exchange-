
import React, { useState, useEffect } from 'react';
import { Page, UserRole } from './types';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import InventoryPage from './pages/InventoryPage';
import RequestsPage from './pages/RequestsPage';
import FinesPage from './pages/FinesPage';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.LANDING);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(UserRole.USER);

  // Simple routing logic
  const renderPage = () => {
    switch (currentPage) {
      case Page.LANDING:
        return <LandingPage onStart={() => setCurrentPage(Page.LOGIN)} />;
      case Page.LOGIN:
        return <LoginPage onLogin={(role) => {
          setIsLoggedIn(true);
          setUserRole(role);
          setCurrentPage(Page.INVENTORY);
        }} />;
      case Page.INVENTORY:
        return <InventoryPage />;
      case Page.REQUESTS:
        return <RequestsPage role={userRole} />;
      case Page.FINES:
        return <FinesPage role={userRole} />;
      default:
        return <LandingPage onStart={() => setCurrentPage(Page.LOGIN)} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      {isLoggedIn && (
        <Navbar 
          currentPage={currentPage} 
          setPage={setCurrentPage} 
          onLogout={() => {
            setIsLoggedIn(false);
            setCurrentPage(Page.LANDING);
          }}
          role={userRole}
          toggleRole={() => setUserRole(prev => prev === UserRole.USER ? UserRole.RENTER : UserRole.USER)}
        />
      )}
      <main className="transition-all duration-500">
        {renderPage()}
      </main>
    </div>
  );
};

export default App;
