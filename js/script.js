// HTML要素を取得
const offElement = document.querySelector('.off');
const onElement = document.querySelector('.on');
const body = document.querySelector('body');

// off要素がクリックされたときの処理
offElement.addEventListener('click', () => {
  // offにactionクラスを付与し、onのactionクラスを削除
  offElement.classList.add('action');
  onElement.classList.remove('action');
  // bodyからhiddenクラスを削除
  body.classList.remove('hidden');
});

// on要素がクリックされたときの処理
onElement.addEventListener('click', () => {
  // onにactionクラスを付与し、offのactionクラスを削除
  onElement.classList.add('action');
  offElement.classList.remove('action');
  // bodyにhiddenクラスを追加
  body.classList.add('hidden');
});
