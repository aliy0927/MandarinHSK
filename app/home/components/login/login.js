
import styles from './login.module.css'
import Image from "next/image"
import { useState } from 'react'
import checkIcon from '@/public/yesIcon.svg'
import googleIcon from '@/public/google.svg'
import appleIcon from '@/public/apple.svg'
import facebookIcon from '@/public/facebook.svg'
function useUserProfil () {
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    birthday: '',
    gender: '',
    country: '',
    city: '',
    postalCode: '',
    street: '',
    houseNumber: '',
    isKeep: false,
    isPrivacy: false,
  })

  return [user, setUser]
}
export default function Login ({ set }) {
  // const [user, setUser] = useUserProfil()
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [email, setEmail] = useState(null)
  const [isKeep, setKeep] = useState(false)
  const [isPrivacy, setPrivacy] = useState(false)

  const changePrivacy = () => {
    setPrivacy((prePrivacy) => !prePrivacy)
  }

  const changeKeep = () => {
    setKeep((preKeep) => !preKeep)
  }
  const createLoginForm = (formdata) => {
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password"),
    }
    console.log(data)
  }

  return (
    <>
      <div className={styles.Logincontain}>
        <div> <div className={styles.mtitle}>Log In to Mandarin</div>
          <div className={styles.stitle}>Be a part of Filebox community that shares the love of chinese.</div>
        </div>

        <form action={createLoginForm} className={styles.form}>
          <div className={styles.inputContainer}>
            <input className={styles.input}
              type="text"
              placeholder="Enter your email"
              name='email'
              value={email}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </div>
          <div className={styles.inputContainer}>
            <input className={styles.input}
              type="password"
              placeholder="Password"
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={true}
            />
          </div>

          <div className={styles.forget}>
            <div className={styles.privacy}>
              <div className={styles.checkbox}>
                <div className={styles.agreeIcon} onClick={changeKeep}>
                  {isKeep && (<Image className={styles.yesIcon} src={checkIcon} alt=''></Image>)}
                </div>
              </div>
              <div className={styles.description} >Keep me logged in
              </div>
            </div>
            <span >Forgot password?</span>
          </div>

          <button type="submit" className={styles.loginBnt} disabled={!isPrivacy}>Log In</button>
          <div className={styles.signUp}>
            <div className={styles.signUpText}>{"Don't have an account?"}</div>
            <div className={styles.signUpBtn} onClick={() => set("signup")}>{"Sign Up"}</div>
          </div>
          <div className={styles.privacy}>
            <div className={styles.checkbox}>
              <div className={styles.agreeIcon} onClick={changePrivacy}>
                {isPrivacy && (<Image className={styles.yesIcon} src={checkIcon} alt=''></Image>)}
              </div>
            </div>
            <div className={styles.description} >I agree with User Terms and Privacy Policy
            </div>
          </div>
        </form>

        <div className={styles.other}>
          <div className={styles.cutOr}>
            <div className={styles.cut}></div>
            <span>OR</span>
            <div className={styles.cut}></div>
          </div>
          <div className={styles.otherBtn}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="23" viewBox="0 0 21 23" fill="none">
              <path d="M20.8792 11.745C20.8792 11.021 20.8205 10.2931 20.6953 9.58093H10.6499V13.6821H16.4024C16.1637 15.0047 15.3967 16.1748 14.2736 16.9183V19.5794H17.7055C19.7209 17.7245 20.8792 14.9852 20.8792 11.745Z" fill="#6F614C" />
              <path d="M10.6499 22.1504C13.5223 22.1504 15.9446 21.2073 17.7095 19.5793L14.2775 16.9183C13.3227 17.5679 12.09 17.9358 10.6538 17.9358C7.8754 17.9358 5.5196 16.0613 4.67433 13.5411H1.13281V16.2843C2.94075 19.8807 6.62315 22.1504 10.6499 22.1504Z" fill="#6F614C" />
              <path d="M4.6705 13.5412C4.22439 12.2185 4.22439 10.7862 4.6705 9.46355V6.72034H1.13289C-0.377632 9.72965 -0.377632 13.2751 1.13289 16.2844L4.6705 13.5412Z" fill="#6F614C" />
              <path d="M10.6499 5.06499C12.1683 5.04151 13.6357 5.61285 14.7354 6.66161L17.776 3.62099C15.8507 1.81306 13.2953 0.819082 10.6499 0.850388C6.62315 0.850388 2.94075 3.12009 1.13281 6.72031L4.67042 9.46352C5.51177 6.93945 7.87148 5.06499 10.6499 5.06499Z" fill="#6F614C" />
            </svg>
            <div className={styles.Ocut}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="25" viewBox="0 0 21 25" fill="none">
              <path d="M17.5832 13.281C17.5955 12.3391 17.8458 11.4156 18.3107 10.5963C18.7757 9.77705 19.4403 9.08868 20.2427 8.5952C19.7329 7.86705 19.0604 7.26775 18.2786 6.84489C17.4967 6.42203 16.6271 6.18724 15.7387 6.15917C13.8422 5.96049 12.0045 7.29365 11.0382 7.29365C10.0538 7.29365 8.56601 6.17836 6.96532 6.21222C5.92937 6.24566 4.91976 6.54689 4.03486 7.08657C3.14997 7.62626 2.41997 8.38598 1.91602 9.2917C-0.267159 13.0711 1.36176 18.6261 3.45237 21.6818C4.4988 23.1776 5.72133 24.8482 7.32203 24.7895C8.88773 24.7241 9.47247 23.7905 11.3633 23.7905C13.2349 23.7905 13.7835 24.7895 15.4158 24.7523C17.0967 24.7241 18.1544 23.2487 19.1636 21.7383C19.9159 20.6725 20.495 19.4945 20.8794 18.2479C19.903 17.8351 19.0697 17.144 18.4835 16.2607C17.8973 15.3774 17.5842 14.3411 17.5832 13.281Z" fill="#6F614C" />
              <path d="M14.499 4.14864C15.4151 3.0492 15.8666 1.63594 15.7576 0.208984C14.3578 0.355932 13.0648 1.02502 12.1363 2.08286C11.6825 2.59926 11.3348 3.20003 11.1133 3.85083C10.8917 4.50163 10.8005 5.18971 10.8449 5.87576C11.545 5.88298 12.2375 5.7313 12.8704 5.43214C13.5034 5.13298 14.0602 4.69413 14.499 4.14864Z" fill="#6F614C" />
            </svg>
            <div className={styles.Ocut}></div>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25" fill="none">
              <path d="M11.5758 19.4554H14.449V12.5H16.3651L16.6196 10.1036H14.4508L14.4526 8.90357C14.4526 8.27768 14.5124 7.94375 15.4089 7.94375H16.608V5.54375H14.6901C12.3856 5.54375 11.5758 6.70625 11.5758 8.6625V10.1009H10.141V12.5H11.5776V19.4554H11.5758ZM13.3794 0C20.283 0 25.8794 5.59643 25.8794 12.5C25.8794 19.4027 20.283 25 13.3794 25C6.47493 25 0.879395 19.4027 0.879395 12.5C0.879395 5.59643 6.47493 0 13.3794 0Z" fill="#6F614C" />
            </svg>
          </div>
        </div>
        <div className={styles.quit} onClick={() => set("home")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path opacity="0.5" d="M5.12835 6.3L0.252876 1.42411C0.101991 1.26789 0.0185015 1.05866 0.0203887 0.841476C0.022276 0.624294 0.109389 0.416542 0.262966 0.262966C0.416542 0.109389 0.624295 0.0222757 0.841476 0.0203884C1.05866 0.0185012 1.26789 0.101991 1.42412 0.252876L6.3 5.12876L11.1759 0.252876C11.2523 0.173763 11.3437 0.11066 11.4448 0.0672486C11.5458 0.0238374 11.6545 0.000987007 11.7645 3.1275e-05C11.8745 -0.000924457 11.9835 0.0200334 12.0853 0.0616819C12.1871 0.10333 12.2796 0.164836 12.3574 0.242609C12.4352 0.320381 12.4967 0.412864 12.5383 0.514661C12.58 0.616458 12.6009 0.725531 12.6 0.835514C12.599 0.945497 12.5762 1.05419 12.5328 1.15525C12.4893 1.25631 12.4262 1.34771 12.3471 1.42411L7.47124 6.3L12.3471 11.1759C12.4262 11.2523 12.4893 11.3437 12.5328 11.4448C12.5762 11.5458 12.599 11.6545 12.6 11.7645C12.6009 11.8745 12.58 11.9835 12.5383 12.0853C12.4967 12.1871 12.4352 12.2796 12.3574 12.3574C12.2796 12.4352 12.1871 12.4967 12.0853 12.5383C11.9835 12.58 11.8745 12.6009 11.7645 12.6C11.6545 12.599 11.5458 12.5762 11.4448 12.5328C11.3437 12.4893 11.2523 12.4262 11.1759 12.3471L6.3 7.47165L1.42412 12.3471C1.34771 12.4262 1.25631 12.4893 1.15525 12.5328C1.05419 12.5762 0.945498 12.599 0.835514 12.6C0.725531 12.6009 0.616459 12.58 0.514661 12.5383C0.412864 12.4967 0.320381 12.4352 0.242608 12.3574C0.164835 12.2796 0.10333 12.1871 0.0616819 12.0853C0.0200334 11.9835 -0.000924481 11.8745 3.12766e-05 11.7645C0.000987035 11.6545 0.0238373 11.5458 0.0672486 11.4448C0.11066 11.3437 0.173763 11.2523 0.252876 11.1759L5.12835 6.3Z" fill="#6F614C" />
          </svg>
        </div>
      </div>
    </>
  )
}

