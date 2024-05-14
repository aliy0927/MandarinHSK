import React, { Component } from 'react'
import styles from "./select.module.css"
import { useState } from 'react'
export default function Select () {
  const [isActive, setIsActive] = useState(null);
  const [isActive2, setIsActive2] = useState(null);
  const handleButtonClick = (button) => {
    setIsActive(button);
  };
  const handleButtonClick2 = (type) => {
    setIsActive2(type);
  };
    return (
        <div>
            <div className={styles.select}>
                <div className={styles.selTitle}>
                    Select the Material Question
                </div>
                <div className={styles.btnTwo}>
                    <button className={styles.rSprint}>
                        <span>Reading sprint</span>
                        <div className={styles.rsprintIcon}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M2.1 6.15L8.475 12.525C8.775 12.825 9.225 12.825 9.525 12.525L15.9 6.15C16.2 5.85 16.2 5.4 15.9 5.1C15.6 4.8 15.15 4.8 14.85 5.1L9 10.95L3.15 5.1C3 4.95 2.8125 4.875 2.625 4.875C2.4375 4.875 2.25 4.95 2.1 5.1C1.8 5.4 1.8 5.85 2.1 6.15Z" fill="#6F614C"/>
                            </g>
                            </svg>
                        </div>
                    </button>
                    <button className={styles.rc}>
                        <span>RC</span>
                        <div className={styles.rcIcon}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                            <path d="M2.1 6.15L8.475 12.525C8.775 12.825 9.225 12.825 9.525 12.525L15.9 6.15C16.2 5.85 16.2 5.4 15.9 5.1C15.6 4.8 15.15 4.8 14.85 5.1L9 10.95L3.15 5.1C3 4.95 2.8125 4.875 2.625 4.875C2.4375 4.875 2.25 4.95 2.1 5.1C1.8 5.4 1.8 5.85 2.1 6.15Z" fill="#6F614C"/>
                            </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div className={styles.btnType}>
                <button className={`${styles.Listening} ${isActive2 ==='Listening'? styles.typeActive : ''}`} id='Listening'
                    onClick={() => handleButtonClick2('Listening')}>
                        Listening
                    </button>
                    <button className={`${styles.Reading} ${isActive2 ==='Reading'? styles.typeActive : ''}`} id='Reading'
                    onClick={() => handleButtonClick2('Reading')}>
                        Reading
                    </button>
                    <button className={`${styles.Writing} ${isActive2 ==='Writing'? styles.typeActive : ''}`} id='Writing'
                    onClick={() => handleButtonClick2('Writing')}>
                        Writing
                    </button>
                </div>
                <div className={styles.btn20}>
                    {[...Array(4)].map((_, row) => (
                        <div className={styles.row} key={row}>
                        {[...Array(5)].map((_, index) => {
                            const number = row * 5 + index + 1;
                            return (
                            <button
                                className={`${styles['number' + number]} ${isActive === 'number' + number ? styles.numActive : ''}`}
                                onClick={() => handleButtonClick('number' + number)}
                                key={number}
                            >
                                {number}
                            </button>
                            );
                        })}
                        </div>
                    ))}
                </div>

                <button className={styles.moreIcon}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                    <path d="M2.33329 6.83317L9.41663 13.9165C9.74996 14.2498 10.25 14.2498 10.5833 13.9165L17.6666 6.83317C18 6.49984 18 5.99984 17.6666 5.6665C17.3333 5.33317 16.8333 5.33317 16.5 5.6665L9.99996 12.1665L3.49996 5.6665C3.33329 5.49984 3.12496 5.4165 2.91663 5.4165C2.70829 5.4165 2.49996 5.49984 2.33329 5.6665C1.99996 5.99984 1.99996 6.49984 2.33329 6.83317Z" fill="#6F614C"/>
                    </g>
                    </svg>
                </button>
            </div>
        </div>
    )
}
