import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

import GetPopularMovies from "../../../assets/api/apis/getPopularMovies";
import GetPopularTvs from "../../../assets/api/apis/getPopularTvs";
import getMonetizationMovies from "../../../assets/api/apis/getMonetizationMovies";

export default function MovieSlider() {
  // popular
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [type, setType] = useState("movie"); // movie | tv

  // monetization
  const [monetizationMovies, setMonetizationMovies] = useState([]);
  const [monetizationType, setMonetizationType] = useState("free");

  /* -------------------- popular movies / tvs -------------------- */
  useEffect(() => {
    const fetchPopular = async () => {
      const [moviesData, tvsData] = await Promise.all([
        GetPopularMovies(),
        GetPopularTvs(),
      ]);
      setMovies(moviesData);
      setTvs(tvsData);
    };

    fetchPopular();
  }, []);

  /* -------------------- monetization movies -------------------- */
  useEffect(() => {
    const fetchMonetizationMovies = async () => {
      const data = await getMonetizationMovies(monetizationType);
      setMonetizationMovies(data);
    };

    fetchMonetizationMovies();
  }, [monetizationType]);

  const popularData = type === "movie" ? movies : tvs;

  return (
    <>
      {/* ================== Whats popular ================== */}
      <div className="mt-10 flex-1">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h2 className="text-3xl font-bold">Whats popular</h2>
          <ul className="flex items-center gap-4 text-rose-400 text-xl">
            {["movie", "tv"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  type === item ? "text-red-800 font-bold" : ""
                }`}
                onClick={() => setType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {popularData.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <MovieCard movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================== To watch ================== */}
      <div className="mt-10 flex-1">
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h2 className="text-3xl font-bold">To watch</h2>
          <ul className="flex items-center gap-4 text-rose-400 text-xl">
            {["free", "flatrate", "rent", "buy"].map((item) => (
              <li
                key={item}
                className={`cursor-pointer ${
                  monetizationType === item ? "text-red-800 font-bold" : ""
                }`}
                onClick={() => setMonetizationType(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Swiper
          className="h-full"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 15 },
            768: { slidesPerView: 6, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 20 },
            1280: { slidesPerView: 6, spaceBetween: 30 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          navigation
          pagination={{ clickable: true }}
        >
          {monetizationMovies.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <MovieCard movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
