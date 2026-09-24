/* ======================================================================
   ỨNG DỤNG — logic hiển thị dùng chung.
   ====================================================================== */

const THONG_TIN_TRANG = {
  monHoc: "Toán Chuyên",
  moTa: "Chuyên đề Đại số · Số học · Hình học"
};

/* ---- Điểm danh: dữ liệu các buổi học ----
   Để thêm buổi mới: push thêm một object tương tự vào window.DATA_DIEMDANH
   (đổi id/ngay/ghiChu, giữ nguyên STT của học sinh). */
window.DATA_DIEMDANH = window.DATA_DIEMDANH || [];
window.DATA_DIEMDANH.push({
  id: "2026-09-22",
  ngay: "22/09/2026",
  ghiChu: "Buổi học đội tuyển Toán 10",
  danhSach: [
    {stt:1,  ho:"Nguyễn Minh",         ten:"Huy",    lop:"10T",     comat:false},
    {stt:2,  ho:"Nguyễn Đỗ Tuấn",      ten:"Minh",   lop:"10TN8",   comat:true},
    {stt:3,  ho:"Nguyễn Thành Đạt",    ten:"Henri",  lop:"10 Tin",  comat:true},
    {stt:4,  ho:"Huỳnh Châu Thanh",    ten:"Vy",     lop:"10TN1",   comat:true},
    {stt:5,  ho:"Nguyễn Quốc",         ten:"Kiệt",   lop:"10 Toán", comat:true},
    {stt:6,  ho:"Bùi Minh",            ten:"Huy",    lop:"10 Toán", comat:true},
    {stt:7,  ho:"Lê Lý Thanh",         ten:"Bình",   lop:"10 Tin",  comat:true},
    {stt:8,  ho:"Nguyễn Minh",         ten:"Toàn",   lop:"10TN2",   comat:true},
    {stt:9,  ho:"Trịnh Nam",           ten:"Anh",    lop:"10 Toán", comat:true},
    {stt:10, ho:"Nguyễn Bình",         ten:"Minh",   lop:"10 Toán", comat:true},
    {stt:11, ho:"Nghiêm Thanh",        ten:"Sơn",    lop:"10TN6",   comat:true},
    {stt:12, ho:"Nguyễn Hoàng",        ten:"Thiên",  lop:"10TN4",   comat:true},
    {stt:13, ho:"Trần Nhật Anh",       ten:"Khôi",   lop:"10 Toán", comat:true},
    {stt:14, ho:"Tất Triệu",           ten:"Quân",   lop:"10 Toán", comat:true},
    {stt:15, ho:"Nguyễn Minh",         ten:"Tài",    lop:"10 Toán", comat:true},
    {stt:16, ho:"Ngô Bảo",             ten:"An",     lop:"10 Toán", comat:true},
    {stt:17, ho:"Nguyễn Đắc Minh",     ten:"Tú",     lop:"10 Toán", comat:true},
    {stt:18, ho:"Bùi Thiện",           ten:"Bảo",    lop:"10TN8",   comat:true},
    {stt:19, ho:"Phan Hà Bảo",         ten:"Ngọc",   lop:"10TN1",   comat:true},
    {stt:20, ho:"Nguyễn Minh",         ten:"Thư",    lop:"10 Toán", comat:true},
    {stt:21, ho:"Nguyễn Gia",          ten:"Trọng",  lop:"10 Toán", comat:true},
    {stt:22, ho:"Lê Hoàng",            ten:"Nam",    lop:"10 Toán", comat:true},
    {stt:23, ho:"Nguyễn Tú",           ten:"Quỳnh",  lop:"10 Văn",  comat:true},
    {stt:24, ho:"Phan Kim",            ten:"Ngân",   lop:"10 Toán", comat:true},
    {stt:25, ho:"Nguyễn Trang Hà",     ten:"My",     lop:"10 Toán", comat:true},
    {stt:26, ho:"Trịnh Anh",           ten:"Quân",   lop:"10 toán", comat:true},
    {stt:27, ho:"Đào Lê Quang",        ten:"Tùng",   lop:"10 Toán", comat:true},
    {stt:28, ho:"Trần Nhân",           ten:"Kiệt",   lop:"10TN4",   comat:true},
    {stt:29, ho:"Đặng Minh",           ten:"Hùng",   lop:"10 Toán", comat:true},
    {stt:30, ho:"Nguyễn Minh",         ten:"Tâm",    lop:"10 Toán", comat:true},
    {stt:31, ho:"Doãn Minh",           ten:"Khôi",   lop:"10TN6",   comat:true},
    {stt:32, ho:"Nguyễn Ngọc Thu",     ten:"Hà",     lop:"10TN7",   comat:false},
    {stt:33, ho:"Trương Khánh",        ten:"Toàn",   lop:"10 Toán", comat:true},
    {stt:34, ho:"Nguyễn Bảo",          ten:"Ngọc",   lop:"10 Tin",  comat:true},
    {stt:35, ho:"Đặng Đức",            ten:"Huy",    lop:"10 Toán", comat:true},
    {stt:36, ho:"Trần Hoàng Phi",      ten:"Long",   lop:"10 Toán", comat:true},
    {stt:37, ho:"Trần Hồng",           ten:"Yến",    lop:"10 Tin",  comat:true},
    {stt:38, ho:"Phạm Nhã",            ten:"Nghi",   lop:"10 Toán", comat:true},
    {stt:39, ho:"Bùi Quang Tuấn",      ten:"Dũng",   lop:"10TN7",   comat:true},
    {stt:40, ho:"Dương Kiến",          ten:"Tường",  lop:"10 Toán", comat:true},
    {stt:41, ho:"Nguyễn Thành",        ten:"Nam",    lop:"10 Toán", comat:true},
    {stt:42, ho:"Huỳnh Chí",           ten:"Thiện",  lop:"10 Toán", comat:true},
    {stt:43, ho:"Trần Đức",            ten:"Anh",    lop:"10 Tin",  comat:true},
    {stt:44, ho:"Bùi Mai",             ten:"Phương", lop:"10TN6",   comat:true},
    {stt:45, ho:"Nguyễn Ngọc Lan",     ten:"Chi",    lop:"10 Toán", comat:true},
    {stt:46, ho:"Kiều Hoàng Minh",     ten:"Anh",    lop:"10TN1",   comat:true},
    {stt:47, ho:"Trần Đông",           ten:"Quân",   lop:"10 Toán", comat:true},
    {stt:48, ho:"Nguyễn Thành",        ten:"Phát",   lop:"10TN5",   comat:true},
    {stt:49, ho:"Đỗ Thiên",            ten:"Ân",     lop:"10TN5",   comat:true},
    {stt:50, ho:"Nguyễn Cát",          ten:"Tường",  lop:"10 Lí",   comat:true},
    {stt:51, ho:"Nguyễn Triệu",        ten:"Quang",  lop:"10TN3",   comat:true},
    {stt:52, ho:"Võ Thế",              ten:"Vượng",  lop:"10 Toán", comat:true},
    {stt:53, ho:"Hoàng Trọng",         ten:"Phú",    lop:"10 Toán", comat:true},
    {stt:54, ho:"Nguyễn Ngọc Gia",     ten:"Bảo",    lop:"10TN1",   comat:true},
  ]
});

