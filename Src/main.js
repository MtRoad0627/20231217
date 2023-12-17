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
    // await Sleep(1000) //一時停止、ミリ秒
    // DrawText("待った", 300, 400)

    // 無限ループ
    // for (let cnt = 0; ; cnt++){
    //     DrawText("無限ループ", 300, 300 + cnt) //これだと長引く

    //     await Sleep(10) //休憩時間、冷却時間
    // }

    //四角形表示
    // SetColor("red")
    // DrawRect(100, 150, 300, 200)

    // await Sleep(1000)

    // SetColor("blue")
    // DrawRect(0, 0, 800, 600)

    // for (let cnt = 0; ; cnt++){
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     SetColor("black")
    //     DrawText("無限ループ", 300, 300 + cnt) //これだと長引く

    //     await Sleep(10) //休憩時間、冷却時間
    // }

    // if (1 == 1){
    //     DrawText("1 == 1", 300, 300)
    // }
    // else{
    //     DrawText("1 != 1, 300, 300")
    // }

    // if (1 != 2){
    //     DrawText("1 != 2", 300, 400)
    // }
    // else{
    //     DrawText("1 != 1, 300, 300")
    // }

    // if (!(1 == 2)){
    //     DrawText("!(1 == 2)", 300, 500)
    // }
    // else{
    //     DrawText("1 != 1, 300, 300")
    // }

    // if (1 == 1 && 2 == 2){
    //     DrawText("aaa", 300, 100)
    // }

    // for (let cnt = 0; ; cnt++){
    //     //消去
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     SetColor("black")
    //     if (GetKey("KeyA")){
    //         DrawText("Space", 300, 300)
    //     }

    //     await Sleep(10) //休憩時間、冷却時間
    // }

    //移動
    // let x = 300
    // let y = 300
    // let speed = 3
    // for (let cnt = 0; ; cnt++){
    //     //消去
    //     SetColor("white")
    //     DrawRect(0, 0, 800, 600)

    //     SetColor("black")
    //     DrawText("a", x, y)

    //     if (GetKey("ArrowRight")){
    //         x += speed
    //     }
    //     if (GetKey("ArrowLeft")){
    //         x -= speed
    //     }
    //     if (GetKey("ArrowUp")){
    //         y -= speed
    //     }
    //     if (GetKey("ArrowDown")){
    //         y += speed
    //     }

    //     await Sleep(10) //休憩時間、冷却時間
    // }

    //配列
    // let a = [1, 2, 3]
    // for (let cnt = 0; cnt < a.length /*aの要素数*/; cnt++)
    // DrawText(a[1], 300, 300)

    class Bullet {
        constructor(x, y){
            this.x = x
            this.y = y
        }

        //弾を
        Draw(){

        }
    }

    let x = 300
    let y = 300
    let speed = 3
    let bullets = []
    for (let cnt = 0; ; cnt++){
        //消去
        SetColor("white")
        DrawRect(0, 0, 800, 600)

        //プレイヤー
        SetColor("black")
        DrawText("a", x, y)

        //弾を描く
        SetColor("red")
        for (let cnt = 0; cnt < bullets.length; cnt++){
            DrawCircle(bullets[cnt].x, bullets[cnt].y, 10)
        }

        //弾を生成
        //1フレームあたり10％の確率で弾を生成
        if (Math.random() < 0.1){
            let x = Math.random() * 800
            let y = Math.random() * 100
            bullets.push(new Bullet(x, y)) //リストに追加(python:append)
        }

        //移動
        if (GetKey("ArrowRight")){
            x += speed
        }
        if (GetKey("ArrowLeft")){
            x -= speed
        }
        if (GetKey("ArrowUp")){
            y -= speed
        }
        if (GetKey("ArrowDown")){
            y += speed
        }

        await Sleep(10) //休憩時間、冷却時間
    }
}