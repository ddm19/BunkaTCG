import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import "./navbar.scss";
import Cart from "components/cart/cart";
import { toggleCart } from "redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Navbar()
{
    const dispatch = useDispatch();
    const cartCount = useSelector((state: RootState) => state.cart.products.length);



    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar__logo">
                    <img src="/logo.svg" alt="BunkaTCG" />
                    BunkaTCG
                </Link>
                <div className="navbar__links">
                    <Link to="/" className="navbar__link">Inicio</Link>

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
