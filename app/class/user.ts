// import { webpack } from 'next/dist/compiled/webpack/webpack'
import { UserInterface } from '../interface'
// const privateUser = new webpack()

export class User {
  avatar = '/public/defaultHeader.jpg'
  country = undefined
  createTime = ''
  email = ''
  inviteCode = ''
  languageLevel = ''
  lastActivity = ''
  remainPaper = undefined
  school = ''
  token = 0
  updateTime = ''
  userId = 0
  username = ''
  password = ''
  baseURL = 'http://124.222.243.156:10018'
  access_token = ''
  constructor(user: UserInterface) {
    for (let i in user) {
      user[i] ? (this[i] = user[i]) : null
    }
  }
  async post(
    path: string,
    body: BodyInit,
    options: { sendToken?: boolean; sendUid?: boolean } = {}
  ) {
    const { sendToken = false, sendUid = false } = options || {} // 如果options未提供，则使用空对象
    let headers = {
      'Content-Type': 'application/json',
    }
    sendToken && Object.assign(headers, { token: this.access_token })
    sendUid && Object.assign(headers, { uid: this.userId })
    const res = await fetch(this.baseURL + path, {
      method: 'POST',
      headers: headers,
      body: body,
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        } else {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
      })
      .then((res) => {
        if (res.code == 200) return { ok: true, data: res.data }
        else {
          return { ok: false, data: res }
        }
      })
      .catch((error) => {
        return { ok: false, data: error }
      })

    return res
  }
  async get(
    path: string,
    query: string = '',
    options: { sendToken?: boolean; sendUid?: boolean } = {}
  ) {
    const { sendToken = false, sendUid = false } = options || {} // 如果options未提供，则使用空对象
    let headers = {
      'Content-Type': 'application/json',
    }
    sendToken && Object.assign(headers, { token: this.access_token })
    sendUid && Object.assign(headers, { uid: this.userId })
    const res = await fetch(this.baseURL + path + query, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => {
        if (res.status == 200) {
          return res.json()
        } else {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
      })
      .then((res) => {
        if (res.code == 200) return { ok: true, data: res.data }
        else {
          return { ok: false, data: res }
        }
      })
      .catch((error) => {
        return { ok: false, data: error }
      })

    return res
  }
  async login() {
    const res = await this.post(
      '/api/user/login',
      JSON.stringify({
        userId: this.userId,
        username: this.username,
        password: this.password,
        email: this.email,
      })
    )
    if (res.ok) {
      document.cookie = `user_id=${res.data.data}; max-age=86400`
      this.access_token = res.data.data
    }
    return res
  }
  async authenticate() {
    //验证身份
    return true
  }
  async getcheckInDays() {
    //获得登录天数信息
    const res = await this.get('/api/user/checks/' + this.userId)
    if (res.ok) {
      return res.data
    } else {
      return { erorr: '天数获取失败', data: res }
    }
  }
  async getInviteNums() {
    //获得邀请信息
    let init = {
      hasInvited: 0,
    }
    const InviteNums = await this.get('/api/user/invite/' + this.userId, '')
    if (InviteNums.ok) {
      init = { ...init, hasInvited: InviteNums.data }
      return init
    } else {
    }
  }
  async getLearningDataByweek() {
    //获得每周学习信息
    const res = await this.get('/api/user/time/' + this.userId, '')
    if (res.ok) {
    } else {
    }
  }
  updateUserInfo(user: any) {
    for (let i in user) {
      user[i] ? (this[i] = user[i]) : null
    }
  }
  async init() {
    const logined = await this.get('', '', { sendToken: true })
    if (!logined.ok) return

    this['checkIndays'] = await this.getcheckInDays()
    this['inviteNums'] = await this.getInviteNums()
    this['learningDataByweek'] = await this.getLearningDataByweek()
  }
}
