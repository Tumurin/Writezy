import { User } from "~/server/models/User";
import bcrypt from "bcrypt";

export const register = async (userData) => {
  userData.password = await bcrypt.hash(userData.password, 10);
  return User.create(userData);
};

export const getUserByEmail = async (email) => {
  return User.findOne({ email: email }, { password: true }).exec();
};

export const getUserById = async (id) => {
  console.log(id);
  return User.findById(id, {
    _id: true,
    name: true,
    email: true
  })
}