"use strict";
// showcasing that function is block scoped under ES6

const x = 5;
if (x > 0) {
  function add(x) {
    console.log(x);
  }
  add(x);
}

add(x);
