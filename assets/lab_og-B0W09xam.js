import{n as e}from"./episodes-WLomGn5-.js";import"./modulepreload-polyfill-P2Xu9kJm.js";import{t}from"./clock-D31bn5ky.js";import"./_harness-CY66pfe-.js";import{i as n,t as r}from"./engine-BiikbbJB.js";t.instant=!0;var i=new URLSearchParams(location.search),a=e.find(e=>e.id===(i.get(`ep`)??`ep01`)),o=parseInt(i.get(`p`)??`0`,10)||0,s=document.createElement(`style`);s.textContent=`
  html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#121014}
  .card{position:relative;width:1200px;height:630px;overflow:hidden;color:#eee9f3;
    font-family:"Noto Sans SC","PingFang SC",sans-serif;
    background:
      radial-gradient(60% 90% at 78% 40%, rgba(255,120,80,.30), rgba(0,0,0,0) 70%),
      radial-gradient(50% 60% at 10% 100%, rgba(255,86,112,.16), rgba(0,0,0,0) 70%),
      #121014}
  .card::after{content:"";position:absolute;inset:0;pointer-events:none;
    background:repeating-radial-gradient(circle at 0 0, rgba(255,255,255,.035) 0 1.2px, transparent 1.2px 7px)}
  .sheet{position:absolute;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.08)}
  .mono{width:420px;height:594px;left:760px;top:44px;transform:rotate(6deg)}
  .color{width:430px;height:608px;left:628px;top:26px;transform:rotate(-3.5deg)}
  .txt{position:absolute;left:64px;top:0;bottom:0;width:560px;display:flex;flex-direction:column;justify-content:center;z-index:2}
  .kicker{font:700 17px/1 "Noto Sans SC",sans-serif;letter-spacing:.32em;color:#ff8a5c}
  h1{margin:22px 0 0;font:400 104px/1.02 "ZCOOL QingKe HuangYou","Noto Sans SC",sans-serif;letter-spacing:.02em;
    color:#fff;text-shadow:0 4px 0 #ff5670,0 10px 30px rgba(255,86,112,.35)}
  .ep{margin-top:26px;font:700 32px/1.3 "Noto Sans SC",sans-serif}
  .jp{margin-top:10px;font:500 22px/1.3 "Noto Sans SC",sans-serif;color:#a69fb2;letter-spacing:.08em}
  .chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:34px}
  .chips span{font:700 17px/1 "Noto Sans SC",sans-serif;padding:10px 14px;border-radius:999px;
    background:rgba(255,255,255,.08);box-shadow:inset 0 0 0 1px rgba(255,255,255,.14)}
  .by{margin-top:30px;font:500 15px/1 "Noto Sans SC",sans-serif;color:#6f6879;letter-spacing:.12em}
`,document.head.appendChild(s);var c=document.createElement(`div`);c.className=`card`,c.innerHTML=`
  <div class="txt">
    <div class="kicker">INKFRAME · 动态漫画</div>
    <h1>轰！拟声少女</h1>
    <div class="ep">第1话「${a.title}」</div>
    <div class="jp">${a.subtitle??``}</div>
    <div class="chips"><span>点一下 动一拍</span><span>彩色 ↔ 黑白网点</span><span>0 张图片 · 全矢量代码绘制</span></div>
    <div class="by">CLAUDE OPUS 5.5 × SVG</div>
  </div>`,document.body.appendChild(c);function l(e,t){let r=document.createElement(`div`);r.className=`sheet ${e}`,c.appendChild(r);let i=new n({episode:a,page:a.pages[o],pageIndex:o,mode:t,readingDirection:a.readingDirection??`rtl`});i.mount(r),i.goto(i.stepCount-1)}async function u(){await r({...a,pages:[a.pages[o]]}),await document.fonts.ready,l(`mono`,`mono`),l(`color`,`color`),requestAnimationFrame(()=>requestAnimationFrame(()=>window.__ready=!0))}u();