/* eslint-disable react/prop-types */
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

// eslint-disable-next-line react/prop-types
export default function ImageSwiper({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images?.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img
                className="aspect-square h-auto max-h-[484px] w-full rounded-lg object-cover"
                src={image}
                alt="image"
                width={600}
                height={600}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-8"
      >
        {images?.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img
                className="h-auto w-full cursor-pointer rounded-lg"
                src={image}
                alt="image"
                width={600}
                height={600}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
