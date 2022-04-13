import React from "react";
import "./index.css";

const Blog = ({ image, blogTitle, blogText, blogTime }) => {
  return (
    <div className="blog">
      <img src={image} alt="" />
      <div className="blog-content">
        <h5>{blogTitle}</h5>
        <div className="blog-topic">
          <span>{blogText}</span> - <span>{blogTime} mins</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
