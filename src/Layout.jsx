import { Container } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetail from './components/ItemDetail';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <Container maxWidth="container.xl">
            <Navbar />
            <Routes>
                <Route path="/" element={<ItemDetail />} />
                <Route path="/women" element={<ItemDetail />} />
                <Route path="/men" element={<ItemDetail />} />
            </Routes>
            <Footer />
        </Container>
    );
};

export default Layout;
