(function(){
  "use strict";
  const engine=window.TBSEngine, programs=window.TBS_PROGRAMS, template=window.TBS_DAY_TEMPLATE;
  const guide=document.querySelector('.guide');
  if(!guide||!engine||!programs||!template)return;
  const style=document.createElement('style');
  style.textContent='.tbs-week{margin-top:28px;padding-top:26px;border-top:1px solid var(--line)}.tbs-week h3{margin:0 0 14px;font:700 clamp(1.45rem,4vw,2.2rem)/1.1 Georgia,serif}.tbs-week-days{display:flex;gap:8px;overflow:auto;padding-bottom:9px}.tbs-week-days button{min-height:42px;padding:0 14px;border:1px solid var(--line);border-radius:999px;background:var(--panel);color:var(--cream);font:800 13px system-ui;white-space:nowrap}.tbs-week-days button[aria-current="date"]{background:var(--red);color:#08111b}.tbs-week-list{margin-top:12px;border-top:1px solid var(--line)}.tbs-week-row{display:grid;grid-template-columns:90px 1fr;gap:12px;padding:10px 4px;border-bottom:1px solid var(--line)}.tbs-week-row time{color:var(--blue2);font-weight:900}.tbs-week-row span{color:var(--muted);font-size:.82rem;display:block;margin-top:3px}@media(max-width:600px){.tbs-week-row{grid-template-columns:74px 1fr}}';
  document.head.appendChild(style);
  const shell=document.createElement('div');shell.className='tbs-week';shell.innerHTML='<p>SEVEN-DAY SUPERSTATION SCHEDULE</p><h3>Coming up this week</h3><div class="tbs-week-days"></div><div class="tbs-week-list"></div>';guide.appendChild(shell);
  const dayBar=shell.querySelector('.tbs-week-days'),list=shell.querySelector('.tbs-week-list');
  const days=Array.from({length:7},(_,i)=>{const d=new Date();d.setHours(12,0,0,0);d.setDate(d.getDate()+i);const blocks=engine.createDaySchedule(d.getTime(),programs,template);return{date:d,blocks}});
  function fmtDay(d){return new Intl.DateTimeFormat('en-US',{weekday:'short',month:'short',day:'numeric'}).format(d)}
  function fmtTime(ms){return new Intl.DateTimeFormat('en-US',{timeZone:engine.TIME_ZONE,hour:'numeric',minute:'2-digit'}).format(new Date(ms))}
  function render(index){dayBar.querySelectorAll('button').forEach((b,i)=>b.toggleAttribute('aria-current',i===index));list.innerHTML=days[index].blocks.map(block=>`<div class="tbs-week-row"><time>${fmtTime(block.startsAtMs)}</time><div><strong>${block.movie.title}</strong><span>${block.movie.collection}</span></div></div>`).join('')}
  days.forEach((day,index)=>{const b=document.createElement('button');b.type='button';b.textContent=index===0?'Today':fmtDay(day.date);b.addEventListener('click',()=>render(index));dayBar.appendChild(b)});render(0);
})();
