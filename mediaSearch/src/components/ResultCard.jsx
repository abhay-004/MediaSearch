import React from "react";

const ResultCard = ({ item }) => {
  return (
    <div className="w-[18vw] relative h-70 bg-white rounded">
      <a href={item.url} target="_blank" className="h-full">
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center "
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center "
            autoPlay
            muted
            loop
            src={item.src}
          ></video>
        ) : (
          ""
        )}
        {item.type == "gif" ? (
          <img
            className="h-full w-full object-cover object-center "
            src={item.src}
          />
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="text-white flex justify-between items-center  w-full px-6 py-10 gap-2 absolute bottom-0"
      >
        <h2 className="text-lg font-semibold capitalize">{item.title}</h2>
        <button className="bg-indigo-600 text-white rounded px-3 py-1 cursor-pointer font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
