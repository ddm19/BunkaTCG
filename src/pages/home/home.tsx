import { useEffect, useState } from "react";
import { getFeaturedProduct, getProducts } from "services/products";
import ProductComponent from "../../components/product/product";
import { ProductType } from "types/product";
import "./home.scss";
import FeaturedProductComponent from "./components/featuredProduct/featuredProduct";
import Loading from "components/loading/loading";

export default function Home() {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [featuredProduct, setFeaturedProduct] = useState<ProductType | null>(null);
    const [visibleProducts, setVisibleProducts] = useState(4);
    const [isGoingUpVisible, setIsGoingUpVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            getProducts().then((products) => setProducts(products))
                .finally(() => setLoading(false));
            getFeaturedProduct().then((product) => setFeaturedProduct(product))
                .finally(() => setLoading(false));
        };

        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight + window.scrollY;
            const pageHeight = document.documentElement.scrollHeight;

            if (scrollPosition >= pageHeight - 100 && !isFetching && visibleProducts < products.length) {
                setLoading(true);
                setIsFetching(true);

                setTimeout(() => {
                    setVisibleProducts((prev) => prev + 4);
                    setLoading(false);
                    setIsFetching(false);
                }, 1000);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFetching, products, visibleProducts]);

    useEffect(() => {
        const handleScroll = () => {
            setIsGoingUpVisible(window.scrollY > window.innerHeight / 2);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);




    return (
        <div className="home">
            <section className="home__hero">
                <h1>Bienvenido a Bunka Dojo</h1>
                <p>Compra los mejores productos con descuentos exclusivos.</p>
            </section>

            <section className="home__featuredProduct">
                {featuredProduct && (
                    <div className="home__featuredProduct">
                        <FeaturedProductComponent product={featuredProduct} />
                    </div>
                )}
            </section>

            <h2 className="home__title">Productos destacados</h2>

            <section className="home__products">
                {products?.slice(0, visibleProducts).map((product) => (
                    <ProductComponent key={product.id} product={product} />
                ))}
            </section>

            {isGoingUpVisible && (
                <span
                    className="home__goUp"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    ↑
                </span>
            )}

            {loading && (
                <span className="home__loading">
                    <Loading />
                </span>
            )}
        </div>
    );
};
