import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryCarousel = () => {
  const images = [
    {
      src: require("../../images/Carousel/img01.jpeg").default,
      alt: "Image 1",
      caption: "Legenda da Imagem 1",
    },
    {
      src: require("../../images/Carousel/img02.jpeg").default,
      alt: "Image 2",
      caption: "Legenda da Imagem 2",
    },
    {
      src: require("../../images/Carousel/img03.jpeg").default,
      alt: "Image 3",
      caption: "Legenda da Imagem 3",
    },
  ];

  return (
    <Carousel autoPlay infiniteLoop interval={3000}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Carousel>
  );
};

export default GalleryCarousel;
