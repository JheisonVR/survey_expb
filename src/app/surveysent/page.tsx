'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function SurveySent() {
    const router = useRouter();

    useEffect(() => {
        // Prevent going back to the previous page
        window.history.pushState(null, '', window.location.href);
        window.addEventListener('popstate', () => {
            window.history.pushState(null, '', window.location.href);
        });

        return () => {
            window.removeEventListener('popstate', () => {
                window.history.pushState(null, '', window.location.href);
            });
        };
    }, []);

    const handleBackToHome = () => {
        router.push('/');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <Image src="/logoExportBrands.png" alt="Logo" width={200} height={200} className="mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-800 mb-4">¡Gracias por tu interes!</h1>
                <p className="text-gray-600 mb-8">Nuestro equipo se pondra en contacto contigo para brindarte mayor información.</p>
                <button
                    onClick={handleBackToHome}
                    className="px-6 py-2 bg-[#FACC15] text-slate-500 rounded-lg shadow-md hover:text-slate-900 hover:bg-[#eabd08] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                    Home
                </button>
            </div>
        </div>
    );
};