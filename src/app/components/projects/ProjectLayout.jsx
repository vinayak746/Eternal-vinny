"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <motion.div
      variants={item}
      className="w-full max-w-3xl" // keeps consistent card width
    >
      <Link
        href={demoLink}
        target="_blank"
        className="block w-full text-sm md:text-base flex items-center justify-between 
                   rounded-xl overflow-hidden p-4 md:p-6 custom-bg shadow-md 
                   hover:shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-start gap-3 overflow-hidden">
          <h2 className="text-foreground font-semibold truncate">{name}</h2>
          <p className="text-muted hidden sm:inline-block truncate">
            {description}
          </p>
        </div>

        <div className="flex-1 mx-2 border-b border-dashed border-muted" />

        <p className="text-muted sm:text-foreground text-right whitespace-nowrap">
          {new Date(date).toDateString()}
        </p>
      </Link>
    </motion.div>
  );
};

// 🧩 Use this wrapper when mapping all projects
export const ProjectList = ({ projects }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center gap-4 w-full"
    >
      {projects.map((p, i) => (
        <ProjectLayout key={i} {...p} />
      ))}
    </motion.div>
  );
};

export default ProjectLayout;
