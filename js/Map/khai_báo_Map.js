var board_Infor_Tùy_Chọn = document.querySelector(".board_Infor_Tùy_Chọn")
var board_Infor_ZzDevil = document.querySelector(".board_Infor_ZzDevil")
var inFor_Tùy_Chọn_Back =  document.querySelector(".inFor_Tùy_Chọn_Back")
var blackLayoutt = document.querySelector(".blackLayoutt")
var inFor_Tùy_Chọn = document.querySelector(".inFor_Tùy_Chọn") 
var board_ZzDevil = document.querySelector(".board_ZzDevil")
var inFor_Tùy_Chọn_Back = document.querySelector(".inFor_Tùy_Chọn_Back")
var screenNe = document.querySelector(".screen"), bodyNe = document.querySelector(".body")
var miniMalp = document.querySelector(".miniMap2")

var me_HêHê, stopQuai = false, transM = 1
var số_Đa_Địch = document.querySelector(".tancongDaDich_Number")
var vào_Map = document.querySelector(".vaoMap")
var số_1_Địch = document.querySelector(".tancong1Dich_Number")

var fiveN = 2.5
var exitArrayyy = [], exitLeft = [] , quáiArray = [], mapI = 0, cảnArrayyy = []
var b, monsterBreak = [], numDa = false, exitBreak = 0
var canGo = true, hihu, currentIndex = 0, changeXXMap, quaiAppear = 0


function tạo_Random_Thập_Phân(a, b) {const randomDecimal = a + Math.random() * (b - a); return randomDecimal.toFixed(1) /*Tạo số thập phân ngẫu nhiên từ a đến b*/}

var quái_Me = 0
var me_Ingame = 0, transMM = 1


// "url('https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/they.png?raw=true')"
// "url('https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/they.png?raw=true')"
// Jrgergreun_Keit

var shouldRun = [false, false, false, false, false, false]

