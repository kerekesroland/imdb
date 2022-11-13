import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import NoImage from "../../assets/noImage.svg";

type Category = {
  id: number;
  name: string;
};

type Props = {
  id: number;
  url: string;
  title: string;
  score: number;
  category: Category[];
  handleGetSimilarMovies: Function;
};

const MovieCard: FC<Props> = ({
  id,
  url,
  title,
  category,
  score,
  handleGetSimilarMovies,
}) => {
  const firstThreeCategories = category.slice(0, 3);

  return (
    <div className={styles.card}>
      <img
        className={url ? styles.img : styles.noImg}
        src={url ? url : NoImage}
        alt=""
      />

      <div className={styles.details}>
        <div className={styles.mainDetails}>
          <p className={styles.title}>
            {title?.length > 30 ? `${title?.substring(0, 30)}...` : title}
          </p>
          <span className={styles.scoreValue}>
            {score.toFixed(2)} <span className={styles.score}>/10</span>
          </span>
        </div>
        <div className={styles.categories}>
          {firstThreeCategories.length > 0 ? (
            firstThreeCategories.map((c) => (
              <p key={c.id} className={styles.category}>
                {c.name}
              </p>
            ))
          ) : (
            <p className={styles.category}>No categories</p>
          )}
        </div>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => {
              handleGetSimilarMovies(title);
            }}
          >
            Similar
          </button>
          <Link className={styles.link} to={`/movie/${id}`}>
            <button className={styles.button}>See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
