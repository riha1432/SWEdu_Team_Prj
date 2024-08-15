from ultralytics import YOLO
import os


os.chdir(os.getcwd().replace('\\','/') + '/AI_YOLO')

def model4():
    model = YOLO('team_PR/train2/weights/best.pt')
    result = model.predict(source = 'VS_2.근대2',
                            save=True, conf = 0.70)

model4()
