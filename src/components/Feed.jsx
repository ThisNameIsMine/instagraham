"use client";
import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
import MiniProfile from "./MiniProfile";
import Sugestions from "./Sugestions";
import { useSession } from "next-auth/react";

export default function Feed() {
  const { data: session } = useSession();

  return (
    <main
      /* Changed grid to make it irelevant - looks better but keeping it for future reference */
      className={`grid ${
        session
          ? "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
          : "grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto"
      } `}
    >
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section className="hidden md:inline-grid md:col-span-1">
        <div className="">
          {/* Mini profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Sugestions />
        </div>
      </section>
    </main>
  );
}
