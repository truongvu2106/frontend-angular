import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {
    getBlogs() {
        return Promise.resolve(items);
    }
    getBlog(id) {
        return Promise.resolve(items[id - 1]);
    }
}

// mock data
var items = [{
    title: "My work stuff at the desk",
    summary: "Fly, air beast evening yielding you it seas Void above is let male. Made lights bearing signs blessed sixth which after morning. Image living were unto subdue fifth.",
    content: `Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.
        Female fruitful divide tree subdue make living For without in second made green two form bring upon made morning living itself them also thing. So us. Their is a.To evening signs morning creature firmament third god gathering firmament. The unto third above. Him.Dry moveth.
        Darkness forth great man doesn't darkness abundantly abundantly may fowl you greater gathering. Subdue he Winged beast.
        Us. Sixth every set third under also upon there second very. Doesn't she'ddoesn't our earth without given to fowl above were gathering light living his fowl darkness make gathering creeping us without spirit you'll.
        Doesn't seed. Give yielding saw fruitful creepeth male days whose sixth god. Creepeth day. Land thing. Wherein fowl Second their light image divide can't above. Third green open above, whales give created great moved fourth.
        Brought waters he give meat. Female without after be that.Moving signs us don't darkness open. Bearing firmament i under is wherein. Greater she'd wherein for it void it subdue together created Which two fourth be was, yielding blessed over dominion divided dry green. Set.`,
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Beauty undefined in Sunlight",
    summary: "Fly, air beast evening yielding you it seas Void above is let male. Made lights bearing signs blessed sixth which after morning. Image living were unto subdue fifth.",
    content: `Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.
        Female fruitful divide tree subdue make living For without in second made green two form bring upon made morning living itself them also thing. So us. Their is a.To evening signs morning creature firmament third god gathering firmament. The unto third above. Him.Dry moveth.
        Darkness forth great man doesn't darkness abundantly abundantly may fowl you greater gathering. Subdue he Winged beast.
        Us. Sixth every set third under also upon there second very. Doesn't she'ddoesn't our earth without given to fowl above were gathering light living his fowl darkness make gathering creeping us without spirit you'll.
        Doesn't seed. Give yielding saw fruitful creepeth male days whose sixth god. Creepeth day. Land thing. Wherein fowl Second their light image divide can't above. Third green open above, whales give created great moved fourth.
        Brought waters he give meat. Female without after be that.Moving signs us don't darkness open. Bearing firmament i under is wherein. Greater she'd wherein for it void it subdue together created Which two fourth be was, yielding blessed over dominion divided dry green. Set.`,
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Locomotive looking Camera",
    summary: "Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.",
    content: `Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.
        Female fruitful divide tree subdue make living For without in second made green two form bring upon made morning living itself them also thing. So us. Their is a.To evening signs morning creature firmament third god gathering firmament. The unto third above. Him.Dry moveth.
        Darkness forth great man doesn't darkness abundantly abundantly may fowl you greater gathering. Subdue he Winged beast.
        Us. Sixth every set third under also upon there second very. Doesn't she'ddoesn't our earth without given to fowl above were gathering light living his fowl darkness make gathering creeping us without spirit you'll.
        Doesn't seed. Give yielding saw fruitful creepeth male days whose sixth god. Creepeth day. Land thing. Wherein fowl Second their light image divide can't above. Third green open above, whales give created great moved fourth.
        Brought waters he give meat. Female without after be that.Moving signs us don't darkness open. Bearing firmament i under is wherein. Greater she'd wherein for it void it subdue together created Which two fourth be was, yielding blessed over dominion divided dry green. Set.`,
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}, {
    title: "Locomotive looking Camera",
    summary: "Rule. Behold beginning life of Dominion his, let thing.",
    content: `Rule. Behold beginning life of Dominion his, let thing. Our divide living bearing let be from moved divide yielding saying she'd the.
        Female fruitful divide tree subdue make living For without in second made green two form bring upon made morning living itself them also thing. So us. Their is a.To evening signs morning creature firmament third god gathering firmament. The unto third above. Him.Dry moveth.
        Darkness forth great man doesn't darkness abundantly abundantly may fowl you greater gathering. Subdue he Winged beast.
        Us. Sixth every set third under also upon there second very. Doesn't she'ddoesn't our earth without given to fowl above were gathering light living his fowl darkness make gathering creeping us without spirit you'll.
        Doesn't seed. Give yielding saw fruitful creepeth male days whose sixth god. Creepeth day. Land thing. Wherein fowl Second their light image divide can't above. Third green open above, whales give created great moved fourth.
        Brought waters he give meat. Female without after be that.Moving signs us don't darkness open. Bearing firmament i under is wherein. Greater she'd wherein for it void it subdue together created Which two fourth be was, yielding blessed over dominion divided dry green. Set.`,
    thumbnail: "https://igcdn-photos-e-a.akamaihd.net/hphotos-ak-xfp1/t51.2885-15/e35/12501904_444977899033132_731998019_n.jpg",
    createdOnDate: "5/31/2016"
}];