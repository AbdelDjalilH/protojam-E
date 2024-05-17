// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper/modules";

export default function Carrousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper md:h-102 md:w-96"
      >
        <div className="h-dvh py-16 px-6 ">
          <SwiperSlide>
            <div>
              <a href="http://localhost:5173/activities/1">
              <img
                className="w-full relative"
                src="https://images.unsplash.com/photo-1610295832882-6390c8bb8055?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Femme qui fait du yoga"
              />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="http://localhost:5173/activities/2">
              <img
                src="https://images.unsplash.com/photo-1507034589631-9433cc6bc453?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Femme qui fait de l'escalade"
              />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="http://localhost:5173/activities/3">
              <img
                src="https://images.unsplash.com/photo-1655147260029-75bfe22efc90?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vu d'un phare en bord d'eau"
              />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="http://localhost:5173/activities/10">
              <img
                src="https://images.unsplash.com/photo-1651645583723-1b4617cf345c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sortie en vélo"
              />
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <a href="http://localhost:5173/activities/7">
              <img
                src="https://images.unsplash.com/photo-1690217096723-0fb62f048da2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="vu d'un parc"
              />
              </a>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
