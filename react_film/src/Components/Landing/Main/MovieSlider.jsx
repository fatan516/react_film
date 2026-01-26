import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import GetAllMovies from "../../../assets/api/apis/getAllMovies";

export default function MovieSlider({ setBg }) {
  const movies = [
    { movieName: "lost", grade: 7.5, src: "/images/card1.jfif" },
    { movieName: "inception", grade: 8.8, src: "/images/card2.jfif" },
    { movieName: "interstellar", grade: 8.6, src: "/images/card3.jfif" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
    { movieName: "lost", grade: 7.5, src: "/images/card1.jfif" },
    { movieName: "inception", grade: 8.8, src: "/images/card2.jfif" },
    { movieName: "interstellar", grade: 8.6, src: "/images/card3.jfif" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
    { movieName: "dark", grade: 8.7, src: "/images/card4.jpg" },
  ];
  const [movie,setMovies]=useState([])
  useEffect(() => {
    const fetchMovies = async () => {
      const data = await GetAllMovies();
      console.log("movies:", data);
      setMovies(data);
    };
  
    fetchMovies();
  }, []);
  return (
    <>
      <div className="mt-10  flex-1">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h2 className="text-3xl font-bold">Whats popular</h2>
          <ul className="flex items-center gap-4 text-rose-400 text-xl">
            <li>straming</li>
            <li>Tv</li>
            <li>For rent</li>
            <li>teather</li>
          </ul>
        </div>
        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, // موبایل کوچک
            640: { slidesPerView: 4, spaceBetween: 15 }, // sm
            768: { slidesPerView: 6, spaceBetween: 20 }, // md
            1024: { slidesPerView: 6, spaceBetween: 20 }, // lg
            1280: { slidesPerView: 6, spaceBetween: 30 }, // xl
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10  flex-1">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h2 className="text-3xl font-bold">Free to watch</h2>
          <ul className="flex items-center gap-4 text-rose-400 text-xl">
            <li>movie</li>
            <li>Tv</li>
          </ul>
        </div>
        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 }, // موبایل کوچک
            640: { slidesPerView: 4, spaceBetween: 15 }, // sm
            768: { slidesPerView: 6, spaceBetween: 20 }, // md
            1024: { slidesPerView: 6, spaceBetween: 20 }, // lg
            1280: { slidesPerView: 6, spaceBetween: 30 }, // xl
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx} className="h-full">
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
