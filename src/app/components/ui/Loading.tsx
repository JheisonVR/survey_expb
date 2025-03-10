import React from 'react';
import Image from 'next/image';

const Loading: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative">
                <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/logoExportBrands.png" alt="Logo" width={24} height={24} />
                </div>
            </div>
            <style jsx>{`
                .loader {
                    border-top-color: #3498db;
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Loading;