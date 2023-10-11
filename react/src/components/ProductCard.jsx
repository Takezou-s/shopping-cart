import Icon from "@mdi/react";
import Button from "react-bootstrap/Button";

import { mdiHeart } from "@mdi/js";

import styles from "../styles/ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard({ favorited, img, title, price }) {
  return (
    <Link className={styles["product-card"] + " d-flex flex-column gap-2"}>
      <Button variant="none" className="ms-auto">
        <Icon className={styles["favorite-icon"] + " " + ((favorited && styles.favorited) || "")} path={mdiHeart} size={1} />
      </Button>
      <img className={styles["product-img"]} src={img}></img>
      <div className={styles["add-to-cart"]}>
        <Button className={"rounded-0 w-100"} variant="dark">
          SEPETE EKLE
        </Button>
      </div>
      <span className={styles["product-title"] + " fw-semibold text-center"}>{title}</span>
      <span className={styles["product-price"] + " fw-bolder text-center"}>₺{price.toFixed(2)}</span>
    </Link>
  );
}

export default ProductCard;
