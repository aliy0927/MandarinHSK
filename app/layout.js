'use client'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
// const Header = dynamic(() => import('./components/header/header'), { ssr: false })
import './globals.css'
import leaf from '@/public/gifs/Leaf-Falling-Loop_3.gif'
import Header from './components/header/header'
// import Footer from './components/footer/footer'
const Footer = dynamic(() => import('./components/footer/footer'), { ssr: false })
import CardAI from './components/gptbook/gptbook'
// import AIchat from './components/aichat/aichat'
const AIchat = dynamic(() => import('./components/aichat/aichat'), { ssr: false })
import '@/public/fonts/fonts.css'
import { Provider } from 'react-redux'
import { store } from './store'
const inter = Inter({ subsets: ['latin'] })
import { StrictMode } from 'react'
export default function RootLayout ({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <AIchat></AIchat>
            <Footer />
            <CardAI />
          </body>
        </html>
      </Provider>
    </StrictMode>
  )
}
