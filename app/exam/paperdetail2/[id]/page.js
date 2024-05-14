'use client'

import Select from "../../components/select"
import Reading from "../../components/reading"
import Comment from "../../components/comment"
import styles from "./page2.module.css"
import React, { Component } from 'react'
import { useEffect, useRef } from "react"
import * as echarts from "echarts"
export default function Paperdetail2 () {
    let nowClientWidth = document.documentElement.clientWidth;
    function nowSize(val,initWidth=1440){
    return val * (nowClientWidth/initWidth);
}
const paperDetail2Ref = useRef(null);
const colorBoxRef = useRef(null);
// useEffect(() => {
//   // 获取 .paperdetailContain 元素的高度
//   const height = paperDetail2Ref.current.offsetHeight;
//   // 设置 .colorBox 元素的 marginTop 为 .paperdetailContain 元素的高度
//   colorBoxRef.current.style.top = height + 'px';
// }, []);


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
      
      <section className={styles.paperdetail2Contain} ref={paperDetail2Ref}>
        <div className={styles.mainContent}>
          <div className={styles.intro}>
            Test paper title text over here
          </div>
          <div className={styles.subIntro}>
            Brief text content over here to tell what is about thie paper.
          </div>
          <div className={styles.testGap}></div>
          <div className={styles.testContent}>
            <div className={styles.left}>
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
              <Reading></Reading>
              <Comment></Comment>
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