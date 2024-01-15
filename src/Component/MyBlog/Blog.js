import React from "react";
import "./Blog.css";
import { Card } from "react-bootstrap";
import { TbArrowRightRhombus } from "react-icons/tb";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <Card className="mb-3B" id="AMBox">
      <div className="titleOfBlog">Omar's Blog</div>
      <Link to="/blog/HuntingSeason2024" className="contentRow1">
        <TbArrowRightRhombus className="toggle-arrow" />
        <div>
          <span style={{ color: "#0056b3" }}>Hunting Season 2024</span>
          <span className="post-date">- Dec 21st, 2023</span>
        </div>
      </Link>

      {/* <Link to="/blog/WhoAmI" className="contentRow">
        <TbArrowRightRhombus className="toggle-arrow" />
        <div>Who am I?</div>
      </Link> */}
    </Card>
  );
};

export default Blog;
