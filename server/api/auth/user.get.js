/** 透過 refresh token 刷新 access token */
export default defineEventHandler(async (event) => {
    return {
        user: event.context.auth?.user
    }
});