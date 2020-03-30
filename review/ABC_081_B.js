// ABC 081

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const N = parseInt(input[0],10);
  const arr = input[1].split(" ");
  var count = 0;

  while(true) {
    var flag = 0;
    for(var i=0;i<N;i++) {
      var A = parseInt(arr[i],10);
      //偶数
      if(A%2 == 0) {
        arr[i] = A / 2;
        // 奇数
      } else {
        flag = 1;
      }
    }
    if(flag==0){count++;}
    else {break;}
  }
  console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
