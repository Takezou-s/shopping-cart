import Container from "react-bootstrap/Container";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";


import img1 from "../assets/wild-serisi-oyuncu-mouse-pad-acf8.jpg";
import img2 from "../assets/oyunculara-ozel-mouse-padler-c2ff.jpg";
import img3 from "../assets/patch--yama-2605.jpg";

function MainCarousel() {
  const options = {
    loop: true,
    center: true,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    nav: false,
  };
  return (
    <Container>
      <OwlCarousel className="main-carousel owl-carousel owl-theme" {...options}>
        <div className="item">
          <Link to="/qwe" className="w-100 d-block">
            <img className="w-100" src={img1}></img>
          </Link>
        </div>
        <div className="item">
          <Link to="/qwe" className="w-100 d-block">
            <img className="w-100" src={img2}></img>
          </Link>
        </div>
        <div className="item">
          <Link to="/qwe" className="w-100 d-block">
            <img className="w-100" src={img3}></img>
          </Link>
        </div>
      </OwlCarousel>
    </Container>
  );
}

export default MainCarousel;
