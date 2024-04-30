import React from 'react';

const Footer = () => {
  return (
    <footer
      className='App-footer'
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr', // 세 개의 열로 나누기
        gap: '10px', // 열 간의 간격
        padding: '10px',
      }}
    >
      <div>
        <p style={{ fontSize: '14px' }}>전화번호: 053 &#41; XXXX - XXXX</p>
      </div>
      <div>
        <p style={{ fontSize: '14px' }}>장소: 경일대 6호관 403호</p>
      </div>
      <div>
        <p style={{ fontSize: '14px' }}>DESIGNED By Me</p>
      </div>
      <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}> {/* 전체 열에 적용 */}
        <hr style={{ width: '100%' }} /> {/* 전체 너비 */}
        <h5 style={{ fontSize: '18px' }}>©AI농가집성마켓</h5> {/* 가운데 정렬 */}
      </div>
    </footer>
  );
};

export default Footer;

