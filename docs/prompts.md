AI Prompting History - Week 1
Tài liệu này ghi lại các câu lệnh (prompts) quan trọng đã sử dụng để hoàn thành dự án, tuân thủ khung chuẩn R-T-C-I-O-E.

1. Prompt: Skeleton & Architecture (Khởi tạo cấu trúc)
Role (R): Chuyên gia kiến trúc phần mềm Fullstack.

Task (T): Thiết lập cấu trúc thư mục cho dự án Monorepo tối giản (Minimal Project).

Context (C): Dự án sử dụng Next.js (Client) và NestJS (Server). Yêu cầu tách biệt các thư mục client, server, docs, và e2e ngay từ đầu để chuẩn bị cho các tuần tiếp theo.

Input (I): Sơ đồ khuyến nghị: root/client, root/server/src, root/server/test, root/docs.

Output (O): Danh sách các lệnh PowerShell để tạo nhanh thư mục và các file config như package.json, tsconfig.json, vitest.config.ts.

Evaluation (E): Cấu trúc thư mục phải gọn gàng, file config ở gốc phải quản lý được các file TypeScript bên trong các thư mục con.

Lý do chọn: Kỹ thuật Skeleton giúp tránh sai sót thủ công khi tạo cây thư mục và đảm bảo phân cấp dự án chuẩn ngay từ đầu.

2. Prompt: Test-First Development (Phát triển logic & Unit Test)
Role (R): Kỹ sư TypeScript / QA Automation.

Task (T): Viết logic cho 3 hàm capitalize, sumAll, uniq và bộ Unit Test tương ứng bằng Vitest.

Context (C): Code logic đặt tại server/src/utils.ts và test tại server/test/utils.test.ts. Yêu cầu xử lý lỗi bằng TypeError và đạt độ phủ (coverage) trên 60%.

Input (I): Mô tả logic: capitalize (viết hoa chữ đầu), sumAll (tổng mảng số), uniq (lọc trùng).

Output (O): Mã nguồn TypeScript có kèm JSDoc và bộ test bao phủ được cả trường hợp đúng (Happy Case) và trường hợp ném lỗi (Error Handling).

Evaluation (E): Lệnh npm run coverage phải đạt các chỉ số xanh (Statements >= 60%, Branches >= 50%).

Lý do chọn: Kỹ thuật Test-first đảm bảo logic nghiệp vụ được kiểm chứng chặt chẽ ngay khi viết code, giúp đạt 100% coverage dễ dàng hơn.

3. Prompt: Explainer & Debugging (Sửa lỗi cấu hình)
Role (R): Senior DevOps / TypeScript Expert.

Task (T): Giải thích và sửa lỗi "Module not found" khi di chuyển code vào thư mục lồng nhau (server/src).

Context (C): Sau khi thay đổi cấu trúc thư mục, tsconfig.json và vitest.config.ts báo lỗi đỏ vì không tìm thấy file.

Input (I): Nội dung file tsconfig.json hiện tại và cấu trúc thư mục thực tế.

Output (O): Giải pháp cập nhật thuộc tính include trong tsconfig.json và sửa lại đường dẫn import trong file test.

Evaluation (E): VS Code không còn báo lỗi đỏ (red squiggly lines) và lệnh test chạy thành công.

Lý do chọn: Kỹ thuật Explainer giúp hiểu bản chất cách TypeScript phân giải đường dẫn (module resolution) trong cấu trúc Monorepo, thay vì chỉ sửa lỗi tạm thời.