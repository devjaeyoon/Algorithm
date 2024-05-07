function solution(operations) {
  const arr = [];

  for (const operation of operations) {
    const [cmd, data] = operation.split(' ');

    if (cmd === 'I') {
      arr.push(Number(data));
      continue;
    }

    if (cmd === 'D') {
      if (arr.length !== 0) {
        if (data === '-1') {
          arr.splice(arr.indexOf(Math.min(...arr)), 1);
        }
        if (data === '1') {
          arr.splice(arr.indexOf(Math.max(...arr)), 1);
        }
      }
    }
  }

  if (arr.length === 0) return [0, 0];
  if (arr.length === 1) return [arr[0], arr[0]];

  return [Math.max(...arr), Math.min(...arr)];
}
