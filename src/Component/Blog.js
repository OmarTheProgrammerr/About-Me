import React, { useState } from "react";
import "./Blog.css";
import { Card } from "react-bootstrap";
import { TbArrowRightRhombus } from "react-icons/tb";

const Blog = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <Card className="mb-3" id="AMBox">
      <div>Hmmmmm, what should I put here?</div>
      <TbArrowRightRhombus
        className={`toggle-arrow ${isContentVisible ? "open" : ""}`}
        onClick={toggleContent}
      />
      <div
        className={`content-container ${isContentVisible ? "expanded" : ""}`}
      >
        {isContentVisible && <div>IDK, I'm asking!</div>}
      </div>
    </Card>
  );
};

export default Blog;
