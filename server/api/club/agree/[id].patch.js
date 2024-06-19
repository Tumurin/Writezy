import {agreeWithClub} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const club = await agreeWithClub(id,body)
        return {
            code:200,
            data:club,
            message:"已同意加入社團"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err.message
        }
    }
})