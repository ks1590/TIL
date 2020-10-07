// 関数宣言
function hoge() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  return year + "年" + month + "月" + day + "日";
}
document.getElementById('realbox').value = hoge()

// 関数式
let hoge = function () {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  return year + "年" + month + "月" + day + "日";
}
document.getElementById('realbox').value = hoge()

// 匿名関数＋コールバック関数
function confirmed(fn) {
  if (window.confirm("日付を取得しますか？")) {
    fn();
  }
}
confirmed(function () {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  console.log(year + "年" + month + "月" + day + "日")
})


// アロー関数
let hoge = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();

  return year + "年" + month + "月" + day + "日";
}
document.getElementById('realbox').value = hoge()