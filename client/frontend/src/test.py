import time
from cv2 import cv2
import mss
import numpy as np
from pynput.keyboard import Key, Controller

keyboard = Controller()
kernel = np.ones((5,5),np.uint8)

with mss.mss() as sct:
    # Part of the screen to capture
    monitor = {'top': 295, 'left': 380, 'width': 600, 'height': 135}

    while (True):
        last_time = time.time()
       
        # Get raw pixels from the screen, save it to a Numpy array
        img = np.array(sct.grab(monitor))

        hsv = cv2.cvtColor(img,cv2.COLOR_BGR2HSV)

        l_b = np.array([0,0,0])
        u_b = np.array([150,150,150])

        mask = cv2.inRange(hsv,l_b,u_b)

        dilation = cv2.dilate(mask,kernel,iterations = 1)

        color = dilation[91,113] # row major, like in opencv
        color2 = dilation[63,83] # row major, like in opencv
        print(color)
        print(color2)
        if (color==255):
            
            keyboard.press(Key.space)
            keyboard.release(Key.space)

        if ((color2 == 255) & (color == 0)):
            keyboard.press(Key.down)
            time.sleep(0.3)
            keyboard.release(Key.down)
            

        cv2.imshow('OpenCV/Numpy normal', dilation)

        # Display the picture in grayscale
         #cv2.imshow('OpenCV/Numpy grayscale',img)
         #cv2.cvtColor(img, cv2.COLOR_BGRA2GRAY))

        #print('fps: {0}'.format(1 / (time.time()-last_time)))

        # Press "q" to quit
        if cv2.waitKey(25) & 0xFF == ord('q'):
            cv2.destroyAllWindows()
            break
