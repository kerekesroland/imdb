import React from "react";
import styles from "./LoadingBubbles.module.css";

type Props = {};

const LoadingBubbles = (props: Props) => {
  return <span className={styles.loader}></span>;
};

export default LoadingBubbles;
