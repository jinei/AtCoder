// ABC083

// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  const N = parseInt(input[0],10);
  const A = parseInt(input[1],10);
  const B = parseInt(input[2],10);
  var sum = 0;
  for(var i=0;i<=N;i++) {
    // flagが0なら計算 1なら無視
    var flag = total(i,A,B)
    if(flag==0)sum += i;
  }
  console.log(sum)
}

function total(s,A,B) {
  var tmp = s.toString().split("");
  var sum = 0;
  var flag = 1;
  // 格桁の計算
  for(var i=0;i<tmp.length;i++) {
    sum += parseInt(tmp[i],10);
  }
  // 計算結果がA以上B以下か
  if(sum>=A && sum<=B) flag = 0;
  return flag;
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
