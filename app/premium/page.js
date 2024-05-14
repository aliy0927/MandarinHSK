'use client'
import styles from "./page.module.css"

export default function Premium () {

   return (
      <div> 
         <section className={styles.premiumContain}>
            <div className={styles.premiumMember}>
               <div className={styles.title}>
                  Premium Member
               </div>
               <div className={styles.intro}>
                  Please choose one of the subscriptions below
               </div>
               <div className={styles.mainContent}>
                  <div className={styles.c1}>
                     <div className={styles.card1}>
                        <div className={styles.card1main}>
                           <div className={styles.dot1}></div>
                           <div className={styles.dot2}></div>
                           <div className={styles.dot3}></div>
                           <div className={styles.dot4}></div>
                           <div className={styles.subTitle}>
                              Monthly payment
                           </div>
                           <div className={styles.priceType}>
                              <div className={styles.moneyIcon}>
                                 ￥
                              </div>
                              <div className={styles.price}>
                                 30
                              </div>
                              <div className={styles.timeLimit}>
                                 /month
                              </div>
                           </div>
                           <div className={styles.line}>

                           </div>
                           <div className={styles.subIntro}>
                              Use all questions for <span className={styles.boldText}>one month</span>
                           </div>
                           <div className={styles.subIntro2}>
                              GPT <span className={styles.boldText}>100token</span>
                           </div>
                        </div>
                        
                           <button className={styles.payBtn}>
                              payment
                           </button>
                        
                     </div>
                     <div className={styles.cardShadow1}></div>
                  </div>
                  <div className={styles.c2}>
                     <div className={styles.card1}>
                        <div className={styles.card1main}>
                           <div className={styles.dot1}></div>
                           <div className={styles.dot2}></div>
                           <div className={styles.dot3}></div>
                           <div className={styles.dot4}></div>
                           <div className={styles.subTitle}>
                              Pay quarterly
                           </div>
                           <div className={styles.priceType}>
                              <div className={styles.moneyIcon}>
                                 ￥
                              </div>
                              <div className={styles.price}>
                                 72
                              </div>
                              <div className={styles.timeLimit}>
                                 /quarter
                              </div>
                           </div>
                           <div className={styles.discountLine}>
                              <div className={styles.line}>
                              </div>
                              <div className={styles.discount}>
                                 -20%
                              </div>
                           </div>
                           <div className={styles.subIntro}>
                              <span className={styles.boldText}>Three months </span>for all questions
                           </div>
                           <div className={styles.subIntro2}>
                              GPT <span className={styles.boldText}>500token</span>
                           </div>
                        </div>
                           <button className={styles.payBtn}>
                              payment
                           </button>
                     </div>
                     <div className={styles.cardShadow1}></div>
                  </div>
                  <div className={styles.c3}>
                     <div className={styles.card1}>
                        <div className={styles.card1main}>
                           <div className={styles.dot1}></div>
                           <div className={styles.dot2}></div>
                           <div className={styles.dot3}></div>
                           <div className={styles.dot4}></div>
                           <div className={styles.subTitle}>
                              Annual payment
                           </div>
                           <div className={styles.priceType}>
                              <div className={styles.moneyIcon}>
                                 ￥
                              </div>
                              <div className={styles.price}>
                                 216
                              </div>
                              <div className={styles.timeLimit}>
                                 /year
                              </div>
                           </div>
                           <div className={styles.discountLine}>
                              <div className={styles.line}>
                              </div>
                              <div className={styles.discount}>
                                 -40%
                              </div>
                           </div>
                           <div className={styles.subIntro}>
                              All questions used in <span className={styles.boldText}>one year</span>
                           </div>
                           <div className={styles.subIntro2}>
                              GPT <span className={styles.boldText}>2000token</span>
                           </div>
                        </div>
                        {/* <form> */}
                           <button className={styles.payBtn}>
                              payment
                           </button>
                        {/* </form> */}
                     </div>
                     <div className={styles.cardShadow1}></div>
                  </div>
               </div>
            </div>
            <div className={styles.gtpPackage}>
               <div className={styles.title}>
                  Separate GPT package
               </div>
               <div className={styles.intro}>
                  Please choose one of the subscriptions below
               </div>
               <div className={styles.mainContent2}>
                  <div className={styles.c4}>
                     <div className={styles.card4}>
                        <div className={styles.gtpType}>
                           <span className={styles.moneyIcon}>￥</span>
                           <div className={styles.price}>12</div>
                        </div>
                        <div className={styles.gtpIntro}>
                           <div className={styles.gtpIntro1}>GTP</div >
                           <div className={styles.gtpIntro2}>100token</div>
                           <button className={styles.gtpPayBtn}>
                           <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 5.99962C8 5.75511 7.894 5.5256 7.71533 5.38534L1.04867 0.135056C0.846 -0.0254522 0.579333 -0.0434532 0.358667 0.0840537C0.138 0.213811 0 0.469575 0 0.74934V11.2507C0 11.5304 0.138 11.7869 0.358667 11.9159C0.579333 12.0435 0.845333 12.0255 1.04867 11.8649L7.71533 6.61466C7.894 6.47515 8 6.24564 8 6.00113C8 6.00038 8 6.00037 8 5.99962C8 6.00037 8 6.00037 8 5.99962Z" fill="white"/>
                           </svg>
                           payment
                           </button>
                        </div>
                        
                     </div>
                     <div className={styles.cardShadow4}>
                     </div>
                  </div>
                  <div className={styles.c5}>
                     <div className={styles.card5}>
                        <div className={styles.gtpType}>
                           <div className={styles.moneyIcon}>￥</div>
                           <div className={styles.price}>50</div>
                        </div>
                        <div className={styles.gtpIntro}>
                           <div className={styles.gtpIntro1}>GTP</div >
                           <div className={styles.gtpIntro2}>500token</div>
                           <button className={styles.gtpPayBtn}>
                           <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 5.99962C8 5.75511 7.894 5.5256 7.71533 5.38534L1.04867 0.135056C0.846 -0.0254522 0.579333 -0.0434532 0.358667 0.0840537C0.138 0.213811 0 0.469575 0 0.74934V11.2507C0 11.5304 0.138 11.7869 0.358667 11.9159C0.579333 12.0435 0.845333 12.0255 1.04867 11.8649L7.71533 6.61466C7.894 6.47515 8 6.24564 8 6.00113C8 6.00038 8 6.00037 8 5.99962C8 6.00037 8 6.00037 8 5.99962Z" fill="white"/>
                           </svg>   
                           payment
                           </button>
                        </div>    
                     </div >
                     <div className={styles.cardShadow5}>
                     </div>
                  </div>
                  <div className={styles.c6}>
                     <div className={styles.card6}>
                        <div className={styles.gtpType}>
                           <div className={styles.moneyIcon}>￥</div>
                           <div className={styles.price}>180</div>
                        </div>
                        <div className={styles.gtpIntro}>
                           <div className={styles.gtpIntro1}>GTP</div >
                           <div className={styles.gtpIntro2}>2000token</div>
                           <button className={styles.gtpPayBtn}>
                           <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M8 5.99962C8 5.75511 7.894 5.5256 7.71533 5.38534L1.04867 0.135056C0.846 -0.0254522 0.579333 -0.0434532 0.358667 0.0840537C0.138 0.213811 0 0.469575 0 0.74934V11.2507C0 11.5304 0.138 11.7869 0.358667 11.9159C0.579333 12.0435 0.845333 12.0255 1.04867 11.8649L7.71533 6.61466C7.894 6.47515 8 6.24564 8 6.00113C8 6.00038 8 6.00037 8 5.99962C8 6.00037 8 6.00037 8 5.99962Z" fill="white"/>
                           </svg>
                           payment
                           </button>
                        </div>
                        
                     </div >
                     <div className={styles.cardShadow6}>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <div className={styles.colorBox}>
         </div> 
      </div>
   )
}