const fs = require('fs');
for (const file of ['index.html', 'styles.css']) {
  if (!fs.existsSync(file)) throw new Error(`${file} is missing`);
  const content = fs.readFileSync(file, 'utf8');
  if (!content.trim()) throw new Error(`${file} is empty`);
}
console.log('Static page files are present and non-empty.');
