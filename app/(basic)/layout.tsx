import Header from '@/components/Header'
import React from 'react'

function BasicLayout({ children }: React.PropsWithChildren) {
    return (
        <div className='screen'>
            <Header/>
            <main className="container h-full">{children}</main>
        </div>
    )
}

export default BasicLayout
