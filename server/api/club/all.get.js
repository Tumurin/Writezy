import { getAllClubs } from "~/server/db/club"

export default defineEventHandler(async (event) => {
    try{
        const clubs = await getAllClubs()
        return {
            code:200,
            data:clubs,
            message:"成功取得所有社團資料"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err.message
        }
    }
});


