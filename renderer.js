const { spawn } = require('child_process');

const runButton = document.getElementById('run-button');
const searchString = document.getElementById('search-string');
const replaceString = document.getElementById('replace-string');
const fileLocation = document.getElementById('file-location');
const result = document.getElementById('result');

runButton.addEventListener('click', () => {
  const search = searchString.value;
  const replace = replaceString.value;
  const file = fileLocation.value;
  const python = spawn('python', ['search_replace.py', search, replace, file]);

  python.stdout.on('data', (data) => {
    result.innerHTML += data.toString();
  });

  python.stderr.on('data', (data) => {
    result.innerHTML += data.toString();
  });
});
