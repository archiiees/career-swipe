import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, RotateCcw, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import JobCard from './JobCard';
import ProjectModal from './ProjectModal';

const EmployeeView = ({ employees, jobs, onSwipe }) => {
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]);
  const [currentJobIndex, setCurrentJobIndex] = useState(0);
  const [swipeHistory, setSwipeHistory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const currentJob = jobs[currentJobIndex];
  const matchData = selectedEmployee?.job_matches[currentJob?.id];

  const handleSwipe = (direction) => {
    if (direction === 'right') {
      // Trigger confetti on match
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#EC4899', '#F43F5E', '#FB923C']
      });
    }

    // Notify parent component
    onSwipe(selectedEmployee.id, currentJob.id, direction);

    setSwipeHistory([...swipeHistory, { job: currentJob, direction }]);

    setTimeout(() => {
      setCurrentJobIndex((prev) => prev + 1);
    }, 300);
  };

  const handleUndo = () => {
    if (swipeHistory.length > 0) {
      const newHistory = [...swipeHistory];
      newHistory.pop();
      setSwipeHistory(newHistory);
      setCurrentJobIndex((prev) => Math.max(0, prev - 1));
    }
  };

  const handleEmployeeChange = (employee) => {
    setSelectedEmployee(employee);
    setCurrentJobIndex(0);
    setSwipeHistory([]);
    setShowDropdown(false);
  };

  if (currentJobIndex >= jobs.length) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">All Caught Up!</h2>
          <p className="text-gray-600">You've reviewed all available opportunities.</p>
          <button
            onClick={() => {
              setCurrentJobIndex(0);
              setSwipeHistory([]);
            }}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
          >
            Review Again
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      {/* Employee Selector */}
      <div className="mb-6 w-full max-w-md">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full glass rounded-xl px-4 py-3 flex items-center justify-between hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                {selectedEmployee?.name.charAt(0)}
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">{selectedEmployee?.name}</p>
                <p className="text-xs text-gray-500">{selectedEmployee?.current_role}</p>
              </div>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 glass rounded-xl overflow-hidden shadow-2xl z-20"
              >
                {employees.map((emp) => (
                  <button
                    key={emp.id}
                    onClick={() => handleEmployeeChange(emp)}
                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-pink-50 transition-colors ${
                      emp.id === selectedEmployee?.id ? 'bg-pink-50' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold">
                      {emp.name.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.current_role}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-2">Opportunity Radar</h1>
        <p className="text-gray-600">Swipe right to express interest • Swipe left to pass</p>
        <div className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full inline-block">
          <p className="text-sm font-semibold text-pink-900">
            {jobs.length - currentJobIndex} {jobs.length - currentJobIndex === 1 ? 'role' : 'roles'} remaining
          </p>
        </div>
      </div>

      {/* Job Card Stack Container */}
      <div className="relative w-full max-w-md h-[600px] flex items-center justify-center mb-8">
        <AnimatePresence>
          {currentJob && matchData && (
            <JobCard
              key={currentJob.id}
              job={currentJob}
              matchData={matchData}
              onSwipe={handleSwipe}
              onViewProject={() => setShowModal(true)}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('left')}
          className="w-16 h-16 rounded-full bg-white border-2 border-red-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <X className="w-8 h-8 text-red-500" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleUndo}
          disabled={swipeHistory.length === 0}
          className="w-14 h-14 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RotateCcw className="w-6 h-6 text-gray-600" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipe('right')}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        >
          <Heart className="w-8 h-8 text-white" />
        </motion.button>
      </div>

      {/* Project Modal */}
      <ProjectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        project={matchData?.micro_project}
        candidateName={selectedEmployee?.name}
      />
    </div>
  );
};

export default EmployeeView;
