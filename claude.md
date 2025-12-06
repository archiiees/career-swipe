# CareerSwipe - Quantum Internal Mobility Platform

## Project Overview

CareerSwipe is a Tinder-style internal mobility platform that revolutionizes how organizations match employees with job opportunities. Instead of traditional job posting systems where employees must actively apply, CareerSwipe uses a **double opt-in matching system** where both employees and managers swipe on potential matches, creating meaningful connections when both parties express interest.

**Repository:** https://github.com/archiiees/career-swipe

## Core Concept: Quantum Superposition

The platform embraces a "quantum state" philosophy - every employee is simultaneously a potential candidate for every role until the moment of observation (the swipe). This eliminates the binary "applied/not applied" logic that often causes great internal talent to be overlooked.

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite 7.2.4
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion 12.23.24
- **Icons:** Lucide React
- **Effects:** Canvas Confetti
- **Production Server:** serve
- **Deployment:** Render.com (configured)

## Project Structure

```
quantum-mobility/
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx       # Marketing landing page with quantum animations
│   │   ├── EmployeeView.jsx      # Employee perspective - swipe on jobs
│   │   ├── ManagerView.jsx       # Manager perspective - swipe on candidates
│   │   ├── HRView.jsx            # HR dashboard for managing matches
│   │   ├── JobCard.jsx           # Swipeable job card component
│   │   ├── MatchBadge.jsx        # Match score display
│   │   ├── ProjectModal.jsx      # View trial project details
│   │   ├── CustomProjectModal.jsx # Assign custom projects to candidates
│   │   └── CardStack.jsx         # Card stacking animation (legacy)
│   ├── App.jsx                   # Main app component with routing
│   ├── mockData.js               # Sample employee and job data
│   ├── index.css                 # Global styles and Tailwind imports
│   └── main.jsx                  # App entry point
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS with Tailwind v4 plugin
└── claude.md                    # This documentation file
```

## Data Structure

### Employees
```javascript
{
  id: "E001",
  name: "Priya Sharma",
  current_role: "HR Specialist - Compensation & Benefits",
  department: "Human Resources",
  tenure: "3 years",
  skills: ["Compensation Design", "Benefits Administration", "Analytics"],
  aspirations: "I want to work on strategic HR partnerships...",
  has_swiped_right: {
    "JOB-001": true,  // Track which jobs employee swiped right on
    "JOB-002": false
  },
  job_matches: {
    "JOB-001": {
      match_score: 85,
      reasoning: "Strong compensation expertise...",
      gap: "Limited experience in...",
      micro_project: "Design a skills-based pay framework..."
    }
  }
}
```

### Jobs
```javascript
{
  id: "JOB-001",
  title: "HR Business Partner",
  department: "Human Resources",
  location: "Mumbai",
  manager_name: "Rajesh Kumar",
  description: "Lead strategic HR initiatives...",
  requirements: "5+ years of HR experience...",
  has_manager_swiped: {
    "E001": true,   // Track which employees manager swiped right on
    "E002": false
  }
}
```

### Matches
```javascript
// Stored in App.jsx state
[
  { employeeId: "E001", jobId: "JOB-001" },  // Mutual match
  { employeeId: "E003", jobId: "JOB-002" }
]
```

## Key Features

### 1. Three Distinct Views

#### Employee View (`EmployeeView.jsx`)
- **Employee selector dropdown** - Choose which employee's perspective to view
- **Swipeable job cards** - View job opportunities one at a time
- **Match scores** - AI-powered compatibility scores (60%+ shown)
- **AI reasoning** - Why this job matches the employee's profile
- **Gap analysis** - What skills need development
- **Trial projects** - See suggested micro-projects to prove fit
- **Swipe actions** - Left (pass) or Right (interested)
- **Undo functionality** - Reverse last swipe decision

