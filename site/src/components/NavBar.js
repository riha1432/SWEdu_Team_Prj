/*eslint-disable*/
import React from 'react';

const NavBar = () => {
  return (
    <navBar className='App'>
      <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">Ai농가집성마켓</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="/introduction">회사 소개</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="/login">로그인
                      <span className="visually-hidden">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">회원가입</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Product">상품목록</a>
                  </li>
                  
                  
                </ul>
                <form className="d-flex">
                  <input class="form-control mr-sm-2" style={{width: "250px"}} type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
              </div>
        </div>
      </nav>
    </navBar>
  );
};

export default NavBar;

