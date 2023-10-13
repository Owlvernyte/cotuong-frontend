import Link from 'next/link'

function Lobby() {
    return (
        <div>
            <Link href={'/rooms/vip'}>Join</Link>
        </div>
    )
}
export default Lobby
