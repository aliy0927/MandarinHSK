import { useState } from 'react'
import styles from './invite.module.css'
import copy from 'clipboard-copy'
import Image from 'next/image'
import quit from '@/public/icons/quit.svg'
import progressBackground from '@/public/images/progressBackground.svg'
import progress from '@/public/svgs/process.svg'
import progress1 from '@/public/svgs/process1.svg'
import progress2 from '@/public/svgs/process2.svg'
import progress3 from '@/public/svgs/process3.svg'
const ClipLink = async (link, func) => {
  try {
    await copy(link)
    func(true)
    console.log('Text copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy text to clipboard', err)
  }
}

export default function Invite ({ set, data }) {

  const [inviteRules, setInviteRules] = useState([{ exam: "1", tokens: 50 }, { exam: "3", tokens: 70 }, { exam: "ALL", tokens: 100 }])
  const [isCopy, setCopy] = useState(false)
  return (
    <>
      <div className={styles.cont}>
        <div>
          <div className={styles.title}>Your invite code</div>
          <div className={styles.code}>
            <span>  {data.code}</span>
          </div>
        </div>

        <div className={styles.rules}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM10 15.3571C9.42634 15.3571 8.96205 14.8929 8.96205 14.3192C8.96205 13.7455 9.42634 13.2812 10 13.2812C10.5737 13.2812 11.0379 13.7455 11.0379 14.3192C11.0379 14.8929 10.5737 15.3571 10 15.3571ZM11.1585 11.1518C10.9732 11.2098 10.8438 11.3884 10.8438 11.5826V11.9777C10.8438 12.1562 10.6987 12.3013 10.5201 12.3013H9.48214C9.30357 12.3013 9.15848 12.1562 9.15848 11.9777V10.9397C9.16518 10.2969 9.65848 9.72768 10.2857 9.63839C11.2054 9.51786 11.8862 8.80804 11.8862 7.98661C11.8862 7.07366 11.0491 6.31473 10.0022 6.31473C8.95759 6.31473 8.1183 7.07366 8.1183 7.99107C8.1183 8.16071 7.97545 8.29688 7.79911 8.29688H6.74777C6.57143 8.29688 6.42857 8.16295 6.42857 7.98884C6.42857 6.125 8.0558 4.62277 10.0491 4.64509C11.9754 4.67188 13.5469 6.14286 13.5714 7.9442C13.5938 9.39955 12.6071 10.6853 11.1585 11.1518Z" fill="#A54136" />
          </svg>
          <span>Invite Rules:</span>
        </div>
        <ul>
          <div>The specific rules are as follows:</div>
          <li><span>Invited 1 person:</span><span>unlock {inviteRules[0].exam} exam, {inviteRules[0].tokens} tokens</span></li>
          <li><span>Invited 2 person:</span><span>unlock {inviteRules[1].exam} exam, {inviteRules[0].tokens} tokens</span></li>
          <li><span>Invited 3 person:</span><span>unlock {inviteRules[2].exam} exam,{inviteRules[0].tokens} tokens</span></li>
        </ul>
        <div>Current Process</div>
        <div className={styles.bar}>
          <svg className='stroke' width="380" height="14" viewBox="0 0 380 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.1" d="M3 6.5H374" stroke="#6F614C" stroke-width="5" strokeLinecap="round" />
            <path d="M3 6.5H127" stroke="#6F614C" stroke-width="5" strokeLinecap="round" />
            <circle cx="127" cy="7" r="7" fill="#6F614C" />
            <circle cx="250" cy="7" r="6.5" fill="#FCECD2" stroke="#6F614C" />
            <circle cx="373" cy="7" r="6.5" fill="#FCECD2" stroke="#6F614C" />
          </svg>


          <div className={styles.top}></div>
        </div>
        <button onClick={() => { ClipLink(data.code, setCopy) }}>
          {
            isCopy ?
              <svg className={`stroke icon`} t="1703317499169" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4366" id="mx_n_1703317499170" width="32" height="32"><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m-213.333333 468.608l-105.664-105.642666a21.248 21.248 0 0 0-30.122667 0.042666c-8.32 8.32-8.213333 21.973333-0.064 30.101334l120.810667 120.832a21.248 21.248 0 0 0 30.122666-0.085334l211.157334-211.157333a21.290667 21.290667 0 0 0 0-30.186667 21.397333 21.397333 0 0 0-30.250667 0.106667l-196.010667 195.989333z" fill="#FCECD2" p-id="4367"></path></svg>
              : "Copy link to your friend"
          }


        </button>
        <div className={styles.quit} onClick={() => set("home")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path opacity="0.5" d="M5.12835 6.3L0.252876 1.42411C0.101991 1.26789 0.0185015 1.05866 0.0203887 0.841476C0.022276 0.624294 0.109389 0.416542 0.262966 0.262966C0.416542 0.109389 0.624295 0.0222757 0.841476 0.0203884C1.05866 0.0185012 1.26789 0.101991 1.42412 0.252876L6.3 5.12876L11.1759 0.252876C11.2523 0.173763 11.3437 0.11066 11.4448 0.0672486C11.5458 0.0238374 11.6545 0.000987007 11.7645 3.1275e-05C11.8745 -0.000924457 11.9835 0.0200334 12.0853 0.0616819C12.1871 0.10333 12.2796 0.164836 12.3574 0.242609C12.4352 0.320381 12.4967 0.412864 12.5383 0.514661C12.58 0.616458 12.6009 0.725531 12.6 0.835514C12.599 0.945497 12.5762 1.05419 12.5328 1.15525C12.4893 1.25631 12.4262 1.34771 12.3471 1.42411L7.47124 6.3L12.3471 11.1759C12.4262 11.2523 12.4893 11.3437 12.5328 11.4448C12.5762 11.5458 12.599 11.6545 12.6 11.7645C12.6009 11.8745 12.58 11.9835 12.5383 12.0853C12.4967 12.1871 12.4352 12.2796 12.3574 12.3574C12.2796 12.4352 12.1871 12.4967 12.0853 12.5383C11.9835 12.58 11.8745 12.6009 11.7645 12.6C11.6545 12.599 11.5458 12.5762 11.4448 12.5328C11.3437 12.4893 11.2523 12.4262 11.1759 12.3471L6.3 7.47165L1.42412 12.3471C1.34771 12.4262 1.25631 12.4893 1.15525 12.5328C1.05419 12.5762 0.945498 12.599 0.835514 12.6C0.725531 12.6009 0.616459 12.58 0.514661 12.5383C0.412864 12.4967 0.320381 12.4352 0.242608 12.3574C0.164835 12.2796 0.10333 12.1871 0.0616819 12.0853C0.0200334 11.9835 -0.000924481 11.8745 3.12766e-05 11.7645C0.000987035 11.6545 0.0238373 11.5458 0.0672486 11.4448C0.11066 11.3437 0.173763 11.2523 0.252876 11.1759L5.12835 6.3Z" fill="#6F614C" />
          </svg>
        </div>
      </div>

    </>
  )
}