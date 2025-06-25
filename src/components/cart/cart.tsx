import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { toggleCart, clearCart } from "redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart, faAnglesRight, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import "./cart.scss";
import { useNavigate } from "react-router-dom";
import CartList from "./components/cartList";

export default function Cart() {
    const dispatch = useDispatch();
    const { products, isOpen } = useSelector((state: RootState) => state.cart);
    const navigate = useNavigate();


    return (
        <div className={`cart ${isOpen ? "cart--open" : ""}`}>
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

                    <CartList

                    />
                    <div className="cart__buttons">
                        <button className="cart__clear" onClick={() => dispatch(clearCart())}>
                            <FontAwesomeIcon icon={faTrash} />

                            Vaciar Carrito
                        </button>
                        <button className="cart__checkout" onClick={() => { dispatch(toggleCart()); navigate("/checkout"); }} ><FontAwesomeIcon icon={faCreditCard} /> Finalizar Compra</button>

                    </div>

                </>
            )}
        </div >
    );
}
