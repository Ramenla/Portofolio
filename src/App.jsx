import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  ExternalLink,
  FileText,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react";
import heroPhoto from "../assets/img/Foto Basila.png";
import "../assets/style.css";

const cvUrl =
  "https://drive.google.com/file/d/1x9JYGMldl35yqcPy1Jrs9faoSCy339yZ/view?usp=sharing";

const navigation = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Tech Stack", "#tech-stack"],
  ["Projects", "#project"],
  ["Contact", "#site-footer"],
];

const stacks = [
  {
    category: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["Node.js", "Laravel", "React", "Tailwind CSS"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "AntiGravity", "Figma", "Vite", "Supabase"],
  },
];

const projects = [
  {
    id: 1,
    name: "Dashboard Project EMP",
    category: "FrontEnd",
    year: "2026",
    description:
      "An operational dashboard mockup designed based on real user requirements for PT Energi Mega Persada Tbk. The project focuses on translating user data needs into structured workflows and user-friendly interface designs to streamline project progress monitoring for management. Built as a frontend presentation layer/prototype without direct integration into corporate databases.",
    image: "/assets/img/DashboardEMP.png",
    tech: ["React", "Tailwind CSS"],
    demoUrl: "https://dashboard-emp-bay.vercel.app/",
    codeUrl: "https://github.com/Ramenla/DashboardEMP.git",
  },
  {
    id: 2,
    name: "Warung Online",
    category: "FrontEnd, Backend",
    year: "2026",
    description:
      "Warung Online is an all-in-one digital retail store and management web application designed for Toko Semoga Berkah. The platform enables customers to seamlessly browse items and place orders online, while equipping store owners with integrated backend tools for real-time inventory tracking, a built-in Point of Sale (POS) system, and automated cash flow management.",
    image: "/assets/img/warung-online.png",
    tech: ["React", "Tailwind CSS"],
    demoUrl: "https://toko-semoga-berkah.vercel.app/",
    codeUrl: "https://github.com/Ramenla/warung-online.git",
  },
];

