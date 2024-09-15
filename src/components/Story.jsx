import React from "react";

export default function Story({ img, username }) {
  return (
    <div className="p-2">
      <img src={img} alt={username} />
      <p className="text-red-900 h-3">{username}</p>
    </div>
  );
}
