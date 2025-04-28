let inDegrees = true;

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const expression = document.getElementById('display').value;
    const result = eval(expression);
    document.getElementById('display').value = result;
    logHistory(`${expression} = ${result}`);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function squareRoot() {
  const display = document.getElementById('display');
  display.value = Math.sqrt(parseFloat(display.value)) || '';
}

function percentage() {
  const display = document.getElementById('display');
  display.value = parseFloat(display.value) / 100 || '';
}

function square() {
  const display = document.getElementById('display');
  display.value = Math.pow(parseFloat(display.value), 2) || '';
}

function reciprocal() {
  const display = document.getElementById('display');
  const value = parseFloat(display.value);
  display.value = value !== 0 ? (1 / value) : 'Error';
}

function sin() {
  const display = document.getElementById('display');
  let val = parseFloat(display.value);
  if (inDegrees) val *= Math.PI / 180;
  display.value = Math.sin(val) || '';
}

function cos() {
  const display = document.getElementById('display');
  let val = parseFloat(display.value);
  if (inDegrees) val *= Math.PI / 180;
  display.value = Math.cos(val) || '';
}

function tan() {
  const display = document.getElementById('display');
  let val = parseFloat(display.value);
  if (inDegrees) val *= Math.PI / 180;
  display.value = Math.tan(val) || '';
}

function toggleDegRad() {
  inDegrees = !inDegrees;
  document.getElementById('mode-toggle').innerText = inDegrees ? 'DEG' : 'RAD';
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function logHistory(entry) {
  const log = document.getElementById("history-log");
  const p = document.createElement("div");
  p.textContent = entry;
  log.prepend(p);
}

// Optional: keyboard support
document.addEventListener("keydown", function (e) {
  const key = e.key;
  const display = document.getElementById("display");

  if (!isNaN(key) || "+-*/.".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
