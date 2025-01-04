const image = document.querySelector("#myImage");
const text = document.querySelector("h4");

const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonFour = document.querySelector("#four");
const buttonAgain = document.querySelector("#again");

/* БИЛЛ */
buttonOne.addEventListener("click", Bill);
function Bill() {
  image.setAttribute(
    "src",
    "bill.jpeg"
  );
  text.textContent = "Будет ли он хорошим мужем?";
  buttonOne.textContent = "Да, но...";
  buttonTwo.textContent = "Он бросит её!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  /* вторая часть с Биллом */
  buttonOne.addEventListener("click", BillAndDonna);
  buttonTwo.addEventListener("click", BadBill);
}
function BillAndDonna() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/cheater.jpg?v=1653254931885");
  text.textContent = "Донна будет ему изменять с Сэмом!!!";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.style = "display: block";
  /* третья часть с Биллом */
  buttonAgain.addEventListener("click", Back);
}
function BadBill() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/crazy_bill.jpg?v=1653254934086");
  text.textContent =
    "Донна не сможет перенести это и проведёт остатки своих дней в психиатрической лечебнице!";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.style = "display: block";
  /* третья часть с Биллом */
  buttonAgain.addEventListener("click", Back);
}

/* СЭМ */
buttonTwo.addEventListener("click", Sam);
function Sam() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/separate.jpg?v=1653255057990");
  text.textContent = "Ждёт ли их счастье?";
  buttonOne.textContent = "Они будут вместе!";
  buttonTwo.textContent = "Донна сбежит от Сэма...";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  /* вторая часть с Сэмом */
  buttonOne.addEventListener("click", SamAndDonna);
  buttonTwo.addEventListener("click", RunDonna);
}
function SamAndDonna() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/work.jpg?v=1653255059818");
  text.textContent = "Сэм будет заставлять Донну работать и она уйдёт от него!";
  buttonOne.textContent = "Сэм будет...";
  buttonTwo.textContent = "Сэм никогда...";
  buttonOne.addEventListener("click", SamAndSofie);
  buttonTwo.addEventListener("click", AloneSam);
}
/* третья часть с Сэмом */
function SamAndSofie() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/Sam%26Sofie.jpg?v=1653255055109");
  text.textContent = "видеться с дочкой Софи по выходным.";
  buttonAgain.style = "display: block";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function AloneSam() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/just%20sam.jpg?v=1653255044655");
  text.textContent = "не увидит свою дочь Софи.";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function RunDonna() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/sam%26donna.jpg?v=1653255052386");
  text.textContent = "Они разойдутся в разные стороны. Это конец?";
  buttonOne.textContent = "Нет...";
  buttonTwo.textContent = "Да...";
  buttonOne.addEventListener("click", Love);
  buttonTwo.addEventListener("click", Divorce);
}
function Love() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/love.jpg?v=1653255047149");
  text.textContent = "Сэм и Донна снова будут вместе спустя много лет!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Divorce() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/sam%20on%20wed.jpg?v=1653255049858");
  text.textContent = "Но Сэм неожиданно появится на свадьбе дочери!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ГАРРИ */
buttonThree.addEventListener("click", Garry);
function Garry() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/just_garry.jpg?v=1653255190183");
  text.textContent = "Как долго продлится их счастье?";
  buttonThree.textContent = "Они поженятся";
  buttonFour.textContent = "Вскоре они разойдутся";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  /* вторая часть с Гарри */
  buttonThree.addEventListener("click", GarryAndDonna);
  buttonFour.addEventListener("click", Break);
}
function GarryAndDonna() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/garry.jpg?v=1653255182811");
  text.textContent =
    "Вскоре Гарри и Донна разойдутся из-за карьеры Гарри. Но что будет с Софи?";
  buttonThree.textContent = "Софи и отец";
  buttonFour.textContent = "Софи и мама";
  buttonThree.addEventListener("click", Dad);
  buttonFour.addEventListener("click", Mom);
}
function Break() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/garry%26son.jpg?v=1653255188026");
  text.textContent = "Донна узнает о внебрачном сыне Гарри и уйдёт от него!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
/* третья часть с Гарри */
function Dad() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/garry%26sofie.jpg?v=1653255184730");
  text.textContent = "Гарри заберёт дочь с собой!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Mom() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/donna%26sofie.jpg?v=1653255177357");
  text.textContent = "Софи останется с мамой на острове.";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ДОННА */
buttonFour.addEventListener("click", Donna);
function Donna() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/donna.jpg?v=1653255214765");
  text.textContent = "Чем займётся наша героиня?";
  buttonThree.textContent = "Музыка";
  buttonFour.textContent = "Остров";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  /* вторая часть о Донне */
  buttonThree.addEventListener("click", Music);
  buttonFour.addEventListener("click", Island);
}
function Music() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/Super%20Trouper.jpg?v=1653255224723");
  text.textContent =
    "Донна станет участницей музыкальной группы! Будут ли они успешны?";
  buttonThree.textContent = "Да";
  buttonFour.textContent = "Нет";
  buttonThree.addEventListener("click", Solo);
  buttonFour.addEventListener("click", Drunk);
}
function Solo() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/famous.jpg?v=1653255220373");
  text.textContent = "Через несколько нет Донна сделает сольную карьеру!!!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Drunk() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/drunk.jpg?v=1653255217622");
  text.textContent = "Вскоре её выгонят из-за алкоголя...";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Island() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/island.jpg?v=1653255222231");
  text.textContent = "Донна уедет на греческий остров. Что ждёт её там?";
  buttonThree.textContent = "Ребёнок";
  buttonFour.textContent = "Одиночество";
  buttonThree.addEventListener("click", Child);
  buttonFour.addEventListener("click", Loneless);
}
/* третья часть о Донне */
function Child() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/dads%26sofie.jpg?v=1653255212289");
  text.textContent =
    "На острове она родит ребёнка от одного из своих женихов. И позже дочь будет искать своего отца!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Loneless() {
  image.setAttribute("src", "https://cdn.glitch.global/2aacc9e4-57c2-4cd9-beac-f405434abfb7/crazy.jpg?v=1653255210066");
  text.textContent =
    "Она будет наслаждаться одиночеством всю оставшуюся жизнь.";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Back() {
  location.reload();
}
