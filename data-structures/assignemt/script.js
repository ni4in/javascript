"use strict";

const myfunc = function () {
  const mytext = document.querySelector("#text").value;
  const mytext_split = mytext.split("\n");
  let result_str = "";

  for(const [text, ind] of mytext_split.entries()) {
    const temp_str = text.trim().split("_");
    let updated_str =
      temp_str[0] +
      temp_str[1][0].toUpperCase() +
      temp_str[1].slice(1, temp_str[1].length).toLowerCase();
      updated_str = updated_str.padEnd(20," ");
      result_str = result_str + updated_str + "✅".repeat(ind) + "\n";

  }
  document.querySelector("#text").value = result_str;
};

document.querySelector("#button").addEventListener("click", myfunc);
