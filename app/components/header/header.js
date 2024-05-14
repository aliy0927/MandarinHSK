'use client'
import styles from './header.module.css'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import touxiang from '@/public/images/touxiang.png'
import { UseDispatch, useDispatch } from 'react-redux'
import { transState } from '@/store/QuiteSlice'
import settingIcon from '@/public/svgs/setting.svg'
export default function Header () {
  const menu = useRef()
  const headcont = useRef()
  const headercontainerRef = useRef()
  const dispatch = useDispatch()
  const handleMouse = (event) => {
    const map = {
      "in": "flex",
      "out": "none"
    }
    const ele = menu.current
    if (ele) {
      ele.style.setProperty('--display', map[event])
    }
  }

  useEffect(() => {
    const controller = new AbortController()
    const { signal } = controller
    const element = headcont.current // 您要点击的元素
    const headercontainer = headercontainerRef.current

    //挂载mask点击监听
    document.addEventListener('click', function (event) {

      if (element) {
        const isClickInsideElement = element.contains(event.target)

        if (!isClickInsideElement) {
          // 点击了元素范围之外的区域
          handleMouse("out")
        }
      }
    }, { signal })
    window.addEventListener('scroll', (event) => {

      if (headercontainer) {
        let islucency = true
        const rect = headercontainer.getBoundingClientRect()
        // const x = rect.left + window.scrollX // 获取 X 坐标
        const y = rect.top + window.scrollY   // 获取 Y 坐标
        if (y >= 300) {//改变背景色节点

          headercontainer.style.setProperty('--bgc', 'var(--Color_003)')
          headercontainer.style.setProperty('--shadow', '0vw 0.2778vw 4.1667vw rgba(0, 0, 0, 0.05)')
        }

        else {
          headercontainer.style.setProperty('--bgc', 'rgba(0,0,0,0)')
          headercontainer.style.setProperty('--shadow', 'none')
        }
      } else {
        console.log('找不到元素')
      }
    }, { signal })//有待优化

    return () => {
      controller.abort()//卸载监听
    }
  }, [])
  return (
    <div className={styles.headercontainer} ref={headercontainerRef} >
      <div className={styles.header}>

        <div className={styles.intro}>
          <svg width="2.2917vw" height="2.5vw" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5925 5.94667C23.3481 7.6021 24.0671 8.52948 24.7641 9.0743C25.369 9.5472 25.9349 9.70455 26.3242 9.81279C26.3869 9.83023 26.445 9.8464 26.498 9.8624C26.6986 9.92299 26.9114 10.1272 27.0339 10.438C27.1607 10.7599 27.1218 11.0133 27.0566 11.1155C26.8887 11.3784 26.8143 11.6873 26.7631 11.9254C26.7465 12.0027 26.7318 12.0757 26.7175 12.1463C26.6816 12.3237 26.6489 12.4855 26.598 12.6601C26.4704 13.0982 26.2556 13.5079 25.6844 13.8226C25.5186 13.914 25.3577 13.999 25.2016 14.0814C24.7105 14.3407 24.2677 14.5746 23.8739 14.9006C23.3246 15.3554 22.8661 15.9779 22.2874 17.0629C21.9551 17.6859 21.7256 18.6165 21.568 19.6308C21.4077 20.6629 21.3129 21.8457 21.2795 23.0148C21.2462 24.1841 21.2741 25.3516 21.3628 26.354C21.4497 27.3359 21.5998 28.2242 21.8411 28.7937C21.9982 29.1645 21.9749 29.5207 21.786 29.8914C21.5865 30.2831 21.1945 30.6985 20.6058 31.1007C19.4299 31.9038 17.6224 32.5492 15.6325 32.838C13.6465 33.1262 11.5453 33.0495 9.78917 32.4712C8.04199 31.8959 6.6776 30.8421 6.03728 29.1866C3.22917 21.9266 4.15874 14.3842 7.65252 9.64263C9.40906 7.25877 12.5295 4.73335 15.5527 3.64424C17.061 3.10087 18.4854 2.93633 19.6826 3.26172C20.8514 3.57938 21.8791 4.38355 22.5925 5.94667Z" fill="#FBEBD1" stroke="#A54136" strokeWidth="1.20732" />
            <path d="M19.794 1.75153C19.4298 1.32042 18.822 1.18621 18.281 1.20138C17.5629 1.2213 16.8703 1.51155 16.3213 1.96874C15.5255 2.66353 15.0807 3.69742 15.3829 4.74601C15.6335 5.61628 16.3531 6.26981 17.2777 6.27266C18.2611 6.27598 19.1725 5.7818 19.6742 4.93287C19.9542 4.46145 20.1005 3.91842 20.1398 3.37397C20.1792 2.82952 20.1683 2.19449 19.794 1.75153Z" fill="#A54136" />
            <path d="M31.1942 26.7532C30.9512 26.288 30.5969 25.6705 30.0966 25.4462C29.6518 25.2465 29.1289 25.3428 28.6755 25.459C28.3264 25.5486 27.9839 25.6638 27.6433 25.7819C27.3406 25.8868 27.0389 26.0229 26.7272 26.0959C26.0929 26.2443 25.6287 25.837 25.2966 25.3371C24.7125 24.4587 24.3643 23.4116 23.9953 22.4313C23.7177 21.6952 23.4468 20.9573 23.1682 20.2217C22.9101 19.5407 22.6784 18.8373 22.3189 18.2013C21.2492 16.31 19.2734 15.2344 17.2635 14.6045C15.3284 13.998 13.3161 13.7784 11.3232 13.4521C10.409 13.3022 9.42557 13.1395 8.67617 12.5548C8.37086 12.3173 8.13236 12.0045 7.98398 11.647C7.69701 10.9557 7.81966 9.83585 8.15371 9.16774C7.23707 9.30877 5.94082 12.0888 5.54481 13.0459C4.51639 15.5626 5.05919 16.1873 6.76335 18.0557C7.56865 18.9436 8.80928 19.4273 9.90212 19.8475C11.2076 20.3497 12.5506 20.7401 13.8765 21.183C15.1223 21.5989 16.084 22.4199 16.8798 23.4519C17.3537 24.0549 17.7601 24.7083 18.0915 25.4002C17.0088 26.0305 16.4367 26.7318 16.0129 27.8973C15.5891 29.0628 15.9498 30.1264 16.1189 30.5461C16.2662 30.9122 16.4866 31.2862 16.7637 31.5665C17.4568 32.2727 18.3824 32.7322 19.3033 33.0623C21.6244 33.8947 24.2942 34.0109 26.6765 33.3758C27.9749 33.0306 29.2615 32.4358 30.2743 31.5395C31.0289 30.8717 31.6044 29.9995 31.6954 28.9785C31.7598 28.203 31.549 27.4319 31.1942 26.7532Z" fill="#A54136" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start", marginLeft: "0.2778vw" }}>
            <span className={styles.mtitle}>
              {
                "Mandarinhsk".split("").map((item, index) => <span key={`header_${item}_${index}`} >{item}</span>)
              }
            </span>
            <span className={styles.stitle}> A smarter way to learn HSK</span>
          </div>


        </div>
        <ul>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.4861vw" height="0.4167vw" viewBox="0 0 7 6" fill="none">
            <circle cx="3.5" cy="3" r="3" fill="white" fillOpacity="0.7" />
          </svg>
          <li className={"hover2"}>
            <Link href="/home" style={{ all: "unset" }}>
              Home
            </Link>
          </li>

          <svg xmlns="http://www.w3.org/2000/svg" width="0.4861vw" height="0.4167vw" viewBox="0 0 7 6" fill="none">
            <circle cx="3.5" cy="3" r="3" fill="white" fillOpacity="0.7" />
          </svg>
          <li className={"hover2"}>
            <div onClick={() => dispatch(transState())} style={{ all: "unset" }}>
              MandaGPT
            </div>
          </li>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.4861vw" height="0.4167vw" viewBox="0 0 7 6" fill="none">
            <circle cx="3.5" cy="3" r="3" fill="white" fillOpacity="0.7" />
          </svg>
          <li className={"hover2"}>About Us</li>
          <svg xmlns="http://www.w3.org/2000/svg" width="0.4861vw" height="0.4167vw" viewBox="0 0 7 6" fill="none">
            <circle cx="3.5" cy="3" r="3" fill="white" fillOpacity="0.7" />
          </svg>
        </ul>
        <svg className={styles.intle} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M14.8 4.8C9.38713 4.8 5 9.18713 5 14.6C5 20.0129 9.38713 24.4 14.8 24.4C20.2129 24.4 24.6 20.0129 24.6 14.6C24.6 9.18713 20.2129 4.8 14.8 4.8ZM12.5493 6.48233C11.9654 6.97642 11.4427 7.65425 11.0082 8.475C10.6121 8.2741 10.2324 8.04462 9.8755 7.78573H9.84855C10.6632 7.19264 11.5781 6.75113 12.5493 6.48233ZM8.79342 8.69713C9.30931 9.09696 9.86322 9.44517 10.4472 9.73675C10.0241 10.8866 9.74728 12.2153 9.66072 13.6429H6.43162C6.6427 11.7763 7.47442 10.0346 8.79342 8.69713ZM6.38833 15.0214H9.63867C9.68032 16.6539 9.9735 18.1713 10.448 19.4641C9.85998 19.7548 9.3071 20.1051 8.79423 20.5029C7.34545 19.0338 6.4889 17.0823 6.38833 15.0214ZM9.851 21.4143H9.87795C10.2357 21.1554 10.613 20.9259 11.0107 20.725C11.4476 21.5457 11.9678 22.2236 12.5517 22.7177C11.5802 22.4496 10.6653 22.0081 9.851 21.4143ZM14.2071 22.1435C13.4533 21.9043 12.7739 21.2166 12.2357 20.2236C12.8753 20.0193 13.5372 19.8926 14.2071 19.8463V22.1435ZM14.2071 18.4645C13.3491 18.5152 12.5017 18.6794 11.6869 18.9528C11.2981 17.8258 11.0572 16.4783 11.0172 15.0214H14.2071V18.4645ZM14.2071 13.6429H11.0392C11.1177 12.3909 11.3455 11.2353 11.6844 10.2472C12.4847 10.515 13.3284 10.6816 14.2046 10.7355V13.6429H14.2063H14.2071ZM14.2071 9.35373C13.5372 9.30741 12.8753 9.18073 12.2357 8.97643C12.7739 7.98092 13.4533 7.2941 14.2071 7.05727V9.35373ZM23.1692 13.6429H19.9401C19.8544 12.2153 19.5767 10.8866 19.1537 9.73675C19.7417 9.4452 20.2945 9.09485 20.8074 8.69713C22.1264 10.0346 22.9581 11.7763 23.1692 13.6429ZM19.749 7.78573H19.722C19.3644 8.04462 18.9871 8.2741 18.5893 8.475C18.1524 7.65425 17.6322 6.97642 17.0483 6.48233C18.0198 6.75035 18.9347 7.19193 19.749 7.78573ZM15.584 7.1275C16.2618 7.41497 16.8719 8.06667 17.3643 8.97643C16.7959 9.15855 16.1981 9.28105 15.584 9.33822V7.1275ZM15.584 10.7225C16.3917 10.6588 17.1724 10.4962 17.9131 10.2472C18.2537 11.2353 18.4815 12.3909 18.5583 13.6429H15.584V10.7225ZM15.584 15.0214H18.5836C18.5428 16.4775 18.3019 17.825 17.9139 18.9528C17.1595 18.7002 16.3771 18.5406 15.584 18.4775V15.0214ZM15.584 22.0725V19.8618C16.1981 19.9189 16.7935 20.0414 17.3643 20.2236C16.8719 21.1325 16.2618 21.785 15.584 22.0725ZM17.0499 22.7177C17.6338 22.2236 18.1565 21.5457 18.591 20.725C18.9871 20.9259 19.3668 21.1554 19.7237 21.4143H19.7506C18.936 22.0074 18.0211 22.4489 17.0499 22.7177ZM20.8058 20.5029C20.2899 20.103 19.736 19.7548 19.152 19.4633C19.6281 18.1713 19.9197 16.6523 19.9613 15.0206H23.2117C23.1113 17.0817 22.2547 19.0336 20.8058 20.5029Z" fill="#A54136" />
        </svg>
        <div className={`${styles.Premium} hover2`} >
          <svg xmlns="http://www.w3.org/2000/svg" width="0.9028vw" height="0.9028vw" viewBox="0 0 13 13" fill="none">
            <g clipPath="url(#clip0_43_2987)">
              <path d="M12.3752 4.0832C12.3752 3.314 11.7496 2.6884 10.98 2.6884C10.2104 2.6884 9.58482 3.314 9.58482 4.0832C9.58482 4.742 10.0448 5.2924 10.66 5.438C10.1072 6.54 9.37682 7.5644 8.98562 7.5644C8.60482 7.5644 7.83722 6.4536 7.06082 4.3252C7.61922 4.0796 7.99962 3.5256 7.99962 2.886C7.99962 2.0156 7.29122 1.3076 6.42082 1.3076C5.55002 1.3076 4.84162 2.016 4.84162 2.886C4.84162 3.5272 5.22362 4.082 5.78362 4.3264C4.95722 6.616 4.23802 7.4596 3.94282 7.4596C3.39442 7.4596 2.63282 6.3932 2.13722 5.4376C2.75282 5.2924 3.21362 4.7416 3.21362 4.0824C3.21362 3.3132 2.58762 2.6876 1.81842 2.6876C1.04922 2.6876 0.423218 3.314 0.423218 4.0832C0.423218 4.6104 0.720818 5.0648 1.15362 5.302L1.43002 10.8708C1.43642 11.0004 1.50522 11.1188 1.61482 11.1884C1.67282 11.2256 3.07362 12.0904 6.42082 12.0904C9.76802 12.0904 11.1688 11.2224 11.2268 11.1856C11.3368 11.1152 11.4056 10.996 11.4116 10.8656L11.658 5.2948C12.0836 5.0564 12.3752 4.6056 12.3752 4.0832Z" fill="#FCECD2" />
            </g>
            <defs>
              <clipPath id="clip0_43_2987">
                <rect width="12.8" height="12.8" fill="white" transform="translate(0 0.0999985)" />
              </clipPath>
            </defs>
          </svg>
          <span>
            <Link href="/premium" style={{ all: "unset" }}>
              Premium
            </Link>

          </span>
        </div>
        <div className={styles.headCont} onMouseOver={() => handleMouse("in")} onClick={(event) => { }} ref={headcont} >
          <div className={styles.headPortrait} >
            <Image src={touxiang} alt='touxiang'></Image>
          </div>
          <div className={styles.menu} ref={menu} >
            <li className={"hover1"}>
              <Image src={settingIcon} alt='settingIcon'></Image>
              <span>
                <Link href="/profile" style={{ all: "unset" }}>
                  Setting
                </Link>

              </span>
            </li>
            <li className={"hover1"}>
              <Image src={settingIcon} alt='settingIcon'></Image>
              <span>Learning History</span>
            </li>
            <li className={"hover1"}>

              <Image src={settingIcon} alt='settingIcon'></Image>
              <span>Awards and Points</span>
            </li>
          </div>
        </div>
      </div>
    </div>


  )
}