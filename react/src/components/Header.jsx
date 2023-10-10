import { Link } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container"
import Icon from "@mdi/react";
import { mdiAccount, mdiCart } from "@mdi/js";

import logo from "../assets/beam-new.png";
import styles from "../styles/Header.module.css";

function Header() {
  const submitHandler = (ev) => {
    ev.preventDefault();
    alert("submit");
  };
  return (
    <Container as="header" className="d-flex align-items-center gap-4">
      <Link to={"/"} className={styles.logo}>
        <img src={logo} />
      </Link>
      <form className={styles.search + " flex-fill mx-5 px-5"} onSubmit={submitHandler}>
        <FormControl className="rounded-0" type="text" placeholder="Arama" />
        <Button className="rounded-0 px-4 py-2 fw-bold" variant="primary" type="submit">
          Ara
        </Button>
      </form>
      <div className={styles["right-container"] + " d-flex gap-4 ms-auto"}>
        <div className={styles["container"] + " " + styles["log-in"] + " d-flex align-items-center gap-2"}>
          <div className={styles.icon + " d-flex align-items-center justify-content-center border rounded-circle text-primary"}>
            <Icon path={mdiAccount} size={1.25} />
          </div>
          <div className="d-flex flex-column align-items-start">
            <Link className="fw-bold">ÜYE GİRİŞİ</Link>
            <Link className="fw-light">Üye ol</Link>
          </div>
        </div>
        <div className={styles["container"] + " " + styles.cart + " d-flex align-items-center gap-2"}>
          <div className={styles.icon + " d-flex align-items-center justify-content-center border rounded-circle text-primary"}>
            <Icon path={mdiCart} size={1.25} />
          </div>
          <Link className="d-flex flex-column align-items-start">
            <span className="fw-bold">SEPET</span>
            <span className="fw-light">0 ürün</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Header;
