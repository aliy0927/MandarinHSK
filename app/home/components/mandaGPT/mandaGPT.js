//GPT聊天界面

import styles from './mandaGPT.module.css'
//创建消息发送函数

export default function MandaGPT () {
  const [inputMessage, setInputMessage] = useState('')
  const [chatHistory, setChatHistory] = useState([])
  const sendMessage = async () => {
    if (inputMessage.trim() === '') {
      return
    }

    // 发送消息到后端API
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputMessage }),
    })

    if (response.ok) {
      const data = await response.json()
      const reply = data.reply

      // 更新聊天历史
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'user', message: inputMessage },
        { sender: 'bot', message: reply },
      ])

      // 清空输入框
      setInputMessage('')
    }
  }


  const CreateMessageHistory = () => {

  }
  return (
    <>
      <div className={styles.nav}>
        <div className={styles.title}>History</div>
        <div className={styles.history}></div>
        <div className={styles.upgrade}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M12.9754 4.58322C12.9754 3.81402 12.3498 3.18842 11.5802 3.18842C10.8106 3.18842 10.185 3.81402 10.185 4.58322C10.185 5.24202 10.645 5.79242 11.2602 5.93802C10.7074 7.04002 9.97704 8.06442 9.58584 8.06442C9.20504 8.06442 8.43744 6.95362 7.66104 4.82522C8.21944 4.57962 8.59984 4.02562 8.59984 3.38602C8.59984 2.51562 7.89144 1.80762 7.02104 1.80762C6.15024 1.80762 5.44184 2.51602 5.44184 3.38602C5.44184 4.02722 5.82384 4.58202 6.38384 4.82642C5.55744 7.11602 4.83824 7.95962 4.54304 7.95962C3.99464 7.95962 3.23304 6.89322 2.73744 5.93762C3.35304 5.79242 3.81384 5.24162 3.81384 4.58242C3.81384 3.81322 3.18784 3.18762 2.41864 3.18762C1.64944 3.18762 1.02344 3.81402 1.02344 4.58322C1.02344 5.11042 1.32104 5.56482 1.75384 5.80202L2.03024 11.3708C2.03664 11.5004 2.10544 11.6188 2.21504 11.6884C2.27304 11.7256 3.67384 12.5904 7.02104 12.5904C10.3682 12.5904 11.769 11.7224 11.827 11.6856C11.937 11.6152 12.0058 11.496 12.0118 11.3656L12.2582 5.79482C12.6838 5.55642 12.9754 5.10562 12.9754 4.58322Z" fill="#FCECD2" />
            </svg>Upgrade to vip</button>
        </div>
        <div className={styles.email}>jacklulu@gmail.com</div>
        <div className={styles.token}>token: 309328.34</div>
      </div>
      <div className={styles.main}></div>
      <div className={styles.func}></div>
    </>
  )
}