

// 45 minutes in seconds
let studySeconds = 10;
// for testing we had put 10secs

const display = document.getElementById("study-timer");
const statusText = document.getElementById("study-status");
const exitBtn = document.getElementById("exit-btn");

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

display.textContent = formatTime(studySeconds);

const interval = setInterval(() => {
  studySeconds--;
  display.textContent = formatTime(studySeconds);


if (studySeconds <= 0) {
  clearInterval(interval);
  statusText.textContent = "Great job! Choose your micro-break…";
  setTimeout(() => {
    window.location.href = "break-options.html"; 
  }, 1500);
}

}, 1000);

exitBtn.addEventListener("click", () => {
  const sure = confirm("Are you sure you want to exit this focus session?");
  if (sure) {
    window.location.href = "index.html";
  }
});
