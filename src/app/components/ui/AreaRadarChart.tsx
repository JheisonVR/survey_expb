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
                pointBackgroundColor: "rgba(34, 202, 236, 1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(34, 202, 236, 1)",
                Ticks: {
                    color: "#222",
                    font: {
                        size: 10,
                        weight: 600,
                    },
                }

            },
        ],
    };
    const options: ChartOptions<"radar"> = {
        maintainAspectRatio: false,
        responsive: true,
        spanGaps: true,
        layout: {
            autoPadding: true,
        },
        aspectRatio: 1,
        scales: {
            r: {
                angleLines: {
                    display: true,
                    borderDash: [5, 5],
                    lineWidth: 1,
                },
                grid: {
                    //color: "rgba(200, 200, 200, 0.2)",
                    color: "rgba(208, 208, 208, 0.8)",
                    circular: false,
                    drawOnChartArea: true,
                    tickColor: "rgba(208, 208, 208, 0.8)",
                    tickBorderDash: [5, 5],
                    tickBorderDashOffset: 5,
                    drawTicks: true,
                    lineWidth: 1,
                    tickLength: 10,
                    z: 0,
                    
                },
                pointLabels: {
                    font: {
                        size: 8,
                        weight: 600,
                    },
                    color: "#222",
                    backdropColor: "rgba(255, 255, 255, 0.8)",
                    padding: 5,
                    borderRadius: 5,
                    backdropPadding: 5,
                    display: true,
                    centerPointLabels: false,


                },
                suggestedMin: 0,
                suggestedMax: Math.max(...Object.values(areaValues)) + 10,
                animate: true,
                startAngle: 0,
                alignToPixels: true,
                reverse: false,
                ticks: {
                    display: true,
                    color: "#b1a7a6",
                    font: {
                        size: 10,
                        weight: 600,
                    },
                    padding: 10,
                    z: 0,
                    stepSize: 10,
                    maxTicksLimit: 10,
                }  
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
        <div ref={chartRef} className="p-4 bg-white rounded-lg shadow-md mt-4 flex h-[600px] justify-center">
            <Radar data={data} options={options} />
        </div>
    );
};

export default AreaRadarChart;