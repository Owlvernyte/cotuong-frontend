import Image from "next/image"
import React from "react"

function Footer() {
    return (
        <div className="px-2">
            <footer className="footer items-center px-4 py-1 rounded-t-lg bg-neutral text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <img className="h-8" src={`/nyte2.svg`}></img>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    Phiên bản V1.0.0
                </nav>
            </footer>
        </div>
    )
}

export default Footer
