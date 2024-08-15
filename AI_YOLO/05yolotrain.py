from ultralytics import YOLO
import torch
import os
from datetime import datetime

os.chdir(os.getcwd().replace('\\','/') + '/AI_YOLO')

torch.backends.cudnn.enabled = False

model = YOLO('team_PR/train6/weights/best.pt')
model.train(data = "train.yaml", epochs = 20, batch = 25,
            project = "team_PR", workers=0)


now = datetime.now()
print("현재 : ", now)
