// đây là núi pong ấn
{
    // demo
function hard_Auto() {
        var answer = 0
        // if (auto_5x()[0]) {
        //     // 0, 1 , 2/readycrush2(5)[1], 3/readycrush2(5)[2]]
        //     var b= []
        //     for (var y of auto_5x_array) {
        //         b.push(y[2])
        //     }
        //     // 1  1
        //     // 1  0
        //     // 0  0
        //     // 0  0

        //     // b(1,1,0,0)
        //     var maxInNumbers = Math.max.apply(Math, b);

        //     var c = []
        //     for (var y of b) {
        //         if (y == maxInNumbers) {
        //             c.push(y)
        //         } else { c.push(-1) }
        //     }
        //     // c(1,1,-1,-1)

        //     var n = 0
        //     var d = []
        //     for (var i = 0; i < c.length; i++) {
        //         if (c[i] != -1) {
        //             n++
        //             d.push(i)
        //         }
        //     }

        //     // d (0,1)

        //     // for (var y of d) {
        //     //     console.log(auto_5x_array[y])
        //     // }
        //     var e = []
        //     for (var y of d) {
        //         // console.log(auto_5x_array[y])
        //         e.push(auto_5x_array[y][3])
        //     }
        //     // e (1, 0)

        //     var maxInNumbers2 = Math.max.apply(Math, e);

        //     var f = []
        //     for (var y of e) {
        //         if (y == maxInNumbers2) {
        //             f.push(y)
        //         } else { f.push(-1) }
        //     }
        //     // f(1,-1)


        //     var g = []
        //     for (var i = 0; i < f.length; i++) {
        //         if (c[i] != -1) {
        //             g.push(i)
        //         }
        //     }
        //     // g(0)
        //     // g(0, 1)
        //     var y = Math.floor(Math.random() * g.length)

        //     currTile = auto_5x_array[y][0]
        //     otherTile = auto_5x_array[y][1]

        //     currTile.classList.replace(currTile.classList[3], 'focus')
        //     setTimeout(function() {
        //         currTile.classList.replace(currTile.classList[3], 'fc')
        //     }, 900)

        //     setTimeout(function () {
        //         let currImg = currTile.src;
        //         let otherImg = otherTile.src;
        //         currTile.src = otherImg;
        //         otherTile.src = currImg


        //         otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //         setTimeout(function() {
        //             otherTile.classList.replace(otherTile.classList[3], 'fc')
        //         }, 200)
        //         setTimeout(function () {
        //             readycrush()
        //         }, 300)

        //     }, 1100)

        // } else { answer = 'wrong'; console.log(answer) }

        if (auto_4x()[0]) {
            console.log(listOfArrays)
            // 0, 1 , 2/readycrush2(4)[1], 3/readycrush2(4)[2]]
            var b = []
            for (var y of auto_4x_array) {
                b.push(y[2])
            }
            // 1  1
            // 1  0
            // 0  0
            // 0  0

            // b(1,1,0,0)
            var maxInNumbers = Math.max.apply(Math, b);

            var c = []
            for (var y of b) {
                if (y == maxInNumbers) {
                    c.push(y)
                } else { c.push(-1) }
            }
            // c(1,1,-1,-1)

            var n = 0
            var d = []
            for (var i = 0; i < c.length; i++) {
                if (c[i] != -1) {
                    n++
                    d.push(i)
                }
            }

            // d (0,1)

            if (d.length == 1) { } else { }
            for (var y of d) {
                console.log(auto_4x_array[y])
            }
            var e = []
            for (var y of d) {
                // console.log(auto_4x_array[y])
                e.push(auto_4x_array[y][3])
            }
            // e (1, 0)

            var maxInNumbers2 = Math.max.apply(Math, e);

            var f = []
            for (var y of e) {
                if (y == maxInNumbers2) {
                    f.push(y)
                } else { f.push(-1) }
            }
            // f(1,-1)

            var g = []
            for (var i = 0; i < f.length; i++) {
                if (c[i] != -1) {
                    g.push(i)
                }
            }
            // g(0)
            // g(0, 1)
            var y = Math.floor(Math.random() * g.length)
            currTile = auto_4x_array[y][0]
            otherTile = auto_4x_array[y][1]

            currTile.classList.replace(currTile.classList[3], 'focus')
            setTimeout(function () {
                currTile.classList.replace(currTile.classList[3], 'fc')
            }, 900)

            setTimeout(function () {
                let currImg = currTile.src;
                let otherImg = otherTile.src;
                currTile.src = otherImg;
                otherTile.src = currImg


                otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                setTimeout(function () {
                    otherTile.classList.replace(otherTile.classList[3], 'fc')
                }, 200)
                setTimeout(function () {
                    readycrush()
                }, 300)

            }, 1100)

        } else {
            console.log(listOfArrays)

            answer = 'wrong'; console.log(answer)
        }

        // if (auto_3x()[0]) {
        //     // 0, 1 , 2/readycrush2(3)[1], 3/readycrush2(3)[2]]
        //     var b= []
        //     for (var y of auto_3x_array) {
        //         b.push(y[2])
        //     }
        //     // 1  1
        //     // 1  0
        //     // 0  0
        //     // 0  0

        //     // b(1,1,0,0)
        //     var maxInNumbers = Math.max.apply(Math, b);

        //     var c = []
        //     for (var y of b) {
        //         if (y == maxInNumbers) {
        //             c.push(y)
        //         } else { c.push(-1) }
        //     }
        //     // c(1,1,-1,-1)

        //     var n = 0
        //     var d = []
        //     for (var i = 0; i < c.length; i++) {
        //         if (c[i] != -1) {
        //             n++
        //             d.push(i)
        //         }
        //     }

        //     // d (0,1)

        //     if (d.length == 1) {} else {}
        //     for (var y of d) {
        //         console.log(auto_3x_array[y])
        //     }
        //     var e = []
        //     for (var y of d) {
        //         // console.log(auto_3x_array[y])
        //         e.push(auto_3x_array[y][3])
        //     }
        //     // e (1, 0)

        //     var maxInNumbers2 = Math.max.apply(Math, e);

        //     var f = []
        //     for (var y of e) {
        //         if (y == maxInNumbers2) {
        //             f.push(y)
        //         } else { f.push(-1) }
        //     }
        //     // f(1,-1)

        //     var g = []
        //     for (var i = 0; i < f.length; i++) {
        //         if (c[i] != -1) {
        //             g.push(i)
        //         }
        //     }
        //     // g(0)
        //     // g(0, 1)
        //     var y = Math.floor(Math.random() * g.length)
        //     currTile = auto_3x_array[y][0]
        //     otherTile = auto_3x_array[y][1]

        //     currTile.classList.replace(currTile.classList[3], 'focus')
        //     setTimeout(function() {
        //         currTile.classList.replace(currTile.classList[3], 'fc')
        //     }, 900)

        //     setTimeout(function () {
        //         let currImg = currTile.src;
        //         let otherImg = otherTile.src;
        //         currTile.src = otherImg;
        //         otherTile.src = currImg


        //         otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //         setTimeout(function() {
        //             otherTile.classList.replace(otherTile.classList[3], 'fc')
        //         }, 200)
        //         setTimeout(function () {
        //             readycrush()
        //         }, 300)

        //     }, 1100)

        // } else { answer = 'wrong'; console.log(answer) }


        // if (auto_Boom5x()[0]) {
        //     // 0./y, 5x     1./ y.3x     2/y, o
        //     //    auto_Boom5x_5x,  auto_Boom5x_N3D, auto_Boom5x_Thuong
        //     if (auto_Boom5x_5x.length > 0) {
        //         // chắc chắn ko có 1

        //         var randomC = Math.floor(Math.random() * auto_Boom5x_5x.length)


        //         currTile = auto_Boom5x_5x[randomC][0]
        //         otherTile = auto_Boom5x_5x[randomC][1]

        //         currTile.classList.replace(currTile.classList[3], 'focus')
        //         setTimeout(function () {
        //             currTile.classList.replace(currTile.classList[3], 'fc')
        //         }, 900)

        //         setTimeout(function () {
        //             let currImg = currTile.src;
        //             let otherImg = otherTile.src;
        //             currTile.src = otherImg;
        //             otherTile.src = currImg


        //             otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //             setTimeout(function () {
        //                 otherTile.classList.replace(otherTile.classList[3], 'fc')
        //             }, 200)
        //             setTimeout(function () {
        //                 function delete_2_Special() {

        //                     // xóa cho ô 5x  11111

        //                     if ((currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xThuong(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                     // xóa cho ô 5x 2222
        //                     if ((otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // console.log(otherT)

        //                             xoa5xThuong(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }




        //                     // xóa cho ô 5x và ô thường 1111
        //                     if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
        //                             otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
        //                             otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xDacbiet(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }
        //                     // xóa cho ô 5x và ô thường 2222
        //                     if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
        //                             currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
        //                             currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = currTile
        //                             xoa5xDacbiet(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }


        //                     if (otherTile.classList[2] == "fiveBlock"
        //                         && currTile.classList[2] == "fiveBlock") {
        //                         setTimeout(function () {
        //                             xoa5x5x(0)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                 }
        //                 delete_2_Special()
        //             }, 300)

        //         }, 1100)

        //     } else if (auto_Boom5x_N3D.length > 0) {
        //         var randomC = Math.floor(Math.random() * auto_Boom5x_N3D.length)


        //         currTile = auto_Boom5x_N3D[randomC][0]
        //         otherTile = auto_Boom5x_N3D[randomC][1]

        //         currTile.classList.replace(currTile.classList[3], 'focus')
        //         setTimeout(function () {
        //             currTile.classList.replace(currTile.classList[3], 'fc')
        //         }, 900)

        //         setTimeout(function () {
        //             let currImg = currTile.src;
        //             let otherImg = otherTile.src;
        //             currTile.src = otherImg;
        //             otherTile.src = currImg


        //             otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //             setTimeout(function () {
        //                 otherTile.classList.replace(otherTile.classList[3], 'fc')
        //             }, 200)
        //             setTimeout(function () {
        //                 function delete_2_Special() {

        //                     // xóa cho ô 5x  11111

        //                     if ((currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xThuong(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                     // xóa cho ô 5x 2222
        //                     if ((otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // console.log(otherT)

        //                             xoa5xThuong(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }




        //                     // xóa cho ô 5x và ô thường 1111
        //                     if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
        //                             otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
        //                             otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xDacbiet(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }
        //                     // xóa cho ô 5x và ô thường 2222
        //                     if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
        //                             currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
        //                             currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = currTile
        //                             xoa5xDacbiet(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }


        //                     if (otherTile.classList[2] == "fiveBlock"
        //                         && currTile.classList[2] == "fiveBlock") {
        //                         setTimeout(function () {
        //                             xoa5x5x(0)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                 }
        //                 delete_2_Special()
        //             }, 300)

        //         }, 1100)
        //     } else if (auto_Boom5x_Thuong.length > 0) {

        //         var randomC = Math.floor(Math.random() * auto_Boom5x_Thuong.length)


        //         currTile = auto_Boom5x_Thuong[randomC][0]
        //         otherTile = auto_Boom5x_Thuong[randomC][1]

        //         currTile.classList.replace(currTile.classList[3], 'focus')
        //         setTimeout(function () {
        //             currTile.classList.replace(currTile.classList[3], 'fc')
        //         }, 900)

        //         setTimeout(function () {
        //             let currImg = currTile.src;
        //             let otherImg = otherTile.src;
        //             currTile.src = otherImg;
        //             otherTile.src = currImg


        //             otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //             setTimeout(function () {
        //                 otherTile.classList.replace(otherTile.classList[3], 'fc')
        //             }, 200)
        //             setTimeout(function () {
        //                 function delete_2_Special() {

        //                     // xóa cho ô 5x  11111

        //                     if ((currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xThuong(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                     // xóa cho ô 5x 2222
        //                     if ((otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "Xclass")) {
        //                         setTimeout(function () {
        //                             // console.log(otherT)

        //                             xoa5xThuong(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }




        //                     // xóa cho ô 5x và ô thường 1111
        //                     if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
        //                             otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
        //                             otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = otherTile
        //                             xoa5xDacbiet(otherTile)
        //                         }, 300)
        //                         return go = false
        //                     }
        //                     // xóa cho ô 5x và ô thường 2222
        //                     if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
        //                         &&
        //                         (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
        //                             currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
        //                             currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
        //                         setTimeout(function () {
        //                             // otherT = currTile
        //                             xoa5xDacbiet(currTile)
        //                         }, 300)
        //                         return go = false
        //                     }


        //                     if (otherTile.classList[2] == "fiveBlock"
        //                         && currTile.classList[2] == "fiveBlock") {
        //                         setTimeout(function () {
        //                             xoa5x5x(0)
        //                         }, 300)
        //                         return go = false
        //                     }

        //                 }
        //                 delete_2_Special()
        //             }, 300)

        //         }, 1100)

        //     }
        // } else { answer = 'wrong'; console.log(answer) }

        // if (auto_N3D()[0]) {
        //     var randomC = Math.floor(Math.random() * auto_N3D_last.length)


        //     currTile = auto_N3D_last[randomC][0]
        //     otherTile = auto_N3D_last[randomC][1]

        //     currTile.classList.replace(currTile.classList[3], 'focus')
        //     setTimeout(function () {
        //         currTile.classList.replace(currTile.classList[3], 'fc')
        //     }, 900)

        //     setTimeout(function () {
        //         let currImg = currTile.src;
        //         let otherImg = otherTile.src;
        //         currTile.src = otherImg;
        //         otherTile.src = currImg


        //         otherTile.classList.replace(otherTile.classList[3], 'outFocus')
        //         setTimeout(function () {
        //             otherTile.classList.replace(otherTile.classList[3], 'fc')
        //         }, 200)
        //         setTimeout(function () {
        //             function delete_2_Special() {

        //                 // xóa cho ô Ngang/Dọc và Ngang/Dọc
        //                 if ((currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
        //                     currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")
        //                     &&
        //                     (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
        //                         otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
        //                     setTimeout(function () {
        //                         xoaNgangDoc()
        //                     }, 300)
        //                     return go = false
        //                 }

        //                 // xóa cho ô 3x3 và Ngang/Dọc
        //                 if ((currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")
        //                     &&
        //                     (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
        //                         otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {

        //                     if (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang") {
        //                         var otherTT = "Ngang"
        //                     } else if (otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc") { var otherTT = "Doc" }
        //                     setTimeout(function () {
        //                         xoaNgang3x3(otherTT)
        //                     }, 300)
        //                     return go = false
        //                 }

        //                 // xóa cho ô 3x3 và Ngang/Dọc
        //                 if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
        //                     &&
        //                     (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
        //                         currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
        //                     if (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang") {
        //                         var otherTT = "Ngang"
        //                     } else if (currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc") { var otherTT = "Doc" }

        //                     setTimeout(function () {
        //                         xoaNgang3x3(otherTT)
        //                     }, 300)
        //                     return go = false
        //                 }

        //                 // xóa cho ô 3x3 và 3x3
        //                 if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
        //                     &&
        //                     (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")) {
        //                     setTimeout(function () {
        //                         xoa3x3vs3x3()
        //                     }, 300)
        //                     return go = false
        //                 }
        //             }
        //             delete_2_Special()
        //         }, 300)

        //     }, 1100)
        // }
}

    // 3 cấp độ của quái
    function hard_Play() {
        if (auto_5x()[0]) {
            // 0, 1 , 2/readycrush2(5)[1], 3/readycrush2(5)[2]]
            var b = []
            for (var y of auto_5x_array) {
                b.push(y[2])
            }
            // 1  1
            // 1  0
            // 0  0
            // 0  0

            // b(1,1,0,0)
            var maxInNumbers = Math.max.apply(Math, b);

            var c = []
            for (var y of b) {
                if (y == maxInNumbers) {
                    c.push(y)
                } else { c.push(-1) }
            }
            // c(1,1,-1,-1)

            var n = 0
            var d = []
            for (var i = 0; i < c.length; i++) {
                if (c[i] != -1) {
                    n++
                    d.push(i)
                }
            }

            // d (0,1)

            // for (var y of d) {
            //     console.log(auto_5x_array[y])
            // }
            var e = []
            for (var y of d) {
                // console.log(auto_5x_array[y])
                e.push(auto_5x_array[y][3])
            }
            // e (1, 0)

            var maxInNumbers2 = Math.max.apply(Math, e);

            var f = []
            for (var y of e) {
                if (y == maxInNumbers2) {
                    f.push(y)
                } else { f.push(-1) }
            }
            // f(1,-1)


            var g = []
            for (var i = 0; i < f.length; i++) {
                if (c[i] != -1) {
                    g.push(i)
                }
            }
            // g(0)
            // g(0, 1)
            var y = Math.floor(Math.random() * g.length)

            currTile = auto_5x_array[y][0]
            otherTile = auto_5x_array[y][1]

            currTile.classList.replace(currTile.classList[3], 'focus')
            setTimeout(function () {
                currTile.classList.replace(currTile.classList[3], 'fc')
            }, 900)

            setTimeout(function () {
                let currImg = currTile.src;
                let otherImg = otherTile.src;
                currTile.src = otherImg;
                otherTile.src = currImg


                otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                setTimeout(function () {
                    otherTile.classList.replace(otherTile.classList[3], 'fc')
                }, 200)
                setTimeout(function () {
                    readycrush()
                }, 300)

            }, 1100)

        } else

            if (auto_4x()[0]) {
                // 0, 1 , 2/readycrush2(4)[1], 3/readycrush2(4)[2]]
                var b = []
                for (var y of auto_4x_array) {
                    b.push(y[2])
                }
                // 1  1
                // 1  0
                // 0  0
                // 0  0

                // b(1,1,0,0)
                var maxInNumbers = Math.max.apply(Math, b);

                var c = []
                for (var y of b) {
                    if (y == maxInNumbers) {
                        c.push(y)
                    } else { c.push(-1) }
                }
                // c(1,1,-1,-1)

                var n = 0
                var d = []
                for (var i = 0; i < c.length; i++) {
                    if (c[i] != -1) {
                        n++
                        d.push(i)
                    }
                }

                // d (0,1)

                if (d.length == 1) { } else { }
                for (var y of d) {
                    console.log(auto_4x_array[y])
                }
                var e = []
                for (var y of d) {
                    // console.log(auto_4x_array[y])
                    e.push(auto_4x_array[y][3])
                }
                // e (1, 0)

                var maxInNumbers2 = Math.max.apply(Math, e);

                var f = []
                for (var y of e) {
                    if (y == maxInNumbers2) {
                        f.push(y)
                    } else { f.push(-1) }
                }
                // f(1,-1)

                var g = []
                for (var i = 0; i < f.length; i++) {
                    if (c[i] != -1) {
                        g.push(i)
                    }
                }
                // g(0)
                // g(0, 1)
                var y = Math.floor(Math.random() * g.length)
                currTile = auto_4x_array[y][0]
                otherTile = auto_4x_array[y][1]

                currTile.classList.replace(currTile.classList[3], 'focus')
                setTimeout(function () {
                    currTile.classList.replace(currTile.classList[3], 'fc')
                }, 900)

                setTimeout(function () {
                    let currImg = currTile.src;
                    let otherImg = otherTile.src;
                    currTile.src = otherImg;
                    otherTile.src = currImg


                    otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                    setTimeout(function () {
                        otherTile.classList.replace(otherTile.classList[3], 'fc')
                    }, 200)
                    setTimeout(function () {
                        readycrush()
                    }, 300)

                }, 1100)

            } else

                if (auto_Boom5x()[0]) {
                    // 0./y, 5x     1./ y.3x     2/y, o
                    //    auto_Boom5x_5x,  auto_Boom5x_N3D, auto_Boom5x_Thuong
                    if (auto_Boom5x_5x.length > 0) {
                        // chắc chắn ko có 1

                        var randomC = Math.floor(Math.random() * auto_Boom5x_5x.length)


                        currTile = auto_Boom5x_5x[randomC][0]
                        otherTile = auto_Boom5x_5x[randomC][1]

                        currTile.classList.replace(currTile.classList[3], 'focus')
                        setTimeout(function () {
                            currTile.classList.replace(currTile.classList[3], 'fc')
                        }, 900)

                        setTimeout(function () {
                            let currImg = currTile.src;
                            let otherImg = otherTile.src;
                            currTile.src = otherImg;
                            otherTile.src = currImg


                            otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                            setTimeout(function () {
                                otherTile.classList.replace(otherTile.classList[3], 'fc')
                            }, 200)
                            setTimeout(function () {
                                function delete_2_Special() {

                                    // xóa cho ô 5x  11111

                                    if ((currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xThuong(otherTile)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 5x 2222
                                    if ((otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // console.log(otherT)

                                            xoa5xThuong(currTile)
                                        }, 300)
                                        return go = false
                                    }




                                    // xóa cho ô 5x và ô thường 1111
                                    if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
                                            otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xDacbiet(otherTile)
                                        }, 300)
                                        return go = false
                                    }
                                    // xóa cho ô 5x và ô thường 2222
                                    if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
                                            currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                            currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = currTile
                                            xoa5xDacbiet(currTile)
                                        }, 300)
                                        return go = false
                                    }


                                    if (otherTile.classList[2] == "fiveBlock"
                                        && currTile.classList[2] == "fiveBlock") {
                                        setTimeout(function () {
                                            xoa5x5x(0)
                                        }, 300)
                                        return go = false
                                    }

                                }
                                delete_2_Special()
                            }, 300)

                        }, 1100)

                    } else if (auto_Boom5x_N3D.length > 0) {
                        var randomC = Math.floor(Math.random() * auto_Boom5x_N3D.length)


                        currTile = auto_Boom5x_N3D[randomC][0]
                        otherTile = auto_Boom5x_N3D[randomC][1]

                        currTile.classList.replace(currTile.classList[3], 'focus')
                        setTimeout(function () {
                            currTile.classList.replace(currTile.classList[3], 'fc')
                        }, 900)

                        setTimeout(function () {
                            let currImg = currTile.src;
                            let otherImg = otherTile.src;
                            currTile.src = otherImg;
                            otherTile.src = currImg


                            otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                            setTimeout(function () {
                                otherTile.classList.replace(otherTile.classList[3], 'fc')
                            }, 200)
                            setTimeout(function () {
                                function delete_2_Special() {

                                    // xóa cho ô 5x  11111

                                    if ((currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xThuong(otherTile)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 5x 2222
                                    if ((otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // console.log(otherT)

                                            xoa5xThuong(currTile)
                                        }, 300)
                                        return go = false
                                    }




                                    // xóa cho ô 5x và ô thường 1111
                                    if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
                                            otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xDacbiet(otherTile)
                                        }, 300)
                                        return go = false
                                    }
                                    // xóa cho ô 5x và ô thường 2222
                                    if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
                                            currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                            currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = currTile
                                            xoa5xDacbiet(currTile)
                                        }, 300)
                                        return go = false
                                    }


                                    if (otherTile.classList[2] == "fiveBlock"
                                        && currTile.classList[2] == "fiveBlock") {
                                        setTimeout(function () {
                                            xoa5x5x(0)
                                        }, 300)
                                        return go = false
                                    }

                                }
                                delete_2_Special()
                            }, 300)

                        }, 1100)
                    } else if (auto_N3D()[0]) {
                        var randomC = Math.floor(Math.random() * auto_N3D_last.length)


                        currTile = auto_N3D_last[randomC][0]
                        otherTile = auto_N3D_last[randomC][1]

                        currTile.classList.replace(currTile.classList[3], 'focus')
                        setTimeout(function () {
                            currTile.classList.replace(currTile.classList[3], 'fc')
                        }, 900)

                        setTimeout(function () {
                            let currImg = currTile.src;
                            let otherImg = otherTile.src;
                            currTile.src = otherImg;
                            otherTile.src = currImg


                            otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                            setTimeout(function () {
                                otherTile.classList.replace(otherTile.classList[3], 'fc')
                            }, 200)
                            setTimeout(function () {
                                function delete_2_Special() {

                                    // xóa cho ô Ngang/Dọc và Ngang/Dọc
                                    if ((currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                        currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")
                                        &&
                                        (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            xoaNgangDoc()
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và Ngang/Dọc
                                    if ((currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")
                                        &&
                                        (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {

                                        if (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang") {
                                            var otherTT = "Ngang"
                                        } else if (otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc") { var otherTT = "Doc" }
                                        setTimeout(function () {
                                            xoaNgang3x3(otherTT)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và Ngang/Dọc
                                    if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                        &&
                                        (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                            currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                        if (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang") {
                                            var otherTT = "Ngang"
                                        } else if (currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc") { var otherTT = "Doc" }

                                        setTimeout(function () {
                                            xoaNgang3x3(otherTT)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và 3x3
                                    if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                        &&
                                        (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")) {
                                        setTimeout(function () {
                                            xoa3x3vs3x3()
                                        }, 300)
                                        return go = false
                                    }
                                }
                                delete_2_Special()
                            }, 300)

                        }, 1100)
                    } else if (auto_Boom5x_Thuong.length > 0) {

                        var randomC = Math.floor(Math.random() * auto_Boom5x_Thuong.length)


                        currTile = auto_Boom5x_Thuong[randomC][0]
                        otherTile = auto_Boom5x_Thuong[randomC][1]

                        currTile.classList.replace(currTile.classList[3], 'focus')
                        setTimeout(function () {
                            currTile.classList.replace(currTile.classList[3], 'fc')
                        }, 900)

                        setTimeout(function () {
                            let currImg = currTile.src;
                            let otherImg = otherTile.src;
                            currTile.src = otherImg;
                            otherTile.src = currImg


                            otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                            setTimeout(function () {
                                otherTile.classList.replace(otherTile.classList[3], 'fc')
                            }, 200)
                            setTimeout(function () {
                                function delete_2_Special() {

                                    // xóa cho ô 5x  11111

                                    if ((currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xThuong(otherTile)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 5x 2222
                                    if ((otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "Xclass")) {
                                        setTimeout(function () {
                                            // console.log(otherT)

                                            xoa5xThuong(currTile)
                                        }, 300)
                                        return go = false
                                    }




                                    // xóa cho ô 5x và ô thường 1111
                                    if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
                                        &&
                                        (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
                                            otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = otherTile
                                            xoa5xDacbiet(otherTile)
                                        }, 300)
                                        return go = false
                                    }
                                    // xóa cho ô 5x và ô thường 2222
                                    if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
                                        &&
                                        (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
                                            currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                            currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            // otherT = currTile
                                            xoa5xDacbiet(currTile)
                                        }, 300)
                                        return go = false
                                    }


                                    if (otherTile.classList[2] == "fiveBlock"
                                        && currTile.classList[2] == "fiveBlock") {
                                        setTimeout(function () {
                                            xoa5x5x(0)
                                        }, 300)
                                        return go = false
                                    }

                                }
                                delete_2_Special()
                            }, 300)

                        }, 1100)

                    }
                } else

                    if (auto_N3D()[0]) {
                        var randomC = Math.floor(Math.random() * auto_N3D_last.length)


                        currTile = auto_N3D_last[randomC][0]
                        otherTile = auto_N3D_last[randomC][1]

                        currTile.classList.replace(currTile.classList[3], 'focus')
                        setTimeout(function () {
                            currTile.classList.replace(currTile.classList[3], 'fc')
                        }, 900)

                        setTimeout(function () {
                            let currImg = currTile.src;
                            let otherImg = otherTile.src;
                            currTile.src = otherImg;
                            otherTile.src = currImg


                            otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                            setTimeout(function () {
                                otherTile.classList.replace(otherTile.classList[3], 'fc')
                            }, 200)
                            setTimeout(function () {
                                function delete_2_Special() {

                                    // xóa cho ô Ngang/Dọc và Ngang/Dọc
                                    if ((currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                        currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")
                                        &&
                                        (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                        setTimeout(function () {
                                            xoaNgangDoc()
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và Ngang/Dọc
                                    if ((currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")
                                        &&
                                        (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                            otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {

                                        if (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang") {
                                            var otherTT = "Ngang"
                                        } else if (otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc") { var otherTT = "Doc" }
                                        setTimeout(function () {
                                            xoaNgang3x3(otherTT)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và Ngang/Dọc
                                    if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                        &&
                                        (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                            currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                        if (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang") {
                                            var otherTT = "Ngang"
                                        } else if (currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc") { var otherTT = "Doc" }

                                        setTimeout(function () {
                                            xoaNgang3x3(otherTT)
                                        }, 300)
                                        return go = false
                                    }

                                    // xóa cho ô 3x3 và 3x3
                                    if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                        &&
                                        (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")) {
                                        setTimeout(function () {
                                            xoa3x3vs3x3()
                                        }, 300)
                                        return go = false
                                    }
                                }
                                delete_2_Special()
                            }, 300)

                        }, 1100)
                    } else
                        if (auto_3x()[0]) {
                            // 0, 1 , 2/readycrush2(3)[1], 3/readycrush2(3)[2]]
                            var b = []
                            for (var y of auto_3x_array) {
                                b.push(y[2])
                            }
                            // 1  1
                            // 1  0
                            // 0  0
                            // 0  0

                            // b(1,1,0,0)
                            var maxInNumbers = Math.max.apply(Math, b);

                            var c = []
                            for (var y of b) {
                                if (y == maxInNumbers) {
                                    c.push(y)
                                } else { c.push(-1) }
                            }
                            // c(1,1,-1,-1)

                            var n = 0
                            var d = []
                            for (var i = 0; i < c.length; i++) {
                                if (c[i] != -1) {
                                    n++
                                    d.push(i)
                                }
                            }

                            // d (0,1)

                            if (d.length == 1) { } else { }
                            for (var y of d) {
                                console.log(auto_3x_array[y])
                            }
                            var e = []
                            for (var y of d) {
                                // console.log(auto_3x_array[y])
                                e.push(auto_3x_array[y][3])
                            }
                            // e (1, 0)

                            var maxInNumbers2 = Math.max.apply(Math, e);

                            var f = []
                            for (var y of e) {
                                if (y == maxInNumbers2) {
                                    f.push(y)
                                } else { f.push(-1) }
                            }
                            // f(1,-1)

                            var g = []
                            for (var i = 0; i < f.length; i++) {
                                if (c[i] != -1) {
                                    g.push(i)
                                }
                            }
                            // g(0)
                            // g(0, 1)
                            var y = Math.floor(Math.random() * g.length)
                            currTile = auto_3x_array[y][0]
                            otherTile = auto_3x_array[y][1]

                            currTile.classList.replace(currTile.classList[3], 'focus')
                            setTimeout(function () {
                                currTile.classList.replace(currTile.classList[3], 'fc')
                            }, 900)

                            setTimeout(function () {
                                let currImg = currTile.src;
                                let otherImg = otherTile.src;
                                currTile.src = otherImg;
                                otherTile.src = currImg


                                otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                                setTimeout(function () {
                                    otherTile.classList.replace(otherTile.classList[3], 'fc')
                                }, 200)
                                setTimeout(function () {
                                    readycrush()
                                }, 300)

                            }, 1100)

                        }

    } // Level Khó
    function medium_Play() {


        if (auto_4x()[0]) {
            // 0, 1 , 2/readycrush2(4)[1], 3/readycrush2(4)[2]]
            var b = []
            for (var y of auto_4x_array) {
                b.push(y[2])
            }
            // 1  1
            // 1  0
            // 0  0
            // 0  0

            // b(1,1,0,0)
            var maxInNumbers = Math.max.apply(Math, b);

            var c = []
            for (var y of b) {
                if (y == maxInNumbers) {
                    c.push(y)
                } else { c.push(-1) }
            }
            // c(1,1,-1,-1)

            var n = 0
            var d = []
            for (var i = 0; i < c.length; i++) {
                if (c[i] != -1) {
                    n++
                    d.push(i)
                }
            }

            // d (0,1)

            if (d.length == 1) { } else { }
            for (var y of d) {
                // console.log(auto_4x_array[y])
            }
            var e = []
            for (var y of d) {
                // console.log(auto_4x_array[y])
                e.push(auto_4x_array[y][3])
            }
            // e (1, 0)

            var maxInNumbers2 = Math.max.apply(Math, e);

            var f = []
            for (var y of e) {
                if (y == maxInNumbers2) {
                    f.push(y)
                } else { f.push(-1) }
            }
            // f(1,-1)

            var g = []
            for (var i = 0; i < f.length; i++) {
                if (c[i] != -1) {
                    g.push(i)
                }
            }
            // g(0)
            // g(0, 1)
            var y = Math.floor(Math.random() * g.length)
            currTile = auto_4x_array[y][0]
            otherTile = auto_4x_array[y][1]

            currTile.classList.replace(currTile.classList[3], 'focus')
            setTimeout(function () {
                currTile.classList.replace(currTile.classList[3], 'fc')
            }, 900)

            setTimeout(function () {
                let currImg = currTile.src;
                let otherImg = otherTile.src;
                currTile.src = otherImg;
                otherTile.src = currImg


                otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                setTimeout(function () {
                    otherTile.classList.replace(otherTile.classList[3], 'fc')
                }, 200)
                setTimeout(function () {
                    readycrush()
                }, 300)

            }, 1100)

        } else
            if (auto_Boom5x()[0]) {
                if (auto_Boom5x_Thuong.length > 0) {

                    var randomC = Math.floor(Math.random() * auto_Boom5x_Thuong.length)


                    currTile = auto_Boom5x_Thuong[randomC][0]
                    otherTile = auto_Boom5x_Thuong[randomC][1]

                    currTile.classList.replace(currTile.classList[3], 'focus')
                    setTimeout(function () {
                        currTile.classList.replace(currTile.classList[3], 'fc')
                    }, 900)

                    setTimeout(function () {
                        let currImg = currTile.src;
                        let otherImg = otherTile.src;
                        currTile.src = otherImg;
                        otherTile.src = currImg


                        otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                        setTimeout(function () {
                            otherTile.classList.replace(otherTile.classList[3], 'fc')
                        }, 200)
                        setTimeout(function () {
                            function delete_2_Special() {

                                // xóa cho ô 5x  11111

                                if ((currTile.classList[2] == "fiveBlock")
                                    &&
                                    (otherTile.classList[2] == "Xclass")) {
                                    setTimeout(function () {
                                        // otherT = otherTile
                                        xoa5xThuong(otherTile)
                                    }, 300)
                                    return go = false
                                }

                                // xóa cho ô 5x 2222
                                if ((otherTile.classList[2] == "fiveBlock")
                                    &&
                                    (currTile.classList[2] == "Xclass")) {
                                    setTimeout(function () {
                                        // console.log(otherT)

                                        xoa5xThuong(currTile)
                                    }, 300)
                                    return go = false
                                }




                                // xóa cho ô 5x và ô thường 1111
                                if ((currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock" || currTile.classList[2] == "fiveBlock")
                                    &&
                                    (otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3" ||
                                        otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                        otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                    setTimeout(function () {
                                        // otherT = otherTile
                                        xoa5xDacbiet(otherTile)
                                    }, 300)
                                    return go = false
                                }
                                // xóa cho ô 5x và ô thường 2222
                                if ((otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock" || otherTile.classList[2] == "fiveBlock")
                                    &&
                                    (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3" ||
                                        currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                        currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                    setTimeout(function () {
                                        // otherT = currTile
                                        xoa5xDacbiet(currTile)
                                    }, 300)
                                    return go = false
                                }


                                if (otherTile.classList[2] == "fiveBlock"
                                    && currTile.classList[2] == "fiveBlock") {
                                    setTimeout(function () {
                                        xoa5x5x(0)
                                    }, 300)
                                    return go = false
                                }

                            }
                            delete_2_Special()
                        }, 300)

                    }, 1100)

                }
            } else {
                var y = Math.floor(Math.random() * 2) + 1
                if (y == 1) { mottt() }
                else { haiii() }
            }

        function mottt() {
            if (auto_3x()[0]) {
                // 0, 1 , 2/readycrush2(3)[1], 3/readycrush2(3)[2]]
                var b = []
                for (var y of auto_3x_array) {
                    b.push(y[2])
                }
                // 1  1
                // 1  0
                // 0  0
                // 0  0

                // b(1,1,0,0)
                var maxInNumbers = Math.max.apply(Math, b);

                var c = []
                for (var y of b) {
                    if (y == maxInNumbers) {
                        c.push(y)
                    } else { c.push(-1) }
                }
                // c(1,1,-1,-1)

                var n = 0
                var d = []
                for (var i = 0; i < c.length; i++) {
                    if (c[i] != -1) {
                        n++
                        d.push(i)
                    }
                }

                // d (0,1)

                if (d.length == 1) { } else { }
                for (var y of d) {
                    console.log(auto_3x_array[y])
                }
                var e = []
                for (var y of d) {
                    // console.log(auto_3x_array[y])
                    e.push(auto_3x_array[y][3])
                }
                // e (1, 0)

                var maxInNumbers2 = Math.max.apply(Math, e);

                var f = []
                for (var y of e) {
                    if (y == maxInNumbers2) {
                        f.push(y)
                    } else { f.push(-1) }
                }
                // f(1,-1)

                var g = []
                for (var i = 0; i < f.length; i++) {
                    if (c[i] != -1) {
                        g.push(i)
                    }
                }
                // g(0)
                // g(0, 1)
                var y = Math.floor(Math.random() * g.length)
                currTile = auto_3x_array[y][0]
                otherTile = auto_3x_array[y][1]

                currTile.classList.replace(currTile.classList[3], 'focus')
                setTimeout(function () {
                    currTile.classList.replace(currTile.classList[3], 'fc')
                }, 900)

                setTimeout(function () {
                    let currImg = currTile.src;
                    let otherImg = otherTile.src;
                    currTile.src = otherImg;
                    otherTile.src = currImg


                    otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                    setTimeout(function () {
                        otherTile.classList.replace(otherTile.classList[3], 'fc')
                    }, 200)
                    setTimeout(function () {
                        readycrush()
                    }, 300)

                }, 1100)

            }
        }
        function haiii() {
            if (auto_N3D()[0]) {
                var randomC = Math.floor(Math.random() * auto_N3D_last.length)


                currTile = auto_N3D_last[randomC][0]
                otherTile = auto_N3D_last[randomC][1]

                currTile.classList.replace(currTile.classList[3], 'focus')
                setTimeout(function () {
                    currTile.classList.replace(currTile.classList[3], 'fc')
                }, 900)

                setTimeout(function () {
                    let currImg = currTile.src;
                    let otherImg = otherTile.src;
                    currTile.src = otherImg;
                    otherTile.src = currImg


                    otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                    setTimeout(function () {
                        otherTile.classList.replace(otherTile.classList[3], 'fc')
                    }, 200)
                    setTimeout(function () {
                        function delete_2_Special() {

                            // xóa cho ô Ngang/Dọc và Ngang/Dọc
                            if ((currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")
                                &&
                                (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                    otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {
                                setTimeout(function () {
                                    xoaNgangDoc()
                                }, 300)
                                return go = false
                            }

                            // xóa cho ô 3x3 và Ngang/Dọc
                            if ((currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")
                                &&
                                (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang" ||
                                    otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc")) {

                                if (otherTile.classList[2] == "waterNgang" || otherTile.classList[2] == "heartNgang" || otherTile.classList[2] == "melonNgang" || otherTile.classList[2] == "starNgang" || otherTile.classList[2] == "yingyangNgang" || otherTile.classList[2] == "swordNgang") {
                                    var otherTT = "Ngang"
                                } else if (otherTile.classList[2] == "waterDoc" || otherTile.classList[2] == "heartDoc" || otherTile.classList[2] == "melonDoc" || otherTile.classList[2] == "starDoc" || otherTile.classList[2] == "yingyangDoc" || otherTile.classList[2] == "swordDoc") { var otherTT = "Doc" }
                                setTimeout(function () {
                                    xoaNgang3x3(otherTT)
                                }, 300)
                                return go = false
                            }

                            // xóa cho ô 3x3 và Ngang/Dọc
                            if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                &&
                                (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang" ||
                                    currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc")) {
                                if (currTile.classList[2] == "waterNgang" || currTile.classList[2] == "heartNgang" || currTile.classList[2] == "melonNgang" || currTile.classList[2] == "starNgang" || currTile.classList[2] == "yingyangNgang" || currTile.classList[2] == "swordNgang") {
                                    var otherTT = "Ngang"
                                } else if (currTile.classList[2] == "waterDoc" || currTile.classList[2] == "heartDoc" || currTile.classList[2] == "melonDoc" || currTile.classList[2] == "starDoc" || currTile.classList[2] == "yingyangDoc" || currTile.classList[2] == "swordDoc") { var otherTT = "Doc" }

                                setTimeout(function () {
                                    xoaNgang3x3(otherTT)
                                }, 300)
                                return go = false
                            }

                            // xóa cho ô 3x3 và 3x3
                            if ((otherTile.classList[2] == "water3x3" || otherTile.classList[2] == "heart3x3" || otherTile.classList[2] == "melon3x3" || otherTile.classList[2] == "star3x3" || otherTile.classList[2] == "yingyang3x3" || otherTile.classList[2] == "sword3x3")
                                &&
                                (currTile.classList[2] == "water3x3" || currTile.classList[2] == "heart3x3" || currTile.classList[2] == "melon3x3" || currTile.classList[2] == "star3x3" || currTile.classList[2] == "yingyang3x3" || currTile.classList[2] == "sword3x3")) {
                                setTimeout(function () {
                                    xoa3x3vs3x3()
                                }, 300)
                                return go = false
                            }
                        }
                        delete_2_Special()
                    }, 300)

                }, 1100)
            } else
                if (auto_3x()[0]) {
                    // 0, 1 , 2/readycrush2(3)[1], 3/readycrush2(3)[2]]
                    var b = []
                    for (var y of auto_3x_array) {
                        b.push(y[2])
                    }
                    // 1  1
                    // 1  0
                    // 0  0
                    // 0  0

                    // b(1,1,0,0)
                    var maxInNumbers = Math.max.apply(Math, b);

                    var c = []
                    for (var y of b) {
                        if (y == maxInNumbers) {
                            c.push(y)
                        } else { c.push(-1) }
                    }
                    // c(1,1,-1,-1)

                    var n = 0
                    var d = []
                    for (var i = 0; i < c.length; i++) {
                        if (c[i] != -1) {
                            n++
                            d.push(i)
                        }
                    }

                    // d (0,1)

                    if (d.length == 1) { } else { }
                    for (var y of d) {
                        console.log(auto_3x_array[y])
                    }
                    var e = []
                    for (var y of d) {
                        // console.log(auto_3x_array[y])
                        e.push(auto_3x_array[y][3])
                    }
                    // e (1, 0)

                    var maxInNumbers2 = Math.max.apply(Math, e);

                    var f = []
                    for (var y of e) {
                        if (y == maxInNumbers2) {
                            f.push(y)
                        } else { f.push(-1) }
                    }
                    // f(1,-1)

                    var g = []
                    for (var i = 0; i < f.length; i++) {
                        if (c[i] != -1) {
                            g.push(i)
                        }
                    }
                    // g(0)
                    // g(0, 1)
                    var y = Math.floor(Math.random() * g.length)
                    currTile = auto_3x_array[y][0]
                    otherTile = auto_3x_array[y][1]

                    currTile.classList.replace(currTile.classList[3], 'focus')
                    setTimeout(function () {
                        currTile.classList.replace(currTile.classList[3], 'fc')
                    }, 900)

                    setTimeout(function () {
                        let currImg = currTile.src;
                        let otherImg = otherTile.src;
                        currTile.src = otherImg;
                        otherTile.src = currImg


                        otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                        setTimeout(function () {
                            otherTile.classList.replace(otherTile.classList[3], 'fc')
                        }, 200)
                        setTimeout(function () {
                            readycrush()
                        }, 300)

                    }, 1100)

                }
        }


    } // Level Trung Bình
    function easy_Play() {
        var answer = 0
        if (auto_3x()[0]) {
            // 0, 1 , 2/readycrush2(3)[1], 3/readycrush2(3)[2]]
            var b = []
            for (var y of auto_3x_array) {
                b.push(y[2])
            }
            // 1  1
            // 1  0
            // 0  0
            // 0  0

            // b(1,1,0,0)
            var maxInNumbers = Math.max.apply(Math, b);

            var c = []
            for (var y of b) {
                if (y == maxInNumbers) {
                    c.push(y)
                } else { c.push(-1) }
            }
            // c(1,1,-1,-1)

            var n = 0
            var d = []
            for (var i = 0; i < c.length; i++) {
                if (c[i] != -1) {
                    n++
                    d.push(i)
                }
            }

            // d (0,1)

            if (d.length == 1) { } else { }
            for (var y of d) {
                // console.log(auto_3x_array[y])
            }
            var e = []
            for (var y of d) {
                // console.log(auto_3x_array[y])
                e.push(auto_3x_array[y][3])
            }
            // e (1, 0)

            var maxInNumbers2 = Math.max.apply(Math, e);

            var f = []
            for (var y of e) {
                if (y == maxInNumbers2) {
                    f.push(y)
                } else { f.push(-1) }
            }
            // f(1,-1)

            var g = []
            for (var i = 0; i < f.length; i++) {
                if (c[i] != -1) {
                    g.push(i)
                }
            }
            // g(0)
            // g(0, 1)
            var y = Math.floor(Math.random() * g.length)
            currTile = auto_3x_array[y][0]
            otherTile = auto_3x_array[y][1]

            currTile.classList.replace(currTile.classList[3], 'focus')
            setTimeout(function () {
                currTile.classList.replace(currTile.classList[3], 'fc')
            }, 900)

            setTimeout(function () {
                let currImg = currTile.src;
                let otherImg = otherTile.src;
                currTile.src = otherImg;
                otherTile.src = currImg


                otherTile.classList.replace(otherTile.classList[3], 'outFocus')
                setTimeout(function () {
                    otherTile.classList.replace(otherTile.classList[3], 'fc')
                }, 200)
                setTimeout(function () {
                    readycrush()
                }, 300)

            }, 1100)

        }

    } // Level Dễ
}

