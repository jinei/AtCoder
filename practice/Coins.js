// ABC 087

// inputに入力データ全体が入る
function Main(input) {
  input = input.split("\n");
  const five_hundreds = parseInt(input[0],10); //500円硬貨の数
  const hundreds = parseInt(input[1],10); //100円硬貨の数
  const fifty = parseInt(input[2],10); //50円硬貨の数
  const total = parseInt(input[3],10); //合計金額

  var count = 0; //何通りかをカウントする
  for (var a=0;a<=five_hundreds;a++) {
    for (var b=0;b<=hundreds;b++) {
      for(var c=0;c<=fifty;c++) {
        var sum = (a*500) + (b*100) + (c*50);
        if(total == sum) count++;
      }
    }
  }

  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
