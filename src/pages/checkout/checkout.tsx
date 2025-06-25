import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import "./checkout.scss";
import CheckoutButton from "components/checkoutButton/checkoutButton";
import CartList, { normalizePrice } from "components/cart/components/cartList";


export default function Checkout() {
    const products = useSelector((state: RootState) => state.cart.products);


    return (
        <div className="checkout">
            <h1 className="checkout__title">Finalizar Compra</h1>

            {products.length === 0 ? (
                <p className="checkout__empty">No hay productos en el carrito.</p>
            ) : (
                <div className="checkout__summary">
                    <h2 className="checkout__subtitle">Resumen del Pedido</h2>
                    <CartList isFullWidth />
                    <p className="checkout__total">
                        Total: {normalizePrice(products.reduce((sum, p) => sum + p.price * p.quantity, 0))}€
                    </p>
                    <CheckoutButton />
                </div>
            )}
        </div>
    );
}
