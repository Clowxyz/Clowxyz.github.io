var mouseX; var mouseY; var mouseIsDown;
var girl = document.getElementById('profilePic');
var cursor = document.getElementById('cursor');
var q1 = document.getElementById('q1');
var q2 = document.getElementById('q2');
var q3 = document.getElementById('q3');
var q4 = document.getElementById('q4');
var rude = true;
var options = 2;
var www = 0;
var ignantORstpid = 0;
var suicidal = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
});

//Talking Animation
var i = 0;
var l = 0;
var txt = "Merhaba, ben Clow"; /* The text */
var speed = 66; /* The speed/duration of the effect in milliseconds */
var talking = false;
var idle = false;
var mspeed = 20;
//Emotes: normal, melancholy, angry, Happy
var mood = 0;
const _0x3a9773=_0x7d38;(function(_0x6b0654,_0x2e9cc1){const _0x3de7b=_0x7d38,_0x1fe4a9=_0x6b0654();while(!![]){try{const _0x2f4af9=-parseInt(_0x3de7b(0xcc))/0x1*(-parseInt(_0x3de7b(0xc3))/0x2)+parseInt(_0x3de7b(0xc7))/0x3+-parseInt(_0x3de7b(0xcb))/0x4*(-parseInt(_0x3de7b(0xcd))/0x5)+-parseInt(_0x3de7b(0xc6))/0x6*(parseInt(_0x3de7b(0xca))/0x7)+parseInt(_0x3de7b(0xc4))/0x8+parseInt(_0x3de7b(0xd0))/0x9+-parseInt(_0x3de7b(0xce))/0xa;if(_0x2f4af9===_0x2e9cc1)break;else _0x1fe4a9['push'](_0x1fe4a9['shift']());}catch(_0x2237bf){_0x1fe4a9['push'](_0x1fe4a9['shift']());}}}(_0x4b41,0xb1f63));let message='@Clow',index=0x0,typing=!![];function _0x4b41(){const _0x38bfa8=['12103920oKJUHi','2nzeTQI','438624xIdwiA','slice','4253286oFekWZ','2980647QNwCgq','length','onload','7POWXaw','16BANCpG','111795fxeZmR','922820jYxdsM','18054960ATDgVf','title'];_0x4b41=function(){return _0x38bfa8;};return _0x4b41();}function typeTitle(){const _0x2070a0=_0x7d38;index<message[_0x2070a0(0xc8)]?(document[_0x2070a0(0xcf)]=message[_0x2070a0(0xc5)](0x0,index+0x1),index++,setTimeout(typeTitle,0xc8)):setTimeout(removeTitle,0x3e8);}function removeTitle(){const _0x519b55=_0x7d38;index>0x0?(document[_0x519b55(0xcf)][_0x519b55(0xc5)](-0x1)==='@'?index--:(document[_0x519b55(0xcf)]=message[_0x519b55(0xc5)](0x0,index-0x1),index--),setTimeout(removeTitle,0xc8)):(index=0x0,setTimeout(typeTitle,0x64));}function _0x7d38(_0xff2a64,_0x3076a7){const _0x4b4126=_0x4b41();return _0x7d38=function(_0x7d385c,_0x178266){_0x7d385c=_0x7d385c-0xc3;let _0x547913=_0x4b4126[_0x7d385c];return _0x547913;},_0x7d38(_0xff2a64,_0x3076a7);}window[_0x3a9773(0xc9)]=typeTitle;
const moodOpen = ["face/face.png", "face/melancholyOpen.png", "face/face.png", "face/glitchClosed.gif"];
const moodClosed = ["face/closed.png", "face/melancholyClosed.png", "face/melancholyAlert.png", "face/glitchClosed.gif"];
const moodBlink = ["face/tired.png", "face/melancholyBlink.png", "face/melancholyBlink.png", "face/glitchClosed.gif"];

