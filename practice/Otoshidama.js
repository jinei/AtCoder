// ABC 085

// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  const N = parseInt(input[0],10); //枚数
  const Y = parseInt(input[1],10); //金額
  var result = "-1 -1 -1";

  for(var a=0;a<=N;a++) {
    for (var b=0;b<=N;b++) {
      var c = N - b - a;
      if(c<0)c = 0;
      var sum_money = a*10000 + b*5000 + c*1000;
      var sum_count = a + b + c;
      if(Y == sum_money && N == sum_count) {
        result = a + " " + b + " " + c + " ";
      }
    }
  }
  console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
