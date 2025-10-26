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
        alt="background.image"
        className="w-full h-full object-cover fixed top-0 left-0 object-center opacity-80 
        "
        loader={lazy}
      />
      <ProjectList projects={projectsData} />
      <div className="flex items-center justify-center fixed top-20 -left-10 h-screen  ">
        <RenderModel>
          <Sword />
        </RenderModel>
      </div>
    </>
  );
}
