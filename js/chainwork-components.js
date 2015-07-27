
/*
---
name: imagePreload
description: Simple image preloader designed to keep running no matter what
license: MIT-style license.

example:
chain.add({
    componentName: 'imagePreload',
    settings: {
        images: ['shadow.png', 'pizza1.png', 'pizza2.png', 'pizza3.png', , 'pizza4.png'],
        prefix: 'images/menu'
        each: function(counter, percent) {
            console.log(counter, percent+'%');
        }
    }

});

notes: prefix can optionaly have tailings slash, its added anyway
...
*/
components.imagePreloader = {
    name: 'imagePreloader',
    settings: {
        images: null,
        prefix: null,
        each: function(counter) {},
        onComplete: function(){},
    },
    job: function() {
        var self = this;
        var images = this.settings.images;
        var total = images.length;
        var counter = 0;
        var percent = 0;
        for(var i = 0; i<images.length; i++) {
            try {
                var img = new Image();
                if(this.settings.prefix) {
                    //add trailing slash if doesn't exists
                    var prefix = this.settings.prefix.replace(/\/?$/, '/');
                }
                else {
                    prefix = '';
                }
                img.src = prefix + images[i];
                img.onload = function() {
                    counter++;
                    percent = (counter/total)*100;
                    if(self.parent.debug) {
                        console.log('imagePreload loading: ', this);
                    }
                    self.settings.each(counter, percent);
                    if(counter === total) {
                        self.settings.onComplete();
                        self.parent.componentDone(); 
                    }
                }
                img.onerror = function(err) {
                    //prevent component from stoping if last image is not found
                    counter++
                    if(total === counter) {
                        self.settings.each(counter, 100);
                        self.parent.componentDone();
                    }
                }
            } catch(err) {
                console.log(err);
                //pass
            }
        }
    }
};