
const XcriptX = require('../events');
const {
    MessageType,
    GroupSettingChange,
    Mimetype,
    MessageOptions
} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
const thumb='https://telegra.ph/file/3a5d3e185fed50d94ec63.jpg'
let tk = Config.WORKTYPE == 'public' ? false: true

XcriptX.addCommand({ pattern: 'ol paper', fromMe: tk,
}, (async (message, match) => {
        // send a list main  subject
       const rows15 =[{title: ' 🗃️2015 O/L Main Subjects Papers🗃️ ', description:    "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2015```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2015```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2015```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2015```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2015```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2015``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 1st bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2015```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2015```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2015```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2015```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2015```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2015```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2015```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2015```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2015``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 2nd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2015```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2015```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2015```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2015```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2015```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2015```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2015```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2015``` ", rowId: "rowid1"},
                      {title: ' 🗃️2015 3rd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2015```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2015``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2015```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2015```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2015```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2015``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2015``` ", rowId: "rowid1"} ]

        const rows16 =[{title: ' 🗃️2016 O/L Main Subjects Papers🗃️ ', description:    "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2016```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2016```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2016```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2016```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2016```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2016``` ", rowId: "rowid1"},
                      {title: ' 🗃️2016 1st bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2016```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2016```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2016```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2016```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2016```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2016```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2016```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2016```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2016``` ", rowId: "rowid2"},
                      {title: ' 🗃️2016 2nd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2016```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2016```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2016```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2016```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2016```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2016```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2016```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2016``` ", rowId: "rowid1"},
                      {title: ' 🗃️2016 3rd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2016```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2016``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2016```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2016```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2016```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2016``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2016``` ", rowId: "rowid1"} ]
 
        const rows17 =[{title: ' 🗃️2017 O/L Main Subjects Papers🗃️ ', description:    "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2017```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2017```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2017```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2017```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2017```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2017``` ", rowId: "rowid1"},
                      {title: ' 🗃️2017 1st bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2017```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2017```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2017```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2017```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2017```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2017```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2017```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2017```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2017``` ", rowId: "rowid3"},
                      {title: ' 🗃️2017 2nd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2017```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2017```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2017```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2017```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2017```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2017```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2017```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2017``` ", rowId: "rowid1"},
                      {title: ' 🗃️2017 3rd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2017```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2017``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2017```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2017```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2017```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2017``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2017``` ", rowId: "rowid1"} ]

        const rows18 =[{title: ' 🗃️2018 O/L Main Subjects Papers🗃️ ', description:    "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2018```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2018```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2018```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2018```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2018```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2018``` ", rowId: "rowid1"},
                      {title: ' 🗃️2018 1st bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2018```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2018```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2018```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2018```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2018```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2018```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2018```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2018```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2018``` ", rowId: "rowid4"},
                      {title: ' 🗃️2018 2nd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2018```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2018```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2018```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2018```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2018```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2018```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2018```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2018``` ", rowId: "rowid1"},
                      {title: ' 🗃️2018 3rd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2018```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2018``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2018```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2018```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2018```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2018``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2018``` ", rowId: "rowid1"} ]

        const rows19 =[{title: ' 🗃️2019 O/L Main Subjects Papers🗃️ ', description:    "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _සිංහල_\n🔹 *Command* - ```osin 2019```\n\n📘 *Subject* - _විද්‍යාව_\n🔹 *Command* - ```osci 2019```\n\n📘 *Subject* - _ගණිතය_\n🔹 *Command* - ```omaths 2019```\n\n📘 *Subject* - _ඉතිහාසය_\n🔹 *Command* - ```ohis 2019```\n\n📘 *Subject* - _ඉංග්‍රීසි_\n🔹 *Command* - ```oen 2019```\n\n📘 *Subject* - _බුද්ධ ධර්මය_\n🔹 *Command* - ```obu 2019``` ", rowId: "rowid1"},
                      {title: ' 🗃️2019 1st bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙමළ භාශාව_\n🔹 *Command* - ```otamil 2019```\n\n📘 *Subject* - _සංගීතය_\n🔹 *Command* - ```omusic 2019```\n\n📘 *Subject* - _නාට්‍ය හා රංග කලාව_\n🔹 *Command* - ```odrama 2019```\n\n📘 *Subject* - _නර්තනය (දේශීය)_\n🔹 *Command* - ```odanceori 2019```\n\n📘 *Subject* - _නර්තනය (භාරතීය)_\n🔹 *Command* - ```odanceb 2019```\n\n📘 *Subject* - _චිත්‍ර කලාව_\n🔹 *Command* - ```oart 2019```\n\n📘 *Subject* - _දෙමළ රසාස්වාදය_\n🔹 *Command* - ```otlit 2019```\n\n📘 *Subject* - _ඉංග්‍රීසි රසාස්වාදය_\n🔹 *Command* - ```oliten 2019```\n\n📘 *Subject* - _සිංහල රසාස්වාදය_\n🔹 *Command* - ```osilit 2019``` ", rowId: "rowid5"},
                      {title: ' 🗃️2019 2nd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _දෙවන බස දෙමළ _\n🔹 *Command* - ```oslant 2019```\n\n📘 *Subject* - _ජපන් භාශාව_\n🔹 *Command* - ```ojapan 2019```\n\n📘 *Subject* - _හින්දි භාශාව_\n🔹 *Command* - ```ohindi 2019```\n\n📘 *Subject* - _භූගෝලය_\n🔹 *Command* - ```ogeog 2019```\n\n📘 *Subject* - _පුරවැසි අධ්‍යාපනය_\n🔹 *Command* - ```ocivic 2019```\n\n📘 *Subject* - _ව්‍යාපාර හා ගිනුම්කරණ අධ්‍යයනය _\n🔹 *Command* - ```oentrenstu 2019```\n\n📘 *Subject* - _ව්‍යවසායකත්ව අධ්‍යයනය_\n🔹 *Command* - ```obusiac 2019```\n\n📘 *Subject* - _ප්‍රංශ භාශාව_\n🔹 *Command* - ```ofrench 2019``` ", rowId: "rowid1"},
                      {title: ' 🗃️2019 3rd bracket Subjects Papers🗃️ ', description:   "《《=====●|:|🔅|:|●=====》》\n\n📘 *Subject* - _තොරතුරු හා සන්නිවේදන තාක්ශනය_\n🔹 *Command* - ```oict 2019```\n\n📘 *Subject* - _ගෘහ ආර්තික විද්‍යාව_\n🔹 *Command* - ```ohomec 2019``` \n\n📘 *Subject* - _සෞඛ්‍ය හා ශාරීරික අධ්‍යාපනය _\n🔹 *Command* - ```ohelth 2019```\n\n📘 *Subject* - _නිර්මාණ කරනය හා තාක්ශණය_\n🔹 *Command* - ```odisigntech 2019```\n\n📘 *Subject* - _සන්නිවේදනා හා මාද්‍ය අධ්‍යයනය_\n🔹 *Command* - ```omedia 2019```\n\n📘 *Subject* - _ශිල්ප කලා_\n🔹 *Command* - ```oarcraft 2019``` \n\n📘 *Subject* - _කෘශිකර්මය හා ආහාර තක්ශණය_\n🔹 *Command* - ```oagree 2019``` ", rowId: "rowid1"} ]


                     const sections = [{ title: "2015 main subjects and brackert subjects", rows: rows15},
                                       { title: "2016 main subjects and brackert subjects", rows: rows16},
                                       { title: "2017 main subjects and brackert subjects", rows: rows17},
                                       { title: "2018 main subjects and brackert subjects", rows: rows18},
                                       { title: "2019 main subjects and brackert subjects", rows: rows19}]

        const button = {
            buttonText: 'Click Me',
            description: "2015 සිට  2019 දක්වා වූ පසුගිය වසරවල paast papers",
            sections: sections,
            listType: 1
        }

        await message.client.sendMessage(message.jid, button, MessageType.listMessage)

    }));

    XcriptX.addCommand({ pattern: 'tt', fromMe: tk,
}, (async (message, match) => {
    const buttons = [
        {buttonId: 'id1'+thumb, buttonText: {displayText: 'Button 1'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
      ]
      var logo = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
      var PIC = Buffer.from(logo.data)
      const media = await message.client.prepareMessage(message.jid, PIC, MessageType.image, { thumbnail: PIC })
      const buttonMessage = {
          contentText: "Hi it's button message",
          footerText: 'Hello World',
          buttons: buttons,
          headerType: 4,
          imageMessage: media.message.imageMessage
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    }));
    XcriptX.addCommand({ pattern: 't1', fromMe: tk,
}, (async (message, match) => {
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'Button 1'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'Button 2'}, type: 1}
      ]
      
      const buttonMessage = {
        image : thumb,
          contentText: "Hi it's button message",
          footerText: 'Hello World',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)
    }));





    XcriptX.addCommand({ pattern: 't2', fromMe: tk,
}, (async (message, match) => {

  
    const buttons = [
        {buttonId: '.update now', buttonText: {displayText: '⬆️ Update now' }, type: 1},
    ]
      const buttonMessage = {
          contentText: "Hi it's button message",
          footerText: 'Hello World',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

     
    }));

