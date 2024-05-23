import React from "react";
import styles from "../child.module.css";

const Child = () => {
  console.log(styles);
  return <p className={styles.header}>Child</p>;
};

export default Child;
