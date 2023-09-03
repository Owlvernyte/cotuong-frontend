import { Fragment } from "react";

export default function LeaderBoard() {
  return (
    <Fragment>
      {/* PHẦN 1: TIÊU ĐỀ */}
      <div>
        {/* Tiêu đề */}
        <div>BẢNG XẾP HẠNG (Tiêu đề)</div>

        {/* Thông tin bảng xếp hạng*/}
        <div>
          <div>
            Còn lại: 2 ngày 08 giờ 04 phút 17 giây (Đồng hồ đếm ngược làm mới)
          </div>
          <div>Chia sẻ thành tích (Nút)</div>
        </div>
      </div>

      {/* PHẦN 2: THÀNH TÍCH CÁ NHÂN */}
      <div>
        {/* Tiêu đề */}
        <div>
          {/* Thông tin người chơi */}
          <div>
            <div>Ảnh đại diện (Ảnh tròn)</div>
            <div>Tên người chơi (Text)</div>
            <div>Quốc gia (Ảnh hoặc Icon)</div>
          </div>

          {/* Thông tin trang web */}
          <div>
            <div>cotuong.nyte.tk (Link)</div>
            <div>Logo (Ảnh)</div>
          </div>
        </div>

        {/* Biểu tượng xếp hạng  */}
        <div>
          <div>Ảnh xếp hạng (Huy chương vàng - bạc - dồng - ngôi sao)</div>
          <div>1 (Số thứ tự trên bảng xếp hạng của người chơi)</div>
        </div>

        {/* Thông số */}
        <div>
          <div>
            <div>Thắng (Tiêu đề tỷ số)</div>
            <div>120 (Số trận thắng)</div>
          </div>

          <div>
            <div>Thua (Tiêu đề tỷ số)</div>
            <div>42 (Số trận thua)</div>
          </div>

          <div>
            <div>Hoà (Tiêu đề tỷ số)</div>
            <div>2 (Số trận hoà)</div>
          </div>

          <div>
            <div>Ảnh điểm thịt nướng (Ảnh hoặc Icon)</div>
            <div>71171 (Điểm thịt nướng)</div>
          </div>
        </div>
      </div>

      {/* PHẦN 3: BẢNG XẾP HẠNG CHUNG */}
      <div>
        {/* Bảng xếp hạng gồm các cột:
        1/ Số thứ tự (Số)
        2/ Thông tin người chơi (gồm ảnh đại diện + tên người chơi)
        3/ Quốc gia (Ảnh hoặc Icon)
        4/ Thắng/Thua/Hoà (Số trận Thắng - Thua - Hoà của người chơi)
        5/ Điểm thịt nướng (Số điểm của ngưởi chơi) */}
        <table>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Thắng/Thua/Hoà</th>
            <th>Thịt Nướng</th>
          </tr>

          <tr>
            <td>1</td>
            <td>(Ava) Username</td>
            <td>(Cờ Nước)</td>
            <td>120/42/2</td>
            <td>71171</td>
          </tr>

          <tr>
            <td>2</td>
            <td>(Ava) Username</td>
            <td>(Cờ Nước)</td>
            <td>120/42/2</td>
            <td>71171</td>
          </tr>
        </table>
      </div>
    </Fragment>
  );
}
