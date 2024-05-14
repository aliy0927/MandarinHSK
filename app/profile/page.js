"use client"
import Image from 'next/image'
import styles from "./page.module.css"
import { useState,useEffect,useRef } from 'react'
import Subpage from "./components/subpages"
import userAvater from '../../public/images/UserAvatar22.svg'
export default function Profile () {
  const [activeTab, setActiveTab] = useState('userinformation')
  const [activeButton, setActiveButton] = useState(null)
  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setActiveButton(tab)
  }
    // const colorboxRef = useRef();
    // const [opacity, setOpacity] = useState(1);
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     const scrollTop = window.pageYOffset;
    //     console.log(scrollTop);
    //     if (scrollTop >= 600) {
    //       const newOpacity = Math.min((1-(scrollTop - 600) / 1000), 1);
    //       setOpacity(newOpacity);
    //       console.log(opacity);
    //       console.log(newOpacity)
    //     }
    //   };
    //   window.addEventListener('scroll', handleScroll);
    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    // }, []);
  const userData = {
    userID: "203248032340",
    userName: "Lucy Jane"
  }
  

  return (
    <div >   
      <section className={styles.profileContain}>
        <div className={styles.ellibgc}>
        </div>
        <div className={styles.content}>
          <div className={styles.user}>
            <div className={styles.userAvatar}>
            <Image src={userAvater} className={styles.userImage}></Image>
            </div>
            <div className={styles.userName}>
              {userData.userName}
            </div>
            <div className={styles.userID}>
              ID:{userData.userID}
            </div>
          </div>
          <div className={styles.mainContent}>
            <div className={styles.sideNav}>
              <li className={`${styles.navli} ${styles.userinformation} ${activeButton === 'userinformation' ? styles.active : ''}`} onClick={() => handleTabClick('userinformation')}>Use Information</li>
              <li className={`${styles.navli} ${styles.account} ${activeButton === 'account' ? styles.active : ''}`} onClick={() => handleTabClick('account')}>Account</li>
              <li className={`${styles.navli} ${styles.privacy} ${activeButton === 'privacy' ? styles.active : ''}`} onClick={() => handleTabClick('privacy')}>Privacy</li>
              <li className={`${styles.navli} ${styles.notification} ${activeButton === 'notification' ? styles.active : ''}`} onClick={() => handleTabClick('notification')}>Notification</li>
              {/* <li className={`${styles.navli} ${styles.weeklysummary} ${activeButton === 'weeklysummary' ? styles.active : ''}`} onClick={() => handleTabClick('weeklysummary')}>Weekly Summary</li> */}
            </div>
            <div className={styles.fill}> 
            <Subpage activeTab={activeTab}></Subpage>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.colorBox}>
      </div>   
    </div>
  )
}
