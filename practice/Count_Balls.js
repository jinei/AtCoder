"use strict";

// inputに入力データ全体が入る
function Main(input) {
  input = input.split(" ")

  var n = parseInt(input[0],10)
  var b = parseInt(input[1],10)
  var r = parseInt(input[2],10)
  var m = b + r
  var result = 0
  result = Math.floor((n/m)) * b + Math.min(b,n % m)
  console.log(result.toString())
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
