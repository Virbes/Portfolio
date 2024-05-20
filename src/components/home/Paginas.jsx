import { Link } from 'react-router-dom';

export const Paginas = () => {
    return (
        <div className="container mt-5 mb-5">
            <span className="text-dark">PAGINAS</span>

            <hr className="mb-2" />

            <div className="grid grid-cols-2 gap-4">
                <Link to="/" className="rounded-6 bg-light p-5">
                    <p>Blog</p>
                    <span className="text-dark">Lees wat ik met de wereled deel</span>
                </Link>
                <Link to="/" className="rounded-6 bg-light p-5">
                    <p>Portfolio</p>
                    <span className="text-dark">Mijn brandstof om te werken</span>
                </Link>
                <Link to="/" className="rounded-6 bg-light p-5">
                    <p>Spotify playlist</p>
                    <span className="text-dark">Lees wat ik met de wereled deel</span>
                </Link>
                <Link to="/" className="rounded-6 bg-light p-5">
                    <p>Contacto</p>
                    <span className="text-dark">Open voor uitdagingen!</span>
                </Link>
            </div>

        </div>
    );
}
