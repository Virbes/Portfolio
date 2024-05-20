import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../components/home/Home';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Home />} />

            </Routes>
        </Router>
    );
}
