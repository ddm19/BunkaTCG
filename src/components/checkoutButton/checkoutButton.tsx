import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "redux/cartSlice";

export default function CheckoutButton() {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simulate successful payment
        alert("Pago realizado con éxito (modo prueba)");
        dispatch(clearCart());
        setErrorMessage(null);
        navigate("/");
    };

    return (
        <form className="checkout__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="checkout__formGroup">
                <label className="checkout__label">Número de Tarjeta</label>
                <input className="checkout__input" style={{ color: "white" }} />
            </div>

            <div className="checkout__formGroup">
                <label className="checkout__label">Fecha de Expiración</label>
                <input className="checkout__input" style={{ color: "white" }} />
            </div>

            <div className="checkout__formGroup">
                <label className="checkout__label">CVC</label>
                <input className="checkout__input" style={{ color: "white" }} />
            </div>
            
            {errorMessage && <p className="checkout__error"><span className="checkout__errorText">{errorMessage}</span></p>}

            <button className="checkout__button" type="submit">
                Pagar
            </button>
        </form>
    );
}