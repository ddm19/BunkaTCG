import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { toggleCart, clearCart } from "redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import CartList from "./components/cartList";

export default function Cart() {
    const dispatch = useDispatch();
    const { products, isOpen } = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();

    const cartRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Element;

            if (
                isOpen &&
                cartRef.current &&
                !cartRef.current.contains(target) &&
                !target.closest(".product__shopButton")
            ) {
                dispatch(toggleCart());
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, dispatch]);

    return (
        <div ref={cartRef} className={`cart ${isOpen ? "cart--open" : ""}`}>
            <button className="cart__close" onClick={() => dispatch(toggleCart())}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </button>
            <h2 className="cart__title">
                <FontAwesomeIcon icon={faShoppingCart} /> Carrito
            </h2>
            {products.length === 0 ? (
                <p className="cart__empty">Tu carrito está vacío.</p>
            ) : (
                <>
                    <CartList />
                    <div className="cart__buttons">
                        <button className="cart__clear" onClick={() => dispatch(clearCart())}>
                            <FontAwesomeIcon icon={faTrash} />
                            Vaciar Carrito
                        </button>
                        <button className="cart__checkout" onClick={() => { dispatch(toggleCart()); navigate("/checkout"); }}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Ir al Carrito
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
