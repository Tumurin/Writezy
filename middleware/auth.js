import { useAuthUser } from "~/composables/states.js"
export default defineNuxtRouteMiddleware((to, from) => {
    const user = useAuthUser();
    console.log("(中間件)確認登入狀態", user.value);
    const isLogin = user?.value != null && user?.value != undefined;
    if (!isLogin) {
        return navigateTo("/login")
    }
})
