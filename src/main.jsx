import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Git', 'GitHub', 'Responsive Web Design', 'UI/UX Design'];

function Icon({ name, size = 20 }) {
  const icons = {
    menu: '☰', close: '×', arrow: '→', code: '</>', school: '◇', folder: '↗', scan: '⌁', chart: '⌁', check: '✓', users: '♙', clock: '◷', x: '×', key: '⌘', mail: '✉', lock: '◉'
  };
  return <span aria-hidden="true" style={{ fontSize: size }}>{icons[name] || '•'}</span>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-copy">{text}</p>}</div>;
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Dashboard', 'Login'];
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={() => setOpen(false)}><span>R</span> RACHEL<span className="brand-dot">.</span></a>
    <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} size={25} /></button>
    <div className={`nav-links ${open ? 'open' : ''}`}>{links.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</div>
  </nav></header>;
}

function Hero() { return <section id="home" className="hero"><div className="hero-grid container">
  <div className="hero-copy"><p className="eyebrow intro">Hello, I&apos;m</p><h1>Rachel <span>Bayatan</span></h1><p className="hero-role">3rd Year BSIT Student <i /> Aspiring Software Developer</p><p className="lead">I&apos;m a BSIT student interested in software development, frontend development, and building practical technology solutions that make everyday work easier.</p><div className="hero-actions"><a className="button primary" href="#projects">Explore My Work <Icon name="arrow" /></a><a className="button secondary" href="#about">About Me</a></div></div>
  <div className="profile-wrap"><div className="profile-glow" /><div className="profile-photo" role="img" aria-label="Profile photo placeholder for Rachel Bayatan"><div className="photo-placeholder"><span>RB</span><small>Your photo here</small></div></div><div className="status-card"><span className="pulse" /> Available for learning &amp; collaboration</div></div>
</div><div className="scroll-cue"><span /> Scroll to explore</div></section>; }

function About() { return <section id="about" className="section about"><div className="container two-col"><SectionHeading eyebrow="01 / About me" title="Driven by curiosity, built for impact." /><div className="about-body reveal"><p>I&apos;m Rachel Bayatan, a third-year Bachelor of Science in Information Technology student at Nueva Vizcaya State University. I enjoy turning ideas into clear, approachable digital experiences.</p><p>As I continue learning, I&apos;m especially drawn to frontend development, thoughtful UI/UX design, and practical systems that solve real-world needs. I value clean work, continuous improvement, and the process behind every project.</p><div className="quick-facts"><div><Icon name="school" /><span><b>Student</b>Nueva Vizcaya State University</span></div><div><Icon name="code" /><span><b>Focus</b>Frontend &amp; software development</span></div></div></div></div></section>; }

function Education() { return <section id="education" className="section alt"><div className="container"><SectionHeading eyebrow="02 / Education" title="Building a solid foundation." text="Academic learning paired with a growing interest in creating useful, user-focused software." /><article className="education-card reveal"><div className="timeline-dot" /><div className="edu-icon"><Icon name="school" size={28} /></div><div><p className="eyebrow">Currently pursuing</p><h3>Bachelor of Science in Information Technology</h3><p>Nueva Vizcaya State University</p></div><span className="year-tag">3rd Year</span></article></div></section>; }

function Projects() { return <section id="projects" className="section"><div className="container"><SectionHeading eyebrow="03 / Selected project" title="Solving attendance, one scan at a time." text="An academic concept focused on making a familiar faculty workflow more efficient." /><article className="project-card reveal"><div className="project-visual"><div className="visual-top"><span>Attendance</span><span className="tiny-dot" /></div><div className="qr-art"><b>QR</b><span>⌘</span></div><div className="visual-lines"><i /><i /><i /></div></div><div className="project-info"><p className="eyebrow">Academic project / Frontend prototype</p><h3>QR Code-Based Attendance Monitoring System for Faculty</h3><p>A proposed academic system concept designed to help faculty manage attendance more efficiently using QR codes. This frontend prototype demonstrates a digital flow for recording and viewing attendance instead of relying on manual attendance sheets.</p><div className="tags">{['React.js', 'JavaScript', 'UI/UX Design', 'Responsive Design'].map(tag => <span key={tag}>{tag}</span>)}</div><a href="#dashboard" className="text-link">View the prototype <Icon name="arrow" /></a></div></article></div></section>; }

