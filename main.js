document.getElementById('time').innerHTML = new Date().toLocaleString()

function pink() {
  document.body.style.backgroundColor = 'pink'
}
function yellow() {
  document.body.style.backgroundColor = 'yellow'
}
function lightblue() {
  document.body.style.backgroundColor = 'lightblue'
}
function reset() {
  document.body.style.backgroundColor = 'white'
}

function showhtml() {
  document.getElemetById('fig').src = 'img/html5.jpg'
  document.getElemetById('desc').innerHTML =
    '<b>HTML</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
function showcss() {
  document.getElemetById('fig').src = 'img/css3.jpg'
  document.getElemetById('desc').innerHTML =
    '<b>CSS</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
function showjavascript() {
  document.getElemetById('fig').src = 'img/javascript.jpg'
  document.getElemetById('desc').innerHTML =
    '<b>Javascript</b>은 구조적 웹문서를 작성하는데 사용하는 마크업 언어이다'
}
function Hide() {
  document.getElemetById('fig').src = ' '
  document.getElemetById('desc').innerHTML = ' '
}
