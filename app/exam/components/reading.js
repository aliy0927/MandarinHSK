import React, { Component } from 'react'
import styles from "./reading.module.css"
import Image from 'next/image'
import questionIcon from '@/public/images/Question.svg'
export default function Reading () {
  return (
    <div>
        <div className={styles.testContent}>
          <div className={styles.testTit}>
            <span className={styles.title}>Reading - Fill in the blanks</span>
            <div className={styles.questionIcon}>
            <Image src={questionIcon} className={styles.questionImage} />
            </div>

            <div className={styles.pagesIndex}><span>1</span>/3</div>
          </div>
          <div className={styles.testMaterial}>
          To illustrate the harm of drinking alcohol, the doctor put two identical insects [1] into the bottle of wine and water.<br></br>
          The one in the wine died quickly, while the one in the water did not. The doctor said to the patients around him, 
          "See, what do you learn from this [21]?" At this point, one of the patients stood up and seriously replied, 
          "There is absolutely no such worm in the 31 of the drinkers."e of the patients stood up and seriously replied, 
          "There is absolutely no such worm in the 31 of the drinkers."e of the patients stood up and seriously replied, 
          "There is absolutely no such worm in the 31 of the drinkers."e of the patients stood up and seriously replied,
          "There is absolutely no such worm in the 31 of the drinkers." 
          </div>
          <div className={styles.line1}></div>
          <div className={styles.testOptions}>
            <div className={styles.row}>
              <button className={styles.option}><span className={styles.optNum}>A</span>&nbsp;&nbsp;&nbsp;&nbsp;Repetition</button>
              <button className={styles.option}><span className={styles.optNum}>B</span>&nbsp;&nbsp;&nbsp;&nbsp;Mutual</button>
              <button className={styles.option}><span className={styles.optNum}>C</span>&nbsp;&nbsp;&nbsp;&nbsp;Respectively</button>
              <button className={styles.option}><span className={styles.optNum}>D</span>&nbsp;&nbsp;&nbsp;&nbsp;Still</button>
            </div>
          </div>
        </div>
        <div className={styles.solution}>
          <div className={styles.offSolution}>
            <div className={styles.solTit}>Official Solution</div>
            <input type="text" className={styles.solInput} />
          </div>
          <div className={styles.gtpSolution}>
            <div className={styles.solTit}>GPT Solution</div>
            <input type="text" className={styles.solInput} />
          </div>
        </div>
      </div>
  )
}