const DATA = {
  monHoc: THONG_TIN_TRANG.monHoc,
  moTa: THONG_TIN_TRANG.moTa,
  chuongs: window.DATA_CHUONGS || [],
  diemDanh: window.DATA_DIEMDANH || []
};

const STORAGE_KEY = "tc_tien_do_v1";
const THEME_KEY = "tc_theme_v1";
const IMAGE_KEY_PREFIX = "tc_img_";
const ATTEND_KEY = "tc_diemdanh_v1";

let state = {
  view: "hoc",
  currentChuong: null,
  currentBai: null,
  currentTab: "ly-thuyet",
  currentVidu: 0,
  currentBaitap: 0,
  currentLyThuyet: 0,
  progress: loadProgress(),
  diemDanhOverrides: loadAttendanceOverrides(),
  currentDiemDanhSession: null,
  diemDanhSearch: "",
  diemDanhLop: "",
  diemDanhStatus: "all",
};

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); }
  catch(e){}
}
function isDone(baiId){ return !!state.progress[baiId]; }
function toggleDone(baiId){
  state.progress[baiId] = !state.progress[baiId];
  saveProgress();
  renderSidebar();
  updateOverallProgress();
}

/* ---------- Điểm danh ---------- */
function loadAttendanceOverrides(){
  try{
    const raw = localStorage.getItem(ATTEND_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveAttendanceOverrides(){
  try{ localStorage.setItem(ATTEND_KEY, JSON.stringify(state.diemDanhOverrides)); }
  catch(e){}
}
function attendKey(sessionId, stt){ return sessionId + ":" + stt; }
function isPresent(session, hs){
  const k = attendKey(session.id, hs.stt);
  if(Object.prototype.hasOwnProperty.call(state.diemDanhOverrides, k)) return state.diemDanhOverrides[k];
  return !!hs.comat;
}
function togglePresent(session, hs){
  const k = attendKey(session.id, hs.stt);
  state.diemDanhOverrides[k] = !isPresent(session, hs);
  saveAttendanceOverrides();
  renderDiemDanh();
  updateAttendanceBadge();
}
function currentDiemDanhSession(){
  const sessions = DATA.diemDanh;
  if(!sessions.length) return null;
  const found = sessions.find(s => s.id === state.currentDiemDanhSession);
  return found || sessions[sessions.length - 1];
}
function updateAttendanceBadge(){
  const badge = document.getElementById("dd-nav-badge");
  if(!badge) return;
  const session = currentDiemDanhSession();
  if(!session){ badge.textContent = ""; return; }
  const absent = session.danhSach.filter(hs => !isPresent(session, hs)).length;
  badge.textContent = absent > 0 ? String(absent) : "";
}

function allBais(){
  const out = [];
  DATA.chuongs.forEach(c => c.bais.forEach(b => out.push({chuong:c, bai:b})));
  return out;
}

function findBai(baiId){
  for(const c of DATA.chuongs){
    for(const b of c.bais){
      if(b.id === baiId) return {chuong:c, bai:b};
    }
  }
  return null;
}

/* ---------- Markdown nhẹ ---------- */
function paragraphize(str){
  return str
    .trim()
    .split(/\n\s*\n/)
    .map(p => {
      const t = p.trim();
      if (/^<(div|figure|img|table|ul|ol|blockquote)\b/i.test(t)) return t;
      const withBold = t.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g,"<br>");
      return `<p>${withBold}</p>`;
    })
    .join("");
}

/* ---------- Phát hiện & xử lý block tiêu đề mục (section) ---------- */
function isSectionBlock(block){
  if(!block) return false;
  if(block.loai === "section") return true;
  if(block.loai === "text"){
    const t = (block.noiDung || "").trim();
    return /^\*\*[^*\n]+\*\*$/.test(t);
  }
  return false;
}

function sectionTitleOf(block){
  let t = (block.noiDung || "").trim();
  if(t.startsWith("**") && t.endsWith("**")) t = t.slice(2, -2).trim();
  return t;
}

function precedingSection(blocks, idx){
  for(let k = idx - 1; k >= 0; k--){
    if(isSectionBlock(blocks[k])) return sectionTitleOf(blocks[k]);
  }
  return null;
}

function lyThuyetTabLabel(block, index){
  if(block.tieuDe) return block.tieuDe;
  if(block.loai === "dinhnghia") return "Định nghĩa " + (index + 1);
  if(block.loai === "dinhly") return "Định lý " + (index + 1);
  if(block.loai === "luuy") return "Lưu ý";
  const first = (block.noiDung || "").trim().split(/\n/)[0]
    .replace(/^\*\*|\*\*$/g, "").replace(/^\*\s*/, "").trim();
  if(first.length > 36) return first.slice(0, 34) + "…";
  return first || ("Mục " + (index + 1));
}

function renderLyThuyetBlock(block){
  if(block.loai === "text"){
    return `<div class="block text">${paragraphize(block.noiDung)}</div>`;
  }
  if(block.loai === "section"){
    return `<h2 class="section-title">${sectionTitleOf(block)}</h2>`;
  }
  const label = block.loai === "dinhnghia" ? "Định nghĩa"
              : block.loai === "dinhly"    ? "Định lý"
              : "Lưu ý";
  const titleHtml = block.tieuDe ? `<div class="block-title">${block.tieuDe}</div>` : "";
  return `
    <div class="block ${block.loai}">
      <div class="block-label">${label}</div>
      ${titleHtml}
      ${paragraphize(block.noiDung)}
    </div>`;
}

/* ---------- Render panel Lý thuyết (bỏ section khỏi danh sách tab) ---------- */
function renderLyThuyetPanel(blocks){
  const tabBlocks = blocks
    .map((b, i) => ({b, i}))
    .filter(x => !isSectionBlock(x.b));

  if(!tabBlocks.length) return emptyPanel("Chưa có nội dung lý thuyết.");

  if(!tabBlocks.some(x => x.i === state.currentLyThuyet)){
    state.currentLyThuyet = tabBlocks[0].i;
  }
  const current = state.currentLyThuyet;

  const tabsHTML = tabBlocks.map(({b, i}) => `
    <button type="button" class="sub-tab ${i===current?"active":""}" data-lt="${i}">
      ${lyThuyetTabLabel(b, i)}
    </button>
  `).join("");

  const panelsHTML = tabBlocks.map(({b, i}) => {
    const section = precedingSection(blocks, i);
    return `
      <div class="lt-panel ${i===current?"active":""}" data-lt-panel="${i}">
        ${section ? `<h2 class="section-title">${section}</h2>` : ""}
        <div class="ly-thuyet">${renderLyThuyetBlock(b)}</div>
      </div>`;
  }).join("");

  return `<div class="sub-tabs">${tabsHTML}</div>${panelsHTML}`;
}

function doKhoBadge(doKho){
  const map = { de: ["dễ","de"], vua: ["vừa","vua"], kho: ["khó","kho"] };
  const [label, cls] = map[doKho] || map.vua;
  return `<span class="badge ${cls}">${label}</span>`;
}

/* ---------- Render nội dung chính ---------- */
function renderContent(){
  if(state.view === "diemdanh"){
    renderDiemDanh();
    return;
  }

  const content = document.getElementById("content");
  const found = state.currentBai ? findBai(state.currentBai) : null;

  if(!found){
    content.innerHTML = `
      <div class="empty-state">
        <div class="big">Chọn một bài học</div>
        <div>Mở danh mục bên trái để bắt đầu với lý thuyết, ví dụ minh hoạ và bài tập tự luyện.</div>
      </div>`;
    return;
  }

  const {chuong, bai} = found;
  const done = isDone(bai.id);

  content.innerHTML = `
    <div class="crumbs">${chuong.ten} <span>/ ${bai.ten}</span></div>
    <div class="topic-head">
      <h1 class="topic-title">${bai.ten}</h1>
      <button class="done-toggle ${done ? "done":""}" id="done-toggle" type="button">
        <span class="dot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"/></svg></span>
        ${done ? "Đã hoàn thành" : "Đánh dấu đã học"}
      </button>
    </div>

    <div class="tabs">
      <button class="tab-btn" data-tab="ly-thuyet">Lý thuyết</button>
      <button class="tab-btn" data-tab="vi-du">Ví dụ <span class="n">${bai.viDus.length}</span></button>
      <button class="tab-btn" data-tab="bai-tap">Bài tập <span class="n">${bai.baiTaps.length}</span></button>
    </div>

    <div class="panel" data-panel="ly-thuyet">
      ${bai.lyThuyet.length ? renderLyThuyetPanel(bai.lyThuyet) : emptyPanel("Chưa có lý thuyết cho bài này.")}
    </div>

    <div class="panel" data-panel="vi-du">
      ${bai.viDus.length ? `
        <div class="sub-tabs">
          ${bai.viDus.map((v,i)=>`
            <button type="button" class="sub-tab ${i===state.currentVidu?"active":""}" data-vidu="${i}">
              Ví dụ ${i+1}
            </button>
          `).join("")}
        </div>
        ${bai.viDus.map((v,i)=>`
          <div class="vidu ${i===state.currentVidu?"active":""}" data-vidu-panel="${i}">
            <div class="vidu-head">
              <span class="ten">${v.ten || "Ví dụ " + (i+1)}</span>
              <button class="reveal-btn" data-reveal="vd-${i}">Xem lời giải</button>
            </div>
            <div class="vidu-body">
              <div class="vidu-de">${paragraphize(v.de)}</div>
              <div class="loigiai" id="vd-${i}">
                <div class="tag">Lời giải</div>
                ${paragraphize(v.loiGiai)}
              </div>
            </div>
          </div>
        `).join("")}
      ` : emptyPanel("Chưa có ví dụ cho bài này.")}
    </div>

    <div class="panel" data-panel="bai-tap">
      ${bai.baiTaps.length ? `
        <div class="sub-tabs">
          ${bai.baiTaps.map((bt,i)=>`
            <button type="button" class="sub-tab ${i===state.currentBaitap?"active":""}" data-baitap="${i}">
              Bài ${i+1}
            </button>
          `).join("")}
        </div>
        ${bai.baiTaps.map((bt,i)=>`
          <div class="baitap ${i===state.currentBaitap?"active":""}" data-baitap-panel="${i}">
            <div class="idx">${i+1}.</div>
            <div class="baitap-content">
              <div class="baitap-de">${paragraphize(bt.de)}</div>
              ${bt.dapAn ? `
                <div class="baitap-meta">
                  <button class="reveal-btn" data-reveal="bt-${i}">Xem đáp án</button>
                </div>
                <div class="baitap-answer" id="bt-${i}">${paragraphize(bt.dapAn)}</div>
              ` : ""}
            </div>
          </div>
        `).join("")}
      ` : emptyPanel("Chưa có bài tập cho bài này.")}
    </div>
  `;

  // tab logic
  content.querySelectorAll(".tab-btn").forEach(btn=>{
    btn.classList.toggle("active", btn.dataset.tab === state.currentTab);
    btn.addEventListener("click", ()=>{
      state.currentTab = btn.dataset.tab;
      content.querySelectorAll(".tab-btn").forEach(b=>b.classList.toggle("active", b===btn));
      content.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active", p.dataset.panel===btn.dataset.tab));
    });
  });
  content.querySelectorAll(".panel").forEach(p=>p.classList.toggle("active", p.dataset.panel===state.currentTab));

  // sub-tabs
  if(state.currentVidu >= bai.viDus.length) state.currentVidu = 0;
  if(state.currentBaitap >= bai.baiTaps.length) state.currentBaitap = 0;

  content.querySelectorAll(".sub-tab[data-lt]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.currentLyThuyet = parseInt(btn.dataset.lt, 10);
      content.querySelectorAll(".sub-tab[data-lt]").forEach(b=>b.classList.toggle("active", b===btn));
      content.querySelectorAll(".lt-panel").forEach(p=>p.classList.toggle("active", parseInt(p.dataset.ltPanel,10)===state.currentLyThuyet));
    });
  });

  content.querySelectorAll(".sub-tab[data-vidu]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.currentVidu = parseInt(btn.dataset.vidu, 10);
      content.querySelectorAll(".sub-tab[data-vidu]").forEach(b=>b.classList.toggle("active", b===btn));
      content.querySelectorAll(".vidu").forEach(p=>p.classList.toggle("active", parseInt(p.dataset.viduPanel,10)===state.currentVidu));
    });
  });

  content.querySelectorAll(".sub-tab[data-baitap]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.currentBaitap = parseInt(btn.dataset.baitap, 10);
      content.querySelectorAll(".sub-tab[data-baitap]").forEach(b=>b.classList.toggle("active", b===btn));
      content.querySelectorAll(".baitap").forEach(p=>p.classList.toggle("active", parseInt(p.dataset.baitapPanel,10)===state.currentBaitap));
    });
  });

  // reveal
  content.querySelectorAll("[data-reveal]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const target = document.getElementById(btn.dataset.reveal);
      const showing = target.classList.toggle("show");
      btn.textContent = showing ? "Ẩn lời giải" : (btn.closest(".vidu") ? "Xem lời giải" : "Xem đáp án");
      if (target.classList.contains("baitap-answer")) btn.textContent = showing ? "Ẩn đáp án" : "Xem đáp án";
    });
  });

  // done
  document.getElementById("done-toggle").addEventListener("click", ()=>{
    toggleDone(bai.id);
    renderContent();
  });

  document.getElementById("mb-title").textContent = bai.ten;

  renderMath(content);
  enhanceImagePlaceholders(content);
  window.scrollTo({top:0, behavior:"instant"});
}

