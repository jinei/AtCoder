// ABC 086

//inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  var a = parseInt(input[0],10);
  var b = parseInt(input[1],10);
  var result = "Odd"; //結果表示用 初期値は奇数の時の結果
  if((a*b)%2 == 0) {
    result = "Even";
  }
  console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
