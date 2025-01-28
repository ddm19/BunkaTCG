import { useDispatch } from "react-redux";
import { useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "redux/cartSlice";

export default function CheckoutButton()
{
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();




    const handleSubmit = async (e: React.FormEvent) =>
    {
        e.preventDefault();

        if (!stripe || !elements) return;

        // Validar los inputs
        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        if (!cardNumberElement || !cardExpiryElement || !cardCvcElement)
        {
            setErrorMessage("Por favor, completa todos los campos.");
            return;
        }

        // Crear token de pago con Stripe
        const result = await stripe.createToken(cardNumberElement);

        if (result.error)
        {
            setErrorMessage(result.error.message || "Error al procesar el pago.");
        } else
        {
            console.log("Token generado:", result.token);
            alert("Pago realizado con éxito (modo prueba)");
            dispatch(clearCart());

            setErrorMessage(null);
            navigate("/");


        }
    };

    return (
        <form className="checkout__form" onSubmit={(e) => handleSubmit(e)}>
            <div className="checkout__formGroup">
                <label className="checkout__label">Número de Tarjeta</label>
                <CardNumberElement className="checkout__input" options={{ style: { base: { color: "white" } }, showIcon: true }} />
            </div>

            <div className="checkout__formGroup">
                <label className="checkout__label">Fecha de Expiración</label>
                <CardExpiryElement className="checkout__input" options={{ style: { base: { color: "white" } } }} />
            </div>

            <div className="checkout__formGroup">
                <label className="checkout__label">CVC</label>
                <CardCvcElement className="checkout__input" options={{ style: { base: { color: "white" } } }} />
            </div>
            {errorMessage && <p className="checkout__error"><span className="checkout__errorText">{errorMessage}</span></p>}

            <button className="checkout__button" type="submit" disabled={!stripe} >
                Pagar
            </button>
        </form>
    );
}
