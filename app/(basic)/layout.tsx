import Header from '@/components/Header'
import React from 'react'

function BasicLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="app">
            <div className="app-page">
                <div className='flex flex-col h-full'>
                    <Header />
                    <main className='p-2 flex-1'>{children}</main>
                </div>
            </div>
        </div>
    )
}

export default BasicLayout
