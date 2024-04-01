/* 3번 문제 답안을 작성해주세요. */
function solution(arr) {
  let answer = [];
  let tmp = 2147483647;
  let deleteAddress;
  if (arr.length <= 1) return [-1];
  else {
    arr.map(function (num, idx) {
      if (tmp > num) {
        tmp = num;
        deleteAddress = idx;
      }
    });
    arr.splice(deleteAddress, 1);
  }

  return arr;
}
