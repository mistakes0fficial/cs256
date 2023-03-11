#!/usr/bin/env node
const readline = require('readline');
const crypto = require('crypto');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the name of the file: ', (filename) => {
  const data = fs.readFileSync(filename);
  rl.question('Enter the expected SHA256 hash: ', (expectedHash) => {
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
});
