import Categories from "./categories/Categories";
import Brands from "./brands/Brands";
import Hero from "../components/layout/Hero";
import PopularProducts from "./products/PopularProducts";
import Banners from "../components/layout/Banners";

function Home() {
  return (
    <>
      {/* Hero */}
      <Hero  />

<div class="w-9/12 mx-auto">

      {/* Categories */}
      <Categories />

      {/* Banners */}

      <Banners />

      {/* Products */}
      <PopularProducts />

      {/* Brands */}
      <Brands />

      </div>
    </>
  );
}

export default Home;
