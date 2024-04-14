const words = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function solution(msg) {
  const answer = [];
  let word = msg;

  while (word.length !== 0) {
    for (let i = word.length; i >= 1; i--) {
      if (words.includes(word.slice(0, i))) {
        answer.push(words.indexOf(word.slice(0, i)) + 1);
        if (word.length === word.slice(0, i).length) {
          word = '';
          break;
        }
        words.push(word.slice(0, i + 1));
        word = word.slice(i, word.length + 1);
        break;
      }
    }
  }

  return answer;
}
