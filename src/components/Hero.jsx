import { useEffect, useState } from "react";
import Button from "./Button";

const audiences = ["yourself", "men", "women", "kids"];

const highlights = [
  { value: "1946", label: "heritage since" },
  { value: "70+", label: "countries reached" },
  { value: "24/7", label: "comfort-first wear" },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % audiences.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy fade-up">
            <span className="eyebrow">Clean layers. Strong silhouettes.</span>
            <h1 className="hero-title">
              BYC essentials built for{" "}
              <span className="hero-rotating-word" key={audiences[activeIndex]}>
                {audiences[activeIndex]}
              </span>
            </h1>
            <p className="hero-description">
              Reworked into a sharper storefront with breathable basics,
              winter-ready innerwear, and softer everyday sets across men,
              women, and kids.
            </p>
            <div className="hero-actions">
              <Button title="Shop products" href="#new-arrivals" />
              <Button title="Explore categories" href="#categories" buttonType="outline" />
            </div>
          </div>

          <div className="hero-panel fade-up">
            <div className="hero-card hero-card-primary">
              <p className="hero-card-label">Featured drop</p>
              <h2>Body Dry cooling layers for spring-to-summer comfort</h2>
              <p>
                Sleek essentials with lighter weight fabrics, clean trims, and
                a calmer shopping rhythm across the page.
              </p>
            </div>
            <div className="hero-highlights">
              {highlights.map((item) => (
                <div className="hero-stat" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
