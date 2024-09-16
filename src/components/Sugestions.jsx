"use client";
import React from "react";
import { fakerEN } from "@faker-js/faker";
import { useState } from "react";
import { useEffect } from "react";

export default function Sugestions() {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const sugestions = Array.from({ length: 5 }, (_, index) => ({
      username: fakerEN.person.fullName(),
      job: fakerEN.person.jobTitle(),
      id: index + 1,
    }));

    setSuggestions(sugestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5 text-sm">
        <h3 className="font-bold text-gray-400">Sugestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
      {suggestions.map((suggestions) => (
        <div className="flex items-center justify-between mt-3">
          <img
            className="h-10 rounded-full border p-[2px]"
            src={`https://i.pravatar.cc/150?img=${Math.ceil(
              Math.random() * 70
            )}`}
            alt="user"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{suggestions.username}</h2>
            <h3 className="text-sm text-gray-400 truncate w-[230px]">
              {suggestions.job}
            </h3>
          </div>
          <button className="font-semibold text-blue-400 text-sm">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}
