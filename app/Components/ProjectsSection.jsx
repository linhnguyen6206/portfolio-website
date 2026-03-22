"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { fredoka } from "../layout";

const projectsData = [
  {
    id: 1,
    title: "Weekly Menu Guide",
    description: "A platform that generates recipes for the week based on user's input",
    image: "/images/Weekly-Planner.png",
    gitUrl: "https://github.com/linhnguyen6206/meal-planner",
    previewUrl: "https://meal-planner-psi-one.vercel.app/",
  },
  {
    id: 2,
    title: "Vim interface",
    description: "A Vim-like interface that allows users to edit, save, and use other functionalities in Vim",
    image: "/images/vim-system.png",
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Bryn Mawr College Institutional Data",
    description: "An interactive Tableau dashboard to analyze and visualize institutional data.",
    image: "/images/tableau.png",
    gitUrl: "",
    previewUrl: "https://public.tableau.com/app/profile/linh.nguyen8681/viz/AllStudentsVisualizations/Demographics",
  },
]
const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="pt-8 md:pt-10 lg:pt-12 pb-8">
      <h2 className={`${fredoka.className} text-center text-4xl font-bold text-[#FFA8CA] mt-4 mb-8 md:mb-12`}>
        My Projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.2 }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;