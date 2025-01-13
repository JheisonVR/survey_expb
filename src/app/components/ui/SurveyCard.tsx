"use client"
import React, { useState, useEffect } from "react";
import { Question } from "@/seed/seed";
import { Option } from "@/seed/seed";
import { data } from '../../../seed/seed';
import AreaValuesTable from "./AreaValuesTable";

interface SurveyCardProps {
    area: string;
    questions: Question[];
    options: Option[];
    setCurrentAreaIndex: (index: number) => void;
    currentAreaIndex: number;
}

const SurveyCard: React.FC<SurveyCardProps> = ({ questions, options, area, setCurrentAreaIndex, currentAreaIndex }) => {
    const [selectedOptionsState, setSelectedOptions] = useState<{ [key: string]: { [key: number]: number } }>({});
    // const [selectedOptionsState, setSelectedOptions] = selectedOptions;
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

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="w-1/2 p-2 text-left font-bold text-gray-800 border-b border-gray-300">{area}</th>
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
                                        className="form-radio text-blue-600"
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-between">
                <button onClick={handlePrevArea} disabled={currentAreaIndex <= 0} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Prev</button>
                <button onClick={handleNextArea} disabled={currentAreaIndex >= data.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md">Next</button>
            </div>
            <div className="mt-4 text-right font-bold text-gray-800">
                Total Sum for {area}: {sum}
            </div>
            <div className="mt-4 text-right font-bold text-gray-800">
                Total Sum of All Areas: {totalSum}
            </div>
            <AreaValuesTable areaValues={areaValues} totalSum={totalSum} />
        </div>
    );
};

export default SurveyCard;
