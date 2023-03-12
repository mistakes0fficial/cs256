const express = require('express');
const crypto = require('crypto');
const multer = require('multer');

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './uploads');
    },
    filename: (req, file, cb) => {
      cb(null, `${file.fieldname}-${Date.now()}.zip`);
    }
  }),
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/zip') {
      cb(null, true);
    } else {
      cb(new Error('Only ZIP files are allowed'));
    }
  }
});

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST" enctype="multipart/form-data">
      <div>
        <label for="expectedHash">Expected SHA256 Hash:</label>
        <input type="text" id="expectedHash" name="expectedHash" required>
      </div>
      <div>
        <label for="zipFile">ZIP File:</label>
        <input type="file" id="zipFile" name="zipFile" required>
      </div>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/', upload.single('zipFile'), (req, res) => {
  const expectedHash = req.body.expectedHash;
  const filename = req.file.path;

  const data = fs.readFileSync(filename);
  const hash = crypto.createHash('sha256').update(data).digest('hex');

  // Check if the hash matches the expected value
  if (hash === expectedHash) {
    res.send('File has not been modified.');
  } else {
    res.send('File has been modified!');
  }
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
