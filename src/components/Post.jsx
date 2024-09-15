import React from "react";
import { BsThreeDots } from "react-icons/bs";

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <BsThreeDots className="h-5 cursor-pointer" />
      </div>
      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt={caption} />
      {/* Post Footer */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
}
