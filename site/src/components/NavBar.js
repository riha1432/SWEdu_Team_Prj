import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchState } from '../recoilState.js';
import Rlogo from '../images/Rlogo.png'; // 기본 로고 이미지
import RlogoSmall from '../images/RlogoSmall.png'; // 스크롤 시 표시할 로고 이미지


const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false); // 추가: 고정된 네비게이션 바 표시 여부 상태
  const isLoggedIn = localStorage.getItem('token') !== null;
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const SCROLL_THRESHOLD = 70;

  useEffect(() => {
    if (isLoggedIn) {
      setUsername(localStorage.getItem('username'));
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      setScrolling(currentScrollTop > SCROLL_THRESHOLD);
      setShowFixedNavbar(currentScrollTop > SCROLL_THRESHOLD); // 스크롤 위치에 따라 고정된 네비게이션 바 표시 여부 설정
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setUsername('');
  };

  const [text, setText] = useState('');
  const onChange = (event) => {
    setText(event.target.value);
  };

  const [search, setSearch] = useRecoilState(searchState);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (text === "케일") {
        navigate('/product/detail/1');
      } else if (text === "상추") {
        navigate('/product/detail/2');
      } else if (text === "근대") {
        navigate('/product/detail/3');
      } else if (text === "겨자채") {
        navigate('/product/detail/4');
      } else if (text === "상품목록" || text === "상품" || text === "목록") {
        navigate('/product');
      } else if (text === "배송" || text === "배송중") {
        navigate('/tracking');
      }
    }
  };

  return (
    <>
      {/* 고정되지 않은 상단 네비게이션 바 */}
      <div className={`top-bar ${scrolling ? 'scrolling' : ''}`}>
        <div className="container">
          <div className="d-flex justify-content-end">
            {/* 로그인 여부에 따라 다른 버튼 렌더링 */}
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-link" to="/login">로그인</Link>
                <Link className="btn btn-link" to="/signup">회원가입</Link>
              </>
            ) : (
              <>
                <span className="navbar-text me-2">안녕하세요, {username}님</span>
                <button className="btn btn-link" onClick={handleLogout}>로그아웃</button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 고정된 상단 네비게이션 바 */}
      <nav className={`navbar ${showFixedNavbar ? 'fixed-top' : ''} navbar-expand-xl bg-light`} data-bs-theme="light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className='navbar-img' src={scrolling ? RlogoSmall : Rlogo} alt="Brand Logo" />
            <text className='navbar-logo'>Ai농가집성마켓</text>
          </Link>
          <form className="d-flex" style={{ marginLeft: '50px' }}>
            <input className="form-control me-sm-6" style={{ width: '350px' }} type="search" placeholder="Search" value={text} onChange={onChange} onKeyDown={handleKeyDown} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/introduction">회사 소개</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">상품 목록</Link>
              </li>
              {isLoggedIn && (
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                  <div className="dropdown-menu">
                    <Link className="dropdown-item" to="/member">회원 정보</Link>
                    <Link className="dropdown-item" to="/tracking">배송 조회</Link>
                    <Link className="dropdown-item" to="/">수량 변경</Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item logout-link" href="/" onClick={handleLogout}>로그아웃</a>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {showFixedNavbar && <div style={{height: '150px'}}></div>}
    </>
  );
};

export default NavBar;

