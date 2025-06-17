const jwt = require('../libs/jwt');

const authenticated = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      res.status(401).json({ success: false, message: 'Unauthorized' });
      return;
    }
    let decoded = await jwt.verivfyAccessToken(token);

    req.user = decoded;

    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: 'failed validating auth',
    });
  }
};

module.exports = {
  authenticated,
};
