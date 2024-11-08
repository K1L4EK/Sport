const nav = document.querySelector('.nav__header')
const burgerBtn = document.querySelector('.burger') 
function burger(){
	console.log(burgerBtn)
	nav.classList.toggle('nav_header_active')
	burgerBtn.classList.toggle('active')	
}

function fir() {
var con = confirm("Вы точно туда хотите?");
if(con){
	setTimeout(function(){
		window.location = "https://www.youtube.com/?app=desktop&hl=ru";
	}, 500);
	alert("Хорошо, обрабатываем запрос...");	
} else{
    alert("Ну и ладно... Тогда перевожу вас в начало сайта :(");
}
}

const callback = () => {
	fir();	
};
var button = document.querySelector('.im_1');
button.addEventListener('click', callback);

const callback_2 = () => {
	fir();	
};
var button = document.querySelector('.im_2');
button.addEventListener('click', callback_2);

const callback_3 = () => {
	fir();	
};
var button = document.querySelector('.im_3');
button.addEventListener('click', callback_3);
//Изменения начала страницы:
//1:
var silka = document.querySelector("#ac");
let btnf = false;
function btn() {
	if (!btnf) {
		silka.style.backgroundColor = "lime";
		btnf = true;
	} 
}
function res() {
	silka.style.removeProperty("background-color");
	btnf = false;
}
//2:
var silka_2 = document.querySelector("#ac_2");
let btnf_2 = false;
function btn_2() {
	if (!btnf_2) {
		silka_2.style.backgroundColor = "lime";
		btnf_2 = true;
	} 
}
function res_2() {
	silka_2.style.removeProperty("background-color");
	btnf_2 = false;
}
//3:
var silka_3 = document.querySelector("#ac_3");
let btnf_3 = false;
function btn_3() {
	if (!btnf_3) {
		silka_3.style.backgroundColor = "lime";
		btnf_3 = true;
	} 
}
function res_3() {
	silka_3.style.removeProperty("background-color");
	btnf_3 = false;
}
//4:
var silka_4 = document.querySelector("#ac_4");
let btnf_4 = false;
function btn_4() {
	if (!btnf_4) {
		silka_4.style.backgroundColor = "lime";
		btnf_4 = true;
	} 
}
function res_4() {
	silka_4.style.removeProperty("background-color");
	btnf_4 = false;
}





