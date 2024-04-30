import React from 'react';
import { Link } from 'react-router-dom';

function VegetableGallery() {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'left' }}>
      {/* 채소 이미지와 링크 */}
      <Link to="/vegetable/carrots">
        <img
          src="https://via.placeholder.com/150"
          alt="Carrots"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <p style={{ textAlign: 'center' }}>Carrots</p>
      </Link>

      <Link to="/vegetable/broccoli">
        <img
          src="https://via.placeholder.com/150"
          alt="Broccoli"
          style={{ width: '150px', height: '150px', objectFit: 'cover' }}
        />
        <p style={{ textAlign: 'center' }}>Broccoli</p>
      </Link>

      {/* 다른 채소 추가 */}
    </div>
  );
}

export default VegetableGallery;
