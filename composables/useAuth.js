import { jwtDecode } from "jwt-decode"
import useFetchWithToken from "./useFetchWithToken"
import { useAuthToken, useAuthUser, useAuthLoading } from "./states.js"

export default () => {

    const setToken = (newToken) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const setIsAuthLoading = (value) => {
        const authLoading = useAuthLoading()
        authLoading.value = value
    }

    const login = async (email, password) => {
        console.log(email, password);
        try {
            const data = await $fetch('/api/auth/login', {
                method: 'POST',
                body: {
                    email,
                    password
                }
            })

            setToken(data.access_token)
            setUser(data.user)
            return true;
        }
        catch (e) {
            console.log(e);
        }
    }

    // login 跟 logout 故意用不同寫法，諸位可以體會一下兩者概念是等價的
    // 意即： async ()=>{...} = ()=>{ return new Promise ((resolve, reject)=>{...})}

    const logout = () => {
        return new Promise(async (resolve, reject) => {
            try {
                await useFetchWithToken('/api/auth/logout', {
                    method: 'POST'
                })

                setToken(null)
                setUser(null)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    /** 刷新 access token */
    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await $fetch('/api/auth/refresh')
                console.log(`[useAuth] 刷新 access token`, data)
                if (data) setToken(data.access_token)
                resolve(true)
            } catch (e) {
                console.log(e)
                reject(false);
            }
        })
    }

    const reRefreshAccessToken = () => {
        const authToken = useState('auth_token')

        if (!authToken.value) {
            return
        }

        const jwt = jwtDecode(authToken.value)
        console.log("JWT持續時間", jwt.exp - Date.now() / 1000);
        setTimeout(async () => {
            console.log("觸發自動刷新")
            await refreshToken()
            reRefreshAccessToken()
        }, 599000);
    }

    const getUser = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await useFetchWithToken('/api/auth/user', {
                    method: "GET"
                })
                console.log(`[useAuth] getUser:`, data)
                setUser(data.user)
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const initAuth = () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true)
            try {
                await refreshToken()
                await getUser()

                reRefreshAccessToken()

                resolve(true)
            } catch (error) {
                console.log(error)
                reject(error)
            } finally {
                setIsAuthLoading(false)
            }
        })
    }

    return {
        login,
        logout,
        initAuth,
        getUser
    }
}