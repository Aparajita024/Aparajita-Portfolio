function time () {
    let time = new Date()
    let hours = time.getHours()
    let min = time.getMinutes()
    let sec = time.getSeconds()

    hours = hours < 10 ? '0' + hours : hours 
    min = min < 10 ? '0' + min : min
    sec = sec < 10 ? '0' + sec : sec

    document.querySelector('.time').innerHTML = `${hours}:${min}:${sec}`
}

time()
setInterval(time, 1000)