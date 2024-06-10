import { register } from "~/server/db/users";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("建帳號", body);

  const { name, email, password } = body;
  console.log("建帳號", name, email, password);

  if (!name || !email || !password) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Bad Request",
        message: "缺少資料",
      })
    );
  }

  // 寫入 mongoDB
  const userData = {
    email,
    password,
    name,
  };

  let result = null;
  try {
    result = await register(userData);
    console.log(result);
    return {
      code: 200,
      message: "成功新建帳號",
      status: true,
      body: result,
    };
  } catch (e) {
    console.log(e);
    if (e.code === 11000)
      return {
        code: 400,
        status: false,
        message: "帳號重複"
      }
    else
      return {
        code: 500,
        status: false,
        message: e,
        errorCode: e.code,
        reason: e.keyPattern,
      };
  }
});
