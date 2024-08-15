from flask import Flask, send_file, render_template, Response
from flask_socketio import SocketIO
from ultralytics import YOLO
import cv2
import Sql
import time
import json
import numpy as np
import os

sql = Sql.sql()
sql.SqlConnect(host='localhost', port='8808', user='root', pwd='1234')

app = Flask(__name__)
socketio = SocketIO(app)
port = 40000

Yolo_Select = False
CamStatus = False

Yolo_model = YOLO("best.pt")
list = []
def GenerateFrames():
    # 비디오 캡쳐
    cap = cv2.VideoCapture('vid/cavage_test.mp4')
    # cap.set(3, 640)
    # cap.set(4, 480)
    # cap.set(cv2.CAP_PROP_FPS, 30)

    while cap.isOpened() and CamStatus:
        time.sleep(0.1)
        ref, frame = cap.read()  # 비디오 프레임을 읽어옵니다.
        c = cv2.waitKey(1)
        if not ref:  # 비디오 프레임을 제대로 읽어오지 못했다면 반복문을 종료합니다.
            break
        else:
            if(Yolo_Select == True):
                results = Yolo_model.track(frame, persist=True, conf = 0.4)
                video = results[0].plot()
                try:
                    Json = json.loads(results[0].tojson())
                    list.clear()
                    for i in Json:
                        list.append(i['name'])

                    frame = video
                    socketio.emit('select_list', list)
                except:
                    frame = frame

            ref, buffer = cv2.imencode('.jpg', frame)  # JPEG 형식으로 이미지를 인코딩합니다.
            frame = buffer.tobytes()  # 인코딩된 이미지를 바이트 스트림으로 변환합니다.
            # multipart/x-mixed-replace 포맷으로 비디오 프레임을 클라이언트에게 반환합니다.
                
            yield (b'--frame\r\n'
                    b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n')
            
    cap.release()  # 비디오 캡쳐를 종료합니다.
@app.route('/img/logo.jpg')
def logo():
    return send_file('public/img/logo.jpg', mimetype='image/jpg')
# =======================================================
# Manager.html
@app.route('/')
def index():
    global CamStatus
    CamStatus = True
    return render_template('Manager.html')

@app.route('/stream')
def Stream():
    print('Streaming')
    return Response(GenerateFrames(), mimetype='multipart/x-mixed-replace; boundary=frame')

@socketio.on('Manager_page')
def Managet_ready(message):
    DB = sql.select('select * from result_average')
    # print(DB)
    socketio.emit('suggestion', DB)
    
@socketio.on('select')
def YoloSelect(message):
    global Yolo_Select
    Yolo_Select = True

@socketio.on('reset')
def reset(message):
    global Yolo_Select
    Yolo_Select = False

# =======================================================
# save_list.html

@app.route('/save_list')
def save_list():
    global CamStatus
    CamStatus = False
    return render_template('save_list.html')

@app.route('/img/<string:videoName>')
def video(videoName):
    print(videoName)
    return send_file('result/origin/' + videoName)

@socketio.on('save_page')
def save_page(message):
    DB = sql.select('select * from Corp')
    json = {}
    for send in DB:
        json[send[0]] = send[1]
    socketio.emit('save_page', json)

@socketio.on('save_object_list')
def save_object_list(message):
    cmd = ''
    if message['plant'] != '' and message['grawth'] != '':
        cmd = message['plant'] + '_' + message['grawth']
    elif (message['plant'] == '') and message['grawth'] != '':
        cmd = message['grawth']
    elif message['plant'] != '' and (message['grawth'] == ''):
        cmd = message['plant']

    file_list = os.listdir('result/origin')
    # print(file_list)
    DB = []
    for file in file_list:
        if cmd in file:
            DB.append(file)
    # print(DB)
    socketio.emit('save_object_list', DB)

if __name__ =='__main__':
    app.run(debug = True, host = 'localhost' ,port = 40000)
    