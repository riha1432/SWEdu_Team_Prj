import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Member.css'; // CSS 파일 경로 수정
import memImage from '../../images/mem.jpg'; // si.png 이미지 경로를 가져옵니다.
import profileImage from  '../../images/profile.png';

const Member = () => {
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserData, setEditedUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:10004/userinfo', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data);
        setEditedUserData(response.data);
      } catch (error) {
        console.error('회원 정보 요청 실패:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
  
      // 공백을 검사하여 저장을 막음
      const isWhitespace = Object.values(editedUserData).some(value => typeof value === 'string' && value.trim() === '');
      if (isWhitespace) {
        console.error('빈 칸이 있습니다. 모든 필드를 채워주세요.');
        return;
      }
  
      await axios.put('http://localhost:10004/updateuserinfo', editedUserData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const response = await axios.get('http://localhost:10004/userinfo', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserData(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('회원 정보 수정 실패:', error);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  return (
    <>
      <div className='box-subTop ani-on'>
        <div className="bg" style={{ backgroundImage: `url(${memImage})` }}>
          <div className="hide-on-pc" />
          <div className="hide-on-mobile" />
        </div>
        <div className="txt-wrap">
          <div className="txt-inner">
            <h2 className="hidden">조회/예약</h2>
            <h3 className="title-1 ani-1 delay-1 member-title">회원 정보 및 수정하기</h3>
            <p className="txt-1 ani-1 delay-2">Ai농가집성마켓은 고객님의 소중한 마음까지 전달합니다.</p>
          </div>
        </div>
      </div>
      <div className="signup-container">
        <div className="signup-box">
          {userData ? (
            <form className="member-info">
              <div className="profile-image-container">
              <img src={profileImage} alt="프로필 이미지" className="profile-image" />
              </div>
              <div className="mb-3">
              
                <label className="form-label">이름</label>
                {isEditing ? (
                  <input type="text" className="form-control" name="Signup_name" value={editedUserData.Signup_name} onChange={handleChange} />
                ) : (
                  <p className="form-control-static">{userData.Signup_name}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">이메일</label>
                <p className="form-control-static">{userData.Signup_email}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">비밀번호</label>
                {isEditing ? (
                  <input type="text" className="form-control" name="Signup_pw" value={editedUserData.Signup_pw} onChange={handleChange} />
                ) : (
                  <p className="form-control-static">{userData.Signup_pw}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">주소</label>
                {isEditing ? (
                  <input type="text" className="form-control" name="Signup_addr" value={editedUserData.Signup_addr} onChange={handleChange} />
                ) : (
                  <p className="form-control-static">{userData.Signup_addr}</p>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">전화번호</label>
                {isEditing ? (
                  <input type="text" className="form-control" name="Signup_ph" value={editedUserData.Signup_ph} onChange={handleChange} />
                ) : (
                  <p className="form-control-static">{userData.Signup_ph}</p>
                )}
              </div>
              {isEditing ? (
                <button type="button" className="btn btn-primary" onClick={handleSave}>저장하기</button>
              ) : (
                <button type="button" className="btn btn-secondary" onClick={handleEdit}>수정하기</button>
              )}
            </form>
          ) : (
            <p>회원 정보를 불러오는 중...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Member;
