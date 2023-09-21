export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>
          Your Feet
          <br /> Deserve <br /> The best
        </h1>
        <p>
          Your feet deserve the best and we're here to help you with our shoes.
          Your feet deserve <br /> the best and we're here to help you with our
          shoes
        </p>
        <div className="btn-hero">
          <button className="btn-shop-now">Shop Now</button>
          <button className="btn-category">Category</button>
        </div>
        <div className="other-ecommerce">
          <p>Also Avalilable On</p>
          <div className="ecommerce">
            <img
              className="flipkart"
              src="../public/images/flipkart.png"
              alt="flipkart"
            />
            <img
              className="amazon"
              src="../public/images/amazon.png"
              alt="amazon"
            />
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="../public/images/shoe_image.png" alt="Nike shoes" />
      </div>
    </div>
  );
}
