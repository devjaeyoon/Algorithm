function solution(str1, str2) {
  if (str1.toLowerCase() === str2.toLowerCase()) return 65536;

  const regExp = /^[a-z]+$/;
  const str1Words = [];
  const str2Words = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const str1Word = str1.slice(i, i + 2).toLowerCase();
    if (regExp.test(str1Word)) {
      str1Words.push(str1Word);
    }
  }

  for (let i = 0; i < str2.length - 1; i++) {
    const str2Word = str2.slice(i, i + 2).toLowerCase();
    if (regExp.test(str2Word)) {
      str2Words.push(str2Word);
    }
  }

  str1Words.sort();
  str2Words.sort();

  let union = 0;
  let intersection = 0;

  for (let i = 0; i < str1Words.length; i++) {
    if (str2Words.indexOf(str1Words[i]) >= 0) {
      intersection++;
      str2Words.splice(str2Words.indexOf(str1Words[i]), 1);
    }
    union++;
  }
  union += str2Words.length;

  return Math.floor((intersection / union) * 65536);
}
