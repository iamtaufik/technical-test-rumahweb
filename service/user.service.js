const userRepo = require('../repository/user.repository');
const bcrypt = require('bcrypt');
const jwt = require('../libs/jwt');

const register = async (data) => {
  const isUserExist = await userRepo.getByEmail(data.email);

  if (isUserExist) {
    throw new Error('email already exist!');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  data.password = hashedPassword;

  const user = await userRepo.create(data);

  return user;
};

const login = async (data) => {
  const isUserExist = await userRepo.getByEmail(data.email);

  if (!isUserExist) {
    throw new Error('user not exist!');
  }

  const isPasswordMatch = await bcrypt.compare(data.password, isUserExist.password);

  if (!isPasswordMatch) {
    throw new Error('invalid credentials');
  }

  const token = await jwt.generateAccesToken(isUserExist.id);

  return token;
};

const getUserById = async (id) => {
  const user = await userRepo.getById(id);

  if (!user) {
    throw new Error('user not found');
  }

  return user;
};

const updateUserById = async (id, data) => {
  const user = await userRepo.getById(id);

  if (!user) {
    throw new Error('user not found');
  }

  const newUser = await userRepo.update(user.id, data);

  return newUser;
};

const getAllUsers = async () => {
  const users = await userRepo.getAll();

  return users;
};

const deleteUserById = async (id) => {
  const user = await userRepo.getById(id);

  if (!user) {
    throw new Error('user not found');
  }

  await userRepo.deleteById(user.id);
};

module.exports = {
  register,
  login,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllUsers,
};
