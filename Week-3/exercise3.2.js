const person = {
  fullName: function (randomMessage) {
    return `Hello, ${this.firstName} ${this.lastName} ${randomMessage}`;
  },
};

const personOne = {
  firstName: "John",
  lastName: "Doe",
};

const personTwo = {
  firstName: "Jo",
  lastName: "Gerada",
};

let fullNameBind = person.fullName.bind(personOne, "--Binding");
let fullNameCall = person.fullName.call(
  { firstName: "Sarah", lastName: "Holmes" },
  "--Calling"
);
let fullNameApply = person.fullName.apply(personTwo, ["--Applying"]);

console.log(fullNameBind());
console.log(fullNameCall);
console.log(fullNameApply);
