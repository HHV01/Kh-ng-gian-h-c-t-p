const iconPaths={grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',route:'<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M8 5h8a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h8"/>',book:'<path d="M12 5C8 2 4 3 3 4v15c3-2 6-1 9 1 3-2 6-3 9-1V4c-3-2-6-1-9 1Z"/><path d="M12 5v15"/>',cards:'<rect x="6" y="7" width="14" height="14" rx="2"/><path d="M16 3H5a2 2 0 0 0-2 2v11M10 12h6M10 16h4"/>',check:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="m7 12 3 3 7-7"/>',chat:'<path d="M21 11a8 8 0 0 1-8 8H8l-5 3V11a9 9 0 0 1 18 0Z"/><path d="M7 9h10M7 13h6"/>',case:'<rect x="3" y="7" width="18" height="14" rx="3"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12c6 4 12 4 18 0M10 13h4"/>',file:'<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9Z"/><path d="M14 3v6h6M8 13h8M8 17h5"/>',glossary:'<path d="m3 19 6-14 6 14M5 15h8M18 10h3v9h-3a3 3 0 0 1 0-6h3"/>',news:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 7h10M7 11h4v6H7ZM14 11h3M14 15h3"/>',settings:'<path d="m9 3-1 3-3 1-2 4 2 2v4l4 2 3-1 3 1 4-2v-4l2-2-2-4-3-1-1-3Z"/><circle cx="12" cy="11" r="3"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',moon:'<path d="M20 15a9 9 0 0 1-11-11A9 9 0 1 0 20 15Z"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',flame:'<path d="M12 2c2 6-3 6-1 11 2-1 3-3 3-5 8 6 6 14-2 14C4 22 1 14 7 8c0 4 1 5 2 5C7 7 11 7 12 2Z"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M7 3v4M17 3v4M3 11h18M7 15h2M13 15h2"/>',play:'<path d="m9 5 11 7-11 7Z"/>',spark:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3M16 5a3 3 0 0 1 0 6M18 15c2 1 3 3 3 6"/>',flow:'<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="2" y="17" width="8" height="5" rx="1"/><rect x="14" y="17" width="8" height="5" rx="1"/><path d="M12 7v5M6 17v-5h12v5"/>',data:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0"/>',repeat:'<path d="M20 7H7a4 4 0 0 0-4 4M17 3l4 4-4 4M4 17h13a4 4 0 0 0 4-4M7 21l-4-4 4-4"/>',target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'};
function uiIcon(name){return `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true">${iconPaths[name]||iconPaths.book}</svg>`}
function polish(){
  try {
    const navIcons=['grid','route','book','cards','check','chat','case','glossary','spark','news'];
    document.querySelectorAll('[data-nav]').forEach(b=>{
      let i=typeof navs!=='undefined'?navs.findIndex(n=>n[0]===b.dataset.nav):-1;
      let slot=b.querySelector('.nav-icon');
      if(slot) slot.innerHTML=uiIcon(i<0?'settings':navIcons[i]);
    });
    const brand=document.querySelector('.brand em');if(brand)brand.innerHTML=uiIcon('book');
    const searchSpan=document.querySelector('.search-wrap>span');if(searchSpan)searchSpan.innerHTML=uiIcon('search');
    const themeBtn=document.querySelector('#theme');if(themeBtn&&typeof state!=='undefined')themeBtn.innerHTML=uiIcon(state.dark?'sun':'moon');
    const notifBtn=document.querySelector('#notifications');if(notifBtn)notifBtn.innerHTML=uiIcon('bell')+'<i></i>';
    const sideNav=document.querySelector('#sidebar nav');if(sideNav)sideNav.setAttribute('aria-label','Điều hướng chính');
    const botNav=document.querySelector('#bottom');if(botNav)botNav.setAttribute('aria-label','Điều hướng trên điện thoại');
    document.querySelectorAll('[data-nav].active').forEach(b=>b.setAttribute('aria-current','page'));
    document.querySelectorAll('[data-nav]:not(.active)').forEach(b=>{if(b.removeAttribute)b.removeAttribute('aria-current');});
    const date=document.querySelector('.date');if(date)date.innerHTML=uiIcon('calendar')+'<span>Thứ Sáu, 20 tháng 11, 2026</span>';
    if(typeof page!=='undefined'&&page==='Dashboard'){
      const hero=document.querySelector('.hero');
      if(hero)hero.innerHTML=`<div class="hero-copy"><div class="eyebrow">✦ KHÔNG GIAN HỌC TẬP BA</div><h2>Nuôi dưỡng tư duy đỉnh cao.<br>Kiến tạo giá trị vượt bậc.</h2><p>Chào mừng trở lại với Vy Workspace!<br>Tiếp tục hành trình làm chủ kiến thức và kỹ năng Business Analyst thực chiến.</p><div class="hero-actions"><button class="primary" data-lesson="1,3">${uiIcon('play')}Vào học ngay</button><button class="text-button" data-nav="Lộ trình học">Khám phá lộ trình</button></div></div><div class="hero-art" aria-hidden="true"><div class="orb"></div><span class="spark">✦</span><div class="book">${uiIcon('book')}</div><div class="float-card">${uiIcon('spark')} Vy Workspace · Không gian học tập</div></div>`;
      document.querySelectorAll('.stat .icon').forEach((el,i)=>{if(el)el.innerHTML=uiIcon(['book','check','cards','flame'][i]);});
      const streak=document.querySelector('.streak>span');if(streak)streak.innerHTML=uiIcon('flame');
      const calHead=document.querySelector('.right-col .panel:nth-child(2) .section-head>span');if(calHead)calHead.innerHTML=uiIcon('calendar');
      document.querySelectorAll('.review-icon').forEach((el,i)=>{if(el)el.innerHTML=uiIcon(i?'check':'cards');});
      document.querySelectorAll('.review-row button').forEach(el=>{if(el)el.innerHTML=uiIcon('play');});
      const chart=document.querySelector('.chart');
      if(chart){
        chart.setAttribute('role','figure');
        chart.setAttribute('aria-label','Điểm minh họa theo kỹ năng: Nền tảng BA 88, Khai thác yêu cầu 76, Mô hình hóa 65, Dữ liệu và SQL 42, Agile và Scrum 72 trên 100');
        chart.querySelectorAll('.bar-row').forEach(row=>{if(row)row.title=(row.innerText||row.textContent||'').replace(/\n/g,' ')+' / 100';});
        const note=chart.querySelector('p');
        if(note){note.className='chart-note';note.textContent='Gợi ý cho bạn: dành thêm thời gian cho Dữ liệu & SQL để phát triển kỹ năng đồng đều hơn.';}
      }
      const dLayout=document.querySelector('.dashboard-layout');
      if(dLayout&&!document.querySelector('.dashboard-footnote')){
        const foot=document.createElement('p');foot.className='dashboard-footnote';foot.textContent='Không gian học tập cá nhân · Số liệu minh họa · Tiến độ được lưu trên thiết bị này';dLayout.after(foot);
      }
    }
    document.querySelectorAll('.track').forEach(el=>{
      let i=+el.dataset.track;
      let ic=el.querySelector('.track-icon');
      if(ic)ic.innerHTML=uiIcon(['target','users','file','flow','spark','data','repeat','grid','check','chat'][i]);
    });
    document.querySelectorAll('.resource .track-icon').forEach(el=>{
      if(el&&typeof navs!=='undefined'&&typeof page!=='undefined') el.innerHTML=uiIcon(navIcons[navs.findIndex(n=>n[0]===page)]||'book');
    });
    document.querySelectorAll('.progress').forEach(el=>{
      let v=parseInt(el.style&&el.style.getPropertyValue?el.style.getPropertyValue('--progress'):0)||0;
      el.setAttribute('role','progressbar');
      el.setAttribute('aria-label','Tiến độ');
      el.setAttribute('aria-valuemin','0');
      el.setAttribute('aria-valuemax','100');
      el.setAttribute('aria-valuenow',String(v));
    });
    const tabs=document.querySelector('.tabs');
    if(tabs&&typeof tab!=='undefined'){
      tabs.setAttribute('role','tablist');
      tabs.setAttribute('aria-label','Nội dung bài học');
      tabs.querySelectorAll('button').forEach((el,i)=>{el.setAttribute('role','tab');el.setAttribute('aria-selected',String(i===tab));});
    }
  } catch(err) {
    console.warn('Polish exception swallowed:', err);
  }
}
