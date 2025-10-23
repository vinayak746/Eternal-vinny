import {
  Github,
  Home,
  Linkedin,
  NotebookIcon,
  Palette,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <NotebookIcon className="w-full h-auto" strokeWidth={1.5} />;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};
const NavButton = ({ x, y, label, link, icon, newTab }) => {
  return (
    <div
      className="absolute cursor-pointer z-50 pointer-events-all hover:pause "
      style={{
        transform: `translate(${x},${y})`,
      }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="text-foreground
        group rounded-full flex items-center justify-center
        bg-background/20 border border-accent/30 border-solid backdrop-blur-[6px]
        shadow-glass-inset
        hover:shadow-glass-sm
       
        
        "
        aria-label={label}
        name={label}
      >
        <span
          className="relative peer w-14 h-14 p-4 animate-spin-slow-reverse
       group-hover:text-accent group-hover:pause"
        >
          {getIcon(icon)}
        </span>
        <span className="absolute hidden peer-hover:block ">{label}</span>
      </Link>
    </div>
  );
};

export default NavButton;
