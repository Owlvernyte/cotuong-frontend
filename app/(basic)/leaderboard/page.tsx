import Image from "next/image";

import ExtraInformation from "@/components/leaderboard/extra-information/ExtraInformation";

import Title from "@/components/ui/Title";
import PersonalAchievement from "@/components/leaderboard/personal-achievements/PersonalAchievements";

export default function LeaderBoard() {
  return (
    <div className="flex justify-center h-screen">
      <div className="container max-w-screen-2xl p-10">
        <Title text="BẢNG XẾP HẠNG" textAlign="text-left" />

        <ExtraInformation />

        <PersonalAchievement />

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
