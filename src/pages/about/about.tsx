import { Link } from "react-router-dom";
import './about.scss';

const AboutPage = () =>
{
    return (
        <div className="aboutPage">
            <p className="aboutPage__text">Esta es nuestra información legal</p>
            <div className="aboutPage__links">
                <Link to="/legal" className="aboutPage__link">Aviso Legal</Link>
                <Link to="/privacy" className="aboutPage__link">Política de Privacidad</Link>
                <Link to="/cookies" className="aboutPage__link">Política de Cookies</Link>
                <Link to="/shipping-refund" className="aboutPage__link">Envíos y Reembolsos</Link>
            </div>


        </div>
    );
};

export default AboutPage;

