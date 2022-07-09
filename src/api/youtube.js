import axios from "axios";

const KEY = "AIzaSyAczHBr0TUG_rKf_o2oXEy6MdoFqnoR-YE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
