import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto'; // Chart.js v3
import 'chartjs-adapter-moment';

const RealTimeChart = () => {
  const [chartData, setChartData] = useState(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetchData("Mustard leaves");
  }, []);

  const fetchCropData = async (cropName) => {
    try {
      const response = await fetch(`http://localhost:10004/cropsprice/${cropName}`);
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
      const data = await fetchCropData(cropName);

      const chartData = {
        labels: ["22-1", "22-2", "22-3", "22-4", "22-5", "22-6", "22-7", "22-8", "22-9", "22-10", "22-11", "22-12", 
                 "23-1", "23-2", "23-3", "23-4", "23-5", "23-6", "23-7", "23-8", "23-9", "23-10", "23-11", "23-12", 
                 "24-1", "24-2", "24-3", "24-4", "24-5"], // 직접 날짜 텍스트를 넣음
        datasets: [
          {
            label: `${cropName} 가격 변동`,
            data: data.map(item => item.price),
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
      const ctx = document.getElementById('myChart');
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
