
if ('khai báo') {
    var a_Focus, b_Focus, Ô_Tạo_Boom_3x3 = []
    var board = [], hàng = 9, cột = 9; mảng_Nổ = []
    var currTile = undefined, otherTile = undefined, othersTile = undefined; // ???
    var abcm = 0, numbGo = 0

    var slideLoop, timeX = 70, zeroArray = [], cotArray = [], mảng_Bom_3x2 = []

    var dame , hpPoint , giápPoint , hpMax, manaPoint = 9, manaMax = 300
    var meeArray = [150, 150],dam=[9.6, 10, 10.4],hpPo=[8.8, 9, 9.2], giápPo =[4.6, 4.8, 5, 5.2, 5.4],hpMaxPo = [150]
    var specialArraymini3x2 = []
    var timeEnemyPlay = 0, yyy = 0
    var hộp_TimeMe = document.querySelector(".timeMe"), hộp_TimeEn = document.querySelector(".timeEnemy")
    var giờ_TimeMe = document.querySelector(".timeMe1"), giờ_TimeEn = document.querySelector(".timeEnemy1")


    var so_Luot = document.querySelector(".turnNumber")
    var time_Me = document.querySelector(".timeMe")
    var time_Enemy = document.querySelector(".timeEnemy")
    var thẻ_Cha_Lượt = document.querySelector(".turn")
    var damet = 0, hpt = 0, giápt = 0

    var auto_Boom5x_N3D = [], auto_Boom5x_5x = [], auto_Boom5x_Thuong = [], auto_N3D_last = []
    var auto_5x_array = [], auto_4x_array = [], auto_3x_array = []
    var nammuoi = 13.5 / 9
    var specialFirstArray = [], listOfArrays = [], listOfArraysC = [], diSlide = true
    var tiep = 0, dayTh = 0, specialArraymini = [], slide5 = false
    var specialArraymini2 = [], yyy = 0, tiPlay = 0, click1 
    var go = true, abcn = 0, specialArraymini5 = []
    var mảng_5_Ô = [], mảng_4_Ô = [], yyyCòn = 0
    var mee, quai, meIn

    var meePoit = [document.querySelector(".manaMe1"), document.querySelector(".hpMe1"), document.querySelector(".vangMe1"), document.querySelector(".HNMe1"), document.querySelector(".giápMe1"), document.querySelector(".hpEnemy1")]
    var theyyPoit = [document.querySelector(".manaEnemy1"), document.querySelector(".hpEnemy1"), document.querySelector(".vangEnemy1"), document.querySelector(".HNEnemy1"), document.querySelector(".giápEnemy1"), document.querySelector(".hpMe1")]
    var boardd = document.getElementById("board")
}
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
if (5) {
    // Biến mảng. vd 6 class
    var sáu_Class_Thường = ['water', 'heart', 'melon', 'star', 'yingyang', 'sword']
    var sáu_Biến_Thường = [water, heart, melon, star, yingyang, sword]
    var sáu_Biến_Boom_3x = [water3x3, heart3x3, melon3x3, star3x3, yingyang3x3, sword3x3]
    var sáu_Biến_Dọc = [waterDoc, heartDoc, melonDoc, starDoc, yingyangDoc, swordDoc]
    var sáu_Biến_Ngang = [waterNgang, heartNgang, melonNgang, starNgang, yingyangNgang, swordNgang]
    var mười_Tám_Class = ["waterNgang", "heartNgang", "melonNgang", "starNgang", "yingyangNgang", "swordNgang", "waterDoc", "heartDoc", "melonDoc", "starDoc", "yingyangDoc", "swordDoc", "water3x3", "heart3x3", "melon3x3", "star3x3", "yingyang3x3", "sword3x3"]
    var _12_Class_Ngang_Dọc = ["waterNgang", "heartNgang", "melonNgang", "starNgang", "yingyangNgang", "swordNgang", "waterDoc", "heartDoc", "melonDoc", "starDoc", "yingyangDoc", "swordDoc"]
    var _6_Class_3x2 = ['water3x2', 'heart3x2', 'melon3x2', 'star3x2', 'yingyang3x2', 'sword3x2']
    var _6_Biến_3x2 = [water3x2, heart3x2, melon3x2, star3x2, yingyang3x2, sword3x2]

    var _6_Class_Ngang = ["waterNgang", "heartNgang", "melonNgang", "starNgang", "yingyangNgang", "swordNgang"]
    var _6_Class_Dọc = ["waterDoc", "heartDoc", "melonDoc", "starDoc", "yingyangDoc", "swordDoc"]
    var _6_Class_3x3 = ["water3x3", "heart3x3", "melon3x3", "star3x3", "yingyang3x3", "sword3x3"]
    var _25_Biến_Đặc_Biệt = [fiveBlock, waterNgang, heartNgang, melonNgang, starNgang, yingyangNgang, swordNgang, waterDoc, heartDoc, melonDoc, starDoc, yingyangDoc, swordDoc, water3x3, heart3x3, melon3x3, star3x3, yingyang3x3, sword3x3, water3x2, heart3x2, melon3x2, star3x2, yingyang3x2, sword3x2]
    var _25_ClassList_0 = ['haha', 'water', 'heart', 'melon', 'star', 'yingyang', 'sword', 'water', 'heart', 'melon', 'star', 'yingyang', 'sword', 'water', 'heart', 'melon', 'star', 'yingyang', 'sword', 'waterg', 'heartg', 'melong', 'starg', 'yingyangg', 'swordg']
    var _25_ClassList_2 = ['fiveBlock', 'waterNgang', 'heartNgang', 'melonNgang', 'starNgang', 'yingyangNgang', 'swordNgang', 'waterDoc', 'heartDoc', 'melonDoc', 'starDoc', 'yingyangDoc', 'swordDoc', 'water3x3', 'heart3x3', 'melon3x3', 'star3x3', 'yingyang3x3', 'sword3x3', 'water3x2', 'heart3x2', 'melon3x2', 'star3x2', 'yingyang3x2', 'sword3x2']
}

