import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import ShopByCategory from "./components/ShopByCategory";

const App = () => {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <NewArrivals />
        <ShopByCategory />
      </main>
    </div>
  );
};

export default App;
