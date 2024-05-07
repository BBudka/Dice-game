// mdn javascript events
// тухайн кодийг  copy paste хийж байвал  тэр кодийг сайжруулах боломжтой гэсэн үг
// Тоглогчийн хадгалах хувьсагч
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var currentScore = 0;
// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй,
//  1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// var dice = Math.ceil(Math.random() * 6);

// id gaar elementiig ni oloh
document.getElementById("");
// queryselector  ni domoos ynzburiin select nukhtsuliig huleej avch tootsoolol hiideg

// document.getElementById("#score--0").textContent = 0;
// id geer haij baiga bol # tavih shaardlaga baihgui
document.querySelector("#score--0").textContent = 0;
document.querySelector("#score--1").textContent = 0;

document.querySelector("#current--1").textContent = 0;
document.querySelector("#current--0").textContent = 0;
var DiceDom = document.querySelector(".dice");
DiceDom.style.display = "none";

// ямар эвент дээр хариу үйлдэл үзүүлэхгээд байгаа юм бэ?
// uur gazart ashiglahgui uchir huivsagchid hadgalh shaardlagui
document
  .querySelector(".btn--roll")
  .addEventListener("click", function shidnuu() {
    var dice = Math.floor(Math.random() * 6) + 1;
    // alert("шоо шидлээ: " + dice);

    // acar tom modnoos haij alj baigaa(window.document)
    DiceDom.style.display = "block";
    DiceDom.src = "images/dice-" + dice + ".png";
    console.log("Шидлээ: " + dice);
  });

// document.querySelector("#score--1").innerHTML = "<em>YES</em>";
// document.querySelector("#score--1").innerHTML = "YES";

console.log("hiiiiiiiiiii");