// mảng để cộng điểm bảng
{
    var allChessPoint = ["waterNgang", "heartNgang", "melonNgang", "starNgang", "yingyangNgang", "swordNgang",
        "waterDoc", "heartDoc", "melonDoc", "starDoc", "yingyangDoc", "swordDoc",
        "water3x2", "heart3x2", "melon3x2", "star3x2", "yingyang3x2", "sword3x2"
    ]
    var allChessPointBT = ["water", "heart", "melon", "star", "yingyang", "sword"]
    var manaTog = 0, heartTog = 0, goldTog = 0, skillPoint = 0, giapTog = 0, dameTog = 0
    var allChessPoint4 = [manaTog, heartTog, goldTog, skillPoint, giapTog, dameTog]
    var mảng_bảng_Điểm = [document.querySelector(".manaBoard1"), document.querySelector(".hpBoard1"), document.querySelector(".vangBoard1"), document.querySelector(".HNBoard1"), document.querySelector(".giapBoard1"), document.querySelector(".dameBoard1")]
    var mảng_bảng_ĐMe = [document.querySelector(".manaMe1"), document.querySelector(".hpMe1"), document.querySelector(".vangMe1"), document.querySelector(".HNMe1"), document.querySelector(".giapMe1")]
    var mảng_bảng_ĐEnemy = [document.querySelector(".manaEnemy1"), document.querySelector(".hpEnemy1"), document.querySelector(".vangEnemy1"), document.querySelector(".HNEnemy1"), document.querySelector(".giapEnemy1")]
    var mảng_bảng_Điểm_End = [0,0,0,0,0,0]
}



























// thắc mắc
{// ???  xóa bảng là xóa hết 81 ô ?
    // ??? cho outfocus là rem
    // ??? ví dụ chữ L là nó cộng 2 lượt
    // ??? cho ăn 3x là cộng lượt
    // ??? rớt cờ chứ T, nó tạo ra viên ngang và 3x
    //xử điểm giáp board

    // ??? sao ăn 3 viên hangf đầu
    // ??? sao ăn là mất đi tiếp


    // ??? crush xon g rơi có tạo viên 4x 
    function bbbb() {

        var bbb = ['https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star33.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/bomb5.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melonNgang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true']
        var x = document.querySelectorAll(".ch-Chess")
        for (var i = 0; i < x.length; i++) {
            x[i].src = bbb[i]
        }
        checkClass()
    }


  

    // var maTran = [] // Khởi tạo ma trận
    // for (var i = 0; i < hàng; i++) {
    //     maTran[i] = []; // Khởi tạo mỗi hàng là một mảng con
    //     for (var j = 0; j < cột; j++) {
    //         let tile = document.createElement("img");
    //         tile.src = randomCandy(); tile.style.opacity = "1" // thêm ảnh và độ mờ 1
    //         for (var i = 0; i < sáu_Biến_Thường.length; i++) {
    //             if (tile.src == sáu_Biến_Thường[i]) { tile.className = sáu_Class_Thường[i] }
    //         } // cho class vào cờ. ví dụ cờ melon class "melon"
    //         tile.classList.add("ch-Chess", "Xclass", "fc", "i3", "absolute")
    //         tile.addEventListener("click", click_Other); tile.addEventListener("click", click_Curr);
    //         tile.id = i.toString() + "-" + j.toString(); // set id     
    //         maTran[i].push(tile); //board_table.append(tile); // !!! append thêm nhiều con 1 lúc đc
    //     }
        // board.push(maTran[i])
    // }
}