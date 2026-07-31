const { useState, useEffect } = React;

// --- INLINE SVG ICON COMPONENTS ---
const Zap = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const BookOpen = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
);
const Award = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
);
const Clock = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 16 14"/></svg>
);
const AlertCircle = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
);
const Play = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
);
const Settings = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
);
const LogOut = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
);
const Share2 = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
);
const Github = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
);
const Compass = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>
);
const Layers = ({ className = "h-5 w-5 text-indigo-400" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
);
const Cpu = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>
);
const Shield = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);
const FileText = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
);

const CURRICULUM_DATA = [
  {
    id: 'phase-1',
    title: 'Phase 1: AI Fundamentals & Core Concepts',
    subtitle: 'Foundational AI Concepts, Paradigms & Evaluation Metrics',
    icon: Compass,
    badge: 'Foundational',
    color: 'from-blue-600 to-indigo-600',
    timeLimitMinutes: 30
  },
  {
    id: 'phase-2',
    title: 'Phase 2: Advanced AI & Deep Learning',
    subtitle: 'Transformers, LLM Optimizations & Vision-Language Systems',
    icon: Cpu,
    badge: 'Advanced Core',
    color: 'from-indigo-600 to-purple-600',
    timeLimitMinutes: 30
  },
  {
    id: 'phase-3',
    title: 'Phase 3: Specialized & Frontier AI Architecture',
    subtitle: 'RAG Systems, Model Context Protocol & Agentic Workflows',
    icon: Layers,
    badge: 'Frontier Tech',
    color: 'from-purple-600 to-pink-600',
    timeLimitMinutes: 30
  },
  {
    id: 'phase-4',
    title: 'Phase 4: Role-Based Specialization Paths',
    subtitle: 'Tailored Tracks for FDEs, MLOps, AIOps & Enterprise Architects',
    icon: Shield,
    badge: 'Specialized Paths',
    color: 'from-emerald-600 to-teal-600',
    timeLimitMinutes: 45
  }
];

