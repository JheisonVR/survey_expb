"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logoExportBrands from '/public/logoExportBrands.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`bg-yellow-400 p-2 fixed top-0 left-0 right-0 z-50 rounded-sm transition-all duration-300 ${isScrolled ? 'h-10' : 'h-10'}`}>
            <div className="flex justify-center items-center">
                <Image 
                src={logoExportBrands} alt="Logo Export Brands" 
                width={60} 
                height={60} />
            </div>
        </nav>
    );
};

export default Navbar;
