import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ItemCarousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full md:max-w-xl lg:max-w-3xl bg-base-100"
      >
        <SwiperSlide>
          <div
            className="w-full h-96 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/RTX-3080-flat-2-scaled.jpg")`,
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-96 bg-center bg-cover"
            style={{
              backgroundImage: `url("https://www.trustedreviews.com/wp-content/uploads/sites/54/2020/09/RTX-3080-flat-2-scaled.jpg")`,
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
