import React from 'react'

function Footer() {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <aside className="items-center grid-flow-col">
                <img className="h-8" src={`/nyte2.svg`}></img>
            </aside>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                Phiên bản V1.0.0
            </nav>
        </footer>
    )
}

export default Footer
