const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateAccesToken = async (id) => {
  const token = jwt.sign({ id: id }, String(process.env.JWT_SECRET), { expiresIn: '7d' });
  return token;
};

const verivfyAccessToken = async (token) => {
  return await jwt.verify(token, String(process.env.JWT_SECRET));
};

module.exports = {
  generateAccesToken,
  verivfyAccessToken,
};
