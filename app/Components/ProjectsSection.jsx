"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import { fredoka } from "../layout";

const projectsData = [
  {
    id: 1,
    title: "Book Finder",
    description: "A full-stack website allowing users to search for books and save their favorites",
    image: "/images/book-finder.png",
    gitUrl: "https://github.com/linhnguyen6206/book-finder",
    previewUrl: "https://github.com/linhnguyen6206/book-finder",
  },
  {
    id: 2,
    title: "My Google",
    description: "A shell demo of search engine. Will develop more functionalities",
    image: "/images/my-google.png",
    gitUrl: "https://github.com/linhnguyen6206/my-google",
    previewUrl: "https://my-google-hazel.vercel.app/",
  },
  {
    id: 3,
    title: "Restaurant Personal Record",
    description: "A platform that allows users to search for nearby restaurants and rank their selections based on their experience",
    image: "/images/image.png",
    gitUrl: "https://github.com/linhnguyen6206/restaurant-record",
    previewUrl: "/"

  },
  
  {
    id: 4,
    title: "Image Processor",
    description: "An algorithm that allows users to modify their images and received the modified version in .ppm format",
    image: "/images/demo.png",
    gitUrl: "https://github.com/linhnguyen6206/image-processor",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Vim Interface",
    description: "A Vim-like interface that allows users to edit, save, and use other functionalities in Vim.",
    image: "/images/vim-system.png",
    gitUrl: "",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Personal Meal Planner",
    description: "A platform that aims to prevent student decision fatigue and reduce food waste.",
    image: "/images/Weekly-Planner.png",
    gitUrl: "https://github.com/linhnguyen6206/meal-planner",
    previewUrl: "https://meal-planner-psi-one.vercel.app/",
  }
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