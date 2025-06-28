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
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            getProductById(id).then((data) => {
                setProduct(data);
                setLoading(false);
            });
        }
    }, [id]);
    useEffect(() => {
        if (product && product?.stock <= 0) {
            product.available = false;
        }
    }, [product]);

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
                <p className="productPage__stock">Disponibles: {product.stock}</p>
                <input type="number" className="productPage__quantity" min="1" max={product.stock} defaultValue="1" onChange={(e) => setQuantity(parseInt(e.target.value))} />
                <button className={`productPage__button ${!product.available ? "productPage__button--disabled" : ""}`} disabled={!product.available} onClick={() => handleAddToCart(product, dispatch, quantity)}>Añadir al carrito</button>
                {!product.available &&
                    <button className={`productPage__button`} disabled={!product.available}>Notificarme cuando esté disponible</button>
                }
            </div>
        </div>
    );
}
export const handleAddToCart = (product: ProductType, dispatch: any, quantity: number = 1) => {


    if (product != null && product.available && product.stock > 0) {
        dispatch(addToCart({ product: product, quantityToAdd: quantity }));
        dispatch(showNotification("Producto añadido al carrito."));
    }

    else
        dispatch(showNotification("Producto no disponible."));
};