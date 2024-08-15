import os
import shutil
import tarfile

path = os.getcwd().replace('\\','/')
movepath = os.getcwd().replace('\\','/') + '/disease/img'

list = os.listdir(path + '/train/images')
for i in list:
    shutil.move(path + '/train/images/' + i, movepath)

list = os.listdir(path + '/test/images')
for i in list:
    shutil.move(path + '/test/images/' + i, movepath)

list = os.listdir(path + '/val/images')
for i in list:
    shutil.move(path + '/val/images/' + i, movepath)



list = os.listdir(path + '/train/labels')
for i in list:
    os.remove(path + '/train/labels/' + i)

list = os.listdir(path + '/test/labels')
for i in list:
    os.remove(path + '/test/labels/' + i)

list = os.listdir(path + '/val/labels')
for i in list:
    os.remove(path + '/val/labels/' + i)