function getInitialTheme() {
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
  } catch {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The selected theme still applies when browser storage is unavailable.
    }
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(
      ".section-header, .hero-text, .hero-visual, .about-bio, .about-info, .stack-category, .project-card, .contact-left, .contact-right",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("will-animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );

    animatedElements.forEach((element) => {
      element.classList.add("will-animate");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header id="site-header">
        <nav className="nav-inner container" aria-label="Main navigation">
          <a
            href="#home"
            className="nav-logo"
            onClick={() => setMenuOpen(false)}
          >
            <span className="logo-text">console.log('lana')</span>
            <span className="logo-cursor" aria-hidden="true" />
          </a>

          <div className="nav-right">
            <ul className={`nav-links${menuOpen ? " open" : ""}`}>
              {navigation.map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className={`nav-link${label === "Contact" ? " nav-link--cta" : ""}${activeSection === href.slice(1) ? " active" : ""}`}
                    aria-current={
                      activeSection === href.slice(1) ? "location" : undefined
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              className="theme-toggle"
              type="button"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              aria-pressed={isDark}
              title={isDark ? "Ganti ke Light Mode" : "Ganti ke Dark Mode"}
            >
              {isDark ? (
                <Sun aria-hidden="true" />
              ) : (
                <Moon aria-hidden="true" />
              )}
            </button>

            <button
              className="nav-toggle"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <X aria-hidden="true" />
              ) : (
                <Menu aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="home" className="section section--hero" aria-label="Hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-text">
                <h1 className="hero-headline">
                  <span className="hero-greeting">Hi, I&apos;m</span>
                  <br />
                  <span className="hero-name hero-name--primary">Lana</span>
                  <br />
                  <span className="hero-name hero-name--role">
                    Web Developer
                  </span>
                </h1>
                <p className="hero-tagline body-md">
                  Fresh graduate in Informatics Engineering, passionate about
                  building clean and functional web experiences.
                </p>
                <div className="hero-actions">
                  <a href="#project" className="btn btn--primary">
                    See My Work <ArrowRight aria-hidden="true" />
                  </a>
                  <a
                    href={cvUrl}
                    className="btn btn--ghost"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileText aria-hidden="true" /> Download CV
                  </a>
                </div>
              </div>

              <div className="hero-visual">
                <div className="hero-image-frame">
                  <div className="hero-image-inner">
                    <img
                      className="hero-photo"
                      src={heroPhoto}
                      alt="Muhammad Maulana Fauzan"
                      width="1086"
                      height="1448"
                    />
                  </div>
                  <div className="hero-image-label mono" aria-hidden="true">
                    Profile
                  </div>
                </div>
              </div>
            </div>
            <a className="scroll-indicator label-caps" href="#about">
              <ArrowDown className="scroll-icon" aria-hidden="true" /> Scroll
            </a>
          </div>
        </section>

        <section
          id="about"
          className="section section--about"
          aria-label="About me"
        >
          <div className="container">
            <div className="section-header">
              <p className="section-index label-caps mono">— 01</p>
              <h2 className="section-title">About Me</h2>
            </div>
            <div className="about-grid">
              <div className="about-bio">
                <p className="body-md about-body">
                  Lulusan S1 Teknik Informatika Universitas Telkom Purwokerto
                  tahun 2026 dengan ketertarikan mendalam pada Web Development.
                  Saya mahir dalam mengimplementasikan struktur, gaya, dan
                  interaktivitas dasar menggunakan HTML, CSS, dan JavaScript
                  murni. Sebagai pembelajar yang antusias, saya saat ini sedang
                  memperdalam eksplorasi teknologi terkini seperti React dan
                  Tailwind CSS untuk membangun aplikasi yang lebih kompleks.
                  Terbiasa mengelola data dan sistem, saya bersemangat untuk
                  membawa kemampuan analitis saya ke dalam peran web developer.
                </p>
              </div>
              <div className="about-info">
                <h3 className="about-details-title label-caps">
                  Personal Details
                </h3>
                <dl className="about-details">
                  <div className="detail-row">
                    <dt className="detail-label label-caps">Name</dt>
                    <dd className="detail-value">Muhammad Maulana Fauzan</dd>
                  </div>
                  <div className="detail-row">
                    <dt className="detail-label label-caps">Location</dt>
                    <dd className="detail-value">
                      Bekasi, West Java, Indonesia
                    </dd>
                  </div>
                  <div className="detail-row">
                    <dt className="detail-label label-caps">Education</dt>
                    <dd className="detail-value">
                      Informatics Engineering, Telkom University Purwokerto
                    </dd>
                  </div>
                  <div className="detail-row">
                    <dt className="detail-label label-caps">GPA</dt>
                    <dd className="detail-value">3.57 / 4.00</dd>
                  </div>
                  <div className="detail-row">
                    <dt className="detail-label label-caps">Availability</dt>
                    <dd className="detail-value">Open to opportunities</dd>
                  </div>
                  <div className="detail-row">
                    <dt className="detail-label label-caps">Focus</dt>
                    <dd className="detail-value">
                      Web Development, UI/UX Design
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        <section
          id="tech-stack"
          className="section section--techstack"
          aria-label="Tech stack"
        >
          <div className="container">
            <div className="section-header section-header--split techstack-header">
              <div>
                <p className="section-index label-caps mono">— 02</p>
                <h2 className="section-title">TechStack</h2>
              </div>
              <p className="techstack-intro body-md">
                Tools I use in web development.
              </p>
            </div>
            <div className="techstack-grid">
              {stacks.map(({ category, items }, index) => (
                <article className="stack-category" key={category}>
                  <span className="stack-index mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="stack-category-title label-caps">
                    {category}
                  </h3>
                  <ul className="stack-list" aria-label={`${category} skills`}>
                    {items.length > 0 ? (
                      items.map((item) => (
                        <li className="stack-item" key={item}>
                          <span className="stack-name">{item}</span>
                        </li>
                      ))
                    ) : (
                      <li className="stack-empty" aria-label="No items listed">
                        —
                      </li>
                    )}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="project"
          className="section section--project"
          aria-label="Projects"
        >
          <div className="container">
            <div className="section-header section-header--split">
              <div>
                <p className="section-index label-caps mono">— 03</p>
                <h2 className="section-title">Featured Projects</h2>
              </div>
              <a href="#site-footer" className="btn btn--ghost btn--sm">
                Get in touch <ArrowRight aria-hidden="true" />
              </a>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article
                  className="project-card"
                  key={project.id}
                  aria-label={project.name}
                >
                  <div className="project-card-inner">
                    <div className="project-image-wrap">
                      <div
                        className="project-image-placeholder"
                        aria-hidden="true"
                      >
                        <Monitor />
                      </div>
                      <img
                        className="project-cover"
                        src={project.image}
                        alt={project.name}
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="project-meta">
                      <div className="project-meta-top">
                        <span className="project-tag label-caps">
                          {project.category}
                        </span>
                        <span className="project-year label-caps mono">
                          {project.year}
                        </span>
                      </div>
                      <h3 className="project-title">{project.name}</h3>
                      <p className="project-desc body-md">
                        {project.description}
                      </p>
                      <div
                        className="project-tech-list"
                        aria-label="Technologies used"
                      >
                        {project.tech.map((technology) => (
                          <span className="tech-tag" key={technology}>
                            {technology}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a
                          href={project.demoUrl}
                          className="btn btn--ghost btn--sm project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink aria-hidden="true" /> Live Demo
                        </a>
                        <a
                          href={project.codeUrl}
                          className="btn btn--ghost btn--sm project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code2 aria-hidden="true" /> Code
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="site-footer" aria-label="Contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-left">
              <p className="section-index label-caps mono">— 04</p>
              <h2 className="contact-headline">
                Get
                <br />
                In Touch
              </h2>
              <p className="contact-sub body-md">
                I am available for freelance projects and full-time
                opportunities. Let&apos;s build something great together.
              </p>
            </div>
            <div className="contact-right">
              <form
                action="mailto:muhammadmaulanafauzan@gmail.com"
                method="post"
                encType="text/plain"
                className="contact-form"
              >
                <div className="contact-info-item">
                  <span className="label-caps">Name</span>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-info-item">
                  <span className="label-caps">Email</span>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required
                    className="contact-input"
                  />
                </div>
                <div className="contact-info-item">
                  <span className="label-caps">Message</span>
                  <textarea
                    name="Message"
                    placeholder="Message"
                    required
                    rows={5}
                    className="contact-input"
                  />
                </div>
                <button type="submit" className="btn btn--primary btn--lg">
                  Kirim <ArrowRight aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
