const userService = require('../service/user.service');
const { createUserSchema, loginSchema, updateUserSchema } = require('../validation/user.validation');

const register = async (req, res, next) => {
  try {
    const validFields = createUserSchema.safeParse(req.body);

    if (!validFields.success) {
      return res.status(400).json({ succes: false, error: validFields.error.flatten() });
    }

    const data = validFields.data;

    const user = await userService.register(data);

    return res.status(201).json({ success: true, data: user });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const validFields = loginSchema.safeParse(req.body);

    if (!validFields.success) {
      return res.status(400).json({ succes: false, error: validFields.error.flatten() });
    }

    const data = validFields.data;

    const token = await userService.login(data);

    return res.status(200).json({
      succes: true,
      data: {
        token,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    return res.status(200).json({
      succes: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const detailUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userService.getUserById(id);

    return res.status(200).json({
      succes: false,
      data: user,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const updateUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const validFields = updateUserSchema.safeParse(req.body);

    if (!validFields.success) {
      return res.status(400).json({ succes: false, error: validFields.error.flatten() });
    }

    const data = validFields.data;

    const updatedUser = await userService.updateUserById(id, data);

    return res.status(200).json({
      succes: false,
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

const deleteUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    await userService.deleteUserById(id);

    return res.status(200).json({
      succes: false,
      data: 'success delete user',
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = {
  register,
  login,
  getAllUsers,
  detailUserById,
  updateUserById,
  deleteUserById,
};
