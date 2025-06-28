import { Link } from "react-router";
import "./paymentSuccess.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "redux/cartSlice";

const PaymentSuccess = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);

    return (
        <div className="paymentMessage">
            <h1>Pago recibido con éxito</h1>
            <img src="images\cat-money.gif" className="paymentMessage__image" />
            <p>Gracias por tu compra. Tu pedido ha sido procesado correctamente.</p>
            <p>Recibirás un correo electrónico de confirmación con los detalles de tu pedido.</p>
            <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
            <p>Con ganas de más? Vuelve a inicio y explora nuestros productos.</p>
            <Link to="/" className="paymentMessage__link">Volver a inicio</Link>
            <p>¡Gracias por elegir Bunka Dojo!</p>
        </div>
    );
}
export default PaymentSuccess;