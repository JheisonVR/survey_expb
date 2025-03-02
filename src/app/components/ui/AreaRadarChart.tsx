import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from "chart.js";
import { ChartOptions } from "chart.js";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface AreaRadarChartProps {
    areaValues: { [key: string]: number };
    chartRef: React.RefObject<HTMLDivElement  | null>;
}

const AreaRadarChart: React.FC<AreaRadarChartProps> = ({ areaValues, chartRef }) => {
    const data = {
        labels: Object.keys(areaValues),
        datasets: [
            {
                label: "Valores por área",
                data: Object.values(areaValues),
                backgroundColor: "rgba(34, 202, 236, 0.2)",
                borderColor: "rgba(34, 202, 236, 1)",
                borderWidth: 0,
            },
        ],
    };
    const options: ChartOptions<"radar"> = {
        maintainAspectRatio: true,
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
                        size: 5,
                        weight: 600,
                    },
                    color: "#222",
                    callback: function (value: string) {
                        // Wrap text labels
                        const words = value.split(' ');
                        const wrappedText = words.reduce((acc, word) => {
                            const lastLine = acc[acc.length - 1];
                            if (lastLine && (lastLine + ' ' + word).length <= 10) {
                                acc[acc.length - 1] = lastLine + ' ' + word;
                            } else {
                                acc.push(word);
                            }
                            return acc;
                        }, [] as string[]);
                        return wrappedText.join('\n');
                    },
                },
                suggestedMin: 0,
                suggestedMax: Math.max(...Object.values(areaValues)) + 10,
            },
        },
        plugins: {
            legend: {
                position: 'chartArea' as const,
                align: 'start',
                labels: {
                    font: {
                        size: 10,
                        weight: 500,
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
        <div ref={chartRef} className="p-4 bg-white rounded-lg shadow-md mt-4 flex h-[500px] justify-center items-center">
            <Radar data={data} options={options} />
        </div>
    );
};

export default AreaRadarChart;