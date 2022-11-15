import { Helmet } from "react-helmet-async";
import Error404 from "../../components/Error404/Error404";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Error.module.css";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Error 404</title>
        <meta name="description" content="Something went wrong" />
      </Helmet>
      <Navbar searchable={false} />
      <div className={styles.errorContainer}>
        <Error404 />
      </div>
    </>
  );
};

export default ErrorPage;
