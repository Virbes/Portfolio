import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Paginas } from './Paginas';
import { Skills } from './Skills';
import { Hero } from './Hero';

export const Home = () => {
    return (
        <div className="__className_9c9965">

            <Header />

            <Hero />
            <Paginas />
            <Skills />

            <Footer />
        </div>
    );
}
