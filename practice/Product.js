// ABC 086

// inputに入力データ全体が入る
function Main(input) {
  var input = input.split(" ");
  var a = parseInt(input[0],10);
  var b = parseInt(input[1],10);

  // 偶数
  if((a*b) % 2 == 0) {
    console.log("Even")
    // 奇数
  } else {
    console.log("Odd")
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
