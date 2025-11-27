import { motion } from 'framer-motion';
import { Heart, Users, Briefcase, Sparkles, ArrowRight, Search, Brain, Target, MessageSquare, TrendingUp, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

const LandingPage = ({ onSelectMode }) => {
  const [particleCount] = useState(20);

  return (
    <div className="min-h-screen">
      {/* Microcopy tag */}
      <div className="fixed top-6 right-6 z-50 text-xs text-gray-400 italic max-w-xs text-right">
        Reimagining internal mobility since 2025. ✨
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        {/* Quantum Particles Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(particleCount)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-60"
              animate={{
                x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl shadow-2xl">
              <Heart className="w-10 h-10 text-white" />
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Internal mobility is not a job board.<br />
              <span className="gradient-text">It's a marketplace of hidden potential.</span>
            </h1>

            <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Where employees don't need to "apply."<br />
              They simply get <span className="font-semibold text-pink-600">discovered</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onSelectMode('employee')}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Start Matching Talent
              </button>
              <button
                className="px-8 py-4 glass text-gray-900 text-lg font-semibold rounded-xl hover:shadow-xl transition-all flex items-center gap-2"
              >
                Watch the Universe Collapse
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: The Challenge */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4">
              Traditional internal mobility is <span className="text-amber-400">binary</span>.<br />
              <span className="text-gray-400 text-3xl">Let's make it more dynamic.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Limited visibility",
                subtitle: "Great internal talent often goes unnoticed",
                delay: 0.2
              },
              {
                title: "Silent opportunity gaps",
                subtitle: "Employees don't always know what's available",
                delay: 0.4
              },
              {
                title: "Disconnected teams",
                subtitle: "Managers may not be aware of hidden talent",
                delay: 0.6
              }
            ].map((panel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: panel.delay }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-4">{panel.title}</h3>
                <p className="text-gray-300 text-lg">{panel.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <p className="text-2xl text-gray-300 mb-2">
              Binary talent decisions can limit organizational potential.
            </p>
            <p className="text-xl text-gray-400">
              There's a better way to connect talent with opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 3: The Philosophy */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Every employee is always a <span className="gradient-text">"maybe."</span><br />
              Until the universe decides otherwise.
            </h2>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                In quantum physics, particles exist in a state of <span className="font-semibold">superposition</span>:<br />
                both here and there, both yes and no, both applied and not applied.
              </p>
              <p className="text-xl text-gray-700 font-medium">
                We simply brought that philosophy to… careers.
              </p>
            </div>

            {/* Animation representation */}
            <div className="relative h-64 flex items-center justify-center mb-8">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-30 absolute"
              />
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                  className="absolute"
                  style={{
                    left: `${50 + 30 * Math.cos((i * 60 * Math.PI) / 180)}%`,
                    top: `${50 + 30 * Math.sin((i * 60 * Math.PI) / 180)}%`,
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg shadow-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-3xl font-bold text-gray-900">
              Internal mobility should be <span className="gradient-text">fluid</span>, not formal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: The Big Idea */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">Continuous Matching</span><br />
              because opportunities shouldn't wait for paperwork.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "We read every role's real expectations",
                subtitle: "not just the bullet points.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Brain,
                title: "We understand what employees can become",
                subtitle: "not only what they've done.",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: Target,
                title: "We suggest matches constantly",
                subtitle: "even if no one has applied.",
                color: "from-orange-500 to-red-500"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="glass rounded-2xl p-8 hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center text-2xl text-gray-600 mt-12 italic"
          >
            The system works harder than the employees.<br />
            <span className="font-semibold text-gray-900">Finally.</span>
          </motion.p>
        </div>
      </section>

      {/* Section 5: The Swipe Moment */}
      <section className="py-24 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Swipe on internal talent.<br />
              <span className="text-pink-600">Yes, we went there.</span>
            </h2>

            <div className="my-16 max-w-md mx-auto">
              <div className="glass rounded-3xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-pink-500 to-rose-600 p-6 text-white">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">Priya Sharma</h3>
                      <p className="text-pink-100 text-sm">HR Specialist - Comp & Benefits</p>
                    </div>
                    <div className="px-3 py-1 bg-green-500 rounded-full text-white font-bold text-sm">
                      82% Match
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <div className="space-y-4 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Why they're a match</h4>
                      <p className="text-sm text-gray-600">Strong compensation background + coaching aspirations = perfect talent development fit</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">What they'll learn</h4>
                      <p className="text-sm text-gray-600">Workshop facilitation, L&D program design</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">How fast they'll ramp</h4>
                      <p className="text-sm text-gray-600">60-90 days with mentorship</p>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold">
                      Not today
                    </button>
                    <button className="flex-1 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-semibold animate-pulse">
                      Let's talk
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-600 italic">
              No cover letters. No awkward referral politics. Just chemistry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Value Proposition Grid */}
      <section className="py-24 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "For HR",
                points: [
                  "Finally… internal hiring bragging rights.",
                  "Insights. Mobility heatmaps. Actual data.",
                  "Internal pipeline unlocked."
                ]
              },
              {
                title: "For Managers",
                points: [
                  'Stop saying "I can\'t find talent."',
                  "Matches appear without sourcing.",
                  "Promote from inside, look like a hero."
                ]
              },
              {
                title: "For Employees",
                points: [
                  "See your future without begging.",
                  "Growth paths that feel possible.",
                  "Swipe without alerting your boss. 🤫"
                ]
              }
            ].map((col, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <h3 className="text-2xl font-bold mb-6 text-pink-400">{col.title}</h3>
                <ul className="space-y-3">
                  {col.points.map((point, i) => (
                    <li key={i} className="text-gray-300">{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-2xl text-gray-300">
            Everyone wins. <span className="text-pink-400 font-semibold">Except the external recruiters.</span><br />
            <span className="text-gray-400">We're fine with that.</span>
          </p>
        </div>
      </section>

      {/* Section 7: Credibility Stats */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Better for business. Better for people.<br />
            <span className="gradient-text">Better for dignity.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { stat: "40-60%", label: "internal fill potential unlocked" },
              { stat: "35%", label: "lower attrition" },
              { stat: "50%", label: "faster opportunity discovery" },
              { stat: "2x", label: "more internal placements" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6"
              >
                <div className="text-5xl font-bold gradient-text mb-2">{item.stat}</div>
                <div className="text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: How It Works */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">How It Works</h2>

          <div className="space-y-8">
            {[
              { step: "1", title: "Import roles & people", subtitle: "Seamlessly integrate with your existing HRIS" },
              { step: "2", title: "Configure match signals & movement policies", subtitle: "" },
              { step: "3", title: "Watch matches appear. Constantly.", subtitle: "" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1 pt-3">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{item.title}</h3>
                  {item.subtitle && <p className="text-gray-600 italic">{item.subtitle}</p>}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-2xl text-gray-700 mt-12 font-medium">
            Zero chaos. Zero politics. Maximum potential.
          </p>
        </div>
      </section>

      {/* Section 9: The Manifesto */}
      <section className="py-32 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-2xl leading-relaxed"
          >
            <p>We believe talent shouldn't be invisible.</p>
            <p>We believe careers shouldn't depend on one click.</p>
            <p>We believe every employee deserves a fair shot.</p>
            <p className="text-3xl font-bold text-pink-300 pt-6">
              We believe your best candidate already works here.
            </p>
            <p className="text-xl text-gray-300 pt-4">
              Let's build systems that help them shine.
            </p>
            <div className="pt-12">
              <p className="text-lg text-pink-300 font-semibold">
                — The Future of Internal Mobility
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Ready to unlock hidden potential?<br />
              <span className="gradient-text">Let's make your organization more dynamic.</span>
            </h2>

            <button
              onClick={() => onSelectMode('manager')}
              className="px-12 py-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 text-white text-xl font-bold rounded-xl shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all"
            >
              Unlock Hidden Talent
            </button>

            <p className="text-gray-600 mt-8 text-lg">
              Welcome to the <span className="font-semibold gradient-text">Internal Talent Renaissance</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer Easter Egg */}
      <footer className="py-8 px-4 bg-gray-50 border-t border-gray-200">
        <p className="text-center text-sm text-gray-500 italic">
          If you reached the bottom, you're already more proactive than your current internal mobility system.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
