### Exercise 3.3

## What is the output of the below problem and why?

```
function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

```

## Explanation

- The output for the above is `Count is 0`

- increment() method gets called 3 times which increases the value of count to 3.

- Since, message is initialised with a string literal where 'count' equals 0, output could have been `Count is 3` if message variable would have been updated in increment method.
