import { Link } from "react-router-dom";
import "../paymentSuccess/paymentSuccess.scss";

const PaymentError = () => {
    return (
        <div className="paymentMessage">
            <h1>Error en el pago</h1>
            <img src="\images\pigeon-sad.gif" className="paymentMessage__image" />
            <p>Lo sentimos, ha ocurrido un error al procesar tu pago.</p>
            <p>Por favor, inténtalo de nuevo o contacta con nosotros si el problema persiste.</p>
            <div className="paymentMessage__links">
                <Link to="/checkout" className="paymentMessage__link">Volver a intentar</Link>
                <Link to="/" className="paymentMessage__link">Volver a inicio</Link>
            </div>
            <p>¡Gracias por tu comprensión!</p>
        </div>
    );
};

export default PaymentError;
