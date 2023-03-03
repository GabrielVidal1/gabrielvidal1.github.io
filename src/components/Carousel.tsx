import React from "react";
import { Carousel as RawCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface CarouselProps {
  data: {
    image: string;
    legend?: string;
  }[];
}

const Carousel = ({ data }: CarouselProps) => (
  <RawCarousel showArrows showThumbs={false}>
    {data.map(({ image, legend }) => (
      <div>
        <img src={image} />
        {legend && <p className="legend">{legend}</p>}
      </div>
    ))}
  </RawCarousel>
);
export default Carousel;
