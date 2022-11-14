import styles from "./Movie.module.css";
import { useQuery } from "@apollo/client";
import { MOVIE } from "../../Graphql/Queries/getMovie";
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import LoadingBubbles from "../../components/LoadingSpinner/LoadingBubbles";
import CategoryChip from "../../components/CategoryChip/CategoryChip";
import { ICategory } from "../../models/ICategory";
import Overview from "../../components/Overview/Overview";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getWikiSearch } from "../../api/wikipediaService";
import { makeIMDBUrl } from "../../api/imdbService";

const Movie = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(MOVIE, {
    variables: { id },
  });

  //wiki url for the wiki button
  const [wikiUrl, setWikiUrl] = useState("");
  //imdb url for the imdb button
  const [imdbUrl, setImdbUrl] = useState("");

  //Set the wiki and imdb url so it can be used on the buttons
  useEffect(() => {
    const handleWikiSearch = async () => {
      const search: any = await getWikiSearch(data?.movie?.name);
      const url = `https://en.wikipedia.org/?curid=${search.query.search[0].pageid}`;
      setWikiUrl(url);
    };
    handleWikiSearch();
    const handleImdbSearch = async () => {
      let url;
      const search: any = await makeIMDBUrl(data?.movie?.name);
      const searchedMovie = search?.Search;
      if (searchedMovie) {
        url = `https://www.imdb.com/title/${searchedMovie[0]?.imdbID}/?ref_=fn_al_tt_1`;
        setImdbUrl(url);
      }
    };
    handleImdbSearch();
  }, [data?.movie?.name]);

  //Checking if the data is still loading
  if (loading) {
    return (
      <div className={styles.loader}>
        <LoadingBubbles />
      </div>
    );
  }

  //Checking if there as any error while loading
  if (error) {
    return <h1>{error.extraInfo}</h1>;
  }

  return (
    <>
      <Navbar handleSearch={undefined} />
      <div className={styles.container}>
        <div className={styles.title__container}>
          <h1 className={styles.title}>{data?.movie?.name}</h1>
        </div>
        <div className={styles.details}>
          <div className={styles.image__container}>
            <img src={data.movie.poster.original} alt="" loading="lazy" />
          </div>
          <div className={styles.categories}>
            {data?.movie?.genres.map((category: ICategory) => (
              <CategoryChip
                key={category.id}
                name={category.name}
                id={category.id}
              />
            ))}
          </div>
          <div className={styles.overview__container}>
            <Overview overview={data.movie.overview} />
            <div className={styles.btnGroup}>
              <Button
                className={styles.btn}
                variant="contained"
                href={wikiUrl}
                rel="noreferrer"
                target={"_blank"}
              >
                Wikipedia
              </Button>
              <Button
                className={styles.btn}
                variant="contained"
                href={imdbUrl}
                rel="noreferrer"
                target={"_blank"}
              >
                IMDB
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
