/* 2번 문제 답안을 작성해주세요. */
function solution(n) {
  let tmp = 1;
  let ans = 1;
  while (1) {
    tmp *= ans;
    if (tmp >= n) break;
    ans++;
  }
  if (tmp > n) ans -= 1;
  return ans;
}
