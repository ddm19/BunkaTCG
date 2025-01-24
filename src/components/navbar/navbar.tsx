import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./navbar.scss";

export default function Navbar()
{
    const [cartCount, setCartCount] = useState(0);

    useEffect(() =>
    {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const totalItems = savedCart.reduce((acc: number, item: any) => acc + item.quantity, 0);
        setCartCount(totalItems);
    }, []);

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__logo">
                <img src="/logo.svg" alt="BunkaTCG" />
                BunkaTCG
            </Link>
            <div className="navbar__links">
                <Link to="/" className="navbar__link">Inicio</Link>

            </div>
            <Link to="/checkout" className="navbar__cart">
                🛒 {cartCount > 0 && <span className="navbar__cartCount">{cartCount}</span>}
            </Link>
        </nav>
    );
}
