fightMot()
var zeroArray = [document.getElementById("0-*0"), document.getElementById("0-*1"), document.getElementById("0-*2"), document.getElementById("0-*3"), document.getElementById("0-*4"), document.getElementById("0-*5"), document.getElementById("0-*6"), document.getElementById("0-*7"), document.getElementById("0-*8")]

for (var i = 0; i < zeroArray.length; i++) { cotArray[i].push(zeroArray[i]) }
for (var i = 0; i < columns; i++) {
    for (var j = 0; j < rows; j++) {
        cotArray[i].push(board[j][i])
    }
}

board[2][4].src = blank
board[3][4].src = blank
board[4][4].src = blank
function randomChess(b) {
    var x = Math.floor(Math.random() * mangCoBien.length)
    for (var i = 0; i < mangCoBien.length; i++) {
        if (x == i) { document.getElementById(b).src = mangCoBien[i] }
    }
}



if (2) {
    
    var bbb = ['https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true']
    // var bbb = ['https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true']
    var x = document.querySelectorAll(".ch-Chess")
    for (var i = 0; i < x.length; i++) {
        x[i].src = bbb[i]
    }


    // tìm 5x
    var x = document.querySelectorAll(".ch-Chess")
    var bbb = []
    for (var i = 0; i < x.length; i++) {
        bbb.push(x[i].src)
    }

    var bbb = ['https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword33.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water33.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true']
}





if (3) {
    function inforBattlee(hp, hpMax,    mana, manaMax,      xu, lv, lvPercent,
        giap, kim_cương//, dame
        ) {
        this.hp = function (x, y) {
            if (x == 1) {
                if (this.giapInfor() > 0) {
                    giap = this.giapInfor() - y     
                    if (giap < 0) {
                        giap = Math.abs(giap)
                        hp = hp - giap
                        giap = 0
                    }
                } else {hp = hp - y}
                
            } else {return hp = hp + y}
        }
        this.dame = function (x, y) {
            x = x - y
        }
        this.mana = function (x, y) {
            if (x == 1) {
                return mana = mana - y
            } else {return mana = mana + y}
        }
        this.giap = function (x, y) {
            if (x == 1) {
                return giap = giap - y
            } else {return giap = giap + y}
        }
        this.dame = function (x, y) {
            dame = dame - y
        }
        this.xu = function (x, y) {
            if (x == 1) {
                xu = xu - y
            } else {xu = xu + y}
        }
        this.kim_cương  = function (x, y) {
            if (x == 1) {
                kim_cương  = kim_cương  - y
            } else {kim_cương  = kim_cương  + y}
        }
        this.lv = function (x) {
            if (x == 1) {lvPercent = lvPercent + 2
                if (lvPercent >= 100) {lv = lv + 1; lvPercent = 0;
                hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]       
                                      }
            } else {lvPercent = lvPercent - 2
                if (lvPercent < 0) {
                    lv = lv - 1; lvPercent = 98
                        hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
                        ; if (lv < 0) {lv = 0; lvPercent = 0
                                      hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
                                      }
                }
            }
        }


/*hp*/  this.hpInfor = function () {return hp}
        this.hpMaxInfor = function () {return hpMax}
        this.hpMa = function() {hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]}

/*mana*/this.manaInfor = function () {
            return mana         }
        this.manaMaxInfor = function () {
            return manaMax      }
/*vàng*/this.xuInfor = function () {
            return xu         }
                /*vàng*/this.kim_cươngInfor = function () {
                    return kim_cương         }
/*lv*/  this.lvInfor = function () {
            return lv      }
        this.lvPercentInfor = function () {
            return lvPercent      }
/*giáp*/this.giapInfor = function () {
            return giap      }
