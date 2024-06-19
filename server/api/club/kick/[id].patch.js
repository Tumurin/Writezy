import { removeOneMember} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const club = await removeOneMember(id,body)
        return {
            code:200,
            data:club,
            message:"已從社團中移除成員"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err.message
        }
    }
})