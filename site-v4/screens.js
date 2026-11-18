/* Parrlo · экраны приложений для сайта (390×844), брендбук v2.3. Тексты черновые. */
(function(){
const SW='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
const I={
  mic:`<svg class="ic" viewBox="0 0 24 24" ${SW}><rect x="8.5" y="2.5" width="7" height="12" rx="3.5"/><path d="M5 11.5a7 7 0 0 0 14 0"/><path d="M12 18.5v3"/></svg>`,
  kbd:`<svg class="ic" viewBox="0 0 24 24" ${SW}><rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/></svg>`,
  more:`<svg class="ic" viewBox="0 0 24 24" fill="currentColor"><circle cx="5.5" cy="12" r="1.8"/><circle cx="12" cy="12" r="1.8"/><circle cx="18.5" cy="12" r="1.8"/></svg>`,
  spk:`<svg class="ic" viewBox="0 0 24 24" ${SW} style="width:20px;height:20px"><path d="M3.5 9.5v5h3.5l4.5 4V5.5L7 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6"/></svg>`,
  back:`<svg class="ic" viewBox="0 0 24 24" ${SW} style="width:28px;height:28px"><path d="M15 5l-7 7 7 7"/></svg>`,
  send:`<svg class="ic" viewBox="0 0 24 24" fill="currentColor" style="width:20px;height:20px"><path d="M12 4l7 7h-4.5v9h-5v-9H5z"/></svg>`,
  tr:`<svg viewBox="0 0 24 24" ${SW}><path d="M3 5h9M7.5 3v2M5 5c.5 3 2.5 6 6 7.5M10 5c-.8 3.5-3 6.5-6.5 8"/><path d="M12.5 21l4-10 4 10M14 17.5h5"/></svg>`,
  spark:`<svg viewBox="0 0 24 24" ${SW}><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,
  voice:`<svg viewBox="0 0 24 24" ${SW}><path d="M3.5 9.5v5h3.5l4.5 4V5.5L7 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6"/><path d="M18.3 6.3a8.2 8.2 0 0 1 0 11.4"/></svg>`,
  gear:`<svg viewBox="0 0 24 24" ${SW}><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.4M12 18.8v2.4M2.8 12h2.4M18.8 12h2.4M5.5 5.5l1.7 1.7M16.8 16.8l1.7 1.7M5.5 18.5l1.7-1.7M16.8 7.2l1.7-1.7"/></svg>`,
  shift:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M12 3.5l8 8.5h-4.5v7.5h-7V12H4z"/></svg>`,
  del:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"><path d="M8.5 5H20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8.5L3 12z"/><path d="M11.5 9.5l5 5M16.5 9.5l-5 5" stroke-linecap="round"/></svg>`,
  ret:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5v6a3 3 0 0 1-3 3H5"/><path d="M9 10l-4 4 4 4"/></svg>`,
};
window.SITE_ICONS=I;
const sbar=()=>`<div class="sbar"><b>9:41</b><span class="sig"><i class="wf"></i><i></i></span></div>`;
/* Translate — только тёмная тема */
function translate(){
  return `<div class="scr tr">${sbar()}
  <div class="top"><span class="cb"><i class="stop"></i></span><span class="pair"><span><i class="d"></i>RU<i class="sw">⇆</i>ES<i class="d g"></i></span></span><span class="cb">${I.kbd}</span><span class="cb">${I.more}</span></div>
  <div class="body">
   <div class="b pt">Buenas tardes. ¿Qué le pongo?</div><div class="meta l">Собеседник · Español</div>
   <div class="b ru">Добрый день. Что вам принести?</div><div class="meta l">Русский</div>
   <div class="b me">Можно счёт и бутылку воды без газа с собой?</div><div class="meta">Вы · литературно</div>
   <div class="b es">¿Me trae la cuenta y una botella de agua sin gas para llevar?<span class="spk">${I.spk}</span></div><div class="meta">Español</div>
  </div>
  <div class="btns"><span class="pb a">${I.mic}Я говорю</span><span class="pb b">${I.mic}Yo hablo</span></div></div>`;
}
/* Клавиатура — за темой телефона; хост — любой мессенджер */
function keyboard(theme){
  const R=['qwertyuiop','asdfghjklñ','zxcvbnm'];const k=c=>`<span class="k">${c.toUpperCase()}</span>`;
  return `<div class="scr ${theme==='light'?'light':''}">${sbar()}
  <div class="nav"><span class="bk">${I.back}</span><span class="av">L</span><span class="nm"><b>Lucía</b><span>в сети</span></span></div>
  <div class="msgs"><div class="m in">¡Hola! Ya tengo los documentos 📄<span class="tm">09:58</span></div><div class="m out">¡Gracias, Lucía!<span class="tm">10:00</span></div><div class="m in">¿A qué hora quedamos mañana?<span class="tm">10:02</span></div></div>
  <div class="inp"><span class="f">¡Mañana a las 10 en la oficina, perfecto!<i class="car"></i></span><span class="sd">${I.send}</span></div>
  <div class="kb">
   <div class="chip">${I.tr}<span><b>Перевели на испанский:</b> «Завтра в 10 в офисе, отлично!»</span></div>
   <div class="tb"><span class="ib">${I.spark}</span><span class="ib on">${I.tr}</span><span class="ib">${I.mic}</span><span class="ib">${I.voice}</span><span class="ib">${I.gear}</span></div>
   <div class="rows"><div class="r">${[...R[0]].map(k).join('')}</div><div class="r">${[...R[1]].map(k).join('')}</div>
    <div class="r"><span class="k f w">${I.shift}</span><span class="g3"></span>${[...R[2]].map(k).join('')}<span class="g3"></span><span class="k f w">${I.del}</span></div>
    <div class="r"><span class="k f" style="flex:1.25 1 0">123</span><span class="k p">,</span><span class="k sp"><i>‹</i>Español<i>›</i></span><span class="k p">.</span><span class="k rt">${I.ret}</span></div></div>
   <div class="hm"></div><div style="height:8px"></div>
  </div></div>`;
}
/* Parrlo Chat — только тёмная тема */
function chat(){
  return `<div class="scr">${sbar()}
  <div class="nav"><span class="bk">${I.back}</span><span class="av">L</span><span class="nm"><b>Lucía</b><span>пишет по-испански · ты читаешь по-русски</span></span></div>
  <div class="msgs">
   <div class="day">Сегодня</div>
   <div class="m in">¡Hola! ¿Qué tal el primer día?<span class="t">${I.tr}<span>Привет! Как первый день?</span></span><span class="tm">09:41</span></div>
   <div class="m out">Отлично, все очень помогают 🙂<span class="t">${I.tr}<span>¡Genial, todos me ayudan mucho! 🙂</span></span><span class="tm">09:44</span></div>
   <div class="m in">¿Nos vemos mañana a las 10 en la oficina?<span class="t">${I.tr}<span>Увидимся завтра в 10 в офисе?</span></span><span class="tm">10:02</span></div>
   <div class="m out">Да, буду. Возьму документы.<span class="t">${I.tr}<span>Sí, allí estaré. Llevo los documentos.</span></span><span class="tm">10:04</span></div>
   <div class="m in">¡Genial! Te espero en recepción.<span class="t">${I.tr}<span>Отлично! Жду тебя на ресепшене.</span></span><span class="tm">10:05</span></div>
  </div>
  <div class="inp"><span class="f"><span class="pl">Сообщение</span></span><span class="sd">${I.mic}</span></div><div class="homebar"><i></i></div></div>`;
}
/* телефон в нейтральной рамке */
function phone(screen,o={}){
  const cls=['pf',o.light?'light':'',o.flat?'flat':''].join(' ');
  return `<div class="${cls}" style="--s:${o.s||1}"><div class="shell"></div><div class="glass">${screen}</div></div>`;
}
window.SITE={translate,keyboard,chat,phone};
})();
