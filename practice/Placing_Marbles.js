// ABC 081

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("");
  var result = parseInt(input[0],10) + parseInt(input[1],10) + parseInt(input[2],10);
  console.log(result)
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
