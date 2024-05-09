"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";

export default function About() {
  const { ref, inView} = useInView({
    threshold: 0.75,
  });
  const { setActiveSection} = useActiveSectionContext();

useEffect(()=>{
  if (inView){
    setActiveSection("About");
  }
}, [inView, setActiveSection]);

 
  return (
   
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-[5rem]"
     initial={{opacity:0 , y:100}}
     animate={{ opacity:1 , y:0 }}
     transition={{ delay:0.175 }}
     id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I got into programming in <span className="font-medium">2021</span>, it
        was a dream come through, I pursued my{" "}
        <span className="italic">passion</span> in programming. I learn from
        making projects, some bug fixings and many more. The interesting part
        was <span className="font-bold">creating and teaching</span>, i enrolled
        some students who loved the skill and taught them. I am currently
        studying <span className="italic">computer science</span> in a
        prestigeous university. I use these programming languages listed in my
        intro, I am also familiar with other languages like{" "}
        <span className="underline">PHP </span> and <span className='underline'>Javascript</span>, and I know
        front-end full package. I am currently looking for a{" "}
        <span className="font-bold"> full time position</span> as a front-end
        developer.
      </p>
      <p>
        <span className="italic">Aside from coding</span>, I am a{" "}
        <span className="font-bold"> certified laptop engineer</span> from{" "}
        <span className="font-bold">SLOT Limited</span> I operate both on
        software and hardware issues on laptops. Also I enjoy playing{" "}
        <span className="italics">Music</span>, it speaks to my soul. And at
        work, I present it <span className="font-bold">professionally</span> and
        with a <span className="italic"> sparkling taste</span>.
      </p>
    </motion.section>
  );
}
