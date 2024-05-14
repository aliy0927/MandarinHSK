'use client'
import Select from "../../components/select"
import Reading from "../../components/reading"
import styles from "./page.module.css"
import React, { Component } from 'react'
import { useEffect, useRef } from "react"
import * as echarts from "echarts"
export default function Paperdetail () {
 
let nowClientWidth = document.documentElement.clientWidth;
function nowSize(val,initWidth=1440){
    return val * (nowClientWidth/initWidth);
}

const paperDetailRef = useRef(null);
const colorBoxRef = useRef(null);

    useEffect(() => {
        // 获取 .paperdetailContain 元素的高度
        const height = paperDetailRef.current.offsetHeight;
        console.log(height)
        // 设置 .colorBox 元素的 marginTop 为 .paperdetailContain 元素的高度
        colorBoxRef.current.style.top = height + 'px';
    }, []);

  const chartRef1 = useRef(null)
  useEffect(() => {
    let chartInstance1 = echarts.init(chartRef1.current)
    const option1 = {
      tooltip: {
        show: false ,// 隐藏提示
      },
      title: {
        text: '45/100',
        left: 'center',
        top: 'center',
        textStyle: {
          color: 'rgba(165, 65, 54, 1)',
          fontSize: nowSize(33.6),
          fontFamily: 'DIN',
        }
      },
      series: [
        {
          type: 'pie',
          top:nowSize(10),
          left:nowSize(10),
          right:nowSize(10),
          bottom:nowSize(10),
          data: [
            {
              value: 45,
              // name: ''
              itemStyle: {
                color: 'rgba(0, 0, 0, 0.1)' // 指定颜色
              }
            },
            {
              value: 55,
              // name: ''
              itemStyle: {
                color: 'rgba(165, 65, 54, 1)' // 指定颜色
              }
            },
          ],
          label:{
            normal: {
              show: false,
              formatter: "{d}/\n{b}",
              position: "center",
              lineHight: nowSize(30),
            },

          },
          center: ['50%', '50%'], // 将圆环居中显示
          radius: ['90%', '100%'],
          labelLine: {
            show: false
          }
        }
      ]
    }
    
    chartInstance1.setOption(option1)
    chartInstance1.resize()
   
  }, [])

  const chartRef2 = useRef(null)
  useEffect(() => {

    let chartInstance2 = echarts.init(chartRef2.current)
    const option2 = {
      tooltip: {
        trigger: 'axis',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(165, 65, 54, 0.6)',
            width: 3,
            type: 'solid'
          },

        },
        formatter:
          (params) => {
            const yValue = params[0].data
            return `${yValue}`
          },
        position: function (point, params, dom, rect, size) {
          return [point[0], '10%'] // 将tooltip的位置固定在顶部
        }
      },
      grid: {
        left: nowSize(85),
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: ['10/05', '10/06', '10/07', '10/08', '10/09', '10/10'],
        axisLine: {
          show: false,
        },
        axisPointer: {
          type: 'line',
        },
        axisLabel: {
          color: 'rgba(165,65,54,1)',
          margin: nowSize(40),
          fontSize: nowSize(18.2),
        },
        axisTick: {
          show: false, // 隐藏刻度线
        },
      },
      yAxis: {
        type: 'value',
        min: 100,
        max: 500,
        interval: 100,
        axisLine: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            width: 0.8,
            color: 'rgba(98, 39, 33, 0.3)'  // 设置坐标轴分割线的颜色为红色
          }
        },
        axisPointer: {
          // 设置标记线的样式和颜色
          lineStyle: {
            color: 'rgba(255, 255, 255, 1)'
          }
        },
        axisLabel: {
          color: 'rgba(165,65,54,1)',
          margin: nowSize(40),
          fontSize: nowSize(18.2),
        },
      },
      series: [
        {
          name: '日期',
          type: 'line',
          smooth: true,
          data: [220, 200, 360, 290, 410, 380],
          symbol: 'none',
          lineStyle: {
            width: 0.8,
            color: 'rgba(165,65,54,1)',
          },
          markLine: {
            symbol: ['none', 'none'],
            silent: true,
            symbol: 'none',
            label: {
              show: false,
            },
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(194, 151, 151, 0.6)'
            }, {
              offset: 0.8684,
              color: 'rgba(163, 156, 156, 0)'
            }])
          }
        }
      ]
    }
    chartInstance2.setOption(option2)
  }, [])
  const chartRef3 = useRef(null)
  useEffect(() => {
    let chartInstance3 = echarts.init(chartRef3.current)
    const option3 = {
      tooltip: {
        show: false // 隐藏提示
      },
      grid: {
        top:0,
        left: 0,
        right: 0,
        bottom: 0,
      },
      title: {
        text: '46%',
        left: 'center',
        top: 'center',
        textStyle: {
          color: 'rgba(0, 0, 0, 1) ',
          fontSize: nowSize(11.7),
          fontWeight:300,
          fontFamily: 'DIN',
        }
      },
      series: [
        {
          type: 'pie',
          top:nowSize(5),
          left:nowSize(5),
          right:nowSize(5),
          bottom:nowSize(5),
          data: [
            {
              value: 46,
              // name: ''
              itemStyle: {
                color: 'rgba(0, 0, 0, 0.1)' // 指定颜色
              }
            },
            {
              value: 54,
              // name: ''
              itemStyle: {
                color: 'rgba(165, 65, 54, 1)' // 指定颜色
              }
            },
          ],
          emphasis:{
            scaleSize:2,
         },
          center: ['50%', '50%'], // 将圆环居中显示
          radius: ['80%', '100%'],
          labelLine: {
            show: false
          }
        }
      ]
    }
    chartInstance3.setOption(option3)
  }, [])

  const chartRef4 = useRef(null)
  useEffect(() => {
    let chartInstance4 = echarts.init(chartRef4.current)
    const option4 = {
      tooltip: {
        show: false // 隐藏提示
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      title: {
        text: '45min',
        left: 'center',
        top: 'center',
        textStyle: {
          color:'rgba(0, 0, 0, 1) ',
          fontSize: nowSize(11.7),
          fontWeight:300,
          fontFamily: 'DIN',
        }
      },
      series: [
        {
          type: 'pie',
          top:nowSize(5),
          left:nowSize(5),
          right:nowSize(5),
          bottom:nowSize(5),
          data: [
            {
              value: 46,
              // name: ''
              itemStyle: {
                color: 'rgba(0, 0, 0, 0.1)' // 指定颜色
              }
            },
            {
              value: 54,
              // name: ''
              itemStyle: {
                color: 'rgba(165, 65, 54, 1)' // 指定颜色
              }
            },
          ],
          emphasis:{
            scaleSize:2,
         },
          center: ['50%', '50%'], // 将圆环居中显示
          radius: ['80%', '100%'],
          labelLine: {
            show: false
          }
        }
      ]
    }
    chartInstance4.setOption(option4)
  }, [])

  return (
    <div>
      
      <section className={styles.paperdetailContain} ref={paperDetailRef}>
        <div className={styles.mainContent}>
          <div className={styles.intro}>
            Test paper title text over here
          </div>
          <div className={styles.subIntro}>
            Brief text content over here to tell what is about thie paper.
          </div>
          <div className={styles.LR}>
            <div className={styles.left}>
              <div className={styles.myData}>
                <div className={styles.dataContent}>
                  <div className={styles.chart1Tit}>My Data</div>
                  <div className={styles.chart1}>
                    <div ref={chartRef1} style={{ height: "13.8889vw", width: "13.8889vw",fontFamily: 'DIN' }}></div>
                  </div>
                  <div className={styles.dataExplain}>
                    <span className={styles.percent}>34% </span>better than other
                  </div>
                </div>
              </div>
              <Select></Select>
              <div className={styles.correctRate}>
                <div className={styles.correctContent}>
                  <div className={styles.correctR}>
                    <div className={styles.correctText}>
                      <div className={styles.top}>Correct Rate</div>
                      <div className={styles.bottom}>The percentage of correct and wrong</div>
                    </div>
                    <div className={styles.chart3}>
                      <div ref={chartRef3} style={{ height: "100%", width: "100%",fontFamily: 'DIN',top: nowSize(-5),left: nowSize(-20) }}></div>
                    </div>
                  </div>
                  <div className={styles.timeC}>
                    <div className={styles.correctText}>
                      <div className={styles.top}>Correct Rate</div>
                      <div className={styles.bottom}>The percentage of correct and wrong</div>
                    </div>
                    <div className={styles.chart4}>
                      <div ref={chartRef4} style={{ height: "100%", width: "100%",fontFamily: 'DIN',top: nowSize(-5),left: nowSize(-20) }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.paperData}>
                <div className={styles.paperContent}>
                  <div className={styles.paperTit}>
                    <div className={styles.chart2Tit}>Data of this paper</div>
                    <button className={styles.chart2Btn}>
                      <span>Corrent Rate</span>
                      <svg width="25" height="24" viewBox="-4 -5 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.42 8.18018H12.19H6.57999C5.61999 8.18018 5.13999 9.34018 5.81999 10.0202L11 15.2002C11.83 16.0302 13.18 16.0302 14.01 15.2002L15.98 13.2302L19.19 10.0202C19.86 9.34018 19.38 8.18018 18.42 8.18018Z" fill="#6F614C" />
                      </svg>
                    </button>
                  </div>
                  <div className={styles.paperChart2}>
                    <div ref={chartRef2} style={{ height: "100%", width: "100%" }}></div>
                  </div>
                </div>
              </div>

              <Reading></Reading>
            </div>
            
          </div>
          <div className={styles.aiGTP}></div>
        </div>
      </section>
      <div className={styles.colorBox} ref={colorBoxRef}>
      </div>
    </div>
  )
}