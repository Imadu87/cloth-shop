import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler,
  Tooltip,
  Legend
);

const Charts = ({ salesData, topProducts }) => {
  const lineData = {
    labels: salesData.map((d) => d.date),
    datasets: [
      {
        label: "Sales",
        data: salesData.map((d) => d.total),
        borderColor: "#0b1d3a",
        backgroundColor: "rgba(11,29,58,0.08)",
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#0b1d3a",
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0b1d3a",
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: {
          color: "#f1f5f9",
        },
      },
    },
  };

  const barData = {
    labels: topProducts.map((p) => p.name),
    datasets: [
      {
        label: "Units Sold",
        data: topProducts.map((p) => p.units),
        backgroundColor: "#0b1d3a",
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#0b1d3a",
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: {
          color: "#f1f5f9",
        },
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      
      {/* Sales Chart */}
      <div
        className="bg-white p-5 rounded-xl border border-gray-200 
        shadow-sm hover:shadow-2xl 
        transform hover:-translate-y-1 hover:rotate-x-2 
        transition-all duration-300"
      >
        <h3 className="font-semibold text-gray-700 mb-4">
          Sales Over Time
        </h3>
        <Line data={lineData} options={lineOptions} />
      </div>

      {/* Top Products */}
      <div
        className="bg-white p-5 rounded-xl border border-gray-200 
        shadow-sm hover:shadow-2xl 
        transform hover:-translate-y-1 hover:rotate-x-2 
        transition-all duration-300"
      >
        <h3 className="font-semibold text-gray-700 mb-4">
          Top Selling Products
        </h3>
        <Bar data={barData} options={barOptions} />
      </div>
    </div>
  );
};

export default Charts;