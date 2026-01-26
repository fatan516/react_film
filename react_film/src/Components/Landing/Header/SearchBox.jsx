import React from "react";
import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="text-slate-100 flex items-center mt-10 w-full mx-auto border-2 border-black rounded-lg">
      <div className="bg-slate-600 p-2 rounded-l-lg border-r-2 border-black">
        <select name="movies" className="bg-slate-600 rounded-lg">
          <option value="1">Movies</option>
          <option value="2">Series</option>
        </select>
      </div>
      <div className="relative flex-1 rounded-lg">
        <input
          type="text"
          placeholder="Search for a Movie..."
          className="w-full bg-slate-600 p-2 placeholder:italic placeholder:text-slate-400 rounded-r-lg"
        />
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-100" />
      </div>
    </div>
  );
}
