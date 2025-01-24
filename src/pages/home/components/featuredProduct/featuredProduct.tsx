import { ProductType } from "types/product";
import "./featuredProduct.scss";
import { Link } from "react-router-dom";

interface FeaturedProductProps
{
    product: ProductType;
    classname?: string;
}

const FeaturedProductComponent = (props: FeaturedProductProps) =>
{
    const { product, classname } = props;

    return (
        <Link to={`/product/${product.id}`} >
            <div className={`${classname || ""} featuredProduct`}>
                <img src={product.image} alt={product.name} className="featuredProduct__image" />
                <div className="featuredProduct__textContainer">
                    <h2 className="featuredProduct__title">{product.name}</h2>
                    <p className="featuredProduct__description">{product.description}</p>
                    <p className="featuredProduct__price">{product.price}€</p>
                    <button className="featuredProduct__button">Cómpralo ahora</button>
                </div>

            </div>
        </Link>
    );
};

export default FeaturedProductComponent;

