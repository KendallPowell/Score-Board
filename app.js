console.log("js loaded")

let homeScore = 0
let awayScore = 0

function home(amount) {
  homeScore += amount
  console.log("plus 1")
  drawScore()
}

function away(amount) {
  awayScore += amount
  console.log("plus 3")
  drawScore()
}

function resetScore() {
  homeScore = 0
  awayScore = 0
  drawScore()
}

function drawScore() {
  let codeElm = document.getElementById('home')
  let awayScoreElm = document.getElementById('away')
  console.log(codeElm)
  codeElm.innerText = homeScore
  awayScoreElm.innerText = awayScore
  if (homeScore < 10) {
    codeElm.innerText = '0' + homeScore
  } else {
    codeElm.innerText = homeScore
  } if (awayScore < 10) {
    awayScoreElm.innerText = '0' + awayScore
  } else {
    awayScoreElm.innerText = awayScore
  }
}