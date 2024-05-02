import React from 'react';

const Footer = () => {
  return (
    <footer
      className='App-footer'
      style={{
        display: 'grid',
        fontSize: '14px',
        padding: '20px',
        textAlign: 'left'
      }}
    >
      <img src="./unbatangbold.png" alt="" />
      <div>
        상호명 : 주식회사 ©AI농가집성마켓 | &nbsp; 대표자: XXX
        <br />
        전화번호: 053 &#41; XXXX - XXXX
        <br />
        장소: 경일대 6호관 403호
        <br />
        DESIGNED By AI농가집성마켓
        <br />
        E-mail: XXXX1234@XXXXX.com
      </div>
      <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}> {/* 전체 열에 적용 */}
        <hr style={{ width: '100%' }} /> {/* 전체 너비 */}
        <h5 style={{ fontSize: '18px' }}>©AI농가집성마켓</h5> {/* 가운데 정렬 */}
      </div>
    </footer>
  );
};

export default Footer;

