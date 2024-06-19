import { getUser } from "~/server/db/users";

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);
        const user = await getUser(body)
        return {
            code: 200,
            data: user,
            message: "成功登入"
        }
    } catch (err) {
        console.log(err);
        return {
            code: 400,
            message: err.message
        }
    }
})