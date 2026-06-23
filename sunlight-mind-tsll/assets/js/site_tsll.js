/*   晴心 SunlightMind · 共享脚本 site_tsll.js */

/* ========== 全局主题配置 ========== */
const SM_THEMES = {
  warm:{
    label:'暖阳橙',
    vars:{'--bg':'#FFFCF5','--bg2':'#FFF5E1','--ink':'#4A3F35','--muted':'#9C8B7A','--rule':'#F0E5D2','--accent':'#F5A623','--accent2':'#7BC4A0','--pink':'#FFB7B2','--sky':'#A6D8E7','--warm':'#FFDFA0','--err':'#E07A5F','--ok':'#7BC4A0','--white':'#FFFFFF','--accent-light':'#FFB347','--cream':'#FFE4B5','--warm-dark':'#FFD580','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#FBE0DC','--sky-light':'#D4EBF2','--cream-light':'#FFF0D0','--green-light':'#D9F0DD','--green-text':'#4A9D6F','--pink-text':'#C96B5A','--teal-text':'#3A7A8A','--shadow':'0 8px 32px rgba(245,166,35,.1)','--shadow-strong':'0 4px 20px rgba(245,166,35,.25)','--accent-shadow-strong':'rgba(245,166,35,.25)','--accent-shadow-light':'rgba(245,166,35,.12)','--accent-glass':'rgba(245,166,35,.13)','--shadow-black':'rgba(0,0,0,.1)','--white-glass':'rgba(255,255,255,.58)','--white-glass2':'rgba(255,255,255,.7)','--topbar':'linear-gradient(135deg,#F5A623 0%,#FFB347 100%)','--welcome-bg':'linear-gradient(135deg,#FFE4B5 0%,#FFB7B2 100%)','--tab-active-bg':'linear-gradient(135deg,#F5A623,#FF8C42)','--tab-active-shadow':'rgba(245,166,35,.3)'},
    topbar:'linear-gradient(135deg,#F5A623 0%,#FFB347 100%)'
  },
  ocean:{
    label:'海洋蓝',
    vars:{'--bg':'#F0F7FF','--bg2':'#E1EFFE','--ink':'#2C3E50','--muted':'#7A8BA0','--rule':'#D6E4F0','--accent':'#4A90D9','--accent2':'#7BC4A0','--pink':'#A6D8E7','--sky':'#6BB5E0','--warm':'#B8D4F0','--err':'#E07A5F','--ok':'#7BC4A0','--white':'#FFFFFF','--accent-light':'#6BB5E0','--cream':'#D4EBF2','--warm-dark':'#B8D4F0','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#E1EFFE','--sky-light':'#D6E4F0','--cream-light':'#E1EFFE','--green-light':'#D9F0DD','--green-text':'#4A9D6F','--pink-text':'#7A8BA0','--teal-text':'#3A7A8A','--shadow':'0 8px 32px rgba(74,144,217,.1)','--shadow-strong':'0 4px 20px rgba(74,144,217,.25)','--accent-shadow-strong':'rgba(74,144,217,.25)','--accent-shadow-light':'rgba(74,144,217,.12)','--accent-glass':'rgba(74,144,217,.13)','--shadow-black':'rgba(0,0,0,.1)','--white-glass':'rgba(255,255,255,.58)','--white-glass2':'rgba(255,255,255,.7)','--topbar':'linear-gradient(135deg,#4A90D9 0%,#6BB5E0 100%)','--welcome-bg':'linear-gradient(135deg,#D4EBF2 0%,#A6D8E7 100%)','--tab-active-bg':'linear-gradient(135deg,#4A90D9,#6BB5E0)','--tab-active-shadow':'rgba(74,144,217,.3)'},
    topbar:'linear-gradient(135deg,#4A90D9 0%,#6BB5E0 100%)'
  },
  forest:{
    label:'森林绿',
    vars:{'--bg':'#F2F9F2','--bg2':'#E0F0E0','--ink':'#2D4A2D','--muted':'#6B8A6B','--rule':'#D0E8D0','--accent':'#5B9A6F','--accent2':'#A8D5BA','--pink':'#C5E1A5','--sky':'#81C784','--warm':'#DCEDC8','--err':'#E07A5F','--ok':'#7BC4A0','--white':'#FFFFFF','--accent-light':'#81C784','--cream':'#DCEDC8','--warm-dark':'#C5E1A5','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#E0F0E0','--sky-light':'#D0E8D0','--cream-light':'#E0F0E0','--green-light':'#D9F0DD','--green-text':'#4A9D6F','--pink-text':'#6B8A6B','--teal-text':'#2D4A2D','--shadow':'0 8px 32px rgba(91,154,111,.1)','--shadow-strong':'0 4px 20px rgba(91,154,111,.25)','--accent-shadow-strong':'rgba(91,154,111,.25)','--accent-shadow-light':'rgba(91,154,111,.12)','--accent-glass':'rgba(91,154,111,.13)','--shadow-black':'rgba(0,0,0,.1)','--white-glass':'rgba(255,255,255,.58)','--white-glass2':'rgba(255,255,255,.7)','--topbar':'linear-gradient(135deg,#5B9A6F 0%,#81C784 100%)','--welcome-bg':'linear-gradient(135deg,#C5E1A5 0%,#A8D5BA 100%)','--tab-active-bg':'linear-gradient(135deg,#5B9A6F,#81C784)','--tab-active-shadow':'rgba(91,154,111,.3)'},
    topbar:'linear-gradient(135deg,#5B9A6F 0%,#81C784 100%)'
  },
  lavender:{
    label:'薰衣草',
    vars:{'--bg':'#F8F5FF','--bg2':'#EDE5F5','--ink':'#3D2E5C','--muted':'#8A7BA8','--rule':'#DDD0EE','--accent':'#9B8EC4','--accent2':'#D4B8E0','--pink':'#E8D5F5','--sky':'#C5A8E0','--warm':'#E8D5F5','--err':'#E07A5F','--ok':'#7BC4A0','--white':'#FFFFFF','--accent-light':'#C5A8E0','--cream':'#E8D5F5','--warm-dark':'#D4B8E0','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#EDE5F5','--sky-light':'#DDD0EE','--cream-light':'#EDE5F5','--green-light':'#D9F0DD','--green-text':'#4A9D6F','--pink-text':'#8A7BA8','--teal-text':'#5B4E7A','--shadow':'0 8px 32px rgba(155,142,196,.1)','--shadow-strong':'0 4px 20px rgba(155,142,196,.25)','--accent-shadow-strong':'rgba(155,142,196,.25)','--accent-shadow-light':'rgba(155,142,196,.12)','--accent-glass':'rgba(155,142,196,.13)','--shadow-black':'rgba(0,0,0,.1)','--white-glass':'rgba(255,255,255,.58)','--white-glass2':'rgba(255,255,255,.7)','--topbar':'linear-gradient(135deg,#9B8EC4 0%,#C5A8E0 100%)','--welcome-bg':'linear-gradient(135deg,#E8D5F5 0%,#D4B8E0 100%)','--tab-active-bg':'linear-gradient(135deg,#9B8EC4,#C5A8E0)','--tab-active-shadow':'rgba(155,142,196,.3)'},
    topbar:'linear-gradient(135deg,#9B8EC4 0%,#C5A8E0 100%)'
  },
  rose:{
    label:'玫瑰粉',
    vars:{'--bg':'#FFF5F5','--bg2':'#FFE8E8','--ink':'#4A2C2C','--muted':'#A07070','--rule':'#F0D0D0','--accent':'#E07A7A','--accent2':'#F5C6C6','--pink':'#F5C6C6','--sky':'#F0A0A0','--warm':'#FFD5D5','--err':'#E07A5F','--ok':'#7BC4A0','--white':'#FFFFFF','--accent-light':'#F0A0A0','--cream':'#FBE0DC','--warm-dark':'#FFC0C0','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#FFE8E8','--sky-light':'#F0D0D0','--cream-light':'#FBE0DC','--green-light':'#D9F0DD','--green-text':'#4A9D6F','--pink-text':'#A07070','--teal-text':'#6B5E5E','--shadow':'0 8px 32px rgba(224,122,122,.1)','--shadow-strong':'0 4px 20px rgba(224,122,122,.25)','--accent-shadow-strong':'rgba(224,122,122,.25)','--accent-shadow-light':'rgba(224,122,122,.12)','--accent-glass':'rgba(224,122,122,.13)','--shadow-black':'rgba(0,0,0,.1)','--white-glass':'rgba(255,255,255,.58)','--white-glass2':'rgba(255,255,255,.7)','--topbar':'linear-gradient(135deg,#E07A7A 0%,#F0A0A0 100%)','--welcome-bg':'linear-gradient(135deg,#FFD5D5 0%,#F5C6C6 100%)','--tab-active-bg':'linear-gradient(135deg,#E07A7A,#F0A0A0)','--tab-active-shadow':'rgba(224,122,122,.3)'},
    topbar:'linear-gradient(135deg,#E07A7A 0%,#F0A0A0 100%)'
  },
  dark:{
    label:'暗夜模式',
    vars:{'--bg':'#1A1A2E','--bg2':'#16213E','--ink':'#E0E0E0','--muted':'#8899AA','--rule':'#2A2A4A','--accent':'#E94560','--accent2':'#533483','--pink':'#E94560','--sky':'#0F3460','--warm':'#533483','--err':'#E94560','--ok':'#533483','--white':'#C0C8D8','--accent-light':'#0F3460','--cream':'#1A1A2E','--warm-dark':'#16213E','--gold':'#FFD700','--silver':'#C0C0C0','--bronze':'#B87333','--bronze-dark':'#CD7F32','--pink-light':'#16213E','--sky-light':'#2A2A4A','--cream-light':'#16213E','--green-light':'#16213E','--green-text':'#7BC4A0','--pink-text':'#8899AA','--teal-text':'#8899AA','--shadow':'0 8px 32px rgba(0,0,0,.3)','--shadow-strong':'0 4px 20px rgba(0,0,0,.4)','--accent-shadow-strong':'rgba(0,0,0,.4)','--accent-shadow-light':'rgba(233,69,96,.12)','--accent-glass':'rgba(233,69,96,.13)','--shadow-black':'rgba(255,255,255,.05)','--white-glass':'rgba(0,0,0,.35)','--white-glass2':'rgba(0,0,0,.2)','--topbar':'linear-gradient(135deg,#16213E 0%,#0F3460 100%)','--welcome-bg':'linear-gradient(135deg,#16213E 0%,#533483 100%)','--tab-active-bg':'linear-gradient(135deg,#E94560,#533483)','--tab-active-shadow':'rgba(233,69,96,.3)'},
    topbar:'linear-gradient(135deg,#16213E 0%,#0F3460 100%)'
  }
};

