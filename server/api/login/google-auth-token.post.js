// 只接受 post 請求方法
import { OAuth2Client } from 'google-auth-library'

export default defineEventHandler(async (event) => {
  // 使用 readBody 取得請求中的 Body
  const body = await readBody(event)

  // 建立 oauth2Client 物件來使用
  const oauth2Client = new OAuth2Client()
  oauth2Client.setCredentials({ access_token: body.accessToken }) //access_token

  const userInfo = await oauth2Client
    .request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    })
    .then((response) => response.data)
    .catch(() => null)

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid token'
    })
  }

  return {
    id: userInfo.sub,
    name: userInfo.name,
    avatar: userInfo.picture,
    email: userInfo.email,
    emailVerified: userInfo.email_verified
  }
})




