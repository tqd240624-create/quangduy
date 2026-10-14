# QUANG DUY — TỆ NẠN LÒNG NGƯỜI

Website cá nhân bằng **HTML + CSS + JavaScript thuần**, giao diện responsive, không cần database hay server để chạy.

## 1. Xem website trên máy

- Giải nén ZIP.
- Mở file `index.html` bằng Chrome/Edge.
- Để chỉnh sửa trong **Visual Studio**: chọn `File → Open → Folder`, chọn thư mục `QuangDuy_TeNanLongNguoi`, rồi sửa `index.html`, `style.css`, `script.js`.
- Đây là **website tĩnh độc lập**, không phải project ASP.NET Web Forms và không phải file `.sln` / `.csproj`. Đừng chép đè trực tiếp lên project `QuanLy` đang có nếu muốn giữ project đó.

## 2. Đưa lên Internet MIỄN PHÍ với GitHub Pages

1. Đăng nhập https://github.com/ và tạo repository mới, ví dụ `quang-duy` (**Public** nếu dùng gói GitHub Free).
2. Trong repository bấm **Add file → Upload files**. Kéo thả **nội dung bên trong thư mục đã giải nén** lên GitHub: `index.html`, `style.css`, `script.js`, thư mục `assets` và `.nojekyll` (file ẩn không bắt buộc). Đảm bảo `index.html` nằm ở gốc repository, KHÔNG nằm trong thư mục con.
3. Bấm **Commit changes**.
4. Chọn **Settings → Pages**.
5. Ở **Build and deployment → Source**, chọn **Deploy from a branch**.
6. Chọn branch `main`, folder `/(root)`, rồi **Save**.
7. Chờ GitHub xử lý xuất bản và vào đường dẫn hiển thị trong trang Pages, thường có dạng `https://TEN-TAI-KHOAN.github.io/quang-duy/`.

Tài liệu chính thức: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

**Quan trọng:** Mình chỉ tạo website và đóng gói nguồn. Website CHƯA được xuất bản lên Internet cho đến khi chính bạn đăng nó lên hosting.

## 3. Chức năng có sẵn

- Giao diện đọc bài với 4 chương: Giả tạo, Vô cảm, Lòng tham, Đố kỵ.
- Mỗi chương mở/đóng để đọc nội dung.
- Đổi giao diện sáng/tối, có nhớ lựa chọn ở trình duyệt.
- 5 câu suy ngẫm có nút chuyển câu, sao chép.
- Ghi chú cá nhân lưu **chỉ trên trình duyệt đang sử dụng** bằng `localStorage`.
- Menu cho điện thoại, thanh tiến độ đọc trang, hỗ trợ bàn phím và giảm chuyển động.

## 4. Giới hạn và bảo mật

- Không cần SQL Server/SSMS. Không có tài khoản, đăng nhập hay cơ sở dữ liệu nhiều người dùng.
- Ghi chú không được gửi cho tác giả hoặc lưu lên Internet; xóa dữ liệu trình duyệt có thể làm mất ghi chú.
- **Đừng đăng mật khẩu, thông tin cá nhân, thông tin công ty, dữ liệu bệnh nhân hoặc tài liệu nội bộ lên repository Public.**
- GitHub Pages dành cho website tĩnh; không chạy mã ASP.NET/C# và không chạy Microsoft SQL Server trực tiếp.

## 5. Cấu trúc

```
QuangDuy_TeNanLongNguoi/
├── index.html            Giao diện và nội dung
├── style.css             Phong cách + giao diện mobile
├── script.js             Các tính năng tương tác
├── assets/
│   ├── favicon.svg       Biểu tượng website
│   └── mat-na.svg        Minh họa chủ đề
├── .nojekyll             Dùng với GitHub Pages
└── README.md             Hướng dẫn
```

### Chỉnh nội dung

- Đổi tên/tựa: trong `index.html`, tìm `QUANG DUY` hoặc `TỆ NẠN`.
- Đổi màu: trong `style.css`, tìm `--gold`, `--bg`, `--ink`.
- Đổi câu suy ngẫm: trong `script.js`, tìm `quotations`.

Made for QUANG DUY, 2026.
