import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Member() {
  const [memberInfo, setMemberInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 사용자의 이메일과 토큰을 서버에 전송하여 회원 정보를 가져옵니다.
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token');
    axios.get('/signup', {
      headers: {
        Authorization: `Bearer ${token}` // 토큰만 전송합니다.
      },
      params: {
        email: email // 이메일을 요청의 쿼리 매개변수로 전송합니다.
      }
    })
    .then(response => {
      setMemberInfo(response.data.user);
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching member info:', error);
      setLoading(false);
    });
  }, []);
  

  return (
    <div>
      <h1>회원정보</h1>
      {loading ? (
        <p>Loading...</p>
      ) : memberInfo ? (
        <div>
          <p>Name: {memberInfo.Signup_name}</p>
          <p>Email: {memberInfo.Signup_email}</p>
          <p>Password: {memberInfo.Signup_pw}</p>
          <p>Phone: {memberInfo.Signup_ph}</p>
          <p>Address: {memberInfo.Signup_addr}</p>
        </div>
      ) : (
        <p>No member information available.</p>
      )}
    </div>
  );
}

export default Member;
