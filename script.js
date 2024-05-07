var activePlayer;
var scores;
var currentScore;
init();
var DiceDom = document.querySelector(".dice");
DiceDom.style.display = "none";

// ямар эвент дээр хариу үйлдэл үзүүлэхгээд байгаа юм бэ?
// uur gazart ashiglahgui uchir huivsagchid hadgalh shaardlagui

function init() {
  // Тоглогчийн хадгалах хувьсагч
  activePlayer = 0;
  // Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];
  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  currentScore = 0;

  // id gaar elementiig ni oloh
  document.getElementById("");
  // queryselector  ni domoos ynzburiin select nukhtsuliig huleej avch tootsoolol hiideg

  // document.getElementById("#score--0").textContent = 0;
  // id geer haij baiga bol # tavih shaardlaga baihgui
  document.querySelector("#score--0").textContent = 0;
  document.querySelector("#score--1").textContent = 0;

  document.querySelector("#current--1").textContent = 0;
  document.querySelector("#current--0").textContent = 0;

  // тоглогчийн нэрийг буцааж гаргах
  document.getElementById("name--" + activePlayer).textContent = "Player 1";
  document.getElementById("name--" + activePlayer).textContent = "Player 2";

  document
    .querySelector(".player--" + activePlayer)
    .classList.remove("player--winner");
}

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
      switchNExtPlayer();
    }
    console.log("Шидлээ: " + dice);
  });

//   hold btn ii event listener
document.querySelector(".btn--hold").addEventListener("click", function () {
  //   Уг тоглогчийн ээлжийн оноог глобаль оноон дээр  нь нэмж өгнө
  //   if (activePlayer == 0) {
  //     scores[0] = scores[0] + currentScore;
  //   } else {
  //     scores[1] = scores[1] + currentScore;
  //   }

  scores[activePlayer] = scores[activePlayer] + currentScore;
  document.getElementById("score--" + activePlayer).textContent =
    scores[activePlayer];
  // logiciin huvid ene ni if iin umnu baival zugeer onoogoo nemeh --> onoogoo haruulah --> nuhtsul tavih
  //   уг тоглогч хожсон эсэхийг шалгах
  if (scores[activePlayer] >= 1) {
    // Ялагч гэсэн текстийг нэрнийх нь оронд гаргана
    document.getElementById("name--" + activePlayer).textContent = "WINNER!!!";
    document
      .querySelector(".player--" + activePlayer)
      .classList.add("player--winner");
    // player--winner
  } else {
    switchNExtPlayer();
  }

  //   Дэлгцэндээ р оноог нь өөрчлөх

  // Тоглогчийн ээлжийг солих

  switchNExtPlayer();
});

function switchNExtPlayer() {
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

// new game буюу шинээр эхлүүлэх
document.querySelector(".btn--new").addEventListener("click", init);

// document.querySelector("#score--1").innerHTML = "<em>YES</em>";
// document.querySelector("#score--1").innerHTML = "YES";
