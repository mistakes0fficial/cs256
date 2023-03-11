const readline = require('readline');
const crypto = require('crypto');
const fs = require('fs');

if (process.argv.length !== 3) {
  console.error('Usage: node app.js <expected-hash-value>');
  process.exit(1);
}
const expectedHash = process.argv[2];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter the name of the zip file: ', (filename) => {
  const data = fs.readFileSync(filename);
  const hash = crypto.createHash('sha256').update(data).digest('hex');
  console.log(`SHA256 hash of ${filename}: ${hash}`);

  // Check if the hash matches the expected value
  if (hash === expectedHash) {
    console.log('File has not been modified.');
  } else {
    console.log('File has been modified!');
  }
  rl.close();
});
