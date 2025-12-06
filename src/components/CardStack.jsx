import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { X, Heart, Briefcase, Sparkles } from 'lucide-react';
import MatchBadge from './MatchBadge';

const CardStack = ({ candidate, onSwipe, onViewProject }) => {
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
        <div className="bg-gradient-to-br from-lodha-gold to-lodha-gold-light p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>

          <div className="relative z-10">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold mb-1">{candidate.name}</h2>
                <p className="text-amber-100 text-sm">{candidate.current_role}</p>
                <p className="text-amber-200 text-xs mt-1">{candidate.department} • {candidate.tenure}</p>
              </div>
              <MatchBadge score={candidate.quantum_analysis.match_score} />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {candidate.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Aspirations */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-lodha-gold" />
              <h3 className="font-semibold text-gray-900">Career Aspirations</h3>
            </div>
            <p className="text-gray-600 text-sm italic">"{candidate.aspirations}"</p>
          </div>

          {/* AI Reasoning */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 border border-lodha-gold/10">
            <h3 className="text-sm font-semibold text-lodha-dark mb-2 uppercase tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 bg-lodha-gold rounded-full animate-pulse"></span>
              AI Analysis
            </h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              {candidate.quantum_analysis.reasoning}
            </p>
          </div>

          {/* Gap Analysis */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <h3 className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
              Growth Opportunity
            </h3>
            <p className="text-amber-800 text-sm">
              {candidate.quantum_analysis.gap}
            </p>
          </div>

          {/* Micro Project Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewProject();
            }}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-lodha-navy to-lodha-dark text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            <Briefcase className="w-5 h-5" />
            View Micro-Project
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CardStack;
