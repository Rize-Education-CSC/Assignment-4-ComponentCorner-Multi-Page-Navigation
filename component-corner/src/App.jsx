import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header storeName="Component Corner" />

      <Hero
  title="Shop the Best Tech"
  subtitle="Quality electronics at unbeatable prices"
  cta="Shop Now"
  image="https://placehold.co/1200x400/667eea/ffffff?text=Shop+Electronics"
/>

      <div className="product-cards-container">
        <ProductCard
          name="Laptop"
          price={999}
          image="https://placehold.co/600x400"
          description="High performance laptop for everyday use."
        />
        <ProductCard
          name="Headphones"
          price={199}
          image="https://placehold.co/600x400"
          description="Noise-cancelling over-ear headphones."
        />
        <ProductCard
          name="Smartphone"
          price={799}
          image="https://placehold.co/600x400"
          description="Latest generation smartphone."
        />
      </div>

      <Footer text="© 2026 Component Corner | Contact: info@componentcorner.com" />
    </div>
  );
}

export default App;