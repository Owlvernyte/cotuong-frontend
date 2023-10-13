'use client'

import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex justify-center h-full">
            <div className="container flex flex-col h-full">
                {/**
                 * MENU - start
                 */}
                <div className="h-screen flex flex-col space-y-4 justify-center items-center pb-40">
                    <div className="flex flex-row justify-center items-center p-2 text-center space-x-2">
                        <img
                            className="w-[96px] md:w-[128px] drop-shadow-lg"
                            src="/h1_quanco.svg"
                            alt="icon_quan_co"
                        ></img>
                        <h1 className="text-4xl md:text-8xl drop-shadow-lg">
                            Cờ Tướng
                        </h1>
                    </div>
                    <div className="flex-col space-y-8 justify-center  w-full px-2 md:px-0 md:w-1/2">
                        <Link
                            href="/rooms"
                            className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg"
                        >
                            {'Danh sách phòng'}
                        </Link>
                        <Link
                            href="/leaderboard"
                            className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg"
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
                {/**
                 * MENU - end
                 */}
                <div
                    id="guide"
                    className="h-screen flex flex-col space-y-2 justify-center items-center pb-40"
                >
                    <div className="justify-center items-center py-5 text-center space-x-2">
                        <h1 className="text-4xl md:text-8xl drop-shadow-lg">
                            Hướng Dẫn Chơi
                        </h1>
                    </div>
                    <div className="w-full drop-shadow-lg flex">
                        <div className="w-[1560px] h-[600px] bg-dirt-200 rounded-[5px] sm:rounded-[10px] md:rounded-[15px] drop-shadow-sm md:drop-shadow-lg">
                            <div className="absolute left-[20px] text-[35px] font-normal inline-flex py-2">
                                Luật cờ tướng:
                            </div>
                            <div className="top-[60px]  absolute text-bamboo-400 text-[20px] font-normal py-5 px-4">
                                1. Tướng: Đi từng ô một, đi ngang hoặc dọc.
                                Tướng luôn luôn phải ở trong phạm vi cung và
                                không được ra ngoài. “Cung” tức là hình vuông
                                3×3 được đánh dấu bởi lằng chéo hình chử X.
                                <br />
                                2. Sĩ: Đi xéo 1 ô mỗi nước. Sĩ luôn luôn phải ở
                                trong cung như con Tướng.
                                <br />
                                3. Tượng: Đi chéo 2 ô (ngang 2 và dọc 2) cho mỗi
                                nước đi. Tượng chỉ được phép ở một bên của bàn
                                cờ, không được di chuyển sang nữa bàn cờ của đối
                                phương. Nước đi của tượng sẽ không hợp lệ khi có
                                một quân cờ nằm chặn giữa đường đi.
                                <br />
                                4. Xe: Đi ngang hay dọc trên bàn cờ miễn là đừng
                                bị quân khác cản đường từ điểm đi đến điểm đến.
                                <br />
                                5. Mã: Đi ngang 2 ô và dọc 1 ô (hay dọc 2 ô và
                                ngang 1 ô) cho mỗi nước đi. Nếu có quân nằm ngay
                                bên cạnh mã và cản đường ngang 2 (hay đường dọc
                                2), mã bị cản không được đi đường đó.
                                <br />
                                6. Pháo: Đi ngang và dọc giống như xe. Điểm khác
                                biệt là nếu pháo muốn ăn quân, pháo phải nhảy
                                qua đúng 1 quân nào đó. Khi không ăn quân, tất
                                cả những điểm từ chổ đi đến chổ đến phải không
                                có quân cản.
                                <br />
                                7. Chuột: (hay Tốt) đi một ô mỗi nước. Nếu chuột
                                chưa vượt qua sông, nó chỉ có thể đi thẳng tiến.
                                Khi đã vượt sông rồi, chuột có thể đi ngang 1
                                nước hay đi thẳng tiến 1 bước mỗi nước.
                                <br />
                                8. Ăn quân: Khi quân di chuyển đến 1 vị trí giử
                                bởi quân đối phương, quân đối phương bị ăn và bị
                                lấy ra khỏi bàn cờ.
                                <br />
                                9. Chống tướng: Hai con tướng trên bàn không
                                được nằm trên cùng 1 cột dọc mà không có quân
                                cản nào ở giữa. Nước đi để 2 con tướng trong vị
                                trí chống tướng là không hợp lệ.
                                <br />
                                10. An toàn của tướng: Sau 1 nước đi, tướng của
                                phe đi không được để quân đối phương ăn ngay
                                trong nước tiếp. Những nước để tướng không an
                                toàn là không hợp lệ.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-screen flex flex-col space-y-2 justify-center items-center pb-40">
                    <div className="flex flex-row justify-center items-center py-5 text-center space-x-2"></div>
                    <div className="w-full drop-shadow-lg">
                        <div className="w-[1560px] h-[400px] bg-dirt-200 rounded-[5px] sm:rounded-[10px] md:rounded-[15px] drop-shadow-sm md:drop-shadow-lg">
                            <div className="absolute left-[20px] text-[35px] font-normal inline-flex py-2">
                                Kết thúc trận đấu: Ván cờ kết thúc khi 1 trong
                                những tình huống sau:
                            </div>
                            <div className=" left-[43px] top-[60px]  absolute text-bamboo-400 text-[20px] font-normal py-5">
                                <ul className="list-disc">
                                    <li>
                                        Chiếu bí: Nếu một bên chiếu (bắt tướng),
                                        và đối thủ không có khả năng đở, bên
                                        chiếu tướng thắng.
                                        <br />{' '}
                                    </li>
                                    <li>
                                        Hết nước đi: Nếu bên tới phiên đi nhưng
                                        không có nước hợp lệ để đi, bên đó sẽ bị
                                        thua.
                                        <br />{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        Sau 120 nước đi của cả 2 bên, mà ko có
                                        quân nào bị ăn thì hòa nhau.
                                        <br />{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        Cấm chiếu tướng liên tục 10 lần
                                        <br />{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        Ăn quân: Khi quân di chuyển đến 1 vị trí
                                        được giữ bởi quân đối phương, quân đối
                                        phương bị ăn và bị lấy ra khỏi bàn cờ.
                                        <br />
                                    </li>
                                    <li>
                                        {' '}
                                        Chống Tướng: Hai con tướng trên bàn
                                        không được nằm trên cùng 1 cột dọc mà
                                        không có quân cản nào ở giữa. Nước đi để
                                        2 con tướng trong vị trí chống tướng là
                                        không hợp lệ.
                                        <br />{' '}
                                    </li>
                                    <li>
                                        Tổng thời gian toàn trận đấu: nếu để hết
                                        giờ trước đối thủ người chơi sẽ bị xử
                                        thua!
                                        <br />{' '}
                                    </li>
                                    <li>
                                        Thời gian cho một lượt đánh: mỗi lượt
                                        đánh sẽ có tối đa là 1 phút. Nếu để hết
                                        giờ mà không đánh một quân cờ người chơi
                                        sẽ bị xử thua!
                                        <br />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
