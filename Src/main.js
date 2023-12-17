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
    // let a = 1 //変数を作るときは"let"をつける
    // DrawText(a, 300, 300)

    // a = 2
    // DrawText(a, 400, 400)

    // a += 1
    // DrawText(a, 500, 500)

    //ループ
    // for (let cnt = 0; cnt < 3 /*繰り返す回数*/ ; cnt++){
    //     DrawText(cnt, 300, 300 + cnt * 100)
    // }
    //無限ループ
    // for (;;){
    //     DrawText("無限ループ", 300, 300)
    // }

    //待て
    // DrawText("待って", 300, 300)
    // await sleep(1) //一時停止、ミリ秒
    // DrawText("待った", 300, 400)

    無限ループ
    for (let cnt = 0; ; cnt++){
        DrawText("無限ループ", 300, 300 + cnt) //これだと長引く

        await sleep(1) //休憩時間、冷却時間
    }
}