import os

# os.chdir('C:/Users/tjqja/GitHub/SW_Team_PR/Manager')
# print(os.getcwd())
import mysql.connector

# 1. 연결
conn = mysql.connector.connect(host='localhost', port='8808', database='test', user='root', password='1234', charset='utf8')

# 2. 커서 생성하기
cur = conn.cursor(buffered=True)

# cur.execute("DROP TABLE FarmUser")
# cur.execute("DROP TABLE Coun")
# cur.execute("DROP TABLE Coun_M")
# cur.execute("DROP TABLE Corp")

# 3. 테이블 만들기 - 0이 나오면 잘 되는 것
# cur.execute("CREATE TABLE FarmUser (F_User_id int, F_User_pw char(15), F_Username char(20), F_Hire_Num char(20), F_role bool)")
# cur.execute("CREATE TABLE Coun (Farm_id char(10), Coun_id char(10))")
# cur.execute("CREATE TABLE Coun_M (Coun_M_id char(20), Coun_M_conf_id char(15), Corp_id int, temp float, humidity float, video_address char(255),created_at timestamp)")
# cur.execute("CREATE TABLE Corp (corps_id int, corps_name char(20), corps_cnt int)")
# cur.execute("create table Coun_fil (index int, FileAddr char(40))")

# cur.execute("SELECT CONCAT(Farm_id, Coun_id) as Coun_M_i FROM coun")

# 4. 데이터 입력하기 - 1이 나오면 잘 되는 것
# cur.execute("INSERT INTO Corp VALUES(0, 'Lettuce', 1)")
# cur.execute("INSERT INTO Corp VALUES(1, 'Chard', 1)")
# cur.execute("INSERT INTO Corp VALUES(2, 'Mustard_greens', 1)")
# cur.execute("INSERT INTO Corp VALUES(3, 'Kale', 1)")
# cur.execute("INSERT INTO Coun VALUES('0', '1')")

# cur.execute("INSERT INTO Coun_M VALUES(SELECT CONCAT(Farm_id, Coun_id) as Coun_M_id FROM coun,'a',1,1.0,1.0,'2323424234')")

# cur.execute("SELECT * FROM Corp")

# mc = cur.fetchall()
# for x in mc:
#     print(x)

# while True:
#     c = cur.fe
# 5. 입력한 데이터 저장하기
conn.commit()

# 6. MySQL 연결 종료하기
conn.close()