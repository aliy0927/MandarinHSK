'use client'
import React from 'react'
import Login from './components/login/login'
import SignUp from './components/signup/signup'
import Invite from './components/invite/invite'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import * as echarts from 'echarts/core'
import { GridComponent, TitleComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect, useRef, useState } from 'react'
import Lock from '@/public/svgs/Lock.svg'
// const Background = dynamic(import('./components/background/background.js'), { loading: () => <div>Loading...</div> })
import Background from './components/background/background'
import Link from 'next/link'
import Image from 'next/image'
import { TooltipComponent } from 'echarts/components'
import { useDispatch } from 'react-redux'
import { setUser } from '@/store/UserSlice'

echarts.use([TooltipComponent])
const data = [
  { title: "Random Title 1", average: 87 },
  { title: "Random Title 2", average: 42 },
  { title: "Random Title 3", average: 63 },
  { title: "Random Title 4", average: 91 },
  { title: "Random Title 5", average: 18 },
  { title: "Random Title 6", average: 75 },
  { title: "Random Title 7", average: 54 },
  { title: "Random Title 8", average: 32 },
  { title: "Random Title 9", average: 69 },
  { title: "Random Title 10", average: 88 },
  { title: "Random Title 11", average: 45 },
  { title: "Random Title 12", average: 77 },
  { title: "Random Title 13", average: 58 },
  { title: "Random Title 14", average: 93 },
  { title: "Random Title 15", average: 26 },
  { title: "Random Title 16", average: 71 },
  { title: "Random Title 17", average: 39 },
  { title: "Random Title 18", average: 84 },
  { title: "Random Title 19", average: 50 },
  { title: "Random Title 20", average: 67 }
]
//创建echarts
function CreateEcharts (data) {
  //当前视口宽度
  const [data1, data2, data3] = data
  const updateOptions = () => {
    let nowClientWidth = document.documentElement.clientWidth
    const nowSize = (val, initWidth = 1440) => {
      return val * (nowClientWidth / initWidth)
    }
    const options = [
      {
        grid: {
          left: nowSize(0),
          bottom: nowSize(25),
          top: '10%',

        },
        xAxis: {
          type: 'category',
          offset: nowSize(5),
          splitLine: {
            show: false // 隐藏Y轴网格线
          },
          data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',],
          axisLine: {
            onZero: false,
            lineStyle: {
              color: "#A54136",
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            textStyle: {
              color: '#A54136', // 设置X轴标签和数值的颜色为红色
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontWeight: 'DIN'
            }
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false // 隐藏Y轴网格线
          },
          axisLine: {
            show: false  // 这里设置 Y 轴线不可见
          },
          axisLabel: {
            show: false  // 隐藏 Y 轴数值
          },
        },
        series: [
          {
            data: data1,
            type: 'bar',
            itemStyle: {
              borderRadius: 3,
              color: '#A54136' // 设置柱状图的颜色
            },
          }
        ],
        tooltip: {
          trigger: 'item',
          position: 'top',
          formatter: '{c}'

        }

      },
      {
        //图标位置
        grid: {
          top: "10%",
          left: "0",
          right: "0",
          bottom: "10%"
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: false,
            data: [],

          },
          {
            show: false,
            data: [],
          }
        ],
        series: [
          {
            type: "bar",
            yAxisIndex: nowSize(0),
            data: [data2.checkIn],

            barWidth: nowSize(20),
            itemStyle: {
              normal: {
                barBorderRadius: nowSize(20),
                color: "#A54136"
              }
            },
            label: {
              normal: {
                show: true,
                position: "insideRight",
                formatter: `${(data2.checkIn / data2.nextLevel).toFixed(1) * 100}%`,
                fontSize: nowSize(12),
                align: "right",
                verticalAlign: "middle",

              }
            },

          },
          {

            type: "bar",
            yAxisIndex: 1,
            barCategoryGap: nowSize(50),
            data: [data2.nextLevel],
            barWidth: nowSize(20),
            itemStyle: {
              normal: {
                color: "rgba(165,65,54,0.3)",
                borderWidth: nowSize(3),
                barBorderRadius: nowSize(20)
              }
            }
          }
        ]
      },
      {
        //图标位置
        grid: {
          top: "10%",
          left: "0",
          right: "0",
          bottom: "10%"
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: false,
            data: [],

          },
          {
            show: false,
            data: [],
          }
        ],
        series: [
          {
            type: "bar",
            yAxisIndex: 0,
            data: [data3 > 3 ? 3 : data3],

            barWidth: nowSize(20),
            itemStyle: {
              normal: {
                barBorderRadius: nowSize(20),
                color: "#A54136"
              }
            },

          },
          {

            type: "bar",
            yAxisIndex: 1,
            barCategoryGap: nowSize(50),
            data: [3],
            barWidth: nowSize(20),
            itemStyle: {
              normal: {
                color: "rgba(165,65,54,0.3)",
                borderWidth: nowSize(3),
                barBorderRadius: nowSize(20)
              }
            }
          }
        ]
      }]
    return options
  }
  const options = updateOptions()
  const createEcharts = (containerID, option, Num) => {

    echarts.use([GridComponent, BarChart, CanvasRenderer, TitleComponent,])

    let chartDom = document.getElementById(containerID)
    if (chartDom) {
      let myChart = echarts.init(chartDom)
      option && myChart.setOption(option[Num])

      window.addEventListener("resize", () => {
        myChart.setOption
          (updateOptions()[Num],//更新数据
            {
              notMerge: true,//不合并

            }
          )
        myChart.resize()
      })
    }
    //重绘图标


  }
  createEcharts("learning", options, 0)
  createEcharts("checking", options, 1)
  createEcharts("inviting", options, 2)

}
function useComponent (e = "home") {//用于记录管理当前显示的组件
  // [login,signup,mandagpt,aboutus,home]
  const [isLogin, setLogin] = useState(false)
  const [isSignUp, setSignUp] = useState(false)
  const [isInvite, setInvite] = useState(false)
  const [isHome, setHome] = useState(true)
  //判断输出当前显示的组件
  const setCompoent = (e) => {
    setLogin(false)
    setSignUp(false)

    setInvite(false)
    setHome(false)
    // setHome(false)
    switch (e) {
      case "login":
        setLogin(true)
        break
      case "signup":
        setSignUp(true)
        break

      case "invite":
        setInvite(true)
        break
      case "home":
        setHome(true)
        break
      default:
        setHome(true)
        break
    }
  }
  //返回set函数的对象集合
  return [{ isLogin, isSignUp, isInvite, isHome }, setCompoent]
}
function Dropdown ({ children }) {//下拉框
  const [label, list] = React.Children.toArray(children)
  const ulRef = useRef(null)
  const handleULRef = (node) => {
    ulRef.current = node
  }

  return (
    <div className={styles.dropdown}
      onMouseOver={() => { ulRef.current.style.display = "flex" }}
      onMouseOut={() => { ulRef.current.style.display = "none" }}
    >
      {label}
      {React.cloneElement(list, { ref: handleULRef })}
    </div>
  )
}

