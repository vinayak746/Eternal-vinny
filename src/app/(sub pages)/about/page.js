import Image from "next/image";
import bg from "../../../../public/background/about.png";

import RenderModel from "../../components/RenderModel";
import Mask from "@/app/components/models/Mask";
import AboutDetails from "@/app/components/about";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background.image"
        className="w-full h-full object-cover fixed top-0 left-0 object-center opacity-80  "
      />

      <div className="w-full h-screen absolute top-1/2 -translate-y-1/2">
        <RenderModel>
          <Mask />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2 ">
          <h1 className="font-bold text-6xl text-accent">Vinayak Arora</h1>
          <p className="font-light text-foreground text-lg">
            Meet the developer behind this project.
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
