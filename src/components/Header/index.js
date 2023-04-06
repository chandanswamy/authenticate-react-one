import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-bar">
    <div className="nav-website-logo-logout-button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="nav-menu-desktop">
        <li className="nav-menu-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="nav-menu-item">
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-icon-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-button-icon"
        />
      </button>
      <button type="button" className="logout-button">
        Logout
      </button>
    </div>
    <div className="nav-menu-mobile">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="nav-link-icon"
        />
      </Link>
      <Link to="/products">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="nav-link-icon"
        />
      </Link>
      <Link to="/cart">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="nav-link-icon"
        />
      </Link>
    </div>
  </nav>
)

export default Header
