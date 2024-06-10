import {deleteOneClub} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const club = await deleteOneClub(id)
        return {
            code:200,
            data:club,
            message:"已經成功刪除社團"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:"查無此社團"
        }
    }
})