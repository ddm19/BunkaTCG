import { ProductType } from "types/product";
import { Link } from "react-router-dom";
import "./product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleAddToCart } from "pages/product/productPage";
import { useDispatch } from "react-redux";

interface ProductProps {
    product: ProductType;
    classname?: string;
    cartButton?: boolean;
}

export const priceFormatter = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
});


export default function ProductComponent(props: ProductProps) {
    const { product, classname, cartButton = true } = props;
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        handleAddToCart(product, dispatch);
        e.stopPropagation();
        e.preventDefault();
    };


    return (
        <Link to={`/product/${product.id}`} className={`product__button ${!product.available ? "product__button--disabled" : ""}`} onClick={(e) => { !product.available ? e.preventDefault() : null }}>
            <div className={`${classname || ""}product`}>
                <div className="product__imageContainer">
                    {!product.available && <img src="/images/noDisponible.png" alt="Agotado" className="product__soldout" />}
                    <img src={product.image} alt={product.name} className={`product__image ${product.available ? "" : "product__image--soldout"}`} />
                </div>

                <h2 className="product__title">{product.name}</h2>
                <p className="product__description">{product.shortDescription}</p>
                <p className="product__price">{priceFormatter.format(product.price)}</p>
                {product.available && cartButton &&
                    <button className="product__shopButton" onClick={(e) => handleClick(e)}><FontAwesomeIcon icon={faPlus} className="product__shopButtonIcon--small" /><FontAwesomeIcon icon={faCartShopping} /></button>
                }
            </div>
        </Link>

    );
}
