import Image from "next/image";
import dallE from "@/public/images/dall-e.webp";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-10">
      <h1 className="text-3xl font-bold text-white pb-2">Home</h1>

      <div className="">
        <Image
          className=""
          src={dallE}
          alt="Whale"
          width={300}
          height={300}
          priority
        />
      </div>
    </main>
  );
}
