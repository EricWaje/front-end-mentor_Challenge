import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import Layout from './Layout';

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
