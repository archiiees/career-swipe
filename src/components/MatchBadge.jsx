import { motion } from 'framer-motion';

const MatchBadge = ({ score }) => {
  const getColorClass = (score) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-rose-500';
  };

  const getGlowColor = (score) => {
    if (score >= 80) return 'shadow-green-500/50';
    if (score >= 60) return 'shadow-yellow-500/50';
    return 'shadow-red-500/50';
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', duration: 0.5 }}
      className={`inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r ${getColorClass(score)} ${getGlowColor(score)} shadow-lg`}
    >
      <span className="text-white font-bold text-lg">{score}% Match</span>
    </motion.div>
  );
};

export default MatchBadge;
