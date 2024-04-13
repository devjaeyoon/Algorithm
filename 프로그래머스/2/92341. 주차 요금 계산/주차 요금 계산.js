function solution(fees, records) {
  const parkingLot = {};
  const result = [];

  for (let record of records) {
    const [time, carNumber, type] = record.split(' ');

    if (type === 'IN') {
      if (!Object.keys(parkingLot).includes(carNumber)) {
        parkingLot[carNumber] = {};
        parkingLot[carNumber]['entryTime'] = time;
        parkingLot[carNumber]['duration'] = 0;
        continue;
      }
      parkingLot[carNumber]['entryTime'] = time;
    }

    if (type === 'OUT') {
      const [beforeHH, beforeMM] =
        parkingLot[carNumber]['entryTime'].split(':');
      const [afterHH, afterMM] = time.split(':');

      parkingLot[carNumber]['entryTime'] = '';
      parkingLot[carNumber]['duration'] +=
        afterHH * 60 + Number(afterMM) - (beforeHH * 60 + Number(beforeMM));
    }
  }

  for (let car of Object.keys(parkingLot)) {
    if (parkingLot[car]['entryTime'] !== '') {
      const [beforeHH, beforeMM] = parkingLot[car]['entryTime'].split(':');

      parkingLot[car]['duration'] += 1439 - (beforeHH * 60 + Number(beforeMM));
    }
  }

  const sortedCarNumber = Object.keys(parkingLot).sort(
    (a, b) => Number(a) - Number(b)
  );

  for (let car of sortedCarNumber) {
    if (parkingLot[car]['duration'] < fees[0]) {
      result.push(fees[1]);
      continue;
    }
    result.push(
      fees[1] +
        Math.ceil((parkingLot[car]['duration'] - fees[0]) / fees[2]) * fees[3]
    );
  }

  return result;
}