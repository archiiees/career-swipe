// Job Roles Available
export const jobRoles = [
  {
    id: "JOB-001",
    title: "HR Business Partner - Talent Development",
    department: "Human Resources",
    location: "Bangalore",
    manager_name: "Rajesh Kumar",
    description: "Lead talent development initiatives and create learning programs for high-potential employees.",
    requirements: "Experience in L&D, workshop facilitation, and stakeholder management.",
    has_manager_swiped: {}, // Track which employees the manager swiped right on: { "E001": true, "E002": false }
  },
  {
    id: "JOB-002",
    title: "Compensation & Benefits Manager",
    department: "Human Resources",
    location: "Mumbai",
    manager_name: "Sneha Patel",
    description: "Design and manage compensation structures, benefits programs, and ensure market competitiveness.",
    requirements: "Strong analytical skills, experience with salary benchmarking, and benefits administration.",
    has_manager_swiped: {},
  },
  {
    id: "JOB-003",
    title: "Talent Acquisition Lead",
    department: "Human Resources",
    location: "Hyderabad",
    manager_name: "Vikram Singh",
    description: "Build and scale the recruiting function, manage campus hiring, and improve candidate experience.",
    requirements: "Experience in full-cycle recruiting, ATS management, and employer branding.",
    has_manager_swiped: {},
  },
  {
    id: "JOB-004",
    title: "Employee Relations Manager",
    department: "Human Resources",
    location: "Pune",
    manager_name: "Meera Nair",
    description: "Handle employee grievances, conflict resolution, and policy implementation across the organization.",
    requirements: "Strong mediation skills, knowledge of labor laws, and experience in employee counseling.",
    has_manager_swiped: {},
  },
  {
    id: "JOB-005",
    title: "HR Analytics Manager",
    department: "Human Resources",
    location: "Bangalore",
    manager_name: "Amit Sharma",
    description: "Build data-driven HR insights, create dashboards, and drive decision-making through analytics.",
    requirements: "SQL, Python, data visualization, and experience with HRIS systems like Workday.",
    has_manager_swiped: {},
  },
];

