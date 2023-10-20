'use client'

import Title from '@/components/ui/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex justify-center h-full">
            <div className="container max-w-screen-2xl">
                {/* MENU */}
                <div className="h-screen flex flex-col space-y-4 justify-center items-center pb-52">
                    <div className="flex flex-row justify-center items-center p-2 text-center space-x-2">
                        <Image
                            src="/assets/h1_quanco.svg"
                            alt="icon_quan_co"
                            width={120}
                            height={120}
                        />
                        <h1 className="text-6xl md:text-7xl xl:text-8xl drop-shadow-lg">
                            Cờ Tướng
                        </h1>
                    </div>
                    <div className="flex-col space-y-8 justify-center w-full px-2 md:px-0 md:w-1/2">
                        <Link
                            className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg"
                            href="/rooms"
                        >
                            {'Danh sách phòng'}
                        </Link>
                        <Link
                            className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg"
                            href="/leaderboard"
                        >
                            {'Bảng xếp hạng'}
                        </Link>
                        <a
                            className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg"
                            href="#guide"
                        >
                            {'Huớng dẫn chơi'}
                        </a>
                    </div>
                </div>

                {/* GUIDE */}
                <div
                    id="guide"
                    className="flex flex-col space-y-2 justify-center items-center py-6"
                >
                    <Title text="HƯỚNG DẪN CHƠI" />

                    <div className="py-2">
                        <div className="card w-full bg-dirt-200 rounded-md p-4 my-4">
                            <div className="card-body">
                                <div className="card-title text-3xl mb-2">
                                    Luật cờ tướng:
                                </div>
                                <div className="text-xl text-bamboo-400">
                                    <ul className="list-decimal ml-14">
                                        <li>
                                            Tướng: Đi từng ô một, đi ngang hoặc
                                            dọc. Tướng luôn luôn phải ở trong
                                            phạm vi cung và không được ra ngoài.
                                            “Cung” tức là hình vuông 3×3 được
                                            đánh dấu bởi lằng chéo hình chữ X.
                                            <br />
                                        </li>
                                        <li>
                                            Sĩ: Đi xéo 1 ô mỗi nước. Sĩ luôn
                                            luôn phải ở trong cung như con
                                            Tướng.
                                            <br />
                                        </li>
                                        <li>
                                            Tượng: Đi chéo 2 ô (ngang 2 và dọc
                                            2) cho mỗi nước đi. Tượng chỉ được
                                            phép ở một bên của bàn cờ, không
                                            được di chuyển sang nữa bàn cờ của
                                            đối phương. Nước đi của tượng sẽ
                                            không hợp lệ khi có một quân cờ nằm
                                            chặn giữa đường đi.
                                            <br />
                                        </li>
                                        <li>
                                            Xe: Đi ngang hay dọc trên bàn cờ
                                            miễn là đừng bị quân khác cản đường
                                            từ điểm đi đến điểm đến.
                                            <br />
                                        </li>
                                        <li>
                                            Mã: Đi ngang 2 ô và dọc 1 ô (hay dọc
                                            2 ô và ngang 1 ô) cho mỗi nước đi.
                                            Nếu có quân nằm ngay bên cạnh mã và
                                            cản đường ngang 2 (hay đường dọc 2),
                                            mã bị cản không được đi đường đó.
                                            <br />
                                        </li>
                                        <li>
                                            Pháo: Đi ngang và dọc giống như xe.
                                            Điểm khác biệt là nếu pháo muốn ăn
                                            quân, pháo phải nhảy qua đúng 1 quân
                                            nào đó. Khi không ăn quân, tất cả
                                            những điểm từ chổ đi đến chổ đến
                                            phải không có quân cản.
                                            <br />
                                        </li>
                                        <li>
                                            Chuột: (hay Tốt) đi một ô mỗi nước.
                                            Nếu chuột chưa vượt qua sông, nó chỉ
                                            có thể đi thẳng tiến. Khi đã vượt
                                            sông rồi, chuột có thể đi ngang 1
                                            nước hay đi thẳng tiến 1 bước mỗi
                                            nước.
                                            <br />
                                        </li>
                                        <li>
                                            Ăn quân: Khi quân di chuyển đến 1 vị
                                            trí giử bởi quân đối phương, quân
                                            đối phương bị ăn và bị lấy ra khỏi
                                            bàn cờ.
                                            <br />
                                        </li>
                                        <li>
                                            Chống tướng: Hai con tướng trên bàn
                                            không được nằm trên cùng 1 cột dọc
                                            mà không có quân cản nào ở giữa.
                                            Nước đi để 2 con tướng trong vị trí
                                            chống tướng là không hợp lệ.
                                            <br />
                                        </li>
                                        <li>
                                            An toàn của tướng: Sau 1 nước đi,
                                            tướng của phe đi không được để quân
                                            đối phương ăn ngay trong nước tiếp.
                                            Những nước để tướng không an toàn là
                                            không hợp lệ.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card w-full bg-dirt-200 rounded-md p-4 my-4">
                            <div className="card-body">
                                <div className="card-title text-3xl mb-2">
                                    Kết thúc trận đấu: Ván cờ kết thúc khi 1
                                    trong những tình huống sau:
                                </div>
                                <div className="text-xl text-bamboo-400 pl-6">
                                    <ul className="list-disc ml-14">
                                        <li>
                                            Chiếu bí: Nếu một bên chiếu (bắt
                                            tướng), và đối thủ không có khả năng
                                            đở, bên chiếu tướng thắng.
                                            <br />
                                        </li>
                                        <li>
                                            Hết nước đi: Nếu bên tới phiên đi
                                            nhưng không có nước hợp lệ để đi,
                                            bên đó sẽ bị thua.
                                            <br />
                                        </li>
                                        <li>
                                            Sau 120 nước đi của cả 2 bên, mà ko
                                            có quân nào bị ăn thì hòa nhau.
                                            <br />
                                        </li>
                                        <li>
                                            Cấm chiếu tướng liên tục 10 lần
                                            <br />
                                        </li>
                                        <li>
                                            Ăn quân: Khi quân di chuyển đến 1 vị
                                            trí được giữ bởi quân đối phương,
                                            quân đối phương bị ăn và bị lấy ra
                                            khỏi bàn cờ.
                                            <br />
                                        </li>
                                        <li>
                                            Chống Tướng: Hai con tướng trên bàn
                                            không được nằm trên cùng 1 cột dọc
                                            mà không có quân cản nào ở giữa.
                                            Nước đi để 2 con tướng trong vị trí
                                            chống tướng là không hợp lệ.
                                            <br />
                                        </li>
                                        <li>
                                            Tổng thời gian toàn trận đấu: nếu để
                                            hết giờ trước đối thủ người chơi sẽ
                                            bị xử thua!
                                            <br />
                                        </li>
                                        <li>
                                            Thời gian cho một lượt đánh: mỗi
                                            lượt đánh sẽ có tối đa là 1 phút.
                                            Nếu để hết giờ mà không đánh một
                                            quân cờ người chơi sẽ bị xử thua!
                                            <br />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
