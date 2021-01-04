// JavaScript Document
// voor Huis page
document.getElementsByClassName("clickthis")[0].addEventListener("click", Showdata);
document.getElementsByClassName("fakeMenu")[0].addEventListener("click", OpenNav);
document.querySelectorAll(".overlayNav > div")[0].addEventListener("click", OpenNav);
document.querySelectorAll(".tab > ul > li")[0].addEventListener("click", OpenFloorplan);
document.getElementsByClassName("closeOverlay")[0].addEventListener("click", OpenFloorplan);

document.querySelectorAll(".selectedHouseHolder > ul li:nth-of-type(2)")[0].addEventListener("click", HoldEffect);

function Showdata() {
    document.getElementsByClassName("houseDetailsHidden")[0].classList.toggle("hidden");
    document.getElementsByClassName("summery")[0].classList.toggle("noAfter");
}

function OpenNav() {
    document.getElementsByClassName("overlayNav")[0].classList.toggle("slideInTop");
}

function OpenFloorplan() {
    document.getElementsByClassName("overlayFloorplan")[0].classList.toggle("slideInTop");
}
function HoldEffect() {
    document.querySelectorAll(".selectedHouseHolder > ul li:nth-of-type(2)")[0].classList.toggle("holdEffect");
}