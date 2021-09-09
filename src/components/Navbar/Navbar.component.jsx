import If from '../If/If.component';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return <>
        <ul>

            <If condition={!props.authenticated}>
                <li>
                    <Link to="/">Login</Link>
                </li>
            </If>

            <If condition={props.authenticated}>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/submitVideo">Enviar vídeo</Link>
                </li>
                <li>
                    <Link to="/logout">Sair</Link>
                </li>
            </If>

        </ul>
    </>;
}

export default Navbar;