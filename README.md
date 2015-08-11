BEMOVED.JS
========
 
#### [Demo](http://apps.tweecode.com/custom/scrolltest/)
This project is inspired by Sony's [Be moved](http://www.sony.com/be-moved/) page.

Easily create stunning scrolling effects by mixing image sequence with web content. The best way to get started is to clone the repo and take a look at the code.

###Images  
If you have a video you want to play in the background on scroll, I recommend exporting it as .jpeg - 15fps. That's lower framerate than usual in animations, but keep in mind we are not working with fps, rather scrolled pixels per frame.  
It's important to keep the image size as low as possible. So to make things look nice the script loads high resolution version of the current image/frame when user stops scrolling.  

NOTE: The images in this project is only for demonstration and should not be used in any other projects.

###Short note on the code
If you want to fork this(and please do) there are two main classes in this project  
BGMovie - is responsible for the canvas / image animation  
SpotLight - Takes the frame index from BGMovie and reveals elements in sync with the background animation.
