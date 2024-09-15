import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="">
      {/* Left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="Ig logo"
            fill={true}
          />
        </div>
        <div className="cursor-pointer h-10 w-10 relative lg:hidden">
          <Image
            className="object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
            alt="Ig logo"
            fill={true}
          />
        </div>
        <h2>Right sides</h2>
      </div>

      {/* Middle */}
      {/* Right */}
    </div>
  );
}
