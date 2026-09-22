/* ======================================================================
   ỨNG DỤNG — logic hiển thị dùng chung.
   Bạn KHÔNG cần sửa file này khi thêm/bớt chuyên đề. Chỉ sửa các file
   trong thư mục chuyen-de/ và (nếu thêm file mới) thêm một dòng
   <script src="..."> vào index.html.
   ====================================================================== */

// Thông tin chung của trang — đổi ở đây nếu muốn.
const THONG_TIN_TRANG = {
  monHoc: "Toán Chuyên",
  moTa: "Chuyên đề Đại số · Số học · Hình học"
};

// Gộp toàn bộ chuyên đề đã được các file trong chuyen-de/ nạp vào
// window.DATA_CHUONGS (theo đúng thứ tự các thẻ <script> trong index.html).
const DATA = {
  monHoc: THONG_TIN_TRANG.monHoc,
  moTa: THONG_TIN_TRANG.moTa,
  chuongs: window.DATA_CHUONGS || []
};

const STORAGE_KEY = "tc_tien_do_v1";
const THEME_KEY = "tc_theme_v1";

let state = {
  currentChuong: null,
  currentBai: null,
  currentTab: "ly-thuyet",
  progress: loadProgress(),
};

function loadProgress(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  }catch(e){ return {}; }
}
function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); }
  catch(e){ /* localStorage không khả dụng — bỏ qua, không chặn trải nghiệm */ }
}
function isDone(baiId){ return !!state.progress[baiId]; }
function toggleDone(baiId){
  state.progress[baiId] = !state.progress[baiId];
  saveProgress();
  renderSidebar();
  updateOverallProgress();
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

/* ---------- Markdown nhẹ: đoạn văn theo dòng trống ---------- */
function paragraphize(str){
  return str
    .trim()
    .split(/\n\s*\n/)
    .map(p => `<p>${p.trim().replace(/\n/g,"<br>")}</p>`)
    .join("");
}

function renderLyThuyetBlock(block){
  if(block.loai === "text"){
    return `<div class="block text">${paragraphize(block.noiDung)}</div>`;
  }
  const label = block.loai === "dinhnghia" ? "Định nghĩa" : block.loai === "dinhly" ? "Định lý" : "Lưu ý";
  const titleHtml = block.tieuDe ? `<div class="block-title">${block.tieuDe}</div>` : "";
  return `
    <div class="block ${block.loai}">
      <div class="block-label">${label}</div>
      ${titleHtml}
      ${paragraphize(block.noiDung)}
    </div>`;
}

function doKhoBadge(doKho){
  const map = { de: ["dễ","de"], vua: ["vừa","vua"], kho: ["khó","kho"] };
  const [label, cls] = map[doKho] || map.vua;
  return `<span class="badge ${cls}">${label}</span>`;
}

/* ---------- Render nội dung chính ---------- */
function renderContent(){
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
      <div class="ly-thuyet">
        ${bai.lyThuyet.length ? bai.lyThuyet.map(renderLyThuyetBlock).join("") : emptyPanel("Chưa có lý thuyết cho bài này.")}
      </div>
    </div>

    <div class="panel" data-panel="vi-du">
      ${bai.viDus.length ? bai.viDus.map((v,i)=>`
        <div class="vidu">
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
      `).join("") : emptyPanel("Chưa có ví dụ cho bài này.")}
    </div>

    <div class="panel" data-panel="bai-tap">
      ${bai.baiTaps.length ? bai.baiTaps.map((bt,i)=>`
        <div class="baitap">
          <div class="idx">${i+1}.</div>
          <div class="baitap-content">
            <div class="baitap-de">${paragraphize(bt.de)}</div>
            <div class="baitap-meta">
              ${doKhoBadge(bt.doKho)}
              ${bt.dapAn ? `<button class="reveal-btn" data-reveal="bt-${i}">Xem đáp án</button>` : ""}
            </div>
            ${bt.dapAn ? `<div class="baitap-answer" id="bt-${i}">${paragraphize(bt.dapAn)}</div>` : ""}
          </div>
        </div>
      `).join("") : emptyPanel("Chưa có bài tập cho bài này.")}
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

  // reveal buttons
  content.querySelectorAll("[data-reveal]").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const target = document.getElementById(btn.dataset.reveal);
      const showing = target.classList.toggle("show");
      btn.textContent = showing ? "Ẩn lời giải" : (btn.closest(".vidu") ? "Xem lời giải" : "Xem đáp án");
      if (target.classList.contains("baitap-answer")) btn.textContent = showing ? "Ẩn đáp án" : "Xem đáp án";
    });
  });

  // done toggle
  document.getElementById("done-toggle").addEventListener("click", ()=>{
    toggleDone(bai.id);
    renderContent();
  });

  document.getElementById("mb-title").textContent = bai.ten;

  renderMath(content);
  window.scrollTo({top:0, behavior:"instant"});
}

function emptyPanel(msg){
  return `<div class="empty-state" style="margin:0; text-align:left; padding:24px 0;"><div>${msg}</div></div>`;
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

/* ---------- Sidebar ---------- */
function renderSidebar(){
  const toc = document.getElementById("toc");
  const search = document.getElementById("search").value.trim().toLowerCase();

  toc.innerHTML = DATA.chuongs.map(c=>{
    const bais = c.bais.filter(b => !search || b.ten.toLowerCase().includes(search) || c.ten.toLowerCase().includes(search));
    if(search && bais.length===0) return "";
    const doneCount = c.bais.filter(b=>isDone(b.id)).length;
    const isOpen = search ? true : (state.currentChuong === c.id || DATA.chuongs.indexOf(c)===0 && !state.currentChuong);
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
      state.currentChuong = btn.dataset.chuong;
      state.currentBai = btn.dataset.bai;
      state.currentTab = "ly-thuyet";
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

/* ---------- Mobile nav ---------- */
function openMobileNav(){ document.body.classList.add("nav-open"); }
function closeMobileNav(){ document.body.classList.remove("nav-open"); }

/* ---------- Theme toggle ---------- */
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

  renderSidebar();
  updateOverallProgress();
  renderContent();
}
init();
