'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { countries } from '@/seed/seed';
import Link from 'next/link';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import AreaValuesTable from './AreaValuesTable';
import AreaRadarChart from './AreaRadarChart';

const PersonalData: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        agree: false,
    });

    const [region, setRegion] = useState('');
    const [indicativo, setIndicativo] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
    });

    interface SurveyResult {
        values: { [key: string]: number };
    }
    
    const [surveyResult, setSurveyResult] = useState<SurveyResult | null>(null);
    const chartRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchSurveyResult = async () => {
            try {
                const surveyResponse = await fetch('/api/getSurveyResult');
                const surveyResult = await surveyResponse.json();

                if (!surveyResponse.ok) {
                    throw new Error('Error fetching survey results');
                }

                console.log('Fetched survey result:', surveyResult);
                setSurveyResult(surveyResult);
            } catch (error) {
                console.error('Error fetching survey results:', error);
            }
        };

        fetchSurveyResult();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(e.target.value);
        setFormData({
            ...formData,
            country: '',
        });
        setIndicativo('');
    };

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCountry = e.target.value;
        setFormData({
            ...formData,
            country: selectedCountry,
        });
        const countryData = countries.find(country => country.pais === selectedCountry);
        setIndicativo(countryData ? countryData.indicativo : '');
    };

    const handleInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
        e.preventDefault();
        const { name, validationMessage } = e.target;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: validationMessage,
        }));
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const { name } = e.currentTarget;
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);

        try {
            // Fetch the survey results from the server
            const surveyResponse = await fetch('/api/getSurveyResult');
            const surveyResult = await surveyResponse.json();

            if (!surveyResponse.ok) {
                throw new Error('Error fetching survey results');
            }

            console.log('Fetched survey result:', surveyResult);
            setSurveyResult(surveyResult);

            // Recreate the chart and table components
            let chartImgData = '';
            if (chartRef.current) {
                const chartCanvas = await html2canvas(chartRef.current);
                chartImgData = chartCanvas.toDataURL('image/png');
            }

            let tableImgData = '';
            if (tableRef.current) {
                const tableCanvas = await html2canvas(tableRef.current, { scale: 2 });
                tableImgData = tableCanvas.toDataURL('image/png');
            }

            // Load the footer image
            const footerImg = await fetch('/Footer Export Brands.png');
            const footerBlob = await footerImg.blob();
            const footerImgData = URL.createObjectURL(footerBlob);

            // Generate the PDF
            const pdf = new jsPDF();
            const title = `Export Brands Resultados - ${new Date().toLocaleString()}`;
            pdf.text(title, 40, 10);
            pdf.addImage(chartImgData, 'PNG', 10, 20, 190, 140);
            pdf.addImage(tableImgData, 'PNG', 50, 140, 100, 100);
            pdf.addImage(footerImgData, 'PNG', 0, 270, 210, 25);
            const pdfBlob = pdf.output('blob');

            // Create a link to download the PDF
            const link = document.createElement('a');
            link.href = URL.createObjectURL(pdfBlob);
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            link.download = `Export_Brands_results_${timestamp}.pdf`;
            link.click();

            // Send the email
            const emailResponse = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!emailResponse.ok) {
                throw new Error('Error sending email');
            }

            const emailResult = await emailResponse.json();
            console.log(emailResult.message);

            // Redirect to /surveysent
            router.push('/surveysent');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Filter countries based on the selected region
    const filteredCountries = countries.filter(country => country.region === region);

    return (
        <div className='w-full h-full'>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 mt-2 bg-white shadow-md rounded-lg space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    onInput={handleInput}
                    pattern="^[A-Za-z\s]{3,}$"
                    title="Name must be at least 3 letters long and contain no numbers."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    required
                />
                {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onInvalid={handleInvalid}
                    onInput={handleInput}
                    pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                    title="Please enter a valid email address."
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    required
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700">Region</label>
                <select
                    id="region"
                    name="region"
                    value={region}
                    onChange={handleRegionChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    required
                >
                    <option value="">Selecciona una region</option>
                    {[...new Set(countries.map(country => country.region))].map((region, index) => (
                        <option key={index} value={region}>
                            {region}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Pais</label>
                <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                    required
                >
                    <option value="">Selecciona el pais</option>
                    {filteredCountries.map((country, index) => (
                        <option key={index} value={country.pais}>
                            {country.pais}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Numero de Celular</label>
                <div className="flex">
                    <input
                        type="text"
                        id="indicativo"
                        name="indicativo"
                        value={indicativo}
                        readOnly
                        className="mt-1 block w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-100 text-black placeholder-black"
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        onInput={handleInput}
                        pattern="^\d{10,}$"
                        title="Mobile phone must be at least 10 digits long."
                        className="mt-1 block w-3/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black placeholder-black"
                        required
                    />
                </div>
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
            </div>
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input
                        id="agree"
                        name="agree"
                        type="checkbox"
                        checked={formData.agree}
                        onChange={handleChange}
                        className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        required
                    />
                </div>
                <div className="ml-3 text-sm">
                    <label htmlFor="agree" className="font-medium text-gray-700">Estoy de acuerdo con los </label>
                    <Link href="https://marketing-exportador.com/politicas-de-privacidad/" className="text-indigo-600 hover:text-indigo-500">Terminos y Condiciones</Link>
                </div>
            </div>
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Submit and Download
                </button>
            </div>

        </form>
            {/* Hidden components for PDF generation */}
            <div className="flex-col overflow-visible w-10/12 offscreen">
                <div className='h-1/4' ref={chartRef}>
                    {surveyResult && <AreaRadarChart areaValues={surveyResult.values} chartRef={chartRef} />}
                </div>
                <div className='w-1/2 sm:w-1/4' ref={tableRef}>
                    {surveyResult && <AreaValuesTable areaValues={surveyResult.values} totalSum={Object.values(surveyResult.values).reduce((acc, value) => acc + value, 0)} />}
                </div>
            </div>
        </div>
    );
};

export default PersonalData;