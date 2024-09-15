import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "james",
      userImg: "https://avatars.githubusercontent.com/u/24712956?v=4",
      img: "https://kpi.fei.tuke.sk/sites/www2.kpi.fei.tuke.sk/files/presentation_images/susc23-1.jpg",
      caption: "This is a test",
    },
    {
      id: "2",
      username: "jeremy",
      userImg: "https://avatars.githubusercontent.com/u/24712956?v=4",
      img: "https://ipravda.sk/res/2023/02/13/thumbs/lamborghini-invencible-2023_07-nestandard1.jpg",
      caption: "Everything shall be mine.",
    },
  ];
  return (
    <div className="">
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
