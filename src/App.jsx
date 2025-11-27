import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Briefcase, Heart, Home } from 'lucide-react';
import LandingPage from './components/LandingPage';
import EmployeeView from './components/EmployeeView';
import ManagerView from './components/ManagerView';
import { employees, jobRoles } from './mockData';

function App() {
  const [viewMode, setViewMode] = useState(null); // null, 'employee', or 'manager'
  const [employeeData, setEmployeeData] = useState(employees);
  const [jobData, setJobData] = useState(jobRoles);
  const [matches, setMatches] = useState([]); // Store mutual matches as { employeeId, jobId }

  // Handle employee swipe on a job
  const handleEmployeeSwipe = (employeeId, jobId, direction) => {
    if (direction === 'right') {
      // Update employee's swipe status
      setEmployeeData(prev =>
        prev.map(emp =>
          emp.id === employeeId
            ? { ...emp, has_swiped_right: { ...emp.has_swiped_right, [jobId]: true } }
            : emp
        )
      );

      // Check if manager also swiped right
      const job = jobData.find(j => j.id === jobId);
      if (job?.has_manager_swiped[employeeId] === true) {
        // It's a match!
        setMatches(prev => [...prev, { employeeId, jobId }]);
      }
    }
  };

  // Handle manager swipe on a candidate
  const handleManagerSwipe = (employeeId, jobId, direction) => {
    if (direction === 'right') {
      // Update job's manager swipe status
      setJobData(prev =>
        prev.map(job =>
          job.id === jobId
            ? { ...job, has_manager_swiped: { ...job.has_manager_swiped, [employeeId]: true } }
            : job
        )
      );

      // Check if employee also swiped right
      const employee = employeeData.find(e => e.id === employeeId);
      if (employee?.has_swiped_right[jobId] === true) {
        // It's a match!
        setMatches(prev => [...prev, { employeeId, jobId }]);
      }
    } else {
      // Track pass as well
      setJobData(prev =>
        prev.map(job =>
          job.id === jobId
            ? { ...job, has_manager_swiped: { ...job.has_manager_swiped, [employeeId]: false } }
            : job
        )
      );
    }
  };

  // Check if there's a mutual match
  const isMutualMatch = (employeeId, jobId) => {
    return matches.some(m => m.employeeId === employeeId && m.jobId === jobId);
  };

  const handleSelectMode = (mode) => {
    setViewMode(mode);
  };

  const handleGoHome = () => {
    setViewMode(null);
  };

  if (!viewMode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <LandingPage onSelectMode={handleSelectMode} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header with Navigation */}
      <div className="sticky top-0 z-30 glass border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">CareerSwipe</h1>
                <p className="text-xs text-gray-500">Swipe Right on Your Future</p>
              </div>
            </div>

            {/* Match Counter */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full">
              <Heart className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-semibold text-pink-900">
                {matches.length} {matches.length === 1 ? 'Match' : 'Matches'}
              </span>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleGoHome}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-white rounded-lg transition-colors"
              >
                <Home className="w-4 h-4" />
                <span className="hidden sm:inline">Home</span>
              </button>

              <div className="flex items-center gap-2 bg-white rounded-xl p-1 shadow-lg">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('employee')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    viewMode === 'employee'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Employee</span>
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setViewMode('manager')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                    viewMode === 'manager'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span className="hidden sm:inline">Manager</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="container mx-auto py-8"
        >
          {viewMode === 'employee' ? (
            <EmployeeView
              employees={employeeData}
              jobs={jobData}
              onSwipe={handleEmployeeSwipe}
            />
          ) : (
            <ManagerView
              employees={employeeData}
              jobs={jobData}
              onSwipe={handleManagerSwipe}
              isMutualMatch={isMutualMatch}
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 backdrop-blur-sm border-t border-white/20 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-gray-600">
            <span className="font-semibold gradient-text">Double Opt-In:</span> Matches only happen when both parties swipe right
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
