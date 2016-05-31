import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
    getBlogs() {
        return Promise.resolve(items);
    }
}

// mock data
var items = [{
    title: "My work stuff at the desk",
    summary: "Fly, air beast evening yielding you it seas Void above is let male. Made lights bearing signs blessed sixth which after morning. Image living were unto subdue fifth.",
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Beauty undefined in Sunlight",
    summary: "Fly, air beast evening yielding you it seas Void above is let male. Made lights bearing signs blessed sixth which after morning. Image living were unto subdue fifth.",
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Locomotive looking Camera",
    summary: "Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.",
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Locomotive looking Camera",
    summary: "Rule. Behold beginning life of Dominion his, let thing.",
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}];