import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ img, title, body }) => {
  const style = {
    width: "350px",
    height: "250px",
    borderRadius: "10px 10px 0 0",
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  return (
    <div className="gallery-item">
      <div style={style} className="gallery-item-image"></div>
      <div className="gallery-item-title"> {title}</div>
      <div className="gallery-item-body"> {body}</div>
    </div>
  );
};

export default GalleryItem;
