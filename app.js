require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.route');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'server up and running',
  });
});

app.use(userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://loclahost:${PORT}`);
});
