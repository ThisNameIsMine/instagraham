import React from "react";
import Stories from "./Stories";
import Posts from "./Posts";
export default function Feed() {
  return (
    <main>
      <h1 className="h-10 text-red-900">Yo mama</h1>
      <section>
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>
      <section>
        {/* Mini profile */}
        {/* Suggestions */}
      </section>
    </main>
  );
}
