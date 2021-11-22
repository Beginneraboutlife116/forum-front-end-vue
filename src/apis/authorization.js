// 有關於signin或signup的請求都會由這支檔案管理
import { apiHelper } from '../mixins/helpers'

export default {
  signIn({ email, password }) {
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}