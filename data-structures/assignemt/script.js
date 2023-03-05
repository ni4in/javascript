"use strict";

const myfunc = function () {
  const mytext = document.querySelector("#text").value;
  const mytext_split = mytext.split("\n");
  let result_str = "";
  for(const text of mytext_split) {
    const temp_str = text.split("_");
    const updated_str =
      temp_str[0] +
      temp_str[1][0].toUpperCase() +
      temp_str[1].slice(1, temp_str[1].length).toLowerCase();
      result_str = result_str + updated_str + "\n";

  }
  document.querySelector("#text").value = result_str;
};

document.querySelector("#button").addEventListener("click", myfunc);
