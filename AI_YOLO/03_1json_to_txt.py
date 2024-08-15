import cv2
import json
import time
import os
import shutil

txt = os.getcwd().replace('\\','/') + '/AI_YOLO/After/txt'
Json = os.getcwd().replace('\\','/') + '/AI_YOLO/After/label'

json_list = os.listdir(Json)

num = {'케일_생육기_잎': 0, '케일_생육기_주': 1, '케일_정식기_잎': 2, '케일_정식기_주': 3, '케일_수확기_주': 4, '케일_수확기_잎': 5, '케일_생육기_줄기': 6, '케일_생육기_과실': 7,
       '상추_정식기_주': 8, '상추_정식기_잎': 9, '상추_생육기_주': 10, '상추_생육기_잎': 11, '상추_생육기_줄기': 12, '상추_수확기_잎': 13, '상추_수확기_주': 14, '상추_생육기_과실': 15, 
       '상추_정식기_줄기': 16}

id_num = len(num)
print(num, id_num)

for i in json_list:
    with open(Json + '/' + i, 'r', encoding = 'utf-8') as f:
        d = json.load(f)

    maxx = int(d['images']['width'])
    maxy = int(d['images']['height'])

    txtf = open(txt + '/' + i.split('.json')[0] + '.txt', 'w')

    for j in d['annotations']:
        for z in d['categories']:
            if(j['id'] == z['id']):
                id = d['images']['crops'] + '_' + d['images']['growth_stage'] + '_' + z['name']           
                if(num.get(id) == None):
                    num[id] = id_num
                    id_num += 1
                xx = float(j['bbox'][2])
                yy = float(j['bbox'][3])
                x = float((j['bbox'][0] + float(xx)/2))
                y = float((j['bbox'][1] + float(yy)/2))
                txtf.write("%d %f %f %f %f\n" % (num[id], float(x/maxx) , float(y/maxy), float(xx/maxx), float(yy/maxy)))
                break
    txtf.close()
print(num)