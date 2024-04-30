import React from 'react';

const NavBar2 = () => {
  return (
    <navBar2 className='App'>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">Ai농가집성마켓</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link " href="/login">로그인
                      <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">회원가입</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">업무 소개</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">관리자 로그인</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">마이페이지</a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="/">회원 정보</a>
                      <a className="dropdown-item" href="/">배송 조회</a>
                      <a className="dropdown-item" href="/">수량 변경</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="/">로그아웃</a>
                    </div>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-sm-2" type="search" placeholder="Search" />
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
        </div>
      </nav>
    </navBar2>
  );
};

export default NavBar2;

