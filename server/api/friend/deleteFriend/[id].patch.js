import { deleteOneFriend } from "~/server/db/users";

export default defineEventHandler(async(event)=>{
    try{
        const id = event.context.params.id
        const body = await readBody(event);
        const updatedFriend = await deleteOneFriend(id,body)
        return {
            code:200,
            data:updatedFriend,
            message:"成功刪除好友"
        }
    }catch(err){
        console.log(err);
        return {
            code:400,
            message:err
        }
    }
})