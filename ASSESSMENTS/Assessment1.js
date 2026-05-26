let students = [];

function addStudent(){

  let name = document.getElementById("name").value;
  let roll = document.getElementById("roll").value;
  let math = Number(document.getElementById("math").value);
  let science = Number(document.getElementById("science").value);
  let english = Number(document.getElementById("english").value);

  let student = {
  name:name,
  roll:roll,
  math:math,
  science:science,
  english:english
  };

  students.push(student);
  alert("Student Added Successfully.!!")
  document.getElementById("output").innerHTML = "DONE";

}

function displayStudents(){

  let result = "<h3>All Students</h3>";

  for(let s of students){

  result += "Name: " + s.name +
  " | Roll: " + s.roll +
  " | Math: " + s.math +
  " | Science: " + s.science +
  " | English: " + s.english +
  "<br>";

  }

  document.getElementById("output").innerHTML = result;

}

function showTotals(){

  let result = "<h3>Total Marks</h3>";

  for(let s of students){

  let total = s.math + s.science + s.english;

  result += s.name + " Total = " + total + "<br>";

  }

  document.getElementById("output").innerHTML = result;

}

function showAverage(){

  let result = "<h3>Average Marks</h3>";

  for(let s of students){

  let total = s.math + s.science + s.english;
  let avg = total / 3;

  result += s.name + " Average = " + avg.toFixed(2) + "<br>";

  }

  document.getElementById("output").innerHTML = result;

}

function topStudents(){

  let result = "<h3>Students Above 80.0 Average</h3>";

  for(let s of students){

  let total = s.math + s.science + s.english;
  let avg = total / 3;

  if(avg > 80){

  result += s.name + " Average = " + avg.toFixed(2) + "<br>";

  }

  }

  document.getElementById("output").innerHTML = result;

}

function failedStudents(){

  let result = "<h3>Failed Students</h3>";

  for(let s of students){

  let total = s.math + s.science + s.english;
  let avg = total / 3;

  if(avg < 40){

  result += s.name + " Average = " + avg.toFixed(2) + "<br>";

  }

  }

  document.getElementById("output").innerHTML = result;

}

function countStudents(){

  let count = students.length;

  document.getElementById("output").innerHTML =
  "<h3>Total Students: " + count + "</h3>";

}