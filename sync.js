import fs from 'fs';

const file = './something.txt';

try {
  const data = fs.readFileSync(file, 'utf-8');
  console.log('Content:', data);
  console.log('Datei wurde gelesen');
} catch (err) {
  console.log('Error reading file', err);
}
