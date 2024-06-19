import { addFriend } from "~/server/db/users";

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        if(id == body.id){
            return {
                code:400,
                message:"不能加自己為好友"
            }
        }
        const updatedFriend = await addFriend(id,body)
        return {
            code:200,
            data:updatedFriend,
            message:"已經送出好友申請"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err.message
        }
    }
})