const outputElement = document.getElementById('output');
if (outputElement) {
  outputElement.innerText = 'Current date and time: ' + new Date().toISOString();
}
