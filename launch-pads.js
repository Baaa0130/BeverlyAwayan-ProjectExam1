document.querySelector(".banner .loader").style.display = "block"
document.querySelector(".banner .timer-box").style.display = "none"

const api_url =  "https://api.spacexdata.com/v4/launches/next";
async function getapi(url) { 
  const response = await fetch(url); 

  var data = await response.json(); 
  if (response) {
    showNextLaunch(data)
    document.querySelector(".banner .loader").style.display = "none"
    document.querySelector(".banner .timer-box").style.display = "block"
  } 
}

getapi(api_url); 

var showNextLaunch = function (data) {
  document.querySelector(".timer-box .launch-name").innerHTML = data.name
  
  var countDownDate = data.date_unix * 1000
  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  days = days > 9 ? days : '0' + days
  hours = hours > 9 ? hours : '0' + hours
  minutes = minutes > 9 ? minutes : '0' + minutes
  seconds = seconds > 9 ? seconds : '0' + seconds

  document.getElementById("days").innerHTML = days
  document.getElementById("hours").innerHTML = hours
  document.getElementById("mins").innerHTML = minutes
  document.getElementById("secs").innerHTML = seconds

  setTimeout(function () {
    showNextLaunch(data)
  }, 1000)
}

async function getUpcoming(url) { 
  const response = await fetch(url); 

  var data = await response.json();
  console.log('@!', data)
  if (response) {
    showLaunch(data)
  } 
}
getUpcoming("https://api.spacexdata.com/v4/launchpads");

var showLaunch = function (data) {
  var parent = document.querySelector(`.launchpad-page table`)
  parent.querySelector('.one .name').innerHTML = data[0].name
  parent.querySelector('.one .locality').innerHTML = data[0].locality
  parent.querySelector('.one .region').innerHTML = data[0].region
  parent.querySelector('.one .details').innerHTML = data[0].details

  parent.querySelector('.two .name').innerHTML = data[1].name
  parent.querySelector('.two .locality').innerHTML = data[1].locality
  parent.querySelector('.two .region').innerHTML = data[1].region
  parent.querySelector('.two .details').innerHTML = data[1].details

  parent.querySelector('.three .name').innerHTML = data[2].name
  parent.querySelector('.three .locality').innerHTML = data[2].locality
  parent.querySelector('.three .region').innerHTML = data[2].region
  parent.querySelector('.three .details').innerHTML = data[2].details

  parent.querySelector('.four .name').innerHTML = data[3].name
  parent.querySelector('.four .locality').innerHTML = data[3].locality
  parent.querySelector('.four .region').innerHTML = data[3].region
  parent.querySelector('.four .details').innerHTML = data[3].details

  parent.querySelector('.five .name').innerHTML = data[4].name
  parent.querySelector('.five .locality').innerHTML = data[4].locality
  parent.querySelector('.five .region').innerHTML = data[4].region
  parent.querySelector('.five .details').innerHTML = data[4].details

  parent.querySelector('.six .name').innerHTML = data[5].name
  parent.querySelector('.six .locality').innerHTML = data[5].locality
  parent.querySelector('.six .region').innerHTML = data[5].region
  parent.querySelector('.six .details').innerHTML = data[5].details

  // console.log('@', target, parent)
  // parent.classList.remove('loading')
}
