if ('khai báo') {
    var a_Focus, b_Focus, Ô_Tạo_Boom_3x3 = []
    var board = [], hàng = 9, cột = 9; mảng_Nổ = []
    var currTile = undefined, otherTile = undefined, othersTile = undefined; // ???
    var abcm = 0, numbGo = 0

    var slideLoop, timeX = 70, zeroArray = [], cotArray = [], mảng_Bom_3x2 = []

    var dame , hpPoint , giapPoint , hpMax, manaPoint = 9, manaMax = 300
    var meeArray = [150, 150], dam = [9.6, 10, 10.4], hpPo = [8.8, 9, 9.2], giapPo = [4.6, 4.8, 5, 5.2, 5.4]
    var specialArraymini3x2 = []
    var timeEnemyPlay = 0, yyy = 0
    var hộp_TimeMe = document.querySelector(".timeMe"), hộp_TimeEn = document.querySelector(".timeEnemy")
    var giờ_TimeMe = document.querySelector(".timeMe1"), giờ_TimeEn = document.querySelector(".timeEnemy1")


    var so_Luot = document.querySelector(".turnNumber")
    var time_Me = document.querySelector(".timeMe")
    var time_Enemy = document.querySelector(".timeEnemy")
    var thẻ_Cha_Lượt = document.querySelector(".turn")
    var damet = 0, hpt = 0, giapt = 0

    var auto_Boom5x_N3D = [], auto_Boom5x_5x = [], auto_Boom5x_Thuong = [], auto_N3D_last = []
    var auto_5x_array = [], auto_4x_array = [], auto_3x_array = []
    var nammuoi = 13.5 / 9
    var specialFirstArray = [], listOfArrays = [], listOfArraysC = [], diSlide = true
    var tiep = 0, dayTh = 0, specialArraymini = [], slide5 = false
    var specialArraymini2 = [], yyy = 0, tiPlay = 0, click1 = true, click2 = true
    var go = true, abcn = 0, specialArraymini5 = []

    var meePoit = [document.querySelector(".manaMe1"), document.querySelector(".hpMe1"), document.querySelector(".vangMe1"), document.querySelector(".HNMe1"), document.querySelector(".giapMe1"), document.querySelector(".hpEnemy1")]
    var theyyPoit = [document.querySelector(".manaEnemy1"), document.querySelector(".hpEnemy1"), document.querySelector(".vangEnemy1"), document.querySelector(".HNEnemy1"), document.querySelector(".giapEnemy1"), document.querySelector(".hpMe1")]
}

document.querySelector(".haha").addEventListener("click", function () {
    fightMot()
    meTurn = true
    // theyTurn = true

    Điểm_Trật_Tự_Start()
    tạo_Cột_Slide()
    // bbbb() 
    //readycrush()
})

// hàm này cho tất cả điểm số theo trật tự (Khởi đầu):
function Điểm_Trật_Tự_Start() {
    // hp
    {
        document.querySelector(".hpMe1").innerHTML = mee.hpMaxInfor()
        // mee.hpMaxInfor()
        document.querySelector(".hpMe2").innerHTML = mee.hpMaxInfor()

        document.querySelector(".hpEnemy1").innerHTML = quai.hpMaxInfor()
        document.querySelector(".hpEnemy2").innerHTML = quai.hpMaxInfor()
    }

    // mana
    {
        document.querySelector(".manaMe1").innerHTML = mee.manaInfor()
        document.querySelector(".manaMe2").innerHTML = quai.manaMaxInfor()

        document.querySelector(".manaEnemy1").innerHTML = mee.manaInfor()
        document.querySelector(".manaEnemy2").innerHTML = quai.manaMaxInfor()
    }

    //giáp
    {
        document.querySelector(".giapMe1").innerHTML = mee.giapInfor()
        document.querySelector(".giapEnemy1").innerHTML = quai.giapInfor()
    }

}
// 1. Bắt đầu: -----------------------------------------------------
function randomCandy(){/*✨*/return sáu_Biến_Thường[Math.floor(Math.random()*sáu_Biến_Thường.length)];/*0-5.99*/}
function startGame() { // ✨ Sử dụng hai vòng lặp for để tạo bảng, với hàng và cột được xác định trước
    var board_table = document.getElementById("board"); // Lấy thẻ từ HTML và lưu trữ vào biến board_table.
    for (let r = 0; r < hàng; r++) {let row = []; // Khởi tạo một mảng rỗng để lưu trữ các ô của hàng
        for (let c = 0; c < cột; c++) {let tile = createTile(r, c); board_table.appendChild(tile); row.push(tile)}
        board.push(row); // Thêm mảng hàng vào mảng lưu trữ toàn bộ bảng
    }  // Thêm ảnh vào thẻ <div> chứa bảng | Thêm ảnh vào mảng hàng hiện tại | append thêm nhiều con 1 lúc đc
    function createTile(r, c) {  // Tạo một thẻ <img> mới
        let tile = document.createElement("img"); tile.src = randomCandy(); tile.style.opacity = "1";
        tile.className = sáu_Class_Thường[sáu_Biến_Thường.indexOf(tile.src)]; 
        tile.classList.add("ch-Chess","Xclass","fc","i3","absolute");
        tile.addEventListener("click",click_Curr);tile.id=r+"-"+c;return tile;
    }
    function createE(b) { // Tạo một thẻ <img> mới
        let x = document.createElement("img"); x.classList.add("absolute"); 
        x.style.top=(-nammuoi)+'rem';x.style.left=nammuoi*b+'rem';x.id =0+"-"+'*'+ b; board_table.appendChild(x);
    }; for (let i = 0; i < cột; i++) {createE(i)}
    for (let i = 0; i < hàng; i++) {
        for(let e=0;e<cột;e++){let b=nammuoi*i,c=nammuoi*e;board[i][e].style.top=b+'rem';board[i][e].style.left=c+'rem'}
    }
    // bài học: {
        // Mỗi ô được tạo ra bằng cách tạo một thẻ <img> mới.
        // Ô được thêm vào thẻ <div> chứa bảng và được thêm vào mảng hàng hiện tại.

        // Phần tạo ô bảng được đóng gói vào hàm createTile(r, c).
        // Sử dụng hàm createTile(r, c) để tạo và trả về một ô mới.
        // Sử dụng hàm createE(b) để tạo các ảnh phụ và đặt vị trí của chúng.
        // Loại bỏ sự sử dụng biến không cần thiết trong hàm createE(x, b).
    // }
}
var click1 = true // Biến kiểm tra lần click đầu tiên
function click_Curr() { // ✨ phần click cờ
    function mi(x, y) { document.getElementById(x).classList.replace(document.getElementById(x).classList[3], y) }
    if (click1 == 2) { click1 = false
        function mimi(a) { setTimeout(function () { mi(a, 'fc') }, 300) };
        otherTile = this; mi(currTile.id, 'fc'); mi(otherTile.id, 'outFocus'); dragEnd(); mimi(otherTile.id)
    }
    if (click1) { click1 = 2; currTile = this; mi(currTile.id, 'focus') }
}
function dragEnd() { // ✨
    // if (currTile.src.includes(blank) || otherTile.src.includes(blank)) {return}
    var [r1, c1] = currTile.id.split("-").map(Number), [r2, c2] = otherTile.id.split("-").map(Number);
    const rowDiff = Math.abs(r1 - r2), colDiff = Math.abs(c1 - c2);
    let kề = (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
    if (kề) {
        setTimeout(() => {
            [currTile.src, otherTile.src] = [otherTile.src, currTile.src];
            checkClass(); go = true; xóa_2_Ô_Đặc_Biệt_Kề_Nhau(currTile, otherTile);
     if(go) setTimeout(() =>{clearInterval(timeTogether);hộp_TimeMe.classList.add("doiMauTime"); readycrush()},300)
        }, 100); //true
    } else { setTimeout(() => { click1 = true }, 200) }
}
function readycrush() { // ✨
    lấy_ListArray(); tạo_Bom3x3(); thêm_Lượt(); // khâu này xóa cờ, mờ cờ ------------
    var uniqueArray = [...new Set(listOfArrays.flat())];  abcm = uniqueArray.length
    abcm > 0 ? uniqueArray.forEach(item => xóa_Viên_Nổ(item, 1, 200)) : setTimeout(slide1, 300);
}
function thêm_Lượt() { // ✨
    if (yyy > 0) {
        numbGo += listOfArrays.filter(arr =>arr.length>=4 && !Ô_Tạo_Boom_3x3.some(item =>arr.includes(item))).length
        numbGo += Ô_Tạo_Boom_3x3.length;
    }
} // khâu này cho biết cho biết có đc tăng lượt ko
function crushCandy() {
    var mảng_5_Ô = [], mảng_4_Ô = []; test_Có_Tạo_4x_Và_5x_ko(mảng_4_Ô, mảng_5_Ô)
    var u = test_Có_Viên_Đặc_Biệt_Ko() > 0;
    if (u) { // khâu này nếu special cần nổ sẽ lọt vào
        đem_Cờ_Đặc_Biệt_Lấy_Mảng_Nổ();
        const mảng_Ko_Trùng = [...new Set(mảng_Nổ)], abcm = mảng_Ko_Trùng.length;
        mảng_Ko_Trùng.forEach(item => xóa_Viên_Nổ(item, 0, 200));
    } else {create4x_and3x(mảng_5_Ô, mảng_4_Ô); crush_Xong_Rơi(200)}
}
function xử_Array_Mini(xx) { // ✨
    console.log("xử")
    mảng_Có_Viên_Nổ(); var mảng_Ko_Trùng = [...new Set(mảng_Nổ)], abcm = mảng_Ko_Trùng.length;
    abcm > 0 ? mảng_Ko_Trùng.forEach(item => xóa_Viên_Nổ(item, 0, xx)) : setTimeout(() => crush_Xong_Rơi(200), 300)
}

function tạo_Cột_Slide() {
    for (var i = 0; i < cột; i++) {cotArray[i] = [document.getElementById(`0-*${i}`),...board.map(row=>row[i])]}
}
function slide1() {
    console.log("slide")
    abcn = 0; cotArray.forEach((column, index) => haha(column, `0-*${index}`));
    slideLoop = setInterval(() => {
        if (abcn === cột) {
            checkClass(); clearInterval(slideLoop);
            checkValid() ? readycrush() : 
                slide5 ? xoa5x5x(1) : // kiểm tra có 5x5x ko
                    test3x2() > 0 ? phá_3x2() : //kiểm tra có 3x2 ko
                        yyy === 0 ? (yyy++, meTurn = true, timePlay = 10, timePlayy()) : turnFight();
        }
    }, 20);
}
// 2. Bổ trợ: --------------------------------------------
function checkClass() { // ✨
    var allChess = document.querySelectorAll(".ch-Chess")
    for (var y of allChess) {
        if (sáu_Biến_Thường.includes(y.src)) {
            y.classList.replace(y.classList[0], sáu_Class_Thường[sáu_Biến_Thường.indexOf(y.src)])
            y.classList.replace(y.classList[2], "Xclass")
        } else if (_25_Biến_Đặc_Biệt.includes(y.src)) {
            y.classList.replace(y.classList[0], _25_ClassList_0[_25_Biến_Đặc_Biệt.indexOf(y.src)])
            y.classList.replace(y.classList[2], _25_ClassList_2[_25_Biến_Đặc_Biệt.indexOf(y.src)])
        }
    }

} // mỗi khi đổi cờ, class ko đổi. Nên nó dùng dổi class cờ

function xóa_Ngang_Dọc() { // ✨
    var k = otherTile.id.split("-"); a = Number(k[0]); b = Number(k[1])
    var k2 = currTile.id.split("-"); a2 = Number(k2[0]); b2 = Number(k2[1])
    function mimi(xx, y, z, yy) {
        if (yy) { if (xx) add_blur_3x22(board[a + y][b + z], otherTile.classList[0]) }
        if (xx) mảng_Nổ.push(board[a + y][b + z])
    }
    var mảng = [
        [true, a + 2 </*8*/hàng, 2, 0], [true, a + 3 </*8*/hàng, 3, 0], [true, a - 2 >= 0, -2, 0], [true, a - 3 >= 0, -3, 0],
        [true, b + 2 </*8*/cột, 0, 2], [true, b + 3 </*8*/cột, 0, 3], [true, b - 2 >= 0, 0, -2], [true, b - 3 >= 0, 0, -3],
        [b - 1 != b2, b - 1 >= 0, 0, -1], [b + 1 != b2, b + 1 </*8*/cột, 0, 1], [a - 1 != a2, a - 1 >= 0, -1, 0], [a + 1 != a2, a + 1 </*8*/hàng, 1, 0]
    ]
    for (var i = 0; i < mảng.length; i++) { mimi(mảng[i][1], mảng[i][2], mảng[i][3], mảng[i][0]) }
    mảng_Nổ.push(board[a][b])
    xử_Array_Mini(500)
}
function xoaNgang3x3(otherT) { // ✨
    var k = otherTile.id.split("-"); a = Number(k[0]); b = Number(k[1])
    var k2 = currTile.id.split("-"); a2 = Number(k2[0]); b2 = Number(k2[1])
    function mimi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]) } }
    if (otherT == 'Ngang') {
        mimi(a - 1 >= 0 && b + 2 <= 8, -1, 2, 0); mimi(a - 1 >= 0 && b - 2 >= 0, -1, -2, 0)
        mimi(a + 1 <= 8 && b - 2 >= 0, 1, -2, 0); mimi(a + 1 <= 8 && b + 2 <= 8, 1, 2, 0)
    } else if (otherT == 'Doc') {
        mimi(a - 2 >= 0 && b + 1 <= 8, -2, 1, 0); mimi(a - 2 >= 0 && b - 1 >= 0, -2, -1, 0)
        mimi(a + 2 <= 8 && b - 1 >= 0, 2, -1, 0); mimi(a + 2 <= 8 && b + 1 <= 8, 2, 1, 0)
    }
    if (b - 1 != b2) { mimi(b - 1 >= 0, 0, -1) }; if (b + 1 != b2) { mimi(b + 1 <=/*8*/cột - 1, 0, 1) }
    if (a - 1 != a2) { mimi(a - 1 >= 0, -1, 0) }; if (a + 1 != a2) { mimi(a + 1 <=/*8*/hàng - 1, 1, 0) }

    function mi(xx, y, z) { if (xx) { mảng_Nổ.push(board[a + y][b + z]) } } // xóa
    if (otherT == 'Ngang') {
        mi(a + 1 <= 8 && b + 2 <= 8, 1, 2); mi(a - 1 >= 0 && b - 2 >= 0, -1, -2);
        mi(a + 1 <= 8 && b - 2 >= 0, 1, -2); mi(a - 1 >= 0 && b + 2 <= 8, -1, 2);
    } else if (otherT == 'Doc') {
        mi(a + 2 <= 8 && b + 1 <= 8, 2, 1); mi(a - 2 >= 0 && b - 1 >= 0, -2, -1);
        mi(a + 2 <= 8 && b - 1 >= 0, 2, -1); mi(a - 2 >= 0 && b + 1 <= 8, -2, 1);
    }
    mi(a + 1 <= 8, 1, 0); mi(a - 1 >= 0, -1, 0);
    mi(b + 1 <= 8, 0, 1); mi(b - 1 >= 0, 0, -1);
    create_3x2(board[a][b])
    xử_Array_Mini(500)
}
function twoChessSpecial(xx, yy, zz) { // ✨
    setTimeout(function () {
        otherTile = 0; currTile = 0
        if (specialArraymini.length > 0) {
            setTimeout(function () { dayChuyen() }, xx) //200
        } else {
            setTimeout(function () {
                checkClass(); slide1()
            }, yy) //200
        }
    }, zz) //460
} //  dùng để rớt cờ khi ghép đặc biệt
// function xoa3x3vs3x3() { // ✨
//     var k = otherTile.id.split("-"); a = Number(k[0]); b = Number(k[1])
//     var k2 = currTile.id.split("-"); a2 = Number(k2[0]); b2 = Number(k2[1])
//     function mimi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]) } }
//     mimi(a - 2 >= 0 && b - 2 >= 0, -2, -2);/*trên trái*/ mimi(a - 2 >= 0 && b - 1 >= 0, -2, -1); mimi(a - 1 >= 0 && b - 2 >= 0, -1, -2);
//     mimi(a - 2 >= 0 && b + 2 < cột, -2, 2);/*trên phải*/ mimi(a - 2 >= 0 && b + 1 < cột, -2, 1); mimi(a - 1 >= 0 && b + 2 < cột, -1, 2);
//     mimi(a + 2 < hàng && b - 2 >= 0, 2, -2);/*dưới trái*/ mimi(a + 2 < hàng && b - 1 >= 0, 2, -1); mimi(a + 1 < hàng && b - 2 >= 0, 1, -2);
//     mimi(a + 2 < hàng && b + 2 < cột, 2, 2);/*dưới phải*/ mimi(a + 2 < hàng && b + 1 < cột, 2, 1); mimi(a + 1 < hàng && b + 2 < cột, 1, 2);

