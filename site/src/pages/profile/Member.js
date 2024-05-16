import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../css/Member.css'; // CSS 파일 경로 수정

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
            <div className="bg">
                <div class="hide-on-pc" style={{ backgrounImage: 'url(${backgroundImageUrl}()' }} />
                <div class="hide-on-mobile" style={{ backgrounImage: 'url(${backgroundImageUrl}()' }} />
            </div>
            <div className="txt-wrap">
                <div className="txt-inner">
                    <h2 className="hidden">조회/예약</h2>
                    <h3 className="title-1 ani-1 delay-1 member-title">회원 정보 및 수정하기</h3>
                    <p className="txt-1 ani-1 delay-2">Ai농가집성마켓은 고객님의 소중한 마음까지 전달합니다.</p>
                </div>
            </div>
        </div>
      <div className="member-container">
      {userData ? (
        <div>
          <div className="member-info">
            <p>이름: {userData.Signup_name}</p>
            <p>이메일: {userData.Signup_email}</p>
            <p>비밀번호: {userData.Signup_pw}</p>
            <p>주소: {userData.Signup_addr}</p>
            <p>전화번호: {userData.Signup_ph}</p>
          </div>
          {isEditing ? (
            <div className="edit-container">
              <div className="input-container">
                <label>이름:</label>
                <input type="text" name="Signup_name" value={editedUserData.Signup_name} onChange={handleChange} />
              </div>
              <div className="input-container">
                <label>비밀번호:</label>
                <input type="text" name="Signup_pw" value={editedUserData.Signup_pw} onChange={handleChange} />
              </div>
              <div className="input-container">
                <label>주소:</label>
                <input type="text" name="Signup_addr" value={editedUserData.Signup_addr} onChange={handleChange} />
              </div>
              <div className="input-container">
                <label>전화번호:</label>
                <input type="text" name="Signup_ph" value={editedUserData.Signup_ph} onChange={handleChange} />
              </div>
              <button className="save-button" onClick={handleSave}>저장</button>
            </div>
          ) : (
            <button className="edit-button" onClick={handleEdit}>수정하기</button>
          )}

        </div>
      ) : (
        <p>회원 정보를 불러오는 중...</p>
      )}
    </div>
</>
  );
};
export default Member;
