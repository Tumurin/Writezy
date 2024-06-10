import { getAllUsers } from "~/server/db/users";

export default defineEventHandler(async (event) => {
    try{
        const users = await getAllUsers()
        return {
            code:200,
            data:users,
            message:"成功取得所有使用者資料"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err
        }
    }
});
