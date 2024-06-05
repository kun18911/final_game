
// mở đầu
{
    // thêm sao sai nhỉ?
    const windowWidth = window.innerWidth; const windowHeight = window.innerHeight;  //gốc fontsie là slice 0, -2
    document.querySelector(".wrap").style.width = '320px'; document.querySelector(".wrap").style.height = '650px'
  
    // document.querySelector(".wrap").style.width = window.innerWidth + 'px'
    // document.querySelector(".wrap").style.height = window.innerHeight + 'px'
    // var _70_percent = ((document.querySelector(".wrap").style.height).replace("px",'') * 70 /100) * (+(document.querySelector(".wrap").style.width).replace("px",'') / 15) / (+(document.querySelector(".wrap").style.width).replace("px",'') ) // 320  700 * 70 /100   aa 300  xx 2   â*2 /300
    document.documentElement.style.fontSize = +(document.querySelector(".wrap").style.width).replace("px",'') / 15 + 'px'

    screenNe.style.width = 14.2 + 'rem'; screenNe.style.height = 22.8 + 'rem'//29.8 +'rem' 
    bodyNe.style.width = 14.2 + 'rem'; bodyNe.style.height = 22.8 + 'rem'//29.8 +'rem'

    screenNe.style.pointerEvents = 'none';// click con dính cha, g thêm để bỏ dính con
    var element = document.querySelector(".keyBoard"); element.style.pointerEvents = "auto";
    var element = document.querySelector(".keyBoard2"); element.style.pointerEvents = "auto";
    var element = document.querySelector(".infor_battle"); element.style.pointerEvents = "auto";
    if (quái_Me==0) {quái_Me = quái_S[1]} else {quái_Me = quái_Me}
    if (me_Ingame == 0) {me_Ingame = new inforMee("khoa", 1, 2, 0 /**xu */, 0/*kim_cương*/, 0/*hồng_ngọc*/)} else {me_Ingame = me_Ingame}
}

var Kai_Manz = [150, 150, 0, 300, 0/*xu*/, 0/*cấp*/, 0/* % */, 0 /*giáp*/, 0/*hồng_ngọc*/, 'Kai_Manz']
var Junn_KeJ = [150, 150, 0, 300, 0/*xu*/, 0/*cấp*/, 0/* % */, 0 /*giáp*/, 0/*hồng_ngọc*/, 'Junn_KeJ']
new inforBattlee(150, 150, 0, 300, 0/*xu*/, 5/*cấp*/, 88/* % */, 10 /*giáp*/, 0/*hồng_ngọc*/)
mee = new inforBattlee(150, 150, 0, 300, 0/*xu*/, 5/*cấp*/, 88/* % */, 10 /*giáp*/, 0/*hồng_ngọc*/)
quai = new inforBattlee(170, 150, 0, 300, 0/*xu*/, 0/*cấp*/, 0/* % */, 20 /*giáp*/, 0/*hồng_ngọc*/)


{
function ngưng_Click_Cho_Con(event) {event.stopPropagation()}
// var blackLayout = "ZzDevil"
// /*💫*/ blackLayoutt.addEventListener("click", function() { 
//     if (blackLayout=="ZzDevil") {board_Infor_ZzDevil.classList.add("nonee")
//     inFor_Tùy_Chọn_Back.classList.add("nonee")}
//     else if (blackLayout =='board_Infor_Tùy_Chọn') {board_Infor_Tùy_Chọn.classList.add("nonee"); clickTùyChọn = true}
//     blackLayoutt.classList.add("nonee")
// })
// board_ZzDevil.addEventListener("click", function() { /*💫*/
//     board_ZzDevil.classList.add("đổi_Màu_Bảng_Tùy_Chọn"); mờ_Nút(board_ZzDevil, 2, 0)

//     setTimeout(() => {
//         board_Infor_Tùy_Chọn.classList.add("nonee"); board_ZzDevil.classList.remove("đổi_Màu_Bảng_Tùy_Chọn")
//         inFor_Tùy_Chọn_Back.classList.remove("nonee"); board_Infor_ZzDevil.classList.remove("nonee")
//         board_Infor_ZzDevil.style.opacity = 0.2;  blackLayout = "haha"
//         rõ_Nút(board_Infor_ZzDevil); setTimeout(()=> {blackLayout = "ZzDevil";})
//     },200)
// }) // clickTùyChọn = wrong;

// var clickTùyChọn = 'true' /*💫*/
// inFor_Tùy_Chọn.addEventListener("click", function () { /*Gốc 💫*/
//     if (clickTùyChọn == 'false') {
//         clickTùyChọn = 1; mờ_Nút(board_Infor_Tùy_Chọn, 0, 1); mờ_Nút(blackLayoutt, 0, 1); 
//         inFor_Tùy_Chọn.classList.add("đổi_Màu_Nút_Tùy_Chọn"); mờ_Nút(inFor_Tùy_Chọn, 2, 0)
//         setTimeout(() => {clickTùyChọn = 'true'
//             blackLayoutt.classList.add("nonee"); board_Infor_Tùy_Chọn.classList.add("nonee")
//         }, 450);
//     }
//     if (clickTùyChọn == 'true') {
//         clickTùyChọn = 1; inFor_Tùy_Chọn.classList.add("đổi_Màu_Nút_Tùy_Chọn"); mờ_Nút(inFor_Tùy_Chọn, 2, 0)
//         board_Infor_Tùy_Chọn.classList.remove("nonee"); blackLayoutt.classList.remove("nonee")
//         board_Infor_Tùy_Chọn.style.opacity = 0.2; blackLayoutt.style.opacity = 0.2
//         rõ_Nút(board_Infor_Tùy_Chọn); rõ_Nút(blackLayoutt)
//         setTimeout(() => {
//             inFor_Tùy_Chọn.classList.remove("đổi_Màu_Nút_Tùy_Chọn")
//             clickTùyChọn = 'false'; blackLayout = "board_Infor_Tùy_Chọn"
//         },400)
//     }
// })

// function mờ_Nút(xx, num, yy) {
//     var opacity = 1;
//     var mimi = setInterval(function () {opacity -= 0.1; xx.style.opacity = opacity;
//         if (opacity <= num) {clearInterval(mimi); yy == 0 ? xx.style.opacity = 1 : 2+1}
//     }, 40);
// }
// function rõ_Nút(xx) {
//     var opacity = 0.2;
//     var mimi = setInterval(function () {opacity += 0.1; xx.style.opacity = opacity;
//         if (opacity >= 1) {clearInterval(mimi); xx.style.opacity = 1}
//     }, 40);
// }
// /*💫*/ inFor_Tùy_Chọn_Back.addEventListener("click", function () {
//     if (blackLayout=="ZzDevil") {
//         blackLayout =='board_Infor_Tùy_Chọn'
//         board_Infor_Tùy_Chọn.classList.remove("nonee")
//         board_Infor_ZzDevil.classList.add("nonee")
//     inFor_Tùy_Chọn_Back.classList.add("nonee")}
//     // else if (blackLayout == 'board_Infor_Tùy_Chọn') {board_Infor_Tùy_Chọn.classList.add("nonee"); clickTùyChọn = true}
//     blackLayoutt.classList.add("nonee")
// })
function clickTùyChọng() {

}

var tùyChọnNè = true
document.querySelector(".inFor_Tùy_Chọn").addEventListener("click", function(){
    document.querySelector(".board_Infor_Tùy_Chọn").classList.remove("nonee")
    document.querySelector(".inFor_Tùy_Chọn2").classList.remove("nonee")
    tùyChọnNè = "board"
})
document.querySelector(".inFor_Tùy_Chọn2").addEventListener("click", function(){
    if (tùyChọnNè == "board") {
        document.querySelector(".board_Infor_Tùy_Chọn").classList.add("nonee")
        document.querySelector(".inFor_Tùy_Chọn2").classList.add("nonee")
        tùyChọnNè = true
    } else if (tùyChọnNè == "board_Devil") {
        document.querySelector(".board_Infor_ZzDevil").classList.add("nonee")
        document.querySelector(".board_Infor_Tùy_Chọn").classList.remove("nonee")
        xóa_Bảng_Quỷ()
        // document.querySelector(".inFor_Tùy_Chọn2").classList.add("nonee")
        tùyChọnNè = "board"
    } else if (tùyChọnNè == "board_Nhiệm_Vụ") {
        document.querySelector(".boardd_Nhiệm_Vụ").classList.add("nonee")
        document.querySelector(".board_Infor_Tùy_Chọn").classList.remove("nonee")
        // document.querySelector(".inFor_Tùy_Chọn2").classList.add("nonee")
        tùyChọnNè = "board"
    } else if (tùyChọnNè == "board_Nguồn") {
        document.querySelector(".boardd_Nguồn").classList.add("nonee")
        document.querySelector(".board_Infor_Tùy_Chọn").classList.remove("nonee")
        // document.querySelector(".inFor_Tùy_Chọn2").classList.add("nonee")
        tùyChọnNè = "board"
    }

})
document.querySelector(".board_ZzDevil").addEventListener("click", function(){
    document.querySelector(".board_Infor_ZzDevil").classList.remove("nonee")
    document.querySelector(".board_Infor_Tùy_Chọn").classList.add("nonee")
    tùyChọnNè = "board_Devil"
    console.log("hio")
})

document.querySelector(".board_Nhiệm_Vụ").addEventListener("click", function(){
    document.querySelector(".boardd_Nhiệm_Vụ").classList.remove("nonee")
    document.querySelector(".board_Infor_Tùy_Chọn").classList.add("nonee")
    tùyChọnNè = "board_Nhiệm_Vụ"
})
document.querySelector(".board_Nguồn").addEventListener("click", function(){
    document.querySelector(".boardd_Nguồn").classList.remove("nonee")
    document.querySelector(".board_Infor_Tùy_Chọn").classList.add("nonee")
    tùyChọnNè = "board_Nguồn"
})
}
// Mai Xuân Vỹ,   Hồ Quang Bình 

