/**
 * const.letについて
 */

var val1 = "var変数";

console.log(val1);

val1 = "上書き";
console.log(val1);

var val1 = "kakikukeko";
console.log(val1);

let val2 = "rabbit";
console.log(val2);

val2 = "panda";
console.log(val2);

const var3 = "banana";
console.log(var3);

const var4 = {
  name: "anna",
  age: 28
};
var4.name = "yuna";
var4.hobby = "sing";
console.log(var4);

const var5 = ["dog", "bird"];
var5[0] = "elephant";
var5.push("cat");
console.log(var5);

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
