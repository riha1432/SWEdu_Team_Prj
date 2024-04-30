import React from 'react';
// import './CarouselImage.css'; // 정확한 상대 경로


function CarouselImages({ src, alt='Image', width = '100%', height = '200px' }) {
  return (
    <div>
      <img
        style={{
          width: width, // 너비
          height: height, // 원하는 세로 크기
          objectFit: 'cover', // 이미지 채우기
        }}
        src={src}
        // src={`https://via.placeholder.com/800x400?text=${text}`}
        alt={alt}
      />
    </div>
  );
}

export default CarouselImages;
