import { Link } from 'react-router-dom';
import './legal.scss';

export default function CookiesPage()
{
    return (
        <div className="policy">
            <h1 className='policy__title'>Política de Cookies</h1>
            <p className='policy__text'>
                Bunka TCG utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio web.
            </p>
            <span className='policy--bold'>Fecha de vigencia: 31 de marzo de 2024</span>
            <span className='policy--bold'>Última actualización: 31 de marzo de 2024</span>
            <h2 className='policy--bold'>¿Qué son las cookies?</h2>
            <p className='policy__text'>
                Esta Política de cookies explica qué son las cookies y cómo las utilizamos,
                los tipos de cookies que utilizamos, es decir, la información que
                recopilamos mediante el uso de cookies y cómo se utiliza esa información,
                y cómo administrar la conguración de las cookies.
                Las cookies son pequeños archivos de texto que se utilizan para almacenar
                pequeños fragmentos de información. Se almacenan en su dispositivo
                cuando el sitio web se carga en su navegador. Estas cookies nos ayudan a
                que el sitio web funcione correctamente, hacerlo más seguro, brindar una
                mejor experiencia de usuario y comprender cómo funciona el sitio web y
                analizar qué funciona y dónde necesita mejorar
            </p>
            <span className='policy--bold'>¿Cómo utilizamos las cookies?</span>
            <p className='policy__text'>
                Como la mayoría de los servicios en línea, nuestro sitio web utiliza cookies
                propias y de terceros para varios propósitos. Las cookies de origen son en
                su mayoría necesarias para que el sitio web funcione correctamente y no
                recopilan ninguno de sus datos de identicación personal.
                Las cookies de terceros utilizadas en nuestro sitio web son principalmente
                para comprender cómo funciona el sitio web, cómo interactúa con nuestro
                sitio web, mantener nuestros servicios seguros, proporcionar anuncios que
                sean relevantes para usted y, en general, brindarle un usuario mejor y
                mejorado. experiencia y ayudar a acelerar sus futuras interacciones con
                nuestro sitio web
            </p>
            <span className='policy--bold'>Tipos de cookies que utilizamos </span>
            <span className='policy--bold'>Administrar preferencia de cookies</span>
            <p className='policy__text'>
                Puede cambiar sus preferencias de cookies en cualquier momento haciendo clic en el
                botón de arriba. Esto le permitirá volver a visitar el banner de consentimiento de cookies
                y cambiar sus preferencias o retirar su consentimiento de inmediato.
                bunkatcg.es únicamente utiliza cookies que permiten el funcionamiento y la prestación
                de los servicios ofrecidos en la misma y que en ningún caso tratan datos de conexión
                y/o de los dispositivos para nes estadísticos ni captan hábitos de navegación para
                nes publicitarios.Por ello, al acceder a nuestra web, en cumplimiento del artículo 22 de
                la Ley de Servicios de la Sociedad de la Información le hemos solicitado su
                consentimiento para su uso.El suministro de datos personales a través de nuestro portal
                y el consentimiento para el uso de cookies requiere una edad mínima de 14 años y la
                aceptación expresa de nuestra Política de Privacidad.
            </p>
            <p className='policy__text'>
                Puede cambiar sus preferencias de cookies en cualquier momento haciendo clic en el
                botón de arriba. Esto le permitirá volver a visitar el banner de consentimiento de cookies
                y cambiar sus preferencias o retirar su consentimiento de inmediato.
                bunkatcg.es únicamente utiliza cookies que permiten el funcionamiento y la prestación
                de los servicios ofrecidos en la misma y que en ningún caso tratan datos de conexión
                y/o de los dispositivos para nes estadísticos ni captan hábitos de navegación para
                nes publicitarios.Por ello, al acceder a nuestra web, en cumplimiento del artículo 22 de
                la Ley de Servicios de la Sociedad de la Información le hemos solicitado su
                consentimiento para su uso.El suministro de datos personales a través de nuestro portal
                y el consentimiento para el uso de cookies requiere una edad mínima de 14 años y la
                aceptación expresa de nuestra Política de Privacidad.

            </p>
            <ul className='policy__list'>
                <span className='policy--bold'>Chrome</span>
                <li className='policy__listItem'>Configuración → Mostrar opciones avanzadas → Privacidad → Configuración de contenido</li>
                <span className='policy--bold'>Firefox</span>
                <li className='policy__listItem'>Herramientas → Opciones → Privacidad → Historial → Configuración Personalizada</li>
                <span className='policy--bold'>Internet Explorer</span>
                <li className='policy__listItem'>Herramientas → Opciones de Internet → Privacidad → Configuración</li>
                <span className='policy--bold'>Opera</span>
                <li className='policy__listItem'>Herramientas → Preferencias → Editar preferencias → Cookies</li>
                <span className='policy--bold'>Safari</span>
                <li className='policy__listItem'>Preferencias → Seguridad</li>
                <span className='policy--bold'>Edge</span>
                <li className='policy__listItem'>Conguración → Ver Configuración avanzada → Privacidad y servicios → Cookies</li>
            </ul>
            <span className='policy--bold'>Cookies de redes sociales</span>
            <p className='policy__text'>
                Bunka TCG incorpora plugins de redes sociales, que permiten acceder a las mismas a
                partir del Sitio Web. Por esta razón, las cookies de redes sociales pueden almacenarse
                en el navegador del Usuario. Los titulares de dichas redes sociales disponen de sus
                propias políticas de protección de datos y de cookies, siendo ellos mismos, en cada
                caso, responsables de sus propios cheros y de sus propias prácticas de privacidad. El
                Usuario debe referirse a las mismas para informarse acerca de dichas cookies y, en su
                caso, del tratamiento de sus datos personales. Únicamente a título informativo se
                indican a continuación los enlaces en los que se pueden consultar dichas políticas de
                privacidad y/o de cookies:
            </p>
            <span className='policy--bold'>Para más información</span>
            <ul className='policy__list'>
                <li className='policy__listItem'><Link to='https://www.facebook.com/policies/cookies/'>Facebook</Link></li>
                <li className='policy__listItem'><Link to='https://twitter.com/es/privacy'>Twitter</Link></li>
                <li className='policy__listItem'><Link to='https://privacycenter.instagram.com/policies/cookies/'>Instagram</Link></li>
                <li className='policy__listItem'><Link to='https://policies.google.com/technologies/cookies?hl=es'>YouTube</Link></li>
                <li className='policy__listItem'> <Link to='https://policy.pinterest.com/es/privacy-policy'> Pinterest </Link> </li>
                <li className='policy__listItem'> <Link to='https://www.linkedin.com/legal/cookie-policy?trk=hp-cookies'> LinkedIn </Link> </li>


            </ul>


        </div>


    );
}