function smApplyTheme(name){
  const t = SM_THEMES[name]; if(!t) return;
  const r = document.documentElement.style;
  Object.entries(t.vars).forEach(([k,v])=> r.setProperty(k,v));
  const topbar = document.querySelector('.topbar');
  if(topbar) topbar.style.background = t.topbar;
  localStorage.setItem('sm_theme', name);
  document.querySelectorAll('.theme-option').forEach(el=>{
    el.classList.toggle('active', el.dataset.theme===name);
  });
  document.dispatchEvent(new CustomEvent('sm-theme-changed', {detail:{theme:name}}));
}

function smInitTheme(){
  const saved = localStorage.getItem('sm_theme') || 'warm';
  if(SM_THEMES[saved]) smApplyTheme(saved);
}

/* ========== Toast ========== */
function toast(msg, type=''){
  let t = document.getElementById('toast');
  if(!t){ t = document.createElement('div'); t.id='toast'; t.className='toast'; document.body.appendChild(t); }
  t.textContent = msg; t.className = 'toast show ' + type;
  setTimeout(()=>t.className='toast '+type, 2200);
}

/* ========== 顶栏注入 ========== */
function injectTopbar(activeKey){
  const user = JSON.parse(localStorage.getItem('sm_currentUser')||'null');
  const items = [
    {key:'dashboard',   text:'数据大屏',  href:'dashboard_tsll.html'},
    {key:'mood',        text:'情绪日记',  href:'mood-list_tsll.html'},
    {key:'assess',      text:'心理测评',  href:'assessment_tsll.html'},
    {key:'breath',      text:'呼吸训练',  href:'breath_tsll.html'},
    {key:'meditation',  text:'冥想空间',  href:'meditation_tsll.html'},
    {key:'resources',   text:'资源库',    href:'resources_tsll.html'},
    {key:'community',   text:'树洞',      href:'community_tsll.html'},
    {key:'appointment', text:'心理咨询',  href:'appointment_tsll.html'},
    {key:'about',       text:'关于我们',  href:'about_tsll.html'}
  ];
  const userHtml = user
    ? `<a class="user-name" href="profile_tsll.html">${user.username}<small>积分 ${user.points||0}</small></a>
       <a class="avatar" href="profile_tsll.html">${user.avatar||'😊'}</a>`
    : `<a class="user-name" href="login_tsll.html">未登录<small>点击登录</small></a>
       <a class="avatar" href="login_tsll.html">😊</a>`;

  const backBtn = activeKey !== 'dashboard'
    ? `<a class="back-dash" href="dashboard_tsll.html">← 返回大屏</a>`
    : '';

  const themePanelHtml = `
    <div class="theme-btn" id="themeToggle" title="切换主题色调">🎨</div>
    <div class="theme-panel" id="themePanel">
      <h4>选择界面色调</h4>
      <div class="theme-option" data-theme="warm">
        <div class="theme-colors"><span style="background:#FFFCF5"></span><span style="background:#F5A623"></span><span style="background:#FFB7B2"></span></div>
        <span class="theme-option-label">暖阳橙</span>
      </div>
      <div class="theme-option" data-theme="ocean">
        <div class="theme-colors"><span style="background:#F0F7FF"></span><span style="background:#4A90D9"></span><span style="background:#7BC4A0"></span></div>
        <span class="theme-option-label">海洋蓝</span>
      </div>
      <div class="theme-option" data-theme="forest">
        <div class="theme-colors"><span style="background:#F2F9F2"></span><span style="background:#5B9A6F"></span><span style="background:#A8D5BA"></span></div>
        <span class="theme-option-label">森林绿</span>
      </div>
      <div class="theme-option" data-theme="lavender">
        <div class="theme-colors"><span style="background:#F8F5FF"></span><span style="background:#9B8EC4"></span><span style="background:#D4B8E0"></span></div>
        <span class="theme-option-label">薰衣草</span>
      </div>
      <div class="theme-option" data-theme="rose">
        <div class="theme-colors"><span style="background:#FFF5F5"></span><span style="background:#E07A7A"></span><span style="background:#F5C6C6"></span></div>
        <span class="theme-option-label">玫瑰粉</span>
      </div>
      <div class="theme-option" data-theme="dark">
        <div class="theme-colors"><span style="background:#1A1A2E"></span><span style="background:#E94560"></span><span style="background:#533483"></span></div>
        <span class="theme-option-label">暗夜模式</span>
      </div>
    </div>`;

  const html = `
    <header class="topbar">
      <div style="display:flex;align-items:center;gap:6px">
        ${backBtn}
        <a class="logo" href="../index_tsll.html"><span class="logo-dot"></span> 晴心 · SunlightMind</a>
      </div>
      <nav class="menu">
        ${items.map(i=>`<a href="${i.href}" class="${i.key===activeKey?'active':''}">${i.text}</a>`).join('')}
      </nav>
      <div class="user-block">${themePanelHtml}${userHtml}</div>
    </header>`;
  document.body.insertAdjacentHTML('afterbegin', html);

  setTimeout(()=>{
    const toggle = document.getElementById('themeToggle');
    const panel = document.getElementById('themePanel');
    if(toggle && panel){
      toggle.addEventListener('click',e=>{
        e.stopPropagation();
        panel.classList.toggle('show');
      });
      document.addEventListener('click',e=>{
        if(!e.target.closest('.theme-btn') && !e.target.closest('.theme-panel')){
          panel.classList.remove('show');
        }
      });
      panel.querySelectorAll('.theme-option').forEach(el=>{
        el.addEventListener('click',()=>{
          smApplyTheme(el.dataset.theme);
          panel.classList.remove('show');
        });
      });
      const saved = localStorage.getItem('sm_theme') || 'warm';
      panel.querySelectorAll('.theme-option').forEach(el=>{
        el.classList.toggle('active', el.dataset.theme===saved);
      });
    }
    smInitTheme();
  },0);
}

