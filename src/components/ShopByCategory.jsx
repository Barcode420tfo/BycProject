import { useState } from "react";

const categories = [
  {
    key: "women",
    label: "Women",
    blurb: "Refined bras, briefs, and lounge-ready silhouettes with softer finishes.",
    subCategories: ["Wire bra", "No-wire bra", "Bralette", "Midi panty"],
    featureTitle: "Built for soft structure",
    featureText:
      "A more editorial presentation for BYC women’s products with clean cards and compact product chips.",
  },
  {
    key: "men",
    label: "Men",
    blurb: "Core boxers, body-dry layers, and practical daily underwear bundles.",
    subCategories: ["Boxer", "Drawers", "Running", "Body Dry"],
    featureTitle: "Sharper everyday essentials",
    featureText:
      "Balanced spacing and contrast make staple men’s products feel more intentional instead of flat.",
  },
  {
    key: "kids",
    label: "Kids",
    blurb: "Comfort-led basics and playful sets designed around movement and easy layering.",
    subCategories: ["Kids briefs", "Innerwear", "Sleepwear", "Seasonal sets"],
    featureTitle: "Cleaner browsing on small screens",
    featureText:
      "The category section stacks cleanly on mobile and still keeps the selection obvious on larger displays.",
  },
];

const ShopByCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("women");

  const activeCategory = categories.find(
    (category) => category.key === selectedCategory,
  );

  return (
    <section className="section-block section-soft" id="categories">
      <div className="container">
        <div className="section-heading fade-up">
          <span className="eyebrow">Shop by category</span>
          <h2 className="section-title-light">
            Responsive category browsing with more polish and clearer states
          </h2>
          <p>
            Tabs, chips, and hover-ready panels give the section better rhythm on
            desktop while remaining touch-friendly on smaller devices.
          </p>
        </div>

        <div className="category-tabs fade-up" role="tablist" aria-label="Product categories">
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-tab ${
                selectedCategory === category.key ? "category-tab-active" : ""
              }`}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.key}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="category-panel fade-up" role="tabpanel">
          <div className="category-panel-copy">
            <span className="panel-kicker">{activeCategory.label}</span>
            <h3>{activeCategory.featureTitle}</h3>
            <p>{activeCategory.blurb}</p>
            <div className="category-chip-row">
              {activeCategory.subCategories.map((item) => (
                <span className="category-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="category-panel-feature">
            <p className="panel-note">Design pass</p>
            <h4>{activeCategory.featureText}</h4>
            <ul className="feature-list">
              <li>Elevated shadows and hover lift for stronger depth.</li>
              <li>Fluid grid and card spacing across tablet and mobile widths.</li>
              <li>More obvious active states for category switching.</li>
            </ul>
          </div>
        </div>
      </div>
      <footer className="page-footer" id="footer">
        <div className="container">
          <p>BYC storefront concept with updated motion, product focus, and responsive layout.</p>
        </div>
      </footer>
    </section>
  );
};

export default ShopByCategory;
