import React, { createContext, useState, useEffect } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setTimeout(() => {
        setPosts(data);
        setLoading(false);
      }, 5000);
    };

    fetchPosts();

  }, []);

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, loading, removePost }}>
      {children}
    </PostContext.Provider>
  );
};