//     if (b - 1 != b2) { mimi(b - 1 >= 0, 0, -1) }; if (b + 1 != b2) { mimi(b + 1 <=/*8*/cột - 1, 0, 1) }
//     if (a - 1 != a2) { mimi(a - 1 >= 0, -1, 0) }; if (a + 1 != a2) { mimi(a + 1 <=/*8*/hàng - 1, 1, 0) }

//     function mi(xx, y, z) { if (xx) { mảng_Nổ.push(board[a + y][b + z]) } } // xóa 
//     // sao ko là other?
//     mi(a - 2 >= 0 && b - 2 >= 0, -2, -2);/*trên trái*/ mi(a - 2 >= 0 && b - 1 >= 0, -2, -1); mi(a - 1 >= 0 && b - 2 >= 0, -1, -2);
//     mi(a - 2 >= 0 && b + 2 < cột, -2, 2);/*trên phải*/ mi(a - 2 >= 0 && b + 1 < cột, -2, 1); mi(a - 1 >= 0 && b + 2 < cột, -1, 2);
//     mi(a + 2 < hàng && b - 2 >= 0, 2, -2);/*dưới trái*/ mi(a + 2 < hàng && b - 1 >= 0, 2, -1); mi(a + 1 < hàng && b - 2 >= 0, 1, -2);
//     mi(a + 2 < hàng && b + 2 < cột, 2, 2);/*dưới phải*/ mi(a + 2 < hàng && b + 1 < cột, 2, 1); mi(a + 1 < hàng && b + 2 < cột, 1, 2);

