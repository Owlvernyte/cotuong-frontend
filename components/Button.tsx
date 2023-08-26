import React, { PropsWithChildren, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: VariantType

    size?: SizeType

    rounded?: RoundedType
}

type VariantType = 'solid' | 'ghost' | 'outline' | 'link'
type SizeType = 'lg' | 'md' | 'sm' | "icon"
type RoundedType = 'lg' | 'md' | 'sm' | 'full' | 'none'

const getVariantClassName = (variant: VariantType) => {
    switch (variant) {
        case 'solid':
            return 'bg-bamboo-100 text-dirt-400 hover:bg-bamboo-100/90 active:bg-bamboo-200 focus:outline-none focus:ring focus:ring-dirt-300'
        case 'outline':
            return 'bg-background border border-bamboo-100 hover:bg-bamboo-100/20 hover:text-accent-foreground'
        case 'link':
            return 'underline-offset-4 hover:underline'
        case 'ghost':
            return 'hover:bg-bamboo-100/20 hover:text-accent-foreground'
    }
}

const getSizeClassName = (size: SizeType) => {
    switch (size) {
        case 'sm':
            return 'h-9 px-2 py-1'
        case 'md':
            return 'h-10 px-4 py-2'
        case 'lg':
            return 'h-12 px-8 py-4'
        case 'icon':
            return 'h-10 p-2 w-10'
    }
}

const getRoundedClassName = (rounded: RoundedType) => {
    switch (rounded) {
        case 'lg':
            return 'rounded-lg'
        case 'md':
            return 'rounded-md'
        case 'sm':
            return 'rounded-sm'
        case 'full':
            return 'rounded-full'
    }
}

function Button({
    children,
    variant = 'solid',
    size = 'md',
    rounded = 'md',
    className,
    ...props
}: ButtonProps & PropsWithChildren) {
    const classNameParsed =
        'inline-flex items-center justify-center ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50' +
        getSizeClassName(size) +
        ' ' +
        getVariantClassName(variant) +
        ' ' +
        getRoundedClassName(rounded) +
        `${className ? ' ' + className : ''}`

    return (
        <button className={classNameParsed} {...props}>
            {children}
        </button>
    )
}

export default Button
