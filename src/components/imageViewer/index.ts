import { Component } from '@angular/core';
import { DialogRef, ModalComponent } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';
declare var $: any;

export class ImageViewerData extends BSModalContext {
    constructor(public index: number, public images: any) {
        super();
    }
}

@Component({
  selector: 'image-viewer',
  templateUrl: 'src/components/imageViewer/index.html'
})

export class ImageViewer implements ModalComponent<ImageViewerData> {
    context: ImageViewerData;
    currentIndex: any;
    currentImage: any;
    imagesList: any[];
    constructor(public dialog: DialogRef<ImageViewerData>) {
        dialog.context.isBlocking = false;
        this.context = dialog.context;
        this.currentIndex = this.context.index;
        this.imagesList = this.context.images;
        this.currentImage = this.imagesList[this.currentIndex];
    }
    close() {
        this.dialog.close();
    }
    goNextImage() {
        var self = this;
        self.currentIndex++;
        if (self.currentIndex >= self.imagesList.length) {
            self.currentIndex = 0;
        }
        self.currentImage = self.imagesList[self.currentIndex];
    }
    goPrevImage() {
        var self = this;
        self.currentIndex--;
        if (self.currentIndex < 0) {
            self.currentIndex = self.imagesList.length - 1;
        }
        self.currentImage = self.imagesList[self.currentIndex];
    }
}
