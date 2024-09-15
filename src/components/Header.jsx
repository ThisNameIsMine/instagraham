import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { Feed } from "./Feed";

export default function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto p-5 bg-white z-30">
        {/* Left */}
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
        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm rounded-md focus:ring-black focus:border-black"
          />
        </div>
        {/* Right */}
        <div className=" flex space-x-4 items-center ">
          <HomeIcon className="hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out " />
          <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/presentation_images/susc23-1.jpg"
            alt="Ja"
            className="h-10 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 ease-out"
          />
        </div>
      </div>
    </div>
  );
}
