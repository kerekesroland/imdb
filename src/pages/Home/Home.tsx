import { POPULAR_MOVIES } from "../../Graphql/Queries/fetchPopular";
import { useQuery } from "@apollo/client";
import Navbar from "../../components/Navbar/Navbar";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Home.module.css";

type Props = {};

const Home = (props: Props) => {
  const { data, error, loading } = useQuery(POPULAR_MOVIES);

  console.log(data);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Navbar />
      <div className={styles.movies}>
        {data.popularMovies.map((movie: any) => (
          <MovieCard key={movie.id} url={movie.img.url} title={movie.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
