import Link from 'next/link'
import React from 'react'

function Settings() {
  return (
    <div>
        <p>Settings</p>
        <Link href={"/settings/account"}>Account</Link>
    </div>
  )
}

export default Settings
