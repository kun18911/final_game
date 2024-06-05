
var aaa = ['0-0', '0-1', '0-2', '0-3',
'1-0', '1-1', '1-2', '1-3',
'2-0', '2-1', '2-2', '2-3',
'3-0', '3-1', '3-2', '3-3'];

// Lấy phần tử có id là "board"
var board = document.getElementById("board");

var previousTile = null; // Lưu trữ ô trước đó

// Tạo bảng với các ô và gán id từ mảng aaa
aaa.forEach(id => {
    var cell = document.createElement("div");
    cell.classList.add("tile");
    cell.textContent = id; // Hiển thị id của ô (có thể thay đổi theo nhu cầu)
    cell.id = id.substring(1); // Lấy id từ mảng aaa bỏ dấu "#"  cell.id = id.substring(1);
    cell.addEventListener("click", click_Curr); // Thêm sự kiện click cho từng ô
    board.appendChild(cell);
});

// Xử lý sự kiện khi click vào ô
var click1 = true, currTile, otherTile
function click_Curr() { // ✨ phần click cờ
    if (click1) { click1 = false; currTile = this; console.log("click nè")}
    else {
        click1 = true; otherTile = this; //dragEnd()
        if (currTile === this) {
            console.log("click chính mình");
            return;
        }
        if (!isAdjacent(currTile, this)) {
            console.log(currTile.id, this.id, "click sai");
            return;
        }
        // Đổi id và nội dung giữa 2 ô
        this.textContent = currTile.id//this.id;
        currTile.textContent = this.id// currTile.id;
		console.log("đổi nè", currTile.id, this.id)
    }
}

// Kiểm tra xem 2 ô có phải là hàng xóm không
function isAdjacent(tile1, tile2) {
    var id1 = tile1.id.split("-").map(Number), id2 = tile2.id.split("-").map(Number);
    var rowDiff = Math.abs(id1[0] - id2[0]), colDiff = Math.abs(id1[1] - id2[1]);
    return (rowDiff === 1 && colDiff === 0) || (rowDiff === 0 && colDiff === 1);
}
// var  i = '-0.1234'
// a = +i



Destructuring assignment là một cú pháp trong JavaScript cho phép bạn rút trích (extract) dữ liệu từ các cấu trúc dữ liệu như mảng hoặc đối tượng và gán chúng vào các biến riêng lẻ một cách nhanh chóng và tiện lợi.

Destructuring Arrays:
Ví dụ, với một mảng:

javascript---------------------------------
const numbers = [1, 2, 3, 4, 5];

// Sử dụng destructuring để gán các giá trị từ mảng vào các biến riêng lẻ
const [a, b, c, d, e] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
console.log(e); // Output: 5

function greet({name, age }) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
  }
  
  const person = { name: 'Alice', age: 25 };
  
  // Truyền đối tượng person cho hàm greet
  greet(person); // Output: Hello, Alice! You are 25 years old.

  const person = { name: 'John', age: 30 };

// Sử dụng destructuring để gán các thuộc tính của đối tượng vào các biến riêng lẻ
const { name, age } = person;

console.log(name); // Output: 'John'
console.log(age); // Output: 30

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table with IDs</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="board" class="board"></div>
</body>
</html>

.board {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    width: 240px; /* Điều chỉnh kích thước bảng theo nhu cầu */
    height: 240px; /* Điều chỉnh kích thước bảng theo nhu cầu */
    border: 2px solid #000; /* Biên của bảng */
}

.tile {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc; /* Biên của từng ô */
    font-size: 24px;
    cursor: pointer; /* Biểu tượng chuột chỉ vào ô là bàn */
}

.clicked {
    background-color: #f0f0f0; /* Màu nền của ô đã được click */
}

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

Template literals, var a = 'Khoa'
console.log(`Tôi tên là ${a}`)
VM3918:2 Tôi tên là Khoa


Toán tử spread (spread operator) trong JavaScript được ký hiệu bằng ba dấu chấm ... và thường được sử dụng để:

