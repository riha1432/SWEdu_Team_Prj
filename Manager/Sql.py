import mysql.connector
import pandas as pd
from pandas import DataFrame

class sql:
    def __init__(self):
        conn = None
    
    def SqlConnect(self, host, port, user, pwd):
        try:
            self.conn = mysql.connector.connect(host=host, port=port, database='test', user=user, password=pwd, charset='utf8')
        except Exception as e:
            print(e)
            print("DB 연결 실패")

    def select(self, Cmd):
        try:
            # print(Cmd)
            cur = self.conn.cursor(buffered=True)
            cur.execute(Cmd)
            mc = cur.fetchall()
            self.conn.commit()
            return mc
        except Exception as e:
            print('error')
            return 0