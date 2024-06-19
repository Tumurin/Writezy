import { joinOneClub } from "~/server/db/club";

export default defineEventHandler(async (event) => {
  try {
    const id = event.context.params.id;
    const body = await readBody(event);
    const club = await joinOneClub(id, body);
    if (club.message) {
      return {
        code: 400,
        message: club.message,
      };
    } else {
      return {
        code: 200,
        data: club,
        message: "已送出社團申請",
      };
    }
  } catch (err) {
    console.log(err);
    return {
      code: 400,
      message: err.message,
    };
  }
});
