function time() {
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

const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.menu-icon');
const crossIcon = document.querySelector('.cross-icon');
const menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', () => {
  menuIcon.classList.toggle('hidden');
  crossIcon.classList.toggle('hidden');
  menuList.classList.toggle('hidden');
});