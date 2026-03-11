import React, { useContext } from "react";
import "./Card.css";
import { PostContext } from "../context/PostContext";

const Card = ({ post }) => {

  const { removePost } = useContext(PostContext);

  const image = `https://picsum.photos/300/200?random=${post.id}`;

  return (
    <div className="card">

      <span
        className="close"
        onClick={() => removePost(post.id)}
      >
        ✖
      </span>

      <h3>{post.title}</h3>

      <p>{post.body}</p>

      <p className="date">
        Mon, 21 Dec 2020 14:57 GMT
      </p>

      <img src={image} alt="post" />

    </div>
  );
};

export default Card;