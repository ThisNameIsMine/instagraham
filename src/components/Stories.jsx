"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Story from "./Story";
import { fakerEN, fakerDE, fakerZH_CN } from "@faker-js/faker";
import { useSession } from "next-auth/react";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const storyUsers = Array.from({ length: 20 }, (_, index) => ({
      username: fakerEN.person.fullName(),
      img: fakerEN.image.avatarGitHub(),
      id: index + 1,
    }));

    setStoryUsers(storyUsers);
    console.log(storyUsers);
    console.log("Stories rendered");
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {session && (
        <Story
          username={session.user.username}
          img={session.user.image}
          isUser="true"
        />
      )}
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
