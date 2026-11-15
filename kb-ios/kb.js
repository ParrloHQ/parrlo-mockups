/* Parrlo · клавиатура iOS v2 — макет. Тексты ru/es/en, состояния, два размера экрана. */
(function(){
const SW='fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"';
const I={
  spark:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>`,
  tr:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><path d="M3 5h9M7.5 3v2M5 5c.5 3 2.5 6 6 7.5M10 5c-.8 3.5-3 6.5-6.5 8"/><path d="M12.5 21l4-10 4 10M14 17.5h5"/></svg>`,
  mic:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><rect x="8.5" y="2.5" width="7" height="12" rx="3.5"/><path d="M5 11.5a7 7 0 0 0 14 0"/><path d="M12 18.5v3"/></svg>`,
  voice:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><path d="M3.5 9.5v5h3.5l4.5 4V5.5L7 9.5z"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6"/><path d="M18.3 6.3a8.2 8.2 0 0 1 0 11.4"/></svg>`,
  gear:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>`,
  shift:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5l8 8.5h-4.5v7.5h-7V12H4z"/></svg>`,
  shiftOn:`<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M12 3.5l8 8.5h-4.5v7.5h-7V12H4z"/></svg>`,
  del:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 5H20a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H8.5L3 12z"/><path d="M11.5 9.5l5 5M16.5 9.5l-5 5" stroke-linecap="round"/></svg>`,
  globe:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18"/></svg>`,
  ret:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 5v6a3 3 0 0 1-3 3H5"/><path d="M9 10l-4 4 4 4"/></svg>`,
  x:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
  chevL:`<svg viewBox="0 0 24 24" ${SW} aria-hidden="true"><path d="M15 5l-7 7 7 7"/></svg>`,
  send:`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l7 7h-4.5v9h-5v-9H5z"/></svg>`,
};
const NB=' ';
const T={
 ru:{lang:'Русский', chat:'Лусия', back:'Чаты', msg:'¿Nos vemos mañana a las 10 en la oficina?', ph:'Сообщение',
   improve:'Улучшить', translate:'Перевести', dict:'Диктовка', voice:'Голосовое', settings:'Настройки',
   shift:'Заглавные', del:'Удалить', num:'Цифры', next:'Следующая клавиатура', ret:'Ввод', space:'Пробел',
   tipFull:'Включи «Полный доступ»: Настройки'+NB+'→ Parrlo Translate'+NB+'→ Клавиатуры', tipKey:'Открой Parrlo Translate и'+NB+'включи клавиатуру в'+NB+'настройках', open:'Открыть',
   rec:'Идёт запись', done:'Готово', cancelRec:'Отменить запись'},
 es:{lang:'Español', chat:'Olga', back:'Chats', msg:'Увидимся завтра в 10 в офисе?', ph:'Mensaje',
   improve:'Mejorar', translate:'Traducir', dict:'Dictado', voice:'Nota de voz', settings:'Ajustes',
   shift:'Mayúsculas', del:'Borrar', num:'Números', next:'Siguiente teclado', ret:'Intro', space:'Espacio',
   tipFull:'Activa «Acceso completo»: Ajustes'+NB+'→ Parrlo Translate'+NB+'→ Teclados', tipKey:'Abre Parrlo Translate y'+NB+'activa el teclado en los'+NB+'ajustes', open:'Abrir',
   rec:'Grabando', done:'Listo', cancelRec:'Cancelar grabación'},
 en:{lang:'English', chat:'Lucía', back:'Chats', msg:'¿Nos vemos mañana a las 10 en la oficina?', ph:'Message',
   improve:'Improve', translate:'Translate', dict:'Dictate', voice:'Voice note', settings:'Settings',
   shift:'Shift', del:'Delete', num:'Numbers', next:'Next keyboard', ret:'Return', space:'Space',
   tipFull:'Turn on “Full Access”: Settings'+NB+'→ Parrlo Translate'+NB+'→ Keyboards', tipKey:'Open Parrlo Translate and turn on the keyboard in'+NB+'Settings', open:'Open',
   rec:'Recording', done:'Done', cancelRec:'Cancel recording'},
};
window.KB_T=T;
const ROWS={ru:['йцукенгшщзх','фывапролджэ','ячсмитьбю'], es:['qwertyuiop','asdfghjklñ','zxcvbnm'], en:['qwertyuiop','asdfghjkl','zxcvbnm']};
const DEV={
  se:{W:375,H:667,name:'Самый маленький · 375×667 (iPhone SE)',island:false,globe:true},
  max:{W:440,H:956,name:'Самый большой · 440×956 (Pro Max)',island:true,globe:false},
};
const STATES=[
  {id:'ready', t:'Готово', cap:'Всё включено. Панель: Улучшить, Перевести, Диктовка, Голосовое и справа Настройки — иконки без подписей, у каждой зона нажатия 44×44 и VoiceOver-метка. Начало предложения: Shift включён, клавиши заглавные.'},
  {id:'nofull', t:'Нет полного доступа', cap:'Печатать можно. Иконки панели неактивны (приглушены), текста поверх клавиатуры нет. Без «Полного доступа» клавиатура не может открыть приложение, поэтому кнопки «Открыть» нет.', off:true},
  {id:'nofull-tip', t:'Нет полного доступа · нажатие', cap:'Нажатие на любую неактивную иконку — одна короткая подсказка под ней. Скрывается через 4 с или по нажатию в любом месте.', off:true, tip:'full', at:1},
  {id:'nokey', t:'Нет ключа', cap:'Полный доступ есть, но у клавиатуры нет ключа: Parrlo Translate ещё не открывали или клавиатура не включена в его настройках. Входа в Parrlo нет — подсказка называет эту причину. Иконки неактивны, печатать можно.', off:true},
  {id:'nokey-tip', t:'Нет ключа · нажатие', cap:'Подсказка и «Открыть» — открывает Parrlo Translate на настройках клавиатуры. Как только ключ появится, иконки станут активными без перезапуска клавиатуры.', off:true, tip:'key', at:2},
  {id:'rec', t:'Идёт запись · только вариант Б (решает Мурат)', cap:'Запись, пока человек остаётся в чате, возможна только в варианте Б (сессия микрофона у Translate). В варианте А фоновой записи нет: при уходе из Translate запись прерывается, и этой полосы в чате нет. Как работает полоса: Translate 4 раза в секунду пишет статус в App Group (начало, громкость, такт) и шлёт Darwin-уведомление; полоса видна, пока такт не старше 2 с. ✕ и «Готово» отправляют команду обратно тем же путём; команда старше 5 с не выполняется.', rec:true},
];
window.KB_STATES=STATES;
const up=(s,l)=>s.toLocaleUpperCase(l);
function keys(c,x){
  const R=ROWS[x.lang]; const k=(ch)=>`<span class="k" role="button">${up(ch,x.lang)}</span>`;
  const r1=[...R[0]].map(k).join(''), r2=[...R[1]].map(k).join(''), r3=[...R[2]].map(k).join('');
  const half=R[1].length<R[0].length?'<span class="hp"></span>':'';
  const wide=x.lang!=='ru';
  const sh=`<span class="k f sh on${wide?' w':''}" role="button" aria-label="${c.shift}">${I.shiftOn}</span>`;
  const dl=`<span class="k f${wide?' w':''}" role="button" aria-label="${c.del}">${I.del}</span>`;
  const gap=wide?'<span class="g3"></span>':'';
  const globe=DEV[x.dev].globe?`<span class="k f gl" role="button" aria-label="${c.next}">${I.globe}</span>`:'';
  return `<div class="keys ${x.lang}">
   <div class="r">${r1}</div><div class="r">${half}${r2}${half}</div>
   <div class="r">${sh}${gap}${r3}${gap}${dl}</div>
   <div class="r">
    <span class="k f n" role="button" aria-label="${c.num}">123</span>${globe}
    <span class="k p" role="button">,</span>
    <span class="k sp" role="button" aria-label="${c.space}, ${c.lang}"><i class="ch">‹</i><span>${c.lang}</span><i class="ch">›</i></span>
    <span class="k p" role="button">.</span>
    <span class="k rt" role="button" aria-label="${c.ret}">${I.ret}</span>
   </div></div>`;
}
function tbar(c,x,s){
  if(s.rec){
    let bars=''; for(let i=0;i<22;i++){const h=6+Math.round(16*Math.abs(Math.sin(i*1.7+1)*Math.cos(i*.6)));bars+=`<i style="height:${h}px"></i>`}
    return `<div class="tb rec" role="status"><span class="rx" role="button" aria-label="${c.cancelRec}">${I.x}</span><span class="rdot"></span><span class="rl">${c.rec}</span><span class="rt2">0:12</span><span class="wv" aria-hidden="true">${bars}</span><span class="dn" role="button">${c.done}</span></div>`;
  }
  const items=[['improve',I.spark],['translate',I.tr],['dict',I.mic],['voice',I.voice]];
  const b=(k,ic,i)=>`<span class="ib${s.off?' off':''}${s.tip&&s.at===i?' tap':''}" role="button" aria-label="${c[k]}"${s.off?' aria-disabled="true"':''}>${ic}</span>`;
  return `<div class="tb">${items.map(([k,ic],i)=>b(k,ic,i)).join('')}<span class="fill"></span><span class="ib set" role="button" aria-label="${c.settings}">${I.gear}</span></div>`;
}
function tip(c,x,s){
  if(!s.tip) return '';
  const txt=s.tip==='full'?c.tipFull:c.tipKey;
  const btn=s.tip==='key'?`<span class="tl" role="button">${c.open}</span>`:'';
  return `<div class="tip" role="status" data-at="${s.at}"><span class="ar"></span><span class="tt">${txt}</span>${btn}</div>`;
}
function phone(x,s){
  const c=T[x.lang], d=DEV[x.dev];
  const sb=d.island?`<div class="sb big"><b>9:41</b><span class="di"></span><span class="bt"></span></div>`:`<div class="sb"><b>9:41</b><span class="bt"></span></div>`;
  const host=`<div class="nav"><span class="bk">${I.chevL}<span>${c.back}</span></span><b>${c.chat}</b><span class="avw"><span class="av">${c.chat[0]}</span></span></div>
   <div class="msgs"><div class="bub">${c.msg}</div></div>
   <div class="inp"><span class="fld"><i class="caret"></i><span>${c.ph}</span></span><span class="snd">${I.send}</span></div>`;
  const sys=d.island?`<div class="sys"><span class="sg">${I.globe}</span><span class="hm"></span></div>`:'';
  return `<div class="ph ${x.theme} ${x.dev}" style="--W:${d.W}px;--H:${d.H}px" data-state="${s.id}">${sb}<div class="host">${host}</div>
   <div class="kb">${tbar(c,x,s)}${keys(c,x)}${tip(c,x,s)}</div>${sys}</div>`;
}
window.KB_PHONE=phone;
function render(){
  const st=window.KB_ST; const root=document.getElementById('frames'); let h='';
  for(const s of STATES){
    h+=`<section class="st" id="s-${s.id}"><h3>${s.t}</h3><p class="cap">${s.cap}</p><div class="pair">`;
    for(const dev of ['se','max']) h+=`<figure data-id="${s.id}__${dev}__${st.lang}__${st.theme}"><div class="zoom">${phone({lang:st.lang,theme:st.theme,dev},s)}</div><figcaption>${DEV[dev].name}</figcaption></figure>`;
    h+=`</div></section>`;
  }
  root.innerHTML=h;
  // подсказка: стрелка над нажатой иконкой
  document.querySelectorAll('.ph').forEach(ph=>{const t=ph.querySelector('.tip');if(!t)return;const kb=ph.querySelector('.kb');const ib=ph.querySelectorAll('.tb .ib')[+t.dataset.at];
    const k=kb.getBoundingClientRect(),b=ib.getBoundingClientRect(),z=k.width/kb.offsetWidth;const cx=(b.left+b.width/2-k.left)/z;
    const tw=t.offsetWidth;let left=Math.max(8,Math.min(cx-tw/2,kb.offsetWidth-tw-8));t.style.left=left+'px';t.querySelector('.ar').style.left=(cx-left-7)+'px';});
  document.body.dataset.ready='1';
}
window.KB_RENDER=render;
})();
