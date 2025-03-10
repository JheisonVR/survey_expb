import React from "react";

interface AreaValuesTableProps {
    areaValues: { [key: string]: number };
    totalSum: number;
}

const AreaValuesTable: React.FC<AreaValuesTableProps> = ({ areaValues, 
    //totalSum 
}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-4">
            <table className="w-full">
            <thead>
                <tr>
                <th className="p-2 text-left font-bold text-gray-800 border-b border-gray-300 text-sm sm:text-md sm:p-4">Area</th>
                <th className="p-2 text-right font-bold text-gray-800 border-b border-gray-300 text-sm sm:text-md sm:p-4">Value</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(areaValues).map(([area, value]) => (
                <tr key={area} className="border-b border-gray-300">
                    <td className="p-2 text-left text-gray-800 text-sm sm:text-md sm:p-4">{area}</td>
                    <td className="p-2 text-right text-gray-800 text-sm sm:text-md sm:p-4">{value}%</td>
                </tr>
                ))}
                {/* <tr>
                <td className="p-2 text-left font-bold text-gray-800 sm:p-4">Total Sum</td>
                <td className="p-2 text-right font-bold text-gray-800 sm:p-4">{totalSum}</td>
                </tr> */}
            </tbody>
            </table>
        </div>
    );
};

export default AreaValuesTable;