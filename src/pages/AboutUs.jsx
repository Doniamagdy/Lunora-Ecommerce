import Hero from "../components/layout/Hero";

function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <section className="max-w-4xl mx-auto py-10 px-6 leading-relaxed text-lg font-light text-justify">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-900">
          Who We Are
        </h2>

        <p className="mb-4">
          We are a growing brand dedicated to offering high-quality fashion
          items and top-notch electronic essentials all in one place. Our
          mission is to bring style and technology together, making shopping
          simple, modern, and enjoyable.
        </p>

        <p className="mb-4">
          Our collections are carefully curated to provide timeless apparel
          pieces alongside the latest tech products, ensuring a premium shopping
          experience for customers with diverse lifestyles and interests.
        </p>

        <p className="mb-4">
          We believe in quality, authenticity, and trust — and we work every day
          to deliver products that reflect these values.
        </p>
      </section>

      {/* Vision + Values Section */}
      <section className="py-4 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To design and deliver products that blend style and innovation.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To become a global destination for modern lifestyle shopping.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <p className="text-gray-700">
              Quality • Integrity • Creativity • Customer Focus
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
