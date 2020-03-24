// ABC 083

// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  const N = parseInt(input[0],10);
  const A = parseInt(input[1],10);
  const B = parseInt(input[2],10);

  var arr = new Array() //A以上B以下の数値を一時的に入れる配列

  for(var n=0;n<=N;n++) {
    var tmp = n.toString().split(""); //一桁ごとに抽出
    var number = 0;

    // 抽出した値を一桁ずつ加算
    for(var t=0;t<tmp.length;t++) {
      number += parseInt(tmp[t],10);
    }
    if(number >= A && number <= B) arr.push(n);
  }

  var sum = 0; //合計の値
  for(var a=0;a<arr.length;a++) {
    sum += arr[a];
  }

  console.log(sum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
