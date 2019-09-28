import { getPath, setPath, delPath, hasPath } from "./pathservice";

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>example rename key's with pathservice</h1>
`;
var personPath = {
  firstName: "bill",
  lastName: "johnson",
  test: { one: "case" },
  some: [{ arr: "item" }]
};

export function renamedPath(obj, oldPath, newPath) {
  const newObj = JSON.parse(JSON.stringify(obj));
  if (hasPath(newObj, oldPath)) {
    setPath(newObj, newPath, getPath(newObj, oldPath));
    delPath(newObj, oldPath);
  }
  return newObj;
}

// console.log(_renamed(_person, "lastName", "last"), "renamed obj");
console.log(renamedPath(personPath, "lastName", "last"), "renamed obj");
console.log(delPath(personPath, "lastName"), "renamed obj");
//  {
//   last: "johnson",
//   test: { two: "case" },
//   some: [{ arr: "item" }],
//   testje: "bill"
// };

// console.log(_renamed(_person, "test.one", "test.two"), "renamed obj");
console.log(renamedPath(personPath, "test.one", "test.two"), "renamed obj");

//  {
//   lastName: "johnson",
//   test: { two: "case" },
//   some: [{ arr: "item" }],
//   testje: "bill"
// };

// console.log(_renamed(_person, "some[0].arr", "some[0].thing"), "renamed arr");
console.log(
  renamedPath(personPath, "some.0.arr", "some.0.thing"),
  "renamed arr"
);

// console.log(_renamed(_person, "test", "lastlast"), "renamed obj");
console.log(renamedPath(personPath, "test", "lastlast"), "renamed obj");

//  {
//   last: "johnson",
//   test: { two: "case" },
//   some: [{ arr: "item" }],
//   testje: "bill"
// };
