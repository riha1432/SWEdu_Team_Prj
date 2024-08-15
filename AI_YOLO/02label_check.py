import cv2
import json
import time
import os
import shutil

os.chdir(os.getcwd().replace('\\','/') + '/AI_YOLO')

Bimg = 'Before/img'
Blabel = 'Before/label'
Aimg = 'After/img'
Alabel = 'After/label'

file_img = os.listdir(Bimg)
label_img = os.listdir(Blabel)

new_label_list = []
for i in label_img:
    new_label_list.append(i.split('.json')[0])

disease = []
idx = 0

# print(os.getcwd())
for i in file_img[5000:]:
    try:
        with open(Blabel + '/' + i.split('.jpg')[0] + '.json','r', encoding = 'utf-8') as f:
            d = json.load(f)
            
        # frame = cv2.imread(Bimg + '/' + i)
        # for j in d['annotations']:
        #     x = j['bbox'][0]
        #     y = j['bbox'][1]
        #     xx = j['bbox'][2]
        #     yy = j['bbox'][3]
        #     cv2.rectangle(frame, (int(x), int(y), int(xx), int(yy)), (0, 0, 0), 10)

        # a = int(int(d['images']['width'])/2)
        # b = int(int(d['images']['height'])/2)
        # a= cv2.resize(frame, (a, b) )
        # cv2.imshow('a', a)
        # cv2.waitKey(1)
        # time.sleep(0.02)
        # print(idx, i)
        idx = idx + 1
        shutil.move(Bimg + '/' + i, Aimg)
        shutil.move(Blabel + '/' + i.split('.jpg')[0] + '.json', Alabel)
    except:
        pass

    

    