Mở rộng một mảng (Array): Toán tử spread cho phép chúng ta sao chép toàn bộ các phần tử từ một mảng và chèn chúng vào một mảng mới hoặc truyền chúng như các đối số cho một hàm.
javascript
Copy code
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];
console.log(arr2); // Output: [1, 2, 3, 4, 5, 6]
Mở rộng một đối tượng (Object): Spread operator cũng có thể được sử dụng để tạo một bản sao của một đối tượng và mở rộng các thuộc tính của đối tượng.
javascript
Copy code
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3, d: 4 }
Truyền đối số cho hàm: Spread operator cũng có thể được sử dụng để truyền các đối số cho một hàm một cách thuận tiện, đặc biệt khi số lượng đối số là biến đổi.
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // Output: 5
Toán tử spread giúp làm cho mã nguồn trở nên sạch sẽ và dễ đọc hơn trong nhiều tình huống, đặc biệt là khi làm việc với mảng và đối tượng.

function tạo_Cột_Slide() { // ✨
    for (var i = 0; i < cột; i++) {
        cotArray[i] = []; cotArray[i].push(document.getElementById("0-*" + i))
        for (var j = 0; j < hàng; j++) { cotArray[i].push(board[j][i]) }
    }
}




if (i == 1) { hpt = làm_Tròn(hpt + xx, 2) } else if (i == 4) { giapt = làm_Tròn(giapt + xx, 2) }
else if (i == 5) { damet = làm_Tròn(damet + xx, 2) }


function mi(a) {
    console.log(444)
    if (a>0){console.log(2222) }//else {console.log(333)}
}
mi(1)

mee.mana(2, +mảng_bảng_Điểm[0].innerHTML); mảng_bảng_ĐMe[0].innerHTML = mee.manaInfor()
            mee.hp(2, +mảng_bảng_Điểm[1].innerHTML); mảng_bảng_ĐMe[1].innerHTML = mee.hpInfor()
            mee.xu(2, +mảng_bảng_Điểm[2].innerHTML); mảng_bảng_ĐMe[2].innerHTML = mee.xuInfor()
            mee.hồng_ngọc(2, +mảng_bảng_Điểm[3].innerHTML); mảng_bảng_ĐMe[3].innerHTML = mee.hồng_ngọcInfor()
              // function mi(I, cộng, infor, mảng_Đ, num) {
            //     if (+mảng_bảng_Điểm[num].innerHTML > 0) {
            //         I.cộng(2, +mảng_bảng_Điểm[num].innerHTML); mảng_Đ[num].innerHTML = I.infor()
            //     }
            // }
            // mi(mee, mana, manaInfor, mảng_bảng_ĐMe, 0); mi(mee, hp, hpInfor, mảng_bảng_ĐMe, 1); 
            // mi(mee, xu, xuInfor, mảng_bảng_ĐMe, 2); mi(mee, hồng_ngọc, hồng_ngọcInfor, mảng_bảng_ĐMe, 3)


            function readycrush() { // ✨
                lấy_ListArray(); tạo_Bom3x3(); thêm_Lượt(); var array = []; // khâu này xóa cờ, mờ cờ ------------
                // ---------------------------------------------------
                for(var i=0;i<listOfArrays.length;i++){for(var j=0;j<listOfArrays[i].length;j++){array.push(listOfArrays[i][j])}}
                console.log()
                var uniqueArray = Array.from(new Set(array)); abcm = uniqueArray.length
                if (abcm > 0) {for (var i = 0; i < uniqueArray.length; i++) { console.log("hi"); xóa_Viên_Nổ(uniqueArray[i], 1, 200) }} 
                else { setTimeout(function () { slide1() }, 300) }
            }


            var x = [1,2,3,4,5]
            x.forEach(y=>console.log(y))
            VM1075:2 1
            VM1075:2 2
            VM1075:2 3
            VM1075:2 4
            VM1075:2 5
            undefined
            x.length > 0 ? console.log(x) : console.log(222)

            // viên ko trùng
            var x = document.querySelectorAll(".ch-Chess")
            var bbb = []
            for (var y of x) {
                bbb.push(y.src)
            }

            ['https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heartDoc.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/heart.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/water.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/melon.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/yingyang.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/sword.png?raw=true', 'https://github.com/kun18911/gameBenhVienQuyDu/blob/main/asset/img/star.png?raw=true']
