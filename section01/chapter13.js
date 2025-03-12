function main(value) {
  // console.log(value);
  value();
}

function sub() {
  console.log("iam sub");
}
main(sub);

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, () => console.log(idx));
repeat(5, () => console.log(idx * 2));
