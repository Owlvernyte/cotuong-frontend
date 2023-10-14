import React from 'react'
import Image from 'next/image'

interface ButtonProps {
    text: string
    buttonVariants?: string
    startIcon?: boolean
    endIcon?: boolean
    startIconSrc?: string
    startIconAlt?: string
    startIconWidth?: number
    startIconHeight?: number
    endIconSrc?: string
    endIconAlt?: string
    endIconWidth?: number
    endIconHeight?: number
    loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
    text,
    buttonVariants = 'btn-primary',
    startIcon = false,
    endIcon = false,
    startIconSrc = '',
    startIconAlt = '',
    startIconWidth = 20,
    startIconHeight = 20,
    endIconSrc = '',
    endIconAlt = '',
    endIconWidth = 20,
    endIconHeight = 20,
    loading = false,
}) => {
    const renderStartIcon = () => {
        if (startIcon) {
            return (
                <Image
                    src={startIconSrc}
                    alt={startIconAlt}
                    width={startIconWidth}
                    height={startIconHeight}
                    className="mr-2"
                    style={{ width: 'auto', height: 'auto' }}
                />
            )
        }
        return null
    }

    const renderEndIcon = () => {
        if (endIcon) {
            return (
                <Image
                    src={endIconSrc}
                    alt={endIconAlt}
                    width={endIconWidth}
                    height={endIconHeight}
                    className="ml-2"
                    style={{ width: 'auto', height: 'auto' }}
                />
            )
        }
        return null
    }

    return (
        <button className={`btn ${buttonVariants} btn-md flex items-center`}>
            {renderStartIcon()}
            {loading && <span className="loading loading-spinner"></span>}
            <span>{text}</span>
            {renderEndIcon()}
        </button>
    )
}

export default Button
