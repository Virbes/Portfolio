import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer className="container mt-5">
            <br /><br /><br />
            <hr className="mb-2" />

            <div className="d-flex justify-between">
                <small className="text-dark">2023 - VIRSATO </small>
                <small className="text-dark"><FontAwesomeIcon icon={faReact} /> React JS </small>
            </div>

            <br />
        </footer>
    );
}
