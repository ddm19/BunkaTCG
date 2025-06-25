import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeFromCart } from "redux/cartSlice";
import { RootState } from "redux/store";

interface CartListProps {
    isFullWidth?: boolean;
}

export const normalizePrice = (price: number) => {
    return price.toFixed(2).replace(".", ",");
}

const CartList = (props: CartListProps) => {
    const { isFullWidth = false } = props;

    const dispatch = useDispatch();
    const { products } = useSelector((state: RootState) => state.cart);

    const handleUpdateQuantity = (id: number, quantity: number) => {
        const product = products.find((product) => product.id === id);

        if (product != null && product.stock >= quantity && quantity > 0)
            dispatch(updateQuantity({ id, quantity }));
        else if (quantity <= 0) {
            dispatch(removeFromCart(id));
        }
    };


    return (
        <ul className={`cart__list ${isFullWidth ? "cart__list--fullWidth" : ""}`}>
            {products.map((product) => (
                <li key={product.id} className="cart__item">
                    <img src={product.image} alt={product.name} className="cart__image" />
                    <div className="cart__details">
                        <p className="cart__name">{product.name}</p>
                        <p className="cart__price">{normalizePrice(product.price * product.quantity)}€</p>

                        <div className="cart__quantity">
                            <button
                                className="cart__quantityButton"
                                onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>

                            <input
                                type="number"
                                min="1"
                                max={product.stock}
                                readOnly
                                value={product.quantity}
                                onChange={(e) =>
                                    handleUpdateQuantity(product.id, parseInt(e.target.value) || 1)
                                }
                            />
                            <button
                                className="cart__quantityButton"
                                onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                        <button
                            className="cart__remove"
                            onClick={() => dispatch(removeFromCart(product.id))}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}
export default CartList;
