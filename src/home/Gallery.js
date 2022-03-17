import React from "react";
import "./Gallery.css";
import GalleryItem from "./GalleryItem";

const puppies = [
  {
    img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*",
    title: "Rover",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar odio sed cursus sagittis.",
  },
  {
    img: "https://images.ctfassets.net/sfnkq8lmu5d7/4Ma58uke8SXDQLWYefWiIt/3f1945422ea07ea6520c7aae39180101/2021-11-24_Singleton_Puppy_Syndrome_One_Puppy_Litter.jpg",
    title: "Furby",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar odio sed cursus sagittis.",
  },
  {
    img: "https://gardneranimalcarecenter.com/wp-content/uploads/2019/10/puppy-1082141_1280-min-1080x675.jpg",
    title: "Browny",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar odio sed cursus sagittis.",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {puppies.map(({ img, title, body }, index) => (
        <GalleryItem img={img} title={title} body={body} key={index} />
      ))}
    </div>
  );
};

export default Gallery;
