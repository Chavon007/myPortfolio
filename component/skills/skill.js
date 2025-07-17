"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import "./skill.css";
function Skills() {
  const myskill = [
    {
      image: "/html.png",
      name: "html",
    },
    {
      image: "/css.png",
      name: "css",
    },
    {
      image: "/tailwind.png",
      name: "tailwind",
    },
    {
      image: "/javascript.png",
      name: "javascript",
    },
    {
      image: "/typescript.png",
      name: "typescript",
    },
    {
      image: "/react.jpeg",
      name: "react",
    },
    {
      image: "/next1.png",
      name: "next",
    },
    {
      image: "/node.png",
      name: "node",
    },
    {
      image: "/express.png",
      name: "express",
    },
    {
      image: "/mongodb.png",
      name: "mongodb",
    },
  ];
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
    cssEase: "linear",
    autoplaySpeed: 0,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {myskill.map((newskill, index) => (
        <div key={index}>
          <Image
            src={newskill.image}
            alt={newskill.name}
            width={50}
            height={50}
          />
        </div>
      ))}
    </Slider>
  );
}
export default Skills;
