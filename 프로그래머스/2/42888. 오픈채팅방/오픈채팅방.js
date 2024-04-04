function solution(record) {
  const userObject = {};
  const result = [];

  for (let log of record) {
    const [type, uid, nickname] = log.split(' ');

    if (type === 'Enter') {
      userObject[uid] = nickname;
      result.push(`${uid}님이 들어왔습니다.`);
    }

    if (type === 'Change') {
      userObject[uid] = nickname;
    }

    if (type === 'Leave') {
      result.push(`${uid}님이 나갔습니다.`);
    }
  }

  for (let i = 0; i < result.length; i++) {
    const uidEndIndex = result[i].indexOf('님');
    const uid = result[i].slice(0, uidEndIndex);
    const slicedRecord = result[i].slice(uidEndIndex, result[i].length + 1);

    result[i] = userObject[uid] + slicedRecord;
  }

  return result;
}