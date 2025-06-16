import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "services/products";
import { ProductType } from "types/product";
import Loading from "components/loading/loading";
import "./productPage.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "redux/cartSlice";
import { showNotification } from "redux/notificationSlice";


export default function ProductPage() {
    const { id } = useParams<{ id: string; }>();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            getProductById(Number(id)).then((data) => {
                setProduct(data);
                setLoading(false);
            });
        }
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <p className="productPage--notFound">Producto no encontrado.</p>;
    }

    return (
        <div className="productPage">
            <img src={product.image} alt={product.name} className="productPage__image" />
            <div className="productPage__info">
                <h1 className="productPage__title">{product.name}</h1>
                <p className="productPage__description">{product.description}</p>
                <p className="productPage__price">{product.price}€</p>
                <button className={`productPage__button ${!product.available ? "productPage__button--disabled" : ""}`} disabled={!product.available} onClick={() => handleAddToCart(product, dispatch)}>Añadir al carrito</button>
                {!product.available &&
                    <button className={`productPage__button`} disabled={!product.available}>Notificarme cuando esté disponible</button>
                }
            </div>
        </div>
    );
}
export const handleAddToCart = (product: ProductType, dispatch: any) => {
    if (product != null && product.available && product.stock > 0) {
        dispatch(addToCart(product));
        dispatch(showNotification("Producto añadido al carrito."));
    }

    else
        dispatch(showNotification("Producto no disponible."));
};