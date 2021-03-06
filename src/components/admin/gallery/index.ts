import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { ImageViewer, ImageViewerData } from '../../imageViewer/index';
import { ImageService } from '../../../services/image.service';
import {
    Modal,
    BS_MODAL_PROVIDERS,
    // Not used but if not set, TS build errors:
    // Return type of exported function has or is using name 'X'from external module 'Y'
    // but cannot be named.
    BSModal
} from 'angular2-modal/plugins/bootstrap';

@Component({
  selector: 'gallery-management',
  templateUrl: 'src/components/admin/gallery/index.html',
  directives: [ NgFor ],
  providers: [ ImageService, BS_MODAL_PROVIDERS ]
})

export class GalleryManagement implements OnInit {
    images = [];
    constructor(public modal: Modal, viewContainer: ViewContainerRef, private imageService: ImageService) {
        console.info('Gallery Management Component Mounted Successfully');
        modal.defaultViewContainer = viewContainer;
    }

    ngOnInit() {
        this.imageService.getImages()
            .then((images) => { this.images = images; })
            .catch((err) => { console.error(err); });
    }

    open(index) {
        this.modal.open(ImageViewer, new ImageViewerData(index, this.images));
    }
}
