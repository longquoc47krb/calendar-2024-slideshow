import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Zoom, FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useMediaQuery } from "@uidotdev/usehooks";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { imageList } from "../constants/image";
interface GalleryProps {
  images: any[];
}
function Gallery(props: GalleryProps) {
  const { images } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  return (
    <>
      <div className="w-full h-full mt-8">
        <Swiper
          zoom={true}
          loop={true}
          spaceBetween={10}
          navigation={true}
          keyboard={{
            enabled: true,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper?.destroyed ? thumbsSwiper : null,
          }}
          modules={[Keyboard, Zoom, FreeMode, Navigation, Thumbs]}
          className="md:h-96 h-full w-full rounded-lg flex justify-center slide"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="figure-img"
                src={image?.url}
                alt={`photo ${index}`}
                key={index}
                width={500}
                height={150}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Swiper
        spaceBetween={10}
        onSwiper={setThumbsSwiper}
        loop={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-32 w-full rounded-lg"
        slidesPerView={6}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="figure-img block h-full w-full object-cover"
              src={image?.url}
              alt={`photo ${index}`}
              key={index}
              width={500}
              height={150}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Gallery;
