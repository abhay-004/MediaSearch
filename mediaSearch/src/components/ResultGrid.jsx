import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGif, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return
    const getData = async () => {
      try {
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let res = await fetchPhotos(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab == "videos") {
          let res = await fetchVideos(query);
          data = res.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
        if (activeTab == "gif") {
          let res = await fetchGif(query);
          data = res.results.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.media_formats.tinygif.url,
            src: item.media_formats.gif.url,
          }));
        }
        dispatch(setResults(data));
      } catch (error) {
        dispatch(setError(error.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      {results.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </div>
  );
};

export default ResultGrid;
