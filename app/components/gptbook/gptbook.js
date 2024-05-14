'use client'
import Image from 'next/image'
import styles from './gptbook.module.css'

import gif from '@/public/gifs/card_ai.gif'
import { useDispatch } from 'react-redux'
import { transState } from '@/store/QuiteSlice'
export default function CardAI () {
  const dispatch = useDispatch()
  return (

    <Image style={{ cursor: "pointer", backgroundColor: "rgba(0,0,0,0)", zIndex: 9999999 }} src={gif} alt='carai' className={styles.container} onClick={() => dispatch(transState())}>

    </Image>





  )


}