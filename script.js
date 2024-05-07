// Тоглогчийн хадгалах хувьсагч
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var currentScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй,
//  1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// var dice = Math.ceil(Math.random() * 6);
var dice = Math.floor(Math.random() * 6) + 1;


document.querySelector("#score--0").textContent = dice;
document.querySelector("#score--1").textContent = dice;
document.querySelector(".dice").style.display = "none";
document.querySelector("#current--1").textContent = 0;
document.querySelector("#current--0").textContent = 0;

// document.querySelector("#score--1").innerHTML = "<em>YES</em>";
// document.querySelector("#score--1").innerHTML = "YES";
console.log("Шоо: " + dice);
console.log("hiiiiiiiiiii")