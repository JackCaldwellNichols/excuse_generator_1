import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onclick = () => {
  document.querySelector("#the_excuse").innerHTML = generateExcuse();
  console.log("hello from the console");
};

let generateExcuse = () => {
  let who = ["The dog", "My web developer", "His friendly horse", "My bird"];
  let action = [" ate", " peed on", " crushed", " broke"];
  let what = [" my homework", " the keys", " the car", " my bed"];
  let when = [
    " before the class",
    " before I finished",
    " during my lunch",
    " while I was sleeping"
  ];

  let result =
    who[Math.floor(Math.random() * who.length)] +
    action[Math.floor(Math.random() * action.length)] +
    what[Math.floor(Math.random() * what.length)];

  return result;
};
