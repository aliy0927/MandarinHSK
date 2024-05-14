
export const VarfyForm = {
  passwordRegex: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
  emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  Varfypassword (password) {
    return this.passwordRegex.test(password)
  },
  Varfyemail (email) {
    return this.emailRegex.test(email)
  },
  varfyAll (obj) {
    let res = {}
    for (let i in obj) {
      if ((this["Varfy" + i] != void 0)) {
        res = {
          ...res,
          [i]: this["Varfy" + i](obj[i])
        }
      } else {
        res = {
          ...res,
          [i]: 'notFound'
        }
      }
    }
    return res
  }
}
