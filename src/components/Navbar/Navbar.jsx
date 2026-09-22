import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 20) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      }

      if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setVisible(true);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  return (
    <header
      className={`navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      }`}
    >
      <div className="navbar-inner container">
        <NavLink
          to="/"
          className="navbar-logo"
          aria-label="Ga naar home"
        >
          <span></span>
        </NavLink>

        <nav className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/over-mij"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Over mij
          </NavLink>

          <NavLink
            to="/werkwijze"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Werkwijze
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/praktisch"
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            Praktisch
          </NavLink>
        </nav>

        <NavLink
          to="/afspraak"
          className="navbar-cta"
        >
          Afspraak
        </NavLink>

        <button
          className="navbar-menu-button"
          type="button"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;