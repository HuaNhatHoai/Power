/* ============================================================
   DỮ LIỆU CHUYÊN ĐỀ
   File này chứa 2 chương: Số học và Hình học.

   Schema một chương:
     { id, ten, bais: [ { id, ten, lyThuyet, viDus, baiTaps } ] }

   Một block lý thuyết:
     { loai, tieuDe?, noiDung }
     - loai: "section"   → tiêu đề mục (KHÔNG thành tab, hiển thị to đậm
                            màu accent phía trên nội dung mỗi tab)
     - loai: "text"      → đoạn văn (nếu nội dung chỉ toàn **...** thì
                            được tự nhận diện là section)
     - loai: "dinhnghia"/"dinhly" → hộp có tiêu đề, thành một tab
     - loai: "luuy"      → hộp cảnh báo, thành một tab

   Một ví dụ:      { ten, de, loiGiai }
   Một bài tập:    { de, doKho, dapAn }   doKho ∈ "de"|"vua"|"kho"

   Công thức LaTeX đặt trong String.raw`...` — không cần escape dấu \.
     $...$   → công thức trong dòng
     $$...$$ → công thức tách dòng riêng
   Hình minh hoạ: chèn <div class="img-placeholder" data-img-slot="tên-slot"></div>
     vào trong lời giải (hoặc đề) — người dùng sẽ tự upload ảnh.
   ============================================================ */

window.DATA_CHUONGS = window.DATA_CHUONGS || [];

/* ============================ SỐ HỌC ============================ */
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
          doKho: "kho",
          dapAn: ""
        }
      ]
    }
  ]
});

