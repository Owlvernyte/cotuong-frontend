import React, { PropsWithChildren } from 'react'

export function TypoH1({ children }: PropsWithChildren) {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {children}
        </h1>
    )
}

export function TypoH2({ children }: PropsWithChildren) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {children}
        </h2>
    )
}

export function TypoH3({ children }: PropsWithChildren) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            {children}
        </h3>
    )
}

export function TypoH4({ children }: PropsWithChildren) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            {children}
        </h4>
    )
}

export function TypoInlineCode({ children }: PropsWithChildren) {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    )
}

export function TypoLead({ children }: PropsWithChildren) {
    return <p className="text-xl text-muted-foreground">{children}</p>
}

export function TypoLarge({ children }: PropsWithChildren) {
    return <div className="text-lg font-semibold">{children}</div>
}

export function TypoSmall({ children }: PropsWithChildren) {
    return (
        <small
            font-medium
            leading-none
            className="text-sm font-medium leading-none"
        >
            {children}
        </small>
    )
}

export function TypoMuted({ children }: PropsWithChildren) {
    return <p className="text-sm text-muted-foreground">{children}</p>
}

export function TypoList({ children }: PropsWithChildren) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {children}
        </h2>
    )
}

export function TypoBlockquote({ children }: PropsWithChildren) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}

export function TypoP({ children }: PropsWithChildren) {
    return <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
}
