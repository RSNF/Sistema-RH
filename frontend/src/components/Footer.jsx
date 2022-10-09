import './footer-style.css';
import { Link } from './Link';

export const Footer = () => {
    return (
        <footer>
            <p>Site desenvolvido por <Link href="https://github.com/natanias" text="Natanias Souza" target="blank" />, <Link href="https://github.com/patrickmps" text="Patrick Mota" target="blank" /> e <Link href="https://github.com/RSNF" text="Raimundo Santana" target="blank" /> para a disciplina de Programação Web</p>
        </footer>
    );
}