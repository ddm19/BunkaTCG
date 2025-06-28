import { useStripe } from "@stripe/react-stripe-js";
import { supabase } from "services/supabaseClient";

import "./checkoutButton.scss";
import { useState } from "react";
import Loading from "components/loading/loading";
interface CheckoutButtonProps {
    items?: { price: string; quantity: number }[];
    className?: string;
}

export default function CheckoutButton(props: CheckoutButtonProps) {
    const { items, className } = props;
    const stripe = useStripe();
    const [isLoading, setIsLoading] = useState(false);

    const checkout = async () => {
        setIsLoading(true);
        if (!stripe) {
            throw new Error("Stripe not initialized");
        }
        supabase.functions.invoke("CreateStripeCheckoutSession", {
            body: {
                line_items: items || [],
            }
        }).then((response) => {
            if (response.error) {
                throw new Error(response.error.message)
            }
            const { sessionId } = response.data;
            stripe.redirectToCheckout({ sessionId })
        }).finally(() => {
            setIsLoading(false);
        });


    }

    return (


        <div className={`cart__buttons ${className || ""}`}>
            <button disabled={isLoading} className="cart__checkout" onClick={checkout} > {isLoading ? <Loading /> : "Finalizar Pedido"}</button>
        </div>
    )

} 