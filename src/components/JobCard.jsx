import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { X, Heart, Briefcase, MapPin, User, Sparkles, AlertCircle } from 'lucide-react';
import MatchBadge from './MatchBadge';

const JobCard = ({ job, matchData, onSwipe, onViewProject }) => {
  const [exitX, setExitX] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -150, 0, 150, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      setExitX(info.offset.x > 0 ? 200 : -200);
      onSwipe(info.offset.x > 0 ? 'right' : 'left');
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      animate={exitX !== 0 ? { x: exitX * 2, opacity: 0 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="absolute w-full max-w-md cursor-grab active:cursor-grabbing"
    >
      <div className="glass rounded-3xl overflow-hidden shadow-2xl">
        {/* Header with Match Badge */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{job.title}</h2>
                <div className="flex flex-col gap-1 text-pink-100 text-sm">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Hiring Manager: {job.manager_name}</span>
                  </div>
                </div>
              </div>
              <MatchBadge score={matchData.match_score} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Job Description */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">About the Role</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">What We're Looking For</h3>
            <p className="text-gray-700 text-sm">{job.requirements}</p>
          </div>

          {/* AI Reasoning */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4">
            <h3 className="text-sm font-semibold text-pink-900 mb-2 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
              Why This Match
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              {matchData.reasoning}
            </p>
          </div>

          {/* Gap Analysis */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h3 className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Growth Opportunity
            </h3>
            <p className="text-amber-800 text-sm">
              {matchData.gap}
            </p>
          </div>

          {/* Micro Project Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProject();
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Briefcase className="w-5 h-5" />
            View Trial Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default JobCard;
