"use strict";
var HoldLog = console.log;
console.log = function() {};
let now1 = new Date();
queueMicrotask(function() {
    function o() {
        HoldLog.apply(console, arguments)
    }
    var c = new Date("01/01/2023 00:00:00")
      , c = (now1.setTime(now1.getTime() + 250),
    (now1 - c) / 1e3 / 60 / 60 / 24)
      , c = ["欢迎来到landv`Blog!", "生活明朗, 万物可爱", " \n                                                     \n88                                    88               \n88                                    88               \n88                                    88               \n88  ,adPPYYba,  8b,dPPYba,    ,adPPYb,88  8b       d8  \n88  \"\"     `Y8  88P'   `\"8a  a8\"    `Y88  `8b     d8'  \n88  ,adPPPPP88  88       88  8b       88   `8b   d8'   \n88  88,    ,88  88       88  \"8a,   ,d88    `8b,d8'    \n88  `\"8bbdP\"Y8  88       88   `\"8bbdP\"Y8      \"8\"", "landv`Blog 已上线", Math.floor(c), "天", "©2023 By landv"]
      , n = ["NCC2-036", "调用前置摄像头拍照成功，识别为【小笨蛋】.", "Photo captured: ", "🤪"];
    setTimeout(o.bind(console, "\n%c".concat(c[0], " %c ").concat(c[1], " %c ").concat(c[2], " %c").concat(c[3], "%c ").concat(c[4], "%c ").concat(c[5], "\n\n%c ").concat(c[6], "\n"), "color:#3b70fc", "", "color:#3b70fc", "color:#3b70fc", "", "color:#3b70fc", "")),
    setTimeout(o.bind(console, "%c ".concat(n[0], " %c ").concat(n[1], " %c \n").concat(n[2], " %c\n").concat(n[3], "\n"), "color:white; background-color:#4fd953", "", "", 'background:url("") no-repeat;font-size:450%')),
    setTimeout(o.bind(console, "%c WELCOME %c 你好，小笨蛋.", "color:white; background-color:#4f90d9", "")),
    setTimeout(console.warn.bind(console, "%c ⚡ Powered by landv %c 你正在访问 landv 的博客.", "color:white; background-color:#f0ad4e", "")),
    setTimeout(o.bind(console, "%c W23-12 %c 你已打开控制台.", "color:white; background-color:#4f90d9", "")),
    setTimeout(console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中.", "color:white; background-color:#d9534f", ""))
});

// http://www.network-science.de/ascii/


