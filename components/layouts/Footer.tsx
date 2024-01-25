import Image from 'next/image'
import React from 'react'
import packageJson from '@/package.json'

function Footer() {
    return (
        <div className="px-2">
            <footer className="footer items-center px-4 py-1 rounded-t-lg bg-bamboo-300 text-neutral-content">
                <aside className="items-center grid-flow-col">
                    <Image
                        src={`/assets/nyte2.svg`}
                        alt="Nyte Logo"
                        width={35}
                        height={35}
                    ></Image>
                </aside>

                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-bamboo-100 opacity-50">
                    <a
                        className="items-center grid-flow-col hover:underline"
                        href="https://github.com/Owlvernyte/cotuong-frontend"
                        target="_blank"
                        rel="noopener"
                    >
                        GitHub
                    </a>
                    <span>Phiên bản {packageJson['version']}</span>
                </nav>
            </footer>
        </div>
    )
}

export default Footer
