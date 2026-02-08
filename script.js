let home_counter = 0
let guest_counter = 0

let homeScore = document.getElementById("team-home-score")
let guestScore = document.getElementById("team-guest-score")

function homeIncrement1() {
  home_counter = home_counter + 1
  homeScore.textContent = home_counter
}

function homeIncrement2() {
  home_counter = home_counter + 2
  homeScore.textContent = home_counter
}

function homeIncrement3() {
  home_counter = home_counter + 3
  homeScore.textContent = home_counter
}

function guestIncrement1() {
  guest_counter = guest_counter + 1
  guestScore.textContent = guest_counter
}

function guestIncrement2() {
  guest_counter = guest_counter + 2
  guestScore.textContent = guest_counter
}

function guestIncrement3() {
  guest_counter = guest_counter + 3
  guestScore.textContent = guest_counter
}