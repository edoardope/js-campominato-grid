function generabox(y, x) {
    let box = document.createElement("div");
    box.classList.add(x);
    box.innerHTML = y;
    box.addEventListener("click", function() {
        box.classList.add("blue");
        console.log(y)
    });
    return box;
}
  
let start1 = document.getElementById("start1");
let start2 = document.getElementById("start2");
let start3 = document.getElementById("start3");
let griglia = document.querySelector(".griglia");
let btnc = document.querySelector(".btnc");
  
start1.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 100; y++) {
      let newBox = generabox(y, "box");
      griglia.appendChild(newBox);
    }


});

start2.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 81; y++) {
      let newBox = generabox(y, "box2");
      griglia.appendChild(newBox);
    }


});

start3.addEventListener("click", function() {

    start1.classList.add("none");
    start2.classList.add("none");
    start3.classList.add("none");

    for (let y = 1; y <= 49; y++) {
      let newBox = generabox(y, "box3");
      griglia.appendChild(newBox);
    }


});