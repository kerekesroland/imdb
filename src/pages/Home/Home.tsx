/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment } from "react";
import { POPULAR_MOVIES } from "../../Graphql/Queries/fetchPopular";
import { useLazyQuery, useQuery } from "@apollo/client";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css";
import Box from "@mui/material/Box";
import LoadingBubbles from "../../components/LoadingSpinner/LoadingBubbles";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import {
  SEARCH_MOVIE,
  SEARCH_MOVIE_RELATED,
} from "../../Graphql/Queries/searchMovie";
import NoResults from "../../assets/noResults.svg";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { data, error, loading } = useQuery(POPULAR_MOVIES);
  const [
    searchMovies,
    {
      data: searchedData,
      loading: searchedDataLoading,
      error: searchedDataError,
    },
  ] = useLazyQuery(SEARCH_MOVIE);

  const [
    searchRelatedMovies,
    {
      data: related_movies,
      loading: relatedMoviesLoading,
      error: relatedMoviesError,
    },
  ] = useLazyQuery(SEARCH_MOVIE_RELATED);

  const [filteredMovies, setFilteredMovies]: any = useState([]);

  //Checking if the there was any filtering or not, if not, just return the popularMovies
  useEffect(() => {
    if (data && !searchedData && !related_movies) {
      setFilteredMovies(data.popularMovies);
    }
  }, [data, searchedData, related_movies]);

  //By clicking on the sole nav item you can reset the list of movies to the popularMovies
  const handleSetPopular = () => {
    setFilteredMovies(data.popularMovies);
  };

  //Function that handles the filtering
  const handleSearch = (event: any, inputRef: any) => {
    event.preventDefault();
    const searchedText = inputRef.current.value;
    if (searchedText !== "") {
      if ((event && event.key === "Enter") || event.type === "click") {
        searchMovies({
          variables: { query: searchedText },
          onError(error) {
            console.error(error);
          },
          onCompleted(searchedData) {
            if (searchedData.searchMovies.length === 0) {
              setFilteredMovies([]);
            }
            setFilteredMovies(searchedData.searchMovies);
          },
        });
      }
    }
  };

  //Function that handles the search for related movies
  const handleGetSimilarMovies = (title: string) => {
    searchRelatedMovies({
      variables: { query: title },
      onError(error) {
        console.error(error);
      },
      onCompleted(searchedData) {
        const { similar }: any = searchedData.searchMovies[0];
        setFilteredMovies([...searchedData.searchMovies, ...similar]);
      },
    });
  };

  //Checking for data to be returned, until then there is this cool Tiktok like loading :D
  if (loading || searchedDataLoading || relatedMoviesLoading) {
    return (
      <Fragment>
        <Navbar handleSearch={undefined} searchable={false} />
        <div className={styles.loader}>
          <LoadingBubbles />
        </div>
      </Fragment>
    );
  }

  //Checking for any errors while fetching data
  if (error) {
    return <h1>{error.extraInfo}</h1>;
  }
  if (searchedDataError) {
    return <h1>{searchedDataError.extraInfo}</h1>;
  }
  if (relatedMoviesError) {
    return <h1>{relatedMoviesError.extraInfo}</h1>;
  }

  //Checking if the filtering was unsuccessful and data was not found for the search params
  if (!loading && searchedData && filteredMovies.length === 0) {
    return (
      <Fragment>
        <Navbar handleSearch={handleSearch} searchable={false} />
        <div className={styles.noResultsContainer}>
          <div className={styles.innerFlexContainer}>
            <img width={100} height={100} src={NoResults} alt="" />
            <h1 className={styles.noResults}>No results</h1>
            <Button
              onClick={() => setFilteredMovies(data.popularMovies)}
              className={styles.refreshBtn}
              variant="contained"
            >
              Refresh
            </Button>
          </div>
        </div>
      </Fragment>
    );
  }

  return (
    <>
      <Helmet>
        <title>Popular Movies</title>
        <meta name="description" content="Browse from our popular movies" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Navbar
        searchable={true}
        handleSearch={handleSearch}
        handleSetPopular={handleSetPopular}
      />
      <Box sx={{ pt: 10, pb: 5 }} className={styles.movies}>
        {filteredMovies.map((movie: any) => (
          <MovieCard
            key={movie?.id}
            id={movie?.id}
            url={movie?.img?.original}
            title={movie?.name}
            category={movie?.genres}
            score={movie?.score}
            handleGetSimilarMovies={handleGetSimilarMovies}
          />
        ))}
      </Box>
    </>
  );
};

export default Home;
