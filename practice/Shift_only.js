// ABC 081

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n")
  var n = input[0]; //個数
  var tmp = input[1].split(" ") //数値
  var count = 0;

  var flag = check(tmp)
  while(flag==0) {
    tmp = caculation(tmp)
    count++;
    flag = check(tmp)
  }
  console.log(count)
}

function check(tmp) {
  var flag = 0;
  for(var i=0;i<tmp.length;i++) {
    if(tmp[i]%2 == 1) flag = 1;
  }
  return flag;
}

function caculation(tmp) {
  for(var i=0;i<tmp.length;i++) {
    tmp[i] = tmp[i] / 2;
  }
  return tmp;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
