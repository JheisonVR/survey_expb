import React from 'react';
import Image from 'next/image';
import { contactInfo } from '@/seed/seed';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-black to-[#FACC15] text-white py-1 rounded-sm">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
                <div className="text-center">
                    <p className="mb-2 whitespace-pre-line">{contactInfo}</p>
                </div>
                <Image src="/logoExportBrands.png" alt="Logo" width={150} height={150} className="mb-1 hidden sm:block" />
            </div>
        </footer>
    );
};

export default Footer;