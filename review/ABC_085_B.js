// ABC085

// inputに入力データ全体が入る
function Main(input) {
  var arr = input.split("\n");
  arr.shift(); //先頭は要素数なのでいらない
  // 重複を削除したリスト
  arr = arr.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  console.log(arr.length-1); //先頭の要素数は空白の状態で存在するのでその分-1
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
