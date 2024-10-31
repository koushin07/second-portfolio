"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Code,
  Database,
  Server,
  Wrench,
  Pen,
  ChevronUp,
  Download,
  Github,
} from "lucide-react";
import anime from "animejs";
import { LoadingAnimation } from "@/components/loadingAnimation";
import { skill } from "./_model/skills";
import SkillList from "@/components/skillList";
import ProjectList from "@/components/projectList";
import { Project } from "./_model/projects";



export default function Component() {
  const [activeSection, setActiveSection] = useState("intro");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRefs = {
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };
  const introRef = useRef<HTMLDivElement>(null);

  const skills: skill[] = [
    {
      name: "QA & Testing",
      icon: Wrench,
      skillSet: [
        { name: "Manual Testing" },
        { name: "Automation Testing" },
        { name: "Jira" },
        { name: "Github" },
        { name: "Junit" },
        { name: "Panaya" },
        { name: "Cycle labs" },
      ]
    },
    {
      name: "Programming Languages",
      icon: Code,
      skillSet: [
        { name: "PHP" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: ".NET" },
        
      ]
    },
    {
      name: "Databases & Servers",
      icon: Database,
      skillSet: [
        { name: "Database Management" },
        { name: "PGSQL" },
        { name: "SQL Server" },
        { name: "Oracle" },
        { name: "MySQL"},
        { name: "Ubuntu Server" },
      ]
    },
    {
      name: "Design & Frameworks",
      icon: Pen,
      skillSet: [
        { name: "Canva" },
        { name: "Laravel" },
        { name: "VueJS" },
        { name: "Angular" },
        { name: "Spring Boot" },
        { name: "ASP.NET Core" },
        { name: "TailwindCSS" },
      ]
    }
  ]

  const projects: Project[] = [
    {
      name: "ERIS: Equipment Resource Information System",
      description:
        "It provides information on the region's equipment resources, including their status, movement, and backtrack, allowing the RDRRMC Region 10 and local DRRM offices to monitor resources",
        technologies:['Laravel', 'PusherJS', 'InertiaJS', 'VueJS', 'TailwindCSS'],
      link: "https://github.com/koushin07/ERIS",
    },
    {
      name: "Date Me: Dating website",
      description:
        "Date Me offers users the opportunity to upload captivating profile images and engage in real-time chat, fostering meaningful connections in the online dating realm.",
        technologies:['ASP.NET','Angular', 'SignalR', 'Ngx-Bootstrap'],

      link: "https://date-me-three.vercel.app",
    },
    {
      name: "ReadMindMe: Social Media",
      description:
        "where faith meets expression. Share your beliefs, thoughts, and perspectives on our unique social platform. Whether you're religious or not",
        technologies:['ASP.NET','Angular', 'SignalR', 'PrimeNG', 'TailwindCSS'],

      link: "https://read-mind-me.vercel.app",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const currentSection = Object.keys(sectionRefs).find((section) => {
        const element =
          sectionRefs[section as keyof typeof sectionRefs].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          );
        }
        return false;
      });

      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    setTimeout(() => {
      animateIntro();
    }, 2400);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // ...
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "skills") {
              animateSkills();
            } else if (entry.target.id === "projects") {
              animateProjects();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRefs.projects.current) {
      observer.observe(sectionRefs.projects.current);
    }
    if (sectionRefs.skills.current) {
      //...
      observer.observe(sectionRefs.skills.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateIntro = () => {
    anime({
      targets: introRef.current?.querySelectorAll(
        "h1, p, .intro-line, .download-button"
      ),
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: "easeOutQuad",
      duration: 800,
    });
  };

  const animateSkills = () => {
    anime({
      targets: sectionRefs.skills.current?.querySelectorAll(".skill-category"),
      translateY: [50, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      easing: "easeOutQuad",
      duration: 600,
    });
  };

  const animateProjects = () => {
    anime({
      targets: sectionRefs.projects.current?.querySelectorAll(".project-item"),
      translateX: [-50, 0],
      opacity: [0, 1],
      delay: anime.stagger(200),
      easing: "easeOutQuad",
      duration: 800,
    });
  };

  const scrollToTop = () => {
    anime({
      targets: "html, body",
      scrollTop: 0,
      duration: 500,
      easing: "easeInOutQuad",
    });
  };
  const animateHover = (e: any) => {
    anime({
      targets: e.target,
      scale: 1.05,
      duration: 300,
      easing: "easeOutQuad",
    });
  };

  const animateHoverExit = (e: any) => {
    anime({
      targets: e.target,
      scale: 1,
      duration: 300,
      easing: "easeOutQuad",
    });
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f1eb] to-[#e7e4de] text-[#2c2c2c] font-sans">
      <LoadingAnimation />
      <header className="fixed top-0 left-0 w-full p-4 bg-[#f4f1eb] bg-opacity-90 backdrop-blur-sm z-10 shadow-sm">
        <nav>
          <ul className="flex justify-center space-x-8 text-sm">
            {Object.keys(sectionRefs).map((section) => (
              <li key={section}>
                <Link
                  href={`#${section}`}
                  className={`hover:text-[#4a4a4a] transition-colors duration-300 ${
                    activeSection === section
                      ? "font-bold border-b-2 border-[#4a4a4a]"
                      : ""
                  }`}
                  onMouseEnter={animateHover}
                  onMouseLeave={animateHoverExit}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="max-w-3xl mx-auto px-8 pt-24 pb-16">
        <section id="intro" className="mb-32 pt-16" ref={introRef}>
          <h1 className="intro-line text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Miko Cañares
          </h1>
          <p className="intro-line text-xl md:text-2xl lg:text-3xl font-light mb-8 leading-relaxed">
            <span className="font-normal">Full Stack Developer</span> building{" "}
            <span className="font-normal">intuitive</span> and{" "}
            <span className="font-normal">impactful</span> web applications.
          </p>
          <div className="w-16 h-1 bg-[#4a4a4a] intro-line mb-8"></div>
          <Button
            className="download-button bg-[#4a4a4a] text-white hover:bg-[#2c2c2c] transition-colors duration-300"
            onMouseEnter={animateHover}
            onMouseLeave={animateHoverExit}
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </section>

        <section id="experience" className="mb-32" ref={sectionRefs.experience}>
          <h2 className="text-3xl mb-6 font-light">Work Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-normal mb-2">QA Specialist</h3>
            <p className="text-gray-600 mb-4 font-light">
              Experienced in manual and automation testing, with a strong
              background in ensuring software quality and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-normal mb-2">
              Aspiring Web Developer & UX/UI Designer
            </h3>
            <p className="text-gray-600 mb-4 font-light">
              Passionate about creating user-friendly and visually appealing web
              experiences. Currently developing personal projects to build
              expertise in this field.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-32" ref={sectionRefs.skills}>
          <h2 className="text-3xl mb-6 font-light">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <SkillList skills={skill} key={skill.name}/>
          ))}
            
            
          </div>
        </section>

        <section id="projects" className="mb-32" ref={sectionRefs.projects}>
          <h2 className="text-3xl mb-6 font-light">Projects</h2>

          <div className="mb-12">
            <h3 className="text-2xl font-light mb-4">
              Web Development Projects
            </h3>
            <div className="space-y-8">
              {projects.map((project) => (
            <ProjectList project={project}/>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-4">
              Graphic Design Projects
            </h3>
            <p className="text-gray-600 mb-4 font-light">
              Explore my graphic design work, including brand identity designs
              and social media graphics.
            </p>
            <Link
              href="/gallery"
              className="text-[#4a4a4a] hover:text-[#2c2c2c] transition-colors duration-300 font-normal flex items-center"
              onMouseEnter={animateHover}
              onMouseLeave={animateHoverExit}
            >
              <Pen className="w-4 h-4 mr-1" />
              View Design Gallery
            </Link>
          </div>
        </section>

        <section id="contact" className="mb-32" ref={sectionRefs.contact}>
          <h2 className="text-3xl mb-6 font-light">Get in Touch</h2>
          <p className="mb-6 leading-relaxed">
            I'm thrilled to dive into web development and UX/UI design! With my
            QA background and a knack for creating delightful user experiences,
            let’s make something awesome together!
          </p>
          <Link
            href="mailto:your.email@example.com"
            className="inline-flex items-center space-x-2 text-[#4a4a4a] hover:text-[#2c2c2c] transition-colors duration-300"
            onMouseEnter={animateHover}
            onMouseLeave={animateHoverExit}
          >
            <span className="underline ">canaresmiko3@gmail.com</span>
          </Link>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-500 pb-8">
        <p>
          &copy; {new Date().getFullYear()} Miko Cañares. All rights reserved.
        </p>
      </footer>

      {showScrollTop && (
        <div
          className="fixed bottom-4 right-4 bg-[#4a4a4a] text-white p-3 rounded-full cursor-pointer hover:bg-[#2c2c2c] transition-colors duration-300"
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}
