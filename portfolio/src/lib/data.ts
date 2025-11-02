import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Founder & Developer",
    location: "Mayor Chris Technologies",
    description:
      "Founded my own software development company. Building and developing software applications for clients using modern web technologies.",
    icon: React.createElement(FaReact),
    date: "Jan 2022 - Present",
  },
  {
    title: "Web Development Tutor",
    location: "Deximal Academy",
    description:
      "Taught web development fundamentals including HTML, CSS, and JavaScript to students. Mentored aspiring developers.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2022 - Jul 2025",
  },
  {
    title: "Laptop Engineer",
    location: "SLOT Company Nigeria",
    description:
      "Certified laptop engineer providing technical support services. Diagnosed and repaired hardware/software issues.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2021 - 2022",
  },
  {
    title: "Computer Science Student",
    location: "Michael Okpara University of Agriculture, Umudike",
    description:
      "Currently pursuing Bachelor of Science in Computer Science. Expected graduation 2026.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Artificial Farm",
    description:
      "Agricultural technology platform with integrated learning management system. Features course tracking, video lessons, and user progress monitoring.",
    tags: ["React", "JavaScript", "Supabase", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "HairCare",
    description:
      "AI-enabled hair care recommendation system that provides personalized hair care advice and product recommendations.",
    tags: ["TypeScript", "Next.js", "React", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Bank Queuing System (BQS)",
    description:
      "Analytics system for bank queue management. Tracks customer flow, wait times, and service efficiency metrics.",
    tags: ["TypeScript", "React", "Node.js"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "GitHub",
  "Tailwind",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "Python",
  "Vercel",
] as const;