export default function Home (props) {
  const { isLogined,
    inviteData,
    user,
    checkIndays,
    todayLearningTime,
    weekLearningTime,
  } = JSON.parse(props.initData)

  let PastExam = [{ name: "HSK1" }, { name: "HSK2" }, { name: "HSK3" }, { name: "HSK4" }]
  const [{ isLogin, isSignUp, isInvite, isHome, },
    setCompoent] = useComponent("home")
  const [checkin, setCheckIn] = useState(false)
  const dispatch = useDispatch()
  console.log(JSON.parse(props.initData))
  useEffect(() => {//初始化
    CreateEcharts([weekLearningTime, checkIndays, inviteData.numOfPeople])
    dispatch(setUser(user))
  }, [])

  const Checkin = () => {
    setCheckIn(true)
  }

  return (
    <session>

      <div className={styles.homeC}>
        <Background />


        {/* <div className={styles.leftTree}></div>
        <div className={styles.rightTree}></div> */}
        <div className={styles.homeBody}>
          <div className={styles.show}>
            <div className={styles.left}>
              <div className={styles.mainTitle}>
                The Best Way
                To Know About Chinese
              </div>
              <div className={styles.subTitle}>
                Easiest way to learn the logic of chinese language.
              </div>
              <span style={{ display: "flex", justifyContent: "start", alignItems: 'center' }}>
                {!isLogined ?
                  <button className={`${styles.Try} hover2`} onClick={() => { setCompoent("login") }}>
                    <span>Log In/ Sign Up</span>

                  </button> : <button className={`${styles.Try} hover2`} onClick={() => { }}>
                    <span>Try for free</span>

                  </button>}
                <button className={`${styles.How} hover3`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M12.4 8.7997C12.4 8.60409 12.3152 8.42048 12.1723 8.30827L6.83893 4.10805C6.6768 3.97964 6.46347 3.96524 6.28693 4.06724C6.1104 4.17105 6 4.37566 6 4.59947V13.0005C6 13.2243 6.1104 13.4296 6.28693 13.5328C6.46347 13.6348 6.67627 13.6204 6.83893 13.492L12.1723 9.29173C12.3152 9.18012 12.4 8.99651 12.4 8.8009C12.4 8.8003 12.4 8.8003 12.4 8.7997C12.4 8.8003 12.4 8.8003 12.4 8.7997Z" fill="#A54136" />
                  </svg>
                  <span>How To Use</span>
                </button>
              </span>
            </div>
            <div className={styles.right}>
              <div className={styles.learningTime}>
                <div className={styles.chartTitle}>Today’s Learning Time (Hour)</div>
                <div className={styles.time}>
                  <span> {todayLearningTime}</span>
                  <span>h</span>
                </div>
                <div className={styles.cut}></div>
                <div className={styles.chartTitle2}>Learning Time (This Week)</div>
                <div id="learning" className={styles.chart}>

                </div>
              </div>
              <div className={styles.checkIn}>
                <div className={styles.up}>
                  <div className={styles.title}>
                    <div className={styles.mTitle}>EveryDay Check In</div>
                    <div className={styles.sTitle}>To Earn Benifit</div>
                  </div>
                  {
                    checkin ?
                      <button className={styles.chickBtn2} >
                        <svg xmlns="http://www.w3.org/2000/svg" className='stroke' width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <g clipPath="url(#clip0_198_47040)">
                            <path d="M12.0054 2.65791L6.26924 8.39476C6.13351 8.53076 5.94625 8.6143 5.7396 8.6143C5.53342 8.6143 5.34644 8.53076 5.21071 8.39476L1.96734 5.15223C1.8323 5.01707 1.74854 4.82963 1.74854 4.62382C1.74854 4.2105 2.08364 3.87455 2.49697 3.87455C2.70362 3.87455 2.89087 3.95879 3.0266 4.09394L5.73961 6.80757L10.9473 1.59914C11.0828 1.464 11.2703 1.38058 11.4772 1.38058C11.89 1.38058 12.2256 1.71558 12.2256 2.12901C12.2256 2.33504 12.1421 2.52289 12.0054 2.65791Z" fill="#A54136" />
                          </g>
                          <defs>
                            <clipPath id="clip0_198_47040">
                              <rect width="12" height="12" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>Checked</button>
                      : <button className={`${styles.chickBtn} hover2`} onClick={() => { Checkin() }}>Check In</button>
                  }
                </div>
                <div className={styles.chart} id='checking'></div>
                <div className={styles.down}>
                  <div className={styles.checked}>Checked :{checkIndays ? checkIndays.checkIn : 0} Days</div>
                  <div className={styles.level}>Next Level : {checkIndays ? checkIndays.nextLevel : 0} Days Left</div>
                </div>
              </div>
              <div className={styles.inviteFriend}>

                <div className={styles.up}>
                  <div className={styles.title}>
                    <div className={styles.mTitle}>EveryDay Check In</div>
                    <div className={styles.sTitle}>To Earn Benifit</div>
                  </div>

                  <button className={`${styles.chickBtn} hover2`} onClick={() => { setCompoent("invite") }}>Invite Now</button>
                </div>

                <div className={styles.down}>
                  <li>
                    <div className={styles.number}>1 Friend</div>
                    <div className={styles.paper}>1 Paper</div>
                    <div className={styles.token}>50 Token</div>
                  </li>
                  <div className={styles.cut}></div>
                  <li>
                    <div className={styles.number}>2 Friends</div>
                    <div className={styles.paper}>3 Paper</div>
                    <div className={styles.token}>70 Token</div>
                  </li>
                  <div className={styles.cut}></div>
                  <li>
                    <div className={styles.number}>3 Friends</div>
                    <div className={styles.paper}>All Paper</div>
                    <div className={styles.token}>100 Token</div>
                  </li>
                </div>
                <div className={styles.chart} id='inviting'></div>
              </div>
            </div>
          </div>
          <div className={styles.examPaper}>
            <div className={styles.control}>
              <div className={styles.select}>
                <Dropdown>
                  <div className={`${styles.PastExam} halfBorder`} >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12.46 7.68666C12.08 7.58666 11.6333 7.53333 11.1 7.53333C10.36 7.53333 10.0867 7.71333 9.70666 7.99999C9.68666 8.01333 9.66666 8.03333 9.64666 8.05333L9.01332 8.72666C8.48666 9.29333 7.51999 9.29333 6.98666 8.72666L6.35332 8.05999C6.33332 8.03333 6.31332 8.01333 6.29332 7.99999C5.90666 7.71333 5.63332 7.53333 4.89999 7.53333C4.36666 7.53333 3.91999 7.57999 3.53999 7.68666C1.95332 8.11332 1.95332 9.37333 1.95332 10.48V11.1C1.95332 12.7733 1.95332 14.6667 5.51999 14.6667H10.48C12.8467 14.6667 14.0467 13.4667 14.0467 11.1V10.48C14.0467 9.37333 14.0467 8.11332 12.46 7.68666Z" fill="#FCECD2" />
                        <path d="M9.85998 1.33331H6.13998C3.19331 1.33331 3.19331 2.89998 3.19331 4.27998V6.74665C3.21998 6.73331 3.25331 6.72665 3.27998 6.71998C3.74665 6.59331 4.27331 6.53331 4.89998 6.53331C5.92665 6.53331 6.41331 6.83331 6.89331 7.19998C6.95998 7.24665 7.02665 7.30665 7.08665 7.37331L7.71331 8.03331C7.77998 8.10665 7.88665 8.14665 7.99998 8.14665C8.11331 8.14665 8.21998 8.10665 8.27998 8.03998L8.91998 7.36665C8.97331 7.31331 9.03331 7.25331 9.09998 7.20665C9.59331 6.83331 10.0733 6.53331 11.1 6.53331C11.7266 6.53331 12.2533 6.59331 12.72 6.71998C12.7466 6.72665 12.78 6.73331 12.8066 6.74665V4.27998C12.8066 2.89998 12.8066 1.33331 9.85998 1.33331ZM9.03331 5.66665H6.96665C6.71331 5.66665 6.49998 5.45331 6.49998 5.19998C6.49998 4.93998 6.71331 4.73331 6.96665 4.73331H9.03331C9.28665 4.73331 9.49998 4.93998 9.49998 5.19998C9.49998 5.45331 9.28665 5.66665 9.03331 5.66665ZM9.55331 3.80665H6.44665C6.19331 3.80665 5.98665 3.59331 5.98665 3.33998C5.98665 3.07998 6.19331 2.87331 6.44665 2.87331H9.55331C9.80665 2.87331 10.0133 3.07998 10.0133 3.33998C10.0133 3.59331 9.80665 3.80665 9.55331 3.80665Z" fill="#FCECD2" />
                      </svg>
                      <span style={{ marginLeft: "3px" }} >Past Exam</span>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g opacity="0.5">
                        <path d="M9.2003 12.4C9.39591 12.4 9.57952 12.3152 9.69173 12.1723L13.892 6.83893C14.0204 6.6768 14.0348 6.46347 13.9328 6.28693C13.829 6.1104 13.6243 6 13.4005 6L4.99947 6C4.77566 6 4.57045 6.1104 4.46724 6.28693C4.36524 6.46347 4.37964 6.67627 4.50804 6.83893L8.70827 12.1723C8.81988 12.3152 9.00349 12.4 9.1991 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4Z" fill="#FCECD2" />
                      </g>
                    </svg>
                  </div>
                  <ul style={{ display: 'none' }} ref={(node) => this.ulRef(node)} >
                    {
                      PastExam.map((item, index) => {
                        return <li style={{ listStyle: "none" }} key={`PastExam_${index}_${item}`} className='hover2'>{item.name}</li>
                      })
                    }
                  </ul>
                </Dropdown>
                <Dropdown >
                  <div className={`${styles.Level} halfBorder`}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M4.34272 7.02304H6.74273C6.83393 7.02304 6.92081 7.06144 6.98513 7.13008C7.05035 7.2006 7.08637 7.29323 7.08593 7.38928V15.6338C7.08637 15.7298 7.05035 15.8224 6.98513 15.893C6.95424 15.9265 6.91677 15.9533 6.87507 15.9717C6.83336 15.9901 6.78832 15.9997 6.74273 16H4.34272C4.1536 16 4 15.8358 4 15.6338V7.3888C3.99956 7.29275 4.03559 7.20012 4.1008 7.1296C4.13165 7.09614 4.16903 7.06937 4.21065 7.05096C4.25226 7.03254 4.29722 7.02288 4.34272 7.02256V7.02304ZM8.80002 4H11.2C11.2912 4 11.3781 4.0384 11.4424 4.10752C11.5076 4.17804 11.5437 4.27067 11.5432 4.36672V15.6338C11.5432 15.8358 11.3896 16 11.2 16H8.80002C8.6109 16 8.45729 15.8358 8.45729 15.6338V4.36624C8.45672 4.27026 8.49258 4.17763 8.55762 4.10704C8.58851 4.07352 8.62598 4.04672 8.66768 4.0283C8.70938 4.00989 8.75443 4.00025 8.80002 4ZM13.2573 9.496H15.6573C15.7485 9.496 15.8349 9.5344 15.8997 9.60352C15.9648 9.67411 16.0006 9.76674 16 9.86272V15.6338C16 15.8358 15.8464 16 15.6573 16H13.2573C13.2117 15.9997 13.1666 15.99 13.1249 15.9715C13.0832 15.953 13.0458 15.9261 13.0149 15.8925C12.9497 15.822 12.9137 15.7293 12.9141 15.6333V9.8632C12.9137 9.76715 12.9497 9.67452 13.0149 9.604C13.0458 9.57039 13.0832 9.5435 13.1249 9.525C13.1666 9.5065 13.2117 9.49679 13.2573 9.49648V9.496Z" fill="#A54136" />
                      </svg>
                      <span style={{ marginLeft: "3px" }}>Level</span>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g opacity="0.5">
                        <path d="M9.2003 12.4C9.39591 12.4 9.57952 12.3152 9.69173 12.1723L13.892 6.83893C14.0204 6.6768 14.0348 6.46347 13.9328 6.28693C13.829 6.1104 13.6243 6 13.4005 6L4.99947 6C4.77566 6 4.57045 6.1104 4.46724 6.28693C4.36524 6.46347 4.37964 6.67627 4.50804 6.83893L8.70827 12.1723C8.81988 12.3152 9.00349 12.4 9.1991 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4Z" fill="#A54136" />
                      </g>
                    </svg>
                  </div>
                  <ul className='halfBorder-noTop' style={{ display: 'none', backgroundColor: "#F9E7CE", color: "var(--Color_002)" }} ref={(node) => this.ulRef(node)}  >
                    {
                      PastExam.map((item, index) => {
                        return <li style={{ listStyle: "none" }} key={`Level_${index}_${item}`} className='hover3'>{item.name}</li>
                      })
                    }
                  </ul>
                </Dropdown>
                <Dropdown>
                  <div className={`${styles.Category} halfBorder`}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.4138 13.3862C16.4138 13.602 16.252 13.8717 16.0901 13.9796L10.8576 16.8386C10.6418 17.0005 10.3182 17.0005 10.1024 16.8386L4.86984 13.9796C4.708 13.8717 4.54617 13.602 4.54617 13.3862V7.56029C4.54617 7.34452 4.708 7.0748 4.86984 6.96691L10.1024 4.10789C10.3182 3.94605 10.6418 3.94605 10.8576 4.10789L16.0901 6.96691C16.252 7.0748 16.4138 7.34452 16.4138 7.56029V13.3862ZM10.48 5.40254L6.54209 7.56029L10.48 9.71805L14.4179 7.56029L10.48 5.40254Z" fill="#A54136" />
                      </svg>
                      <span style={{ marginLeft: "3px" }}>Category</span>
                    </div><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g opacity="0.5">
                        <path d="M9.2003 12.4C9.39591 12.4 9.57952 12.3152 9.69173 12.1723L13.892 6.83893C14.0204 6.6768 14.0348 6.46347 13.9328 6.28693C13.829 6.1104 13.6243 6 13.4005 6L4.99947 6C4.77566 6 4.57045 6.1104 4.46724 6.28693C4.36524 6.46347 4.37964 6.67627 4.50804 6.83893L8.70827 12.1723C8.81988 12.3152 9.00349 12.4 9.1991 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4C9.1997 12.4 9.1997 12.4 9.2003 12.4Z" fill="#A54136" />
                      </g>
                    </svg>
                  </div>
                  <ul className='halfBorder-noTop' style={{ display: 'none', backgroundColor: "#F9E7CE", color: "var(--Color_002)" }} ref={(node) => this.ulRef(node)} >
                    {
                      PastExam.map((item, index) => {
                        return <li style={{ listStyle: "none" }} key={`Category_${index}_${item}`} className='hover3'>{item.name}</li>
                      })
                    }
                  </ul>
                </Dropdown>
              </div>

              <div className={styles.sorting}>
                <div className={styles.BestSold}>BestSold</div>
                <div className={styles.MostViewed}>Most Viewed</div>
                <div className={styles.MostFavorited}>Most Favorited</div>

              </div>

            </div>
            <div className={styles.exam}>
              {data ? data.map((item, index) => {
                return (
                  <Link href={"/exam/paperdetail/" + index} style={{ all: "unset" }} key={`Link${index}`}>
                    <div className={`${styles.item}`} key={`exam${index}`}>
                      <div className={styles.examTitle} key={`examtitle${index}`}>
                        <span className={styles.title} key={`title${index}`}>{item.title ? item.title : "Paper Name Text Title Show Here Sample"}</span>
                      </div>
                      <div className={styles.average} key={`average${index}`}>
                        <div style={{ height: "100%" }}>Average Accuracy </div>
                        <span key={`averageSpan${index}`}> {item.average ? item.average : "86"} %</span>
                        <Image key={`averageSVG${index}`} src={Lock} alt='lock' />

                      </div>
                    </div>
                  </Link>


                )
              })
                :
                (<>

                </>)

              }
            </div>
          </div>
          <div className={styles.chanllenge}>
            <div className={styles.cont}>
              <div className={styles.title}>Everyday Chanllenge</div>
              <div className={styles.subtitle}>Go to chanllenge the most hard reading and writing paper test
                that only a few good students can pass.</div>
              <button className={`${styles.start} hover3`}>Start Chanllenge</button>
            </div>
            <div className={styles.xuanwo}>
              <div className={styles.Bxuanwo}>
                <div className={styles.Sxuanwo}></div>
              </div>

            </div>
          </div>
          <div style={{height:40+'px'}}></div>
        </div>
        
      </div>
      

      {
        isHome ? null :
          <div className={styles.mask}>
            {isInvite ? <Invite set={setCompoent} data={inviteData} ></Invite> : null}
            {isLogin ? <Login set={setCompoent}></Login> : null}
            {isSignUp ? <SignUp set={setCompoent}></SignUp> : null}
          </div>
      }

         <div className={styles.colorBox}>
         </div> 
    </session >
  )
}
