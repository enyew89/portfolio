"use client";

import { useState, useEffect, useRef } from "react";
import { skillCategories } from "../../lib/data";
import {
  SiReact, SiJavascript, SiHtml5, SiCss, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiFlask,
  SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiDocker
} from "react-icons/si";
import { TbApi, TbSql } from "react-icons/tb";
import { FaRobot } from "react-icons/fa";

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "react": return <SiReact className="w-full h-full text-[#61DAFB]" />;
    case "javascript": return <SiJavascript className="w-full h-full text-[#F7DF1E]" />;
    case "html": return <SiHtml5 className="w-full h-full text-[#E34F26]" />;
    case "css": return <SiCss className="w-full h-full text-[#1572B6]" />;
    case "tailwind css": return <SiTailwindcss className="w-full h-full text-[#06B6D4]" />;

    case "node.js": return <SiNodedotjs className="w-full h-full text-[#339933]" />;
    case "express": return <SiExpress className="w-full h-full text-foreground" />;
    case "python": return <SiPython className="w-full h-full text-[#3776AB]" />;
    case "flask": return <SiFlask className="w-full h-full text-foreground" />;

    case "mongodb": return <SiMongodb className="w-full h-full text-[#47A248]" />;
    case "postgresql": return <SiPostgresql className="w-full h-full text-[#4169E1]" />;
    case "mysql": return <SiMysql className="w-full h-full text-[#4479A1]" />;
    case "redis": return <SiRedis className="w-full h-full text-[#DC382D]" />;
    case "sql": return <TbSql className="w-full h-full text-[#00758F]" />;

    case "git": return <SiGit className="w-full h-full text-[#F05032]" />;
    case "github": return <SiGithub className="w-full h-full text-foreground" />;
    case "docker": return <SiDocker className="w-full h-full text-[#2496ED]" />;
    case "rest apis": return <TbApi className="w-full h-full text-[#FF5722]" />;
    case "ai": return <FaRobot className="w-full h-full text-[#10A37F]" />;

    default: return <div className="w-full h-full rounded-full bg-edge" />;
  }
};

const getBrandColor = (name: string) => {
  switch (name.toLowerCase()) {
    case "react": return "#61DAFB";
    case "javascript": return "#F7DF1E";
    case "html": return "#E34F26";
    case "css": return "#1572B6";
    case "tailwind css": return "#06B6D4";
    case "node.js": return "#339933";
    case "express": return "#9ca3af";
    case "python": return "#3776AB";
    case "flask": return "#ffffff";
    case "mongodb": return "#47A248";
    case "postgresql": return "#4169E1";
    case "mysql": return "#4479A1";
    case "redis": return "#DC382D";
    case "sql": return "#00758F";
    case "git": return "#F05032";
    case "github": return "#ffffff";
    case "docker": return "#2496ED";
    case "rest apis": return "#FF5722";
    case "ai": return "#10A37F";
    default: return "#38bdf8";
  }
};

