'use client'
import styles from "./aichat.module.css"
import { useEffect, useRef, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { transState } from '@/store/QuiteSlice'
import questionIcon from '@/public/images/Question2.svg'
import crownfill from '@/public/images/crownfill1.svg'
import setting from '@/public/images/AI_Setting.svg'
import newchat from '@/public/images/AI_New Chat.svg'
import history from "@/public/images/AI_History.svg"
import userAuthor from '@/public/images/userIcon2.svg'
import axios from "axios"
import Image from "next/image"
export default function AIchat () {

  const [chats, setChats] = useState([])// const[apiChats,setApiChats]=useState([])
  const aichat = useRef(null)
  const [inputValue1, setInputValue1] = useState('')
  const AIChatQuit = useSelector((state) => state.AIChatQuit.value)
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false);
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addChat()
    }
  }
  
  const historyGroups = [];
  let currentDate = null;
  
  chats.forEach((chat) => {
    // 获取当前消息的日期
    const chatDate = chat.date.toLocaleDateString('zh-Hans-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  
    if (chatDate !== currentDate) {
      historyGroups.push({
        date: chat.date,
        isSeparator: true
      });
      currentDate = chatDate;
    }
  
    // 将当前消息插入到当前日期的组中
    historyGroups.push({
      date: chat.date,
      isSeparator: false,
      chat: chat
    });
  });
  useEffect(() => {//监听关闭AIchat组件
    if (aichat) {
      AIChatQuit ? aichat.current.style.display = 'block' : aichat.current.style.display = 'none'
    }
  }, [AIChatQuit])
  const addChat = () => {
    if (inputValue1.trim() !== '') {
      const newchat = {
        id: new Date().getTime(),
        text: inputValue1,
        date: new Date(),
        type:1,
      }
      setChats([...chats, newchat])
      setInputValue1('')  
    }
  }
  
  const apiChats = [
    { id: 1, text: "你好，有什么可以帮助您的吗？", date: new Date() },
    { id: 2, text: "请问您需要咨询什么问题呢？", date: new Date()},
    { id: 3, text: "很抱歉，我暂时无法回答这个问题。", date: new Date()},
    { id: 4, text: "这是一个自动生成的回复。", date: new Date()},
    { id: 5, text: "请问还有其他问题需要解答吗？", date: new Date()}
  ];
  
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsHovered(false);
    }, 200); // 添加一个200毫秒的延迟
  };
 
  
  const renderChats = () => {
    return (
      <ul className={styles.chatList}>
        {chats.map((chat, index) => (
          <li key={chat.id} className={styles.chatItem}>
            <div className={styles.userItem}>
              <div className={styles.userText}>
                {chat.text}
              </div>
              <div className={styles.userAuthor}>
                <Image src={userAuthor} className={styles.authorImage}></Image>
              </div>
            </div>
            <div className={styles.gtpItem}>
              {/* {index < apiChats.length && ( */
                <div className={styles.gtpText}>

                  {apiChats.find(apiChat => apiChat.id === index + 1)?.text}
                </div> 
              }
            </div>
          </li>
        ))}
      </ul>
    )
  };
  
  

  return (
    <div ref={aichat} style={{ display: "none" }}>
      <div className={styles.mask}>
        <div className={styles.aichatContainer}>
          <div className={styles.mainContent}>
            <div className={styles.left}>
              <div className={styles.history}>
                <div className={styles.titleHis}>History</div>
                <div className={styles.historyContainer}>
                <ul className={styles.historyList}>
                  {
                    historyGroups.map((group) => (
                      <li key={group.date.getTime()} className={styles.historyItem}>
                        {group.isSeparator ? (
                          <div className={styles.date}>
                            {group.date.toLocaleDateString('zh-Hans-CN', {
                              year: 'numeric',
                              month: '2-digit',
                              day: '2-digit'
                            })}
                          </div>
                        ) : (
                          <div className={styles.questions}>
                            <Image src={questionIcon} className={styles.questionImage} />
                            <span className={styles.text}>{group.chat.text}</span>
                          </div>
                        )}
                      </li>
                    ))
                  }
                </ul>
                </div>
              </div>
              <div className={styles.upgrade}>
                <button className={styles.vip}>
                <Image src={crownfill} className={styles.vipImage}></Image>
                  <span>UPGRADE TO VIP</span>
                </button>
                <div className={styles.email}>
                  jacklulu@gmail.com
                </div>
                <div className={styles.token}>
                  token: 309328.34
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.cancelIcon} onClick={() => dispatch(transState())}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M5.12835 6.3L0.252876 1.42411C0.101991 1.26789 0.0185015 1.05866 0.0203887 0.841476C0.022276 0.624294 0.109389 0.416542 0.262966 0.262966C0.416542 0.109389 0.624295 0.0222757 0.841476 0.0203884C1.05866 0.0185012 1.26789 0.101991 1.42412 0.252876L6.3 5.12876L11.1759 0.252876C11.2523 0.173763 11.3437 0.11066 11.4448 0.0672486C11.5458 0.0238374 11.6545 0.000987007 11.7645 3.1275e-05C11.8745 -0.000924457 11.9835 0.0200334 12.0853 0.0616819C12.1871 0.10333 12.2796 0.164836 12.3574 0.242609C12.4352 0.320381 12.4967 0.412864 12.5383 0.514661C12.58 0.616458 12.6009 0.725531 12.6 0.835514C12.599 0.945497 12.5762 1.05419 12.5328 1.15525C12.4893 1.25631 12.4262 1.34771 12.3471 1.42411L7.47124 6.3L12.3471 11.1759C12.4262 11.2523 12.4893 11.3437 12.5328 11.4448C12.5762 11.5458 12.599 11.6545 12.6 11.7645C12.6009 11.8745 12.58 11.9835 12.5383 12.0853C12.4967 12.1871 12.4352 12.2796 12.3574 12.3574C12.2796 12.4352 12.1871 12.4967 12.0853 12.5383C11.9835 12.58 11.8745 12.6009 11.7645 12.6C11.6545 12.599 11.5458 12.5762 11.4448 12.5328C11.3437 12.4893 11.2523 12.4262 11.1759 12.3471L6.3 7.47165L1.42412 12.3471C1.34771 12.4262 1.25631 12.4893 1.15525 12.5328C1.05419 12.5762 0.945498 12.599 0.835514 12.6C0.725531 12.6009 0.616459 12.58 0.514661 12.5383C0.412864 12.4967 0.320381 12.4352 0.242608 12.3574C0.164835 12.2796 0.10333 12.1871 0.0616819 12.0853C0.0200334 11.9835 -0.000924481 11.8745 3.12766e-05 11.7645C0.000987035 11.6545 0.0238373 11.5458 0.0672486 11.4448C0.11066 11.3437 0.173763 11.2523 0.252876 11.1759L5.12835 6.3Z" fill="#6F614C" />
                </svg>
              </div>
              <div className={styles.chatContainer}>
              <div
      className={styles.defaultItem}>
      <div className={styles.subTit}>
        |&nbsp;Text content over here for refer.
      </div>
      <div className={styles.subText} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}>
        Hi Jack, here is the best solution:
        {isHovered && (
        <div className={`${styles.fiveFunctions} ${isHovered ? styles.animatedContent :styles.imAnimatedContent}`}>
          <div className={styles.row1}>
            <button className={`${styles.translate} ${styles.sameStyle}`}>
            {/* <Image src={crownfill} className={styles.vipImage}></Image> */}
            <span>Translate</span>
            </button>
            <button className={`${styles.speak} ${styles.sameStyle}`}>
            {/* <Image src={crownfill} className={styles.vipImage}></Image> */}
            <span>Speak</span>
            </button>
            <button className={`${styles.copy} ${styles.sameStyle}`}>
            {/* <Image src={crownfill} className={styles.vipImage}></Image> */}
            <span>Copy</span>
            </button>
          </div>
          <div className={styles.row2}>
          <button className={`${styles.trumbsUp} ${styles.sameStyle}`}>
            {/* <Image src={crownfill} className={styles.vipImage}></Image> */}
            <span>Trumbs Up</span>
            </button>
            <button className={`${styles.feedback} ${styles.sameStyle}`}>
            {/* <Image src={crownfill} className={styles.vipImage}></Image> */}
            <span>Feedback</span>
            </button>
          </div>
        </div>
        )}
          <div>

            <div style={{ width: 12.5694 + "vw", height: 2.0139 + 'vw', background: "rgba(252, 236, 210, 0.5)", borderRadius: 0.2778 + 'vw', marginTop: 0.6944 + 'vw' }}></div>
            <div style={{ width: 16.25 + "vw", height: 2.0139 + 'vw', background: "rgba(252, 236, 210, 0.5)", borderRadius: 0.2778 + 'vw', marginTop: 1.0417 + 'vw' }}></div>
            <div style={{ width: 8.6111 + "vw", height: 2.0139 + 'vw', background: "rgba(252, 236, 210, 0.5)", borderRadius: 0.2778 + 'vw', marginTop: 1.0417 + 'vw', marginBottom: 0.4167 + "vw" }}></div>
          </div>
      </div>
    </div>
                {renderChats()}
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.inputOptions}>
                  <div className={styles.row1}>
                    <button>Prompt text title sample here</button>
                    <button>Prompt text title sample here</button>
                  </div>
                  <div className={styles.row2}>
                    <button>Prompt text title sample here</button>
                    <button>Prompt text title sample here</button>
                  </div>
                </div>
                <div className={styles.inpt}>
                  <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    placeholder="Send a message"
                    className={styles.input}
                    onKeyDown={handleKeyDown}
                  />
                  <div className={styles.sendBtn} onClick={addChat}>Send</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sideNav}>
            <div className={styles.top3}>
              <button className={styles.newChat}>
                <Image src={newchat} className={styles.newchatImage}></Image>  
                <span className={styles.text}>New Chat</span>
              </button>
              {/* <button className={styles.viewHistory}>
                <Image src={history} className={styles.historyImage}></Image>
                <sapn className={styles.text}>View History</sapn>
              </button> */}
              {/* <button className={styles.setting}>
                <Image src={setting} className={styles.settingImage}></Image>
                <span className={styles.text}>Setting</span>
              </button> */}
            </div>
            <div className={styles.bott2}>
              <button className={styles.gtpPrice}>GTP Pricing</button>
              {/* <button className={styles.tokenBalance}>Token Balance</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
