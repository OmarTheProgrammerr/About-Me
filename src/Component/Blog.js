import React, { useState } from "react";
import "./Blog.css";
import { Card } from "react-bootstrap";

const Blog = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <Card className="mb-3" id="AMBox">
      <div
        className={`toggle-arrow ${isContentVisible ? "open" : ""}`}
        onClick={toggleContent}
      ></div>
      {isContentVisible && <div>Stay tuned, almost there!</div>}
    </Card>
  );
};

export default Blog;
