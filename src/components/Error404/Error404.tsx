import styles from "./Error404.module.css";
import PageNotFound from "../../assets/page_not_found.svg";

const Error404 = () => {
  return (
    <div className={styles.container}>
      <img className={styles.errorImg} src={PageNotFound} alt="" />
      <span className={styles.notFoundText}>Page not found</span>
    </div>
  );
};

export default Error404;
