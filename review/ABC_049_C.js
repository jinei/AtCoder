// ABC049

// inputに入力データ全体が入る
function Main(input) {
  var S = reverse(input.split("\n")[0].toString()); //入力された文字を逆さに

  // 各文字列を逆さにする
  const a = reverse("dream");
  const b = reverse("dreamer");
  const c = reverse("erase");
  const d = reverse("eraser");

  var result = "YES"; //結果表示用

  // 前方一致
  while(S.length > 0) {
    if(!S.indexOf(a)){
      S = S.slice( a.length ) ;
    } else if(!S.indexOf(b)){
      S = S.slice( b.length ) ;
    } else if(!S.indexOf(c)){
      S = S.slice( c.length ) ;
    } else if(!S.indexOf(d)){
      S = S.slice( d.length ) ;
    } else {
      result = "NO";
      break;
    }
  }
  console.log(result);
}

// 文字逆さ
function reverse(s) {
  var tmp = s.split("");
  var str = "";
  for(var i=tmp.length-1;i>=0;i--) {
    str += tmp[i].toString();
  }
  return str;
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
