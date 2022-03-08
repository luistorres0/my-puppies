import React from "react";
import "./GalleryItem.css";

const GalleryItem = ({ img, title, body }) => {
  const style = {
    width: "400px",
    height: "400px",
    borderRadius: "50%",
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
