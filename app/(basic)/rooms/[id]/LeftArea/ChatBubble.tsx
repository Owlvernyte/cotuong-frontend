import React from 'react'

export type MessageProps = {
    content: string
    displayName: string
    me?: boolean
    system?: boolean
    badge?: string
}

function ChatBubble({
    badge,
    content,
    displayName,
    me = false,
    system = false,
}: MessageProps) {
    const chatContainerCn = me ? 'chat chat-end' : 'chat chat-start'
    const chatBubbleContainerCn = system
        ? 'chat-bubble'
        : 'chat-bubble chat-bubble-secondary'

    return (
        <div className={chatContainerCn}>
            <div className="chat-header">
                {displayName}
                {badge && (
                    <div className="mb-1 ml-1 badge badge-accent">{badge}</div>
                )}
            </div>
            <div className={chatBubbleContainerCn}>{content}</div>
        </div>
    )
}

export default ChatBubble
