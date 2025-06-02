import { ProductType } from "types/product";
import { Link } from "react-router-dom";
import "./product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus } from "@fortawesome/free-solid-svg-icons";
import { handleAddToCart } from "pages/product/productPage";
import { useDispatch } from "react-redux";

interface ProductProps
{
    product: ProductType;
    classname?: string;
}

export default function ProductComponent(props: ProductProps)
{
    const { product, classname } = props;
    const dispatch = useDispatch();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    {
        handleAddToCart(product, dispatch);
        e.stopPropagation();
        e.preventDefault();
    };


    return (
        <Link to={`/product/${product.id}`} className={`product__button ${!product.available ? "product__button--disabled" : ""}`}>
            <div className={`${classname || ""} product`}>
                <div className="product__imageContainer">
                    {!product.available && <img src="/images/noDisponible.png" alt="Agotado" className="product__soldout" />}
                    <img src={`data:image/png;base64,${product.image}`} alt={product.name} className={`product__image ${product.available ? "" : "product__image--soldout"}`} />

                </div>

                <h2 className="product__title">{product.name}</h2>
                <p className="product__description">{product.description}</p>
                <p className="product__price">{product.price}€</p>
                {product.available &&
                    <button className="product__shopButton" onClick={(e) => handleClick(e)}><FontAwesomeIcon icon={faPlus} className="product__shopButtonIcon--small" /><FontAwesomeIcon icon={faCartShopping} /></button>
                }
            </div>
        </Link>

    );
}
