import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "../../components/projects";
import { projectsData } from "../../data";
import RenderModel from "../../components/RenderModel";
import Sword from "../../components/models/Sword";
import Sword2 from "../../components/models/Sword2";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        priority
        sizes="100vw"
      />

      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-10 h-screen">
        <RenderModel>
          <Sword />
        </RenderModel>
      </div>
    </>
  );
}
