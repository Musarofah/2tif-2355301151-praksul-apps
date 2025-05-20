// src/pages/guest/Guest.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderGuest from '../../components/guest/HeaderGuest';
import Footer from '../../components/guest/Footer';
import About from '../../components/guest/About';
import HeroSection from '../../components/guest/HeroSection';
import ListMenu from '../../components/guest/ListMenu';
import TopProducts from '../../components/guest/TopProduk';
import Testimoni from '../../components/guest/Testimoni';
import PopularDestinations from '../../components/guest/PopularDestinations';

const Guest = () => {
    return (
        <div>
            <HeaderGuest />
            <main>
                <HeroSection />
                <About />
                <ListMenu/>
                <TopProducts/>
                <PopularDestinations/>
                <Testimoni/>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Guest;
