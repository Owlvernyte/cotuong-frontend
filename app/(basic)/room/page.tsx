import Link from 'next/link'

function Lobby() {
    return (
        <div>
            <Link href={'/room/vip'}>Join</Link>
        </div>
    )
}
export default Lobby
