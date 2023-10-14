import Image from "next/image"
import React from "react"

function ChatBox({
  messages,
}: {
  messages: {
    content: string
    create_at: Date
  }[]
}) {
  return (
    <div
      id="chat-box"
      className="bg-primary h-full rounded-md shadow-lg flex flex-col p-2 space-y-2 col-span-2"
    >
      <div className="flex-1 flex flex-col space-y-2">
        {messages.map((message, i) => {
          return <div key={`m_${i}`}>{message.content}</div>
        })}
      </div>
      <div className="join w-full">
        <div className="w-full">
          <div className="w-full">
            <input
              className="input input-bordered input-primary bg-bamboo-100 join-item w-full placeholder-dirt-300 placeholder-opacity-50"
              placeholder="Type something..."
            />
          </div>
        </div>
        <button className="btn btn-primary join-item bg-bamboo-100 hover:bg-bamboo-200">
          <Image
            src="/icons/secondary/Send_fill.svg"
            alt="send_button"
            width={25}
            height={25}
          ></Image>
        </button>
      </div>
    </div>
  )
}

export default ChatBox
