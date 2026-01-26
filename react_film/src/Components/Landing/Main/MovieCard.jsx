import { Star } from "lucide-react";
import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div
      className="relative flex items-end aspect-[2/3] my-11 rounded-lg overflow-hidden group "
      style={{
        backgroundImage: `url(${movie.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/60" />
      <button className="absolute bottom-1/2 left-1/2 -translate-x-1/2   mx-auto opacity-0 group-hover:opacity-100 bg-red-400 px-8 py-4 rounded-xl cursor-pointer">
        show
      </button>
      <div className=" w-full p-2 text-white flex justify-between items-center  transition-all duration-300">
        <h3 className="bg-black/60 px-2 py-1 rounded">{movie.movieName}</h3>

        <div className="flex gap-2 items-center">
          <p>{movie.grade}</p>
          <Star className="fill-yellow-300 text-yellow-300 w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
