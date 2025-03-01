/*
 * @Author: shawicx d35f3153@proton.me
 * @Date: 2025-02-13 21:49:40
 * @LastEditors: shawicx d35f3153@proton.me
 * @LastEditTime: 2025-03-01 15:34:46
 * @Description: 
 */
import './home.scss'

export default function Home() {

  return (
    <div
      className="flex justify-center items-center w-screen h-screen"
    >
      {'不负时光与爱'.split("").map((char, index) => (
        <span
          key={index}
          className="inline-block text-5xl font-bold flash text-[#f43f5e]"
          style={{
            animation: `flashAnimation 3s infinite ${index * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  )
}