//     mi(b - 1 >= 0, 0, -1); mi(b + 1 <=/*8*/cột - 1, 0, 1)
//     mi(a - 1 >= 0, -1, 0); mi(a + 1 <=/*8*/hàng - 1, 1, 0)
//     mảng_Nổ.push(board[a][b])
//     xử_Array_Mini(500)
// }
function xoa3x3vs3x3() {
    const offsets = [-2, -1, 0, 1, 2];
    const [a, b] = otherTile.id.split("-").map(Number);
    const [a2, b2] = currTile.id.split("-").map(Number);

    const addBlurAndPush = (x, y) => {
        if (x >= 0 && x < hàng && y >= 0 && y < cột) {
            add_blur_3x22(board[x][y]);
            mảng_Nổ.push(board[x][y]);
        }
    };

    offsets.forEach(x => offsets.forEach(y => {
        if ((x !== 0 || y !== 0) && (a + x !== a2 || b + y !== b2)) {
            addBlurAndPush(a + x, b + y);
        }
    }));

    mảng_Nổ.push(board[a][b]);
    xử_Array_Mini(500);
}
function xoa5xThuong(otherT) { // ✨
    var k = otherT.id.split("-"); a = Number(k[0]); b = Number(k[1])
    if (otherTile.classList[0] == otherT.classList[0]) { mảng_Nổ.push(currTile) } else { mảng_Nổ.push(otherTile) }
    var x = document.querySelectorAll("." + otherT.classList[0])
    var array_Khac_Xclass = []
    for (var y of x) { if (y.classList[2] != 'Xclass') { array_Khac_Xclass.push(y) } }
    for (var y of x) { mảng_Nổ.push(y) }
    function mi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]); mảng_Nổ.push(board[a + y][b + z]) } }
    for (var y of array_Khac_Xclass) {
        var k = y.id.split("-"); a = Number(k[0]); b = Number(k[1]);
        if (_6_Class_Ngang.includes(y.classList[2])) {
            mi(b + 1 < cột, 0, 1); mi(b - 1 >= 0, 0, -1); mi(b + 2 < cột, 0, 2); mi(b - 2 >= 0, 0, -2);
        } else if (_6_Class_Dọc.includes(y.classList[2])) {
            mi(a + 1 < hàng, 1, 0); mi(a - 1 >= 0, -1, 0); mi(a + 2 < hàng, 2, 0); mi(a - 2 >= 0, -2, 0);
        } else {
            mi(a + 1 < hàng, 1, 0); mi(a - 1 >= 0, -1, 0); mi(b - 1 >= 0, 0, -1); mi(b + 1 < cột, 0, 1);
        }
    }
    lọc_SpecialMini_Trùng_Class_0(otherT)   // } 
    xử_Array_Mini(500)
}
function lọc_SpecialMini_Trùng_Class_0(otherT) { // ✨
    if (specialArraymini.length > 0) {
        var bbbb = []
        specialArraymini = specialArraymini.filter((item, index) => {
            return specialArraymini.indexOf(item) === index;
        });
        for (var i = 0; i < specialArraymini.length; i++) {
            if (specialArraymini[i].classList[0] == otherT.classList[0]) {
                // console.log(specialArraymini[i])
                bbbb.push(specialArraymini[i])
            }
        }
        specialArraymini = specialArraymini.filter(item => !bbbb.includes(item));
    }
}
function xoa5xDacbiet(otherT) { // ✨
    var k = otherT.id.split("-"); a = Number(k[0]); b = Number(k[1])
    mảng_Nổ.push(currTile, otherTile)
    var array_Xclass = [];
    var x = document.querySelectorAll("." + otherT.classList[0]); var b = Array.from(x)
    b.splice(b.indexOf(document.getElementById(otherT.id)), 1)
    for (var y of b) {
        if (y.classList[2] == 'Xclass') { array_Xclass.push(y) }
    }
    // Biến hình
    function mi(xx) {
        for (var y of array_Xclass) {
            var x = Math.floor(Math.random() * 2) + 1
            if (x == 1) { y.src = sáu_Biến_Dọc[xx] } else { y.src = sáu_Biến_Ngang[xx] }
        }
    }
    if (_6_Class_Ngang.includes(otherT.classList[2])) {
        var i = _6_Class_Ngang.indexOf(otherT.classList[2]); mi(i)
    } else if (_6_Class_Dọc.includes(otherT.classList[2])) {
        var i = _6_Class_Dọc.indexOf(otherT.classList[2]); mi(i)
    } else {
        var i = _6_Class_3x3.indexOf(otherT.classList[2]);
        for (var y of array_Xclass) { y.src = sáu_Biến_Boom_3x[i] }
    }
    checkClass()

    for (var y of b) { mảng_Nổ.push(y) }
    function mimi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]); mảng_Nổ.push(board[a + y][b + z]) } }
    for (var y of b) {
        var k = y.id.split("-"); a = Number(k[0]); b = Number(k[1]);
        if (_6_Class_Ngang.includes(y.classList[2])) {
            mimi(b + 1 < cột, 0, 1); mimi(b - 1 >= 0, 0, -1); mimi(b + 2 < cột, 0, 2); mimi(b - 2 >= 0, 0, -2);
        } else if (_6_Class_Dọc.includes(y.classList[2])) {
            mimi(a + 1 < hàng, 1, 0); mimi(a - 1 >= 0, -1, 0); mimi(a + 2 < hàng, 2, 0); mimi(a - 2 >= 0, -2, 0);
        } else {
            mimi(a + 1 < hàng, 1, 0); mimi(a - 1 >= 0, -1, 0); mimi(b - 1 >= 0, 0, -1); mimi(b + 1 < cột, 0, 1);
        }
    }
    lọc_SpecialMini_Trùng_Class_0(otherT); setTimeout(function () { /*console.log("rớt")*/; xử_Array_Mini(300) }, 800)
}
function xoa5x5x(a) { // ✨
    if (a == 0) {
        mảng_Nổ.push(otherTile, currTile); otherTile = 0; currTile = 0;
        slide5 = true; xử_Array_Mini(200)
    }
    if (a > 0) {
        slide5 = false
        var x = [board[0][0], board[0][8], board[8][8], board[8][0], board[0][4], board[4][8], board[4][0], board[8][4], board[1][1], board[1][7], board[7][1], board[7][7], board[2][3], board[3][2], board[2][5], board[3][6], board[5][2], board[6][3], board[6][5], board[5][6], board[3][4], board[4][3], board[5][4], board[4][5], board[4][4]]
        for (var y of x) { add_blur_3x22(y) }; for (var y of x) { mảng_Nổ.push(y) }
        xử_Array_Mini(500)
    }
}
function test3x2() { // ✨
    var x = document.querySelectorAll(".ch-Chess")
    for (var y of x) {
        for (var i = 0; i < _6_Class_3x2.length; i++) { if (y.classList[2] == _6_Class_3x2[i]) { mảng_Bom_3x2.push(y) } }
    };
    return mảng_Bom_3x2.length
}
function phá_3x2() { // ✨
    for (var i = 0; i < mảng_Bom_3x2.length; i++) {
        var k = mảng_Bom_3x2[i].id.split("-"); a = Number(k[0]); b = Number(k[1])// add
        function mimi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]); mảng_Nổ.push(board[a + y][b + z]) } }
        mimi(a - 1 >= 0 && b - 1 >= 0, -1, -1); mimi(a - 1 >= 0 && b + 1 < cột, -1, 1); mimi(a + 1 < hàng && b + 1 < cột, 1, 1); mimi(a + 1 < hàng && b - 1 >= 0, 1, -1);
        mảng_Nổ.push(board[a][b])
    }
    mảng_Bom_3x2 = []; xử_Array_Mini(400)
}
function create_3x2(x) { // ✨ ? sao blank ta
    for (var i = 0; i < sáu_Class_Thường.length; i++) {
        if (x.classList[0] == sáu_Class_Thường[i]) { x.src = _6_Biến_3x2[i] }
    }; checkClass()
} // thực hiện tạo hàm cho viên 3x2
function blur_3x22(x, othersTile) { // ✨
    for (var j = 0; j < _6_Biến_3x2.length; j++) {
        if (x.src != _6_Biến_3x2[j] && x.src != blank) {
            var n = 10 // test khác 3x2 và blank
            var mimi = setInterval(function () {
                if (n >= 0) {
                    n--
                    x.style.opacity = Number(x.style.opacity) - 0.1
                    if (Number(x.style.opacity) < 0) { x.style.opacity = 0 }
                } else { clearInterval(mimi) }
            }, 40)
            setTimeout(function () { x.src = blank; x.style.opacity = '1' }, 410)
        }
    }
    if (x.classList[2] == 'fiveBlock') {
        var xx = document.querySelectorAll("." + othersTile.classList[0])
        for (var y of xx) {
            if (y.src != blank && y.classList[2] != 'sword3x2' && y.classList[2] != 'yingyang3x2' && y.classList[2] != 'melon3x2' && y.classList[2] != 'heart3x2' && y.classList[2] != 'water3x2' && y.classList[2] != 'star3x2') {
                specialArraymini.push(y)
            }
        }
    }
}
function blur_3x22N(x) { // ✨
    for (var j = 0; j < _6_Biến_3x2.length; j++) {
        if (x.src != _6_Biến_3x2[j] && x.src != blank && x.classList[2] != 'fiveBlock') {
            var n = 10 // test khác 3x2 và 5x và blank
            var mimi = setInterval(function () {
                if (n >= 0) {
                    n--
                    x.style.opacity = Number(x.style.opacity) - 0.1
                    if (Number(x.style.opacity) < 0) { x.style.opacity = 0 }
                } else { clearInterval(mimi) }
            }, 40)
            setTimeout(function () { x.src = blank; x.style.opacity = '1' }, 410)
        }
    }
}
function add_blur_3x22(x, y) { // ✨
    // console.log("add nè", x)
    if (mười_Tám_Class.includes(x.classList[2]) && x.src != blank) { specialArraymini.push(x) }
    // if (x.classList[2] == 'fiveBlock') { specialArraymini5.push([x, y]) }
}
function boom3x3(ô_Nổ) { // ✨
    var k = ô_Nổ.id.split("-"); a = Number(k[0]); b = Number(k[1]);
    function mi(xx, y, z) { if (xx) { add_blur_3x22(board[a + y][b + z]); mảng_Nổ.push(board[a + y][b + z]) } }
    mi(a + 1 < hàng, 1, 0); mi(a - 1 >= 0, -1, 0); mi(b + 1 < cột, 0, 1); mi(b - 1 >= 0, 0, -1);
    create_3x2(board[a][b])
} // a là hàng (Dọc)
function boomDoc(ô_Nổ) { // ✨
    var k = ô_Nổ.id.split("-"), a = Number(k[0]), b = Number(k[1]), d = a
    for (var i = 0; i < hàng; i++) { mảng_Nổ.push(board[i][b]) }
    function mi(x) {
        k = board[x][b].id.split("-"); a = Number(k[0])
        if (a != d) { add_blur_3x22(board[x][b], ô_Nổ.classList[0]) }
    }
    for (var i = 0; i < hàng; i++) { mi(i) }
}
function boomNgang(ô_Nổ) { // ✨
    var k = ô_Nổ.id.split("-"), a = Number(k[0]), b = Number(k[1]), d = b
    for (var i = 0; i < cột; i++) { mảng_Nổ.push(board[a][i]) }
    function mi(x) {
        k = board[a][x].id.split("-"); b = Number(k[1])
        if (b != d) { add_blur_3x22(board[a][x], ô_Nổ.classList[0]) }
    }
    for (var i = 0; i < cột; i++) { mi(i) }
}




