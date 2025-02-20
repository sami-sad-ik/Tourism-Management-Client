import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import PropTypes from "prop-types";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";

const Banner = ({ spots }) => {
  return (
    <div>
      <div>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={10}
          loop={true}
          modules={[Navigation, Autoplay, EffectCoverflow]}
          autoplay={{ delay: 3000 }}
          className="mySwiper">
          {spots.map((spot) => (
            <SwiperSlide key={spot._id}>
              <div className="relative lg:w-full mx-auto md:h-[600px] md:w-[450px] overflow-hidden shadow-lg">
                <img
                  className=" w-full md:h-[600px] h-[450px] object-cover brightness-50 "
                  src={spot.image}
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <h2 className="md:text-6xl text-3xl font-bold text-white">
                    Let&apos;s explore the world with{" "}
                    <span className="text-amber-600">Travel</span>
                    <span className="text-blue-600">Go</span>
                  </h2>
                  <p className="text-2xl  text-white my-3">
                    Choose your destination
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

Banner.propTypes = {
  spots: PropTypes.array.isRequired,
};

export default Banner;