function SkillNode({
  skill,
  isAutoHighlighted,
  onHoverStateChange,
  index
}: {
  skill: { name: string; blurb: string };
  isAutoHighlighted: boolean;
  onHoverStateChange: (state: boolean) => void;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const color = getBrandColor(skill.name);

  // If the user manually hovers, it overrides the auto-highlight visually
  const isActive = isHovered || isAutoHighlighted;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverStateChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverStateChange(false);
  };

  return (
    <div
      className="relative w-full h-full animate-[spin_40s_linear_infinite_reverse] group z-20"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full" style={{ animation: `wiggle 3s ease-in-out infinite ${index * -0.5}s` }}>
        <div
          className="relative z-10 w-full h-full flex items-center justify-center transition-all duration-300 cursor-pointer"
          style={{
            transform: isActive ? 'scale(1.25)' : 'scale(1)',
            filter: isActive ? `drop-shadow(0 0 10px ${color})` : 'none'
          }}
        >
          {/* The Icon */}
          <div className={`w-full h-full transition-all duration-300 ${isHovered ? 'opacity-30 scale-90' : 'opacity-100 scale-100'}`}>
            {getIcon(skill.name)}
          </div>

          {/* The Text Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
            <span
              className="font-extrabold text-white text-sm sm:text-base text-center px-1 leading-tight z-10 whitespace-nowrap -rotate-45"
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 4px 8px rgba(0,0,0,0.9)'
              }}
            >
              {skill.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCategory = skillCategories[activeIndex];
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-spotlight progression logic
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setHighlightIndex((prev) => {
        if (prev >= activeCategory.skills.length - 1) {
          setActiveIndex((catPrev) => (catPrev + 1) % skillCategories.length);
          return 0;
        }
        return prev + 1;
      });
    }, 1200);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, activeIndex, activeCategory.skills.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    setHighlightIndex(0);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    setHighlightIndex(0);
  };

  const handleManualCategorySelect = (index: number) => {
    setActiveIndex(index);
    setHighlightIndex(0);
  };

  return (
    <section className="flex flex-col items-center justify-center py-16 sm:py-24 overflow-hidden">
      <div className="text-center mb-6 z-10 flex flex-col items-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Tech stack</h2>
        <p className="mt-4 text-sm text-muted">Hover a tool to see how I use it.</p>
      </div>

      {/* Orbit Container with Side Controls.
          The arrows live OUTSIDE a fixed-width stage so they never overlap
          the orbit — the stage reserves space for them on both sides. */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center px-4 sm:px-10 my-8 min-h-[380px] sm:min-h-[500px]">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="shrink-0 z-40 mr-9 sm:mr-14 lg:mr-20 p-3 sm:p-4 rounded-full border-2 border-edge bg-background text-foreground hover:bg-edge/50 hover:text-accent hover:border-accent/40 transition-all shadow-xl"
          aria-label="Previous category"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        {/* Orbit — flex-1 min-w-0 keeps it centered in the remaining space */}
        <div className="relative shrink-0 w-[230px] h-[230px] sm:w-[380px] sm:h-[380px] flex items-center justify-center">

          {/* Center Element (Category Info) */}
          <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-background border border-edge shadow-2xl transition-all duration-500">
            {activeCategory.icon === "monitor" && (
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
              </svg>
            )}
            {activeCategory.icon === "server" && (
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><path d="M6 6h.01M6 18h.01" />
              </svg>
            )}
            {activeCategory.icon === "database" && (
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            )}
            {activeCategory.icon === "wrench" && (
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            )}
            <h3 className="mt-1 sm:mt-2 font-semibold text-[10px] sm:text-sm text-center px-2">{activeCategory.title}</h3>
          </div>

          {/* Orbiting Skills */}
          <div key={activeIndex} className="absolute inset-0 animate-[spin_40s_linear_infinite]">
             {activeCategory.skills.map((skill, i) => {
                const angle = (360 / activeCategory.skills.length) * i;

                return (
                   <div
                     key={skill.name}
                     className="absolute inset-0 pointer-events-none"
                     style={{ transform: `rotate(${angle}deg)` }}
                   >
                      {/* Connecting Line with Arrow */}
                      <div className="absolute w-[1.5px] bg-edge/40 left-1/2 -translate-x-1/2 z-0"
                           style={{ top: '30px', bottom: 'calc(50% + 42px)' }}
                      >
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 border-l-[1.5px] border-t-[1.5px] border-edge/40 rotate-45 -mt-[1px]"></div>
                      </div>

                      {/* Positioned at the top edge of the circular container */}
                      <div
                        className="absolute left-1/2 top-0 -ml-5 -mt-5 sm:-ml-9 sm:-mt-9 w-10 h-10 sm:w-[72px] sm:h-[72px] pointer-events-auto"
                        style={{ transform: `rotate(-${angle}deg)` }}
                      >
                         <SkillNode
                            skill={skill}
                            isAutoHighlighted={i === highlightIndex && !isPaused}
                            onHoverStateChange={(hovered) => setIsPaused(hovered)}
                            index={i}
                         />
                      </div>
                   </div>
                );
             })}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="shrink-0 z-40 ml-9 sm:ml-14 lg:ml-20 p-3 sm:p-4 rounded-full border-2 border-edge bg-background text-foreground hover:bg-edge/50 hover:text-accent hover:border-accent/40 transition-all shadow-xl"
          aria-label="Next category"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

      </div>

      {/* Category dots */}
      <div className="flex items-center gap-3 mt-2 z-10">
        {skillCategories.map((cat, i) => (
          <button
            key={cat.title}
            onClick={() => handleManualCategorySelect(i)}
            aria-label={`Show ${cat.title}`}
            aria-current={i === activeIndex}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-8 bg-accent" : "w-2 bg-edge hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