function App() {
  const [authUser, setAuthUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('ai_portal_user');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return null;
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPhase, setSelectedPhase] = useState(CURRICULUM_DATA[0]);

  const [userProgress, setUserProgress] = useState(() => {
    try {
      const saved = localStorage.getItem('ai_portal_progress');
      if (saved) return JSON.parse(saved);
    } catch(e) {}
    return { completedTopics: [], passedExams: {} };
  });

  const [settings, setSettings] = useState({ timerSound: true, autoSubmitOnTimeout: true });

  // Auth States
  const [authMode, setAuthMode] = useState('login');
  const [authForm, setAuthForm] = useState({ name: '', email: '', password: '', role: 'Forward Deployed Engineer' });

  // Exam States
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(1800);
  const [examFinished, setExamFinished] = useState(false);
  const [examScore, setExamScore] = useState(null);

  // Firebase Setup Listener
  useEffect(() => {
    if (!window.FirebaseServices) return;
    const { auth, onAuthStateChanged } = window.FirebaseServices;

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Save User Profile to Cloud / Storage
  const saveUserProfileToCloud = async (profileData) => {
    setCurrentUser(profileData);
    localStorage.setItem('ai_portal_user', JSON.stringify(profileData));

    if (!authUser || !window.FirebaseServices) return;
    const { db, appId, doc, setDoc } = window.FirebaseServices;

    try {
      const profileDocRef = doc(db, 'artifacts', appId, 'users', authUser.uid, 'profile');
      await setDoc(profileDocRef, profileData, { merge: true });
    } catch (e) {
      console.error("Cloud Profile Save Failed:", e);
    }
  };

  // Save User Progress to Cloud / Storage
  const saveUserProgressToCloud = async (newProgress) => {
    setUserProgress(newProgress);
    localStorage.setItem('ai_portal_progress', JSON.stringify(newProgress));

    if (!authUser || !window.FirebaseServices) return;
    const { db, appId, doc, setDoc } = window.FirebaseServices;

    try {
      const progressDocRef = doc(db, 'artifacts', appId, 'users', authUser.uid, 'progress');
      await setDoc(progressDocRef, newProgress, { merge: true });
    } catch (e) {
      console.error("Cloud Progress Save Failed:", e);
    }
  };

  // Exam Timer Countdown
  useEffect(() => {
    let timer;
    if (activeTab === 'exam' && !examFinished && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            if (settings.autoSubmitOnTimeout) handleFinishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeTab, examFinished, timeRemaining, settings.autoSubmitOnTimeout]);

  // Auth Handler
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    const { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } = window.FirebaseServices || {};

    try {
      let userCred = null;
      if (authMode === 'register' && createUserWithEmailAndPassword) {
        userCred = await createUserWithEmailAndPassword(auth, authForm.email, authForm.password);
      } else if (signInWithEmailAndPassword) {
        userCred = await signInWithEmailAndPassword(auth, authForm.email, authForm.password);
      }

      const uid = userCred?.user?.uid || authUser?.uid || ('USR-' + Math.floor(1000 + Math.random() * 9000));
      const profileData = {
        uid: uid,
        name: authForm.name || authForm.email.split('@')[0] || 'Enterprise Learner',
        email: authForm.email,
        role: authForm.role || 'Forward Deployed Engineer',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authForm.name || authForm.email}`,
        joinedDate: new Date().toLocaleDateString()
      };

      await saveUserProfileToCloud(profileData);
      setAuthForm({ name: '', email: '', password: '', role: 'Forward Deployed Engineer' });
    } catch (err) {
      const profileData = {
        uid: 'LOCAL-' + Math.floor(1000 + Math.random() * 9000),
        name: authForm.name || authForm.email.split('@')[0] || 'Enterprise Learner',
        email: authForm.email || 'learner@enterprise.ai',
        role: authForm.role || 'Forward Deployed Engineer',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${authForm.name || 'AI'}`,
        joinedDate: new Date().toLocaleDateString()
      };
      await saveUserProfileToCloud(profileData);
    }
  };

  const handleOAuthLogin = async (providerName) => {
    const uid = authUser?.uid || ('USR-' + Math.floor(1000 + Math.random() * 9000));
    const user = {
      uid: uid,
      name: `${providerName} Enterprise Specialist`,
      email: `pro.${providerName.toLowerCase()}@enterprise-ai.com`,
      role: 'AI Enterprise Architect',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${providerName}`,
      joinedDate: new Date().toLocaleDateString()
    };
    await saveUserProfileToCloud(user);
  };

  // Exam Logic
  const handleStartExam = (phase) => {
    setSelectedPhase(phase);
    const questions = (window.QUESTION_BANK && window.QUESTION_BANK[phase.id]) || [];
    setActiveQuestions(questions);
    setCurrentQuestionIdx(0);
    setSelectedAnswers({});
    setTimeRemaining(phase.timeLimitMinutes * 60);
    setExamFinished(false);
    setActiveTab('exam');
  };

  const handleFinishExam = async () => {
    let correct = 0;
    activeQuestions.forEach((q, idx) => {
      if (selectedAnswers[idx] === q.answer) correct++;
    });
    const percentage = activeQuestions.length > 0 ? Math.round((correct / activeQuestions.length) * 100) : 0;
    setExamScore({ correct, total: activeQuestions.length, percentage });
    setExamFinished(true);

    if (percentage >= 70) {
      const certId = `CERT-${selectedPhase.id.toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
      const newProgress = {
        ...userProgress,
        passedExams: {
          ...userProgress.passedExams,
          [selectedPhase.id]: {
            score: percentage,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            certId: certId,
            phaseTitle: selectedPhase.title,
            userRole: currentUser?.role || 'AI Enterprise Specialist'
          }
        }
      };
      await saveUserProgressToCloud(newProgress);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // --- DEFAULT GATED LOGIN / SIGNUP VIEW ---
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center p-4">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
          <div className="text-center space-y-3">
            <div className="inline-flex h-12 w-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Zap className="h-6 w-6 text-indigo-400" />
              </div>
            </div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">iq9 Portal</h1>
            <p className="text-xs text-slate-400">Enterprise AI Assessment & Credentials Engine</p>
          </div>

          <div className="space-y-2">
            <button
              onClick={() => handleOAuthLogin('LinkedIn')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Share2 className="h-4 w-4" />
              <span>Authenticate with LinkedIn</span>
            </button>
            <button
              onClick={() => handleOAuthLogin('GitHub')}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-md"
            >
              <Github className="h-4 w-4 text-slate-300" />
              <span>Authenticate with GitHub</span>
            </button>
          </div>

          <div className="relative flex py-1 items-center">
            <div className="flex-grow border-t border-slate-800"></div>
            <span className="flex-shrink mx-3 text-[10px] text-slate-500 uppercase font-mono">Or Email Auth</span>
            <div className="flex-grow border-t border-slate-800"></div>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {authMode === 'register' && (
              <div>
                <label className="text-xs text-slate-400 block mb-1">Full Name</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Alex Mercer"
                  value={authForm.name}
                  onChange={(e) => setAuthForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                />
              </div>
            )}

            <div>
              <label className="text-xs text-slate-400 block mb-1">Corporate Email</label>
              <input 
                type="email"
                required
                placeholder="alex.m@company.com"
                value={authForm.email}
                onChange={(e) => setAuthForm(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="text-xs text-slate-400 block mb-1">Password</label>
              <input 
                type="password"
                required
                placeholder="••••••••"
                value={authForm.password}
                onChange={(e) => setAuthForm(prev => ({ ...prev, password: e.target.value }))}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            {authMode === 'register' && (
              <div>
                <label className="text-xs text-slate-400 block mb-1">Specialization Track</label>
                <select
                  value={authForm.role}
                  onChange={(e) => setAuthForm(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-indigo-500"
                >
                  <option>Forward Deployed Engineer</option>
                  <option>AIOps / MLOps Engineer</option>
                  <option>AI Enterprise Architect</option>
                  <option>AI Strategist & Product Leader</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-lg shadow-indigo-600/30"
            >
              {authMode === 'register' ? 'Create Enterprise Account' : 'Sign In'}
            </button>
          </form>

          <div className="text-center pt-2">
            <button 
              onClick={() => setAuthMode(authMode === 'register' ? 'login' : 'register')}
              className="text-xs text-indigo-400 hover:underline font-medium"
            >
              {authMode === 'register' ? 'Already registered? Sign In' : "Don't have an account? Register"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN PORTAL VIEW ---
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-4 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('dashboard')}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-indigo-500/20">
            <div className="h-full w-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <Zap className="h-5 w-5 text-indigo-400" />
            </div>
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent">
              iq9
            </span>
            <p className="text-xs text-slate-400 hidden sm:block">Exam Sets & Certification Portal</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-slate-950/60 p-1.5 rounded-xl border border-slate-800/80">
          {[
            { id: 'dashboard', label: 'Examination Sets', icon: BookOpen },
            { id: 'certifications', label: 'Certifications', icon: Award },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-slate-200">{currentUser.name}</p>
            <p className="text-[10px] text-indigo-400 font-mono">{currentUser.role}</p>
          </div>
          <button 
            onClick={() => {
              setCurrentUser(null);
              localStorage.removeItem('ai_portal_user');
            }}
            className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/10 text-rose-400 border border-slate-700 transition-all"
            title="Sign Out"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'dashboard' && (
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/80 to-slate-900 border border-indigo-500/20 p-6 sm:p-8 shadow-2xl">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Enterprise AI Examination Engine</h1>
              <p className="text-sm text-slate-300 mt-2">Test your operational competency across non-mathematical AI deployment, RAG systems, MLOps, and Agentic architecture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CURRICULUM_DATA.map((phase) => {
                const PhaseIcon = phase.icon;
                const passedCert = userProgress.passedExams[phase.id];

                return (
                  <div key={phase.id} className="bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 flex flex-col justify-between space-y-6 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${phase.color} text-white shadow-lg`}>
                          <PhaseIcon className="h-6 w-6" />
                        </div>
                        {passedCert && (
                          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                            Passed: {passedCert.score}%
                          </span>
                        )}
                      </div>

                      <h2 className="text-lg font-bold text-white">{phase.title}</h2>
                      <p className="text-xs text-slate-400 mt-1">{phase.subtitle}</p>

                      <div className="mt-6">
                        <button
                          onClick={() => handleStartExam(phase)}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md shadow-indigo-600/20"
                        >
                          <Play className="h-4 w-4" />
                          <span>Start Assessment Set ({phase.timeLimitMinutes} Mins)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === 'exam' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 flex items-center justify-between shadow-xl">
              <div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">{selectedPhase.title}</span>
                <h2 className="text-lg font-bold text-white mt-1">Question {currentQuestionIdx + 1} of {activeQuestions.length}</h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 px-4 py-2 rounded-xl font-mono text-sm font-bold bg-slate-950 border border-slate-800 text-indigo-300">
                  <Clock className="h-4 w-4" />
                  <span>{formatTime(timeRemaining)}</span>
                </div>
                {!examFinished && (
                  <button onClick={handleFinishExam} className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20">Submit Exam</button>
                )}
              </div>
            </div>

            {!examFinished ? (
              <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
                {activeQuestions[currentQuestionIdx] && (
                  <>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">Q{currentQuestionIdx + 1}: {activeQuestions[currentQuestionIdx].q}</h3>
                    <div className="space-y-3 pt-2">
                      {activeQuestions[currentQuestionIdx].options.map((opt, optIdx) => {
                        const isSelected = selectedAnswers[currentQuestionIdx] === optIdx;
                        return (
                          <button
                            key={optIdx}
                            onClick={() => setSelectedAnswers(prev => ({ ...prev, [currentQuestionIdx]: optIdx }))}
                            className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm transition-all flex items-start space-x-3 ${
                              isSelected ? 'bg-indigo-600/20 border-indigo-500 text-white font-medium shadow-md shadow-indigo-600/10' : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800/60'
                            }`}
                          >
                            <span className={`h-5 w-5 rounded-full border flex items-center justify-center text-[11px] font-bold flex-shrink-0 mt-0.5 ${isSelected ? 'border-indigo-400 bg-indigo-600 text-white' : 'border-slate-700 text-slate-400'}`}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1">{opt}</span>
                          </button>
                        );
                      })}
                    </div>

                    <div className="pt-6 border-t border-slate-800 flex items-center justify-between">
                      <button disabled={currentQuestionIdx === 0} onClick={() => setCurrentQuestionIdx(prev => prev - 1)} className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-semibold text-slate-300 transition-all">Previous</button>
                      <button disabled={currentQuestionIdx === activeQuestions.length - 1} onClick={() => setCurrentQuestionIdx(prev => prev + 1)} className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-bold text-white transition-all shadow-md shadow-indigo-600/20">Next Question</button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 text-center space-y-8 shadow-2xl">
                <div className={`inline-flex p-4 rounded-full ${examScore.percentage >= 70 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
                  {examScore.percentage >= 70 ? <Award className="h-12 w-12" /> : <AlertCircle className="h-12 w-12" />}
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{examScore.percentage >= 70 ? 'Assessment Passed!' : 'Assessment Retake Required'}</h2>
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Total Score</span>
                    <p className="text-2xl font-extrabold text-white mt-0.5">{examScore.percentage}%</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Correct</span>
                    <p className="text-2xl font-extrabold text-emerald-400 mt-0.5">{examScore.correct}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono">Passing Threshold</span>
                    <p className="text-2xl font-extrabold text-indigo-400 mt-0.5">70%</p>
                  </div>
                </div>

                <div className="text-left space-y-4 pt-8 border-t border-slate-800">
                  <h3 className="text-base font-bold text-white flex items-center space-x-2">
                    <FileText className="h-5 w-5 text-indigo-400" />
                    <span>Answer Rationales & Review</span>
                  </h3>
                  <div className="space-y-4">
                    {activeQuestions.map((q, idx) => {
                      const userAns = selectedAnswers[idx];
                      const isCorrect = userAns === q.answer;
                      return (
                        <div key={idx} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <span className="text-xs font-bold text-white">Q{idx + 1}: {q.q}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                          </div>
                          <p className="text-xs text-slate-400">Your Choice: <span className={isCorrect ? 'text-emerald-400 font-semibold' : 'text-rose-400 font-semibold'}>{userAns !== undefined ? q.options[userAns] : 'Not Answered'}</span></p>
                          {!isCorrect && <p className="text-xs text-emerald-400 font-medium">Correct Choice: {q.options[q.answer]}</p>}
                          <p className="text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800/80 italic">Rationale: {q.explanation}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <h1 className="text-2xl font-extrabold text-white flex items-center space-x-2">
              <Award className="h-6 w-6 text-amber-400" />
              <span>Verifiable Enterprise Certifications</span>
            </h1>

            {Object.keys(userProgress.passedExams).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(userProgress.passedExams).map(([certKey, certData]) => (
                  <div key={certKey} className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 rounded-3xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-500 via-indigo-500 to-amber-500"></div>
                    <h3 className="text-lg font-bold text-white">{certData.phaseTitle}</h3>
                    <div className="space-y-2 bg-slate-950/80 p-4 rounded-2xl border border-slate-800 text-xs font-mono">
                      <div className="flex justify-between text-slate-400"><span>Issued To:</span><span className="text-slate-200 font-bold">{currentUser?.name}</span></div>
                      <div className="flex justify-between text-slate-400"><span>Score:</span><span className="text-emerald-400 font-bold">{certData.score}%</span></div>
                      <div className="flex justify-between text-slate-400"><span>Certificate ID:</span><span className="text-amber-400 font-bold">{certData.certId}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
                <Award className="h-12 w-12 text-slate-600 mx-auto" />
                <h3 className="text-lg font-bold text-white">No Credentials Issued Yet</h3>
                <p className="text-xs text-slate-400">Complete any assessment module with score &ge; 70% to unlock digital credentials.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-extrabold text-white">Portal Settings</h1>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-xl">
              <div className="space-y-4">
                <label className="text-xs text-slate-400 block mb-1">Full Name</label>
                <input 
                  type="text" 
                  value={currentUser?.name || ''} 
                  onChange={(e) => {
                    const updated = { ...currentUser, name: e.target.value };
                    saveUserProfileToCloud(updated);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);