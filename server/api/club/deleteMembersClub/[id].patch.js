import {deleteMembersClub} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event)
        console.log(body)
        const club = await deleteMembersClub(id,body.id)
        return {
            code:200,
            data:club,
            message:"成功查找所有成員"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:"查無此社團"
        }
    }
})