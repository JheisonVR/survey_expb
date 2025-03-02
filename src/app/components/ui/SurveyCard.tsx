"use client"
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';
import { Question } from "@/seed/seed";
import { Option } from "@/seed/seed";
import { data } from '../../../seed/seed';
import AreaValuesTable from "./AreaValuesTable";
import AreaRadarChart from './AreaRadarChart';
import Loading from './Loading';
import Navbar from "./Navbar";
import Footer from "./Footer";

interface SurveyCardProps {
    area: string;
    questions: Question[];
    options: Option[];
    setCurrentAreaIndex: (index: number) => void;
    currentAreaIndex: number;
}

const SurveyCard: React.FC<SurveyCardProps> = ({ questions, options, area, setCurrentAreaIndex, currentAreaIndex }) => {
    const [selectedOptionsState, setSelectedOptions] = useState<{ [key: string]: { [key: number]: number } }>({});
    const [sum, setSum] = useState<number>(0);
    const [areaValues, setAreaValues] = useState<{ [key: string]: number }>({});
    const [totalSum, setTotalSum] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [userIp, setUserIp] = useState<string>('');
    const chartRef = useRef<HTMLDivElement>(null);
    const tableRef = useRef<HTMLDivElement>(null);
    const navbarRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const handleOptionChange = (questionIndex: number, optionValue: number) => {
        setSelectedOptions((prevSelectedOptions) => {
            const newSelectedOptions = {
                ...prevSelectedOptions,
                [area]: {
                    ...prevSelectedOptions[area],
                    [questionIndex]: optionValue,
                },
            };
            calculateSum(newSelectedOptions[area]);
            return newSelectedOptions;
        });
    };

    const calculateSum = React.useCallback((selectedOptions: { [key: number]: number }) => {
        const totalPossibleScore = questions.length * Math.max(...options.map(option => option.value));
        const newSum = Object.values(selectedOptions).reduce((acc, value) => acc + value, 0);
        const percentage = parseFloat(((newSum / totalPossibleScore) * 100).toFixed(1));
        setSum(percentage);
        setAreaValues((prevAreaValues) => ({
            ...prevAreaValues,
            [area]: percentage,
        }));
    }, [area, questions.length, options]);

    useEffect(() => {
        if (selectedOptionsState[area]) {
            calculateSum(selectedOptionsState[area]);
        } else {
            setSum(0);
        }
    }, [selectedOptionsState, area, calculateSum]);

    useEffect(() => {
        const newTotalSum = Object.values(areaValues).reduce((acc, value) => acc + value, 0);
        setTotalSum(newTotalSum);
    }, [areaValues]);

    useEffect(() => {
        const fetchIp = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setUserIp(data.ip);
            } catch (error) {
                console.error('Error fetching IP address:', error);
            }
        };

        fetchIp();
    }, []);

    const handleNextArea = () => {
        if (currentAreaIndex < data.length - 1) {
            setCurrentAreaIndex(currentAreaIndex + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevArea = () => {
        if (currentAreaIndex > 0) {
            setCurrentAreaIndex(currentAreaIndex - 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleFinish = async () => {
        setLoading(true);
        try {
            // Ensure elements are fully visible
            window.scrollTo({ top: 0, behavior: 'smooth' });
    
            // Send survey results to the server
            const response = await fetch('/api/saveSurveyResult', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    area: userIp, // Use the user's IP address instead of the area value
                    values: areaValues,
                }),
            });
    
            if (!response.ok) {
                throw new Error('Error saving survey result');
            }
    
            console.log("Survey result saved to the database");
    
            // Redirect to /dataform
            router.push('/dataform');
        } catch (error) {
            console.error("Error saving survey result:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 bg-white rounded-lg">
            {loading && <Loading />}
            <div className="hidden" ref={navbarRef}>
                <Navbar/>
            </div>
            <table className="w-full h-50 overflow-scroll">
                <thead>
                    <tr>
                        <th className="w-1/2 p-2 text-left font-bold text-cyan-800 text-md sm:text-xl border-b border-gray-300">{area}</th>
                        {options.map((option, index) => (
                            <th key={index} className="w-1/8 p-2 font-semibold text-center text-md  text-gray-700 border-b border-gray-300">{option.option}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, questionIndex) => (
                        <tr key={questionIndex} className="border-b border-gray-300">
                            <td className="p-2 font-bold text-gray-800 text-xs sm:text-md">{question.question}</td>
                            {options.map((option, optionIndex) => (
                                <td key={optionIndex} className="p-2 text-center">
                                    <input
                                        type="radio"
                                        name={`question-${questionIndex}`}
                                        checked={selectedOptionsState[area]?.[questionIndex] === option.value}
                                        onChange={() => handleOptionChange(questionIndex, option.value)}
                                        className="form-radio text-cyan-600 focus:ring-cyan-500 h-3 w-3 sm:h-4 sm:w-4"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex flex-col sm:flex-row justify-between">
                <button 
                    onClick={handlePrevArea} 
                    disabled={currentAreaIndex <= 0} 
                    className={`px-4 py-2 rounded-lg shadow-md ${currentAreaIndex <= 0 ? 'bg-gray-500' : 'bg-cyan-500'} text-white mb-2 sm:mb-0`}
                >
                    Prev
                </button>
                {currentAreaIndex < data.length - 1 ? (
                    <button 
                        onClick={handleNextArea} 
                        disabled={currentAreaIndex >= data.length - 1} 
                        className={`px-4 py-2 rounded-lg shadow-md ${currentAreaIndex >= data.length - 1 ? 'bg-gray-500' : 'bg-cyan-500'} text-white mb-2 sm:mb-0`}
                    >
                        Next
                    </button>
                ) : (
                    <button 
                        onClick={handleFinish} 
                        className="px-4 py-2 rounded-lg shadow-md bg-green-500 text-white mb-2 sm:mb-0"
                    >
                        Finish
                    </button>
                )}
            </div>
            <div hidden className="mt-4 text-right font-bold text-gray-800">
                Suma total {area}: {sum}
            </div>
            <div className="flex flex-col sm:flex-row w-full ">
                <div className="w-full sm:w-1/2 h-full " ref={tableRef}>
                    <AreaValuesTable areaValues={areaValues} totalSum={totalSum} />
                </div>
                <div className="w-full sm:w-1/2 overflow-ellipsis" ref={chartRef}>
                    <AreaRadarChart areaValues={areaValues} chartRef={chartRef} />
                </div>
            </div>
            <div className="hidden" ref={footerRef}>
                <Footer/>
            </div>
        </div>
    );
};

export default SurveyCard;