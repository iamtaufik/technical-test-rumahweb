const prisma = require('../libs/prisma');

const getById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

const create = async (data) => {
  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return user;
};

const getAll = async () => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return users;
};

const update = async (id, data) => {
  const user = await prisma.user.update({
    where: {
      id,
    },
    data: {
      name: data.name,
      email: data.email,
    },
  });

  return user;
};

const deleteById = async (id) => {
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
};

const getByEmail = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

module.exports = {
  getById,
  create,
  update,
  deleteById,
  getAll,
  getByEmail,
};
