import { useState } from "react";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://placehold.co/600x400",
      description: "Premium noise-cancelling headphones with 30-hour battery life"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 249.99,
      image: "https://placehold.co/600x400",
      description: "Fitness tracker with heart rate monitor and GPS"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://placehold.co/600x400",
      description: "Portable waterproof speaker with 360-degree sound"
    },
    {
      id: 4,
      name: "Laptop Stand",
      price: 49.99,
      image: "https://placehold.co/600x400",
      description: "Ergonomic aluminum stand for laptops and tablets"
    },
    {
      id: 5,
      name: "Webcam",
      price: 129.99,
      image: "https://placehold.co/600x400",
      description: "4K webcam with auto-focus and noise reduction"
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "https://placehold.co/600x400",
      description: "RGB backlit keyboard with custom switches"
    }
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const cartItem = {
      ...product,
      cartId: crypto.randomUUID()
    };
    setCart([...cart, cartItem]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const cartTotal = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <>
      <Header storeName="Component Corner" cartCount={cart.length} />

      <section className="hero">
        <h2>Shop the Best Tech</h2>
        <p>Quality electronics at unbeatable prices</p>
        <button>Shop Now</button>
      </section>

      <div className="product-cards-container">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>

      <section className="cart-section">
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            {cart.map(item => (
              <CartItem
                key={item.cartId}
                item={item}
                onRemove={removeFromCart}
              />
            ))}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </section>

      <footer className="footer">
        © 2026 Component Corner | Contact: info@componentcorner.com
      </footer>
    </>
  );
}

export default App;
