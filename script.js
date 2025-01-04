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
  image.setAttribute("src", "cheater.jpeg");
  text.textContent = "Донна будет ему изменять с Сэмом!!!";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.style = "display: block";
  /* третья часть с Биллом */
  buttonAgain.addEventListener("click", Back);
}
function BadBill() {
  image.setAttribute("src", "crazy_bill.jpeg");
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
  image.setAttribute("src", "separate.jpeg");
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
  image.setAttribute("src", "work.jpeg");
  text.textContent = "Сэм будет заставлять Донну работать и она уйдёт от него!";
  buttonOne.textContent = "Сэм будет...";
  buttonTwo.textContent = "Сэм никогда...";
  buttonOne.addEventListener("click", SamAndSofie);
  buttonTwo.addEventListener("click", AloneSam);
}
/* третья часть с Сэмом */
function SamAndSofie() {
  image.setAttribute("src", "sam_Sofie.jpeg");
  text.textContent = "видеться с дочкой Софи по выходным.";
  buttonAgain.style = "display: block";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function AloneSam() {
  image.setAttribute("src", "just_sam.jpeg");
  text.textContent = "не увидит свою дочь Софи.";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function RunDonna() {
  image.setAttribute("src", "sam_donna.jpeg");
  text.textContent = "Они разойдутся в разные стороны. Это конец?";
  buttonOne.textContent = "Нет...";
  buttonTwo.textContent = "Да...";
  buttonOne.addEventListener("click", Love);
  buttonTwo.addEventListener("click", Divorce);
}
function Love() {
  image.setAttribute("src", "love.jpeg");
  text.textContent = "Сэм и Донна снова будут вместе спустя много лет!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Divorce() {
  image.setAttribute("src", "sam_on_wed.jpeg");
  text.textContent = "Но Сэм неожиданно появится на свадьбе дочери!";
  buttonAgain.style = "display: block";
  buttonOne.style = "display: none";
  buttonTwo.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ГАРРИ */
buttonThree.addEventListener("click", Garry);
function Garry() {
  image.setAttribute("src", "just_garry.jpeg");
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
  image.setAttribute("src", "garry.jpeg");
  text.textContent =
    "Вскоре Гарри и Донна разойдутся из-за карьеры Гарри. Но что будет с Софи?";
  buttonThree.textContent = "Софи и отец";
  buttonFour.textContent = "Софи и мама";
  buttonThree.addEventListener("click", Dad);
  buttonFour.addEventListener("click", Mom);
}
function Break() {
  image.setAttribute("src", "garry_son.jpeg");
  text.textContent = "Донна узнает о внебрачном сыне Гарри и уйдёт от него!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
/* третья часть с Гарри */
function Dad() {
  image.setAttribute("src", "garry_sofie.jpeg");
  text.textContent = "Гарри заберёт дочь с собой!";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}
function Mom() {
  image.setAttribute("src", "donna_sofie.jpeg");
  text.textContent = "Софи останется с мамой на острове.";
  buttonAgain.style = "display: block";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.addEventListener("click", Back);
}

/* ДОННА */
buttonFour.addEventListener("click", Donna);
function Donna() {
  image.setAttribute("src", "donna.jpeg");
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
  image.setAttribute("src", "Super_Trouper.jpeg");
  text.textContent =
    "Донна станет участницей музыкальной группы! Будут ли они успешны?";
  buttonThree.textContent = "Да";
  buttonFour.textContent = "Нет";
  buttonThree.addEventListener("click", Solo);
  buttonFour.addEventListener("click", Drunk);
}
function Solo() {
  image.setAttribute("src", "famous.jpeg");
  text.textContent = "Через несколько нет Донна сделает сольную карьеру!!!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Drunk() {
  image.setAttribute("src", "drunk.jpeg");
  text.textContent = "Вскоре её выгонят из-за алкоголя...";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Island() {
  image.setAttribute("src", "island.jpeg");
  text.textContent = "Донна уедет на греческий остров. Что ждёт её там?";
  buttonThree.textContent = "Ребёнок";
  buttonFour.textContent = "Одиночество";
  buttonThree.addEventListener("click", Child);
  buttonFour.addEventListener("click", Loneless);
}
/* третья часть о Донне */
function Child() {
  image.setAttribute("src", "dads_sofie.jpeg");
  text.textContent =
    "На острове она родит ребёнка от одного из своих женихов. И позже дочь будет искать своего отца!";
  buttonThree.style = "display: none";
  buttonFour.style = "display: none";
  buttonAgain.style = "display: block";
  buttonAgain.addEventListener("click", Back);
}
function Loneless() {
  image.setAttribute("src", "crazy.jpeg");
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