function emptyPanel(msg){
  return `<div class="empty-state" style="margin:0; text-align:left; padding:24px 0;"><div>${msg}</div></div>`;
}

/* ---------- Render tab Điểm danh ---------- */
function renderDiemDanh(){
  document.getElementById("mb-title").textContent = "Điểm danh";
  const content = document.getElementById("content");
  const sessions = DATA.diemDanh;

  if(!sessions.length){
    content.innerHTML = `
      <div class="crumbs">Điểm danh</div>
      <div class="topic-head"><h1 class="topic-title">Điểm danh</h1></div>
      ${emptyPanel("Chưa có dữ liệu điểm danh nào.")}`;
    return;
  }

  const session = currentDiemDanhSession();
  state.currentDiemDanhSession = session.id;

  const search = (state.diemDanhSearch || "").trim().toLowerCase();
  const lopFilter = state.diemDanhLop || "";
  const statusFilter = state.diemDanhStatus || "all";

  const allRows = session.danhSach.map(hs => ({hs, present: isPresent(session, hs)}));
  const rows = allRows.filter(r => {
    if(lopFilter && r.hs.lop !== lopFilter) return false;
    if(statusFilter === "present" && !r.present) return false;
    if(statusFilter === "absent" && r.present) return false;
    if(search){
      const hoten = (r.hs.ho + " " + r.hs.ten).toLowerCase();
      if(!hoten.includes(search) && !r.hs.lop.toLowerCase().includes(search)) return false;
    }
    return true;
  });

  const total = allRows.length;
  const presentCount = allRows.filter(r => r.present).length;
  const absentCount = total - presentCount;
  const pct = total ? Math.round((presentCount / total) * 100) : 0;

  const lopList = [...new Set(session.danhSach.map(hs => hs.lop))].sort((a,b) => a.localeCompare(b, "vi"));

  content.innerHTML = `
    <div class="crumbs">Điểm danh <span>/ ${session.ngay}</span></div>
    <div class="topic-head">
      <h1 class="topic-title">Điểm danh — ${session.ngay}</h1>
    </div>

    ${sessions.length > 1 ? `
    <div class="sub-tabs dd-sessions">
      ${sessions.map(s => `<button type="button" class="sub-tab ${s.id===session.id?"active":""}" data-session="${s.id}">${s.ngay}</button>`).join("")}
    </div>` : ""}

    <div class="dd-stats">
      <div class="dd-stat"><div class="dd-stat-num">${total}</div><div class="dd-stat-label">Tổng số</div></div>
      <div class="dd-stat present"><div class="dd-stat-num">${presentCount}</div><div class="dd-stat-label">Có mặt</div></div>
      <div class="dd-stat absent"><div class="dd-stat-num">${absentCount}</div><div class="dd-stat-label">Vắng</div></div>
      <div class="dd-stat"><div class="dd-stat-num">${pct}%</div><div class="dd-stat-label">Tỷ lệ có mặt</div></div>
    </div>

    <div class="dd-toolbar">
      <div class="search-box dd-search">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="dd-search-input" type="text" placeholder="Tìm theo tên hoặc lớp…">
      </div>
      <select id="dd-lop-filter" class="dd-select">
        <option value="">Tất cả lớp</option>
        ${lopList.map(l => `<option value="${l}" ${l===lopFilter?"selected":""}>${l}</option>`).join("")}
      </select>
      <div class="dd-status-chips">
        <button type="button" class="dd-chip ${statusFilter==="all"?"active":""}" data-status="all">Tất cả</button>
        <button type="button" class="dd-chip ${statusFilter==="present"?"active":""}" data-status="present">Có mặt</button>
        <button type="button" class="dd-chip ${statusFilter==="absent"?"active":""}" data-status="absent">Vắng</button>
      </div>
    </div>

    <div class="dd-table-wrap">
      <table class="dd-table">
        <thead>
          <tr>
            <th class="stt">STT</th>
            <th>Họ và tên</th>
            <th>Lớp</th>
            <th class="status">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          ${rows.length ? rows.map(r => `
            <tr class="${r.present ? "" : "row-absent"}">
              <td class="stt">${r.hs.stt}</td>
              <td>${r.hs.ho} ${r.hs.ten}</td>
              <td>${r.hs.lop}</td>
              <td class="status">
                <button type="button" class="dd-status-btn ${r.present ? "present" : "absent"}" data-stt="${r.hs.stt}">
                  ${r.present ? "Có mặt" : "Vắng"}
                </button>
              </td>
            </tr>
          `).join("") : `<tr><td colspan="4" class="dd-empty">Không tìm thấy học sinh phù hợp.</td></tr>`}
        </tbody>
      </table>
    </div>
  `;

  const searchInput = document.getElementById("dd-search-input");
  searchInput.value = state.diemDanhSearch || "";
  searchInput.addEventListener("input", () => {
    state.diemDanhSearch = searchInput.value;
    const caret = searchInput.selectionStart;
    renderDiemDanh();
    const el = document.getElementById("dd-search-input");
    if(el){ el.focus(); try{ el.setSelectionRange(caret, caret); }catch(e){} }
  });

  document.getElementById("dd-lop-filter").addEventListener("change", (e) => {
    state.diemDanhLop = e.target.value;
    renderDiemDanh();
  });

  if(sessions.length > 1){
    content.querySelectorAll("[data-session]").forEach(btn => {
      btn.addEventListener("click", () => {
        state.currentDiemDanhSession = btn.dataset.session;
        state.diemDanhSearch = "";
        state.diemDanhLop = "";
        state.diemDanhStatus = "all";
        renderDiemDanh();
      });
    });
  }

  content.querySelectorAll(".dd-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      state.diemDanhStatus = btn.dataset.status;
      renderDiemDanh();
    });
  });

  content.querySelectorAll(".dd-status-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const stt = parseInt(btn.dataset.stt, 10);
      const hs = session.danhSach.find(x => x.stt === stt);
      if(hs) togglePresent(session, hs);
    });
  });

  updateAttendanceBadge();
}

