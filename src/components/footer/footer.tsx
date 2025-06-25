import { Link } from "react-router-dom";
import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__links">
                <Link to="/legal" className="footer__link">Aviso Legal</Link>
                <Link to="/privacy" className="footer__link">Política de Privacidad</Link>
                <Link to="/cookies" className="footer__link">Política de Cookies</Link>
                <Link to="/shipping-refund" className="footer__link">Envíos y Reembolsos</Link>
            </div>
            <p className="footer__copyright">© {new Date().getFullYear()} Bunka Dojo. Todos los derechos reservados.</p>
        </footer>
    );
}
