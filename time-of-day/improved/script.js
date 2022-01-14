const timer = (function () {
  function changeTime(date) {
    const currentDate = date instanceof Date ? date : new Date()
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let second = currentDate.getSeconds()

    hour = twoDigits(hour)
    minute = twoDigits(minute)
    second = twoDigits(second)
    
    const background = document.body
    const title = document.getElementById("title")
    const msgTarget = document.getElementById('message')
    const imgTarget = document.getElementById('image')

    const times = {
      morning: {
        image: 'goodmorning.png',
        background: '#fcd67e',
        title: '',
      },
      afternoon: {
        image: 'goodafternoon.png',
        background: '#e9926a',
        title: "#fcf8e6",
      },
      evening: {
        image: 'goodnight2.png',
        background: '#046961',
        title: "#f4edcd",
      },
    }

    let currentTime = {}

    if (hour >= 0 && hour < 12) {
      currentTime = times.morning
    } else if (hour >= 12 && hour < 18) {
      currentTime = times.afternoon
    } else {
      currentTime = times.evening
    }

    const message = document.createElement('strong')
    message.innerHTML = `Now is ${hour}:${minute}:${second}`

    const image = document.createElement('img')
    image.src = `img/${currentTime.image}`
    image.alt = "Photo of the day"

    title.style.color = currentTime.title
    background.style.background = currentTime.background
    background.style.transition = 'linear 1s'

    msgTarget.innerHTML = ''
    msgTarget.appendChild(message)

    imgTarget.innerHTML = ''
    imgTarget.appendChild(image)
  }

  function twoDigits(number) {
    return number < 10 ? '0' + number : number;  
  }

  function autoUpdateTime() {  
    const interval = 1000
    
    changeTime();

    setTimeout(autoUpdateTime, interval);
  }

  return {
    changeTime,
    autoUpdateTime,
  }
})()