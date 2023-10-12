import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import React from 'react'

function BasicLayout({ children }: React.PropsWithChildren) {
    return (
        <div className="app">
            <div className="app-page">
                <div className="flex flex-col h-full">
                    <Header />
                    <main className="p-2 flex-1 overflow-y-auto">
                        {children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}

export default BasicLayout
