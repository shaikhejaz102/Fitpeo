import React from "react";
import { Card } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import { RiArrowRightSLine } from "react-icons/ri";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const verticalBarData = {
  labels: ["0", "5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
  datasets: [
    {
      label: "Values",
      data: [0, 5,  9, 11, 13, 15, 17, 19, 21, 23, 25, 27],
      backgroundColor: "#5151ff",
      borderRadius: 10, 
      barThickness: 50,
    },
  ],
};

const verticalBarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        callback: (value) => {
          const labels = ["0", "5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"];
          return labels[value] || '';
        },
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
        borderColor: '#e0e0e0',
        borderWidth: 1,
      },
      ticks: {
        stepSize: 10,
        callback: (value) => value + 'k',
      },
    },
  },
};

const ActivityBoard = () => (
  <Card className="activity-board">
    <div className="d-flex justify-content-between m-3">
    <h5>Activity</h5>
    <h6 className="bg-secondary px-2 rounded-5">Weekly 
    <RiArrowRightSLine className="arrow-icon" /></h6>
    </div>
    <Card.Body>
      <Bar data={verticalBarData} options={verticalBarOptions} />
    </Card.Body>
  </Card>
);

export default ActivityBoard;