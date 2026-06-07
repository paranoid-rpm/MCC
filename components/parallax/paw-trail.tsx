import Image from "next/image";
import { assets } from "@/lib/assets";

export function PawTrail() {
  return (
    <div className="pointer-events-none absolute bottom-[12%] left-[12%] hidden w-56 rotate-[-15deg] gap-5 opacity-70 md:grid">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image
          key={index}
          src={assets.logoIcon}
          alt=""
          width={24}
          height={24}
          className="justify-self-end opacity-70"
          style={{ transform: `translateX(${index % 2 ? -28 : 10}px)` }}
        />
      ))}
    </div>
  );
}
