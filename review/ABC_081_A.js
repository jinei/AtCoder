//ABC 081

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("");
  const s1 = parseInt(input[0],10);
  const s2 = parseInt(input[1],10);
  const s3 = parseInt(input[2],10);
  var sum = s1+s2+s3;
  console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
