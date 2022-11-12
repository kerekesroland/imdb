import styles from "./CategoryChip.module.css";
import { FC } from "react";
import { ICategory } from "../../models/ICategory";

const CategoryChip: FC<ICategory> = ({ name }) => {
  return (
    <div className={styles.category__container}>
      <p className={styles.category}>{name}</p>
    </div>
  );
};

export default CategoryChip;
