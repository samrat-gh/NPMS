// components/TopicGraph.tsx

"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import React from "react";

// Dynamically import ApexCharts with SSR disabled for Next.js compatibility
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

// Define the props interface for type safety and IntelliSense in TypeScript
interface TopicGraphProps {
  series: {
    name: string;
    data: number[];
  }[];
  categories: string[];
}

// Functional component for the Topic Graph using TypeScript
const TopicGraph: React.FC<TopicGraphProps> = ({ series, categories }) => {
  // Chart configuration options using ApexOptions type for type safety
  const options: ApexOptions = {
    chart: {
      type: "line", // Define the chart type
      height: 350, // Set the height of the chart
      zoom: {
        enabled: true, // Enable zooming feature on the chart
      },
    },
    xaxis: {
      categories: categories, // Set the categories for the x-axis from props
    },
    stroke: {
      curve: "smooth", // Define the line curve as smooth
    },
    title: {
      text: "Trending Topics Over Time", // Chart title
      align: "left", // Align the title to the left
    },
    markers: {
      size: 5, // Set the size of the markers on the chart
    },
    tooltip: {
      enabled: true, // Enable tooltips
      x: {
        format: "dd/MM/yy HH:mm", // Set the format for the tooltip's x-value
      },
    },
  };

  // Render the ApexChart component with the provided options and series
  return (
    <div className="flex items-center justify-center">
      <div className="w-9/12 rounded-lg bg-white p-4 shadow-lg">
        <ApexChart options={options} series={series} type="line" />
      </div>
    </div>
  );
};

export default TopicGraph;