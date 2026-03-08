import newArrivalsOne from "../assets/images/new-arrivals-1.png";
import newArrivalsTwo from "../assets/images/new-arrivals-2.png";
import newArrivalsThree from "../assets/images/new-arrivals-3.png";

const newArrivalInfo = [
  {
    image: newArrivalsOne,
    title: "Body Dry Running",
    subtitle: "Cooling innerwear line inspired by BYC's summer essentials.",
    tag: "Summer item",
    price: "$32",
  },
  {
    image: newArrivalsTwo,
    title: "Soft Wire Bra",
    subtitle: "A cleaner women’s everyday fit with softer support and lighter feel.",
    tag: "Women",
    price: "$28",
  },
  {
    image: newArrivalsThree,
    title: "Airmery Pajama Set",
    subtitle: "Winter-ready layering translated into a calmer lounge silhouette.",
    tag: "Airmery",
    price: "$44",
  },
];

const NewArrivalsCard = ({ title, description, imageUrl, tag, price }) => {
  return (
    <article className="product-card fade-up">
      <div className="product-card-media">
        <img src={imageUrl} alt={title} className="product-card-image" />
        <div className="product-card-overlay">
          <span className="product-card-badge">{tag}</span>
          <button className="product-card-cta" type="button">
            Quick view
          </button>
        </div>
      </div>
      <div className="product-card-copy">
        <div className="product-card-row">
          <h3>{title}</h3>
          <strong>{price}</strong>
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
};

const NewArrivals = () => {
  return (
    <section className="section-block" id="new-arrivals">
      <div className="container">
        <div className="section-heading fade-up">
          <span className="eyebrow">Product focus</span>
          <h2 className="section-title-light">
            BYC products with a cleaner, more premium presentation
          </h2>
          <p>
            The section now leans into real BYC categories instead of placeholder
            copy, with hover-driven reveals and stronger card hierarchy.
          </p>
        </div>

        <div className="product-grid">
          {newArrivalInfo.map((arrivalInfo) => (
            <NewArrivalsCard
              key={arrivalInfo.title}
              title={arrivalInfo.title}
              imageUrl={arrivalInfo.image}
              description={arrivalInfo.subtitle}
              tag={arrivalInfo.tag}
              price={arrivalInfo.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