function idlee() {
    if (talking == false) {
        if (idle == false) { girl.src = moodClosed[mood]; setTimeout(function () { idle = true; idlee() }, 0.25 * (randn_bm() + 3) * 5000) }
        else if (idle == true) { girl.src = moodBlink[mood]; setTimeout(function () { idle = false; idlee() }, 100); }
    }
}

document.addEventListener('mousedown', e => {
    speed = 16;
    mspeed = 40;
});

document.addEventListener('mouseup', e => {
    speed = 66;
    mspeed = 20;
});

function typeWriter() {
    if (i < txt.length) {
        rude = true;
        if (talking == false) {
            setTimeout(function () {
                talking = true;
                girl.src = moodOpen[mood];
            }, mspeed);
        }
        else if (talking == true) {
            setTimeout(function () {
                talking = false;
                girl.src = moodClosed[mood];;
            }, mspeed * 2);
        }
        document.getElementById("dialogueBox").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        if (tracker[0].constructor === Array && l + 1 < tracker[0].length) {
            l++
            dialoguer();
        } else {
            console.log('yes')
            rude = false;
            setTimeout(idlee, 5000);
            pAnswers();
        }
        talking = false;
        girl.src = moodClosed[mood];
    }
};

function dialoguer() {
    i = 0;
    if (tracker[0].constructor === Array) { console.log('phase1'); txt = tracker[0][l]; } else {
        txt = tracker[0];
    }
    if (typeof tracker[10] === 'undefined') {
        setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
        setTimeout(typeWriter, 500);
    } else {
        if (l == tracker[10][www]) {
            tracker[11][www].call();
            www++;
        } else {
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    }
}

function uAnswer1() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[6]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer2() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[7]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer3() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[8]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function uAnswer4() {
    if (!rude) {
        stopAnswer();
        tracker = dia[tracker[9]];
        options = tracker[5];
        console.log(options);
        setTimeout(function () { dialoguer(); }, 25);
        return;
    }
};

function stopAnswer() {
    q1.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q1.style.opacity = "0"; q1.style.animation = ""; }, 450);

    q2.style.animation = "disappear 0.5s linear 0s 1 reverse";
    setTimeout(function () { q2.style.opacity = "0"; q2.style.animation = ""; }, 450);

    if (options > 2) {
        q3.style.animation = "disappear 0.5s linear 0s 1 reverse";
        setTimeout(function () { q3.style.opacity = "0"; q3.style.animation = ""; }, 450);
        if (options > 3) {
            q4.style.animation = "disappear 0.5s linear 0s 1 reverse";
            setTimeout(function () { q4.style.opacity = "0"; q4.style.animation = ""; }, 450);
        }
    }
}

function pAnswers() {
    l = 0;
    www = 0;
    if (options > 0) {
        q1.innerHTML = tracker[1];
        q1.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q1.style.opacity = "1"; q1.style.animation = ""; }, 1000);

        q2.innerHTML = tracker[2];
        q2.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q2.style.opacity = "1"; q2.style.animation = ""; }, 1000);
    }

    if (options > 2) {
        q3.innerHTML = tracker[3];
        q3.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q3.style.opacity = "1"; q3.style.animation = ""; }, 1000);

        q4.innerHTML = tracker[4];
        q4.style.animation = "disappear 1s linear 0s 1 normal";
        setTimeout(function () { q4.style.opacity = "1"; q4.style.animation = ""; }, 1000);
    }
}

