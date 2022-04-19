import Blog from "components/Reusable/Blog";
import GetStartedBtn from "components/Reusable/GetStartedBtn";
import React from "react";
import "./index.css";
import blogforex from "../../assets/drawables/blogforex.svg";
import blogbank from "../../assets/drawables/blogbank.svg";
import blogcard from "../../assets/drawables/blogcard.svg";

const blogs = [
  {
    id: 1,
    image: blogforex,
    blogTitle: "Understanding the Forex Backed Securities ",
    blogText: "Investment",
    blogTime: "5",
  },
  {
    id: 2,
    image: blogbank,
    blogTitle: "Opening a Dollar Account withICE Bank",
    blogText: "ICE Bank",
    blogTime: "3",
  },
  {
    id: 3,
    image: blogcard,
    blogTitle: "Using your virtual Card",
    blogText: "Investment",
    blogTime: "5",
  },
];

const Article = () => {
  return (
    <div className="article">
      <h3>How it works</h3>
      <div className="article-cards">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            image={blog.image}
            blogTitle={blog.blogTitle}
            blogText={blog.blogText}
            blogTime={blog.blogTime}
          />
        ))}
        {/* <Blog />
        <Blog /> */}
      </div>
      <div className="artcleBtn">
        <GetStartedBtn btnText="View more" />
      </div>
    </div>
  );
};

export default Article;
