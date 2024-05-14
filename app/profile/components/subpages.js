"use client"
import styles from '../page.module.css'
import { useState,useEffect } from 'react'
import { useRef } from 'react'


export default function Subpage ({ activeTab }) {

  const ReusablePanel1 = ({ title, onPasswordError }) => {
    const [password, setPassword] = useState('')

    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        try {
          const response = await sendDataToBackend(password)
          if (response.error === "PasswordExists") {
            onPasswordError("该密码已经存在")
          }
        } catch (error) {
          console.error("An error occurred:", error)
        }
      }
    }

    const sendDataToBackend = async (password) => {
      // 模拟发送密码数据到后端的异步操作
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: "PasswordExists" })
        }, 1000)
      })
    }
    return (
      <div className={styles.panel1}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.writeContent}>
          <input type="text" className={styles.input1} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
          <div className={styles.input1Icon}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2821 14.5201L15.5351 20.6031C15.3181 20.8341 15.1081 21.2891 15.0661 21.6041L14.8071 23.8721C14.7161 24.6911 15.3041 25.2511 16.1161 25.1111L18.3701 24.7261C18.6851 24.6701 19.1261 24.4391 19.3431 24.2011L25.0901 18.1181C26.0841 17.0681 26.5321 15.8711 24.9851 14.4081C23.4451 12.9591 22.2761 13.4701 21.2821 14.5201Z" stroke="#6F614C" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.323 15.5349C20.624 17.4669 22.192 18.9439 24.138 19.1399" stroke="#6F614C" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14.1001 27.3999H26.7001" stroke="#6F614C" stroke-miterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="20" cy="20" r="19.5" stroke="#6F614C" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  const WarningMessage = ({ message }) => {
    return <div className={styles.warningText}>{message && <span >{message}</span>}</div>
  }

  const options1 = ['苹果', '香蕉', '橙子', '西瓜']
  const options2 = ['China', 'America', 'Koeran']
  const ReusablePanel2 = ({ title, options }) => {

    const [showDropdown, setShowDropdown] = useState(false)
    const [input2Word, setInput2Word] = useState('Please select')

    const handleIconClick2 = () => {
      setShowDropdown(!showDropdown)
    }
    
    const handleMenuoptClick = (event) => {
      const clickedContent = event.target.textContent;
      setInput2Word(clickedContent);
      setShowDropdown(false); // 点击选项后关闭下拉菜单
      event.stopPropagation();
    };
  
    useEffect(() => {
      const handleScroll = () => {
        setShowDropdown(false); // 页面滚动时关闭下拉菜单
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <div className={styles.panel1}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.chooseContent}>
          <div className={styles.input2} onClick={handleIconClick2}>
            <div className={styles.callword}>
              {input2Word}
            </div>
            <div className={styles.icon} >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.2003 12.4C9.39591 12.4 9.57952 12.3152 9.69173 12.1723L13.892 6.83893C14.0204 6.6768 14.0348 6.46347 13.9328 6.28693C13.829 6.1104 13.6243 6 13.4005 6L4.99947 6C4.77566 6 4.57045 6.1104 4.46724 6.28693C4.36524 6.46347 4.37964 6.67627 4.50804 6.83893L8.70827 12.1723C8.81988 12.3152 9.00349 12.4 9.1991 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4Z" fill="#6F614C" />
              </svg>
            </div>
          </div>
        </div>

        {showDropdown && (
          <div className={styles.menu} onMouseLeave={handleIconClick2}>
            {options.map((option, index) => (
              <li className={styles.menuli} key={index} onClick={handleMenuoptClick} >
                {option}
              </li>
            ))}
          </div>

        )}


      </div>
    )
  }
  const ReusablePanel3 = ({ title, onPasswordError }) => {
    const [password, setPassword] = useState('')

    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        try {
          const response = await sendDataToBackend(password)
          if (response.error === "PasswordExists") {
            onPasswordError("该密码已经存在")
          }
        } catch (error) {
          console.error("An error occurred:", error)
        }
      }
    }

    const sendDataToBackend = async (password) => {
      // 模拟发送密码数据到后端的异步操作
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: "PasswordExists" })
        }, 1000)
      })
    }
    return (
      <div className={styles.panel1}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.writeContent}>
          <input type="password" className={styles.input1} value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={handleKeyDown} />
        </div>
      </div>
    )
  }
  const ReusablePanel4 = ({ title, onPasswordError }) => {
    const [password, setPassword] = useState('')

    const handleKeyDown = async (event) => {
      if (event.key === "Enter") {
        try {
          const response = await sendDataToBackend(password)
          if (response.error === "PasswordExists") {
            onPasswordError("该密码已经存在")
          }
        } catch (error) {
          console.error("An error occurred:", error)
        }
      }
    }

    const sendDataToBackend = async (password) => {
      // 模拟发送密码数据到后端的异步操作
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ error: "PasswordExists" })
        }, 1000)
      })
    }
    return (
      <div className={styles.panel1}>
        <div className={styles.title}>
          {title}
        </div>
        <div className={styles.writeContent}>
          <input type="text" 
          className={styles.input1} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          onKeyDown={handleKeyDown}
          placeholder="Click to set"
           />
        </div>
      </div>
    )
  }
  const UserInformation = () => {
    const [input1Value, setInput1Value] = useState('')
    const [input2Value, setInput2Value] = useState('')
    const handleSubmit = () => {

    }
    // 定义处理输入变化的函数
    const handleInput1Change = (event) => {
      setInput1Value(event.target.value)
    }

    const handleInput2Change = (event) => {
      setInput2Value(event.target.value)
    }
    return (
      <div>
        <div className={styles.write}>
          <ReusablePanel1 title="User Name" value={input1Value} onChange={handleInput1Change}></ReusablePanel1>
          <ReusablePanel1 title="Email" value={input2Value} onChange={handleInput2Change}></ReusablePanel1>
          <ReusablePanel2 title="Language Level" options={options1}></ReusablePanel2>
          <ReusablePanel2 title="County / Region" options={options2}></ReusablePanel2>
          <div className={styles.confirm} onClick={handleSubmit}>
            Confirm
          </div>
        </div>
      </div>
    )
  }
  const Account = () => {
    const [passwordError, setPasswordError] = useState('')
    const handleSubmit = () => {

    }
    return (
      <div>
        <div className={styles.write}>
          <ReusablePanel3 title="Existing Password" onPasswordError={setPasswordError}></ReusablePanel3>
          <WarningMessage message={passwordError} ></WarningMessage>
          {/* <div className={styles.warningText}>Warning text here</div> */}
          <ReusablePanel3 title="New Password"></ReusablePanel3>
          <WarningMessage message={passwordError} ></WarningMessage>
          {/* <div className={styles.warningText}>Warning text here</div> */}
          <ReusablePanel3 title="Please confirm new password"></ReusablePanel3>
          <WarningMessage message={passwordError} ></WarningMessage>
          {/* <div className={styles.warningText}>Warning text here</div> */}
          <div className={styles.confirm} onClick={handleSubmit}>
            Confirm
          </div>
        </div>

      </div>
    )
  }
  const Privacy = () => {
    const handleSubmit = () => {

    }
    return (
      <div>
        <div className={styles.write}>
          <ReusablePanel2 title="Language Level" options={options1} ></ReusablePanel2>
          <div className={styles.explainword}>
            If hide, you would not leave a visit record on other user’s homepage
          </div>
          <div style={{ height: "20px" }}></div>
          <div className={styles.confirm} onClick={handleSubmit}>
            Confirm
          </div>
        </div>
      </div>
    )
  }
  const Notification = () => {
    const handleSubmit = () => {

    }
    return (
      <div>
        <div className={styles.write}>
          <ReusablePanel2 title="Receive notification?" options={options1}></ReusablePanel2>
          <ReusablePanel4 title="Notify me for learning"></ReusablePanel4>
          <div className={styles.confirm} onClick={handleSubmit}>
            Confirm
          </div>
        </div>
      </div>
    )
  }
  const Weeklysummary = () => {
    return (
      <div>

        <div className={styles.weeklysummaryWrite}>
          <div className={styles.topFloat1}>
          Top on weekday
          </div>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <div className={styles.weeklyIcon}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 8.7997C12.4 8.60409 12.3152 8.42048 12.1723 8.30827L6.83893 4.10805C6.6768 3.97964 6.46347 3.96524 6.28693 4.06724C6.1104 4.17105 6 4.37566 6 4.59947V13.0005C6 13.2243 6.1104 13.4296 6.28693 13.5328C6.46347 13.6348 6.67627 13.6204 6.83893 13.492L12.1723 9.29173C12.3152 9.18012 12.4 8.99651 12.4 8.8009C12.4 8.8003 12.4 8.8003 12.4 8.7997C12.4 8.8003 12.4 8.8003 12.4 8.7997Z" fill="#6F614C"/>
            </svg>
          </div>
        </div>
        <div className={styles.weeklysummaryWrite}>
          <div className={styles.topFloat2}>
          Top on comments
          </div>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <li className={styles.item}></li>
          <div className={styles.weeklyIcon}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.4 8.7997C12.4 8.60409 12.3152 8.42048 12.1723 8.30827L6.83893 4.10805C6.6768 3.97964 6.46347 3.96524 6.28693 4.06724C6.1104 4.17105 6 4.37566 6 4.59947V13.0005C6 13.2243 6.1104 13.4296 6.28693 13.5328C6.46347 13.6348 6.67627 13.6204 6.83893 13.492L12.1723 9.29173C12.3152 9.18012 12.4 8.99651 12.4 8.8009C12.4 8.8003 12.4 8.8003 12.4 8.7997C12.4 8.8003 12.4 8.8003 12.4 8.7997Z" fill="#6F614C"/>
            </svg>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      {activeTab === 'userinformation' && <UserInformation />}
      {activeTab === 'account' && <Account />}
      {activeTab === 'privacy' && <Privacy />}
      {activeTab === 'notification' && <Notification />}
      {/* {activeTab === 'weeklysummary' && <Weeklysummary />} */}
    </div>
  )
}
