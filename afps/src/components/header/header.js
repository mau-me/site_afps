import { Link } from 'react-router-dom';
import './header.css';

function Header() {
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/assets/imgs/escudo.png" alt="Logo" />
                    <h1>AFPS</h1>
                </div>
                <ul className="menu">
                    <li><a href="/contato">Galeria</a></li>
                    <li><a href="/contato">Mensalidades</a></li>
                    <li> <Link to={'/register'}>
                        <a href="/contato">Register</a>
                    </Link></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header