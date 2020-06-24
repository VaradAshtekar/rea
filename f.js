//search-box
function search(){

}
//customdropdown

function house1(){
  location.href="/property1.html";
}
function house2(){
  location.href="";
}
function house3(){
  location.href=" ";
}
function house4(){
  location.href=" ";
}

function house6(){
  location.href=" ";
}
function house7(){
  location.href=" ";
}
function house8(){
  location.href="";
}
function rent()
{
  location.href="/rent"
}
var modalBtns = [...document.querySelectorAll(".pg")];
modalBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.getAttribute('data-modal3');
document.getElementById(modal).style.display = "block";
}
});
                                     
                                     
var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.closest('.modal');
modal.style.display = "none";
}
});
window.onclick = function(event) {
if (event.target.className === "modal") {
event.target.style.display = "none";
}
}
var modalBtns = [...document.querySelectorAll(".button")];
modalBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.getAttribute('data-modal');
document.getElementById(modal).style.display = "block";
}
});
var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.closest('.modal');
modal.style.display = "none";
}
});
window.onclick = function(event) {
if (event.target.className === "modal") {
event.target.style.display = "none";
}
}
var modalBtns = [...document.querySelectorAll(".sign-in")];
modalBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.getAttribute('data-modal2');
document.getElementById(modal).style.display = "block";
}
}); 
var closeBtns = [...document.querySelectorAll(".close")];
closeBtns.forEach(function(btn){
btn.onclick = function() {
var modal = btn.closest('.modal');
modal.style.display = "none";
}
});
window.onclick = function(event) {
if (event.target.className === "modal") {
event.target.style.display = "none";
}
}

          

