import { clubIntroduction } from "~/server/db/club"

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event);
        const clubIntro = await clubIntroduction(body)
        return {
            code:200,
            data:clubIntro,
            message:"已經成功送出介紹"
        }
    }catch(err){
        return{
            code:400,
            message:err.message
        }
    }
})