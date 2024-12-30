document.addEventListener("DOMContentLoaded", function() {
  const startButton = document.getElementById('start-button');
  const resetButton = document.getElementById('reset-button');
  const secondsInput = document.getElementById('seconds-input');
  const timerDisplay = document.getElementById('timer-display');

  let countdown;
  let remainingTime = 0;

//Start Countdown

  startButton.addEventListener('click', () => {
    let time = parseInt(secondsInput.value);

    if (isNaN(time) || time <= 0) {
      alert('Please enter a valid number of seconds.');
      return;
    }

    remainingTime = time;
    timerDisplay.textContent = remainingTime;

    if (countdown) clearInterval(countdown);

    countdown = setInterval(() => {
      remainingTime--;
      timerDisplay.textContent = remainingTime > 0 ? remainingTime : '00';

      if (remainingTime <=0) {
        clearInterval(countdown);
      }
    }, 1000);
  });


  //Reset Countdown

  resetButton.addEventListener('click', () => {
    clearInterval(countdown);
    remainingTime = 0;
    timerDisplay.textContent = '00';
    secondsInput.value = '';
  });
});