/* =========================== HÌNH HỌC =========================== */
window.DATA_CHUONGS.push({
  id: "hinh-hoc",
  ten: "Hình học",
  bais: [
    {
      id: "phuong-tich-truc-dang-phuong",
      ten: "Phương tích, trục đẳng phương và tâm đẳng phương",
      lyThuyet: [
        {
          loai: "section",
          noiDung: String.raw`Phương tích của một điểm đối với đường tròn`
        },
        {
          loai: "dinhnghia",
          tieuDe: "Định nghĩa 1 (Power)",
          noiDung: String.raw`Phương tích của điểm $M$ đối với đường tròn $\omega$ có tâm $O$ và bán kính $R$, kí hiệu $\mathscr{P}_{M/\omega}$, được định nghĩa là giá trị
$$\mathscr{P}_{M/\omega}=OM^{2}-R^{2}.$$`
        },
        {
          loai: "dinhly",
          tieuDe: "Định lý 1",
          noiDung: String.raw`Cho đường tròn $\omega$ có tâm $O$ và bán kính $R$ và điểm $M$.
1. Phương tích $\mathscr{P}_{M/\omega}$ nhận giá trị dương, âm hay bằng không phụ thuộc vào vị trí của $M$ nằm bên ngoài, bên trong hay thuộc đường tròn.
2. Từ $M$ nằm ngoài đường tròn kẻ tiếp tuyến $MA$ đến $(O)$ ($A$ là tiếp điểm) thì $\mathscr{P}_{M/\omega}=MA^{2}$.
3. Nếu một đường thẳng đi qua $M$ cắt đường tròn tại hai điểm $X,Y$ thì $\mathscr{P}_{M/\omega}=\overline{MX}\cdot\overline{MY}$.
4. Nếu $AB$ là một đường kính bất kì thì $\mathscr{P}_{M/\omega}=\overrightarrow{MA}\cdot\overrightarrow{MB}$.`
        },
        {
          loai: "dinhly",
          tieuDe: "Định lý 2",
          noiDung: String.raw`Xét $A,B,C,D$ là bốn điểm phân biệt và đường thẳng $AB$ cắt đường thẳng $CD$ tại $P$. Khi đó bốn điểm $A,B,C,D$ cùng thuộc một đường tròn khi và chỉ khi
$$\overline{PA}\cdot\overline{PB}=\overline{PC}\cdot\overline{PD}.$$`
        },

        {
          loai: "section",
          noiDung: String.raw`Trục đẳng phương, tâm đẳng phương`
        },
        {
          loai: "dinhnghia",
          tieuDe: "Định nghĩa 2 (Radical axis)",
          noiDung: String.raw`Trục đẳng phương của hai đường tròn $(O_1),(O_2)$ ($O_1$ không trùng $O_2$) là tập hợp các điểm $M$ thỏa mãn
$$\mathscr{P}_{M/(O_1)} = \mathscr{P}_{M/(O_2)}.$$`
        },
        {
          loai: "dinhly",
          tieuDe: "Định lý 3",
          noiDung: String.raw`Trục đẳng phương của hai đường tròn $(O_1),(O_2)$ ($O_1$ không trùng $O_2$) là đường thẳng vuông góc với đoạn $O_1O_2$. Nếu hai đường tròn này cắt nhau tại $A,B$ thì đường thẳng qua $A,B$ chính là trục đẳng phương của hai đường tròn.`
        },
        {
          loai: "dinhnghia",
          tieuDe: "Định nghĩa 3 (Radical center)",
          noiDung: String.raw`Cho ba đường tròn có tâm không thẳng hàng. Trục đẳng phương của 3 cặp đường tròn đó đồng quy tại một điểm, điểm đó được gọi là tâm đẳng phương của 3 đường tròn.`
        },
        {
          loai: "luuy",
          noiDung: String.raw`**Hệ quả 1:** Cho hai đường tròn không đồng tâm $(O_1),(O_2)$. Các điểm $A,B$ thuộc $(O_1)$, $C,D$ thuộc $(O_2)$. Khi đó các phát biểu sau là tương đương:
(i) Các điểm $A,B,C,D$ cùng thuộc một đường tròn tâm $O_3$ không trùng với $O_1,O_2$.
(ii) Giao điểm của $AB$ và $CD$ thuộc trục đẳng phương của $(O_1)$ và $(O_2)$.`
        }
      ],
      viDus: [
        {
          ten: "Ví dụ 1 (Định lí Euler)",
          de: String.raw`Cho $R,r$ lần lượt là bán kính đường tròn ngoại tiếp và nội tiếp của một tam giác. Khi đó, khoảng cách $d$ giữa hai tâm của hai đường tròn này là $\sqrt{R(R-2r)}$.`,
          loiGiai: String.raw`Xét tam giác $ABC$ có tâm đường tròn nội tiếp và ngoại tiếp lần lượt là $I,O$.
Tia $BI$ cắt đường tròn tại $M$, $MK$ là đường kính. $ID$ vuông góc với $BC$ tại $D$.

<div class="img-placeholder" data-img-slot="euler-1"></div>

Để tính khoảng cách giữa $I$ và $O$, ta tính phương tích của $I$ so với $(O)$.

Trước tiên, ta lưu ý rằng tam giác $MIC$ có
$$\angle MIC=\angle MCI=\dfrac{\angle B+\angle C}{2}$$
nên tam giác này cân tại $M$ và suy ra $MI=MC$.

Do $\triangle IDB \sim \triangle MCK$ đồng dạng nên suy ra
$$BI\cdot MC=MK \cdot ID.$$

Rõ ràng $$BI\cdot MC=BI\cdot IM=-\overline{IB}\cdot\overline{IM}=-\mathscr{P}_{I/(O)}=R^2-OI^2$$
và $MK\cdot ID=2R\cdot r$ nên ta suy ra
$$OI^2=R^2-2Rr.$$

Vậy $d=OI=\sqrt{R(R-2r)}$. $\square$`
        },
        {
          ten: "Ví dụ 2 (USAMO 1990)",
          de: String.raw`Cho tam giác $ABC$ nhọn. Đường thẳng qua $B$, vuông góc với $AC$ cắt đường tròn đường kính $AC$ tại $P,Q$. Đường thẳng qua $C$, vuông góc với $AB$ cắt đường tròn đường kính $AB$ tại $R,S$. Chứng minh $P,Q,R,S$ cùng thuộc một đường tròn.`,
          loiGiai: String.raw`<div class="img-placeholder" data-img-slot="usamo-1990"></div>

Gọi $K$ là giao điểm thứ hai của hai đường tròn. $J$ là giao điểm của $CR$ và $BP$. Khi đó do $J$ là trực tâm nên rõ ràng $A,J,K$ thẳng hàng.

Khi đó, ta có
$$\overline{JQ}\cdot\overline{JP}=\mathscr{P}_{J/(AKC)}=\overline{JA}\cdot\overline{JK}$$
$$\overline{JR}\cdot\overline{JS}=\mathscr{P}_{J/(AKB)}=\overline{JA}\cdot\overline{JK}$$
nên suy ra
$$\overline{JQ}\cdot\overline{JP}=\overline{JR}\cdot\overline{JS}.$$

Từ đó rõ ràng $4$ điểm $P,Q,R,S$ cùng thuộc một đường tròn. $\square$`
        },
        {
          ten: "Ví dụ 3",
          de: String.raw`Cho đường tròn tâm $(O)$ và dây cung $BC$ cố định ($BC$ khác đường kính). Điểm $A$ di chuyển trên đường tròn sao cho tam giác $ABC$ không phải là tam giác cân tại $A$. Tiếp tuyến tại $A$ của đường tròn cắt $BC$ tại $E$. Đường tròn ngoại tiếp tam giác $AOE$ cắt $(O)$ tại điểm thứ hai là $F$. Chứng minh rằng $AF$ luôn đi qua một điểm cố định khi $A$ di chuyển.`,
          loiGiai: String.raw`<div class="img-placeholder" data-img-slot="vd3-fixed-point"></div>

Gọi $D$ là trung điểm của $BC$. Khi đó ta có $D \in (AOE)$. Gọi $T$ là giao điểm của $AF$ và $OD$. Ta sẽ chứng minh $T$ là điểm cố định.

Ta có
$$\overline{TD}\cdot\overline{TO}=\mathscr{P}_{T/(AOE)}=\overline{TF}\cdot\overline{TA}=\mathscr{P}_{T/(ABC)}=OT^2-OC^2.$$

Suy ra
$$OC^2=OT^2-\overline{TD}\cdot\overline{TO}=\overline{TO}\cdot\overline{DO}$$
nên $T$ cố định. $\square$`
        },
        {
          ten: "Ví dụ 4 (CPS Match 2024)",
          de: String.raw`Cho tứ giác $ABCD$ sao cho $AB=BC=CD$. Các điểm $X,Y$ lần lượt nằm trên các tia $CA,BD$ sao cho $BX=CY$. Gọi $P,Q,R,S$ lần lượt là trung điểm của các đoạn thẳng $BX,CY,XD,YA$. Chứng minh rằng các điểm $P,Q,R,S$ cùng thuộc một đường tròn.`,
          loiGiai: String.raw`<div class="img-placeholder" data-img-slot="cps-2024"></div>

Gọi $M$ là trung điểm của $XY$. Nhận thấy $PR$ là đường trung bình trong các tam giác $XBD$ và $XBY$, do đó $M$ nằm trên $PR$. Tương tự, $M$ cũng nằm trên $QS$.

Gọi $\omega_1$ là đường tròn tâm $B$ bán kính $AB=BC$ và $\omega_2$ là đường tròn tâm $C$ bán kính $BC=CD$.

Khoảng cách từ $X$ đến tâm của $\omega_1$ bằng khoảng cách từ $Y$ đến tâm của $\omega_2$, đồng thời $\omega_1$ và $\omega_2$ có cùng bán kính, nên phương tích của $X$ đối với $\omega_1$ bằng phương tích của $Y$ đối với $\omega_2$. Do đó
$$XA\cdot XC=YD\cdot YB.$$

Áp dụng các phép vị tự tâm $X$ và tâm $Y$, ta suy ra $MS\cdot MQ=MR\cdot MP$, và vì vậy bốn điểm $P,Q,R,S$ cùng nằm trên một đường tròn. $\square$`
        },
        {
          ten: "Ví dụ 5 (Olympiad Iran 2025)",
          de: String.raw`Cho tam giác $ABC$ nhọn, có ba cạnh đôi một khác nhau. Đường phân giác trong của góc $A$ cắt cạnh đối diện $BC$ tại $E$ và cắt cung nhỏ $BC$ của đường tròn ngoại tiếp tam giác $ABC$ tại $M$. Giả sử $D\neq M$ là một điểm trên cung nhỏ $BC$ sao cho $ED=EM$. Ngoài ra, gọi $P$ là một điểm trên đoạn thẳng $AD$ sao cho $\angle ABP=\angle ACP\neq 0$. Gọi $O$ là tâm đường tròn ngoại tiếp tam giác $ABC$. Chứng minh rằng $OP\perp AM$.`,
          loiGiai: String.raw`<div class="img-placeholder" data-img-slot="iran-2025"></div>

Từ $O$, kẻ đường vuông góc với $AM$ cắt $AD$ và $BC$ lần lượt tại $P'$ và $X$. Vì $O$ và $E$ đều nằm trên đường trung trực của $MD$ nên $OE\perp MD$. Vì $E$ là trực tâm của $\triangle OXM$ (điều này suy ra $XE\perp OM$, $ME\perp OX$ và $OE\perp XM$), và ta có $OE\perp MD$, nên $XM$ và $MD$ là cùng một đường thẳng. Do đó $X$, $M$, $D$ thẳng hàng. Vậy ta có:
$$XP'\cdot XO=XD\cdot XM.$$
Ngoài ra, $XD\cdot XM=XB\cdot XC$. Suy ra $XP'\cdot XO=XB\cdot XC$. Điều này chứng tỏ tứ giác $OP'BC$ nội tiếp. Do đó:
$$\angle P'BC = 180^\circ - \angle P'OC$$
$$= 180^\circ - (\angle P'OM + \angle MOC)$$
$$= 180^\circ - \bigl(90^\circ - \dfrac{B-C}{2} + \angle A\bigr)$$
$$= 90^\circ + \dfrac{B-C}{2} - \angle A.$$
$$\Rightarrow \angle P'BO = \angle P'BC - (90^\circ - \angle A) = \dfrac{B-C}{2}.$$
$$\Rightarrow \angle P'BA = \angle OBA - \angle OBP' = (90^\circ - C) - \dfrac{B-C}{2} = (90^\circ - B) + \dfrac{B-C}{2} = \angle P'CA.$$

Bây giờ ta chứng minh điểm $P$ trên $AD$ là duy nhất.

Giả sử phản chứng rằng điều này không đúng, và tồn tại hai điểm phân biệt $Y$ và $Z$ trên $AD$ ($Y\neq Z$) sao cho $\angle YBA=\angle YCA$ và $\angle ZBA=\angle ZCA$. Khi đó ta có:
$$\frac{ZY}{YA}=\frac{BZ}{BA}\cdot\frac{\sin\angle ZBY}{\sin\angle YBA}=\frac{CZ}{CA}\cdot\frac{\sin\angle ZCY}{\sin\angle YCA}.$$
Biết rằng $\angle YBA=\angle YCA$ và $\angle ZBA=\angle ZCA$. Nếu giả sử thêm $\angle ZBY=\angle ZCY$ thì:
$$\frac{BZ}{BA}=\frac{CZ}{CA}\Leftrightarrow\frac{BZ}{CZ}=\frac{BA}{CA}.$$
Vậy $Z$ (và tương tự $Y$) nằm trên đường tròn Apollonius ứng với đỉnh $A$ và đoạn $BC$ (quỹ tích các điểm $K$ thỏa $KB/KC=AB/AC$). Vì $Y$, $Z$ nằm trên $AD$ và cũng nằm trên đường tròn Apollonius này, ta dẫn đến mâu thuẫn nếu $Y$, $Z\neq A$ và $AD$ không trùng với đường tròn Apollonius đó. (Lưu ý rằng $Y\neq A$ và $Z\neq A$. Ngoài ra, nếu một trong hai điểm nằm trên $BC$ thì suy ra $AB=AC$, mâu thuẫn với giả thiết bài toán khi $AB\neq AC$.)

Do đó $P\equiv P'$ và chứng minh hoàn tất. $\square$`
        }
      ],
      baiTaps: [
        {
          de: String.raw`Cho tam giác $ABC$ có $H$ là trực tâm. Tính khoảng cách từ $H$ đến $O$ (tâm đường tròn ngoại tiếp) theo $R$ và:
(a) Các cạnh $BC=a$, $CA=b$, $AB=c$.
(b) Các góc $A$, $B$, $C$.`,
          doKho: "vua",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ và điểm $P$ thỏa mãn
$$\alpha\overrightarrow{PA}+\beta\overrightarrow{PB}+\gamma\overrightarrow{PC}=\overrightarrow{0}$$
trong đó $\alpha,\beta,\gamma$ là các số thực. Tính phương tích của điểm $P$ đối với đường tròn ngoại tiếp tam giác $ABC$ theo $\alpha,\beta,\gamma$ và độ dài ba cạnh của tam giác $ABC$.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ cân tại $A$ có $\widehat{BAC}=20^{\circ}$. $D$ là điểm trên cạnh $BC$ sao cho $DC=2BD$. Gọi $E$ là hình chiếu vuông góc của $C$ lên $AD$. Tính số đo góc $\widehat{AEB}$.`,
          doKho: "vua",
          dapAn: ""
        },
        {
          de: String.raw`Cho $C$ thuộc nửa đường tròn đường kính $AB$. Gọi $D$ là điểm giữa của cung $AC$ và $E$ là hình chiếu vuông góc của $D$ lên $BC$. Gọi $F$ là giao điểm của $AE$ và nửa đường tròn. Chứng minh rằng $BF$ là đường trung tuyến của tam giác $BED$.`,
          doKho: "vua",
          dapAn: ""
        },
        {
          de: String.raw`Cho tứ giác $ABCD$ nội tiếp với $ABC$ là tam giác nhọn. Trên $AB$, $BC$ lần lượt lấy $E$, $F$ sao cho $EBFD$ là hình bình hành. Chứng minh rằng
$$BF\cdot BC+BE\cdot BA=BD^2.$$`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ có $AD$ là đường phân giác trong, $D$ thuộc $BC$. Đường tròn qua $A$ tiếp xúc với $BC$ tại $D$ cắt $AC$ tại $M$. Gọi $P$ là giao điểm thứ hai của $BM$ và đường tròn. Tia $AP$ cắt $BC$ tại $J$. Chứng minh rằng $J$ là trung điểm của $BD$.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Gọi $M$ là giao điểm của hai đường chéo $AC$, $BD$ của tứ giác lồi $ABCD$. Đường phân giác của góc $\widehat{ACD}$ cắt tia $BA$ tại $K$. Giả sử $MA\cdot MC+MA\cdot CD=MB\cdot MD$. Chứng minh rằng tứ giác $BCDK$ nội tiếp.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ nội tiếp đường tròn $(O)$ có ba đường cao $AD$, $BE$, $CF$ và $G$ là trọng tâm. Tia $AG$, $GD$ cắt đường tròn tại điểm thứ hai lần lượt là $M$, $N$. Chứng minh rằng $M$, $N$, $E$, $F$ cùng thuộc một đường tròn.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho hai điểm $A$, $B$ cố định, $C$ là điểm bất kì trên nửa mặt phẳng có bờ là đường thẳng $AB$. Dựng về phía ngoài của tam giác $ABC$ các tam giác đều $ADC$, $BCE$. Gọi $P$ là giao điểm thứ hai của $(ADC)$ và $(BCE)$. Chứng minh rằng $CP$ luôn đi qua một điểm cố định.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ cân tại $B$ nội tiếp trong đường tròn đường kính $BD$. Trên tia $CA$ lấy điểm $E$ và các điểm $F$, $G$ lần lượt thuộc tia $CB$, $BA$ sao cho $EG$ song song với $BC$ và $EF$ song song với $AB$. Chứng minh rằng $DE$ vuông góc với $FG$.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho hai đường tròn $(O_1)$, $(O_2)$ cắt nhau tại $A$, $B$. Chứng minh rằng với $k$ là hằng số thì quỹ tích của điểm $M$ thỏa mãn $|\mathscr{P}_{M/(O_1)}|=k|\mathscr{P}_{M/(O_2)}|$ là đường tròn đi qua $A$, $B$.`,
          doKho: "vua",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ nội tiếp đường tròn tâm $O$ có $H$ là trực tâm, các đường cao $BE$, $CF$, $AD$. $FD$ cắt $BE$ tại $M$, $FC$ cắt $DE$ tại $N$. Cho $K$ là điểm đối xứng của $O$ qua $BC$. Chứng minh rằng $MN$ vuông góc với $AK$.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ và $P$, $Q$ lần lượt là các điểm trên cạnh $AB$, $AC$ sao cho $AP=AQ$. Trên đoạn $BC$ lấy hai điểm $S$, $R$ phân biệt sao cho $S$ nằm giữa $B$, $R$ và $\widehat{BPS}=\widehat{PRS}$, $\widehat{CQR}=\widehat{QSR}$. Chứng minh rằng $P$, $Q$, $R$, $S$ cùng thuộc một đường tròn.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ có $H$ là trực tâm, $D$, $E$, $F$ lần lượt là trung điểm của $BC$, $CA$, $AB$. Đường tròn tâm $D$ đi qua $H$ cắt $BC$ tại $A_1$, $A_2$. Định nghĩa tương tự cho các điểm $B_1$, $B_2$, $C_1$, $C_2$. Chứng minh rằng các điểm $A_1$, $A_2$, $B_1$, $B_2$, $C_1$, $C_2$ cùng thuộc một đường tròn.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ vuông tại $C$, đường cao $CC_0$. Lấy $X$ trên đoạn $CC_0$, trên đoạn $AX$, $BX$ lần lượt lấy các điểm $K$, $L$ sao cho $BK=BC$ và $AL=AC$. Gọi $M$ là giao điểm của $BK$, $AL$. Chứng minh rằng $MK=ML$.`,
          doKho: "vua",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác nhọn $ABC$ trực tâm $H$, đường cao $CM$, $BN$. Lấy $W$ trên $BC$. Dựng đường tròn ngoại tiếp tam giác $CNW$ đường kính $WX$ và đường tròn ngoại tiếp tam giác $WMB$ đường kính $WY$. Chứng minh rằng $X$, $Y$, $H$ thẳng hàng.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác nhọn $ABC$ ($BA>BC$) nội tiếp đường tròn tâm $O$. Tia phân giác trong góc $B$ cắt đường tròn $(O)$ tại $M$. Đường tròn đường kính $BM$ cắt các tia phân giác $\widehat{AOB}$, $\widehat{BOC}$ lần lượt tại $P$, $Q$. Trên $PQ$ lấy điểm $R$ sao cho $RB=RM$. Chứng minh rằng $BR$ song song với $AC$.`,
          doKho: "kho",
          dapAn: ""
        },
        {
          de: String.raw`Cho tam giác $ABC$ có độ dài ba cạnh đôi một khác nhau, nội tiếp đường tròn $\Gamma$. Gọi $M$ là trung điểm $BC$ và $P$ là một điểm trên đoạn $AM$. Các đường tròn $(BPM)$ và $(CPM)$ lần lượt cắt $\Gamma$ tại điểm thứ hai là $D$, $E$. Đường thẳng $DP$ và $EP$ cắt các đường tròn $(CPM)$, $(BPM)$ lần lượt tại điểm thứ hai là $X$, $Y$. Chứng minh rằng khi $P$ di chuyển trên đoạn $AM$, đường tròn $(AXY)$ luôn đi qua một điểm cố định khác $A$.`,
          doKho: "kho",
          dapAn: ""
        }
      ]
    }
  ]
});