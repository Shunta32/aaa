let timer;
let timeRemaining = 0;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timeInput = document.getElementById('timeInput');

// カウントダウンを更新
function updateTimer() {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  minutesElement.textContent = String(minutes).padStart(2, '0');
  secondsElement.textContent = String(seconds).padStart(2, '0');

  if (timeRemaining <= 0) {
    clearInterval(timer);
  }
}

// タイマーをスタートする
function startTimer() {
  const inputTime = parseInt(timeInput.value);
  if (!isNaN(inputTime) && inputTime > 0) {
    timeRemaining = inputTime * 60;
    updateTimer();

    timer = setInterval(() => {
      timeRemaining--;
      updateTimer();
    }, 1000);

    timeInput.disabled = true;
    startButton.disabled = true;
  }
}

// リセットボタン
function resetTimer() {
  clearInterval(timer);
  timeRemaining = 0;
  updateTimer();
  timeInput.disabled = false;
  startButton.disabled = false;
  timeInput.value = '';
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);

