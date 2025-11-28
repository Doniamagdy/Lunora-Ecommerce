import Categories from "./categories/Categories";
import Brands from "./brands/Brands";
import Hero from "../components/layout/Hero";
import PopularProducts from "./products/PopularProducts";
import Banners from "../components/layout/Banners";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      <div className="w-9/12 mx-auto">
      
        {/* Banners */}
        <Banners />

        {/* Categories */}
        <Categories />

        {/* Products */}
        <PopularProducts />

        {/* Brands */}
        <Brands />

      </div>
    </>
  );
}

export default Home;
