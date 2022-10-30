function createStack() {
  let items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5
console.log(stack.items); // => undefined
/*
 *  When we create a local variable inside createStack() method
 *  it is no longer accessible outside the method unless we expose it manually somehow,
 *  Since, createStack() method only returns an object with two methods (push & pop)
 *  stack.items logs undefined.
 *
 *
 */
