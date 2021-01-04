// JavaScript Document
// voor Huis page
// main page pagina kan met models maar dit is 1 functie
document.getElementsByClassName("fakeMenu")[0].addEventListener("click", OpenNav);
document.querySelectorAll(".overlayNav > div")[0].addEventListener("click", OpenNav);

function OpenNav() {
    document.getElementsByClassName("overlayNav")[0].classList.toggle("slideInTop");
}
