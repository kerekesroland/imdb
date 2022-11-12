import { POPULAR_MOVIES } from "../../Graphql/Queries/fetchPopular";
import { useLazyQuery, useQuery } from "@apollo/client";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css";
import Box from "@mui/material/Box";
import LoadingBubbles from "../../components/LoadingSpinner/LoadingBubbles";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { SEARCH_MOVIE } from "../../Graphql/Queries/searchMovie";
import { getWikiSearch } from "../../constants/wikipedia_endpoint";

const Home = () => {
  const { data, error, loading } = useQuery(POPULAR_MOVIES);
  const [
    SearchMovie,
    {
      data: searchedData,
      loading: searchedDataLoading,
      error: searchedDataError,
    },
  ] = useLazyQuery(SEARCH_MOVIE);
  const [filteredMovies, setFilteredMovies] = useState([]);

  //Checking if the there was any filtering or not, if not, just return the popularMovies
  useEffect(() => {
    if (data && filteredMovies.length === 0) {
      setFilteredMovies(data.popularMovies);
    }
    getWikiSearch();
  }, [data, filteredMovies.length]);

  //Function that handles the filtering
  const handleSearch = (event: any, inputRef: any) => {
    const searchedText = inputRef.current.value;
    if (searchedText !== "") {
      if ((event && event.key === "Enter") || event.type === "click") {
        SearchMovie({
          variables: { query: searchedText },
          onError(error) {
            console.error(error);
          },
          onCompleted(searchedData) {
            setFilteredMovies(searchedData.searchMovies);
          },
        });
      }
    } else {
      setFilteredMovies(data.popularMovies);
    }
  };

  //Checking for data to be returned, until then there is this cool Tiktok like loading :D
  if (loading || searchedDataLoading) {
    return (
      <div className={styles.loader}>
        <LoadingBubbles />
      </div>
    );
  }

  //Checking for any errors while fetching data
  if (error) {
    return <h1>{error.extraInfo}</h1>;
  }
  if (searchedDataError) {
    return <h1>{searchedDataError.extraInfo}</h1>;
  }

  return (
    <>
      <Navbar handleSearch={handleSearch} />
      <Box sx={{ pt: 10, pb: 5 }} className={styles.movies}>
        {filteredMovies.map((movie: any) => (
          <MovieCard
            key={movie?.id}
            id={movie?.id}
            url={movie?.img?.original}
            title={movie?.name}
            category={movie?.genres}
            score={movie?.score}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
