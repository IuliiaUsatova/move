import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "./Slider.css";
import { useContext } from "react";
import { ModalContext } from "../../pages/providers/ModalProvider";

const Slider = () => {
  const items = useContext(ModalContext);
//создаем контейнер и в него помещаем функцию из Провайдера

  return (
    <div className="slider_block">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      className="mySwiper"
      pagination={{ clickable: true }} // scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {items.map((el) => {
        return (
          <SwiperSlide>
            <div className="movieBg">
            <img className="movieImg" src={el.image} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
    </div>
  );
};
export default Slider;

//
