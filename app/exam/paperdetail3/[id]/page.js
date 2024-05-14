'use client'
import Select from "../../components/select"

import styles from "./page3.module.css"
import React, { Component } from 'react'
export default function Paperdetail3 () {
    return (
        <div>
            <section className={styles.paperdetail3Contain}>
                <div className={styles.mainContent}>
                    <div className={styles.intro}>
                        Test paper title text over here
                    </div>
                    <div className={styles.subIntro}>
                        Brief text content over here to tell what is about thie paper.
                    </div>
                    <div className={styles.testGap}></div>
                    <div className={styles.testListening}>
                        <div className={styles.listening}>
                            <div className={styles.lisTit}>Listening</div>
                            <div className={styles.mp4}>
                                <div className={styles.playIcon1}>
                                    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M60 112.5C31.005 112.5 7.5 88.995 7.5 60C7.5 31.005 31.005 7.5 60 7.5C88.995 7.5 112.5 31.005 112.5 60C112.5 88.995 88.995 112.5 60 112.5ZM45 75.5298C45 78.6027 47.4571 81.0938 50.4881 81.0938C51.4533 81.0916 52.4004 80.8323 53.2321 80.3426L79.7578 64.8192C81.4547 63.825 82.5 61.9888 82.5 60.0018C82.5 58.0147 81.4547 56.1785 79.7578 55.1843L53.2321 39.6517C52.3997 39.1635 51.4522 38.9061 50.4872 38.9063C49.5222 38.9065 48.5747 39.1641 47.7425 39.6526C46.0443 40.6473 44.9987 42.4853 45 44.4737V75.5298Z" fill="#A54136" />
                                    </svg>
                                </div>
                                <div className={styles.playIcon2}>
                                    <svg width="184" height="184" viewBox="0 0 184 184" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.1" cx="92" cy="92" r="89" stroke="black" stroke-width="6" />
                                    </svg>
                                </div>
                                <div className={styles.playIcon3}>
                                    <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.8" d="M89 92C89 80.3124 86.698 68.7392 82.2253 57.9412C77.7526 47.1432 71.1969 37.3319 62.9325 29.0675C54.6681 20.8031 44.8568 14.2474 34.0588 9.77472C23.2609 5.30205 11.6876 3 0 3" stroke="#A54136" stroke-width="6" />
                                    </svg>
                                </div>



                            </div>
                            <div className={styles.lisBtn}>
                                <div className={styles.testOptions}>
                                    <div className={styles.row}>
                                        <button className={styles.option}><span className={styles.optNum}>A</span>&nbsp;&nbsp;&nbsp;Repetition</button>
                                        <button className={styles.option}><span className={styles.optNum}>B</span>&nbsp;&nbsp;&nbsp;Mutual</button>
                                    </div>
                                    <div className={styles.row}>
                                        <button className={styles.option}><span className={styles.optNum}>C</span>&nbsp;&nbsp;&nbsp;Respectively</button>
                                        <button className={styles.option}><span className={styles.optNum}>D</span>&nbsp;&nbsp;&nbsp;Still</button>
                                    </div>
                                </div>
                                <div className={styles.quesBtn}>
                                    <button className={styles.previewQues}>
                                        <svg width="18" height="18" viewBox="5 -5 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.6 9.2003C5.6 9.39591 5.6848 9.57952 5.82773 9.69173L11.1611 13.892C11.3232 14.0204 11.5365 14.0348 11.7131 13.9328C11.8896 13.829 12 13.6243 12 13.4005L12 4.99947C12 4.77566 11.8896 4.57045 11.7131 4.46724C11.5365 4.36524 11.3237 4.37964 11.1611 4.50804L5.82773 8.70827C5.6848 8.81988 5.6 9.00349 5.6 9.1991C5.6 9.1997 5.6 9.1997 5.6 9.2003C5.6 9.1997 5.6 9.1997 5.6 9.2003Z" fill="#FCECD2" />
                                        </svg>
                                        <span>Previews Question</span>
                                    </button>
                                    <div className={styles.gap}></div>
                                    <button className={styles.nextQues}>
                                        <span>Next Question</span>
                                        <svg width="18" height="18" viewBox="-5 -5 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.4 8.7997C12.4 8.60409 12.3152 8.42048 12.1723 8.30827L6.83893 4.10805C6.6768 3.97964 6.46347 3.96524 6.28693 4.06724C6.1104 4.17105 6 4.37566 6 4.59947V13.0005C6 13.2243 6.1104 13.4296 6.28693 13.5328C6.46347 13.6348 6.67627 13.6204 6.83893 13.492L12.1723 9.29173C12.3152 9.18012 12.4 8.99651 12.4 8.8009C12.4 8.8003 12.4 8.8003 12.4 8.7997C12.4 8.8003 12.4 8.8003 12.4 8.7997Z" fill="#FCECD2" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <Select></Select>

                    </div>
                </div>
            </section>
            <div className={styles.colorBox}>
            </div>
        </div>
    )
}