// 3. cho quái đánh: -----------------------------------------------
{ // 💛
    function testValid() {
        var bi = 0
        function bii(xx, y, z) {
            if (xx) {
                let currImg = board[i][e].src; let otherImg = board[i + y][e + z].src;
                board[i][e].src = otherImg; board[i + y][e + z].src = currImg;
                checkClass(); if (checkValid()) { bi++ }
                board[i][e].src = currImg; board[i + y][e + z].src = otherImg;
            }
        }
        for (var i = 0; i <= hàng - 1; i++) {
            for (var e = 0; e <= cột - 1; e++) {
                var k = board[i][e].id.split("-"); a = Number(k[0]); b = Number(k[1])
                bii(a - 1 >= 0, -1, 0)/*lên*/; bii(a + 1 <= hàng - 1, 1, 0)/*xuống*/
                bii(b + 1 <= cột - 1, 0, 1)/*phải*/; bii(b - 1 >= 0, 0, -1)/*trái*/
            }
        }
        var mi = 0
        if (bi > 0) { return true }
        else if (bi == 0) {
            var x = document.querySelectorAll(".ch-Chess")
            for (y of x) {
                if (y.classList[2] != 'Xclass' && y.classList[2] != 'fivebBlock') {
                    var k = y.id.split("-"); a = Number(k[0]); b = Number(k[1])
                    function pi(xx, y, z) { if (xx) { if (board[a + y][b + z].classList[2] != "Xclass" && board[a + y][b + z].classList[2] != "fiveBlock") { mi++ } } }
                    pi(a - 1 >= 0, -1, 0)/*lên*/; pi(a + 1 <= hàng - 1, 1, 0)/*xuống*/
                    pi(b + 1 <= cột - 1, 0, 1)/*phải*/; pi(b - 1 >= 0, 0, -1)/*trái*/
                }
            }
            for (y of x) { if (y.classList[2] == 'fiveBlock') { mi++ } }
        }
        if (mi > 0) { return true } else { return false }

    } // kiểm tra xem bàn cờ có đi đc ko?  
    function replay() {
        document.querySelector(".board").parentNode.removeChild(document.querySelector(".board"))

        board = []; listOfArrays = []
        var banCo = document.createElement('div')
        banCo.classList.add('board')
        banCo.id = 'board'
        // map.classList.add('mapBassic')
        var fullclassApp = document.querySelector(".wrap")
        fullclassApp.append(banCo);
        startGame()
    } // đổi cờ
} // kiểm tra xem bàn cờ có đi đc ko?
{ // 💛
    //1. kiểm tra xem có viên boom5x ko
    function auto_Boom5x() {
        auto_Boom5x_Thuong = []; auto_Boom5x_N3D = []; auto_Boom5x_5x = []
        var mang5x = []
        var x = document.querySelectorAll(".ch-Chess")
    /** 1.*/for (var y of x) { if (y.classList[2] == 'fiveBlock') { mang5x.push(y) } }
        /**Hàm chung */
        function bii(xx, y, x, z) { // y là gốc
            if (xx) {
                if (board[a + x][b + z].classList[2] == 'fiveBlock') {
                    auto_Boom5x_5x.push([mang5x[y], board[a + x][b + z]])
                } //nếu gốc và x đều là 5x
                else if (board[a + x][b + z].classList[2] != 'Xclass' && board[a + x][b + z].classList[2] != 'fiveBlock') {
                    auto_Boom5x_N3D.push([mang5x[y], board[a + x][b + z]])
                } // nếu gốc là 5x và x là N3D
                else if (board[a + x][b + z].classList[2] == 'Xclass') {
                    auto_Boom5x_Thuong.push([mang5x[y], board[a + x][b + z]])
                } // nếu gốc là 5x và x là thường
            }
        }
    /** 2.*/for (var i = 0; i < mang5x.length; i++) {
            var k = mang5x[i].id.split("-"); a = Number(k[0]); b = Number(k[1])
            bii(a - 1 >= 0, i, -1, 0);/**lên*/bii(b + 1 < cột, i, 0, 1); /**phải */
            bii(a + 1 < hàng, i, 1, 0);/*xuống*/bii(b - 1 >= 0, i, 0, -1); /**trái */
        }
        // (0)có 5x ko, (1)có 2 viên 5x, (2)có 5x và N3D, (3) có 5x và thường
        return [mang5x.length > 0, auto_Boom5x_5x, auto_Boom5x_N3D, auto_Boom5x_Thuong]
    }
    //2. kiểm tra xem có 2 viên N3D kề nhau ko
    function auto_N3D() {
        var auto_N3D_first = []; auto_N3D_last = []
        var x = document.querySelectorAll(".ch-Chess")
        for (var y of x) {
            if (y.classList[2] != 'Xclass' && y.classList[2] != 'fiveBlock') { auto_N3D_first.push(y) }
        } // Kiểm tra xem có N3D ko
        function bii(xx, y, x, z) {
            if (xx) {
                if (board[a + x][b + z].classList[2] != 'Xclass' && board[a + x][b + z].classList[2] != 'fiveBlock') {
                    auto_N3D_last.push([auto_N3D_first[y], board[a + x][b + z]])
                }
            }
        }
        for (var i = 0; i < auto_N3D_first.length; i++) {
            var k = auto_N3D_first[i].id.split("-"); a = Number(k[0]); b = Number(k[1])
            bii(a - 1 >= 0, i, -1, 0);/**lên*/bii(b + 1 < cột, i, 0, 1); /**phải */
            bii(a + 1 < hàng, i, 1, 0);/**xuống*/bii(b - 1 >= 0, i, 0, -1); /**trái */
        } // Kiểm tra xem có N3D kề nhau ko
        // (0) có N3D kề nhau ko, (1)list kề nhau
        return [auto_N3D_last.length > 0, auto_N3D_last]
    }
    //3. kiểm tra xem có tạo đc 5 viên liên tiếp ko
    function auto_5x(z) {
        auto_5x_array = []
        var bi5x = 0
        function bii(xx, x, y) {
            if (xx) {
                let currImg = board[i][e].src; let otherImg = board[i + x][e + y].src;
                board[i][e].src = otherImg; board[i + x][e + y].src = currImg; checkClass()
                if (checkValid()) {
                    if (readycrush2(5)[0] > 0) {
                        bi5x++
                        // gốc, đổi, số viên đặc biệt, số nhánh (vd 5 viên A và 3 viên B)
                        if (z > 0) { auto_5x_array.push([board[i][e], board[i + x][e + y], readycrush2(5)[1], readycrush2(5)[2]]) }
                    }
                }
                board[i][e].src = currImg; board[i + x][e + y].src = otherImg; checkClass()
            }
        }
        for (var i = 0; i <= 8; i++) {
            for (var e = 0; e <= 8; e++) {
                var k = board[i][e].id.split("-"); a = Number(k[0]); b = Number(k[1])
                // bii(a - 1 >= 0, -1, 0);/**lên*/ bii(b - 1 >= 0, 0, -1); /**trái */
                bii(a + 1 < hàng, 1, 0, z);/**xuống*/bii(b + 1 < cột, 0, 1, z); /**phải */
            }
        }// (0)có tạo 5 ô liên tiếp ko?, (1) mảng 5 viên liên tiếp
        return [bi5x > 0, auto_5x_array]
    }
    //4. kiểm tra xem có tạo đc 4 viên liên tiếp ko
    function auto_4x(z) {
        auto_4x_array = []; var bi4x = 0
        function bii(xx, x, y) {
            if (xx) {
                let currImg = board[i][e].src; let otherImg = board[i + x][e + y].src;
                board[i][e].src = otherImg; board[i + x][e + y].src = currImg; checkClass()
                if (checkValid()) {
                    if (readycrush2(4)[0] > 0) {
                        bi4x++
                        // gốc, đổi, số viên đặc biệt, số nhánh (vd 4 viên A và 3 viên B)
                        if (z > 0) { auto_4x_array.push([board[i][e], board[i + x][e + y], readycrush2(4)[1], readycrush2(4)[2]]) }
                    }
                }
                board[i][e].src = currImg; board[i + x][e + y].src = otherImg; checkClass()
            }
        }
        for (var i = 0; i <= 8; i++) {
            for (var e = 0; e <= 8; e++) {
                var k = board[i][e].id.split("-"); a = Number(k[0]); b = Number(k[1])
                // bii(a - 1 >= 0, -1, 0);/**lên*/ bii(b - 1 >= 0, 0, -1); /**trái */
                bii(a + 1 < hàng, 1, 0, z);/**xuống*/bii(b + 1 < cột, 0, 1, z); /**phải */
            }
        }
        // (0)có tạo 4 ô liên tiếp ko?, (1) mảng 4 viên liên tiếp
        return [bi4x > 0, auto_4x_array]
    }
    //5. kiểm tra xem có tạo đc 3 viên liên tiếp ko
    function auto_3x(z) {
        auto_3x_array = []; var bi3x = 0
        function bii(xx, x, y, z) {   // z là xác định lấy true, ko lấy mảng mô tả
            if (xx) {
                let currImg = board[i][e].src; let otherImg = board[i + x][e + y].src;
                board[i][e].src = otherImg; board[i + x][e + y].src = currImg; checkClass()
                if (checkValid()) {
                    if (readycrush2(3)[0] > 0) {
                        bi3x++
                        // gốc, đổi, số viên đặc biệt, số nhánh (vd 5 viên A và 3 viên B)
                        if (z > 0) { auto_3x_array.push([board[i][e], board[i + x][e + y], readycrush2(3)[1], readycrush2(3)[2]]) }
                    }
                }
                board[i][e].src = currImg; board[i + x][e + y].src = otherImg; checkClass()
            }
        }
        for (var i = 0; i <= 8; i++) {
            for (var e = 0; e <= 8; e++) {
                var k = board[i][e].id.split("-"); a = Number(k[0]); b = Number(k[1])
                // bii(a - 1 >= 0, -1, 0);/**lên*/ bii(b - 1 >= 0, 0, -1); /**trái */
                bii(a + 1 < hàng, 1, 0, z);/**xuống*/bii(b + 1 < cột, 0, 1, z); /**phải */
            }
        } // (0)có tạo 3 ô liên tiếp ko?, (1) mảng 3 viên liên tiếp
        return [bi3x > 0, auto_3x_array]
    }
    //6. Hỗ trợ xem nhánh
    function readycrush2(number) {
        listOfArrays = []; lấy_ListArray(); var e = 0     // ? 
        var iNumber = number
        if (iNumber == 5) {
            var n = 0
            for (var i = 0; i < listOfArrays.length; i++) { if (listOfArrays[i].length >= 5) { n++ } }
        } else if (iNumber == 4) {
            var n = 0
            for (var i = 0; i < listOfArrays.length; i++) { if (listOfArrays[i].length == 4) { n++ } }
        } else if (iNumber == 3) {
            var n = 0
            for (var i = 0; i < listOfArrays.length; i++) { if (listOfArrays[i].length == 3) { n++ } }
        };
        for (var i = 0; i < listOfArrays.length; i++) {
            for (var d = 0; d < listOfArrays[i].length; d++) {
                var b = listOfArrays[i][d].classList[2]; if (b != 'Xclass' && b != 'fiveBlock') { e++ }
            } // các viên liên tiếp 3/4/5 là viên N3D or thường
        }; var b = listOfArrays; listOfArrays = []
        return [n, e, b.length]//(0)tạo đc 3/4/5 viên ko,(1)số N3D trong nhánh,(2)mấy nhánh
    }
    //6.1 Xem bàn cờ có những bước đi nào
    function see_Chess() {
        var a = [], result = []
        var x = document.querySelectorAll(".ch-Chess")
        for (var y of x) { if (y.classList[2] == 'fiveBlock') { a.push(y) } }
        result.push(a.length > 0); a = [] // bom 5x
        result.push(auto_N3D()[0], auto_5x(0)[0], auto_4x(0)[0], auto_3x(0)[0])
        return result
    }
    //7. Quái lựa cấp độ khó để đánh 
    function auto_Fight() {
        //mô hình: (0)auto_Boom5x, (1)N3D, (2)liên5, (3)liên4, (4)liên3
        var mảng_Auto = [auto_Boom5x, auto_N3D, auto_5x, auto_4x, auto_3x]
        var mảng_Đi_5_Hướng = see_Chess(), mảng_True = []
        for (var i = 0; i < mảng_Đi_5_Hướng.length; i++) {
            if (mảng_Đi_5_Hướng[i] == true) { mảng_True.push(i) }
        } // coi nào true, lấy id của nó vô mảng_True ||  vd: true 0, true 1, false 2  ==>  0, 1
        var y = Math.floor(Math.random() * mảng_True.length)
        var nn = mảng_True[y] // lấy đc random id  // mảng_Auto[y]
        // console.log(mảng_Đi_5_Hướng, mảng_True, nn)
        function mi(x) {
            var randomm = Math.floor(Math.random() * a[x].length)
            var random1_2 = Math.floor(Math.random() * 2) + 1
            if (random1_2 == 1) { currTile = a[x][randomm][0]; otherTile = a[x][randomm][1] }
            else { currTile = a[x][randomm][1]; otherTile = a[x][randomm][0] }
        }
        function mimi(yy) {
            var a = yy(1), N_Viên_ĐB = [], N_Nhánh = [], n = 0 //a[1] lấy all mảng|
            for (var i = 0; i < a[1].length; i++) { N_Viên_ĐB.push(a[1][i][2]); N_Nhánh.push(a[1][i][3]); if (a[1][i][2] > 0) { n++ } }
            // console.log(N_Nhánh)
            if (n > 0) { mi(N_Viên_ĐB) } else { mi(N_Nhánh) }  // a[1][0]|[2],  a[1][1]|[2]   |[0] và [1] lấy gốc
            function mi(xx) { //N_Viên_ĐB, xx
                var maxInNumbers = Math.max.apply(Math, xx), indexes = [];//console.log(xx);console.log("max",maxInNumbers)
                for (var j = 0; j < xx.length; j++) { if (xx[j] == maxInNumbers) { indexes.push(j); } }//console.log(indexes)
                var randomm = Math.floor(Math.random() * indexes.length), random1_2 = Math.floor(Math.random() * 2) + 1
                if (random1_2 == 1) { currTile = a[1][indexes[randomm]][0]; otherTile = a[1][indexes[randomm]][1] }
                else { currTile = a[1][indexes[randomm]][1]; otherTile = a[1][indexes[randomm]][0] }
            }; end(1)// đem cuối: console.log( currTile.id, otherTile.id)
        }
        if (nn == 0) {
            var a = auto_Boom5x(); if (a[1].length > 0) { console.log("a>0"); mi(1) } else if (a[2].length > 0) { mi(2) } else if (a[3].length > 0) { mi(3) }; end(2)
        }
        else if (nn == 1) { var a = auto_N3D(); mi(1); end(2) }
        else if (nn == 2) { mimi(auto_5x) } else if (nn == 3) { mimi(auto_4x) } else if (nn == 4) { mimi(auto_3x) }
        function end(xx) {
            currTile.classList.replace(currTile.classList[3], 'focus')// mở focus Cur
            setTimeout(function () { currTile.classList.replace(currTile.classList[3], 'fc') }, 900)// tắt focus Cur
            setTimeout(function () {
                let currImg = currTile.src; let otherImg = otherTile.src;
                currTile.src = otherImg; otherTile.src = currImg
                otherTile.classList.replace(otherTile.classList[3], 'outFocus')// mở focus Other
                // xóa 2 ô đặc biệt
                setTimeout(function () { otherTile.classList.replace(otherTile.classList[3], 'fc') }, 400)//tắt focus Other
                if (xx == 1) { setTimeout(function () { console.log("xóa 1"); readycrush() }, 700) }
                else { setTimeout(function () { console.log("xóa 2"); xóa_2_Ô_Đặc_Biệt_Kề_Nhau(currTile, otherTile) }, 700) }
            }, 1100)
        }
    }
} // bot play 
{ // 💛
    var TimeNe = 1; var timePlay = 10
    var meTurn = false; var theyTurn = false
    var timeTogether
    // clearInterval(timeTogether)

    function timePlayy() {
        timeTogether = setInterval(function () {
            if (timePlay >= 0 && meTurn == true) {
                hộp_TimeMe.classList.remove("none")/*mở timeMe*/; hộp_TimeEn.classList.add("none")//tắt timeEnemy
                giờ_TimeMe.innerHTML = timePlay; timePlay--
                if (timePlay < 0) {
                    if (numbGo > 0) {
                        clearInterval(timeTogether)
                            // (1) mở bảng lượt, (2) tắt bảng lượt
                       /*1*/thẻ_Cha_Lượt.classList.remove("none")
                       /*2*/setTimeout(function () { thẻ_Cha_Lượt.classList.add("none") }, 1700)
                        so_Luot.innerHTML = numbGo; numbGo-- // (3) cho số lượt và trừ đi lượt

                        click1 = true; meTurn = true; theyTurn = false; timePlay = 10; timePlayy()
                    } else {
                        click1 = false; timePlay = 10; meTurn = false; theyTurn = true
                        // đặt x nhiu đây, vì nó đôn lên 1 số
                        var xx = [7, 6, 5, 4, 3]; var random = Math.floor(Math.random() * xx.length)
                        timeEnemyPlay = xx[random]
                    }
                }
            } else if (timePlay >= 0 && theyTurn == true) {
                if (timePlay == timeEnemyPlay) { // ? dùng sau clear?
                    hộp_TimeEn.classList.add("doiMauTime"); clearInterval(timeTogether); auto_Fight()
                } else {
                    hộp_TimeMe.classList.add("none")/*tắt timeMe*/; hộp_TimeEn.classList.remove("none")//mở timeEnemy
                    giờ_TimeEn.innerHTML = timePlay; timePlay--
                    if (timePlay < 0) { click1 = true; timePlay = 10; meTurn = true; theyTurn = false }
                }
            }
        }, 1000)
    }
} // phần time cho game
// điểm và thời gian đánh
function turnFight() { // ✨

    if (meTurn == true) {
        if (numbGo > 0) {// mình có nhiều lượt
            turnFight2()
                /*1*/thẻ_Cha_Lượt.classList.remove("none")// (1) mở bảng lượt, (2) tắt bảng lượt
               /*2*/setTimeout(function () { thẻ_Cha_Lượt.classList.add("none") }, 1700)
            so_Luot.innerHTML = numbGo; numbGo-- // (3) cho số lượt và trừ đi lượt

            click1 = true; meTurn = true; theyTurn = false; timePlay = 10
            time_Me.classList.remove("doiMauTime") // tắt màu sáng khi đánh (1)
            timePlayy()
        } else {// mình hết lượt --> quái đánh
            turnFight2()
            meTurn = false; theyTurn = true; timePlay = 10
            var xx = [7, 6, 5, 4, 3];
            var random = Math.floor(Math.random() * xx.length)
            time_Me.classList.remove("doiMauTime")// tắt màu sáng khi đánh (2)
            timeEnemyPlay = xx[random]; timePlayy()
        }

    } else {
        if (numbGo > 0) { // quái có nhiều lượt
            // (1) mở bảng lượt, (2) tắt bảng lượt
            turnFight2()
                /*1*/thẻ_Cha_Lượt.classList.remove("none")
               /*2*/setTimeout(function () { thẻ_Cha_Lượt.classList.add("none") }, 1700)
            so_Luot.innerHTML = numbGo; numbGo-- // (3) cho số lượt và trừ đi lượt

            theyTurn = true; meTurn = false; timePlay = 10
            time_Enemy.classList.remove("doiMauTime")// tắt màu sáng khi đánh (1)
            timePlayy()
        } else {// quái hết lượt --> mình đánh
            turnFight2()
            click1 = true; meTurn = true; theyTurn = false; timePlay = 10
            time_Enemy.classList.remove("doiMauTime")// tắt màu sáng khi đánh (2)
            timePlayy()
        }
    }

}
function turnFight2() { // ✨
    if (meTurn == true) {
        for (var i = 0; i < allChessPoint4.length; i++) {

            if (i != 5) {
                var x = allChessPoint4[i] * allChessPoint44[i](mee.lvInfor(), 0)[i + 1]
                switch (i) {
                    case 0: { y = mee.mana(2, x); break; }
                    case 1: { y = mee.hp(2, hpt); break; }
                    case 2: { y = mee.xu(2, x); break; }
                    case 3: { y = mee.hồng_ngọc(2, x); break; }
                    case 4: {
                        y = mee.giap(giapt, 1);
                        theyyPoit[1].innerHTML = quai.hpInfor();
                        theyyPoit[4].innerHTML = quai.giapInfor();
                        break;
                    }
                }
                meePoit[i].innerHTML = y;
            } else if (i == 5) {
                y = quai.hp(1, damet); meePoit[i].innerHTML = y; theyyPoit[4].innerHTML = quai.giapInfor();
            }
        }
    } else {
        for (var i = 0; i < allChessPoint4.length; i++) {

            if (i != 5) {
                var x = allChessPoint4[i] * allChessPoint44[i](quai.lvInfor(), 0)[i + 1]
                switch (i) {
                    case 0: { y = quai.mana(2, x); break; }
                    case 1: { y = quai.hp(2, hpt); break; }
                    case 2: { y = quai.xu(2, x); break; }
                    case 3: { y = quai.hồng_ngọc(2, x); break; }
                    case 4: {
                        y = quai.giap(giapt, 2);
                        meePoit[1].innerHTML = mee.hpInfor();
                        meePoit[4].innerHTML = mee.giapInfor();
                        break;
                    }
                }
                theyyPoit[i].innerHTML = y;
            }
            else if (i == 5) {
                y = mee.hp(1, damet); theyyPoit[i].innerHTML = y; meePoit[4].innerHTML = mee.giapInfor();
            }
        }
    }

    for (var i = 0; i < allChessPoint4.length; i++) {
        allChessPoint4[i] = 0
    } // cho biến điểm = 0
    hpt = 0; giapt = 0; damet = 0
}
if (6) {
    // xx là lv 0 or 100;
    function lvPoint(xx) { // yy ko truyền mặc định là 0
        function mi(x, y, lv, zz) { // x là dame, y mảng dam, yy là special, zz là y.length
            i = Math.floor(Math.random() * y.length); x = y[i]
            if (lv > 0) { x = x + x * lv * 7 / 100 }
            if (zz == 1) { dame = x } else if (zz == 2) { giapPoint = x } else if (zz == 3) { hpPoint = x }
            // return x
        }
        if (xx == 0) {
            hpMax = 150; mi(dame, dam, 0, 1); mi(giapPoint, giapPo, 0, 2); mi(hpPoint, hpPo, 0, 3)
        }
        else {
            hpMax = 150 + 150 * 8 * xx / 100;
            mi(dame, dam, xx, 1); mi(giapPoint, giapPo, xx, 2); mi(hpPoint, hpPo, xx, 3)
        }
        return [hpMax, 9, hpPoint, 2, 0.5, giapPoint, dame]
    }

    var mee, quai, meIn
    mee = new inforBattlee(150, 150, 0, 300, 0/*xu*/, 5/*cấp*/, 88/* % */, 10 /*giáp*/, 0/*hồng_ngọc*/)
    quai = new inforBattlee(170, 150, 0, 300, 0/*xu*/, 0/*cấp*/, 0/* % */, 0 /*giáp*/, 0/*hồng_ngọc*/)
    //                         hp                                             mana          0 vàng, lv5.00     giáp
    meIn = new inforMee('Kun1891'/*name*/, 3/*lv*/, 0/* % */, 0/*xu*/, 0 /*kim cương*/,
        0 /*hồng ngọc*/)

    function cộngĐiểmSauCrush() {
        var x = document.querySelectorAll(".ch-Chess")
        for (var y of x) {
            if (y.src == blank) { // tìm viên  nào trống
                if (_6_Class_3x2.includes(y.classList[2])) { allChessPoint4[_6_Class_3x2.indexOf(y.classList[2])] += 1.5 }
                else if (_6_Class_Dọc.includes(y.classList[2])) { allChessPoint4[_6_Class_Dọc.indexOf(y.classList[2])] += 1.5 }
                else if (_6_Class_Ngang.includes(y.classList[2])) { allChessPoint4[_6_Class_Ngang.indexOf(y.classList[2])] += 1.5 }
                else if (sáu_Class_Thường.includes(y.classList[0])) { allChessPoint4[sáu_Class_Thường.indexOf(y.classList[0])] += 1 }
            }
        }
        for (var i = 0; i < mảng_bảng_Điểm.length; i++) {
            if (meTurn == true) {
                var x = allChessPoint4[i] * allChessPoint44[i](mee.lvInfor(), 0)[i + 1]
            } else { var x = allChessPoint4[i] * allChessPoint44[i](quai.lvInfor(), 0)[i + 1] }

            mảng_bảng_Điểm[i].innerHTML = làm_Tròn(x, 2)
            if (i == 1) { hpt = làm_Tròn(hpt + x, 2) } else if (i == 4) { giapt = làm_Tròn(giapt + x, 2) }
            else if (i == 5) { damet = làm_Tròn(damet + x, 2) }
        }
    }
}















