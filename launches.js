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
getUpcoming("https://api.spacexdata.com/v4/launches");

var showLaunch = function (data) {
  var parent = document.querySelector(`.launch-page .box.one`)
  parent.querySelector('.name').innerHTML = data[1].name
  parent.querySelector('.desc').innerHTML = data[1].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[1].links.youtube_id}`)

  parent = document.querySelector(`.launch-page .box.two`)
  parent.querySelector('.name').innerHTML = data[2].name
  parent.querySelector('.desc').innerHTML = data[2].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[2].links.youtube_id}`)

  parent = document.querySelector(`.launch-page .box.three`)
  parent.querySelector('.name').innerHTML = data[3].name
  parent.querySelector('.desc').innerHTML = data[3].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[3].links.youtube_id}`)

  parent = document.querySelector(`.launch-page .box.four`)
  parent.querySelector('.name').innerHTML = data[4].name
  parent.querySelector('.desc').innerHTML = data[4].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[4].links.youtube_id}`)

  parent = document.querySelector(`.launch-page .box.five`)
  parent.querySelector('.name').innerHTML = data[5].name
  parent.querySelector('.desc').innerHTML = data[5].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[5].links.youtube_id}`)

  parent = document.querySelector(`.launch-page .box.six`)
  parent.querySelector('.name').innerHTML = data[6].name
  parent.querySelector('.desc').innerHTML = data[6].details
  parent.querySelector('iframe').setAttribute('src', `https://www.youtube.com/embed/${data[6].links.youtube_id}`)

  // console.log('@', target, parent)
  // parent.classList.remove('loading')
}
