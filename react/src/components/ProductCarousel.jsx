import Container from "react-bootstrap/Container";
import OwlCarousel from "react-owl-carousel";
import ProductCard from "./ProductCard";

function ProductCarousel({ products, itemCount, center=true }) {
  const options = {
    loop: true,
    center: center,
    items: itemCount,
    margin: 0,
    autoplay: products.length > itemCount,
    dots: false,
    autoplayTimeout: 2500,
    smartSpeed: 450,
    nav: false,
    mouseDrag: products.length > itemCount,
    touchDrag: products.length > itemCount,
  };
  return (
    <Container>
      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        {products.map((x) => (
          <div key={x.id} className="item p-2">
            <ProductCard favorited={x.favorited} img={x.img} price={x.price} title={x.title} />
          </div>
        ))}
      </OwlCarousel>
    </Container>
  );
}

export default ProductCarousel;
