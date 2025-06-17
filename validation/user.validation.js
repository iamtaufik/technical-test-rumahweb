const { z } = require('zod');

const createUserSchema = z.object({
  name: z.string().min(3, { message: 'name minimal 3 karakter' }),
  email: z.string().email(),
  password: z.string().min(8),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const updateUserSchema = z.object({
  name: z.string().min(3, { message: 'name minimal 3 karakter' }),
  email: z.string().email(),
});

module.exports = {
  createUserSchema,
  loginSchema,
  updateUserSchema,
};
