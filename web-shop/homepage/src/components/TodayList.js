import React from 'react';
import { Link } from 'react-router-dom';

import kaleImage from '../images/kaleImage.jpg'

// 채소 데이터 배열
const vegetables = [
  { name: 'Carrots', src: 'https://via.placeholder.com/150', path: '/vegetable/carrots' },
  { name: 'Broccoli', src: 'https://via.placeholder.com/150', path: '/vegetable/broccoli' },
  { name: 'Kale', src: kaleImage, path: '/vegetable/kale' },
  // 새로운 채소 추가
];

// 컴포넌트 스타일
const galleryStyle = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-start',
};

const imgStyle = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '50%',
};

function VegetableGallery() {
  return (
    <div style={galleryStyle}>
      {vegetables.map((veg, index) => (
        <Link key={index} to={veg.path}>
          <img
            src={veg.src}
            alt={veg.name}
            style={imgStyle}
          />
          <p style={{ textAlign: 'center' }}>{veg.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default VegetableGallery;

