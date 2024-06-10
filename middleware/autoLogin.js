import { useAuthUser } from "~/composables/states.js"
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useAuthUser();
    console.log("[middleware/autoLogin] 首頁自動跳轉貼文牆", user, to, from)
    const isLogin = user?.value != null && user?.value != undefined;
    if (isLogin) {
        return navigateTo("/")
    }
})
