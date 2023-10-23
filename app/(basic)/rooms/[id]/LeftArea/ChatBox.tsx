'use client'

import Image from 'next/image'
import React from 'react'
import ChatBubble, { MessageProps } from './ChatBubble'

function ChatBox({
    messages,
    handleSend,
}: {
    messages: MessageProps[]
    handleSend: (message: string) => void
}) {
    const messagesEndRef = React.useRef<HTMLDivElement>(null)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSend(event.currentTarget['message-content'].value as string)
        event.currentTarget.reset()
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    React.useEffect(() => {
        scrollToBottom()
    }, [messages])

    return (
        <div
            id="chat-box"
            className="h-full bg-primary rounded-md shadow-lg flex flex-col p-2 space-y-2"
        >
            <div className="flex-1 space-y-0 text-bamboo-100 overflow-auto break-all px-1 py-2">
                {messages.map((message, i) => {
                    return (
                        <div key={`m_${message.displayName}_${i}`}>
                            <ChatBubble {...message} />
                        </div>
                    )
                })}
                <div ref={messagesEndRef}></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="flex-none join w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <input
                                required
                                name="message-content"
                                className="input input-bordered input-primary bg-bamboo-100 join-item w-full placeholder-dirt-300 placeholder-opacity-50"
                                placeholder="Nhập vào gì đó..."
                            />
                        </div>
                    </div>
                    <button
                        id="send-message"
                        type="submit"
                        className="btn btn-primary join-item bg-bamboo-100 hover:bg-bamboo-200"
                        title="send"
                    >
                        <Image
                            src="/assets/icons/secondary/Send_fill.svg"
                            alt="send_button"
                            width={25}
                            height={25}
                        ></Image>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ChatBox
