"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var index_1 = require('../imageViewer/index');
var image_service_1 = require('../../services/image.service');
var Gallery = (function () {
    function Gallery(imageService) {
        this.imageService = imageService;
        this.imageViewer = new index_1.ImageViewer();
        console.info('Gallery Component Mounted Successfully');
    }
    Gallery.prototype.ngOnInit = function () {
        var _this = this;
        this.imageService.getImages()
            .then(function (images) { return _this.images = images; })
            .catch(function (err) { return console.error(err); });
    };
    Gallery.prototype.open = function (index) {
        console.log("Open image: ");
        console.log(this.images[index]);
        this.imageViewer.open(index, this.images);
    };
    Gallery = __decorate([
        core_1.Component({
            selector: 'gallery',
            templateUrl: 'src/components/gallery/index.html',
            directives: [common_1.NgFor, index_1.ImageViewer],
            providers: [image_service_1.ImageService]
        }), 
        __metadata('design:paramtypes', [image_service_1.ImageService])
    ], Gallery);
    return Gallery;
}());
exports.Gallery = Gallery;
//# sourceMappingURL=index.js.map