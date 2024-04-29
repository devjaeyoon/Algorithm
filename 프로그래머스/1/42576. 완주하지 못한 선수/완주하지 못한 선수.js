function solution(participant, completion) {
  const result = {};

  for (const player of participant) {
    result[player] ? (result[player] += 1) : (result[player] = 1);
  }

  for (const player of completion) {
    result[player] -= 1;
  }

  for (const key in result) {
    if (result[key] !== 0) {
      return key;
    }
  }
}
