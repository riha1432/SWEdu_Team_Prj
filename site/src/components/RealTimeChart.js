import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Chart.js v3
import 'chartjs-adapter-moment';

const RealTimeChart = () => {
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetchData("Mustard leaves");
  }, []);

  const fetchCropData = async () => {
    try {
      const response = await fetch('http://localhost:10004/cropsprice');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching crop data:', error);
      return [];
    }
  };

  const fetchData = async (cropName) => {
    try {
      const data = await fetchCropData();
      const filteredData = data.filter(item => item.species === cropName);

      const chartData = {
        labels: filteredData.map(item => item.day),
        datasets: [
          {
            label: `${cropName} 가격 변동`,
            data: filteredData.map(item => item.Price),
            fill: false,
            backgroundColor: 'rgb(75, 192, 192)',
            borderColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
          },
        ],
      };

      setChartData(chartData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCropSelection = async (cropName) => {
    await fetchData(cropName);
  };

  useEffect(() => {
    if (chartData) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById('myChart').getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: '월별 엽채류 가격 변동',
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: '날짜',
              },
            },
            y: {
              title: {
                display: true,
                text: '가격',
              },
            },
          },
        },
      });
      setChartInstance(newChartInstance);
    }
  }, [chartData]);

  return (
    <div style={{ marginTop: '30px' }}>
      <h2>월별 엽채류 가격 변동</h2>
      <div>
        <button onClick={() => handleCropSelection("Mustard leaves")}>Mustard leaves</button>
        <button onClick={() => handleCropSelection("Lettuce")}>Lettuce</button>
        <button onClick={() => handleCropSelection("Kale")}>Kale</button>
        <button onClick={() => handleCropSelection("Spinach")}>Spinach</button>
      </div>
      <canvas id="myChart" width="400" height="400"></canvas>
    </div>
  );
};

export default RealTimeChart;