#### Manager View (`ManagerView.jsx`)
- **Job selector dropdown** - Choose which role to hire for
- **Qualified candidates grid** - Shows all employees with 60%+ match score
- **Match status badges** - Visual indicators:
  - "Matched!" (green) - Both parties swiped right
  - "Waiting for them..." (yellow) - Manager swiped right, waiting for employee
  - "They swiped right!" (pink) - Employee interested, manager hasn't swiped
- **Swipe actions** - Pass or Express Interest
- **Locked features** - Chat and Project Assignment only available after mutual match
- **AI insights** - Match reasoning and development areas

#### HR View (`HRView.jsx`)
- **Matches dashboard** - Grid view of all mutual matches
- **Match details** - Employee → Job transition information
- **Action buttons:**
  - Schedule Meeting - Coordinate next steps
  - Send Message - Facilitate communication
  - Assign Project - Send trial project to candidate
- **Quick stats:**
  - Total active matches
  - Average match score
  - Completed moves (placeholder)

### 2. Double Opt-In Matching System

The matching logic is implemented in `App.jsx`:

```javascript
// When employee swipes right
handleEmployeeSwipe(employeeId, jobId, 'right') {
  // Update employee's swipe record
  // Check if manager also swiped right
  // If yes, create match
}

// When manager swipes right
handleManagerSwipe(employeeId, jobId, 'right') {
  // Update job's manager swipe record
  // Check if employee also swiped right
  // If yes, create match
}
```

Matches only appear when **both parties** swipe right, ensuring mutual interest.

### 3. AI-Powered Match Scores

Each employee-job pairing has:
- **Match Score** (0-100%) - Overall compatibility
- **Reasoning** - Why this is a good match
- **Gap Analysis** - What needs to be developed
- **Micro Project** - Trial assignment to prove capability

### 4. Landing Page

A compelling marketing page with:
- Quantum particle animations
- Hero section with value proposition
- Challenge section (formerly "The Villain")
- Philosophy explanation
- Feature highlights
- Stats and social proof
- How it works
- Manifesto
- Call-to-action

## Component Breakdown

### App.jsx
**Purpose:** Main application orchestrator

**State Management:**
- `viewMode` - Current view (null, 'employee', 'manager', 'hr')
- `employeeData` - Array of employees
- `jobData` - Array of job roles
- `matches` - Array of mutual matches

**Key Functions:**
- `handleEmployeeSwipe()` - Process employee swipe actions
- `handleManagerSwipe()` - Process manager swipe actions
- `isMutualMatch()` - Check if employee-job pair is matched
- `handleGoHome()` - Navigate back to landing page

### EmployeeView.jsx
**Props:** `employees`, `jobs`, `onSwipe`

**Key Features:**
- Employee selector dropdown
- Job card display with swipe gestures
- Swipe history with undo
- Action buttons (Pass, Undo, Like)
- "All Caught Up" state when no more jobs

### ManagerView.jsx
**Props:** `employees`, `jobs`, `onSwipe`, `isMutualMatch`

**Key Features:**
- Job selector dropdown
- Filtered candidates (60%+ match only)
- Status badges for match states
- Conditional actions based on match status
- Custom project assignment modal

### HRView.jsx
**Props:** `matches`, `employees`, `jobs`

**Key Features:**
- Match cards grid layout
- Employee → Job transition display
- Action buttons for facilitation
- Quick statistics
- Empty state for no matches

### JobCard.jsx
**Props:** `job`, `matchData`, `onSwipe`, `onViewProject`

**Key Features:**
- Drag-to-swipe gesture handling
- Compact, scrollable layout
- Match score badge
- Job details and requirements
- AI reasoning and gap analysis
- Trial project button

## Styling System

### Tailwind CSS v4
- Uses `@import "tailwindcss"` syntax
- PostCSS plugin: `@tailwindcss/postcss`

### Custom Utilities (index.css)
```css
.glass {
  @apply bg-white/40 backdrop-blur-md border border-white/20;
}

.gradient-text {
  @apply bg-gradient-to-r from-pink-500 to-rose-500
         bg-clip-text text-transparent;
}
```

