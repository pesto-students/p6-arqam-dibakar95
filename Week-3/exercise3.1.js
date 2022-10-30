function add(a = 0, b = 0) {
  return a + b;
}

const memoize = (fn) => {
  let cache = {};
  return (...args) => {
    let x = JSON.stringify(args);
    if (x in cache) {
      return cache[x];
    } else {
      let result = fn(args[0], args[1]);
      cache[x] = result;
      return result;
    }
  };
};
const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100));
console.log(memoizeAdd(100));
console.log(memoizeAdd(100, 200));
console.log(memoizeAdd(100, 100));
