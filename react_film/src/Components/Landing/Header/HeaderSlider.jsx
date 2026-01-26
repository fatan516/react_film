import { useState, useEffect } from "react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import GetTrendMovies from "../../../assets/api/apis/getTrendingMovies";

export default function HeaderSlider({ setBg }) {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await GetTrendMovies();
      console.log(1, data);
      setPopularMovies(data);
    };

    fetchMovies();
  }, []);

  if (popularMovies.length === 0) return null;

  return (
    <div className="mt-10 flex-1">
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 4, spaceBetween: 30 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={popularMovies.length > 4}
        navigation
        pagination={{ clickable: true }}
      >
        {popularMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
              className="w-full sm:h-auto object-cover rounded-lg"
              onMouseOver={() =>
                setBg(
                  `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                )
              }
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
