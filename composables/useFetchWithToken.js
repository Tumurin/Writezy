import { useAuthToken } from "./states.js"
export default (url, options) => {
    const token = useAuthToken().value
    console.log(`[useFetchWithToken] ${url} 夾帶 token 傳送: ${token}`)
    return $fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`
        }
    })
}