import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { HiOutlineEmojiHappy } from "react-icons/hi";

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

      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <FaRegHeart className="btn" />
          <MdOutlineChatBubbleOutline className="btn" />
        </div>
        <FaRegBookmark className="btn" />
      </div>

      {/* Post Footer */}
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>
      {/* Post Input Box */}
      <form action="" className="flex items-center p-4 space-x-2">
        <HiOutlineEmojiHappy className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment"
        />
        <button className="text-blue-400 font-bold" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
