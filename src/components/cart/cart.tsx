import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";
import { removeFromCart, updateQuantity, toggleCart, clearCart } from "redux/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faShoppingCart, faAnglesRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./cart.scss";

export default function Cart()
{
    const dispatch = useDispatch();
    const { products, isOpen } = useSelector((state: RootState) => state.cart);

    const handleUpdateQuantity = (id: number, quantity: number) =>
    {
        const product = products.find((product) => product.id === id);

        if (product != null && product.stock >= quantity && quantity > 0)
            dispatch(updateQuantity({ id, quantity }));
    };




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
                    <ul className="cart__list">
                        {products.map((product) => (
                            <li key={product.id} className="cart__item">
                                <img src={product.image} alt={product.name} className="cart__image" />
                                <div className="cart__details">
                                    <p className="cart__name">{product.name}</p>
                                    <p className="cart__price">{product.price * product.quantity}€</p>

                                    <div className="cart__quantity">
                                        <button className="cart__quantityButton" onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>
                                            <FontAwesomeIcon icon={faMinus} />
                                        </button>

                                        <input
                                            type="number"
                                            min="1"
                                            max={product.stock}
                                            readOnly
                                            value={product.quantity}
                                            onChange={(e) =>
                                                dispatch(updateQuantity({ id: product.id, quantity: Number(e.target.value) }))
                                            }
                                        />
                                        <button className="cart__quantityButton" onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>
                                            <FontAwesomeIcon icon={faPlus} />
                                        </button>
                                    </div>
                                    <button className="cart__remove" onClick={() => dispatch(removeFromCart(product.id))}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="cart__clear" onClick={() => dispatch(clearCart())}>
                        Vaciar Carrito
                    </button>
                </>
            )}
        </div>
    );
}
