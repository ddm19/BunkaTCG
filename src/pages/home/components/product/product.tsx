import { ProductType } from "types/product";
import { Link } from "react-router-dom";
import "./product.scss";

interface ProductProps
{
    product: ProductType;
    classname?: string;
}

export default function ProductComponent(props: ProductProps)
{
    const { product, classname } = props;

    return (
        <Link to={`/product/${product.id}`} className="product__button">
            <div className={`${classname || ""} product`}>
                <div className="product__imageContainer">
                    {!product.available && <img src="/images/noDisponible.png" alt="Agotado" className="product__soldout" />}
                    <img src={product.image} alt={product.name} className={`product__image ${product.available ? "" : "product__image--soldout"}`} />

                </div>

                <h2 className="product__title">{product.name}</h2>
                <p className="product__description">{product.description}</p>
                <p className="product__price">{product.price}€</p>
            </div>
        </Link>

    );
}
