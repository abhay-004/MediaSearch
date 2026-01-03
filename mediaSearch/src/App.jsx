import React from "react";
import { fetchPhotos } from "./api/mediaApi";

const App = () => {
  //fetch images from unsplash api
  const fetchImages = async () => {
    const data = await fetchPhotos("cat");
    console.log(data.results);
  };
  return (
    <div className="h-screen w-full bg-gray-950  text-white ">
      <button className="border px-4 py-2 cursor-pointer" onClick={fetchImages}>
        Get Photos
      </button>
    </div>
  );
};

export default App;
