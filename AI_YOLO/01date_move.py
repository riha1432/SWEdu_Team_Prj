import os
import shutil
import tarfile

old_label_path = 'C:/Users/kiusw/Desktop/새 폴더/라벨'
old_img_path = 'C:/Users/kiusw/Desktop/새 폴더/원천'
new_label_path = os.getcwd().replace('\\','/') + '/AI_YOLO/Before/label'
new_img_path = os.getcwd().replace('\\','/') + '/AI_YOLO/Before/img'

# os.chdir(old_label_path)
# list = os.listdir()
# for i in list:
#     ap = tarfile.open(i)
#     ap.extractall(old_label_path)
#     ap.close()


# os.chdir(old_img_path)
# list = os.listdir()
# for i in list:
#     ap = tarfile.open(i)
#     ap.extractall(new_img_path)
#     ap.close()

os.chdir(old_label_path + '/..')
img_list = os.listdir('원천')
lebel_list = os.listdir('라벨')
# print(img_list)
for i in lebel_list:
    try:
        l = os.listdir('라벨/'+i)
        for j in l:
            shutil.move(old_label_path + '/' + i + '/' + j, new_label_path)
    except:
        pass


for i in img_list:
    try:
        l = os.listdir('원천/'+i)
        for j in l:
            shutil.move(old_img_path + '/' + i + '/' + j, new_img_path)
    except:
        pass
