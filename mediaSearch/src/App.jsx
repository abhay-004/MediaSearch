import React from "react";
import { fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  //fetch images from unsplash api
  const fetchImages = async () => {
    const data = await fetchPhotos("cat");
    console.log(data.results);
  };

  //fetch videos from pexels

  const fetchClips = async () => {
    const data = await fetchVideos("cat");
    console.log(data.videos);
  };

  return (
    <div className="h-screen w-full bg-gray-950  text-white ">
      <button
        className="border bg-green-400 m-5 active:scale-95 px-4 py-2 cursor-pointer"
        onClick={fetchImages}
      >
        Get Photos
      </button>
      <button
        className="border bg-green-400 m-5 active:scale-95 px-4 py-2 cursor-pointer"
        onClick={fetchClips}
      >
        Get Videos
      </button>
    </div>
  );
};

export default App;
