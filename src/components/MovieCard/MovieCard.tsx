import React, { FC } from "react";
import styles from "./MovieCard.module.css";

type Props = {
  url: string;
  title: string;
};

const MovieCard: FC<Props> = ({ url, title }) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={url} alt="" />
      <p className={styles.title}>{title}</p>
      <div className={styles.details}>
        <p className={styles.genre}></p>
        <p className={styles.date}></p>
      </div>
    </div>
  );
};

export default MovieCard;