// 1. Các biến cho viên đặc biệt
if ('biến cờ') {
    var melonNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melonNgang.png?raw=true'
    var melonDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melonDoc.png?raw=true'

    var heartNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heartNgang.png?raw=true'
    var heartDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heartDoc.png?raw=true'

    var waterNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/waterNgang.png?raw=true'
    var waterDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/waterDoc.png?raw=true'

    var yingyangNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yinyangNgang.png?raw=true'
    var yingyangDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yinyangDoc.png?raw=true'

    var swordNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/swordNgang.png?raw=true'
    var swordDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/swordDoc.png?raw=true'

    var starNgang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/starNgang.png?raw=true'
    var starDoc = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/starDoc.png?raw=true'

    var fiveBlock = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/bomb5.png?raw=true'
    var melon3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon33.png?raw=true'
    var heart3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart33.png?raw=true'
    var sword3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword33.png?raw=true'
    var yingyang3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yinyang33.png?raw=true'
    var star3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star33.png?raw=true'
    var water3x3 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water33.png?raw=true'

    var heart3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/heart333.png?raw=true'
    var melon3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/melon333.png?raw=true'
    var sword3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/sword333.png?raw=true'
    var yingyang3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/yinyang333.png?raw=true'
    var star3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/star333.png?raw=true'
    var water3x2 = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/New%20folder/water333.png?raw=true'


    // các biến cho các viên bình thường 
    var star = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true'
    var yingyang = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true'
    var sword = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true'
    var water = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true'
    var heart = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true'
    var melon = 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true'
    var blank = 'https://github.com/ImKennyYip/candy-crush/blob/master/images/blank.png?raw=true'

}
// 2.
function crush_Xong_Rơi(xx) {
    setTimeout(() => {
        // if (yyy) {
        //     cộngĐiểmSauCrush()
        //     setTimeout(()=>{for(var i=0;i <mảng_bảng_Điểm.length;i++) {mảng_bảng_Điểm[i].innerHTML = 0}},1700)
        // }
        otherTile = 0; currTile = 0; checkClass(); listOfArrays = []; slide1()
    }, xx) // 200ms sau mới rơi cờ
}
// 3.
function mảng_Có_Viên_Nổ() {
    var mảng_Ko_Trùng = Array.from(new Set(specialArraymini));
    specialArraymini = []; var x = []
    for (var i = 0; i < mảng_Ko_Trùng.length; i++) {
    if (_6_Class_Ngang.includes(mảng_Ko_Trùng[i].classList[2])) { boomNgang(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    else if (_6_Class_Dọc.includes(mảng_Ko_Trùng[i].classList[2])) { boomDoc(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    else if (_6_Class_3x3.includes(mảng_Ko_Trùng[i].classList[2])) { boom3x3(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    }
    // mảng_Ko_Trùng = mảng_Ko_Trùng.filter(item => !x.includes(item));
}
// 4.
function xóa_2_Ô_Đặc_Biệt_Kề_Nhau(x, y) {
    var classNames = [x.classList[2], y.classList[2]];
    var isNgangDoc = classNames.every(x => _12_Class_Ngang_Dọc.includes(x));
    var is3x3=classNames.some(x=>_6_Class_3x3.includes(x)),is3x3Two=classNames.every(x=>_6_Class_3x3.includes(x));
    var isFiveBlock = classNames.includes("fiveBlock"), isSpecial = classNames.some(x => mười_Tám_Class.includes(x));
    if (isNgangDoc) { setTime(xoa_Ngang_Dọc, 0)}
    else if (is3x3) {  //setTime(xoa_Ngang3x3, _6_Class_Ngang.includes(classNames[0]) ? "Ngang" : "Doc");
        if (_6_Class_Ngang.includes(y.classList[2]) || _6_Class_Ngang.includes(x.classList[2])) {setTime(xoaNgang3x3, "Ngang")}
        else if (_6_Class_Dọc.includes(y.classList[2]) || _6_Class_Dọc.includes(x.classList[2])) {setTime(xoaNgang3x3, "Doc")}}
    else if (is3x3Two) {setTime(xoa_3x3_vs_3x3, 0)}
    else if (isFiveBlock && (classNames.includes("Xclass") || isSpecial)) {
        setTime(isSpecial ? xoa5xDacbiet : xoa5xThuong, classNames[0] == 'fiveBlock' ? y : x);}
    else if (isFiveBlock && isSpecial) {setTime(xoa5xDacbiet,  classNames[0] == 'fiveBlock' ? y : x)}
    else if (classNames.every(x => x == "fiveBlock")) {setTime(xoa5x5x, 0)}
    function setTime(x, y) {setTimeout(function () { x(y) }, 300); return go = false}
}
// 5.
function lấy_Phần_Tử_Chung(arr) {
    let set = new Set();
    let duplicates = [];

    for (let num of arr) {
        if (!set.has(num)) {
            set.add(num);
        } else {
            duplicates.push(num);
        }
    }

    return Array.from(new Set(duplicates)); // Loại bỏ các phần tử trùng lặp trong mảng duplicates
}
// 6.
function test_Có_Tạo_4x_Và_5x_ko(x,y) {
    for (var i = 0; i < listOfArrays.length; i++) {
        if (listOfArrays[i].length == 4) {x.push(listOfArrays[i])}
        if (listOfArrays[i].length >= 5) {y.push(listOfArrays[i])}
    }

}
// 7. thực hiện tạo ô đặc biệt
function create4x_and3x(xx, yy) {
    setTimeout(function () {
        for (var i = 0; i < xx.length; i++) {
            if (xx[i].indexOf(otherTile) != -1 || xx[i].indexOf(currTile) != -1) {
                for (var d = 0; d < xx[i].length; d++) {
                    if (xx[i][d].id == otherTile.id || xx[i][d].id == currTile.id) {
                        xx[i][d].src = fiveBlock
                    }
                }
            } else {
                var d = Math.floor(Math.random() * xx[i].length)
                xx[i][d].src = fiveBlock
            }
        }
        mảng_5_Ô = []
    }, 30)
    setTimeout(function () {
        function m4(x, y) {
            for (var j = 0; j < sáu_Class_Thường.length; j++) {
                if (x.classList[0] == sáu_Class_Thường[j]) { x.src = y[j] }
            }
        }
        for (var i = 0; i < yy.length; i++) {
            if (yy[i].indexOf(otherTile) != -1 || yy[i].indexOf(currTile) != -1) {
                for (var d = 0; d < yy[i].length; d++) {
                    if (yy[i][d].id == otherTile.id || yy[i][d].id == currTile.id) {
                        var k = yy[i][1].id.split("-"); a = Number(k[0])
                        var k2 = yy[i][2].id.split("-"); a2 = Number(k2[0])
                        var k3 = yy[i][3].id.split("-"); a3 = Number(k3[0])
                        if (a == a2 && a2 == a3) { m4(yy[i][d], sáu_Biến_Dọc) }
                        else { m4(yy[i][d], sáu_Biến_Ngang) }
                    }
                }
            } else {
                var d = Math.floor(Math.random() * yy[i].length)
                var k = yy[i][0].id.split("-"); a = Number(k[0])
                var k2 = yy[i][1].id.split("-"); a2 = Number(k2[0])
                var k3 = yy[i][2].id.split("-"); a3 = Number(k3[0])
                if (a == a2 && a2 == a3) { m4(yy[i][d], sáu_Biến_Dọc) }
                else { m4(yy[i][d], sáu_Biến_Ngang) }
            }
        }
        yy = []
    }, 25)
    if (Ô_Tạo_Boom_3x3.length > 0) {
        setTimeout(function () {
            for (var i = 0; i < Ô_Tạo_Boom_3x3.length; i++) {
                for (var j = 0; j < sáu_Class_Thường.length; j++) {
                    if (Ô_Tạo_Boom_3x3[i].classList[0] == sáu_Class_Thường[j]) {
                        Ô_Tạo_Boom_3x3[i].src = sáu_Biến_Boom_3x[j]
                    }
                } // cho class vào cờ. ví dụ cờ melon class "melon"
            }
            Ô_Tạo_Boom_3x3 = []
        }, 20)
    }
    setTimeout(function () { dayTh = 0 }, 40)
}
// 8. kiểm tra xem có viên đặc biệt ko
function test_Có_Viên_Đặc_Biệt_Ko() {
    var u = 0
    for (var i = 0; i < listOfArrays.length; i++) {
        for (var d = 0; d < listOfArrays[i].length; d++) {
            for (var j = 0; j < mười_Tám_Class.length; j++) {
                if (listOfArrays[i][d].classList[2] == mười_Tám_Class[j]) { u++ }
            }
        }
    }
    return u
}
// 9.
function đem_Cờ_Đặc_Biệt_Lấy_Mảng_Nổ() {
    for (var i = 0; i < listOfArrays.length; i++) {
        for (var d = 0; d < listOfArrays[i].length; d++) {
            var mm = 0
            for (var j = 0; j < _6_Class_Ngang.length; j++) { if (listOfArrays[i][d].classList[2] == _6_Class_Ngang[j]) {mm++; boomNgang(listOfArrays[i][d]) }}
            if (mm == 0) {
            for (var j = 0; j < _6_Class_Dọc.length; j++) { if (listOfArrays[i][d].classList[2] == _6_Class_Dọc[j]) {mm++; boomDoc(listOfArrays[i][d])}} }
            if (mm == 0) {
            for (var j = 0; j < _6_Class_3x3.length; j++) { if (listOfArrays[i][d].classList[2] == _6_Class_3x3[j]) {/*specialArraymini3x2.push(listOfArrays[i][d]);*/ boom3x3(listOfArrays[i][d]) }}
            }
        }
    }
}
// 10.
// function xóa_Viên_Nổ(x, dd, xx) {var opacity = 1;
//     var mimi = setInterval(function () {opacity -= 0.1; x.style.opacity = opacity;
//         if (opacity <= 0) {
//             x.src = blank; x.style.opacity = '1'; clearInterval(mimi); abcm--; 
//             if (abcm == 0 && dd > 0) {crushCandy()}
//             else if (abcm == 0 ) {clearInterval(mimi);mảng_Nổ=[];
//                 if(specialArraymini.length>0){xử_Array_Mini()}else{crush_Xong_Rơi(xx)}
//             }
//         }
//     }, 40);
// }
function xóa_Viên_Nổ(x, dd, xx) { var opacity = 1;
    var mimi = setInterval(() => {
        opacity -= 0.1; x.style.opacity = opacity;
        if (opacity <= 0) {
            x.src = blank; x.style.opacity = '1'; clearInterval(mimi); abcm--; 
            if (abcm === 0 && dd > 0) crushCandy();
         else if(abcm==0){clearInterval(mimi);mảng_Nổ=[];specialArraymini.length>0?xử_Array_Mini():crush_Xong_Rơi(xx)}
        }
    }, 40);
}
// 11.
function checkValid() {
    //check hàng
    for (let i = 0; i < hàng; i++) {
        for (let j = 0; j < cột - 2; j++) {
            let candy1 = board[i][j]; let candy2 = board[i][j + 1]; let candy3 = board[i][j + 2];
            if (candy1.classList[0] == candy2.classList[0] && candy2.classList[0] == candy3.classList[0] && !candy1.src.includes(blank)) {
                return true;
            }
        }
    }

    //check cột
    for (let j = 0; j < cột; j++) {
        for (let i = 0; i < hàng - 2; i++) {
            let candy1 = board[i][j]; let candy2 = board[i + 1][j]; let candy3 = board[i + 2][j];
            if (candy1.classList[0] == candy2.classList[0] && candy2.classList[0] == candy3.classList[0] && !candy1.src.includes(blank)) {
                return true;
            }
        }
    }
    return false;
}
// 12.
function haha(cot, id_Ne) {
    function randomChess(b) {
        var x = Math.floor(Math.random() * sáu_Biến_Thường.length)
        document.getElementById(b).src = sáu_Biến_Thường[x] 
    }

    var mm = 0
    for (var i = cot.length - 1; i >= 0; i--) {
        if (cot[i].src == blank) {
            mm++
            randomChess(id_Ne)
            var n = 0; var ii = i; var arrayTop = []
            for (var j = 0; j < ii; j++) {
                arrayTop.push(cot[j].style.top)
            }
            function goo() {
                n++; 
                for (var j = 0; j < ii; j++) {
                    cot[j].classList.replace(cot[j].classList[4], "i4")
                    cot[j].style.top = Number(cot[j].style.top.slice(0, -3)) + nammuoi / 5 + 'rem'
                }
                if (n < 5) { setTimeout(function () { goo() }, timeX) }
                else {
                    for (var j = ii; j >= 0; j--) {
                        if (j > 0) { cot[j].src = cot[j - 1].src }
                        if (j == 0) { cot[0].src = '' }
                        cot[j].classList.replace(cot[j].classList[4], "i3")
                    }
                    for (var j = 0; j < ii; j++) {cot[j].style.top = arrayTop[j]}
                    haha(cot, id_Ne)
                }
            }
            setTimeout(function () { goo() }, timeX); break;
        }
    }
    if (mm == 0) { abcn++ }
}
// 13.
function xem_Ghép_Cờ_Có_Kề_Không() {
    let currCoords = currTile.id.split("-"); // id="0-0" -> ["0", "0"]
    let r = parseInt(currCoords[0]);
    let c = parseInt(currCoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2 = parseInt(otherCoords[0]);
    let c2 = parseInt(otherCoords[1]);

    let moveLeft = c2 == c - 1 && r == r2;
    let moveRight = c2 == c + 1 && r == r2; 
    let moveUp = r2 == r - 1 && c == c2;
    let moveDown = r2 == r + 1 && c == c2;

    let isAdjacent = moveLeft || moveRight || moveUp || moveDown;
    return isAdjacent
}
// 14.
function lấy_ListArray() {
    for (let r = 0; r < hàng; r++) { //check hàng
        let array = [], candy1 = board[r][0]; array.push(candy1);
        for (let c = 1; c < cột; c++) {
            if (candy1.classList[0] == board[r][c].classList[0]) {array.push(board[r][c])} 
            else {if (array.length >= 3) {listOfArrays.push(array)}; candy1 = board[r][c]; array = [candy1]}
        } // Nếu đã duyệt qua cột cuối cùng, lưu trữ mảng tạm thời nếu độ dài của nó lớn hơn hoặc bằng 3
        if (array.length >= 3) { listOfArrays.push(array)}
    }
    for (let c = 0; c < cột; c++) { //check cột
        let candy1 = board[0][c], array = []; array.push(candy1);
        for (let r = 1; r < hàng; r++) {
            if (candy1.classList[0] == board[r][c].classList[0]) {array.push(board[r][c])} 
            else {if (array.length >= 3) {listOfArrays.push(array)}; candy1 = board[r][c]; array=[candy1]}
        }
        if (array.length >= 3) { listOfArrays.push(array)}
    }
}
// 15.
function tạo_Bom3x3() {Ô_Tạo_Boom_3x3 = lấy_Phần_Tử_Chung(listOfArrays.flatMap(arr => arr))}
// 16.
function làm_Tròn(number, decimalPlaces) {
    var factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
// 17.
function inforBattlee(hp, hpMax, mana, manaMax, xu, lv, lvPercent, giap, hồng_ngọc /*dame*/) {
    // x = 1 là trừ máu, 2 là cộng, y là số máu cộng trừ
    this.hp = function (x, y) {
        if (x == 1) { // (1) trừ máu
            if (this.giapInfor() > 0) { // a) nếu giáp > 0 
                giap = làm_Tròn(this.giapInfor() - y, 2)  // giap = 35 giáp - 4 st
                if (giap < 0) { // trừ máu lố vào giáp
                    giap = Math.abs(giap); hp = làm_Tròn(hp - giap, 2); giap = 0  // (-35)
                    if (hp <= 0) { hp = 0; this.lv(2) } //máu bé hơn 0
                }
            } else {
                hp = làm_Tròn(hp - y, 2)
                if (hp <= 0) { hp = 0; this.lv(2) } //máu bé hơn 0
            }
        } else if (x == 2) { //(2) cộng máu
            hp = làm_Tròn(hp + y, 2)
            if (hp > lvPoint(this.lvInfor())[0]) { hp = lvPoint(this.lvInfor())[0] }
        }
        return hp = làm_Tròn(hp, 2)
    }
    this.mana = function (x, y) {
        if (x == 1) {
            if (y <= mana) { mana = mana - y; return mana = làm_Tròn(mana, 2) } else { return false }
        } else { mana = mana + y; if (mana > 300) mana = 300; return mana = làm_Tròn(mana, 2) }
    }
    this.giap = function (x, y) {
        giap = làm_Tròn(giap + x, 2)
        if (y == 1) { quai.hp(1, x) }
        else { mee.hp(1, x) }
        return giap = làm_Tròn(giap, 2)
    }
    this.xu = function (x, y) {
        if (x == 1) { // trừ tiền
            if (y <= xu) { xu = xu - y; return xu = xu.toFixed(2) } else { return false }
        } else { xu = xu + y; return xu = làm_Tròn(xu, 2) } // cộng tiền
    }
    this.hồng_ngọc = function (x, y) {
        if (x == 1) {
            if (y <= hồng_ngọc) { hồng_ngọc = hồng_ngọc - y; return hồng_ngọc = làm_Tròn(hồng_ngọc, 2) } else { return false }
        } else { hồng_ngọc = hồng_ngọc + y; return hồng_ngọc = làm_Tròn(hồng_ngọc, 2) }
    }
    this.lv = function (x) {
        if (x == 1) {
            lvPercent = lvPercent + 2
            if (lvPercent >= 100) {
                lv = lv + 1; lvPercent = 0;
                hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
            }
        } else {
            lvPercent = lvPercent - 4
            hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
            if (lvPercent < 0) {
                lv = lv - 1; i = Math.abs(lvPercent)
                lvPercent = 100 - i

                hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
                    ; if (lv < 0) {
                        lv = 0; lvPercent = 0
                        hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
                    }
            }
        }
    }

/*hp*/  this.hpInfor = function () { return hp = làm_Tròn(hp, 2) }
    this.hpMaxInfor = function () { return hpMax }
    this.hpMa = function (xx) { hp = xx; hpMax = xx }
/*mana*/this.manaInfor = function () { return mana }
    this.manaMaxInfor = function () { return manaMax }
/*xu*/  this.xuInfor = function () { return xu }
/*lv*/  this.lvInfor = function () { return lv }
/* % */ this.lvPercentInfor = function () { return lvPercent }
/*giáp*/this.giapInfor = function () { return giap = làm_Tròn(giap, 2) }
/*hồng ngọc*/this.hồng_ngọcInfor = function () { return hồng_ngọc }

    hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
}
// 18.
function inforMee(namee, lv, lvPercent, xu, kim_cương, hồng_ngọc) {
    /*1. tên NV*/this.namee = function () { return namee }
    /*2. cấp*/this.lvInfor = function () { return lv }
    /*3. % */this.lvPercentInfor = function () { return lvPercent }
    /*4. vàng*/this.xuInfor = function () { return xu }
    /*5. kim cương*/this.kim_cươngInfor = function () { return kim_cương }
    /*6. hồng ngọc*/this.kim_cươngInfor = function () { return hồng_ngọc }
}











// //rác
// {  function xóa_Ngang_Dọc() {
//     var k = otherTile.id.split("-"); a = Number(k[0]); b = Number(k[1])
//     var k2 = currTile.id.split("-"); a2 = Number(k2[0]); b2 = Number(k2[1])

//     function mimi(xx, y, z) { 
//         if (yy) {
//             if (xx) { add_blur_3x22(board[a + y][b + z], otherTile.classList[0]) }
//         }
//         if (xx) mảng_Nổ.push(board[a + y][b + z])
//     } // add
//     mimi(a + 2 <=/*8*/hàng - 1, 2, 0); mimi(a + 3 <=/*8*/hàng - 1, 3, 0); mimi(a - 2 >= 0, -2, 0); mimi(a - 3 >= 0, -3, 0)
//     mimi(b + 2 <=/*8*/cột - 1, 0, 2); mimi(b + 3 <=/*8*/cột - 1, 0, 3); mimi(b - 2 >= 0, 0, -2); mimi(b - 3 >= 0, 0, -3)

//     if (b - 1 != b2 ) { mimi(b - 1 >= 0 , 0, -1)}; if (b + 1 != b2) { mimi(b + 1 <=/*8*/cột - 1, 0, 1)}
//     if (a - 1 != a2) { mimi(a - 1 >= 0, -1, 0)}; if (a + 1 != a2) { mimi(a + 1 <=/*8*/hàng - 1, 1, 0)}

//     function mi(xx, y, z) { if (xx) { mảng_Nổ.push(board[a + y][b + z]) } } // xóa
//     mi(a + 1 <= 8, 1, 0); mi(a + 2 <= 8, 2, 0); mi(a + 3 <= 8, 3, 0); mi(a - 1 >= 0, -1, 0); mi(a - 2 >= 0, -2, 0); mi(a - 3 >= 0, -3, 0)
//     mi(b + 1 <= 8, 0, 1); mi(b + 2 <= 8, 0, 2); mi(b + 3 <= 8, 0, 3); mi(b - 1 >= 0, 0, -1); mi(b - 2 >= 0, 0, -2); mi(b - 3 >= 0, 0, -3)
//     mảng_Nổ.push(board[a][b])
//     xử_Array_Mini(200)
// }}

//7. Quái lựa cấp độ khó để đánh 
    // function auto_Fight() {
    //     //mô hình: (0)auto_Boom5x, (1)N3D, (2)liên5, (3)liên4, (4)liên3
    //     var mảng_Auto = [auto_Boom5x, auto_N3D, auto_5x, auto_4x, auto_3x]
    //     var mảng_Đi_5_Hướng = see_Chess(), mảng_True = []
    //     for (var i = 0; i < mảng_Đi_5_Hướng.length; i++) {
    //         if (mảng_Đi_5_Hướng[i] == true) { mảng_True.push(mảng_Đi_5_Hướng.indexOf(i)) }
    //     } // coi nào true, lấy id của nó vô mảng_True ||  vd: true 0, true 1, false 2  ==>  0, 1
    //     var y = Math.floor(Math.random() * mảng_True.length) 
    //     // var nn = mảng_True[y] // lấy đc random id
    //     mảng_Auto[y]
    //     function endd(xx) {
    //         currTile.classList.replace(currTile.classList[3], 'focus')// mở focus Cur
    //         setTimeout(function () { 
    //             currTile.classList.replace(currTile.classList[3], 'fc')
    //         }, 900)// tắt focus Cur
    //         setTimeout(function () {
    //             let currImg = currTile.src; let otherImg = otherTile.src;
    //             currTile.src = otherImg; otherTile.src = currImg
    //             otherTile.classList.replace(otherTile.classList[3], 'outFocus')// mở focus Other
    //             // xóa 2 ô đặc biệt
    //             setTimeout(function(){otherTile.classList.replace(otherTile.classList[3],'fc')},400)//tắt focus Other
    //             if (xx == 1) {setTimeout(function () {readycrush()}, 700)} 
    //             else {setTimeout(function () {xóa_2_Ô_Đặc_Biệt_Kề_Nhau(currTile, otherTile)}, 700)}
    //         }, 1100)
    //     }
    //     function startt(yy) {
    //         if (yy < 5) {
    //             // yy là vị trí ô đặc biệt, rd là n cặp ô đặc biệt, 0 1 là ô cần tìm
    //             var rd = Math.floor(Math.random() * auto_Boom5x()[yy].length)  
    //             var random = Math.floor(Math.random() * 2) + 1 
    //             if (random == 1) {currTile = auto_Boom5x()[yy][rd][0]; otherTile = auto_Boom5x()[yy][rd][1]} 
    //             else {currTile = auto_Boom5x()[yy][rd][1]; otherTile = auto_Boom5x()[yy][rd][0]}
    //         } else {
    //             var rd = Math.floor(Math.random() * auto_N3D()[1].length)  
    //             var random = Math.floor(Math.random() * 2) + 1 
    //             if (random == 1) {currTile = auto_N3D()[1][rd][0]; otherTile = auto_N3D()[1][rd][1]} 
    //             else {currTile = auto_N3D()[1][rd][1]; otherTile = auto_N3D()[1][rd][0]}
    //         }
    //     }

    //     function mi(x) {
    //         var randomm = Math.floor(Math.random() * a[x].length) 
    //         var random1_2 = Math.floor(Math.random() * 2) + 1
    //         if (random1_2 == 1) {currTile = a[x][randomm][0]; otherTile = a[x][randomm][1]}
    //         else {currTile = a[x][randomm][1]; otherTile = a[x][randomm][0]}
    //     }
    //     function mimi(yy) {
    //         var a = yy(1), N_Viên_ĐB = [], N_Nhánh = [],n = 0 //a[1] lấy all mảng|
    //         for(var i=0;i<a[1].length;i++){N_Viên_ĐB.push(a[1][i][2]);N_Nhánh.push(a[1][i][3]);if(a[1][i][2]>0){n++}}
    //         if (n > 0) { mi(N_Viên_ĐB)} else {mi(N_Nhánh)}  // a[1][0]|[2],  a[1][1]|[2]   |[0] và [1] lấy gốc
    //         function mi(xx) { //N_Viên_ĐB, xx
    //             var maxInNumbers = Math.max.apply(Math, xx), indexes = [];
    //             for (var j = 0; j < xx.length; j++) { if (xx[j] === maxInNumbers) { indexes.push(j); } }
    //             var randomm = Math.floor(Math.random()*indexes.length),random1_2 = Math.floor(Math.random()*2)+1
    //             if (random1_2 == 1) { currTile = a[1][randomm][0]; otherTile = a[1][randomm][1] }
    //             else { currTile = a[1][randomm][1]; otherTile = a[1][randomm][0] }
    //         } // đem cuối: console.log(currTile.id, otherTile.id)
    //     }
        
    //     if (nn == 0) {
    //         var a=auto_Boom5x();if(a[1].length>0){mi(1)} else if(a[2].length>0){mi(2)} else if(a[3].length>0){mi(3)}} 
    //     else if (nn == 1) { var a = auto_N3D(); mi(1)}
    //     else if (nn = 2) {mimi(auto_5x)} else if (nn = 3) {mimi(auto_4x)} else if (nn = 3) {mimi(auto_3x)}
        
    //     else if (/**auto_5x()[0]*/ nn == 2) {    
    //         // 0, 1 , 2/readycrush2(5)[1], 3/readycrush2(5)[2]]
    //         var array_N3D = [], array_N3D_id = [], array_N3D_Max = [], array_N3D_id_Max = []
    //         for (var y of auto_5x_array) {
    //             if (y[2] > 0) {array_N3D.push(y[2]); array_N3D_id.push([y[0], y[1]])} 
    //         }
    //         if (array_N3D.length > 0) {
    //             var maxInNumbers = Math.max.apply(Math, array_N3D)
    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i])
    //                     array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //             var random = Math.floor(Math.random() * array_N3D_Max.length)
    //             currTile = array_N3D_id_Max[random][0]
    //             otherTile = array_N3D_id_Max[random][1]
    //         } else {
    //             for (var y of auto_5x_array) {array_N3D.push(y[3]); array_N3D_id.push([y[0], y[1]])}
    //             var maxInNumbers = Math.max.apply(Math, array_N3D)
    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i])
    //                     array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //             var random = Math.floor(Math.random() * array_N3D_Max.length)
    //             currTile = array_N3D_id_Max[random][0]
    //             otherTile = array_N3D_id_Max[random][1]
    //         }
    //         endd(1) // console.log(array_N3D_Max, array_N3D_id_Max)
    //     }
    //     else if (/**auto_4x()[0]*/ nn == 3) {    
    //         // 0, 1 , 2/readycrush2(5)[1], 3/readycrush2(5)[2]]
    //         var array_N3D = [], array_N3D_id = [], array_N3D_Max = [], array_N3D_id_Max = []
    //         for (var y of auto_4x_array) {
    //             if (y[2] > 0) {array_N3D.push(y[2]); array_N3D_id.push([y[0], y[1]])} 
    //         }
    //         if (array_N3D.length > 0) {
    //             var maxInNumbers = Math.max.apply(Math, array_N3D)
    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i]); array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //             var random = Math.floor(Math.random() * array_N3D_Max.length)
    //             currTile = array_N3D_id_Max[random][0]; otherTile = array_N3D_id_Max[random][1]
    //         } else {
    //             for (var y of auto_4x_array) {
    //                 array_N3D.push(y[3])
    //                 array_N3D_id.push([y[0], y[1]])
    //             }
    //             var maxInNumbers = Math.max.apply(Math, array_N3D)
    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i])
    //                     array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //             var random = Math.floor(Math.random() * array_N3D_Max.length)
    //             currTile = array_N3D_id_Max[random][0]
    //             otherTile = array_N3D_id_Max[random][1]
    //         }
    //         endd(1) // console.log(array_N3D_Max, array_N3D_id_Max)
    //     } 
    //     else if (/**auto_3x()[0]*/ nn == 4) {    
    //         // 0, 1 , 2/readycrush2(5)[1], 3/readycrush2(5)[2]]
    //         var array_N3D = [], array_N3D_id = [], array_N3D_Max = [], array_N3D_id_Max = []
    //         for (var y of auto_3x_array) {
    //             if (y[2] > 0) {
    //                 array_N3D.push(y[2]); array_N3D_id.push([y[0], y[1]])
    //             } 
    //         }
    //         if (array_N3D.length > 0) {
    //             var maxInNumbers = Math.max.apply(Math, array_N3D)
    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i])
    //                     array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //                     var random = Math.floor(Math.random() * array_N3D_Max.length) 
    //                     currTile = array_N3D_id_Max[random][0]
    //                     otherTile = array_N3D_id_Max[random][1]
    //         } else {
    //             for (var y of auto_3x_array) {
    //                     array_N3D.push(y[3])
    //                     array_N3D_id.push([y[0], y[1]])
    //             }

    //             var maxInNumbers = Math.max.apply(Math, array_N3D)

    //             for (var i = 0; i < array_N3D.length; i++) {
    //                 if (array_N3D[i] == maxInNumbers) {
    //                     array_N3D_Max.push(array_N3D[i])
    //                     array_N3D_id_Max.push(array_N3D_id[i])
    //                 }
    //             }
    //                     var random = Math.floor(Math.random() * array_N3D_Max.length) 
    //                     currTile = array_N3D_id_Max[random][0]
    //                     otherTile = array_N3D_id_Max[random][1]
    //         }
    //         endd(1)
    //     }
    // }



    // var tableContainer = document.getElementById("board"); // Lấy thẻ div để chứa bảng
    // var table = document.createElement("table"); // Tạo bảng
    // // Tạo ô và thêm vào bảng
    // for (var i = 0; i < hàng; i++) {
    //     var row = document.createElement("tr"); // Tạo một hàng mới
    //     for (var j = 0; j < cột; j++) {
    //         var cell = document.createElement("td"); // Tạo một ô mới
    //         let tile = document.createElement("img");//<img id="0-0" src="./images/Red.png">.Tạo một thẻ hình ảnh mới
    //         tile.src = randomCandy(); tile.style.opacity = "1" // thêm ảnh và độ mờ 1
    //         tile.className = sáu_Class_Thường[sáu_Biến_Thường.indexOf(tile.src)]
    //         tile.classList.add("ch-Chess", "Xclass", "fc", "i3", "absolute")
    //         tile.addEventListener("click", click_Other); tile.addEventListener("click", click_Curr);
    //         tile.id = i.toString() + "-" + j.toString(); // set id     
    //         // board_table.append(tile); row.push(tile);// !!! append thêm nhiều con 1 lúc đc
    //         cell.append(tile); row.append(cell); // Thêm hình ảnh vào ô. Thêm ô vào hàng
    //     }
    //     table.append(row); board.push(row)// Thêm hàng vào bảng
    // }

    // // Thêm bảng vào thẻ div
    // tableContainer.appendChild(table);


    // var board_table = document.getElementById("board"); //Lấy thẻ từ HTML và lưu trữ vào biến board_table.
    // for (let r = 0; r < hàng; r++) { let row = []; // Khởi tạo một mảng rỗng để lưu trữ các ô của hàng
    //     for (let c = 0; c < cột; c++) {
    //         let tile = document.createElement("img"); // <img id="0-0" src="./images/Red.png"> Tạo một thẻ <img> mới
    //         tile.src = randomCandy(); tile.style.opacity = "1" // thêm ảnh và độ mờ 1
    //         tile.className = sáu_Class_Thường[sáu_Biến_Thường.indexOf(tile.src)]
    //         tile.classList.add("ch-Chess", "Xclass", "fc", "i3", "absolute")
    //         tile.addEventListener("click", click_Other); tile.addEventListener("click", click_Curr);
    //         tile.id = r.toString() + "-" + c.toString(); // set id     
    //         board_table.append(tile); row.push(tile);// !!! append thêm nhiều con 1 lúc đc
    //         // Thêm ảnh vào thẻ <div> chứa bảng | Thêm ảnh vào mảng hàng hiện tại
    //     }; board.push(row); // Thêm mảng hàng vào mảng lưu trữ toàn bộ bảng
    // }

    // function createE(x, b) {
    //     x = document.createElement("img"); board_table.append(x) // table.append(x)
    //     x.style.top = (-nammuoi) + 'rem'; x.style.left = nammuoi * b + 'rem'
    //     x.classList.add("absolute"); x.id = 0 + "-" + '*' + b;
    // }
    // for (var i = 0; i < cột; i++) { let tile; createE(tile, i) }
    // for (var i = 0; i < hàng; i++) { // cài vị trí. ô này top 50rem left 20rem
    //     for (var e = 0; e < cột; e++) {
    //         var b=nammuoi*i, c=nammuoi*e; board[i][e].style.top = b + 'rem'; board[i][e].style.left = c + 'rem'
    //     }
    // }











