import {addOneClub} from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const club = await addOneClub(body)
        return {
            code:200,
            data:club,
            message:"已經成功新增社團"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:"欄位填寫錯誤"
        }
    }
})