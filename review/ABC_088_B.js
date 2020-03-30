// ABC 088

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const N = parseInt(input[0],10); //要素数
  var a = input[1].split(" ");
  var alice = new Array();
  var bob = new Array();

  // 降順
  a.sort(
    function(a,b){
      return (parseInt(a,10) < parseInt(b,10) ? 1 : -1);
    }
  );

  // 各配列に数値を割り振る
  for(var i=0;i<N;i++) {
    var s = parseInt(a[i],10);
    if(i%2 == 0) {
      alice.push(s);
    } else {
      bob.push(s);
    }
  }

  // 産出
  var alice_total = total(alice);
  var bob_total = total(bob);
  var result = alice_total - bob_total;
  console.log(result);
}

function total(tmp) {
  var sum = 0;
  for(var i=0;i<tmp.length;i++)sum+=tmp[i];
  return sum;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
