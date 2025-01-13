"use client"
import React, { useState, useEffect } from "react";
import { Question } from "@/seed/seed";
import { Option } from "@/seed/seed";
import { data } from '../../../seed/seed';
import AreaValuesTable from "./AreaValuesTable";
import AreaRadarChart from './AreaRadarChart';

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
        const newSum = Object.values(selectedOptions).reduce((acc, value) => acc + value, 0);
        setSum(newSum);
        setAreaValues((prevAreaValues) => ({
            ...prevAreaValues,
            [area]: newSum,
        }));
    }, [area]);

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

    const handleNextArea = () => {
        if (currentAreaIndex < data.length - 1) {
            setCurrentAreaIndex(currentAreaIndex + 1);
        }
    };

    const handlePrevArea = () => {
        if (currentAreaIndex > 0) {
            setCurrentAreaIndex(currentAreaIndex - 1);
        }
    };

    const handleReset = () => {
        setSelectedOptions({});
        setSum(0);
        setAreaValues({});
        setTotalSum(0);
        setCurrentAreaIndex(0);
    };

    return (
        <div className="p-4 bg-white rounded-lg">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-1/2 p-2 text-left font-bold text-cyan-800 text-xl border-b border-gray-300">{area}</th>
                        {options.map((option, index) => (
                            <th key={index} className="w-1/8 p-2 font-bold text-center text-gray-700 border-b border-gray-300">{option.option}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, questionIndex) => (
                        <tr key={questionIndex} className="border-b border-gray-300">
                            <td className="p-2 font-bold text-gray-800">{question.question}</td>
                            {options.map((option, optionIndex) => (
                                <td key={optionIndex} className="p-2 text-center">
                                    <input
                                        type="radio"
                                        name={`question-${questionIndex}`}
                                        checked={selectedOptionsState[area]?.[questionIndex] === option.value}
                                        onChange={() => handleOptionChange(questionIndex, option.value)}
                                        className="form-radio text-cyan-600 focus:ring-cyan-500 h-4 w-4"
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
                <button 
                    onClick={handleNextArea} 
                    disabled={currentAreaIndex >= data.length - 1} 
                    className={`px-4 py-2 rounded-lg shadow-md ${currentAreaIndex >= data.length - 1 ? 'bg-gray-500' : 'bg-cyan-500'} text-white mb-2 sm:mb-0`}
                >
                    Next
                </button>
                <button 
                    onClick={handleReset} 
                    className="px-4 py-2 rounded-lg shadow-md bg-red-500 text-white"
                >
                    Reset
                </button>
            </div>
            <div hidden className="mt-4 text-right font-bold text-gray-800">
                Suma total para {area}: {sum}
            </div>
            <AreaValuesTable areaValues={areaValues} totalSum={totalSum} />
            <AreaRadarChart areaValues={areaValues} />
        </div>
    );
};

export default SurveyCard;
