/* ============================================================
   CHUYÊN ĐỀ: SỐ HỌC
   Xem hướng dẫn chi tiết ở đầu file 01-bat-dang-thuc.js
   ============================================================ */

window.DATA_CHUONGS = window.DATA_CHUONGS || [];

window.DATA_CHUONGS.push({
  id: "sohoc",
  ten: "Số học",
  bais: [
    {
      id: "chiahet",
      ten: "Chia hết và đồng dư",
      lyThuyet: [
        {
          loai: "dinhnghia",
          tieuDe: "Quan hệ đồng dư",
          noiDung: String.raw`Cho $m$ là số nguyên dương. Ta nói $a$ đồng dư với $b$ theo modulo $m$, ký hiệu $a \equiv b \pmod{m}$, nếu $m \mid (a-b)$.`
        },
        {
          loai: "text",
          noiDung: String.raw`Đồng dư thức có các tính chất tương tự đẳng thức: có thể cộng, trừ, nhân hai đồng dư thức cùng modulo. Đây là công cụ chủ lực để xét tính chia hết, tìm số dư của các biểu thức lớn, và giải phương trình nghiệm nguyên.`
        },
        {
          loai: "luuy",
          noiDung: String.raw`Khi cần tính số dư của một lũy thừa lớn, hãy tìm **chu kỳ lặp** của các số dư liên tiếp thay vì tính trực tiếp.`
        }
      ],
      viDus: [
        {
          ten: "Ví dụ 1",
          de: String.raw`Tìm số dư của $7^{100}$ khi chia cho $5$.`,
          loiGiai: String.raw`Ta có $7 \equiv 2 \pmod 5$, nên $7^{100} \equiv 2^{100} \pmod 5$.
Xét chu kỳ của $2^k \pmod 5$: $2^1{=}2,\ 2^2{=}4,\ 2^3{\equiv}3,\ 2^4{\equiv}1$, chu kỳ độ dài $4$.
Vì $100 = 4\times 25$ nên $2^{100} \equiv (2^4)^{25} \equiv 1^{25} \equiv 1 \pmod 5$.
Vậy $7^{100}$ chia $5$ dư $1$.`
        }
      ],
      baiTaps: [
        {
          de: String.raw`Chứng minh rằng $n^3 - n$ chia hết cho $6$ với mọi số nguyên $n$.`,
          doKho: "de",
          dapAn: String.raw`$n^3-n = n(n-1)(n+1)$ là tích ba số nguyên liên tiếp nên chia hết cho $3!=6$.`
        },
        {
          de: String.raw`Tìm hai chữ số tận cùng của $3^{2024}$.`,

