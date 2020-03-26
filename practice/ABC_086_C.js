// ABC 085

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");

  const N = parseInt(input[0],10); //行数
  const arr = input.slice(1,N+1); //配列の[1]から最後まで
  var flag = 0; //0がYes 1がNo

  // 要素分繰り返す
  arr.forEach(function(value,index) {
    var t = parseInt(value.split(" ")[0],10); //時間
    var x = parseInt(value.split(" ")[1],10); //x位置
    var y = parseInt(value.split(" ")[2],10); //y位置
    var sum = x + y; //xとyの合計位置

    if(t >= sum && sum % 2 == t % 2) {
      flag += 0;
    } else {
      flag += 1;
    }
  })
  if(flag == 0) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
