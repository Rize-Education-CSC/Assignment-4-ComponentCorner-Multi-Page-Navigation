import "./Header.css";

function Header({ storeName, cartCount }) {
  return (
    <header className="header">
      <h1>{storeName}</h1>

      <div className="cart-container">
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && (
          <span className="cart-badge">{cartCount}</span>
        )}
      </div>
    </header>
  );
}

export default Header;
