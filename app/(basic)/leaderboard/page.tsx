import Image from "next/image";
import Link from "next/link";

import ExtraInformation from "@/components/leaderboard/extra-information/ExtraInformation";

import Title from "@/components/ui/Title";

export default function LeaderBoard() {
  return (
    <div className="flex justify-center h-screen">
      <div className="container max-w-screen-2xl p-10">
        {/* PHẦN 1: TIÊU ĐỀ */}

        {/* Tiêu đề */}
        <Title text="BẢNG XẾP HẠNG" textAlign="text-left" />

        {/* Thông tin bảng xếp hạng*/}
        <ExtraInformation />

        {/* PHẦN 2: THÀNH TÍCH CÁ NHÂN */}
        <div className="bg-dirt-300 rounded-md my-4">
          {/* Tiêu đề */}
          <div className="flex flex-col justify-between items-center md:flex-row px-6 py-4">
            {/* Thông tin người chơi */}
            <div className="flex flex-col space-x-3 items-center md:flex-row">
              <div className="avatar">
                <div className="w-12 rounded-full">
                  <Image
                    src="/avatars/avatar1.png"
                    alt="Avatar"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="text-bamboo-100 text-2xl py-2">Username</div>
              <Image src="/flags/VN.svg" alt="Flag" width={40} height={40} />
            </div>

            {/* Thông tin trang web */}
            <div className="flex items-center space-x-1">
              <Link
                href={"/cotuong.nyte.tk"}
                className="text-bamboo-100 opacity-70"
              >
                cotuong.nyte.tk
              </Link>
              <Image src="/thitnuong.svg" alt="Avatar" width={50} height={50} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Biểu tượng xếp hạng  */}
            <div className="bg-bamboo-300 md:rounded-bl-md text-center p-4 md:px-20 md:py-10">
              <div className="flex flex-col items-center">
                <Image
                  src="/medals/top1.svg"
                  alt="Medal"
                  width={120}
                  height={120}
                />
                <div className="text-bamboo-100 text-3xl">1</div>
              </div>
            </div>

            {/* Thông số */}
            <div className="md:container bg-bamboo-400 rounded-b-md md:rounded-br-md text-bamboo-100 flex flex-col justify-between items-center md:flex-row py-2 px-20">
              <div className="flex flex-row md:flex-col items-center">
                <div className="text-xl opacity-70">Thắng</div>
                <div className="text-3xl px-2 md:text-7xl md:py-4">120</div>
              </div>

              <div className="flex flex-row md:flex-col items-center">
                <div className="text-xl opacity-70">Thua</div>
                <div className="text-3xl px-2 md:text-7xl md:py-4">42</div>
              </div>

              <div className="flex flex-row md:flex-col items-center">
                <div className="text-xl opacity-70">Hoà</div>
                <div className="text-3xl px-2 md:text-7xl md:py-4">2</div>
              </div>

              <div className="flex flex-row md:flex-col items-center">
                <div className="w-14 md:w-auto">
                  <Image
                    src="/diemthitnuong.svg"
                    alt="Score"
                    width={120}
                    height={120}
                  />
                </div>
                <div className="text-3xl px-2 md:text-2xl md:py-4">71171</div>
              </div>
            </div>
          </div>
        </div>

        {/* PHẦN 3: BẢNG XẾP HẠNG CHUNG */}
        {/* Bảng xếp hạng gồm các cột:
        1/ Số thứ tự (Số)
        2/ Thông tin người chơi (gồm ảnh đại diện + tên người chơi)
        3/ Quốc gia (Ảnh hoặc Icon)
        4/ Thắng/Thua/Hoà (Số trận Thắng - Thua - Hoà của người chơi)
        5/ Điểm thịt nướng (Số điểm của ngưởi chơi) */}
        <div className="overflow-x-auto">
          <table className="table bg-bamboo-300 text-bamboo-100 text-lg rounded-md">
            <thead className="text-bamboo-100 text-lg">
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th>Thắng / Thua / Hoà</th>
                <th>
                  <div className="w-12">
                    <Image
                      src="/diemthitnuong.svg"
                      alt="Score"
                      width={120}
                      height={120}
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  <div className="flex space-x-3 items-center">
                    <div className="avatar">
                      <div className="w-12 rounded-full">
                        <Image
                          src="/avatars/avatar1.png"
                          alt="Avatar"
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                    <div className="text-bamboo-100 text-2xl">Username</div>
                  </div>
                </td>
                <td>
                  <Image
                    src="/flags/VN.svg"
                    alt="Flag"
                    width={40}
                    height={40}
                  />
                </td>
                <td>120 / 42 / 2</td>
                <td>71171</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Fix (tạm thời): Phần chân content để không bị cắt bảng khi scroll */}
        <div className="p-20" />
      </div>
    </div>
  );
}
