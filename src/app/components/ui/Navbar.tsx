"use client"
import React, { useState } from 'react';
import Link from 'next/link';

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

    return (
        <nav className="bg-yellow-400 p-2">
            <ul className="flex list-none m-0 p-0 justify-center">
                {navbarOptions.map((option, index) => (
                    <li key={index} className="mx-4 relative">
                        {option === 'Servicios' ? (
                            <div
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}
                                className="text-center"
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