### Design System
- **Primary gradient:** Pink 500 → Rose 500
- **Accent colors:** Purple, Amber, Green (for status)
- **Glassmorphism:** Frosted glass effects throughout
- **Animations:** Framer Motion for smooth transitions
- **Icons:** Lucide React (consistent 4x4 or 5x5 sizing)

## Scripts

```bash
# Development
npm run dev          # Start Vite dev server (localhost:5173)

# Production
npm run build        # Build for production
npm run preview      # Preview production build
npm start            # Serve production build on port 3000

# Code Quality
npm run lint         # Run ESLint
```

## Deployment

### Render.com Configuration
- **Build Command:** `npm run build`
- **Start Command:** `npm start`
- **Port:** 3000
- **Language:** Node

The project uses `serve` package to serve the production build from the `dist/` directory.

## Mock Data (mockData.js)

### Employees (5 total)
1. **Priya Sharma** - Compensation & Benefits Specialist
2. **Arjun Mehta** - Learning & Development Coordinator
3. **Kavya Iyer** - Talent Acquisition Specialist
4. **Rohan Desai** - Employee Relations Specialist
5. **Ananya Reddy** - HR Operations Analyst

### Job Roles (5 total)
1. **HR Business Partner** (Manager: Rajesh Kumar, Mumbai)
2. **Compensation & Benefits Manager** (Manager: Priya Singh, Bangalore)
3. **Talent Acquisition Lead** (Manager: Vikram Patel, Hyderabad)
4. **Employee Relations Manager** (Manager: Neha Gupta, Pune)
5. **People Analytics Manager** (Manager: Aditya Rao, Chennai)

All employees have match data for all jobs, with scores ranging from 55% to 92%.

## User Flows

### Employee Flow
1. Land on homepage → Click "Start Matching Talent" or "Employee" button
2. Select employee from dropdown
3. View first job card with match details
4. Swipe left (pass) or right (interested) or click buttons
5. Continue through all jobs or undo mistakes
6. See "All Caught Up" when done
7. View mutual matches in their profile (future feature)

### Manager Flow
1. Land on homepage → Click "Manager" button
2. Select job role from dropdown
3. View all qualified candidates (60%+ match)
4. Review candidate profiles and AI insights
5. Swipe right on promising candidates
6. See status update ("Waiting for them...")
7. When mutual match occurs, unlock chat and project assignment
8. Assign trial projects to matched candidates

### HR Flow
1. Land on homepage → Click "HR" button
2. View all mutual matches in grid
3. Review match details and compatibility scores
4. Take action:
   - Schedule meetings between parties
   - Send messages to facilitate discussion
   - Assign trial projects
5. Track progress toward completed moves

## Design Decisions

### Why Compact Job Cards?
- **Problem:** Original cards were too tall and covered swipe buttons
- **Solution:**
  - Max height 500px with flexbox layout
  - Scrollable content section
  - Reduced padding and font sizes
  - Container height 520px to ensure button visibility

### Why Double Opt-In?
- Ensures mutual interest before HR gets involved
- Prevents awkward situations where only one party is interested
- Reduces noise for HR to focus on serious matches
- Respects both employee and manager autonomy

### Why Quantum Metaphor?
- Makes the concept memorable and distinctive
- Explains the "always a candidate" philosophy elegantly
- Differentiates from traditional job boards
- Creates a compelling narrative for the landing page

### Why Tinder-Style Swiping?
- Familiar interaction pattern (low learning curve)
- Fun and engaging experience
- Makes decision-making quick and intuitive
- Reduces cognitive load compared to lengthy applications

## Key Technical Patterns

### State Management Pattern
```javascript
// Parent component (App.jsx) owns all state
// Child components receive data and callbacks via props
// Changes flow up through callbacks, data flows down through props

<EmployeeView
  employees={employeeData}
  jobs={jobData}
  onSwipe={handleEmployeeSwipe}  // Callback
/>
```

