function solution(n, a, b) {
  let currentA = a;
  let currentB = b;
  let answer = 1;

  while (Math.floor((currentA + 1) / 2) !== Math.floor((currentB + 1) / 2)) {
    currentA = Math.floor((currentA + 1) / 2);
    currentB = Math.floor((currentB + 1) / 2);
    answer++;
  }

  return answer;
}
