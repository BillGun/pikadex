"use client";

import { Flavor } from "@/api/constant";
import {
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  Colors,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  Colors,
);

export const FlavorChart = ({
  flavors,
  className,
}: {
  flavors: Flavor[];
  className?: string;
}) => {
  const options: ChartOptions<"radar"> = {
    scales: {
      r: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          display: false,
        },
        grid: {
          color: "#36A3EA",
        },
        backgroundColor: "#4BC0C0",
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const labels = flavors.map((data) => {
    let label = data.flavor.name;
    label = `${label[0].toUpperCase()}${label.slice(1)}`;
    return `${label}`;
  });

  const data = flavors.map((data) => {
    return data.potency;
  });

  const chartData: ChartData<"radar"> = {
    labels,
    datasets: [
      {
        label: "",
        data,
        borderColor: "#FF6384",
      },
    ],
  };

  return (
    <Radar
      className={`${className}`}
      data={chartData}
      options={options}
      aria-label="Berry Flavors Chart"
    />
  );
};
