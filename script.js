"use strict";
// Task 03
for (let i = 24; i <= 50; i++) {
  let date = new Date(`1-jan-{i}`);
  let string = date.toString();
  if (string.slice(0, 0 + 3)) {
    document.write("Sunday", i);
  }
}
