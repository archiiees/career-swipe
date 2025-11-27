import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, Sparkles, TrendingUp, AlertCircle, Heart, Lock, ChevronDown, Briefcase, MapPin, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import MatchBadge from './MatchBadge';
import CustomProjectModal from './CustomProjectModal';

const ManagerView = ({ employees, jobs, onSwipe, isMutualMatch }) => {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showCustomProjectModal, setShowCustomProjectModal] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSwipeRight = (candidate) => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EC4899', '#F43F5E', '#FB923C']
    });
    onSwipe(candidate.id, selectedJob.id, 'right');
  };

  const handleSwipeLeft = (candidate) => {
    onSwipe(candidate.id, selectedJob.id, 'left');
  };

  const handleRequestChat = (candidate) => {
    if (!isMutualMatch(candidate.id, selectedJob.id)) {
      alert('You need to match with this candidate first! Swipe right to express interest.');
      return;
    }
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    alert(`Chat request sent to ${candidate.name}! They'll be notified.`);
  };

  const handleAssignProject = (candidate) => {
    if (!isMutualMatch(candidate.id, selectedJob.id)) {
      alert('You can only assign projects to mutual matches! Both parties must swipe right first.');
      return;
    }
    setSelectedCandidate(candidate);
    setShowCustomProjectModal(true);
  };

  const handleSubmitCustomProject = (projectDescription) => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EC4899', '#F43F5E', '#FB923C']
    });
    alert(`Project sent to ${selectedCandidate.name}!\n\n"${projectDescription}"`);
  };

  const hasManagerSwiped = (candidateId) => {
    return selectedJob.has_manager_swiped[candidateId] !== undefined;
  };

  const getSwipeStatus = (candidate) => {
    const matched = isMutualMatch(candidate.id, selectedJob.id);
    const managerSwiped = selectedJob.has_manager_swiped[candidate.id] === true;
    const employeeSwiped = candidate.has_swiped_right[selectedJob.id] === true;

    if (matched) {
      return { status: 'matched', label: 'Matched!', color: 'from-green-500 to-emerald-500' };
    } else if (managerSwiped && !employeeSwiped) {
      return { status: 'waiting', label: 'Waiting for them...', color: 'from-yellow-500 to-orange-500' };
    } else if (!managerSwiped && employeeSwiped) {
      return { status: 'interested', label: 'They swiped right!', color: 'from-pink-500 to-rose-500' };
    }
    return { status: 'none', label: '', color: '' };
  };

  // Filter qualified candidates for the selected job (match score > 60%)
  const qualifiedCandidates = employees.filter(
    (emp) => emp.job_matches[selectedJob.id]?.match_score > 60
  );

  const handleJobChange = (job) => {
    setSelectedJob(job);
    setShowDropdown(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Job Selector */}
      <div className="mb-8">
        <div className="relative max-w-2xl">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="w-full glass rounded-xl px-6 py-4 flex items-center justify-between hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">{selectedJob?.title}</p>
                <div className="flex items-center gap-3 mt-1">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <MapPin className="w-3 h-3" />
                    {selectedJob?.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <User className="w-3 h-3" />
                    {selectedJob?.manager_name}
                  </span>
                </div>
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
                {jobs.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => handleJobChange(job)}
                    className={`w-full px-6 py-4 flex items-center gap-4 hover:bg-pink-50 transition-colors ${
                      job.id === selectedJob?.id ? 'bg-pink-50' : ''
                    }`}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left flex-1">
                      <p className="font-bold text-gray-900">{job.title}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs text-gray-500">{job.location}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{job.manager_name}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-2">Talent Scout</h1>
        <p className="text-gray-600 mb-4">
          AI-powered matches for your role based on fit analysis
        </p>

        {/* Job Info Card */}
        <div className="glass rounded-2xl p-6">
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-semibold text-pink-900 mb-2">About the Role</h3>
            <p className="text-gray-700 text-sm mb-3">{selectedJob.description}</p>
            <h3 className="text-sm font-semibold text-pink-900 mb-2">Requirements</h3>
            <p className="text-gray-700 text-sm italic">"{selectedJob.requirements}"</p>
          </div>
        </div>
      </div>

      {/* Candidates Grid */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Potential Matches ({qualifiedCandidates.length})
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Sparkles className="w-4 h-4" />
            <span>AI-Ranked by Fit Score</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {qualifiedCandidates
            .sort((a, b) => b.job_matches[selectedJob.id].match_score - a.job_matches[selectedJob.id].match_score)
            .map((candidate) => {
              const matchData = candidate.job_matches[selectedJob.id];
              const swipeStatus = getSwipeStatus(candidate);
              const isMatched = isMutualMatch(candidate.id, selectedJob.id);

              return (
                <motion.div
                  key={candidate.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{candidate.name}</h3>
                          <p className="text-pink-100 text-sm">{candidate.current_role}</p>
                          <p className="text-pink-200 text-xs mt-1">
                            {candidate.department} • {candidate.tenure}
                          </p>
                        </div>
                        <MatchBadge score={matchData.match_score} />
                      </div>

                      {/* Status Badge */}
                      {swipeStatus.status !== 'none' && (
                        <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${swipeStatus.color} rounded-full text-white text-xs font-bold mb-3`}>
                          <Heart className="w-3 h-3" />
                          {swipeStatus.label}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* AI Reasoning */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <h4 className="text-sm font-semibold text-gray-900">Why This Match</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {matchData.reasoning}
                      </p>
                    </div>

                    {/* Gap Analysis */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                        <h4 className="text-sm font-semibold text-gray-900">Development Area</h4>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {matchData.gap}
                      </p>
                    </div>

                    {/* Aspirations */}
                    <div className="bg-purple-50 rounded-lg p-3">
                      <h4 className="text-xs font-semibold text-purple-900 mb-1">Career Goals</h4>
                      <p className="text-sm text-purple-800 italic">
                        "{candidate.aspirations}"
                      </p>
                    </div>

                    {/* Swipe Actions (if not swiped yet) */}
                    {!hasManagerSwiped(candidate.id) && (
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => handleSwipeLeft(candidate)}
                          className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                        >
                          Pass
                        </button>
                        <button
                          onClick={() => handleSwipeRight(candidate)}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
                        >
                          <Heart className="w-4 h-4" />
                          Interested
                        </button>
                      </div>
                    )}

                    {/* Match Actions (only if mutual match) */}
                    {hasManagerSwiped(candidate.id) && (
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={() => handleRequestChat(candidate)}
                          disabled={!isMatched}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isMatched
                              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg hover:scale-105'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {!isMatched && <Lock className="w-4 h-4" />}
                          <MessageSquare className="w-4 h-4" />
                          Request Chat
                        </button>
                        <button
                          onClick={() => handleAssignProject(candidate)}
                          disabled={!isMatched}
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
                            isMatched
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                              : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          {!isMatched && <Lock className="w-4 h-4" />}
                          <Send className="w-4 h-4" />
                          Assign Project
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>

      {/* Custom Project Modal */}
      <CustomProjectModal
        isOpen={showCustomProjectModal}
        onClose={() => setShowCustomProjectModal(false)}
        onSubmit={handleSubmitCustomProject}
        candidateName={selectedCandidate?.name}
      />
    </div>
  );
};

export default ManagerView;
