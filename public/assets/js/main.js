function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let display = document.getElementById("display").value;
  document.getElementById("display").value = display.slice(0, -1);
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculate() {
  try {
    let display = document.getElementById("display").value;
    document.getElementById("display").value = eval(display);
  } catch (error) {
    alert("Invalid Character");
  }
}
