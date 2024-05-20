import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import { Chart, registerables as ChartRegisterables } from 'chart.js'; // Chart.js에서 Chart를 가져옴

// Chart.js에 필요한 모든 모듈을 등록
Chart.register(...ChartRegisterables);

const RealTimeChart = () => {
  const [data, setData] = useState(null); // 데이터 상태를 관리
  useEffect(() => {
    // 서버에서 데이터를 가져오는 함수 정의
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:10004/cropsprice'); // 서버에 GET 요청 보냄
        const jsonData = await response.json(); // JSON 형태로 응답 데이터 변환
        setData(jsonData); // 데이터 상태 업데이트
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      }
    };

    fetchData(); // fetchData 함수 호출하여 데이터 가져오기
  }, []); // 컴포넌트가 마운트될 때 한 번만 실행

  if (!data || data.length == 0) {
    return <div>No data available</div>;
  }
  const sajlk = new Set(data.map(item => item.Day))
  console.log(Array.from(sajlk))

  // console.log(data.filter(item => item.pecies == 'Mustard leaves'))
  const chartData = {
    labels: Array.from(sajlk),
    datasets: [
      {
        label: 'Mustard Leaves',
        data: data.filter(item => item.Species === 'Mustard leaves').map(item => item.Price),
        borderColor: 'rgba(255, 99, 132, 0.6)',
        fill: false,
      },
      {
        label: 'Lettuce',
        data: data.filter(item => item.Species ==='Lettuce').map(item => item.Price),
        borderColor: 'rgba(54, 162, 235, 0.6)',
        fill: false,
      },
      {
        label: 'Kale',
        data: data.filter(item => item.Species === 'Kale').map(item => item.Price),
        borderColor: 'rgba(255, 206, 86, 0.6)',
        fill: false,
      },
      {
        label: 'Spinach',
        data: data.filter(item => item.Species === 'Spinach').map(item => item.Price),
        borderColor: 'rgba(75, 192, 192, 0.6)',
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>Real-Time Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RealTimeChart;
