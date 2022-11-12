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
};

const MovieCard: FC<Props> = ({ id, url, title, category, score }) => {
  const firstThreeCategories = category.slice(0, 3);
  return (
    <Link className={styles.link} to={`/movie/${id}`}>
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
        </div>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            autem eos saepe, vero quisquam eaque ad cum neque quod voluptatibus
            id deserunt mollitia? Enim quia natus a, tempora earum mollitia!
          </p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
