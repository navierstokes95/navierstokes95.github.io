
import React, { useState, useEffect, useMemo } from 'react';
import {
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  Download,
  GraduationCap,
  Briefcase,
  Code2,
  Layers,
  Cpu,
  Award,
  BookOpen,
  Globe,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react';
import {
  PERSONAL_INFO,
  EXPERIENCES,
  PROJECTS,
  SKILLS,
  PUBLICATIONS,
  TRAININGS
} from './data';
import { ProjectItem } from './types';

// Helper to decode obfuscated personal data
const decodeSafeData = (str: string) => {
  try {
    return atob(str);
  } catch (e) {
    return "Data not available";
  }
};

const Navbar = ({ onNavigate }: { onNavigate: (href: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reordered links based on user request
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Portfolios', href: '#portfolios' },
    { name: 'Recognition', href: '#recognition' },
    { name: 'Publications', href: '#publications' },
    { name: 'Education', href: '#education' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button onClick={(e) => handleLinkClick(e as any, '#about')} className="text-2xl font-bold tracking-tighter text-blue-600 outline-none hover:opacity-80 transition-opacity">ARIF AHMED.</button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 block px-3 py-4 text-base font-medium border-b border-gray-50"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-blue-600 hover:text-blue-700 block px-3 py-4 text-base font-bold"
            >
              Contact Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHeading = ({ children, subtitle, icon: Icon }: { children?: React.ReactNode, subtitle?: string, icon?: any }) => (
  <div className="mb-12">
    <div className="flex items-center gap-2 text-blue-600 mb-2">
      {Icon && <Icon size={20} className="mb-1" />}
      <span className="text-xs font-bold uppercase tracking-widest">{subtitle}</span>
    </div>
    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{children}</h2>
    <div className="h-1.5 w-20 bg-blue-600 mt-4 rounded-full"></div>
  </div>
);

const ProjectDetail = ({ project, onBack }: { project: ProjectItem, onBack: () => void }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold mb-8 transition-colors group"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            {project.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="aspect-video w-full rounded-3xl overflow-hidden shadow-2xl mb-12 bg-gray-100">
          <img
            src={project.image || `https://picsum.photos/seed/${project.title}/1200/800`}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
          <p className="mb-8">{project.fullDescription || project.description}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Impact & Approach</h2>
          <div className="space-y-4 mb-8">
            {(project.impact || `This project involved the integration of modern engineering principles to solve industrial bottlenecks. By leveraging ${project.tags.join(', ')}, we were able to significantly enhance efficiency and reliability.`).split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Objectives</h3>
            <ul className="space-y-3">
              {(project.objectives || [
                "Optimization of manufacturing processes using advanced simulations.",
                "Implementation of IoT architectures for real-time monitoring and control.",
                "Iterative prototyping using additive manufacturing technologies."
              ]).map((objective, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2.5 shrink-0"></div>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2">
              <Layers size={20} />
              View Full Documentation
            </button>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
              >
                <Globe size={20} />
                Live Demo / Reference
              </a>
            ) : (
              <button className="flex-1 px-8 py-4 bg-white text-gray-900 font-bold rounded-xl border border-gray-200 shadow-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                <Globe size={20} />
                Live Demo / Reference
              </button>
            )}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-semibold transition-colors group"
          >
            <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
        </div>
      </div>
    </div>
  );
}

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');
  const [formLoadTime] = useState(Date.now());

  const categories = useMemo(() => ["All", "Automation and IIoT", "Industrial Design", "Research"], []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic bot detection: was the form submitted too fast? (less than 3 seconds)
    const timeToSubmit = Date.now() - formLoadTime;
    if (timeToSubmit < 3000) {
      console.warn("Fast submission detected - likely bot");
      setFormStatus('error');
      setFormMessage('Please take a moment to review your message before sending.');
      return;
    }

    setFormStatus('sending');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "5613c276-0d16-4394-a5f4-630d3a7eff14";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Message from ${formData.name} via Portfolio`,
          from_name: "Portfolio Contact Form",
          to_email: "arifahmed.me14@gmail.com",
          botcheck: (e.target as any).botcheck?.checked || false,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormStatus('success');
        setFormMessage('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setFormMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Failed to send message. Please check your connection.');
    }
  };

  const emailAddress = useMemo(() => decodeSafeData(PERSONAL_INFO.email), []);
  const phoneNumber = useMemo(() => decodeSafeData(PERSONAL_INFO.phone), []);

  const handleDownloadCV = () => {
    window.open("https://1drv.ms/b/c/931299010fefeb3d/EdunFLUWhj5EvRVwC3WkFDsBpGbtDqkbsyHyCmK3P4l_VA?e=IHgdBd", "_blank");
  };

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleNavigation = (href: string) => {
    if (selectedProject) {
      setSelectedProject(null);
    }

    setTimeout(() => {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else if (href === '#about' || href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 10);
  };

  if (selectedProject) {
    return (
      <div className="selection:bg-blue-100 selection:text-blue-700">
        <Navbar onNavigate={handleNavigation} />
        <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
        <footer className="py-12 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl font-black text-gray-900 mb-4 tracking-tighter">ARIF AHMED.</p>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. <br />
              Mechanical Engineer | R&D Specialist
            </p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 selection:bg-blue-100 selection:text-blue-700">
      <Navbar onNavigate={handleNavigation} />

      {/* Hero Section */}
      <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid opacity-30 -z-10"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100">
                Industrial Designer | IIOT and Automation Engineer
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tighter mb-6">
                Assalamu Alaikum,<br />
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Arif Ahmed.</span>
              </h1>

              <div className="prose prose-lg text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                <p className="font-light text-xl mb-4">
                  Welcome to my portfolio! I'm a Mechanical Engineering graduate from <strong>Bangladesh University of Engineering and Technology (BUET)</strong>.
                </p>
                <p className="text-base mb-4">
                  With over <strong>5 years of professional experience</strong> in Industrial Design, Precision Manufacturing, and Industrial Automation, I specialize in solving complex manufacturing challenges.
                </p>
                <p className="text-base mb-6">
                  My R&D work focuses on leveraging technologies like <strong>Predictive Maintenance, Additive Manufacturing, IoT, Machine Learning, and Mechatronics</strong> to drive innovation in SMEs. I also serve as a TVET instructor.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
                <button
                  onClick={() => handleNavigation('#projects')}
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:bg-black transition-all transform hover:-translate-y-1"
                >
                  Explore Work
                </button>
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-6 text-gray-500">
                <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="hover:text-blue-600 transition-colors"><Linkedin size={24} /></a>
                <a href="https://github.com/navierstokes95/" target="_blank" className="hover:text-gray-900 transition-colors"><Github size={24} /></a>
                <button onClick={handleEmailClick} className="hover:text-red-500 transition-colors"><Mail size={24} /></button>
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <MapPin size={16} />
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            <div className="lg:w-2/5 relative">
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
                <div className="absolute -inset-4 border-2 border-dashed border-gray-200 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute -inset-8 border-2 border-dashed border-blue-100 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white p-4 rotate-3 transform hover:rotate-0 transition-all duration-500 group">
                  <img
                    src={(PERSONAL_INFO as any).profileImage || `https://picsum.photos/seed/${PERSONAL_INFO.name}/800/800`}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all"></div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-bold text-gray-800">Open for Collaborations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Timeline" icon={Briefcase}>Professional Experience</SectionHeading>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                <div className="md:grid md:grid-cols-4 md:gap-12">
                  <div className="md:text-right mb-4 md:mb-0">
                    <span className="text-blue-600 font-mono font-bold text-sm tracking-widest">{exp.period}</span>
                    <p className="text-gray-400 text-xs mt-1 font-medium">{exp.location}</p>
                  </div>

                  <div className="md:col-span-3 relative pb-12 last:pb-0">
                    {idx !== EXPERIENCES.length - 1 && (
                      <div className="absolute left-[-21px] md:left-[-25px] top-6 bottom-0 w-0.5 bg-gray-100"></div>
                    )}
                    <div className="absolute left-[-25px] md:left-[-30px] top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100"></div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">{exp.company}</h4>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((res, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                          <ChevronRight size={18} className="text-blue-500 shrink-0 mt-1" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Expertise" icon={Cpu}>Technical Proficiency</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {idx === 0 ? <Code2 /> : idx === 1 ? <Layers /> : idx === 2 ? <Globe /> : <Cpu />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-md border border-gray-100 group-hover:border-blue-100 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Portfolio" icon={Layers}>Selected Work</SectionHeading>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all border ${activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                  : 'bg-white text-gray-500 border-gray-200 hover:border-blue-300 hover:text-blue-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
            {filteredProjects.map((project, idx) => (
              <div key={project.title} className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in zoom-in duration-300">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  <img
                    src={project.image || `https://picsum.photos/seed/${project.title}/600/400`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/10 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-wider border border-white/20">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.tags.slice(0, 2).map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-sm font-bold text-blue-600 group-hover:translate-x-1 transition-transform cursor-pointer outline-none"
                  >
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Download Section */}
      <section id="portfolios" className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Deep Dive</span>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2 tracking-tight">Presentation Portfolios</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto font-medium">
              Access my comprehensive technical portfolios for specific engineering domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Automation & IIoT", icon: Cpu, link: "https://docs.google.com/presentation/d/1McFMMW7uu4Vuu5cweq6dFg3IsjsdJABu3mq3INuxM1s/present?slide=id.gcb9a0b074_1_0" },
              { title: "Industrial Design", icon: Layers, link: "https://docs.google.com/presentation/d/1hnn8vPOsdmgnEJEJj1w82Ii4WHbNjrfaPbo6q4C4NwY/present?slide=id.p" },
              { title: "Research & Development", icon: Briefcase, link: "https://docs.google.com/presentation/d/1McFMMW7uu4Vuu5cweq6dFg3IsjsdJABu3mq3INuxM1s/present?slide=id.gcb9a0b074_1_0" }
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:rotate-6">
                  <item.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                  View Portfolio <ExternalLink size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section id="recognition" className="py-24 bg-gray-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 text-blue-500/10 rotate-12 -z-0">
          <Award size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Recognition</span>
            <h2 className="text-4xl font-extrabold mt-2 tracking-tight">Trainings & Fellowships</h2>
            <div className="h-1.5 w-20 bg-blue-500 mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRAININGS.map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="px-3 py-1 bg-blue-500 text-[10px] font-black rounded-full uppercase tracking-tighter">
                    {item.period}
                  </div>
                  <Award className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-blue-400 font-medium text-sm mb-4">{item.organization}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading subtitle="Research" icon={BookOpen}>Academic Publications</SectionHeading>

          <div className="space-y-8">
            {PUBLICATIONS.map((pub, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="text-3xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">
                  0{idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    "{pub.title.toUpperCase()}"
                  </h3>
                  <p className="text-gray-500 text-sm mb-2 italic">{pub.authors}</p>
                  <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                    <span>{pub.conference}, {pub.year}</span>
                    <ExternalLink size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading subtitle="Foundation" icon={GraduationCap}>Education</SectionHeading>

          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-gray-100 relative overflow-hidden inline-block w-full">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-50 rounded-full blur-2xl opacity-50"></div>

            <h3 className="text-3xl font-black text-gray-900 mb-2">{PERSONAL_INFO.education.degree}</h3>
            <p className="text-xl text-blue-600 font-bold mb-6">{PERSONAL_INFO.education.institution}</p>

            <div className="flex flex-wrap justify-center gap-6 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <Briefcase size={18} />
                {PERSONAL_INFO.education.period}
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                {PERSONAL_INFO.education.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32"></div>

            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  Let's engineer something <br />great together.
                </h2>
                <p className="text-blue-100 text-lg mb-10 max-w-md">
                  I'm open to discussing new R&D projects, automation challenges, or technical leadership opportunities.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Mail />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase font-bold">Email</p>
                      <button onClick={handleEmailClick} className="text-lg font-semibold hover:underline outline-none text-left">{emailAddress}</button>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Phone />
                    </div>
                    <div>
                      <p className="text-xs text-blue-200 uppercase font-bold">Phone</p>
                      <p className="text-lg font-semibold">{phoneNumber}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot field for spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Project Message</label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition-all h-32"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                      <CheckCircle2 size={20} />
                      <span className="text-sm font-medium">{formMessage}</span>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-50 text-red-700 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                      <AlertCircle size={20} />
                      <span className="text-sm font-medium">{formMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`w-full py-4 text-white font-bold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 ${formStatus === 'sending' ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                      }`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-black text-gray-900 mb-4 tracking-tighter">ARIF AHMED.</p>
          <div className="flex justify-center gap-6 mb-8">
            <a href={`https://linkedin.com/in/${PERSONAL_INFO.linkedin}`} target="_blank" className="text-gray-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={20} /></a>
            <button onClick={handleEmailClick} className="text-gray-400 hover:text-red-500 transition-colors"><Mail size={20} /></button>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. <br />
            Mechanical Engineer | R&D Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