function Skills() { return <section id="skills" className="section alt"><div className="container"><SectionHeading eyebrow="04 / Skills & tools" title="Tools I&apos;m growing with." text="A focused toolkit for creating responsive, polished frontend experiences." /><div className="skills-grid">{skills.map((skill, index) => <div className="skill-card reveal" key={skill}><span className="skill-number">0{index + 1}</span><span>{skill}</span><b>↗</b></div>)}</div></div></section>; }

function Dashboard() { const stats = [['Total Students','42','users'],['Present','36','check'],['Late','3','clock'],['Absent','3','x']]; return <section id="dashboard" className="section dashboard-section"><div className="container"><SectionHeading eyebrow="05 / Frontend concept" title="Attendance dashboard preview." text="A visual prototype of the faculty dashboard—designed for clarity, at-a-glance insights, and an easy attendance flow." /><div className="dashboard reveal"><aside className="dash-sidebar"><b><span>Q</span> Attend</b><a className="active">▦ Overview</a><a>◷ Attendance</a><a>♙ Students</a><a>⚙ Settings</a></aside><div className="dash-main"><div className="dash-title"><div><p>Good morning, Faculty</p><h3>Dashboard Overview</h3></div><span>October 03, 2026</span></div><div className="stat-grid">{stats.map(([label, value, icon]) => <div className="stat" key={label}><div><small>{label}</small><strong>{value}</strong></div><span className={`stat-icon ${icon}`}><Icon name={icon} /></span></div>)}</div><div className="dash-bottom"><div className="attendance-list"><div className="card-title"><b>Recent Attendance</b><a>View all</a></div>{[['Althea Ramos','Present'],['James Dela Cruz','Present'],['Mika Santos','Late']].map(([n,s],i)=><div className="person" key={n}><span className="avatar">{n.split(' ').map(x=>x[0]).join('')}</span><span>{n}<small>Today, 8:{15+i*4} AM</small></span><em className={s.toLowerCase()}>{s}</em></div>)}</div><div className="scanner"><p className="card-title"><b>Scan QR Code</b></p><div className="scan-frame"><div className="scan-corners" /><Icon name="scan" size={44} /><span>Scanner preview</span></div><button>Open scanner</button></div></div></div></div><p className="mockup-note">Frontend-only mockup — no live attendance data, QR scanning, or authentication is connected.</p></div></section>; }

function Login() { return <section id="login" className="section login-section"><div className="container login-grid"><div className="login-copy"><p className="eyebrow">06 / Portal access</p><h2>A clean interface for a thoughtful system.</h2><p>This login screen is a frontend interface concept for the attendance system. No credentials are collected or processed.</p><div className="login-decoration"><span>R</span><i /><i /><i /></div></div><form className="login-card reveal" onSubmit={e => e.preventDefault()}><div><p className="eyebrow">Faculty portal</p><h3>Welcome back</h3><p>Sign in to access your attendance dashboard.</p></div><label>Email / Username<input type="text" placeholder="Enter your email or username" /></label><label>Password<input type="password" placeholder="Enter your password" /></label><button className="button primary full" type="submit">Login <Icon name="arrow" /></button><small>Frontend demo only — authentication is not enabled.</small></form></div></section>; }

function Footer() { return <footer><div className="container"><a className="brand" href="#home"><span>R</span> RACHEL<span className="brand-dot">.</span></a><p>Designed and built as a personal portfolio &amp; academic frontend concept.</p><a href="#home" className="back-top">Back to top ↑</a></div></footer>; }
function App(){return <><Navbar/><main><Hero/><About/><Education/><Projects/><Skills/><Dashboard/><Login/></main><Footer/></>}
createRoot(document.getElementById('root')).render(<App />);
