let newheading = document.getElementById("heading");
newheading.textContent="DOM Manipulation in JavaScript";
newheading.style.color="red";
newheading.style.fontSize="50px";

let paragraphs = document.getElementsByClassName("paragraph");
paragraphs[0].innerHTML = "<strong>This paragraph is been updated using JavaScript.</strong>";
paragraphs[0].style.color="green";
paragraphs[0].style.fontSize="30px";

let newdiv = document.createElement("div");
newdiv.textContent="This ia a div created using JavaScript";
document.body.appendChild(newdiv);
newdiv[0].style.color="blue";
