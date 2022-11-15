import Error404 from "../../components/Error404/Error404";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <>
      <Navbar searchable={false} />
      <div className={styles.errorContainer}>
        <Error404 />
      </div>
    </>
  );
};

export default ErrorPage;
