import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../assets/images/favicon.jpg'

export const Header = () => {
    return (
        <div className="container d-flex items-center justify-between" id="header">
            <a className="logo" title="Ga naar home" href="/">
                <img src={logo} className="img-fluid" />
            </a>

            <button className="bg-transparent burger rounded-50" title="Open menu">
                <FontAwesomeIcon icon={faBars} className="mt-1" />
            </button>

        </div>

    );
}
