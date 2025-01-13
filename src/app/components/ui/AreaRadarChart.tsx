import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface AreaRadarChartProps {
    areaValues: { [key: string]: number };
}

const AreaRadarChart: React.FC<AreaRadarChartProps> = ({ areaValues }) => {
    const data = {
        labels: Object.keys(areaValues),
        datasets: [
            {
                label: "Valores por área",
                data: Object.values(areaValues),
                backgroundColor: "rgba(34, 202, 236, 0.2)",
                borderColor: "rgba(34, 202, 236, 1)",
                borderWidth: 2,
            },
        ],
    };

    const options = {
        scales: {
            r: {
                angleLines: {
                    display: true,
                },
                grid: {
                    color: "rgba(200, 200, 200, 0.2)",
                },
                pointLabels: {
                    font: {
                        size: 14,
                        weight: 700,
                    },
                    color: "#222",
                },
                suggestedMin: 0,
                suggestedMax: Math.max(...Object.values(areaValues)) + 10,
            },
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 16,
                        weight: 700,
                    },
                    color: "#222",
                },
            },
            tooltip: {
                backgroundColor: "rgba(34, 202, 236, 0.8)",
                titleFont: {
                    size: 14,
                    weight: 'bold' as const,
                },
                bodyFont: {
                    size: 12,
                },
                footerFont: {
                    size: 10,
                },
            },
        },
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md mt-4">
            <Radar data={data} options={options} />
        </div>
    );
};

export default AreaRadarChart;