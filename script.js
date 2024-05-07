// Тоглогчийн хадгалах хувьсагч
var activePlayer = 0;
// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var currentScore = 0;

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
  //   шоог шидэх эвент листенер
  .addEventListener("click", function shidnuu() {
    var dice = Math.floor(Math.random() * 6) + 1;
    // alert("шоо шидлээ: " + dice);

    // acar tom modnoos haij alj baigaa(window.document)
    // Шооны зургийг веб дээр гарга ирнэ.
    DiceDom.style.display = "block";

    // Буусан санамсаргүй тоонд харгалзах  шооны зургийг веб дээр гаргаж ирнэ
    DiceDom.src = "images/dice-" + dice + ".png";

    // буусан тоо нь нэгээс ялгаатай байх юм бол идэвхтэй тоглогчийн ээлжийн огоог нэмэгдүүлнэ.
    if (dice !== 1) {
      // 1-ээс ялгаатай тоо буулаа
      currentScore = currentScore + dice;
      document.getElementById("current--" + activePlayer).textContent =
        currentScore;
    } else {
      // 1 буусан тул тоглогчийн ээлжийн хэсгийг энэ хэсэгт сольж өгнө.
      //  энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгох
      currentScore = 0;
      document.getElementById("current--" + activePlayer).textContent = 0;
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      //   document.querySelector(".player--0").classList.remove("player--active");
      //   document.querySelector(".player--1").classList.add("player--active");

      //байх юм бол устгадаг байхгүй бол нэмдэг - toggle
      document.querySelector(".player--0").classList.toggle("player--active");
      document.querySelector(".player--1").classList.toggle("player--active");

      DiceDom.style.display = "none";
    }
    console.log("Шидлээ: " + dice);
  });

// document.querySelector("#score--1").innerHTML = "<em>YES</em>";
// document.querySelector("#score--1").innerHTML = "YES";

console.log("hiiiiiiiiiii");
