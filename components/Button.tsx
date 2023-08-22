import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react'

function Button({
    children,
    ...props
}: PropsWithChildren & { [key: string]: any }) {
    return (
        <button className="px-2 py-1 bg-neutral-500 rounded-md" {...props}>
            {children}
        </button>
    )
}

export default Button