function renderMath(container){
  if(window.renderMathInElement){
    renderMathInElement(container, {
      delimiters: [
        {left:"$$", right:"$$", display:true},
        {left:"$", right:"$", display:false}
      ],
      throwOnError:false
    });
  }
}

/* ---------- Image upload ---------- */
function loadImage(slotId){
  try{ return localStorage.getItem(IMAGE_KEY_PREFIX + slotId) || null; }
  catch(e){ return null; }
}
function saveImage(slotId, dataUrl){
  try{ localStorage.setItem(IMAGE_KEY_PREFIX + slotId, dataUrl); }
  catch(e){ alert("Không lưu được ảnh (có thể quá lớn hoặc localStorage đầy)."); }
}
function removeImage(slotId){
  try{ localStorage.removeItem(IMAGE_KEY_PREFIX + slotId); }
  catch(e){}
}

function enhanceImagePlaceholders(container){
  container.querySelectorAll(".loigiai").forEach(loigiai => {
    if(loigiai.querySelector(".loigiai-layout")) return;
    const placeholders = [...loigiai.querySelectorAll(".img-placeholder")];
    if(!placeholders.length) return;

    const tag = loigiai.querySelector(".tag");
    const layout = document.createElement("div");
    layout.className = "loigiai-layout";
    const textCol = document.createElement("div");
    textCol.className = "loigiai-text";
    const figCol = document.createElement("div");
    figCol.className = "loigiai-fig";

    [...loigiai.childNodes].forEach(node => {
      if(node === tag) return;
      if(node.nodeType === 1 && node.classList && node.classList.contains("img-placeholder")){
        figCol.appendChild(node);
      } else if(node.nodeType === 1 && node.querySelector && node.querySelector(".img-placeholder")){
        const ph = node.querySelector(".img-placeholder");
        if(ph) figCol.appendChild(ph);
        const leftover = node.textContent.trim();
        if(leftover) textCol.appendChild(node);
      } else {
        textCol.appendChild(node);
      }
    });

    placeholders.forEach(ph => {
      if(ph.parentNode !== figCol) figCol.appendChild(ph);
    });

    layout.appendChild(textCol);
    layout.appendChild(figCol);
    loigiai.appendChild(layout);
  });

  container.querySelectorAll(".img-placeholder").forEach((el, idx) => {
    const slotId = el.dataset.imgSlot || (`auto-${state.currentBai || "x"}-${idx}`);
    el.dataset.imgSlot = slotId;

    const existing = loadImage(slotId);
    el.innerHTML = `
      <div class="ph-empty">
        <div class="ph-icon">📷</div>
        <div class="ph-title">Chèn hình minh họa</div>
        <div class="ph-hint">Bấm hoặc kéo thả ảnh</div>
      </div>
      <div class="ph-preview"><img alt="Hình minh họa"></div>
      <div class="ph-actions">
        <button type="button" class="ph-btn ph-upload">Chọn ảnh</button>
        <button type="button" class="ph-btn danger ph-remove" style="display:none">Xóa ảnh</button>
      </div>
      <input type="file" accept="image/*">
    `;

    const fileInput = el.querySelector('input[type="file"]');
    const previewImg = el.querySelector(".ph-preview img");
    const btnUpload = el.querySelector(".ph-upload");
    const btnRemove = el.querySelector(".ph-remove");

    function showImage(dataUrl){
      if(dataUrl){
        previewImg.src = dataUrl;
        el.classList.add("has-image");
        btnRemove.style.display = "";
        btnUpload.textContent = "Đổi ảnh";
      } else {
        previewImg.removeAttribute("src");
        el.classList.remove("has-image");
        btnRemove.style.display = "none";
        btnUpload.textContent = "Chọn ảnh";
      }
    }

    showImage(existing);

    btnUpload.addEventListener("click", () => fileInput.click());
    btnRemove.addEventListener("click", () => {
      removeImage(slotId);
      showImage(null);
    });

    fileInput.addEventListener("change", () => {
      const file = fileInput.files && fileInput.files[0];
      if(!file) return;
      if(!file.type.startsWith("image/")){ alert("Vui lòng chọn file ảnh."); return; }
      if(file.size > 2.5 * 1024 * 1024){ alert("Ảnh quá lớn (tối đa ~2.5MB)."); return; }
      const reader = new FileReader();
      reader.onload = () => {
        saveImage(slotId, reader.result);
        showImage(reader.result);
      };
      reader.readAsDataURL(file);
      fileInput.value = "";
    });

    el.addEventListener("dragover", e => { e.preventDefault(); el.classList.add("dragover"); });
    el.addEventListener("dragleave", () => el.classList.remove("dragover"));
    el.addEventListener("drop", e => {
      e.preventDefault();
      el.classList.remove("dragover");
      const file = e.dataTransfer.files && e.dataTransfer.files[0];
      if(!file || !file.type.startsWith("image/")) return;
      if(file.size > 2.5 * 1024 * 1024){ alert("Ảnh quá lớn (tối đa ~2.5MB)."); return; }
      const reader = new FileReader();
      reader.onload = () => {
        saveImage(slotId, reader.result);
        showImage(reader.result);
      };
      reader.readAsDataURL(file);
    });
  });
}

