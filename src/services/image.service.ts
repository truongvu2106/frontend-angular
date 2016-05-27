import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
    getImages() {
        return Promise.resolve(items);
    }
}

// mock data
var items = [{
    thumbnail: "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg"
}, {
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg"
}, {
    thumbnail: "http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg"
}, {
    thumbnail: "http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg"
}, {
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg"
}, {
    thumbnail: "http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg"
}, {
    thumbnail: "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg"
}, {
    thumbnail: "http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg"
}, {
    thumbnail: "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg"
}, {
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg"
}, {
    thumbnail: "http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg"
}, {
    thumbnail: "http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg"
}, {
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg"
}, {
    thumbnail: "http://th03.deviantart.net/fs70/200H/f/2010/256/0/9/painting_of_nature_by_dhikagraph-d2ynalq.jpg"
}, {
    thumbnail: "http://2.bp.blogspot.com/-H6MAoWN-UIE/TuRwLbHRSWI/AAAAAAAABBk/89iiEulVsyg/s400/Free%2BNature%2BPhoto.jpg"
}, {
    thumbnail: "http://blog.arborday.org/wp-content/uploads/2013/02/NEC1-300x200.jpg"
}];