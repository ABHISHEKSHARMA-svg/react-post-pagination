import React, { useContext, useState } from "react";
import { PostContext } from "../context/PostContext";
import Card from "../components/Card";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Home = () => {

  const { posts, loading } = useContext(PostContext);

  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>

      <div className="grid">

        {currentPosts.map((post) => (
          <Card key={post.id} post={post} />
        ))}

      </div>

      <Pagination
        totalPosts={posts.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
};

export default Home;