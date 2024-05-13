const express = require('express');
const path = require('path');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
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

app.post('/signup', function(req, res) {
  const { username, email, password, address, phoneNumber } = req.body;
  
  // 회원가입 정보를 데이터베이스에 저장하는 로직을 추가합니다.
  const signUpQuery = `INSERT INTO signup (Signup_email, Signup_pw, Signup_name, Signup_addr, Signup_ph) VALUES (?, ?, ?, ?, ?)`;
  
  connection.query(signUpQuery, [email, password, username, address, phoneNumber], (err, results, fields) => {
    if (err) {
      console.error('회원가입 실패:', err);
      res.status(500).json({ error: '회원가입에 실패했습니다.' });
    } else {
      console.log('회원가입 성공:', results);
      res.status(200).json({ success: true });
    }
  });
});

app.post('/login', function(req, res) {
  const { email, password } = req.body;

  // 이메일과 비밀번호를 사용하여 데이터베이스에서 사용자를 조회하는 쿼리를 작성합니다.
  const loginQuery = `SELECT * FROM signup WHERE Signup_email = ? AND Signup_pw = ?`;

  connection.query(loginQuery, [email, password], (err, results, fields) => {
    if (err) {
      console.error('로그인 실패:', err);
      res.status(500).json({ error: '로그인에 실패했습니다.' });
    } else {
      // 조회된 결과가 없으면 로그인 실패로 처리합니다.
      if (results.length === 0) {
        console.log('로그인 실패: 사용자를 찾을 수 없습니다.');
        res.status(401).json({ error: '사용자를 찾을 수 없습니다. 이메일 또는 비밀번호를 확인하세요.' });
      } else {
        console.log('로그인 성공:', results);

        // 사용자 정보를 클라이언트에 전송합니다.
        res.status(200).json({ success: true, user: results[0] });
      }
    }
  });
});

app.get('/signup', function(req, res) {
  selectData(res);
});

function selectData(res) {
  const testQuery = "SELECT * FROM test.signup";
  
  connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
      console.error('데이터 조회 실패:', err);
      res.status(500).json({ error: '데이터 조회에 실패했습니다.' });
    } else {
      console.log('데이터 조회 성공:', results);
      res.status(200).json(results);
    }
  });
}

app.listen(10004, () => {
  console.log('서버 실행 중...http://localhost:10004');
});
