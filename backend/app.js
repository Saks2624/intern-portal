const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

const internData = {
  name: 'Sakshi More',
  referralCode: 'sakshi2025',
  donations: 42000
};

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