// Employee Database
export const employees = [
  {
    id: "E001",
    name: "Priya Sharma",
    current_role: "HR Specialist - Compensation & Benefits",
    department: "Human Resources",
    tenure: "3 Years",
    location: "Bangalore",
    skills: ["Compensation Analysis", "Benefits Administration", "Excel", "Data Analysis"],
    aspirations: "I love working with people and want to move beyond spreadsheets into coaching and development.",
    has_swiped_right: {}, // Track which jobs this employee swiped right on: { "JOB-001": true, "JOB-002": false }
    // Match scores for different jobs
    job_matches: {
      "JOB-001": {
        match_score: 85,
        reasoning: "Strong match. Priya's compensation background gives her credibility, and her aspiration to 'move into coaching' aligns perfectly with talent development.",
        gap: "Lacks formal L&D certification and facilitation experience.",
        micro_project: "Design a 1-hour workshop on 'Career Planning for High Performers'."
      },
      "JOB-002": {
        match_score: 95,
        reasoning: "Perfect match. Priya is already doing this work and has deep expertise in compensation structures and benefits.",
        gap: "None. This is a natural career progression.",
        micro_project: "Propose a new variable pay structure for sales teams."
      },
      "JOB-003": {
        match_score: 45,
        reasoning: "Low match. Priya's background is in compensation, not recruiting. Lacks ATS and sourcing experience.",
        gap: "No recruiting experience. Different skill set required.",
        micro_project: "Shadow the TA team for a week and document the hiring process."
      },
      "JOB-004": {
        match_score: 60,
        reasoning: "Moderate match. Compensation work involves conflict (salary negotiations), but not full ER scope.",
        gap: "Lacks experience in policy enforcement and labor law knowledge.",
        micro_project: "Draft a conflict resolution framework for salary disputes."
      },
      "JOB-005": {
        match_score: 70,
        reasoning: "Good match. Priya has strong Excel and data analysis skills from compensation work.",
        gap: "Needs to learn SQL and Python. No experience building dashboards.",
        micro_project: "Analyze attrition data and present insights to leadership."
      },
    }
  },
  {
    id: "E002",
    name: "Arjun Mehta",
    current_role: "HR Coordinator - Talent Acquisition",
    department: "Human Resources",
    tenure: "2 Years",
    location: "Mumbai",
    skills: ["Recruiting", "Interviewing", "ATS Management", "Campus Hiring"],
    aspirations: "Recruiting is fine, but I want to focus on what happens AFTER someone joins. Retention is more interesting to me.",
    has_swiped_right: {},
    job_matches: {
      "JOB-001": {
        match_score: 72,
        reasoning: "Good match. Arjun's shift from acquisition to retention shows growth mindset. His interviewing skills translate well to coaching conversations.",
        gap: "No experience designing training programs or facilitating workshops.",
        micro_project: "Create an onboarding checklist for new HRBP hires (30/60/90 day plan)."
      },
      "JOB-002": {
        match_score: 35,
        reasoning: "Poor match. Arjun has no compensation or benefits experience. Completely different domain.",
        gap: "Lacks analytical skills and knowledge of salary structures.",
        micro_project: "Research market compensation for entry-level roles."
      },
      "JOB-003": {
        match_score: 90,
        reasoning: "Excellent match. Arjun is already doing recruiting work and wants to scale it as a lead.",
        gap: "Needs leadership experience and employer branding skills.",
        micro_project: "Propose a campus hiring strategy for tier-2 colleges."
      },
      "JOB-004": {
        match_score: 55,
        reasoning: "Moderate match. Recruiting involves some conflict (offer negotiations), but not full ER work.",
        gap: "No experience with grievances or labor law.",
        micro_project: "Shadow the ER team and document common employee complaints."
      },
      "JOB-005": {
        match_score: 40,
        reasoning: "Low match. Arjun has ATS experience but lacks SQL, Python, and analytics background.",
        gap: "Needs technical upskilling in data tools.",
        micro_project: "Learn SQL basics and query recruiting data from ATS."
      },
    }
  },
  {
    id: "E003",
    name: "Kavya Iyer",
    current_role: "HR Generalist - Employee Relations",
    department: "Human Resources",
    tenure: "4 Years",
    location: "Hyderabad",
    skills: ["Conflict Resolution", "Policy Writing", "Performance Management", "Employee Counseling"],
    aspirations: "I handle too many conflicts. I'd rather build programs that PREVENT issues through better development.",
    has_swiped_right: {},
    job_matches: {
      "JOB-001": {
        match_score: 90,
        reasoning: "Excellent match. Kavya's employee relations experience means she understands root causes. Her frustration with 'reactive' work shows she's ready for proactive development roles.",
        gap: "Strong on 1-on-1 counseling but needs to scale to group facilitation.",
        micro_project: "Draft a 'Difficult Conversations' training module outline with 3 role-play scenarios."
      },
      "JOB-002": {
        match_score: 30,
        reasoning: "Poor match. Kavya has no compensation or analytical background.",
        gap: "Completely different skill set. Lacks data analysis experience.",
        micro_project: "Research industry compensation trends for HR roles."
      },
      "JOB-003": {
        match_score: 50,
        reasoning: "Low-moderate match. ER involves interviewing skills but not full recruiting cycle.",
        gap: "No sourcing, ATS, or campus hiring experience.",
        micro_project: "Partner with TA team on behavioral interviewing best practices."
      },
      "JOB-004": {
        match_score: 95,
        reasoning: "Perfect match. Kavya is already doing ER work and excels at it. This is a natural promotion.",
        gap: "None. Ready for leadership role.",
        micro_project: "Audit current ER cases and propose a preventive policy framework."
      },
      "JOB-005": {
        match_score: 25,
        reasoning: "Very low match. Kavya's strength is people, not data. No technical background.",
        gap: "Lacks SQL, Python, and analytical skills.",
        micro_project: "Explore how HR analytics could reduce employee conflicts."
      },
    }
  },
  {
    id: "E004",
    name: "Rohan Desai",
    current_role: "HRIS Analyst",
    department: "Human Resources",
    tenure: "5 Years",
    location: "Pune",
    skills: ["Workday", "SQL", "Data Visualization", "Process Automation"],
    aspirations: "I'm a tech guy in HR. Not interested in soft skills training or people-facing roles.",
    has_swiped_right: {},
    job_matches: {
      "JOB-001": {
        match_score: 35,
        reasoning: "Poor cultural fit. While data skills could support L&D analytics, Rohan explicitly avoids people-facing work, which is core to this role.",
        gap: "Manager needs facilitation and coaching skills; candidate prefers technical work.",
        micro_project: "Build a dashboard to track training completion rates (technical only)."
      },
      "JOB-002": {
        match_score: 60,
        reasoning: "Moderate match. Compensation requires data analysis, which Rohan has. But he dislikes people-facing work.",
        gap: "No experience with salary benchmarking or benefits negotiations.",
        micro_project: "Build a compensation analysis dashboard using Workday data."
      },
      "JOB-003": {
        match_score: 30,
        reasoning: "Poor match. Recruiting is highly people-facing, which Rohan avoids.",
        gap: "No recruiting experience and dislikes candidate interaction.",
        micro_project: "Automate resume screening using Python (technical only)."
      },
      "JOB-004": {
        match_score: 20,
        reasoning: "Very poor match. ER is all about counseling and mediation—Rohan's nightmare.",
        gap: "Completely misaligned with his technical preferences.",
        micro_project: "Build a case management system for ER team."
      },
      "JOB-005": {
        match_score: 98,
        reasoning: "Perfect match. Rohan has all the technical skills (SQL, Workday, data viz) and wants to stay technical.",
        gap: "None. Ideal fit.",
        micro_project: "Create a predictive attrition model using historical data."
      },
    }
  },
  {
    id: "E005",
    name: "Ananya Reddy",
    current_role: "HR Manager - Diversity & Inclusion",
    department: "Human Resources",
    tenure: "6 Years",
    location: "Bangalore",
    skills: ["Program Design", "Workshop Facilitation", "ERG Management", "Public Speaking"],
    aspirations: "D&I is my passion, but I want to broaden my impact across all talent development areas.",
    has_swiped_right: {},
    job_matches: {
      "JOB-001": {
        match_score: 95,
        reasoning: "Perfect match. Ananya already runs workshops, designs programs, and presents to leadership. Her D&I lens would enrich talent development.",
        gap: "No gaps. Over-qualified if anything. May need assurance this isn't a lateral move.",
        micro_project: "Propose a 'Leadership Development for Diverse Talent' 6-month cohort program."
      },
      "JOB-002": {
        match_score: 40,
        reasoning: "Low match. Ananya's strength is program design, not data analysis or compensation structures.",
        gap: "Lacks analytical and benefits administration experience.",
        micro_project: "Research pay equity across demographics (ties to D&I)."
      },
      "JOB-003": {
        match_score: 65,
        reasoning: "Moderate match. D&I involves ERG management, which overlaps with employer branding.",
        gap: "No direct recruiting or ATS experience.",
        micro_project: "Design a diversity recruiting strategy for underrepresented groups."
      },
      "JOB-004": {
        match_score: 70,
        reasoning: "Good match. D&I work involves policy design and cultural issues, similar to ER.",
        gap: "Less experience with individual grievances and conflict mediation.",
        micro_project: "Draft an anti-discrimination policy framework."
      },
      "JOB-005": {
        match_score: 50,
        reasoning: "Moderate match. Ananya could use analytics to measure D&I impact, but lacks technical skills.",
        gap: "No SQL, Python, or data visualization experience.",
        micro_project: "Analyze diversity metrics and present insights to leadership."
      },
    }
  },
];
