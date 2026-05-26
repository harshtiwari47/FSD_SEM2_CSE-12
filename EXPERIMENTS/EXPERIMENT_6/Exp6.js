let heading = document.getElementById("mainHeading");
let paragraph = document.getElementById("paragraph");
let input = document.getElementById("userInput");

let fontSize = 16;

// Change heading text (onclick using addEventListener)
document.getElementById("changeTextBtn").addEventListener("click", function () {
    if (input.value !== "") {
        heading.innerHTML = input.value;
    }
});

// Change background color
document.getElementById("bgColorBtn").onclick = function () {
    document.body.style.backgroundColor ="red";
       
};

input.onchange = function(){
    console.log("Input Changed :",input.value)
};

// Increase font size
document.getElementById("fontSizeBtn").addEventListener("click", function () {
    fontSize += 2;
    paragraph.style.fontSize = Math.min(fontSize,40) + "px";
    heading.style.fontSize = Math.min(fontSize,40) + "px";
});

// Show/Hide paragraph
document.getElementById("toggleBtn").addEventListener("click", function () {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});

// Reset page
document.getElementById("resetBtn").addEventListener("click", function () {
    location.reload();
});

heading.onmouseover = function () {
    heading.style.color = "red";
};