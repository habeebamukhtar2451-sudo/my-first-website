let enteredPin = "";
// Niche "1234" ki jagah aap apni marzi ka 4-digit password rakh sakte hain:
const CORRECT_PIN = "0609"; 

function pressNum(num) {
  if (enteredPin.length < 4) {
    enteredPin += num;
    updateDots();
  }
}

function clearPin() {
  enteredPin = "";
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index < enteredPin.length) {
      dot.classList.add("filled");
    } else {
      dot.classList.remove("filled");
    }
  });
}

function checkPasscode() {
  if (enteredPin === CORRECT_PIN) {
    nextStep("step-question1");
  } else {
    document.getElementById("step-passcode").classList.remove("active");
    document.getElementById("modal-wrong").classList.add("active");
  }
}

function retryPasscode() {
  clearPin();
  document.getElementById("modal-wrong").classList.remove("active");
  document.getElementById("step-passcode").classList.add("active");
}

function nextStep(stepId) {
  document.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });
  document.getElementById(stepId).classList.add("active");
}

function showNoWarning() {
  document.getElementById("step-question1").classList.remove("active");
  document.getElementById("modal-no-warn").classList.add("active");
}

function closeNoWarning() {
  document.getElementById("modal-no-warn").classList.remove("active");
  document.getElementById("step-question1").classList.add("active");
}

function handleFinalNo() {
  alert("No option not allowed! 😉");
}

function handleFinalYes() {
  alert("Yayyy! ❤️ I love you!");
}