/* ---------- Sidebar ---------- */
function renderSidebar(){
  const toc = document.getElementById("toc");
  const search = document.getElementById("search").value.trim().toLowerCase();

  toc.innerHTML = DATA.chuongs.map(c=>{
    const bais = c.bais.filter(b => !search || b.ten.toLowerCase().includes(search) || c.ten.toLowerCase().includes(search));
    if(search && bais.length===0) return "";
    const doneCount = c.bais.filter(b=>isDone(b.id)).length;
    const isOpen = search ? true : (state.currentChuong === c.id || (DATA.chuongs.indexOf(c)===0 && !state.currentChuong));
    return `
      <div class="chuong ${isOpen ? "open":""}" data-chuong="${c.id}">
        <button class="chuong-head" type="button">
          <svg class="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 6 6 6-6 6"/></svg>
          <span class="ctitle">${c.ten}</span>
          <span class="ccount">${doneCount}/${c.bais.length}</span>
        </button>
        <ul class="bai-list">
          ${bais.map(b=>`
            <li>
              <button class="bai-link ${isDone(b.id)?"done":""} ${state.currentBai===b.id?"active":""}" data-bai="${b.id}" data-chuong="${c.id}" type="button">
                <span class="dot"></span>
                <span>${b.ten}</span>
              </button>
            </li>
          `).join("")}
        </ul>
      </div>`;
  }).join("");

  toc.querySelectorAll(".chuong-head").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btn.closest(".chuong").classList.toggle("open");
    });
  });
  toc.querySelectorAll(".bai-link").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      state.view = "hoc";
      setViewSwitchActive();
      state.currentChuong = btn.dataset.chuong;
      state.currentBai = btn.dataset.bai;
      state.currentTab = "ly-thuyet";
      state.currentLyThuyet = 0;
      state.currentVidu = 0;
      state.currentBaitap = 0;
      renderSidebar();
      renderContent();
      closeMobileNav();
    });
  });
}

