import { User } from "~/server/models/User";
import bcrypt from "bcrypt";
export const register = async (userData) => {
  console.log(userData);
  userData.password = await bcrypt.hash(userData.password, 10);
  console.log(userData);
  //   return "OK"; // 先不要送出，看一下密碼有沒有被雜湊
  return User.create(userData);
};
