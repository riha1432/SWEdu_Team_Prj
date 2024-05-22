import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { searchState } from '../recoilState.js';
import Rlogo from '../images/Rlogo.png'; // 기본 로고 이미지
import RlogoSmall from '../images/RlogoSmall.png'; // 스크롤 시 표시할 로고 이미지
import { Container, Button } from 'react-bootstrap';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showFixedNavbar, setShowFixedNavbar] = useState(false); // 추가: 고정된 네비게이션 바 표시 여부 상태
  const isLoggedIn = localStorage.getItem('token') !== null;
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const SCROLL_THRESHOLD = 70;

  useEffect(() => {
    if (isLoggedIn) {
      fetchUsername(); // 로그인 상태일 때 사용자 이름을 가져옵니다.
    } else {
      setUsername('');
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

  const fetchUsername = async () => {
    try {
      const response = await fetch('http://localhost:10004/userinfo', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch username');
      }

      const userData = await response.json();
      setUsername(userData.Signup_name); // 'Signup_name'으로 변경
    } catch (error) {
      console.error('Error fetching username:', error.message);
      // 오류 처리: 예를 들어 사용자 이름 설정 실패 시 로그아웃 처리 등을 할 수 있습니다.
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username'); // 'username'으로 변경
    setUsername('');
    navigate('/');
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
        <Container>
          <div className="d-flex justify-content-end">
            {/* 로그인 여부에 따라 다른 버튼 렌더링 */}
            {!isLoggedIn ? (
              <>
                <Link className="btn btn-link text-muted" style={{ textDecoration: 'none' }} to="/login">로그인</Link>
                <Link className="mx-0 btn btn-link disabled">|</Link>
                <Link className="btn btn-link text-muted" style={{ textDecoration: 'none' }} to="/signup">회원가입</Link>
              </>
            ) : (
              <>
                <span className="navbar-text me-2">안녕하세요, {username || ''}님</span>
                <Link className="mx-1 btn btn-link disabled">|</Link>
                <button className="btn btn-link" style={{ textDecoration: 'none', color: 'rgb(238, 95, 95)' }} onClick={handleLogout}>로그아웃</button>
              </>
            )}
          </div>
        </Container>
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
                    <Link className="dropdown-item" to="/product">수량 변경</Link>
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
