window.onscroll = function() {myFunction()
faze()
faze1()
faze2()
faze3()
faze4()
faze5()
faze6()};
function myFunction() {
  if (document.documentElement.scrollTop > 90) {
    document.getElementById("header").classList.add("scroll_header")
  } else {
    document.getElementById("header").classList.add("home_header")
    document.getElementById("header").classList.remove("scroll_header")
  }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById("about").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,750)
})
document.getElementById("product").addEventListener('click',()=>{
    document.documentElement.scrollTo(0,2950)
})

function faze(){
if (document.documentElement.scrollTop > 490) {
  document.getElementsByClassName("content_box")[0].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[0].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[0].classList.remove("fazein")
  document.getElementsByClassName("content_box")[0].classList.add("fazeout")
}
}
function faze1(){
if (document.documentElement.scrollTop > 880) {
  document.getElementsByClassName("content_box")[1].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[1].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[1].classList.remove("fazein")
  document.getElementsByClassName("content_box")[1].classList.add("fazeout")
}
}
function faze2(){
if (document.documentElement.scrollTop > 1580) {
  document.getElementsByClassName("content_box")[2].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[2].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[2].classList.remove("fazein")
  document.getElementsByClassName("content_box")[2].classList.add("fazeout")
}
}
function faze3(){
if (document.documentElement.scrollTop > 2100){
  document.getElementsByClassName("content_box")[3].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[3].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[3].classList.remove("fazein")
  document.getElementsByClassName("content_box")[3].classList.add("fazeout")
}
}
function faze4(){
if (document.documentElement.scrollTop > 3000){
  document.getElementsByClassName("content_box")[4].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[4].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[4].classList.remove("fazein")
  document.getElementsByClassName("content_box")[4].classList.add("fazeout")
}
}
function faze5(){
if (document.documentElement.scrollTop > 3400){
  document.getElementsByClassName("content_box")[5].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[5].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[5].classList.remove("fazein")
  document.getElementsByClassName("content_box")[5].classList.add("fazeout")
}
}
function faze6(){
if (document.documentElement.scrollTop > 4100){
  document.getElementsByClassName("content_box")[6].classList.remove("fazeout")
  document.getElementsByClassName("content_box")[6].classList.add("fazein")
}
else{
  document.getElementsByClassName("content_box")[6].classList.remove("fazein")
  document.getElementsByClassName("content_box")[6].classList.add("fazeout")
}
}

document.getElementById("scrollbtn").addEventListener("click",()=>{
  document.getElementById("features").scrollLeft+=120
})
document.getElementById("scrollbtnopp").addEventListener("click",()=>{
  document.getElementById("features").scrollLeft-=120
})