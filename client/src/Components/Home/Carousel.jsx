import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Modal() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper xl:w-2/3 w-full bg-black"
      >
        <SwiperSlide>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5f7ca28d6b179d3ea9be6f5c/0x0.jpg?format=jpg&width=1200"
            className="w-full"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
