import axios from "axios";

const options = {
  method: "GET",
  url: "https://movie-database-alternative.p.rapidapi.com/",
  params: { s: "", r: "json", page: "1" },
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  },
};

export const makeIMDBUrl = async (title: string) => {
  options.params.s = title;
  options.headers["X-RapidAPI-Key"] = `${process.env.REACT_APP_IMDB_KEY}`;
  const res = await axios.request(options);
  return res.data;
};
