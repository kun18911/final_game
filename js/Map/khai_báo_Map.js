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
var canGo = true, hihu, currentIndex = 0, changeXXMap, quaiMap = [], quaiAppear = 0


function tạo_Random_Thập_Phân(a, b) {const randomDecimal = a + Math.random() * (b - a); return randomDecimal.toFixed(1) /*Tạo số thập phân ngẫu nhiên từ a đến b*/}

var quái_Me = 0
var me_Ingame = 0, transMM = 1

var quái_S = [['quái_1S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/boy_hinh_xam.png?raw=true")', '1.3rem 1.7rem', '2.9rem 1.7rem', '4.9rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.5rem -0.2rem', '5rem', /*9. chess*/'-0.5rem -0.2rem', '5rem', /*11. tên_đá hồn_sao*/ 'Chu Thiên Phú', 0, 1],
['quái_2S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/main_boy.png?raw=true")', '1.4rem 1.7rem', '2.9rem 1.7rem', '5rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.4rem -0.1rem', '4.9rem', /*9. chess*/'-0.4rem -0.1rem', '4.9rem', /*11. tên_đá hồn_sao*/ 'Đinh Huy Dũng', 0, 5],
['quái_3S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/girl_toc_xla_ao_cam.png?raw=true")', '1.4rem 2rem', '3.1rem 2rem', '4.3rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.4rem 0.2rem', '4.4rem', /*9. chess*/'-0.4rem 0.2rem', '4.4rem', /*11. tên_đá hồn_sao*/ 'Huỳnh Nguyệt San', 0, 1],
['quái_4S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/girl_toc_vang_sexy.png?raw=true")', '1.4rem 2rem', '3.1rem 2rem', '4.3rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.4rem 0.2rem', '4.4rem', /*9. chess*/'-0.4rem 0.2rem', '4.4rem',/*11. tên_đá hồn_sao*/ 'Phan Vũ Bích Thủy', 0, 0],
['quái_5S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/main_girl.png?raw=true")', '1.4rem 2rem', '3.1rem 2rem', '4.3rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.4rem 0.2rem', '4.4rem',/*9. chess*/'-0.4rem 0.2rem', '4.4rem', /*11. tên_đá hồn_sao*/ 'Lý Ngọc Thiên Bình', 0, 1],
['quái_6S', 'url("https://github.com/kun18911/gameBenhVienQuyDu/blob/main/nh%C3%A2n%20v%E1%BA%ADt%20%E1%BA%A3nh/boy_toc_xla_ao_tim.png?raw=true")', '1.4rem 1.7rem', '3rem 1.7rem', '4.9rem', /*5.battle_cấp_%*/ 0, 0, /*7. chess*/'-0.4rem -0.1rem', '4.9rem',/*9. chess*/'-0.4rem -0.1rem', '4.9rem', /*11. tên_đá hồn_sao*/ 'Đương Nhị', 0, 0]
            ]
// "url('https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/they.png?raw=true')"
// "url('https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/they.png?raw=true')"
// Jrgergreun_Keit

var shouldRun = [false, false, false, false, false, false]

