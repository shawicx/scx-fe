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