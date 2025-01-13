"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoExportBrands from '/public/logoExportBrands.png';

const navbarOptions = ['Servicios', 'Diagnostico', 'Contáctenos', 'Blog'];
const dropdownOptions = [
    'Investigación y Condiciones de Acceso a Mercados Internacionales',
    'Análisis Financiero y Costeo para la Exportación',
    'Agenda Comercial en Centroamérica y Estados Unidos',
    'Tráfico Pago para Ventas E-commerce Internacionales',
    'Desarrollo de Páginas Web con alcance Internacional',
    'Asesoría Logística'
];

const Navbar: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
                {isScrolled && (
                    <Image src={logoExportBrands} alt="Logo Export Brands" width={50} height={50} />
                )}
            </div>
            <ul className={`flex list-none m-0 p-0 justify-center transition-opacity duration-0 ${isScrolled ? 'opacity-0' : 'opacity-100'}`}>
                {navbarOptions.map((option, index) => (
                    <li key={index} className={`tracking-wide mx-4 px-2 relative text-center transform transition-transform duration-300 hover:scale-105 ${index !== navbarOptions.length - 1 ? 'border-r border-black' : ''}`}>
                        {option === 'Servicios' ? (
                            <div
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                                className="text-center transform transition-transform duration-300 hover:scale-105"
                            >
                                <span>{option}</span>
                                {dropdownOpen && (
                                    <ul className="absolute left-0 bg-black list-none m-0 p-2 z-10 w-64">
                                        {dropdownOptions.map((dropdownOption, idx) => (
                                            <li key={idx} className="my-1">
                                                <Link
                                                    href="#"
                                                    className="text-white no-underline block truncate"
                                                    onMouseEnter={(e) =>
                                                        (e.currentTarget.className = 'text-yellow-400 no-underline block')
                                                    }
                                                    onMouseLeave={(e) =>
                                                        (e.currentTarget.className = 'text-white no-underline block truncate')
                                                    }
                                                >
                                                    {dropdownOption}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ) : (
                            <Link href="#" className="text-black no-underline">
                                {option}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;