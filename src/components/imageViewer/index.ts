import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'image-viewer',
  templateUrl: 'src/components/imageViewer/index.html'
})

export class ImageViewer {
    waiting: any;
    currentIndex: any;
    imagesList: any[];
    constructor() {
        this.waiting = false;
        this.currentIndex = 0;
        this.imagesList = [];
    }
    open(index: any, images: any) {
        this.currentIndex = index;
        this.imagesList = images;
        var added = this.createImage(this.imagesList[this.currentIndex].thumbnail);
        $('image-viewer').find('.mn-image-container').html(added);
        $('image-viewer').find('.modal').modal();
    }
    goNextImage() {
        if (this.waiting) {
            return;
        }
        this.waiting = true;
        this.currentIndex++;
        if (this.currentIndex >= this.imagesList.length) {
            this.currentIndex = 0;
        }
        var tmp = $('image-viewer').find('.mn-image-container').find('img');
        tmp.removeClass('active');
        tmp.addClass('left');
        var added = this.createImage(this.imagesList[this.currentIndex].thumbnail)
            .addClass('right').hide();
        setTimeout(function() {
            tmp.remove();
            $('image-viewer').find('.mn-image-container').append(added);
            added.show();
            added.removeClass('right');
            added.addClass('active');
            this.waiting = false;
        }, 500);
    }
    goPrevImage() {
        if (this.waiting) {
            return;
        }
        this.waiting = true;
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.imagesList.length - 1;
        }
        var tmp = $('image-viewer').find('.mn-image-container').find('img');
        tmp.removeClass('active');
        tmp.addClass('right');
        var added = this.createImage(this.imagesList[this.currentIndex].thumbnail)
            .addClass('left').hide();
        $('image-viewer').find('.mn-image-container').append(added);
        setTimeout(function() {
            tmp.remove();
            added.show();
            added.removeClass('left');
            added.addClass('active');
            this.waiting = false;
        }, 500);
    }
    createImage(imgUrl) {
        return $('<img>').attr({
            'src': imgUrl
        }).on('click', this.goNextImage);
    }
}
