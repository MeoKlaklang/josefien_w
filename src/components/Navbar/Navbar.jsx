import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const location = useLocation();

  /*
    NAVBAR SHOW / HIDE ON SCROLL
  */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
        Wanneer mobile menu open is:
        navbar altijd zichtbaar houden.
      */
      if (mobileOpen) {
        setVisible(true);
        return;
      }

      /*
        Bovenaan pagina altijd zichtbaar.
      */
      if (currentScrollY < 20) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      /*
        Scroll naar beneden.
      */
      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      }

      /*
        Scroll naar boven.
      */
      if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      /*
        Navbar terug tonen wanneer
        gebruiker stopt met scrollen.
      */
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
  }, [mobileOpen]);

  /*
    MENU SLUITEN WANNEER
    DE PAGINA VERANDERT
  */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /*
    BODY NIET LATEN SCROLLEN
    WANNEER MOBILE MENU OPEN IS
  */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={`navbar ${
        visible ? "navbar-visible" : "navbar-hidden"
      } ${mobileOpen ? "navbar-menu-open" : ""}`}
    >
      <div className="navbar-inner container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="navbar-logo"
          aria-label="Ga naar home"
          onClick={closeMobileMenu}
        >
          <span></span>
        </NavLink>


        {/* DESKTOP NAVIGATION */}
        <nav className="navbar-links">

          <NavLink
            to="/"
            end
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


        {/* DESKTOP CTA */}
        <NavLink
          to="/afspraak"
          className="navbar-cta"
        >
          Afspraak
        </NavLink>


        {/* MOBILE BUTTON */}
        <button
          className={`navbar-menu-button ${
            mobileOpen ? "open" : ""
          }`}
          type="button"
          aria-label={
            mobileOpen
              ? "Sluit menu"
              : "Open menu"
          }
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen((prev) => !prev)
          }
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`navbar-mobile-menu ${
          mobileOpen ? "open" : ""
        }`}
      >
        <nav className="navbar-mobile-links">

          <NavLink
            to="/"
            end
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <span className="mobile-nav-number">
              01
            </span>

            <span>
              Home
            </span>
          </NavLink>


          <NavLink
            to="/over-mij"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <span className="mobile-nav-number">
              02
            </span>

            <span>
              Over mij
            </span>
          </NavLink>


          <NavLink
            to="/werkwijze"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <span className="mobile-nav-number">
              03
            </span>

            <span>
              Werkwijze
            </span>
          </NavLink>


          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <span className="mobile-nav-number">
              04
            </span>

            <span>
              Contact
            </span>
          </NavLink>


          <NavLink
            to="/praktisch"
            onClick={closeMobileMenu}
            className={({ isActive }) =>
              isActive ? "active" : ""
            }
          >
            <span className="mobile-nav-number">
              05
            </span>

            <span>
              Praktisch
            </span>
          </NavLink>

        </nav>


        {/* MOBILE BOTTOM */}
        <div className="navbar-mobile-bottom">

          <p>
            Psychologische begeleiding
            voor wie even vastloopt,
            zoekt of wil veranderen.
          </p>

          <NavLink
            to="/afspraak"
            className="navbar-mobile-cta"
            onClick={closeMobileMenu}
          >
            <span>
              Afspraak maken
            </span>

            <span>
              →
            </span>
          </NavLink>

        </div>

      </div>

    </header>
  );
}

export default Navbar;