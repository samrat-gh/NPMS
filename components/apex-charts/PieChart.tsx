'use client'

import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

// Dynamically import ApexCharts with SSR disabled for Next.js compatibility
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieChart = () => {

    const {theme} = useTheme();

    const options: ApexOptions = {
        chart: {
            type: "pie",
            height: 100,
        },
        theme: {
            mode: theme === "dark" ? "dark" : "light",
            palette: theme === "dark" ? "palette7" : "palatte2",
            // monochrome: {
            //     enabled: false,
            //     color: "#27272a",
            //     shadeTo: theme === "dark" ? "dark" : "light",
            //     shadeIntensity: 0.65
            
            // },
            
        },
        
        series: [55,25,14,5, 5],
        labels: ['Hydropower', 'Finance', 'Investment', 'Commerical Bank'], // Match labels with series
    };

    const series = [55, 25, 15, 5]; // Match series with labels

    return (
        <div className="flex items-center justify-center">
            <div className="p-4 w-1/2 shadow-lg rounded-lg bg-white dark:bg-zinc-800 dark:shadow-xl">
                <ApexChart options={options} series={series} type="pie" />
            </div>
        </div>
    );
}

export default PieChart;
