const btnLikes1 = document.getElementById("btnLike1")
const countLikes1 = document.getElementById("countLikes1")
const btnDislikes1 = document.getElementById("btnDislike1")
const countDislikes1 = document.getElementById("countDislikes1")
const btnHaha1 = document.getElementById("btnHaha1")
const countHaha1 = document.getElementById("countHaha1")
const btncare1 = document.getElementById("btncare1")
const countcare1 = document.getElementById("countcare1")
const btnangry1 = document.getElementById("btnangry1")
const countangry1 = document.getElementById("countangry1")
const btnLikes2 = document.getElementById("btnLike2")
const countLikes2 = document.getElementById("countLikes2")
const btnDislikes2 = document.getElementById("btnDislike2")
const countDislikes2 = document.getElementById("countDislikes2")
const btnHaha2 = document.getElementById("btnHaha2")
const countHaha2 = document.getElementById("countHaha2")
const btncare2 = document.getElementById("btncare2")
const countcare2 = document.getElementById("countcare2")
const btnangry2 = document.getElementById("btnangry2")
const countangry2 = document.getElementById("countangry2")

const submit = document.getElementById("submit")
const comment = document.getElementById("comment")
const commentbox = document.getElementById("commentbox")

function submitComment(){
  commentbox.textContent += comment.value.toString() + "\n"
  comment. value=""
}


function clickLike1(){
  let totalLikes1 = parseInt(countLikes1.value) + 1
  countLikes1.textContent = totalLikes1.toString()
}
function clickDislike1(){
  let totalDislikes1 = parseInt(countDislikes1.value) + 1
  countDislikes1.textContent = totalDislikes1.toString()
}
function clickHaha1(){
  let totalHaha1 = parseInt(countHaha1.value) + 1
  countHaha1.textContent = totalHaha1.toString()
}

function clickcare1(){
  let totalcare1 = parseInt(countcare1.value) + 1
  countcare1.textContent = totalcare1.toString()
}
function clickangry1(){
  let totalangry1 = parseInt(countangry1.value) + 1
  countangry1.textContent = totalangry1.toString()
}
function clickLike2(){
  let totalLikes2 = parseInt(countLikes2.value) + 1
  countLikes2.textContent = totalLikes2.toString()
}
function clickDislike2(){
  let totalDislikes2 = parseInt(countDislikes2.value) + 1
  countDislikes2.textContent = totalDislikes2.toString()
}
function clickHaha2(){
  let totalHaha2 = parseInt(countHaha2.value) + 1
  countHaha2.textContent = totalHaha2.toString()
}

function clickcare2(){
  let totalcare2 = parseInt(countcare2.value) + 1
  countcare2.textContent = totalcare2.toString()
}
function clickangry2(){
  let totalangry2 = parseInt(countangry2.value) + 1
  countangry2.textContent = totalangry2.toString()
}
btnLike1.addEventListener("click",clickLike1)
btnLike2.addEventListener("click",clickLike2)
btnDislike1.addEventListener("click",clickDislike1)
btnDislike2.addEventListener("click",clickDislike2)
btnHaha1.addEventListener("click",clickHaha1)
btnHaha2.addEventListener("click",clickHaha2)
btncare1.addEventListener("click",clickcare1)
btncare2.addEventListener("click",clickcare2)
btnangry1.addEventListener("click",clickangry1)
btnangry2.addEventListener("click",clickangry2)
submit.addEventListener("click", submitComment)