/* ========== 心理援助联系底栏 ========== */
function injectContactBar(){
  const html = `
    <div class="wrap">
      <section class="contact-section">
        <div class="cs-header">
          <div class="cs-icon">🛡️</div>
          <div>
            <h3>校园心理援助资源</h3>
            <p>如果你正在经历困难，请一定记得，你不必独自面对</p>
          </div>
        </div>
        <div class="contact-bar">
          <div class="ci">
            <div class="ci-header">
              <div class="cicon">🏫</div>
              <div class="ci-title">校心理咨询中心</div>
            </div>
            <div class="ci-detail">
              <b>地址</b>：大学生活动中心 3 楼 302<br />
              <b>电话</b>：<span class="hotline">0571-8820-1234</span><br />
              <b>开放</b>：周一至周五 9:00-17:00<br />
              <span style="color:var(--muted)">周六 9:00-12:00</span>
            </div>
            <a class="ci-link" href="appointment_tsll.html">在线预约咨询 →</a>
          </div>
          <div class="ci">
            <div class="ci-header">
              <div class="cicon">📞</div>
              <div class="ci-title">24 小时援助热线</div>
            </div>
            <div class="ci-detail">
              全国希望热线<br /><span class="hotline">400-161-9995</span><br />
              北京心理危机干预<br /><span class="hotline">010-82951332</span><br />
              青少年心理援助<br /><span class="hotline">12355</span>
            </div>
          </div>
          <div class="ci">
            <div class="ci-header">
              <div class="cicon">💛</div>
              <div class="ci-title">晴心校内资源</div>
            </div>
            <div class="ci-detail">
              <b>辅导员值班</b>：每日 18:00-22:00<br />
              <b>心理委员</b>：各班级心理委员<br />
              <b>晴心树洞</b>：<a href="community_tsll.html" style="color:var(--accent);font-weight:700">匿名倾诉 →</a><br />
              <b>紧急情况</b>：立即拨打 <b style="color:var(--err)">110 / 120</b>
            </div>
          </div>
        </div>
      </section>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', html);
}

/* ========== 检查登录 ========== */
function requireLogin(redirect=true){
  const u = JSON.parse(localStorage.getItem('sm_currentUser')||'null');
  if(!u && redirect){
    toast('请先登录','err');
    setTimeout(()=>location.href='login_tsll.html',900);
    return null;
  }
  return u;
}

/* ========== 通用工具 ========== */
function fmtDate(d){
  d = d instanceof Date ? d : new Date(d);
  return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
}
function fmtTime(d){
  d = d instanceof Date ? d : new Date(d);
  return d.toLocaleString('zh-CN');
}

/* ========== 记录使用日志 ========== */
function addPoints(user, points){
  user.points = (user.points || 0) + points;
  localStorage.setItem('sm_currentUser', JSON.stringify(user));
  const users = JSON.parse(localStorage.getItem('sm_users') || '[]');
  const index = users.findIndex(u => u.id === user.id);
  if(index >= 0){
    users[index] = user;
    localStorage.setItem('sm_users', JSON.stringify(users));
  }
}
function logActivity(action, payload){
  const u = JSON.parse(localStorage.getItem('sm_currentUser') || 'null');
  if(!u) return;
  const log = JSON.parse(localStorage.getItem('sm_activity_' + u.id) || '[]');
  log.unshift({ time: Date.now(), action, payload });
  localStorage.setItem('sm_activity_' + u.id, JSON.stringify(log.slice(0, 200)));
  const scoreMap = {
    '记录情绪': 5, '完成测评': 10, '呼吸训练': 8, '冥想完成': 8,
    '观看视频': 3, '阅读文章': 3, '阅读书籍': 5, '收听音频': 3,
    'appointment': 15, 'community_post': 5
  };
  const points = scoreMap[action] || 0;
  if(points > 0){ addPoints(u, points); toast('积分 +' + points, 'ok'); }
}