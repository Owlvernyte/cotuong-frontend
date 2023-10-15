'use client'

import Image from 'next/image'
import React from 'react'

function ChatBox({
    messages,
    handleSend,
}: {
    messages: {
        content: string
        userName: string
        userId: string
        userEmail: string
    }[]
    handleSend: (message: string) => void
}) {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSend(event.currentTarget['message-content'].value as string)
        event.currentTarget.reset()
    }

    return (
        <div
            id="chat-box"
            className="h-full bg-primary rounded-md shadow-lg flex flex-col p-2 space-y-2 col-span-2"
        >
            <div className="flex-1 space-y-2 text-bamboo-100 overflow-auto break-all">
                {messages.map((message, i) => {
                    return (
                        <div
                            className={'flex break-all min-h-fit'}
                            key={`m_${message.userId}_${i}`}
                        >
                            {message.userName}: {message.content}
                        </div>
                    )
                })}
            </div>
            <form onSubmit={handleSubmit}>
                <div className="join w-full">
                    <div className="w-full">
                        <div className="w-full">
                            <input
                                required
                                name="message-content"
                                className="input input-bordered input-primary bg-bamboo-100 join-item w-full placeholder-dirt-300 placeholder-opacity-50"
                                placeholder="Type something..."
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
                            src="/icons/secondary/Send_fill.svg"
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
