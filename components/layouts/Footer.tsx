import Image from "next/image"
import React from "react"

function Footer() {
  return (
    <footer className="footer items-center px-4 bg-bamboo-300 text-bamboo-100 text-opacity-50">
      <aside className="items-center grid-flow-col">
        <Image
          src={`/nyte2.svg`}
          alt="Owlvernyte Logo"
          width={40}
          height={40}
        />
      </aside>
      <nav className="grid-flow-col text-xs gap-4 md:place-self-center md:justify-self-end">
        Phiên bản V1.0.0
      </nav>
    </footer>
  )
}

export default Footer
