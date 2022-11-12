import styles from "./Overview.module.css";
import { FC } from "react";

type Props = {
  overview: string;
};

const Overview: FC<Props> = ({ overview }) => {
  return (
    <div className={styles.overview__container}>
      <p className={styles.overview}>{overview}</p>
    </div>
  );
};

export default Overview;
