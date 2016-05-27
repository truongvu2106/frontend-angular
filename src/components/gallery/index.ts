import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ImageViewer } from '../imageViewer/index';
import { ImageService } from '../../services/image.service';
@Component({
  selector: 'gallery',
  templateUrl: 'src/components/gallery/index.html',
  directives: [ NgFor, ImageViewer ],
  providers: [ ImageService ]
})

export class Gallery implements OnInit {
    images;
    imageViewer = new ImageViewer();
    constructor(private imageService: ImageService) {
        console.info('Gallery Component Mounted Successfully');
    }

    ngOnInit() {
        this.imageService.getImages()
            .then((images) => this.images = images)
            .catch((err) => console.error(err));
    }

    open(index) {
        console.log("Open image: ");
        console.log(this.images[index]);
        this.imageViewer.open(index, this.images);
    }
}
