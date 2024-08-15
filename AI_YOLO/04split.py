from sklearn.model_selection import train_test_split
import numpy as np
import os
import shutil

os.chdir(os.getcwd().replace('\\','/') + '/AI_YOLO')

img_list = os.listdir('After/img')
label_list = os.listdir('After/txt')

X_train, X_test, Y_train, Y_test = train_test_split(img_list, label_list, test_size=0.2, random_state=321)
X_train, X_val, Y_train, Y_val = train_test_split(X_train, Y_train, test_size=0.2, random_state=321)

img = 'After/img/'
txt = 'After/txt/'
trainimg = 'train/images/'
traintxt = 'train/labels/'
testimg =  'test/images/'
testtxt = 'test/labels/'
valimg = 'val/images/'
valtxt = 'val/labels/'

for i in X_train:
    shutil.move(img + i, trainimg + i)
for i in X_test:
    shutil.move(img + i, testimg + i)
for i in X_val:
    shutil.move(img + i, valimg + i)

for i in Y_train:
    shutil.move(txt + i, traintxt + i)
for i in Y_test:
    shutil.move(txt + i, testtxt + i)
for i in Y_val:
    shutil.move(txt + i, valtxt + i)