function solution(cacheSize, cities) {
  if (cacheSize === 0) return 5 * cities.length;

  const copiedCities = [];

  for (let city of cities) {
    copiedCities.push(city.toLowerCase());
  }

  const cache = [];
  let executionTime = 0;

  for (let i = 0; i < copiedCities.length; i++) {
    if (cache.length === cacheSize) {
      if (cache.includes(copiedCities[i])) {
        cache.splice(cache.indexOf(copiedCities[i]), 1);
        cache.push(copiedCities[i]);
        executionTime += 1;
      } else {
        cache.shift();
        cache.push(copiedCities[i]);
        executionTime += 5;
      }
    } else {
      if (cache.includes(copiedCities[i])) {
        cache.splice(cache.indexOf(copiedCities[i]), 1);
        cache.push(copiedCities[i]);
        executionTime += 1;
      } else {
        cache.push(copiedCities[i]);
        executionTime += 5;
      }
    }
  }

  return executionTime;
}
