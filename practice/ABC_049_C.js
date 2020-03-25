// ABC 049

// inputに入力データ全体が入る
function Main(input) {
  var str = input.split("\n")[0];
  str = str.replace(/eraser/g, '0');
  str = str.replace(/erase/g, '0');
  str = str.replace(/dreamer/g, '0');
  str = str.replace(/dream/g, '0');
  str = str.replace(/0/g, '');
  if(str === '') {
    console.log('YES');
  } else {
    console.log("NO");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
