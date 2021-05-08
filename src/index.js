/**
 * const.letについて
 */

// var val1 = "var変数";

// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "kakikukeko";
// console.log(val1);

// let val2 = "rabbit";
// console.log(val2);

// val2 = "panda";
// console.log(val2);

// const var3 = "banana";
// console.log(var3);

// const var4 = {
//   name: "anna",
//   age: 28
// };
// var4.name = "yuna";
// var4.hobby = "sing";
// console.log(var4);

// const var5 = ["dog", "bird"];
// var5[0] = "elephant";
// var5.push("cat");
// console.log(var5);

/**
 * varは一昔前の変数定義方法。上書き、再定義可。
 * -------
 * ↓ES6以降
 * letは上書き可、再定義不可。
 * constは上書き、再定義不可。
 *
 * constはオブジェクト{}入れられる。
 * const内のオブジェクトは書き換え可。
 * const内のオブジェクトの書き換えは、
 * const.xxxみたいな感じで、ドットを入れて行う。
 *
 * constは配列[]入れられる。
 * const内のオブジェクトは書き換え可。
 * オブジェクトに追加も可。
 *
 * 自薦の場ではほぼconstを使う。
 */

/**
 * テンプレート文字列
 */

// const name = "anna";
// const age = 28;

// console.log("私の名前は" + name + "です。年齢は" + age + "です。");
// console.log(`私の名前は${name}です。年齢は${age}です。`);

// バッククォートを使うと文字列に変数を入れ込むような者が見やすくなる。

/**
 * アロー関数
 */
// 従来の書き方
function func1(str) {
  return str;
}
console.log(func1("hello"));

const func2 = function (str) {
  return str;
};

console.log(func2("ciao"));

//  アロー関数
const func3 = (str) => {
  return str;
};

console.log(func3("こんにちは"));

// アロー関数は、処理が1行の場合は、return不要、また{}も不要

const func4 = (num1, num2) => num1 + num2;
console.log(func4(10, 20));
