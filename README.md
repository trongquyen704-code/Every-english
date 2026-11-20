# Everyday English

Ứng dụng web học tiếng Anh cơ bản, giao diện tiếng Việt, phát âm tiếng Anh Mỹ, tối ưu màn hình iPhone.

## Chạy thử
- Mở thư mục bằng VS Code.
- Dùng Live Server hoặc một máy chủ web tĩnh để mở `index.html`.
- Có thể triển khai miễn phí lên GitHub Pages.

Lưu ý: Không nên mở trực tiếp `index.html` bằng `file://` nếu trình duyệt hạn chế JavaScript hoặc lưu trữ. Hãy dùng máy chủ web tĩnh.

## Tính năng
- Từ vựng theo chủ đề, tìm kiếm và đánh dấu đã học.
- Câu giao tiếp có bản dịch.
- Đoạn văn ngắn có bản dịch và nút đọc.
- Luyện nghe câu, điều chỉnh tốc độ.
- Ôn từ đã học, theo dõi tiến độ.
- Lưu tiến độ bằng LocalStorage, xuất/nhập bản sao lưu JSON.

## Dữ liệu
Bản khởi đầu chứa dữ liệu mẫu để kiểm tra luồng hoạt động. Hãy mở rộng mảng `DATA` trong `js/app.js` khi bổ sung nội dung. Phiên bản này chưa có 1.000 từ/500 câu/100 đoạn văn.

## Âm thanh
Web Speech API sử dụng `en-US`. Giọng và khả năng hoạt động ngoại tuyến tùy iPhone, iOS và giọng đã cài đặt.
