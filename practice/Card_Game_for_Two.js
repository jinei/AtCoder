// ABC 088

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const N = input[0];
  var a = input[1].split(" "); //全てのカード

  // 降順
  a.sort(
    function(x,y) {
      return (parseInt(x,10) < parseInt(y,10) ? 1: -1);
    }
  )

  var alice_number = 0,
  bob_number = 0;

  a.forEach(function(value,index) {
    // Alice
    if(index % 2 == 0) {
      alice_number += parseInt(value,10);
    }
    // Bob
    else {
      bob_number += parseInt(value,10);
    }
  })

  console.log(alice_number-bob_number);

}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
