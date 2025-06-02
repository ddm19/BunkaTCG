import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import "./checkout.scss";
import CheckoutButton from "components/checkoutButton/checkoutButton";


export default function Checkout()
{
    const products = useSelector((state: RootState) => state.cart.products);


    return (
        //set theme for stripe
            <div className="checkout">
                <h1 className="checkout__title">Finalizar Compra</h1>

                {products.length === 0 ? (
                    <p className="checkout__empty">No hay productos en el carrito.</p>
                ) : (
                    <div className="checkout__summary">
                        <h2 className="checkout__subtitle">Resumen del Pedido</h2>
                        <ul className="checkout__list">
                            {products.map((product) => (
                                <li key={product.id} className="checkout__item">
                                    <img src={product.image} alt={product.name} className="checkout__image" />
                                    <div className="checkout__details">
                                        <p className="checkout__name">{product.name}</p>
                                        <p className="checkout__quantity">Cantidad: {product.quantity}</p>
                                        <p className="checkout__price">{product.price * product.quantity}€</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="checkout__total">
                            Total: {products.reduce((sum, p) => sum + p.price * p.quantity, 0)}€
                        </p>
                        <CheckoutButton />
                    </div>
                )}
            </div>
    );
}
