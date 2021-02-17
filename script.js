let a = 0
let b = 0
let h = 0
let number = 0
document.getElementById('calculate').addEventListener('click', formula)

function formula () {
  a = document.getElementById('base-a').value
  b = document.getElementById('base-b').value
  h = document.getElementById('height').value

  a = parseInt(a)
  b = parseInt(b)
  h = parseInt(h)

  number = (a + b) / 2 * h
  alert(number)
}
