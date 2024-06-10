import { findOneClub } from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const clubs = await findOneClub(id)
        return {
            code:200,
            data:clubs,
            message:"已經成功取得單一社團資料"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:"查無此社團"
        }
    }
})