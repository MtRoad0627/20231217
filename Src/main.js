async function main() {
    // DrawText("sjbhfkjshsurhfiua", 100, 100)
    // DrawText(12847, 300, 500)

    // SetColor("red")
    // DrawText("あああ", 100, 300)

    // SetColor("#33FFCA")
    // DrawText("kjfshk", 300, 300)

    //計算
    // DrawText(1+1, 300, 300)
    // DrawText(1-1, 400, 400)
    // DrawText(3%2, 200, 200)

    //変数
    SetFont("50px arial")
    let a = 1 //変数を作るときは"let"をつける
    DrawText(a, 300, 300)

    a = 2
    DrawText(a, 400, 400)

    a += 1
    DrawText(a, 500, 500)
}