const express = require('express');
const cors = require('cors');

const app = express();
let hitCount = 0;

app.use(cors());

app.get('/', (req, res) => {
  hitCount++;
  console.log(`Hit: ${hitCount}`);
  res.send('Hello brrr!');
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
