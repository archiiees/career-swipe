import { motion } from 'framer-motion';
import { Calendar, MessageSquare, FileText, CheckCircle, Clock, Users } from 'lucide-react';
import { useState } from 'react';

const HRView = ({ matches, employees, jobs }) => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Get match details
  const getMatchDetails = (match) => {
    const employee = employees.find(e => e.id === match.employeeId);
    const job = jobs.find(j => j.id === match.jobId);
    const matchData = employee?.job_matches[job?.id];

    return { employee, job, matchData };
  };

  const handleScheduleMeeting = (match) => {
    const { employee, job } = getMatchDetails(match);
    alert(`📅 Meeting scheduled!\n\nEmployee: ${employee.name}\nRole: ${job.title}\nManager: ${job.manager_name}\n\nA calendar invite will be sent to both parties.`);
  };

  const handleSendMessage = (match) => {
    const { employee, job } = getMatchDetails(match);
    alert(`💬 Message sent to ${employee.name} and ${job.manager_name}!\n\nNext steps will be discussed in the conversation.`);
  };

  const handleAssignProject = (match) => {
    const { employee, job, matchData } = getMatchDetails(match);
    alert(`📋 Micro-Project Assigned!\n\nProject: ${matchData.micro_project}\n\nAssigned to: ${employee.name}\nRole: ${job.title}`);
  };

  if (matches.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-16">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-center"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">No Matches Yet</h2>
          <p className="text-gray-600 max-w-md">
            When employees and managers mutually swipe right, their matches will appear here for HR to facilitate next steps.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold gradient-text mb-2">HR Dashboard</h1>
        <p className="text-gray-600">
          Facilitate matched employees and managers to complete internal mobility
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-semibold text-green-900">
            {matches.length} Active {matches.length === 1 ? 'Match' : 'Matches'}
          </span>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match, index) => {
          const { employee, job, matchData } = getMatchDetails(match);

          return (
            <motion.div
              key={`${match.employeeId}-${match.jobId}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Match Header */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div className="px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-xs font-bold">
                    {matchData.match_score}% Match
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1">{employee.name}</h3>
                <p className="text-green-100 text-sm">{employee.current_role}</p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/20">
                  <div className="text-xs">→</div>
                  <div>
                    <p className="text-sm font-semibold">{job.title}</p>
                    <p className="text-xs text-green-200">{job.manager_name} • {job.location}</p>
                  </div>
                </div>
              </div>

              {/* Match Details */}
              <div className="p-6 space-y-4">
                {/* Why Match */}
                <div>
                  <h4 className="text-xs font-semibold text-gray-500 uppercase mb-1">Why They Matched</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {matchData.reasoning}
                  </p>
                </div>

                {/* Micro Project */}
                <div className="bg-purple-50 rounded-lg p-3">
                  <h4 className="text-xs font-semibold text-purple-900 mb-1 flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    Trial Project
                  </h4>
                  <p className="text-sm text-purple-800">
                    {matchData.micro_project}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 space-y-2">
                  <button
                    onClick={() => handleScheduleMeeting(match)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule Meeting
                  </button>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleSendMessage(match)}
                      className="flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Message
                    </button>
                    <button
                      onClick={() => handleAssignProject(match)}
                      className="flex items-center justify-center gap-1 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all text-sm"
                    >
                      <FileText className="w-4 h-4" />
                      Assign
                    </button>
                  </div>
                </div>

                {/* Timeline */}
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>Matched just now</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6">
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-1">{matches.length}</div>
          <div className="text-sm text-gray-600">Total Matches</div>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-1">
            {Math.round(matches.reduce((acc, match) => {
              const { matchData } = getMatchDetails(match);
              return acc + matchData.match_score;
            }, 0) / matches.length) || 0}%
          </div>
          <div className="text-sm text-gray-600">Avg Match Score</div>
        </div>
        <div className="glass rounded-xl p-6 text-center">
          <div className="text-3xl font-bold gradient-text mb-1">0</div>
          <div className="text-sm text-gray-600">Completed Moves</div>
        </div>
      </div>
    </div>
  );
};

export default HRView;