{
// --------------------------
    function createMap(width, height, type, top, left, color) {

        if (type == '') {  // map lớn
            var map = document.createElement('div')
            map.classList.add('map'); map.style.position = "absolute"; bodyNe.append(map);
            // mini map -----------------------
            var miniMap = document.createElement('div'); miniMap.classList.add('miniM'); 
            miniMap.style.border = '0.4rem solid yellow'; document.querySelector(".miniMap").append(miniMap);

            miniMap.style.width = width / fiveN + 'rem'; miniMap.style.height = height / fiveN + 'rem'
            miniMap.style.top = top / fiveN + 'rem'; miniMap.style.left = left / fiveN + 'rem'
            miniMap.style.backgroundColor = 'rgb(176 33 203 / 64%)'
            // ---------------------------------
            this.heightT = height; this.widthT = width
            this.transMap = function (b) {
                if (b == 1) {
                    if (transMM == 1) {
                        this.widthh(0, this.widthT); this.heightt(0, this.heightT)
                        miniMap.style.width = this.widthT / fiveN + 'rem'; miniMap.style.height = this.heightT / fiveN + 'rem';
                    } else {
                        this.widthh(0, this.heightT); this.heightt(0, this.widthT)
                        miniMap.style.width = this.heightT / fiveN + 'rem'; miniMap.style.height = this.widthT / fiveN + 'rem';
                        this.heightT = this.heightt(3, 0); this.widthT = this.widthh(3, 0)
                        transMM = 1
                    }
                } else if (b == 2) {
                    if (transMM == 1) {
                        this.widthh(0, this.heightT); this.heightt(0, this.widthT)
                        miniMap.style.width = this.heightT / fiveN + 'rem'; miniMap.style.height = this.widthT / fiveN + 'rem';
                        this.heightT = this.heightt(3, 0); this.widthT = this.widthh(3, 0)
                        transMM = 2
                    } else {
                        this.widthh(0, this.widthT); this.heightt(0, this.heightT)
                        miniMap.style.width = this.widthT / fiveN + 'rem'; miniMap.style.height = this.heightT / fiveN + 'rem';
                    }
                }
            }
        } else { // dành cho lối exit
            var map = document.createElement('div'); map.classList.add('lối_Exit'); map.innerHTML = type; 
            map.classList.add(`exit${+type.replace("Lối ", "")}`);
            document.querySelector(".map").append(map); this.num = +type.replace("Lối ", "")

            var miniMap = document.createElement('div')
            miniMap.style.position = "absolute"; miniMap.style.backgroundColor = "blue"
            miniMap.style.width = '0.8rem'; miniMap.style.height = '0.8rem'
            miniMap.style.top = top / fiveN + 'rem'; miniMap.style.left = left / fiveN + 'rem'
            document.querySelector(".miniM").append(miniMap);
        }
      
        // map (map lớn và map nhỏ) ---------------------------
        map.style.width = width + 'rem'; map.style.height = height + 'rem'
        map.style.top = top + 'rem'; map.style.left = left + 'rem'; map.style.backgroundColor = color
       
        // 2.1 hàm lấy giá trị ---------------------------------
        this.topp = function (xx, yy) {
            top =  mi(xx, yy, 'top', top); miniMap.style.top = top / fiveN + 'rem'; 
            return top
        }
        this.leftt = function (xx, yy) {
            left = mi(xx, yy, 'left', left); miniMap.style.left = left / fiveN + 'rem';  
            return left
        }
        this.heightt = function (xx, yy) {
            height = mi(xx, yy, 'height', height); 
            type == ""? miniMap.style.height = height / fiveN + 'rem':1;   return height
        }
        this.widthh = function (xx, yy) {
            width = mi(xx, yy, 'width', width);
            type == ""? miniMap.style.width = width / fiveN + 'rem': 1;    return width
        }
        function mi(xx, yy, gốc, zz) {
            if (xx == 0) {map.style[gốc] = yy + 'rem'; return làm_Tròn(yy, 2)} 
            else if (xx == 1) {map.style[gốc] = (zz + yy) + 'rem'; return làm_Tròn(zz + yy, 2)}
            else if (xx == 2) {map.style[gốc] = (zz - yy) + 'rem'; return làm_Tròn(zz - yy, 2)}
            else if (xx == 3) {return zz}
        }
    } 
// --------------------------
    // nhân vật
    // function nhanvat(widthDe, heightDe, topDe, leftDe,
    //     widthKhung, heightKhung, bottomKhung,      widthAnh, heightAnh, topAnh, leftAnh,
    //     name, numberName) {
    //     // xây nền
    //         if (name == 'me') {đế.classList.add(name); đế.style.zIndex = 2} else {
    //             var nameBox = document.createElement('div')
    //         nameBox.classList.add('nameBoxDe')
    //         nameBox.innerHTML = `${name} V.${numberName}`
    //         đế.append(nameBox);
    //             đế.classList.add("X" + numberName)}

    //             var mũi_tên = document.createElement('div')
    //             mũi_tên.classList.add('mũi_tên', 'nonee')
    //             đế.append(mũi_tên);
    //         this.mũi_tênn = function(xx) {
    //             xx == 1? mũi_tên.classList.remove("nonee"):1
    //             xx == 2? mũi_tên.classList.add("nonee"):1
    //         }
            
    //         // document.querySelector(".map").append(đế); đế.append(khung); khung.append(ảnh); 
    //         khung.style.pointerEvents = 'nonee'; ảnh.style.pointerEvents = 'nonee';

    //         var miniĐế = document.createElement('div')
    //         miniĐế.style.position = "absolute"; miniĐế.style.backgroundColor = "black"
    //         if (name == 'me') { miniĐế.style.backgroundColor = "red"; miniĐế.style.zIndex = 2 }
    //         miniĐế.style.width = '0.8rem'; miniĐế.style.height = '0.8rem'
    //         miniĐế.style.top = topDe / fiveN + 'rem'; miniĐế.style.left = leftDe / fiveN + 'rem'
    //         document.querySelector(".miniM").append(miniĐế)


    //         function mi(xx, width, height, top, left, zz, bottom, yy) {
    //             xx.style.width = width + 'rem'; xx.style.height = height + 'rem'
    //             if (zz == 0) {xx.style.top = top + 'rem'; xx.style.left = left + 'rem'}
    //             else if (zz == 1) {xx.style.bottom = bottom + 'rem'; xx.style.background = 'nonee'}
    //         }; mi(đế, widthDe, heightDe, topDe, leftDe, 0); mi(ảnh, widthAnh, heightAnh, topAnh, leftAnh, 0);  mi(khung, widthKhung, heightKhung, 0, 0, 1, bottomKhung)
     
    //         // background
    //         this.backgroundImage = function (src, po, size) {  //hàm đổi màu nền
    //             ảnh.style.backgroundImage = src
    //             ảnh.style.backgroundPosition = po
    //             ảnh.style.backgroundRepeat =  'no-repeat'
    //             ảnh.style.backgroundSize = size
    //         }
            
    //     this.numberName = numberName
    //     this.name = name
    //     // this.topp = function (xx, yy) {return topDe = mimi(xx, yy, 'top', topDe)}; this.leftt = function (xx, yy) {return leftDe = mimi(xx, yy, 'left', leftDe)}

    //     this.topp = function (xx, yy) {var a =  mimi(xx, yy, 'top', topDe); topDe = a; miniĐế.style.top = a / fiveN + 'rem'; return a}
    //     this.leftt = function (xx, yy) {var a = mimi(xx, yy, 'left', leftDe); leftDe = a; miniĐế.style.left = a / fiveN + 'rem';  return a}
    //     this.heightt = function (xx, yy) {return heightDe = mimi(xx, yy, 'height', heightDe)}
    //     this.widthh = function (xx, yy) {return widthDe = mimi(xx, yy, 'width', widthDe)}

    //     this.heighttKhung = function (xx, yy) {return heightKhung = mimi(xx, yy, 'height', heightKhung)}
    //     this.lật = function(xx, yy) {
    //         var i = quái_S.findIndex(subArray => subArray.includes(this.srcc()));
    //         if (yy == 1) {
    //             ảnh.classList.remove("lật_Ngang")
    //             var x = quái_S[i][0].replace('quái_', '').replace('S', '');
    //             ảnh.style.backgroundPosition = quái_S[x - 1][2]
    //         } else {
    //             ảnh.classList.add("lật_Ngang")
    //             var x = quái_S[i][0].replace('quái_', '').replace('S', '');
    //             ảnh.style.backgroundPosition = quái_S[x - 1][3]
    //         }
    //     }
    //     this.srcc = function () {  //hàm đổi màu nền
    //         return  ảnh.style.backgroundImage
    //     }

    //     this.topMini = function (five) {miniĐế.style.top = topDe/five + 'rem'}
    //     this.leftMini = function (five) {miniĐế.style.left = leftDe/five + 'rem'}
    //     function mimi(xx, yy, gốc, zz) {
    //         if (xx == 0) {đế.style[gốc] = yy + 'rem'; return zz = làm_Tròn(yy, 2)} 
    //         else if (xx == 1) {đế.style[gốc] = (zz + yy) + 'rem'; return zz = làm_Tròn(zz + yy, 2)}
    //         else if (xx == 2) {đế.style[gốc] = (zz - yy) + 'rem'; return zz = làm_Tròn(zz - yy, 2)}
    //         else if (xx == 3) {return zz}
    //     }

    // }
    function nhanvat(widthDe, heightDe, topDe, leftDe,
        widthKhung, heightKhung, bottomKhung,      widthAnh, heightAnh, topAnh, leftAnh,
        name, numberName) {
        // xây nền
        var đế = document.createElement('div')
        đế.style.position = "absolute"; đế.style.border = "1px solid #000"
        var khung = document.createElement('div'); khung.style.position = "absolute";khung.style.border = "1px solid #000"
        var ảnh = document.createElement('div'); ảnh.style.position = "absolute"; //ảnh.style.border = "1px solid #000"
        document.querySelector(".map").append(đế); đế.append(khung); khung.append(ảnh);
        ảnh.classList.add("lật_Phải")

        function mi(xx, width, height, top, left, zz, bottom) {
            xx.style.width = width + 'rem'; xx.style.height = height + 'rem'
            if (zz == 0) { xx.style.top = top + 'rem'; xx.style.left = left + 'rem' }
            else if (zz == 1) { xx.style.bottom = bottom + 'rem'; xx.style.background = 'nonee' }
        }; 
        mi(đế, widthDe, heightDe, topDe, leftDe, 0); mi(ảnh, widthAnh, heightAnh, topAnh, leftAnh, 0); 
        mi(khung, widthKhung, heightKhung, 0, 0, 1, bottomKhung)

        // xây tên -----------------------------------
        if (name == 'me') { đế.classList.add(name); đế.style.zIndex = 2 } 
        else {
            var nameBox = document.createElement('div'); nameBox.classList.add('nameBoxDe')
            nameBox.innerHTML = name; đế.append(nameBox);
        }
        // xây mini quái -----------------------------------
        var miniĐế = document.createElement('div')
        miniĐế.style.position = "absolute"; miniĐế.style.backgroundColor = "black"
        if (name == 'me') { miniĐế.style.backgroundColor = "red"; miniĐế.style.zIndex = 2 }
        miniĐế.style.width = '0.7rem'; miniĐế.style.height = '0.7rem'; miniĐế.style.borderRadius = '50%'
        miniĐế.style.top = topDe / fiveN + 'rem'; miniĐế.style.left = leftDe / fiveN + 'rem'
        document.querySelector(".miniM").append(miniĐế)
        // mũi tên ------------------------------------------
        var mũi_tên = document.createElement('div'); mũi_tên.classList.add('mũi_tên', 'nonee'); đế.append(mũi_tên);
        var mũi_tên_Mini=document.createElement('div'); mũi_tên_Mini.classList.add('mũi_tên_Mini', "nonee"); 
        miniĐế.append(mũi_tên_Mini);
        this.mũi_tênn = function (xx) {
            xx == 1 ? (mũi_tên.classList.remove("nonee"), mũi_tên_Mini.classList.remove("nonee")) : 1
            xx == 2 ? (mũi_tên.classList.add("nonee"), mũi_tên_Mini.classList.add("nonee")) : 1
        }
        // background ---------------------------------------
        this.backgroundImage = function (src, po, size) {  //hàm đổi màu nền
            ảnh.style.backgroundImage = src
            ảnh.style.backgroundPosition = po
            ảnh.style.backgroundRepeat = 'no-repeat'
            ảnh.style.backgroundSize = size
        }
        this.numberName = numberName
        this.name = name

        // hàm lấy giá trị ---------------------------------
        this.topp = function (xx, yy) {
            topDe =  mimi(xx, yy, 'top', topDe); miniĐế.style.top = topDe / fiveN + 'rem'; 
            return topDe
        }
        this.leftt = function (xx, yy) {
            leftDe = mimi(xx, yy, 'left', leftDe); miniĐế.style.left = leftDe / fiveN + 'rem';  
            return leftDe
        }
        this.heightt = function (xx, yy) {return heightDe = mimi(xx, yy, 'height', heightDe)}
        this.widthh = function (xx, yy) {return widthDe = mimi(xx, yy, 'width', widthDe)}
        this.heighttKhung = function (xx, yy) {return heightKhung = mimi(xx, yy, 'height', heightKhung)}

        function mimi(xx, yy, gốc, zz) {
            if (xx == 0) {đế.style[gốc] = yy + 'rem'; return làm_Tròn(yy, 2)} 
            else if (xx == 1) {đế.style[gốc] = (zz + yy) + 'rem'; return làm_Tròn(zz + yy, 2)}
            else if (xx == 2) {đế.style[gốc] = (zz - yy) + 'rem'; return làm_Tròn(zz - yy, 2)}
            else if (xx == 3) {return zz}
        }

        // lật nhân vật khi di chuyển ---------------------
        this.lật = function(xx, yy) {
            var i = quái_S.findIndex(subArray => subArray.includes(this.srcc()));
            if (yy == 1) {
                ảnh.classList.remove("lật_Ngang")
                var x = quái_S[i][0].replace('quái_', '').replace('S', '');
                ảnh.style.backgroundPosition = quái_S[x - 1][2]
            } else {
                ảnh.classList.add("lật_Ngang")
                var x = quái_S[i][0].replace('quái_', '').replace('S', '');
                ảnh.style.backgroundPosition = quái_S[x - 1][3]
            }
        }
        this.srcc = function () { return  ảnh.style.backgroundImage}
    }
// --------------------------
    function changeMap(tt, ll) {
        function check() {
            const parentDiv = document.querySelector('.body');
            const map = parentDiv.querySelector('.map');
            if (map) {return true} else {return false}
        }
        if (!check()) {tt = 14, ll = 10.9
            document.querySelector(".upKey2").classList.add("colorButton")
        } else {
            stopQuai == true; quáiArray = []; exitArrayyy = []

            stopQuai = true; document.querySelector(".miniM").remove()
            document.querySelector(".map").remove(); clearInterval(b); 
            setTimeout(()=>{map_HêHê = 0; quáiArray = []; exitArrayyy = []
            document.querySelector(".doiDich").classList.add("nonee")
            document.querySelector(".tancong1Dich").classList.add("nonee")
            document.querySelector(".tancongDaDich").classList.add("nonee")
            vào_Map.classList.add("nonee")

            exitBreak = 0; currentIndex = 0; numDa = false; stopQuai = false
            document.querySelector(".upKey2").classList.add("colorButton"); transM = 1
            },200)  
        }

        setTimeout(()=>{
            if (mapI == 0) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[14, 1], [26, 8], [26, 20], [14, 27], [1, 13]]
                exitRight = [[14, 21], [15, 8]]
                map_HêHê = new createMap(40, 30, "", 0, 0, '#197d63')// meo
                for (let i = 0; i < 5; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black'); 
                    exitArrayyy.push(person);
                }
                for (let i = 0; i < 2; i++) {
                    let person = new createMap(2.4, 2.4, `Lãi ${i + 1}`, exitRight[i][0], exitRight[i][1], 'blue'); 
                    cảnArrayyy.push(person);
                }
                // tạo nhân vật
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'Jun_Keit', i + 1) 
                    person.backgroundImage(quái_S[0][1], quái_S[0][2], quái_S[0][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)

                changeXXMap = function () {
                    shouldRun[mapI] = false; 
                    exitBreak == 1 ? (mapI = 1, setTimeout(()=>{changeMap(15,24)},150)): 1
                    exitBreak == 2 ? (mapI = 4, setTimeout(()=>{changeMap(3.9,12.6)},150)): 1
                    exitBreak == 3 ? (mapI = 5, setTimeout(()=>{changeMap(3.9,12.1)},150)): 1
                    exitBreak == 4 ? (mapI = 2, setTimeout(()=>{changeMap(15,2)},150)): 1
                    exitBreak == 5 ? (mapI = 3, setTimeout(()=>{changeMap(26.2,12.2)},150)): 1
                }
            }    
            if (mapI == 1) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[14, 27], [26, 13], [1, 13]]
                map_HêHê = new createMap(30, 30, "", 0, 0, 'yellow')// meo
                for (let i = 0; i < 3; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black'); 
                    exitArrayyy.push(person);
                }
    
    
                // tạo nhân vật
    
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, '', i + 1) 
                    person.backgroundImage(quái_S[1][1], quái_S[1][2], quái_S[1][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)
                changeXXMap = function () {
                    shouldRun[mapI] = false
                    exitBreak == 1 ? (mapI = 0, setTimeout(()=>{changeMap(15.2,2.5)},150)): 1
                    exitBreak == 2 ? (mapI = 4, setTimeout(()=>{changeMap(3.9,5.7)},150)): 1
                    exitBreak == 3 ? (mapI = 3, setTimeout(()=>{changeMap(26.2,1.2)},150)): 1
                }
            }    
            if (mapI ==2) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[14, 1], [26, 13], [1, 13]]
                map_HêHê = new createMap(30, 30, "", 0, 0, '#c84a8e')// meo
                for (let i = 0; i < 3; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black'); 
                    exitArrayyy.push(person);
                }
    
    
                // tạo nhân vật
    
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, '', i + 1) 
                    person.backgroundImage(quái_S[2][1], quái_S[2][2], quái_S[2][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)

                changeXXMap = function () {
                    shouldRun[mapI] = false;
                    exitBreak == 1 ? (mapI = 0, setTimeout(()=>{changeMap(14.9,25.1)},150)): 1
                    exitBreak == 2 ? (mapI = 5, setTimeout(()=>{changeMap(3.9,21.9)},150)): 1
                    exitBreak == 3 ? (mapI = 3, setTimeout(()=>{changeMap(26.2,26)},150)): 1
                }
            }
            if (mapI ==3) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[26, 1], [26, 13], [26, 26]]
                map_HêHê = new createMap(30, 30, "", 0, 0, 'rgb(36 154 56)')// meo
                for (let i = 0; i < 3; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black'); 
                    exitArrayyy.push(person);
                }
    
    
                // tạo nhân vật
    
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, '', i + 1) 
                    person.backgroundImage(quái_S[3][1], quái_S[3][2], quái_S[3][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)

                changeXXMap = function () {
                    shouldRun[mapI] = false
                    exitBreak == 1 ? (mapI = 1, setTimeout(()=>{changeMap(3.9,12.9)},150)): 1
                    exitBreak == 2 ? (mapI = 0, setTimeout(()=>{changeMap(3.9,13.3)},150)): 1
                    exitBreak == 3 ? (mapI = 2, setTimeout(()=>{changeMap(4.2,12.9)},150)): 1
                }
            }
            if (mapI ==4) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[1, 6], [1,21], [14, 26]]
                map_HêHê = new createMap(30, 30, "", 0, 0, 'rgb(219 61 47)')// meo
                for (let i = 0; i < 3; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black');
                    exitArrayyy.push(person);
                }
                // tạo nhân vật
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, '', i + 1) 
                    person.backgroundImage(quái_S[4][1], quái_S[4][2], quái_S[4][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)

                changeXXMap = function () {
                    shouldRun[mapI] = false
                    exitBreak == 1 ? (mapI = 1, setTimeout(()=>{changeMap(26.9,12.9)},150)): 1
                    exitBreak == 2 ? (mapI = 0, setTimeout(()=>{changeMap(25.9,7.4)},150)): 1
                    exitBreak == 3 ? (mapI = 5, setTimeout(()=>{changeMap(15.1,2.6)},150)): 1
                }
            }
            if (mapI ==5) {
                shouldRun[mapI] = true; quaiMap = [0/*cấp*/, 20 /*giáp*/]
                // tạo map
                exitLeft = [[1, 22], [1,9], [14, 1]]
                map_HêHê = new createMap(30, 30, "", 0, 0, 'rgb(80 195 142)')// meo
                for (let i = 0; i < 3; i++) {
                    let person = new createMap(2.4, 2.4, `Lối ${i + 1}`, exitLeft[i][0], exitLeft[i][1], 'black'); 
                    exitArrayyy.push(person);
                }
    
    
                // tạo nhân vật
    
                me_HêHê = new nhanvat(2.4, 1.4, tt, ll, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, 'me')
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])
                screenMe()
                // tạo quái
                for (let i = 0; i < 10; i++) {
                    let width = tạo_Random_Thập_Phân(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0))
                    let height = tạo_Random_Thập_Phân(làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)/*topA*/, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0) /*topB*/)
                    let person = new nhanvat(2.4, 1.4, +height, +width, 2.4, 4, 0.7, 9, 10, -2.2, -2.5, '', i + 1) 
                    person.backgroundImage(quái_S[5][1], quái_S[5][2], quái_S[5][4])
                    quáiArray.push(person);
                }
                // quáiArray.forEach(i => quáiDiChuyển(i, 0.2))
                findMotOrNhieu(3.5)

                changeXXMap = function () {
                    shouldRun[mapI] = false
                    exitBreak == 1 ? (mapI = 2, setTimeout(()=>{changeMap(25.6,12.9)},150)): 1
                    exitBreak == 2 ? (mapI = 0, setTimeout(()=>{changeMap(25.9,19.6)},150)): 1
                    exitBreak == 3 ? (mapI = 4, setTimeout(()=>{changeMap(15.1,25)},150)): 1
                }
            }
        }, 230)
    }
    changeMap()
   
    function quáiDiChuyển(element, /* num,*/ go/*, xx*/) {
        let n = 0, random = 1, num = 15
        let mumu = setInterval(()=>{
            if (n == 0) {random = Math.floor(Math.random() * 4) + 1}; n++
            random == 1 ? element.topp(2, go) : 2
            random == 2 ? (element.leftt(1, go), element.lật(element, 1)) : 2
            random == 3 ? element.topp(1, go) : 2
            random == 4 ? (element.leftt(2, go), element.lật(element, 2)) : 2

            if (element.leftt(3, 0) >= map_HêHê.widthh(3,0) - element.widthh(3,0)) {element.leftt(0, map_HêHê.widthh(3,0) - element.widthh(3,0)); n = 0} 
            else if (element.leftt(3, 0) <= 0) { element.leftt(0, 0); n = 0} 
            else if (element.topp(3, 0) <= làm_Tròn(element.heighttKhung(3,0) - element.heightt(3,0)/2, 2)) {element.topp(0, làm_Tròn(element.heighttKhung(3,0) - element.heightt(3,0)/2, 2) ); n = 0} 
            else if (element.topp(3, 0) >= map_HêHê.heightt(3,0) - element.heightt(3,0) /*topB*/) {element.topp(0, map_HêHê.heightt(3,0) - element.heightt(3,0)); n = 0} 

            if (n == num) {n = 0}
            if (stopQuai == true) {clearInterval(mumu)}
        }, 135)
    }
    document.querySelector(".leftKey").addEventListener("click", leftMappp)
    function leftMappp() {
        if (canGo == true) { canGo = false
            me_HêHê.lật(quái_Me, 2)
            hihu = setInterval(()=>{me_HêHê.leftt(2,0.1); screenMe();
                if (me_HêHê.leftt(3,0) <= 0) {me_HêHê.leftt(0, 0); clearInterval(hihu); canGo = true}
                else {
                    for (let i = 0; i < cảnArrayyy.length; i++) {
                        if (cảnArrayyy[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= 0 && me_HêHê.leftt(3, 0) - cảnArrayyy[i].leftt(3, 0) - cảnArrayyy[i].widthh(3, 0) <= 0 && me_HêHê.topp(3, 0) - cảnArrayyy[i].topp(3,0) - cảnArrayyy[i].heightt(3,0) <= 0 && cảnArrayyy[i].topp(3,0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= 0) {
                            me_HêHê.leftt(0, 0.1 + cảnArrayyy[i].leftt(3, 0) + cảnArrayyy[i].widthh(3, 0)); clearInterval(hihu); canGo = true; break; // Dừng lại khi gặp giá trị 3
                        } 
                    }
                }
            }, 35)
        } else {clearInterval(hihu);canGo = true}
    }
    document.querySelector(".rightKey").addEventListener("click", rightMappp)
    function rightMappp() {
        if (canGo == true) { canGo = false
            me_HêHê.lật(quái_Me, 1)
            hihu = setInterval(() => { me_HêHê.leftt(1, 0.1); screenMe();
                if (me_HêHê.leftt(3, 0) + me_HêHê.widthh(3, 0) >= map_HêHê.widthh(3, 0)) { me_HêHê.leftt(0, map_HêHê.widthh(3, 0) - me_HêHê.widthh(3, 0)); clearInterval(hihu) } 
                else {
                    for (let i = 0; i < cảnArrayyy.length; i++) {
                        if (cảnArrayyy[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= 0 && me_HêHê.leftt(3, 0) - cảnArrayyy[i].leftt(3, 0) - cảnArrayyy[i].widthh(3, 0) <= 0 && me_HêHê.topp(3, 0) - cảnArrayyy[i].topp(3,0) - cảnArrayyy[i].heightt(3,0) <= 0 && cảnArrayyy[i].topp(3,0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= 0) {
                            me_HêHê.leftt(0, -0.1 + cảnArrayyy[i].leftt(3, 0) - me_HêHê.widthh(3, 0)); clearInterval(hihu); canGo = true; break; // Dừng lại khi gặp giá trị 3
                        } 
                    }
                }
            }, 35)
        } else {clearInterval(hihu);canGo = true}
    }
    document.querySelector(".upKey").addEventListener("click", upMappp)
    function upMappp() {
        if (canGo == true) { canGo = false
            hihu = setInterval(() => {
                me_HêHê.topp(2, 0.1); screenMe();
                if (me_HêHê.topp(3, 0) - làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2) <= 0) {
                    me_HêHê.topp(0, làm_Tròn(me_HêHê.heighttKhung(3, 0) - me_HêHê.heightt(3, 0) / 2, 2)); clearInterval(hihu)
                }
                else {
                    for (let i = 0; i < cảnArrayyy.length; i++) {
                        if (cảnArrayyy[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= 0 && me_HêHê.leftt(3, 0) - cảnArrayyy[i].leftt(3, 0) - cảnArrayyy[i].widthh(3, 0) <= 0 && me_HêHê.topp(3, 0) - cảnArrayyy[i].topp(3, 0) - cảnArrayyy[i].heightt(3, 0) <= 0 && cảnArrayyy[i].topp(3, 0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= 0) {
                            me_HêHê.topp(0, 0.1 + cảnArrayyy[i].topp(3, 0) + cảnArrayyy[i].heightt(3, 0)); clearInterval(hihu); canGo = true; break;
                        }
                    }
                }
            }, 35)
        } else {clearInterval(hihu);canGo = true}
    }
    document.querySelector(".downKey").addEventListener("click", downMappp)
    function downMappp() {
        if (canGo == true) { canGo = false
            hihu = setInterval(() => {
                me_HêHê.topp(1, 0.1); screenMe();
                if (me_HêHê.topp(3, 0) + me_HêHê.heightt(3, 0) >= map_HêHê.heightt(3, 0)) {
                    me_HêHê.topp(0, map_HêHê.heightt(3, 0) - me_HêHê.heightt(3, 0)); clearInterval(hihu)
                }
                else {
                    for (let i = 0; i < cảnArrayyy.length; i++) {
                        if (cảnArrayyy[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= 0 && me_HêHê.leftt(3, 0) - cảnArrayyy[i].leftt(3, 0) - cảnArrayyy[i].widthh(3, 0) <= 0 && me_HêHê.topp(3, 0) - cảnArrayyy[i].topp(3, 0) - cảnArrayyy[i].heightt(3, 0) <= 0 && cảnArrayyy[i].topp(3, 0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= 0) {
                            me_HêHê.topp(0, - 0.1 + cảnArrayyy[i].topp(3, 0) - me_HêHê.heightt(3, 0)); clearInterval(hihu); canGo = true; break;
                        }
                    }
                }
            }, 35)
        } else {clearInterval(hihu);canGo = true}
    }
    function screenMe() {
        var widthS = (+bodyNe.style.width.replace('rem', '')  - me_HêHê.widthh(3,0)) / 2   //5.66
        var heightS = (+bodyNe.style.height.replace('rem', '')  - me_HêHê.heightt(3,0)) / 2
        if (me_HêHê.leftt(3,0) <= widthS) {document.querySelector(".map").style.left = 0 + 'rem'}
        else if (me_HêHê.leftt(3,0) > widthS && map_HêHê.widthh(3,0) - me_HêHê.leftt(3,0) - me_HêHê.widthh(3,0) > widthS) {
            document.querySelector(".map").style.left = - (me_HêHê.leftt(3,0) - widthS) + 'rem'} 
        else if (map_HêHê.widthh(3,0) - me_HêHê.leftt(3,0) - me_HêHê.widthh(3,0) <= widthS) { 
            document.querySelector(".map").style.left = - (map_HêHê.widthh(3,0) - Number(document.querySelector(".screen").style.width.slice(0, -3))) + 'rem'
        }

        if (me_HêHê.topp(3,0) <= heightS) {document.querySelector(".map").style.top = 0 + 'rem'}
        else if (me_HêHê.topp(3,0) > heightS && map_HêHê.heightt(3,0) - me_HêHê.topp(3,0) - me_HêHê.heightt(3,0) > heightS) {
            document.querySelector(".map").style.top = - (me_HêHê.topp(3,0) - heightS) + 'rem'} 
        else if (map_HêHê.heightt(3,0) - me_HêHê.topp(3,0) - me_HêHê.heightt(3,0) <= heightS) {
            document.querySelector(".map").style.top = - (map_HêHê.heightt(3,0) - Number(document.querySelector(".screen").style.height.slice(0, -3))) + 'rem'
        }
        // ---------------------------

        var widthSS = (5.5 - 0.8) / 2   //5.66
        var heightSS = (3.8 - 0.8) / 2
        if (me_HêHê.leftt(3,0)/fiveN <= widthSS) {document.querySelector(".miniM").style.left = 0 + 'rem'}
        else if (me_HêHê.leftt(3,0)/fiveN > widthSS && map_HêHê.widthh(3,0)/fiveN - me_HêHê.leftt(3,0)/fiveN - me_HêHê.widthh(3,0)/fiveN > widthSS) {
            document.querySelector(".miniM").style.left = - (me_HêHê.leftt(3,0)/fiveN - widthSS) + 'rem'} 
        else if (map_HêHê.widthh(3,0)/fiveN - me_HêHê.leftt(3,0)/fiveN - me_HêHê.widthh(3,0)/fiveN <= widthSS) { 
            document.querySelector(".miniM").style.left = - (map_HêHê.widthh(3,0)/fiveN - 5.5) + -0.7 + 'rem'
        }

        if (me_HêHê.topp(3,0)/fiveN <= heightSS) {document.querySelector(".miniM").style.top = 0 + 'rem'} 
        else if (me_HêHê.topp(3,0)/fiveN > heightSS && map_HêHê.heightt(3,0)/fiveN - me_HêHê.topp(3,0)/fiveN - me_HêHê.heightt(3,0)/fiveN > heightSS) {
            document.querySelector(".miniM").style.top = - (me_HêHê.topp(3,0)/fiveN - heightSS) + 'rem'} 
        else if (map_HêHê.heightt(3,0)/fiveN - me_HêHê.topp(3,0)/fiveN - me_HêHê.heightt(3,0)/fiveN <= heightSS) {
            document.querySelector(".miniM").style.top = - (map_HêHê.heightt(3,0)/fiveN - 3.8) + -0.7 + 'rem' // bỏ -0.8
        }
    }
}

// phím bấm đổi map 
{
    function cancellColor() {
        document.querySelector(".upKey2").classList.remove("colorButton")
        document.querySelector(".downKey2").classList.remove("colorButton")
        document.querySelector(".leftKey2").classList.remove("colorButton")
        document.querySelector(".rightKey2").classList.remove("colorButton")
    }
   
    function backkk(ele, z) {
        if (z == 1) {
            let topI = ele.topp(3, 0), leftI = ele.leftt(3, 0), widthI = ele.widthh(3, 0), heightI = ele.heightt(3, 0)
            let mapH = map_HêHê.heightt(3, 0), mapW = map_HêHê.widthh(3, 0)
            transM == 2 ? (ele.leftt(0, mapH - topI - heightI / 2 - widthI / 2), ele.topp(0, leftI + widthI / 2 - heightI / 2)) : 2
            transM == 3 ? (ele.leftt(0, mapW - leftI - widthI), ele.topp(0, mapH - topI - heightI)) : 2
            transM == 4 ? (ele.leftt(0, topI + heightI / 2 - widthI / 2), ele.topp(0, mapW - leftI - widthI / 2 - heightI / 2)) : 2
        } else {
            let topI = ele.topp(3,0), leftI = ele.leftt(3,0), widthI = ele.widthh(3,0), heightI = ele.heightt(3,0)
            let mapH = map_HêHê.heightt(3, 0), mapW = map_HêHê.widthh(3, 0)
            if (z == 2) {ele.leftt(0, topI + heightI/2 - widthI/2); ele.topp(0, mapW - leftI- widthI/2 -heightI / 2)}
            else if (z == 3) {ele.leftt(0, mapW - leftI - widthI); ele.topp(0, mapH - topI - heightI)}
            else if (z == 4) {ele.leftt(0, mapH - topI - heightI/2 - widthI/2); ele.topp(0, leftI + widthI/2 - heightI / 2)}
        }
    }

    document.querySelector(".rightKey2").addEventListener("click", rightMap)
    function rightMap() {click_Map_Mini(2, 'rightKey2')}

    document.querySelector(".leftKey2").addEventListener("click", leftMap)
    function leftMap() {click_Map_Mini(4, 'leftKey2')}
    
    document.querySelector(".downKey2").addEventListener("click", downMap)
    function downMap() {click_Map_Mini(3, 'downKey2')}

    document.querySelector(".upKey2").addEventListener("click", upMap)
    function upMap() {click_Map_Mini(1, 'upKey2')}
    function click_Map_Mini(số, name) {
        if (transM != số) {
            z = transM; cancellColor(); transM = số
            document.querySelector(`.${name}`).classList.add("colorButton")
            backkk(me_HêHê, z);quáiArray.forEach(i => backkk(i, z)); exitArrayyy.forEach(i => backkk(i, z))
            screenMe()
            if (z == 1) {
                transM == 2? map_HêHê.transMap(2):2
                transM == 3? map_HêHê.transMap(1):2
                transM == 4? map_HêHê.transMap(2):2
            } else {
                if (z == 2) {map_HêHê.transMap(1)} 
                else if (z == 3) {map_HêHê.transMap(1)} else if (z == 4) {map_HêHê.transMap(1)}
                z = 1
                backkk(me_HêHê, z);quáiArray.forEach(i => backkk(i, z)); exitArrayyy.forEach(i => backkk(i, z))
                transM == 2? map_HêHê.transMap(2):2
                transM == 3? map_HêHê.transMap(1):2
                transM == 4? map_HêHê.transMap(2):2
            }
        }
    }
}

function findMotOrNhieu(zz) {
    b = setInterval(function() {
        monsterBreak = []; exitBreak = 0; function mi (aa, yy) {document.querySelector(`.${aa}`).classList[yy]("nonee")}
        for (var i = 0; i < quáiArray.length; i++) {
            if (quáiArray[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= zz && me_HêHê.leftt(3, 0) - quáiArray[i].leftt(3, 0) - quáiArray[i].widthh(3, 0) <= zz && me_HêHê.topp(3, 0) - quáiArray[i].topp(3,0) - quáiArray[i].heightt(3,0) <= zz && quáiArray[i].topp(3,0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= zz) {
                monsterBreak.push(quáiArray[i])
            } 
        }
        if (monsterBreak.length == 1) {
            mi("tancong1Dich", "remove"); mi("tancongDaDich", "add"); mi("doiDich", "add"); currentIndex = 0
            số_1_Địch.innerHTML = `${monsterBreak[0].name} ${monsterBreak[0].numberName}`
            numDa = monsterBreak[0].numberName;
            var aa = numDa; quáiArray.forEach(i=> i.mũi_tênn(2)); quáiArray[aa-1].mũi_tênn(1)
        }
            
        else if (monsterBreak.length>1){mi("tancong1Dich","add");mi("tancongDaDich","remove");mi("doiDich","remove")
            if(numDa == false) {numDa = monsterBreak[0].numberName;số_Đa_Địch.innerHTML = `${monsterBreak[0].name} ${monsterBreak[0].numberName}`}
            else if (monsterBreak.some(i=>i.numberName == numDa)){số_Đa_Địch.innerHTML = `${monsterBreak[0].name} ${numDa}`}
            else {số_Đa_Địch.innerHTML = `${monsterBreak[0].name} ${monsterBreak[0].numberName}`; numDa = monsterBreak[0].numberName;}
            var aa = numDa; quáiArray.forEach(i=> i.mũi_tênn(2)); quáiArray[aa-1].mũi_tênn(1)
        }
        else {mi("tancong1Dich", "add"); mi("tancongDaDich", "add"); mi("doiDich", "add"); currentIndex = 0
            quáiArray.forEach(i=> i.mũi_tênn(2))
        }

        // -------------------------------------------------
        for (var i = 0; i < exitArrayyy.length; i++) {
            if (exitArrayyy[i].leftt(3, 0) - me_HêHê.leftt(3, 0) - me_HêHê.widthh(3, 0) <= zz && me_HêHê.leftt(3, 0) - exitArrayyy[i].leftt(3, 0) - exitArrayyy[i].widthh(3, 0) <= zz && me_HêHê.topp(3, 0) - exitArrayyy[i].topp(3,0) - exitArrayyy[i].heightt(3,0) <= zz && exitArrayyy[i].topp(3,0) - me_HêHê.topp(3, 0) - me_HêHê.heightt(3, 0) <= zz) {
                exitBreak = exitArrayyy[i].num
            } 
        }
        if (exitBreak > 0 ) {vào_Map.classList.remove("nonee")
            if (monsterBreak.length > 0) {vào_Map.style.top = '-4rem'} else {vào_Map.style.top = '-2.4rem'}
        } else {vào_Map.classList.add("nonee");exitBreak = 0}
    },20) 
}

document.querySelector(".doiDich").addEventListener("click", clickDoiDich)
function clickDoiDich() {
    currentIndex = (currentIndex + 1) % monsterBreak.length;
    document.querySelector(".tancongDaDich_Number").textContent = `${monsterBreak[currentIndex].name} ${monsterBreak[currentIndex].numberName}`
    numDa = monsterBreak[currentIndex].numberName
}
function đẩy_Quái() {
    function mi() {var a = numDa, mapII = mapI
        var mimi = setTimeout(() => {quáiArray[a - 1].topp(2,200); clearInterval(mumu)}, 150000)
        var mumu = setInterval(()=> {if (shouldRun[mapII] == false){clearInterval(mimi); clearInterval(mumu)}},20)
    }
    quáiArray[numDa - 1].topp(1,200); mi();
}

document.querySelector(".vaoMap").addEventListener("click", changeXMap)
function changeXMap() {changeXXMap()} 

document.querySelector(".tancong1Dich").addEventListener("click", battleGame)
document.querySelector(".tancongDaDich").addEventListener("click", battleGame)


function battleGame() {
    document.querySelector(".background").classList.remove("nonee"); document.querySelector(".infor_battle").classList.remove("nonee")
    document.querySelector(".timeMe").classList.add("nonee")
    document.querySelector(".timeEnemy").classList.add("nonee"); numbGo = 0
    document.querySelector(".boardPoint").classList.add("nonee")


    document.querySelector(".outGame").classList.add("nonee")
    document.querySelector(".Skull").classList.add("nonee")
    document.querySelector(".boxOut").classList.add("nonee")
    otherTile = undefined; otherTile = undefined 
    // tạo ảnh
    var bb = numDa; click1  = undefined
    var i = quái_S.findIndex(subArray => subArray.includes(quáiArray[bb -1].srcc()))
    document.querySelector(".meMe_Enemy").style.backgroundImage = quái_S[i][1]
    document.querySelector(".meMe_Enemy").style.backgroundPosition = quái_S[i][7]
    document.querySelector(".meMe_Enemy").style.backgroundSize = quái_S[i][8]

    document.querySelector(".meMe_Me").style.backgroundImage = quái_Me[1]
    document.querySelector(".meMe_Me").style.backgroundPosition = quái_Me[9]
    document.querySelector(".meMe_Me").style.backgroundSize = quái_Me[10]
    // clearInterval(b)

    mee = new inforBattlee(150, 150, 0, 300, 0/*xu*/, quái_Me[5]/*cấp*/, quái_Me[6]/* % */, 0 /*giáp*/, 0/*hồng_ngọc*/)
    quai = new inforBattlee(150, 150, 0, 300, 0/*xu*/, quaiMap[0]/*cấp*/, 0, quaiMap[1] /*giáp*/, 0/*hồng_ngọc*/)

    startGame(); Điểm_Trật_Tự_Start(); tạo_Cột_Slide()
    //cccc()
    yyyCòn = 1; setTimeout(() => {readycrush()}, 2000)
}

document.querySelector(".outGame").addEventListener("click", function() {
    document.querySelector(".boxOut").classList.remove("nonee")
})
document.querySelector(".noOut").addEventListener("click", function() {
    document.querySelector(".boxOut").classList.add("nonee")
})
document.querySelector(".yesOut").addEventListener("click", function() {
    document.querySelector(".boxOut").classList.add("nonee")
    // meTurn = false; theyTurn =false; 
    timePlay = 0; 
    mee.hp(1,200); 
    otherTile = board[1][0]
    currTile = board[1][1]
setTimeout(()=>{[currTile.src, otherTile.src] = [otherTile.src, currTile.src]; checkClass(); dragEnd()},20)
})

document.querySelector(".Skill").addEventListener("click", function() {
    document.querySelector(".Skull").classList.remove("nonee")
})
document.querySelector(".SkillClose").addEventListener("click", function() {
    document.querySelector(".Skull").classList.add("nonee")
})


function tạo_Bảng_Quỷ() {
    var quái_SS = JSON.parse(JSON.stringify(quái_S));

    quái_SS.sort((arr1, arr2) => {
        if (arr1[13] !== arr2[13]) {
            return arr2[13] - arr1[13];
        } else {
            return arr2[12] - arr1[12];
        }
    });

    var bảng_Quỷ = document.querySelector(".board_Infor_ZzDevil");

    function createQuáiElement(quái, position, i) {
        var ô_Quỷ = document.createElement('div');
        ô_Quỷ.classList.add('board_name_Nv');
        ô_Quỷ.style.top = 2.3 + 2.35 * position.index + 'rem';
        ô_Quỷ.style.left = position.left;
        bảng_Quỷ.append(ô_Quỷ);

        var name = quái[11].split(' ').slice(-2).join(' ');
        ô_Quỷ.innerHTML = name;

        if (quái[13] === 0) {
            ô_Quỷ.style.background = "#6c34a0";
            var thanh = document.createElement('div');
            thanh.classList.add('hồn-bar');
            ô_Quỷ.append(thanh);

            var fill = document.createElement('div');
            fill.classList.add('hồn-fill');
            fill.style.width = quái[12] >= 20 ? '100%' : (quái[12] * 100 / 20) + '%';
            thanh.append(fill);

            var text = document.createElement('div');
            text.classList.add('hồn-text');
            text.innerText = quái[12] + "/20";
            thanh.append(text);
        } else {
            ô_Quỷ.style.background = "#108c08";
            var sao = document.createElement('div'); sao.classList.add('board_Name_11');
            sao.innerHTML = '⭐'.repeat(quái[13]) + ' ✰'.repeat(5 - quái[13]); ô_Quỷ.append(sao);

            var run = document.createElement('div'); run.classList.add('board_Run', `board_Run${i}`, 'nonee');
            ô_Quỷ.append(run);

            var ô_Lv = document.createElement('div');
            ô_Lv.classList.add('board_Name_111');
            ô_Lv.innerHTML = '| LV:&nbsp;';
            ô_Quỷ.append(ô_Lv);

            var text = document.createElement('div');
            text.classList.add('board_Name_1111');
            text.innerHTML = quái[5]
            ô_Lv.append(text);
            ô_Quỷ.addEventListener("click", function () {
                var index = quái_S.findIndex(function (element) {return element[0] === quái_SS[i][0];});
                quái_Me = quái_S[index]
                me_HêHê.backgroundImage(quái_Me[1], quái_Me[2], quái_Me[4])

                var x = document.querySelectorAll(".board_Run")
                for (var y of x) {
                    y.classList.add("nonee")
                }
                run.classList.remove("nonee")

            })
        }
    }

    for (let i = 0; i < quái_SS.length; i++) {
        var position = {
            index: Math.floor(i / 2),
            left: i % 2 === 0 ? '0.34rem' : '6.95rem'
        };
        createQuáiElement(quái_SS[i], position, i);
    }
    var index = quái_SS.findIndex(function (element) {return element[0] == quái_Me[0];});
    document.querySelector(`.board_Run${index}`).classList.remove("nonee")
    console.log(`board_Run${index}`)

}
function xóa_Bảng_Quỷ() {
    var parent = document.querySelector(".board_Infor_ZzDevil")
    
    // Kiểm tra nếu thẻ cha có đủ số lượng con để thực hiện xóa
    while (parent.children.length > 1) {
        parent.removeChild(parent.children[1]);
    }
}
document.querySelector(".board_ZzDevil").addEventListener("click", function () {
    tạo_Bảng_Quỷ()
})





// function miui() {
//     var quái_SS = JSON.parse(JSON.stringify(quái_S));
    
//     quái_SS.sort((arr1, arr2) => {
//         // So sánh phần tử thứ 5 (index 4)
//         if (arr1[13] !== arr2[13]) {
//             return arr2[13] - arr1[13]; // Sắp xếp theo thứ tự giảm dần của phần tử thứ 5
//         } else {
//             // Nếu phần tử thứ 5 bằng nhau, so sánh phần tử thứ 4 (index 3)
//             return arr2[12] - arr1[12]; // Sắp xếp theo thứ tự giảm dần của phần tử thứ 4
//         }
//     });
//     console.log(quái_SS)
//     var bảng_Quỷ = document.querySelector(".board_Infor_ZzDevil"); // Lấy thẻ từ HTML và lưu trữ vào biến bảng_Quỷ.
//     var a = 0

//     for (let i = 0; i < quái_SS.length; i+=2) { //chẵn
//         var ô_Quỷ = document.createElement('div'); ô_Quỷ.classList.add('board_name_Nv');
//         ô_Quỷ.style.top = 2.3 + 2.35 * a + 'rem'; ô_Quỷ.style.left = '0.34rem'; bảng_Quỷ.append(ô_Quỷ);
//         var name = quái_SS[i][11].split(' ').slice(-2).join(' ');
//         ô_Quỷ.innerHTML = name; a++

//         if (quái_SS[i][13] == 0) {
//             // tạo thanh
//             ô_Quỷ.style.background = "#6c34a0"
//             var thanh = document.createElement('div'); thanh.classList.add('hồn-bar'); ô_Quỷ.append(thanh);
//             var fill = document.createElement('div'); fill.classList.add('hồn-fill'); 
//             if (quái_SS[i][12] >= 20) {fill.style.width = '100%'} else {fill.style.width = quái_SS[i][12]*100/20 + '%'}
//             thanh.append(fill);
//             var text = document.createElement('div'); text.classList.add('hồn-text'); text.innerText = quái_SS[i][12] + "/20";
//             thanh.append(text);
//         } else {
//             ô_Quỷ.style.background = "#108c08" 
//             var sao = document.createElement('div'); sao.classList.add('board_Name_11'); 
//             switch (quái_SS[i][13]) {
//                 case 1: { sao.innerHTML = '⭐ ✰ ✰ ✰ ✰'; break;}
//                 case 2: { sao.innerHTML = '⭐⭐ ✰ ✰ ✰';break;}
//                 case 3: { sao.innerHTML = '⭐⭐⭐ ✰ ✰';break;}
//                 case 4: { sao.innerHTML = '⭐⭐⭐⭐ ✰';break;}
//                 case 5: { sao.innerHTML = '⭐⭐⭐⭐⭐';break;}
//             }; ô_Quỷ.append(sao);
//             var ô_Lv = document.createElement('div'); ô_Lv.classList.add('board_Name_111'); ô_Lv.innerHTML = '| LV:&nbsp;';
//             ô_Quỷ.append(ô_Lv);
//             var text = document.createElement('div'); text.classList.add('board_Name_1111'); ô_Lv.append(text);
//         }

//     }
//     a = 0
//     for (let i = 1; i < quái_SS.length; i += 2) { //lẻ
//         var ô_Quỷ = document.createElement('div'); ô_Quỷ.classList.add('board_name_Nv');
//         ô_Quỷ.style.top = 2.3 + 2.35 * a + 'rem'; ô_Quỷ.style.left = '6.95rem'; bảng_Quỷ.append(ô_Quỷ);
//         var name = quái_SS[i][11].split(' ').slice(-2).join(' ');
//         ô_Quỷ.innerHTML = name; a++

//         if (quái_SS[i][13] == 0) {
//             // tạo thanh
//             ô_Quỷ.style.background = "#6c34a0"
//             var thanh = document.createElement('div'); thanh.classList.add('hồn-bar'); ô_Quỷ.append(thanh);
//             var fill = document.createElement('div'); fill.classList.add('hồn-fill'); 
//             if (quái_SS[i][12] >= 20) {fill.style.width = '100%'} else {fill.style.width = quái_SS[i][12]*100/20 + '%'}
//             thanh.append(fill);
//             var text = document.createElement('div'); text.classList.add('hồn-text'); text.innerText = quái_SS[i][12] + "/20";
//             thanh.append(text);
//         } else {
//             ô_Quỷ.style.background = "#108c08" 
//             var sao = document.createElement('div'); sao.classList.add('board_Name_11'); 
//             switch (quái_SS[i][13]) {
//                 case 1: { sao.innerHTML = '⭐ ✰ ✰ ✰ ✰'; break;}
//                 case 2: { sao.innerHTML = '⭐⭐ ✰ ✰ ✰';break;}
//                 case 3: { sao.innerHTML = '⭐⭐⭐ ✰ ✰';break;}
//                 case 4: { sao.innerHTML = '⭐⭐⭐⭐ ✰';break;}
//                 case 5: { sao.innerHTML = '⭐⭐⭐⭐⭐';break;}
//             }; ô_Quỷ.append(sao);
//             var ô_Lv = document.createElement('div'); ô_Lv.classList.add('board_Name_111'); ô_Lv.innerHTML = '| LV:&nbsp;';
//             ô_Quỷ.append(ô_Lv);
//             var text = document.createElement('div'); text.classList.add('board_Name_1111'); ô_Lv.append(text);
//         }
       
//     }
// }
// var names = ["nguyễn văn a", "phan xuân", "hứa a thị duyên"];
// var result = names.map(name => {
//     var parts = name.split(' ');
//     return parts.slice(-2).join(' ');
// });

// console.log(result);
// 20 50 110 230 470