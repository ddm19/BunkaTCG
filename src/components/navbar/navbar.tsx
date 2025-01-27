import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import "./navbar.scss";
import Cart from "components/cart/cart";
import { toggleCart } from "redux/cartSlice";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar()
{
    const dispatch = useDispatch();
    const cartCount = useSelector((state: RootState) => state.cart.products.length);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    <img src="/logo.svg" alt="BunkaTCG" />
                    BunkaTCG
                </Link>

                <button className="navbar__menuButton" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <div className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
                    <Link to="/" className="navbar__link" onClick={() => setMenuOpen(false)}>Inicio</Link>
                    <Link to="/about" className="navbar__link" onClick={() => setMenuOpen(false)}>Aviso Legal</Link>
                </div>

                <button className="navbar__cart" onClick={() => dispatch(toggleCart())}>
                    <span className="navbar__badge">{cartCount}</span>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </nav>
            <Cart />
        </>
    );
}
