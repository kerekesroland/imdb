import axios from "axios";

export const makeIMDBUrl = async (title: string) => {
  let res;
  const searchRegExp = /\s/g;
  const replaceWith = "\\";
  const formattedTitle = title?.replace(searchRegExp, replaceWith);
  res = await axios.get(
    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_IMDB_KEY}&s=${formattedTitle}`
  );

  return res.data;
};