### Match Detection Pattern
```javascript
// Check both directions for double opt-in
const isMatch =
  employee.has_swiped_right[jobId] === true &&
  job.has_manager_swiped[employeeId] === true;
```

### Conditional Rendering Pattern
```javascript
// Three-way view routing
{viewMode === 'employee' ? (
  <EmployeeView />
) : viewMode === 'manager' ? (
  <ManagerView />
) : (
  <HRView />
)}
```

## Future Enhancements

### Phase 2 Features
- [ ] Real authentication system (currently demo mode)
- [ ] Backend API integration (currently client-side only)
- [ ] Database persistence (currently session-based)
- [ ] Real-time notifications
- [ ] Chat functionality
- [ ] Calendar integration for meetings
- [ ] Trial project tracking system
- [ ] Analytics dashboard
- [ ] Admin panel for HR to manage roles and employees

### Phase 3 Features
- [ ] AI-powered match score generation (currently mocked)
- [ ] Skills gap analysis with learning path recommendations
- [ ] Integration with HRIS systems (Workday, BambooHR, etc.)
- [ ] Mobile app (React Native)
- [ ] Multi-company support
- [ ] Advanced filtering and search
- [ ] Reporting and insights
- [ ] Custom workflows per organization

## Known Limitations

1. **No persistence:** Refreshing the page resets all swipes and matches
2. **Mock data only:** All employees and jobs are hardcoded
3. **No authentication:** Anyone can view any employee's perspective
4. **Client-side only:** No backend, no database
5. **Match scores are static:** Not dynamically calculated
6. **No actual notifications:** All alerts use browser `alert()`
7. **Single organization:** No multi-tenant support

## Development Notes

### Common Issues & Solutions

**Issue:** Swipe buttons hidden behind card
**Solution:** Reduced card max-height to 500px and made content scrollable

**Issue:** Tailwind CSS not working
**Solution:** Use `@tailwindcss/postcss` plugin for v4 compatibility

**Issue:** Match not appearing after both swipes
**Solution:** Check that both `has_swiped_right[jobId]` and `has_manager_swiped[employeeId]` are true

### Testing Checklist
- [ ] Employee can select different employees from dropdown
- [ ] Employee can swipe through all jobs
- [ ] Manager can select different jobs from dropdown
- [ ] Manager sees only 60%+ match candidates
- [ ] Matches appear when both parties swipe right
- [ ] Status badges update correctly
- [ ] HR view shows all matches
- [ ] Logo navigation works
- [ ] All three view toggles work
- [ ] Mobile responsive design works

## Git Workflow

```bash
# Main branch: main
# All commits include Claude Code attribution

# Standard commit message format:
git commit -m "Brief summary of changes

- Detailed change 1
- Detailed change 2
- Detailed change 3

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

## Environment Variables
Currently none required (all configuration is hardcoded).

For production deployment, consider adding:
- `VITE_API_URL` - Backend API endpoint
- `VITE_AUTH_DOMAIN` - Authentication provider
- `VITE_ANALYTICS_ID` - Analytics tracking

## Performance Considerations

- **Code splitting:** Not implemented (future: use React.lazy)
- **Image optimization:** Not applicable (no images currently)
- **Bundle size:** ~500KB (reasonable for current scope)
- **Animation performance:** Framer Motion handles GPU acceleration
- **Re-renders:** Minimal due to proper React patterns

## Accessibility

Current status:
- ✅ Semantic HTML
- ✅ Keyboard navigation (buttons, dropdowns)
- ✅ Color contrast (mostly compliant)
- ⚠️ Screen reader support (basic, needs improvement)
- ❌ Focus indicators (needs enhancement)
- ❌ ARIA labels (needs comprehensive addition)

## License
Not specified - add as needed for your organization.

## Contact & Support
- **Repository:** https://github.com/archiiees/career-swipe
- **Issues:** Use GitHub issues for bug reports
- **Documentation:** This file (claude.md)

---

**Last Updated:** 2025-11-28
**Version:** 1.0.0
**Status:** MVP Complete ✅
