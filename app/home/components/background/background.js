'use client'
import Image from 'next/image'
import leaf from '@/public/gifs/Leaf-Falling-Loop_3.gif'
export default function Background () {
  return (
    <>
      <div style={{ position: "absolute", zIndex: "-1" }}>
        <Image alt='leaf' src={leaf} style={{ maxWidth: "100%", height: "auto" }} />
        <div style={{ position: "absolute", bottom: "0", width: "100%", height: "400px", background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(252, 236, 210, 1))" }}></div>
      </div>
    </>
  )
}