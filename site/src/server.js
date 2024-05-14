const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  port: 8808,
  user: 'root',
  password: '1234',
  database: 'test'
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './App.js'));
});

// 회원가입 및 회원 목록 조회 엔드포인트
app.post('/signup', function(req, res) {
  const { username, email, password, address, phoneNumber } = req.body;

  // 회원가입 정보를 데이터베이스에 저장하는 로직
  const signUpQuery = `INSERT INTO signup (Signup_email, Signup_pw, Signup_name, Signup_addr, Signup_ph) VALUES (?, ?, ?, ?, ?)`;

  connection.query(signUpQuery, [email, password, username, address, phoneNumber], (err, results, fields) => {
    if (err) {
      console.error('회원가입 실패:', err);
      res.status(500).json({ error: '회원가입에 실패했습니다.' });
    } else {
      console.log('회원가입 성공:', results);

      // 회원 목록을 조회
      const testQuery = "SELECT * FROM test.signup";
      connection.query(testQuery, (err, results, fields) => {
        if (err) {
          console.error('데이터 조회 실패:', err);
          res.status(500).json({ error: '회원 목록 조회에 실패했습니다.' });
        } else {
          console.log('데이터 조회 성공:', results);
          res.status(200).json({ success: true, users: results });
        }
      });
    }
  });
});

// 로그인 엔드포인트
app.post('/login', function(req, res) {
  const { email, password } = req.body;

  // 이메일과 비밀번호를 사용하여 데이터베이스에서 사용자를 조회하는 쿼리를 작성
  const loginQuery = `SELECT * FROM signup WHERE Signup_email = ? AND Signup_pw = ?`;

  connection.query(loginQuery, [email, password], (err, results, fields) => {
    if (err) {
      console.error('로그인 실패:', err);
      res.status(500).json({ error: '로그인에 실패했습니다.' });
    } else {
      // 조회된 결과가 없으면 로그인 실패로 처리
      if (results.length === 0) {
        console.log('로그인 실패: 사용자를 찾을 수 없습니다.');
        res.status(401).json({ error: '사용자를 찾을 수 없습니다. 이메일 또는 비밀번호를 확인하세요.' });
      } else {
        console.log('로그인 성공:', results);

        // 로그인 성공 시 토큰 생성
        const token = generateToken(email); // 이메일을 기반으로 토큰 생성
        res.status(200).json({ success: true, user: results[0], token });
      }
    }
  });
});

// 토큰 생성 함수
function generateToken(email) {
  // 간단한 토큰 생성 예시 (실제로는 보안 강화를 위해 더 복잡한 알고리즘 사용)
  return Buffer.from(email).toString('base64');
}

app.get('/userinfo', function(req, res) {
  const token = req.headers.authorization.split(' ')[1]; // Authorization 헤더에서 토큰 추출
  const email = Buffer.from(token, 'base64').toString(); // 토큰을 디코딩하여 이메일 추출

  // 이메일을 사용하여 데이터베이스에서 회원 정보를 조회하는 쿼리 작성
  const userInfoQuery = `SELECT * FROM signup WHERE Signup_email = ?`;

  connection.query(userInfoQuery, [email], (err, results, fields) => {
    if (err) {
      console.error('회원 정보 조회 실패:', err);
      res.status(500).json({ error: '회원 정보 조회에 실패했습니다.' });
    } else {
      if (results.length === 0) {
        console.log('사용자를 찾을 수 없습니다.');
        res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
      } else {
        console.log('회원 정보 조회 성공:', results);
        res.status(200).json(results[0]);
      }
    }
  });
});

app.put('/updateuserinfo', function(req, res) {
  const { Signup_email, Signup_pw, Signup_name, Signup_addr, Signup_ph } = req.body;
  
  // 클라이언트에서 전달된 토큰 추출
  const token = req.headers.authorization.split(' ')[1]; 
  // 토큰 디코딩하여 이메일 추출
  const email = Buffer.from(token, 'base64').toString();

  // 이메일을 사용하여 회원 정보 업데이트
  const updateQuery = `UPDATE signup SET Signup_pw = ?, Signup_name = ?, Signup_addr = ?, Signup_ph = ? WHERE Signup_email = ?`;
  connection.query(updateQuery, [Signup_pw, Signup_name, Signup_addr, Signup_ph, email], (err, results) => {
    if (err) {
      console.error('회원 정보 업데이트 실패:', err);
      res.status(500).json({ error: '회원 정보 업데이트에 실패했습니다.' });
    } else {
      console.log('회원 정보 업데이트 성공:', results);
      res.status(200).json({ success: true });
    }
  });
});





app.listen(10004, () => {
  console.log('서버 실행 중...http://localhost:10004');
});
