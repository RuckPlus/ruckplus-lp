import '@/styles/global.css'
import { useEffect, useRef } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { M_PLUS_1 } from 'next/font/google'
import { createTheme, NextUIProvider } from '@nextui-org/react'

const mPlus1 = M_PLUS_1({
  display: 'swap',
  subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    type: 'dark',
  })

  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current as any
    const screen = window.screen
    const width = (canvas.width = screen.width)
    const height = (canvas.height = screen.height)
    let letters: any = Array(1024).join('1').split('')

    const draw = () => {
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = 'rgba(0, 0, 0, .09)'
      ctx.fillRect(0, 0, width, height)
      ctx.fillStyle = '#a82e6e'

      letters.map((y: any, index: number) => {
        let code = 0xfeff0021 + Math.random() * 93
        let text = String.fromCharCode(code)
        let x = index * 10
        ctx.fillText(text, x, y)
        letters[index] = Number(y) > 700 + Math.random() * 10000 ? 0 : y + 10
      })
    }

    const intervalId = setInterval(draw, 30)

    // useEffectのクリーンアップ関数でsetIntervalをクリアする
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <NextUIProvider theme={theme}>
      <Head>
        <title>RuckPlus - 採用情報</title>
        <meta name='description' content='ITエンジニアの案件紹介サービス' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={mPlus1.className}>
        <canvas ref={canvasRef}></canvas>
        <Component {...pageProps} />
      </div>
    </NextUIProvider>
  )
}
