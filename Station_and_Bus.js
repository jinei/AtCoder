// inputに入力データ全体が入る
function Main(input) {
  var result = ""; //結果を表示

  // input[0]...一つ目の文字 input[1]...二つ目の文字 input[2]...三つ目の文字
  if(input[0] == input[1] && input[0] == input[2]) {
    result = "No";
  } else {
    result = "Yes";
  }
  console.log(result)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
