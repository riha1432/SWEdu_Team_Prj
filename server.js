const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {

}); 

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname + './site/src')));

app.get('/', function(요청, 응답){
  응답.sendFile(path.join(__dirname, './site/App.js'));
})

app.get('/DB', function(요청, 응답){
  응답.json()
})

app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, './site/App.js'));
});