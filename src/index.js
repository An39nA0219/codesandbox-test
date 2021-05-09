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
// function func1(str) {
//   return str;
// }
// console.log(func1("hello"));

// const func2 = function (str) {
//   return str;
// };

// console.log(func2("ciao"));

// //  アロー関数
// const func3 = (str) => {
//   return str;
// };

// console.log(func3("こんにちは"));

// // アロー関数は、処理が1行の場合は、return不要、また{}も不要

// const func4 = (num1, num2) => num1 + num2;
// console.log(func4(10, 20));

/**
 * 分割代入
 */

/**
 * 多分、分割代入って、基本的には配列とか、ハッシュとか、同じまとまりになっているものを、
 * 一括で分けてそれぞれを変数に入れるということっぽい！
 */

// 従来
// const myprofile = {
//   name: "uchida",
//   age: 29
// };

// const message = `${myprofile.name}は${myprofile.age}歳です`;
// console.log(message);

// //  分割代入
// // ↓は、myprofileのハッシュを順番に、name,ageという変数にそれぞれ入れてあげるということ
// //  myprofileの中にはnameオブジェクトとageオブジェクトがある。
// // nameはnameという変数に代入、ageはageという変数に台有することができるが、
// // 例えば、nameをname1とかオブジェクト名と違う変数に入れようとするとエラーになる。
// const { name, age } = myprofile;
// const message1 = `${name}は${age}歳です`;
// console.log(message1);

// //  配列の分割代入
// // 従来
// const array = ["anna", "yuna", "reina"];
// const message2 = `${array[0]}と${array[1]}と${array[2]}は兄弟です`;
// console.log(message2);

// //  分割代入。配列の場合は、前から順番にこちらで指定した変数に入っていく
// const [name1, name2, name3] = array;
// const message3 = `${name1}と${name2}と${name3}は兄弟です`;
// console.log(message3);

/**
 * デフォルト値
 */

//  関数に対して、デフォルト値を決めて置ける。
// 例えば変数の中身がundefinedだった時に、undefinedではなく、指定のデフォルト値を代わりに出すことができる。

// const sayHello = (name = "guest") => {
//   return `${name}さん、こんにちは～`;
// };

// console.log(sayHello("anna"));

// console.log(sayHello());

// // 上のように、name= "guest"と入れておけば、何も引数が入っていないときにguestが入る。

/**
 * スプレッド構文　...というように書く
 */

//  配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);
// // console.log(arr1); => [1, 2]だったのが
// // console.log(...arr1);　=>ただの1と2になる

// const sum = (num1, num2) => {
//   console.log(num1 + num2);
// };
// sum(arr1[0], arr1[1]);

// // このようにarr1の中身を展開して合算したいときにはarr[0],arr[1]のように入れなければいけないが、
// // スプレッド構文を使うと簡単に展開ができる。
// sum(...arr1);

// // 1つにまとめえるのもスプレッド構文で出来る
// const arr2 = [1, 2, 3, 4, 5];
// // 分割代入で配列を各変数に入れてみる処理
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3); // => [3, 4, 5]
// // このように、...num3として分割代入すると、num1に入った1,num2に入った2以降のものが配列として入ってくれる。

// // 配列のコピーや結合等でも使える
// const arr3 = [10, 20];
// const arr4 = [30, 40];

// const arr5 = [...arr3];
// console.log(arr5); //[10, 20]
// const arr6 = [...arr3, ...arr4];
// console.log(arr6); //[10, 20, 30, 40]

// // このようにするとarr3の中身だけをコピーできる。
// // なぜコピーするときにarr5 = arr3としないかというと、
// const arr7 = arr3;
// console.log(arr7); //[10, 20]
// //というようになるが、arr3とarr7のつながりを保ったままなので、arr7を変更すると、arr3まで変更されてしまう。
// arr7[0] = 37;
// console.log(arr7); //[37, 20]
// console.log(arr3); //[37, 20]

/**
 * map,filterの配列処理
 */

// const arr1 = ["anna", "yuna", "reina"];

// for (let i = 0; i < arr1.length; i++) {
//   console.log(`${i + 1}番目は${arr1[i]}`);
// }

// //  mapを使った処理
// const arr2 = arr1.map((name, i) => {
//   return `${i + 1}番目は${name}`;
// });

// console.log(arr2);
// // mapは、ruby とかで言う所の、names.each do |name|{}みたいな感じで、
// // arr1をmapする、そこから1個ずつnameという疑似的な変数に代入する⇒変数で処理をする、みたいな感じで書ける。

// const arr3 = arr1.map((name, i) => {
//   console.log(`${i + 1}番目は${name}`);
// });

// const newNameArr = arr1.map((name) => {
//   if (name === "anna") {
//     return console.log(name);
//   } else {
//     return console.log(`${name}さん`);
//   }
// });

// // filter
// // ある条件に一致したものだけ取り出すような感じ
// const numArr = [1, 2, 3];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件?　条件がtrueの時：条件がfalseの時
const val1 = 1 > 0 ? "true" : "false";
console.log(val1);
// 簡単なif,elseを1行で表せる

const num = 1300;
// console.log(num.toLocaleString()); //toLocaleStringをすることで、数値が来た時だけ1,300みたいにカンマで区切ってくれる

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力して下さい";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "100未満です";
};
console.log(checkSum(1, 3));
console.log(checkSum(85, 19));
