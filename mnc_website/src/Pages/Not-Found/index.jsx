import React from "react";
import styles from "./style.module.css";
import not_found_img from "../../assets/404_img.webp";

const NotFound = () => {
  return (
    <div className={styles.img_container}>
      <img src={not_found_img} className={styles.center_fit} alt="Not Found Image" />
    </div>
  );
};

export default NotFound;
