import React from 'react';
import { Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const EnergyPieChart = ({ energyData }) => {
    const getCSSVariable = (variable) => getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

    const primaryColor = getCSSVariable('--color-primary') || '#079137';
    const secondaryColor = getCSSVariable('--color-secondary') || '#ececec';
    const accentColor = getCSSVariable('--color-accent') || '#1a1e44';
    const labelColor = getCSSVariable('--color-foreground') || '#000000'; 

    const data = {
        labels: ['Kolhydrater', 'Fett', 'Protein'],
        datasets: [
            {
                data: energyData,
                backgroundColor: [
                    primaryColor,
                    secondaryColor,
                    accentColor,
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: labelColor, 
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    },
                },
            },
        },
    };

    return (
        <div>
            <h2 style={{ color: labelColor }}>Energiprocent</h2> 
            <Pie data={data} options={options} />
        </div>
    );
};

export default EnergyPieChart;
