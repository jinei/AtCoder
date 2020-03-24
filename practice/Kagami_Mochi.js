// ABC 085

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  input.splice(0,1); //先頭削除

  // 重複を削除したリスト
  var arr = input.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });

  console.log(arr.length-1) //要素数の入力分マイナス１をする
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
