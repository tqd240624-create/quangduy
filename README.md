# TRƯƠNG QUANG DUY — TỆ NẠN LÒNG NGƯỜI (V2)

Website cá nhân responsive dùng HTML/CSS/JavaScript, chạy miễn phí trên GitHub Pages. **Không cần SQL Server hoặc SSMS**.

## Điểm mới V2

- Chỉnh hệ thống font tiếng Việt: dùng **Segoe UI / Tahoma / Arial** có hỗ trợ dấu, thống nhất tiêu đề/nội dung; tăng line-height để tránh cắt dấu. Không cần tải font ngoài.
- Màn hình chào **“WELCOME TO TRƯƠNG QUANG DUY”** tự biến mất sau khoảng 2,85 giây hoặc nhấn **BỎ QUA** để vào ngay. Hiển thị khi trang được tải mới.
- Ghi rõ tác giả **Trương Quang Duy** và thông điệp **“Quang Duy sẽ là người chữa lành cho bạn.”**
- Thêm phần **Liên hệ / Hotline: 0797 964 842** với nút gọi trên điện thoại (`tel:+84797964842`). Đây là liên hệ cá nhân, không phải số cấp cứu.
- Giữ nguyên 4 chương, 5 câu suy ngẫm, nút sao chép, chế độ sáng/tối, ghi chú riêng trong trình duyệt.

## Thay website đang chạy trên GitHub

Bạn đã có repo `https://github.com/tqd240624-create/quangduy` và bật GitHub Pages (`main` / `root`), vì vậy **không cần tạo repo khác hoặc bật Pages lại**.

1. Giải nén ZIP mới. **Vào bên trong thư mục** `QuangDuy_Website_V2_ChuaLanh`.
2. Mở repo `https://github.com/tqd240624-create/quangduy` → **Add file → Upload files**.
3. Kéo thả **3 file ở cấp gốc**: `index.html`, `style.css`, `script.js`. GitHub sẽ đề nghị cập nhật các file trùng tên. Có thể thêm `README.md` nếu bạn muốn cập nhật hướng dẫn.
4. **Không đổi tên, không xóa thư mục `assets` hiện có.** Hai ảnh SVG trong `assets` vẫn dùng như cũ.
5. Chọn **Commit changes** (nhánh `main`). Chờ GitHub Pages triển khai lại và mở `https://tqd240624-create.github.io/quangduy/`.
6. Nếu trình duyệt vẫn hiện bản cũ: nhấn `Ctrl + F5` hoặc mở tab ẩn danh để tải mới CSS/JS.

Trang web đang được lưu trên GitHub Pages không tự thay đổi khi bạn chỉnh file trong Visual Studio trên máy; cần upload/commit lên GitHub.

## Kiểm tra tại máy

Mở `index.html` bằng Chrome/Edge. Nếu chỉnh sửa bằng Visual Studio: **File → Open → Folder**, chọn thư mục dự án. Website này là website tĩnh, không phải project ASP.NET Web Forms, vì vậy không cần chạy nút IIS Express.

## Cấu trúc

```text
QuangDuy_Website_V2_ChuaLanh/
├── index.html
├── style.css
├── script.js
├── README.md
├── .nojekyll
└── assets/
    ├── favicon.svg
    └── mat-na.svg
```

## Lưu ý về dữ liệu

Ghi chú cá nhân được lưu bằng `localStorage` trên trình duyệt người truy cập, **không gửi đến Quang Duy**. GitHub Pages chỉ dùng để xuất bản website tĩnh; repo Public có thể được xem bởi người khác. Không thêm mật khẩu hoặc thông tin nhạy cảm vào mã nguồn.
