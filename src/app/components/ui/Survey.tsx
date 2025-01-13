"use client"
import React, { useState } from 'react';
import { data } from '../../../seed/seed';
import SurveyCard from './SurveyCard';

const Survey: React.FC = () => {
    const [currentAreaIndex, setCurrentAreaIndex] = useState(0);

    // const handleNextArea = () => {
    //     if (currentAreaIndex < data.length - 1) {
    //         setCurrentAreaIndex(currentAreaIndex + 1);
    //     }
    // };

    return (
        <div>
            <SurveyCard 
                area={data[currentAreaIndex].name} 
                questions={data[currentAreaIndex].questions} 
                options={data[currentAreaIndex].questions[0].options} 
                setCurrentAreaIndex = {setCurrentAreaIndex}
                currentAreaIndex = {currentAreaIndex}
            />
            {/* <button onClick={handleNextArea} disabled={currentAreaIndex >= data.length - 1}>
                Next
            </button> */}
        </div>
    );
};

export default Survey;