function updateOverallProgress(){
  const all = allBais();
  const done = all.filter(x=>isDone(x.bai.id)).length;
  document.getElementById("progress-label").textContent = `${done}/${all.length} bài`;
  const pct = all.length ? Math.round((done/all.length)*100) : 0;
  document.getElementById("progress-fill").style.width = pct + "%";
}

/* ---------- View switch ---------- */
function setViewSwitchActive(){
  document.querySelectorAll(".view-btn").forEach(b => b.classList.toggle("active", b.dataset.view === state.view));
}
function initViewSwitch(){
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.view;
      setViewSwitchActive();
      renderContent();
      closeMobileNav();
    });
  });
}

/* ---------- Mobile nav ---------- */
function openMobileNav(){ document.body.classList.add("nav-open"); }
function closeMobileNav(){ document.body.classList.remove("nav-open"); }

/* ---------- Theme ---------- */
function applyTheme(t){
  if(t === "light" || t === "dark"){
    document.documentElement.setAttribute("data-theme", t);
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}
function initTheme(){
  let saved = null;
  try{ saved = localStorage.getItem(THEME_KEY); }catch(e){}
  applyTheme(saved);
}

/* ---------- Init ---------- */
function init(){
  document.getElementById("ten-mon").textContent = DATA.monHoc;
  document.getElementById("mo-ta").textContent = DATA.moTa;
  initTheme();

  document.getElementById("hamburger").addEventListener("click", openMobileNav);
  document.getElementById("scrim").addEventListener("click", closeMobileNav);
  document.getElementById("search").addEventListener("input", renderSidebar);
  document.getElementById("theme-btn").addEventListener("click", ()=>{
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : current === "light" ? null : "dark";
    applyTheme(next);
    try{
      if(next) localStorage.setItem(THEME_KEY, next);
      else localStorage.removeItem(THEME_KEY);
    }catch(e){}
  });

  initViewSwitch();
  renderSidebar();
  updateOverallProgress();
  updateAttendanceBadge();
  renderContent();
}
init();