import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";

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
};

const MovieCard: FC<Props> = ({ id, url, title, category, score }) => {
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
      <div className={styles.card}>
        <img className={styles.img} src={url} alt="" />
        <div className={styles.details}>
          <div className={styles.mainDetails}>
            <p className={styles.title}>{title}</p>
            <span className={styles.scoreValue}>
              {score.toFixed(2)} <span className={styles.score}>/10</span>
            </span>
          </div>
          <div className={styles.categories}>
            {category.map((c) => (
              <p key={c.id} className={styles.category}>
                {c.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
