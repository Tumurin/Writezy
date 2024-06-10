import { removeOneManager } from "~/server/db/club"


export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const club = await removeOneManager(id,body)
        return {
            code:200,
            data:club,
            message:"已經成功修改社團管理員權限"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:"系統出錯，請稍後再試"
        }
    }
})