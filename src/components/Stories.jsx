"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import Story from "./Story";
import { fakerEN, fakerDE, fakerZH_CN } from "@faker-js/faker";

export default function Stories() {
  const [storyUsers, setStoryUsers] = useState([]);
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
    <div>
      {storyUsers.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}
