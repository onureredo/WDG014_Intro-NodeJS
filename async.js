import fs from 'fs';

const file = './somethingggggg.txt';

console.log('Datei wird gelesen');

fs.readFile(file, 'utf-8', (err, data) => {
  if (err) {
    console.log('Error reading file', err);
    return;
  }
  console.log('Content:', data);
});

console.log('Datei wurde gelesen');