// /*dame*/this.damePercentInfor = function () {
//             return dame       }

    hp = lvPoint(this.lvInfor())[0]; hpMax = lvPoint(this.lvInfor())[0]
    }
    var mee = new inforBattlee(150, 150,   0,300,    0, 5, 88,           6, 74)
    var quai
    quai = new inforBattlee(150, 150,   0,300,    0, 5, 88,           0, 0)
    //                         hp                                             mana          0 vàng, lv5.00     giáp
    

    var dame, hpPoint, giapPoint, hpMax
    var meeArray = [150, 150]
    var dam = [9, 10, 11]
    var hpPo = [8, 9] 

    var giapPo = [4, 5]

    var manaPoint = 9
    var xuPoint = 2
    var skillPoint = 0.5
    var manaMax = 300



    function lvPoint(xx, yy) {
        function mi(x,y, lv, spe) {
            i = Math.floor(Math.random() * y.length) 
            x = y[i]
            if (lv > 0) {x = x + x*lv*0.7/100}
            if (spe > 0) {x = x * 1.5}
            return x
        }
        if (xx == 0) {
            hpMax = 150
            mi(dame, dam, 0, yy); mi(giapPoint, giapPo, 0, yy); mi(hpPoint, hpPo, 0, yy)
        } else {
            hpMax = xx*12 + 150 
            mi(dame, dam, xx, yy); mi(giapPoint, giapPo, xx, yy); mi(hpPoint, hpPo, xx, yy)
        }
        return [hpMax]

    }




    // họ
    console.log("hp: " + quai.hpInfor() +"/" + quai.hpMaxInfor() + '\n' +
            "mana: " + quai.manaInfor() + "/" + quai.manaMaxInfor()  + '\n' +
            "giáp: " + quai.giapInfor() + '\n' +
            "lv: " + quai.lvInfor() + "."+ quai.lvPercentInfor()+ "%\n"+ 
           "xu: " + quai.xuInfor() + "; kim cương: " + quai.kim_cươngInfor() + "\n")
    quai = new inforBattlee(150, 150,   0,300,    0, 5, 88,           0, 0)
    var mee = new inforBattlee(150, 150,   0,300,    0, 5, 88,           0, 0)
        //    me
        console.log("hp: " + mee.hpInfor() +"/" + mee.hpMaxInfor() + '\n' +
        "mana: " + mee.manaInfor() + "/" + mee.manaMaxInfor()  + '\n' +
        "giáp: " + mee.giapInfor() + '\n' +
        "lv: " + mee.lvInfor() + "."+ mee.lvPercentInfor()+ "%\n"+ 
       "xu: " + mee.xuInfor() + "; kim cương: " + mee.kim_cươngInfor() + "\n")

}

if (4) {
    setTimeout(function () {
        console.log("chúc")
   }, 1000)
   
   setTimeout(function () {
        console.log("mày ")
   }, 1500)
   setTimeout(function () {
        console.log("ngày")
   }, 2000)
   setTimeout(function () {
        console.log("chủ")
   }, 2500)
   setTimeout(function () {
        console.log("nhật")
   }, 3000)
   setTimeout(function () {
        console.log("làm")
   }, 3500)
   setTimeout(function () {
        console.log("việc")
   }, 4000)
   setTimeout(function () {
        console.log("vui")
   }, 4500)
   setTimeout(function () {
        console.log("vẻ")
   }, 5000)



   mee = new inforBattlee(150, 150, 0, 300, 0/*xu*/, 5/*cấp*/, 88/* % */, 0 /*giáp*/, 0/*kim cương*/, 0/*hồng_ngọc*/)
   quai = new inforBattlee(150, 150, 0, 300, 0/*xu*/, 0/*cấp*/, 0/* % */, 0 /*giáp*/, 0/*kim cương*/, 0/*hồng_ngọc*/)

   // họ
   console.log("quái: \n" +
       "hp: " + quai.hpInfor() +"/" + quai.hpMaxInfor() + '\n' +
           "mana: " + quai.manaInfor() + "/" + quai.manaMaxInfor()  + '\n' +
           "giáp: " + quai.giapInfor() + '\n' +
           "lv: " + quai.lvInfor() + "."+ quai.lvPercentInfor()+ "%\n"+ 
          "xu: " + quai.xuInfor() + "; kim cương: " + quai.kim_cươngInfor() + "\n")



   // tôi
   console.log("tôi: \n" +
       "hp: " + mee.hpInfor() +"/" + mee.hpMaxInfor() + '\n' +
           "mana: " + mee.manaInfor() + "/" + mee.manaMaxInfor()  + '\n' +
           "giáp: " + mee.giapInfor() + '\n' +
           "lv: " + mee.lvInfor() + "."+ mee.lvPercentInfor()+ "%\n"+ 
          "xu: " + mee.xuInfor() + "; kim cương: " + mee.kim_cươngInfor() + "\n")
}

