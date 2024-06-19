import {modifyOneClub} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const club = await modifyOneClub(id,body)
        return {
            code:200,
            data:club,
            message:"已成功修改社團資料"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err.message
        }
    }
})