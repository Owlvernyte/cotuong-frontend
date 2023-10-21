"use client"

import React from "react"

function HelpList() {
  return (
    <div id="help-list">
      {/* Hard code - contents */}
      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Làm sao để đổi username?
        </div>
        <div className="collapse-content">
          <p>
            Đầu tiên bạn vào trang tài khoản. Tại đây bạn có thể chọn vào tuỳ
            chọn thay đổi tên người dùng. Sau đó nhập tên người dùng mới bạn
            muốn. Nhập mật khẩu để xác nhận. Cuối cùng nhấn cập nhật để lưu thay
            đổi.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Cách tính điểm thịt nướng như thế nào?
        </div>
        <div className="collapse-content">
          <p>
            Điểm = điểm hiện tại +10×(thắng - thua + (1/2×Tỉ lệ thắng của đối
            thủ)).
          </p>
          <p>• thắng = 1 thua = 0 nếu người chơi thắng</p>
          <p>• thắng = 0 thua = 1 nếu người chơi thua</p>
          <p>• Nếu hòa thì cả 2 không có điểm</p>
          <p>VD: người thắng 10/10 trận thua người thắng 1/10 trận</p>
          <p>Điểm = 100 +10×(0 - 1 + (1/2×0.1)) = 90.5</p>
          <p>VD: người thắng 10/10 trận thua người thắng 10/10 trận</p>
          <p>Điểm = 100 +10×(0 - 1 + (1/2×1)) = 95</p>
          <p>VD: người thắng 10/10 trận thắng người thắng 10/10 trận</p>
          <p>Điểm = 100 + 10×(1 - 0 + (1/2×1)) = 115</p>
          <p>VD: người thắng 10/10 trận thắng người thắng 1/10 trận</p>
          <p>Điểm = 100 + 10×(1 - 0 + (1/2×0.1)) = 110.5</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Làm sao để lên top bảng xếp hạng?
        </div>
        <div className="collapse-content">
          <p>Chiến thắng thật nhiều!</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Tại sao tôi lại bị xử thua trên thế thắng?
        </div>
        <div className="collapse-content">
          <p>
            Thông thường ở trường hợp này thiết bị đang bị rớt mạng, hoặc tự đổi
            sang mạng Wifi khác (nhà nhiều tầng lầu nhiều Wifi), hoặc tự chuyển
            từ Wifi sang 3G và ngược lại. Hệ thống cố gắng kết nối lại nhưng vì
            lý do gì đó lại không thành công. Khi đó hệ thống xem bạn đã rời bàn
            và xử thua bất chấp thế cờ. Do đó bạn tránh chơi với mạng Wifi/3G
            chập chờn để tránh thua oan. Bạn sẽ ít để ý thấy sự bất tiện khi đổi
            mạng nếu chỉ lướt web, tuy nhiên khi chơi game thường sẽ bị ảnh
            hưởng.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Tại sao tôi bị xử hoà trong khi còn thời gian nhiều?
        </div>
        <div className="collapse-content">
          <p>
            Nếu 2 bên lặp cùng 1 luật hoặc nếu 2 bên hết quân tấn công, hệ thống
            sẽ xử hoà ngay lập tức. Do đó nếu cờ đang ưu thì tránh bị dụ vào thế
            hoà.
          </p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Cho chiếu đích không?
        </div>
        <div className="collapse-content">
          <p>Chiếu tứ phía.</p>
        </div>
      </div>

      <div className="collapse collapse-arrow bg-bamboo-100 rounded-md my-2">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Đồng hồ 2 bên hiển thị đều 0:00 tại sao tôi lại bị xử thua?
        </div>
        <div className="collapse-content">
          <p>
            Đồng hồ của ván đấu và của từng nước cờ được thiết lập ở phía
            server, người chơi không thể can thiệp được nên chắc chắn không có
            gian lận về thời gian. Hệ thống tính toán thời gian tới chính xác
            tới mili giây, tuy nhiên chỉ hiển thị đến giây. Do đó dù bạn thấy 2
            bên đều 0:00 nhưng thực tế đối thủ còn nhiều thời gian hơn bạn một
            ít.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HelpList
