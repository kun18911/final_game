
// 1. Các biến cho viên đặc biệt

// 2.
function crush_Xong_Rơi(xx) {
    if (yyy) {document.querySelector(".boardPoint").classList.remove("nonee"); cộngĐiểmSauCrush(0)}; create4x_and3x();
    setTimeout(function () {
        otherTile = 0; currTile = 0; create4x_and3x();// cho 2 click về 0 
        checkClass(); listOfArrays = []; slide1()
    }, xx) // 200ms sau mới rơi cờ
}
// 3.
function mảng_Có_Viên_Nổ() {
    var mảng_Ko_Trùng = Array.from(new Set(specialArraymini)); specialArraymini = []; 
    for (var i = 0; i < mảng_Ko_Trùng.length; i++) {
    if (_6_Class_Ngang.includes(mảng_Ko_Trùng[i].classList[2])) { boomNgang(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    else if (_6_Class_Dọc.includes(mảng_Ko_Trùng[i].classList[2])) { boomDoc(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    else if (_6_Class_3x3.includes(mảng_Ko_Trùng[i].classList[2])) { boom3x3(mảng_Ko_Trùng[i]); /*x.push(mảng_Ko_Trùng[i])*/ }
    }
    // mảng_Ko_Trùng = mảng_Ko_Trùng.filter(item => !x.includes(item));
}
// 4.
function xóa_2_Ô_Đặc_Biệt_Kề_Nhau(x, y) {
    // xóa cho ô Ngang/Dọc và Ngang/Dọc
    if (_12_Class_Ngang_Dọc.includes(y.classList[2]) && _12_Class_Ngang_Dọc.includes(x.classList[2])) {setTime(xóa_Ngang_Dọc, 0)}
    // ---------------
    // xóa cho ô 3x3 và Ngang/Dọc     
    if (_6_Class_3x3.includes(y.classList[2]) || _6_Class_3x3.includes(x.classList[2])) {
        if (_6_Class_Ngang.includes(y.classList[2]) || _6_Class_Ngang.includes(x.classList[2])) {setTime(xoaNgang3x3, "Ngang")}
        else if (_6_Class_Dọc.includes(y.classList[2]) || _6_Class_Dọc.includes(x.classList[2])) {setTime(xoaNgang3x3, "Doc")}
    }
    // xóa cho ô 3x3 và 3x3
    if (_6_Class_3x3.includes(y.classList[2]) && _6_Class_3x3.includes(x.classList[2])) {setTime(xoa3x3vs3x3, 0)}
    // ---------------
    // xóa cho ô 5x và ô thường (Xclass)
    if ((x.classList[2] == "fiveBlock" || y.classList[2] == "fiveBlock") && (x.classList[2] == "Xclass" || y.classList[2] == "Xclass")) {
        if (x.classList[2] == 'fiveBlock') {setTime(xoa5xThuong, y)} else {setTime(xoa5xThuong, x)}
    } 
    // xóa cho ô 5x và ô đặc biệt (3x3, ngang, dọc)
    if ((x.classList[2] == "fiveBlock"|| y.classList[2] == "fiveBlock") && (mười_Tám_Class.includes(y.classList[2])||mười_Tám_Class.includes(x.classList[2]))) {
        if (x.classList[2] == "fiveBlock") { setTime(xoa5xDacbiet, y)} else {setTime(xoa5xDacbiet, x)}
        console.log(x.classList[2], y.classList[2])
    }
    // khi cả 2 đều là 5x
    if (y.classList[2] == "fiveBlock" && x.classList[2] == "fiveBlock") {console.log("rớt 5x5x");setTime(xoa5x5x, 0)} 
    function setTime(x, y) {setTimeout(function () { x(y) }, 300); return go = false}
}
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
// 7. thực hiện tạo ô đặc biệt
function create4x_and3x() {
    // setTimeout(function () {
    //     for (var i = 0; i < mảng_5_Ô.length; i++) {
    //         if (mảng_5_Ô[i].indexOf(otherTile) != -1 || mảng_5_Ô[i].indexOf(currTile) != -1) {
    //             for (var d = 0; d < mảng_5_Ô[i].length; d++) {
    //                 if (mảng_5_Ô[i][d].id == otherTile.id || mảng_5_Ô[i][d].id == currTile.id) {
    //                     mảng_5_Ô[i][d].src = fiveBlock
    //                 }
    //             }
    //         } else {
    //             var d = Math.floor(Math.random() * mảng_5_Ô[i].length)
    //             mảng_5_Ô[i][d].src = fiveBlock
    //         }
    //     }
    //     mảng_5_Ô = []
    // }, 30)
    setTimeout(function () {
        function m4(x, y) {
            for (var j = 0; j < sáu_Class_Thường.length; j++) {
                if (x.classList[0] == sáu_Class_Thường[j]) { x.src = y[j] }
            }
        }
        for (var i = 0; i < mảng_4_Ô.length; i++) {
            if (mảng_4_Ô[i].indexOf(otherTile) != -1 || mảng_4_Ô[i].indexOf(currTile) != -1) {
                for (var d = 0; d < mảng_4_Ô[i].length; d++) {
                    if (mảng_4_Ô[i][d].id == otherTile.id || mảng_4_Ô[i][d].id == currTile.id) {
                        var k = mảng_4_Ô[i][1].id.split("-"); a = Number(k[0])
                        var k2 = mảng_4_Ô[i][2].id.split("-"); a2 = Number(k2[0])
                        var k3 = mảng_4_Ô[i][3].id.split("-"); a3 = Number(k3[0])
                        if (a == a2 && a2 == a3) { m4(mảng_4_Ô[i][d], sáu_Biến_Dọc) }
                        else { m4(mảng_4_Ô[i][d], sáu_Biến_Ngang) }
                    }
                }
            } else {
                var d = Math.floor(Math.random() * mảng_4_Ô[i].length)
                var k = mảng_4_Ô[i][0].id.split("-"); a = Number(k[0])
                var k2 = mảng_4_Ô[i][1].id.split("-"); a2 = Number(k2[0])
                var k3 = mảng_4_Ô[i][2].id.split("-"); a3 = Number(k3[0])
                if (a == a2 && a2 == a3) { m4(mảng_4_Ô[i][d], sáu_Biến_Dọc) }
                else { m4(mảng_4_Ô[i][d], sáu_Biến_Ngang) }
            }
        }
        mảng_4_Ô = []
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
    setTimeout(function () { dayTh = 0;  }, 40)
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
    let allC = listOfArrays.flat(); allC.some(i => {mười_Tám_Class.includes(i.classList[2])? u++: 2})
    return u
}
// 9.
function đem_Cờ_Đặc_Biệt_Lấy_Mảng_Nổ() {
    listOfArrays.flat().some(i => {
        _6_Class_Ngang.includes(i.classList[2])? boomNgang(i): 1
        _6_Class_Dọc.includes(i.classList[2])? boomDoc(i): 1
        _6_Class_3x3.includes(i.classList[2])? boom3x3(i): 1
    })
}
// 10.
function xóa_Viên_Nổ(x, crush, xx) {
    var opacity = 1;
    var mimi = setInterval(function () {opacity -= 0.1; x.style.opacity = opacity;
        if (opacity <= 0) {
            x.src = blank; x.style.opacity = '1'; clearInterval(mimi); abcm--; 
            if (abcm <= 0 && crush > 0) {crushCandy()}
            else if (abcm <= 0 ) {clearInterval(mimi);mảng_Nổ=[];
                if(specialArraymini.length>0 || specialArraymini5.length > 0){xử_Array_Mini()}else{crush_Xong_Rơi(xx)}
            }
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
    //check hàng
    for (let r = 0; r < hàng; r++) {
        let array = [], candy1 = board[r][0]; array.push(candy1);

        for (let c = 1; c < cột; c++) {
            if (candy1.classList[0] == board[r][c].classList[0]) {
                array.push(board[r][c]);
            } else {
                candy1 = board[r][c];
                if (array.length >= 3) { listOfArrays.push(array) }
                array = []; array.push(candy1);
            }
            if (c == (cột - 1)) { if (array.length >= 3) { listOfArrays.push(array) } }
        }
    }
    //check cột
    for (let c = 0; c < cột; c++) {
        let candy1 = board[0][c], array = []; array.push(candy1);
        for (let r = 1; r < hàng; r++) {
            if (candy1.classList[0] == board[r][c].classList[0]) {
                array.push(board[r][c]);
            } else {
                candy1 = board[r][c];
                if (array.length >= 3) { listOfArrays.push(array) }
                array = []; array.push(candy1);
            }
            if (r == (hàng - 1)) { if (array.length >= 3) { listOfArrays.push(array) } }
        }
    }
}
// 16.
function làm_Tròn(number, decimalPlaces) {var factor = Math.pow(10, decimalPlaces); return Math.round(number * factor) / factor}
// 17.
function inforBattlee(hp, hpMax, mana, manaMax, xu, lv, lvPercent, giáp, hồng_ngọc /*dame*/) {
    // cộng trừ điểm
    {
        // x = 1 là trừ máu, 2 là cộng, y là số máu cộng trừ
        this.hp = function (x, y) {
            if (x == 1) { // (1) trừ máu
                if (giáp > 0) { // a) nếu giáp > 0 
                    giáp = làm_Tròn(giáp - y, 2)  // giáp = 35 giáp - 4 st
                    if (giáp < 0) { // trừ máu lố vào giáp
                        var aa = Math.abs(giáp); hp = làm_Tròn(hp - aa, 2); giáp = 0  // (-35)
                        if (hp <= 0) { hp = 0; /*this.lv(2)*/ }; return hp  
                    }; return hp  
                } else {
                    hp = làm_Tròn(hp - y, 2); if (hp <= 0) { hp = 0; /*this.lv(2)*/ }; return hp  
                }
                
            } else if (x == 2) { //(2) cộng máu
                hp = làm_Tròn(hp + y, 2)
                if (hp > lvPoint(this.lvInfor())[0]) { hp = lvPoint(this.lvInfor())[0] }; return hp 
            }
        }
        this.mana = function (x, y) {
            if (x == 1) {if (y <= mana) { return mana = làm_Tròn(mana - y, 2) } else { return false }} 
            else {mana = làm_Tròn(mana + y, 2); if (mana > 300) mana = 300; return mana}
        }
        this.giáp = function (x, y) {
            if (x == 1) { quai.hp(1, y) } else { mee.hp(1, y) }
            return giáp = làm_Tròn(giáp + y, 2)
        }
        this.xu = function (x, y) {
            if (x == 1) { if (y <= xu) {return xu = làm_Tròn(xu - y, 2) } else { return false }} // trừ tiền 
            else { return xu = làm_Tròn(xu + y, 2) } // cộng tiền
        }
        this.hồng_ngọc = function (x, y) {
            if (x == 1) {
                if(y<=hồng_ngọc){return hồng_ngọc=làm_Tròn(hồng_ngọc-y,2)}else{return false }
            } else {return hồng_ngọc = làm_Tròn(hồng_ngọc + y, 2) }
        }
        this.lv = function (x) {
            if (x == 1) {lvPercent = lvPercent + 2; if (lvPercent >= 100) {lv = lv + 1; lvPercent = 0}} 
            else {
                lvPercent = lvPercent - 4
                if (lvPercent <0){lv=lv-1;lvPercent= 100 -Math.abs(lvPercent);if (lv < 0) {lv = 0; lvPercent = 0}}
            } // hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
        }
    }
    // lấy thông tin
    {
        this.hpInfor = function () { return hp = làm_Tròn(hp, 2) }           /*hp*/
        this.hpMaxInfor = function () { return hpMax }
        this.hpMa = function (xx) { hp = xx; hpMax = xx }                    
        this.manaInfor = function () { return mana }                         /*mana*/
        this.manaMaxInfor = function () { return manaMax }
        this.xuInfor = function () { return xu }                             /*xu*/
        this.lvInfor = function () { return lv }                             /*lv*/
        this.lvPercentInfor = function () { return lvPercent }               /* % */
        this.giápInfor = function () { return giáp = làm_Tròn(giáp, 2) }     /*giáp*/
        this.hồng_ngọcInfor = function () { return hồng_ngọc }               /*hồng ngọc*/
    }
    hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]  //console.log(this.lvInfor()) quái và me
}
// 18.
function inforMee(namee, lv, lvPercent, xu, kim_cương, hồng_ngọc) {
    /*1. tên NV*/   this.namee = function (x) { if (x == 1) {return namee} else {namee = x}; document.querySelector(".ten_Nv_0").innerHTML = namee; return namee }
    /*2. cấp*/      this.lvInfor = function () { return lv }
    /*3. % */       this.lvPercent = function (x) {
            if (x == 1) {lvPercent = lvPercent + 2; if (lvPercent >= 100) {lv = lv + 1; lvPercent = 0}} 
            else {
                lvPercent = lvPercent - 4
                if (lvPercent <0){lv=lv-1;lvPercent= 100 -Math.abs(lvPercent);if (lv < 0) {lv = 0; lvPercent = 0}}
            }
            document.querySelector(".cap_Nv_0").innerHTML = lv
            document.querySelector(".perCent_Nv_0").innerHTML =lvPercent
        }
    /*4. vàng*/     this.xuInfor = function (x,y) {  if (x == 1) {return xu} 
        else if (x == 2){xu = xu + y; document.querySelector(".xu_Nv_0").innerHTML = xu; return xu} else {if (xu - y >= 0) {xu = xu - y; document.querySelector(".xu_Nv_0").innerHTML = xu; return xu} else {return false}}  }
    /*5. kim cương*/this.kim_cươngInfor = function (x,y) {  if (x == 1) {return kim_cương} 
        else if (x == 2){kim_cương = kim_cương + y; document.querySelector(".kCuong_Nv_0").innerHTML = kim_cương; return kim_cương} else {if (kim_cương - y >= 0) {kim_cương = kim_cương - y; document.querySelector(".kCuong_Nv_0").innerHTML = kim_cương; return kim_cương} else {return false}}  }
    /*6. hồng ngọc*/this.hồng_ngọcInfor = function (x,y) {  if (x == 1) {return hồng_ngọc} 
        else if (x == 2){return hồng_ngọc = hồng_ngọc + y} else {if (hồng_ngọc - y >= 0) {return hồng_ngọc = hồng_ngọc - y} else {return false}}  }

    document.querySelector(".ten_Nv_0").innerHTML = "ji"
    document.querySelector(".cap_Nv_0").innerHTML = lv
    document.querySelector(".perCent_Nv_0").innerHTML =lvPercent
    document.querySelector(".xu_Nv_0").innerHTML = xu
    document.querySelector(".kCuong_Nv_0").innerHTML = kim_cương
}

// var aaa = [
//     [1, 0],
//     [1, 8],
//     [1, 0],
//     [2, 5], [2, 9], [3, 0], [4, 0], [4,1]
// ];
function lấy_special5(a) {
    // Tạo một đối tượng để lưu trữ mảng con đầu tiên của mỗi phần tử đầu
    const firstElements = {};

    // Duyệt qua mảng a và lấy mảng con đầu tiên của mỗi phần tử đầu
    a.forEach(subArray => {
        const firstElement = subArray[0];
        if (!firstElements[firstElement]) {
            firstElements[firstElement] = subArray;
        }
    });

    // Chuyển các mảng con từ đối tượng thành mảng và lưu vào mảng kết quả
    return result = Object.values(firstElements);

    //console.log(result); // Output: [[1, 0], [2, 5], [3, 0]]
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