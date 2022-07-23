//Countdown Timer
const clockdiv = document.getElementById("countdown");
const countDownTime = new Date(
  clockdiv.getAttribute("data-date")
).getTime();

const countdownfunction = setInterval(function () {
  const now = new Date().getTime();
  const diff = countDownTime - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  const minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60));
  const seconds = Math.floor(diff % (1000 * 60) / 1000);

  if (diff < 0) {
    clockdiv.style.display = "none";
    clearInterval(countdownfunction);
  } else {
    clockdiv.querySelector(".days").innerHTML = days;
    clockdiv.querySelector(".hours").innerHTML = hours;
    clockdiv.querySelector(".minutes").innerHTML = minutes;
    clockdiv.querySelector(".seconds").innerHTML = seconds;
  }
}, 1000);
<iframe
src="https://gateway.ipfscdn.io/ipfs/QmYQ7F7jT9K8Yyctw99zPKU65a1L4mXktcs24dvVKZDnQW/signature-drop.html?contract=0x67be9C204e3117361a76550DC6fbc0BF2E277822&chainId=137"
width="600px"
height="600px"
style="max-width:100%;"
frameborder="0"
></iframe>