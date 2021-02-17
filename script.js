let a = 0
let b = 0
let h = 0

document.getElementById('calculate').addEventListener('click',formula)

function formula () {
  a =d ocument.getElementById('baseA').value
  b = document.getElementById('baseB').value
  h = document.getElementById('height').value

a = parseInt(a)
b = parseInt(b)
h = parseInt(h)

number = (a+b)/2*h
alert(number)
}
