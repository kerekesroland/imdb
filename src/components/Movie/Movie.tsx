import styles from "./Movie.module.css";
import { useQuery } from "@apollo/client";
import { MOVIE } from "../../Graphql/Queries/getMovie";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(MOVIE, {
    variables: { id },
  });

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.bg}></div>
      </div>
    </div>
  );
};

export default Movie;
