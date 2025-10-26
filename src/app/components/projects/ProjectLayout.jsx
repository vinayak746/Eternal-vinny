import Link from "next/link";
import React from "react";

const ProjectLayout = ({ name, description, date, demoLink }) => {
  return (
    <Link
      href={demoLink}
      className="flex items-center justify-between w-full relative rounded-lg overflow-hidden p-6 custom-bg
      cursor-pointer hover:scale-[1.02] transition-transform duration-200 ease-in-out"
      target="_blank"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="text-foreground">{name}</h2>
        <p className="text-muted">{description}</p>
      </div>
      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      <p className="text-foreground">{new Date(date).toDateString()}</p>
    </Link>
  );
};

export default ProjectLayout;
