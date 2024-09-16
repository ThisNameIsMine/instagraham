import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex justify-between items-center mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://avatars.githubusercontent.com/u/29394976?v=4"
        alt="User"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">Tom</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagraham.</h3>
      </div>

      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
