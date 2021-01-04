// JavaScript Document
console.log("Hi")




document.getElementsByClassName("clickthis")[0].addEventListener("click", Showdata);
document.getElementsByClassName("fakeMenu")[0].addEventListener("click", OpenNav);
document.querySelectorAll(".overlayNav > div")[0].addEventListener("click", OpenNav);

function Showdata() {
    document.getElementsByClassName("houseDetailsHidden")[0].classList.toggle("hidden");
    document.getElementsByClassName("summery")[0].classList.toggle("noAfter");
}

function OpenNav() {
    document.getElementsByClassName("overlayNav")[0].classList.toggle("slideInTop");
}