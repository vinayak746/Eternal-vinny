import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "../components/projects";
import { projectsData } from "../data";
import RenderModel from "../components/RenderModel";
import ShadowSlave from "../components/models/ShadowSlave";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background.image"
        fill
        className="w-full h-full object-cover object-center opacity-80 absolute "
      />
      <ProjectList projects={projectsData} />

      <RenderModel>
        <ShadowSlave />
      </RenderModel>
    </main>
  );
}