const dia = {
    p0: [["", "Benim hakkımda ne öğrenmek istersin?"],
        'Sen Kimsin?', 'Kendinden bahseder misin?', '', '', 2,
        '', '', '', '', [0], [
        function () {
            location.reload();
        }
    ]],
    function () {
        setTimeout(function () {
            mood = 3;
            document.getElementById("dialogueBox").style.fontSize = "20px";
            document.getElementById("dialogueBox").innerHTML = "ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼ ğŸ™¼ğŸ™¼ğŸ™¼UNDER CONSTRUCTIONğŸ™¼ğŸ™¼ğŸ™¼";
            pAnswers();
        }, 500);
    },
    a: ['Ben Clow yaklaşık 4 yıldır siber güvenlik ve hack ile ilgileniyorum.',
        'Projelerinden bahseder misin', 'Kendinden bahseder misin?', '', '', 2,
        'aa', 'ab', '', ''],
    b: [['Web Siteler aslında pek ilgimi çekmiyor...', 'Kriptografi ve programlama alanlarını seviyorum.', 'Uzun bir süre Trojan virüsleriyle ilgilendim.','Antivirüsleri bypass etmek ilgimi çekiyor.', 'Dinlediğin için teşekkürler ^-^'],
        'Memnun oldum', '', '', 2,
        'a', 'bb', '', ''],
    ab: [['Web Siteler aslında pek ilgimi çekmiyor...', 'Kriptografi ve programlama alanlarını seviyorum.', 'Uzun bir süre Trojan virüsleriyle ilgilendim.','Antivirüsleri bypass etmek ilgimi çekiyor.', 'Dinlediğin için teşekkürler ^-^'],
        'Memnun oldum', '', '', 2,
        'a', 'bb', '', ''],
    aa: [['Tabii.. şu anda aktif olarak yürüttüğüm projem yok.', 'Ama eski projelerimden örnek verebilirim.', 'Genelde kodu karmaşık ve okunamaz hale getirmek veya...', 'Antivirüsleri atlatmak üzerine araçlar yazarım.', 'Gün içerisinde önüme çıkan problemlere göre kod yazarım.', 'Böylece işler daha pratik ve kolay hale gelir ^-^'],
        'Kodu karmaşık hale getirmek de ne?', 'Araçlarını paylaşıyor musun?', 'Bildiğin programlama dilleri neler', 'Nasıl İletişime Geçebilirim', 4,
        'aaa', 'aab', 'aac', 'aad'],
    aaa: [['Kodu karmaşık hale getirme işlemine "obfuscate" denir..', "Kodun başka insanlar tarafından çalınmaması için önemlidir."],
   
 [
        function () {
            setTimeout(function () {
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = "(she was a fat pig filled with hate and made everyone's life worse)";
                setTimeout(function () {
                    l++;
                    dialoguer();
                }, 128);
            }, 500);
            return;
        }]],
    aab: [['Maalesef, hayır. Araçlarımı paylaşmıyorum.', 'Kod artık okunabilmeye başlar ve güvenliği zarar görür.', "Daha önce araçlarımı hiç paylaşmadım.", "Yazdığım kodun yayılıp çöpe gitmesini istemem.", 'Bu yüzden paylaşmamaya karar verdim.'],
        
    [4, 5, 6], [
        function () {
            mood = 1;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            mood = 0;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        },
        function () {
            setTimeout(function () {
                document.getElementById("dialogueBox").style.fontSize = "20px";
                document.getElementById("dialogueBox").innerHTML = "Except towards them, Hate them";
                setTimeout(function () {
                    l++;
                    dialoguer(tracker);
                }, 128);
            }, 500);
            return;
        }
    ]],
    aac: [['Shell, Powershell, Assembly', "C, C++, C#, Python, Ruby", '(WebSite) Tasarım dillerini tamamen bilmiyorum...'],
    [3], [
        function () {
            mood = 2;
            setTimeout(function () { document.getElementById("dialogueBox").innerHTML = ""; document.getElementById("dialogueBox").style.fontSize = "24px"; }, 499)
            setTimeout(typeWriter, 500);
        }
    ]],
    aad: ['https://guns.lol/clow']
}

var tracker = [["Hello, I have a story I'd like to talk about", "Benim hakkımda ne bilmek istersin?"],
    'Sen Kimsin?', 'Kendinden bahseder misin?', '', '', 2,
    'a', 'b', '', ''];

function randn_bm() {
    var u = 0, v = 0;
    while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while (v === 0) v = Math.random();
    return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}
