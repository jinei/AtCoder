// ABC085

// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ");
  const N = parseInt(input[0],10);
  const Y = parseInt(input[1],10);
  var result = "-1 -1 -1";

  for(var x=0;x<=N;x++) {
    for(var y=0;y<=N;y++) {
      var z = N - (x+y);
      if(z < 0)z = 0;
      var total = x + y + z;
      var sum = (x*10000) + (y*5000) + (z*1000);
      if(total==N && sum==Y) result = x+" "+y+" "+z;
    }
  }
  console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
