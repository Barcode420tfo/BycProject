import { useMemo, useState } from "react";
import searchIcon from "../assets/icons/search.png";
import heartIcon from "../assets/icons/heart.png";
import profileIcon from "../assets/icons/profile.png";
import cartIcon from "../assets/icons/cart.png";

const navLinks = [
  { label: "Shop", href: "#new-arrivals" },
  { label: "Categories", href: "#categories" },
  { label: "Story", href: "#home" },
  { label: "Support", href: "#footer" },
];

const iconButtons = [
  { icon: searchIcon, alt: "Search", type: "search" },
  { icon: heartIcon, alt: "Wishlist" },
  { icon: profileIcon, alt: "Profile" },
  { icon: cartIcon, alt: "Cart" },
];

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const filteredPrompt = useMemo(() => {
    if (!searchValue.trim()) {
      return "Try: boxer, bra, pajama, Airmery";
    }

    return `Searching for "${searchValue}"`;
  }, [searchValue]);

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-shell">
          <a className="brand-mark" href="#home" aria-label="BYC home">
            <img src="/logo.png" alt="BYC logo" />
          </a>

          <button
            className="mobile-menu-toggle"
            type="button"
            aria-expanded={showMobileMenu}
            aria-label="Toggle navigation menu"
            onClick={() => setShowMobileMenu((currentValue) => !currentValue)}
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`nav-content ${showMobileMenu ? "nav-open" : ""}`}>
            <div className="nav-links">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <div className={`nav-search ${showSearch ? "search-visible" : ""}`}>
                <label className="visually-hidden" htmlFor="site-search">
                  Search products
                </label>
                <input
                  id="site-search"
                  type="search"
                  value={searchValue}
                  onChange={(event) => setSearchValue(event.target.value)}
                  placeholder="Search BYC essentials"
                />
                <span>{filteredPrompt}</span>
              </div>

              <div className="icon-buttons">
                {iconButtons.map((item) => (
                  <button
                    key={item.alt}
                    className="icon-button"
                    type="button"
                    aria-label={item.alt}
                    onClick={() => {
                      if (item.type === "search") {
                        setShowSearch((currentValue) => !currentValue);
                      }
                    }}
                  >
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
