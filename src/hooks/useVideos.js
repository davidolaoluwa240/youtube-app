import { useState, useEffect } from "react";
import youtube from "../api/youtube";

const useVideos = function (defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  async function search(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
  }

  return [videos, search];
};

export default useVideos;
