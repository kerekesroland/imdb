import styles from "./Movie.module.css";
import { useQuery } from "@apollo/client";
import { MOVIE } from "../../Graphql/Queries/getMovie";
import { useParams } from "react-router-dom";
import { Navbar } from "../Navbar/Navbar";
import LoadingBubbles from "../LoadingSpinner/LoadingBubbles";
import CategoryChip from "../CategoryChip/CategoryChip";
import { ICategory } from "../../models/ICategory";
import Overview from "../Overview/Overview";

const Movie = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(MOVIE, {
    variables: { id },
  });

  if (loading) {
    return (
      <div className={styles.loader}>
        <LoadingBubbles />
      </div>
    );
  }

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
              <CategoryChip name={category.name} id={category.id} />
            ))}
          </div>
          <div className={styles.overview__container}>
            <Overview overview={data.movie.overview} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
