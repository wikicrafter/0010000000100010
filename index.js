const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentyear = new Date().getFullYear();
const newyeartime = new Date(`January 01 ${currentyear + 1} 00:00:00`);

year.innerText = currentyear + 1;
//-------updatecountdown()--------
function updatecountdown() {
    const currenttime = new Date();
    const diff = newyeartime - currenttime;
  
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;
  
    // Add values to DOM
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
  }
// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000);
setInterval(updatecountdown, 1000);