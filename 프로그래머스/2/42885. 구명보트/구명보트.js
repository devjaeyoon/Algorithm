function solution(people, limit) {
  const ascSortedPeople = [...people].sort((a, b) => a - b);
  let left = 0;
  let right = ascSortedPeople.length - 1;
  let cnt = 0;

  while (left <= right) {
    if (ascSortedPeople[left] + ascSortedPeople[right] > limit) {
      right -= 1;
    } else if (ascSortedPeople[left] + ascSortedPeople[right] <= limit) {
      left += 1;
      right -= 1;
    }
    cnt += 1;
  }

  return cnt;
}
