/* CRANE ENGINEERING - script */
'use strict';

/* =====================================================================
   КОНТАКТЫ КОМПАНИИ (07.09.2026 - номера получены от клиента).
   Ссылки tel: и wa.me прописаны прямо в index.html - в контактах,
   в подвале и в липкой мобильной панели. Работают без JS.
   WhatsApp работает на обоих номерах.
===================================================================== */
const PHONES = ['77079093636', '77075559094'];
const WHATSAPP = PHONES;
const EMAIL = 'crane.engineering@mail.ru';

const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- i18n ---------- */
const I18N = {
  en: {
    'meta.title': 'CRANE ENGINEERING - overhead and gantry cranes 0.5-200 t, Almaty',
    'meta.desc': 'Manufacturing of overhead, gantry and jib cranes, hoists, grabs and lifting beams. Metalworking, installation, inspection and documentation across Kazakhstan.',
    'nav.catalog': 'Catalog', 'nav.metal': 'Metalworking', 'nav.services': 'Services',
    'nav.works': 'Our work', 'nav.contacts': 'Contacts', 'nav.cta': 'Request',
    'hero.kicker': 'ALMATY · IN-HOUSE PRODUCTION · ALL OVER KAZAKHSTAN',
    'hero.h1a': 'OVERHEAD AND GANTRY', 'hero.h1b': 'CRANES', 'hero.h1c': '0.5-200 t',
    'hero.lead': 'Overhead, gantry and jib cranes, hoists and grabs - from drawing to load tests. Manufacturing, installation and inspection across Kazakhstan.',
    'cta.calc': 'Get a quote', 'cta.short': 'Get a quote', 'cta.more': 'More details', 'hero.btn2': 'Product catalog',
    'trust.l1': 'years of crane engineering experience',
    'trust.u2': ' t', 'trust.l2': 'max lifting capacity, starting from 0.5 t',
    'trust.b3': '3D', 'trust.l3': 'every unit designed in CAD by our team',
    'trust.b4': 'KZ', 'trust.l4': 'delivery and installation nationwide',
    'mq': 'OVERHEAD CRANES · GANTRY CRANES · UNDERSLUNG CRANES · GRABS · HOISTS · LIFTING BEAMS · STEEL STRUCTURES · ',
    'mq2': 'OVERHEAD CRANES · GANTRY CRANES · UNDERSLUNG CRANES · GRABS · HOISTS · LIFTING BEAMS · STEEL STRUCTURES · ',
    'cat.h2': 'Product catalog',
    'cat.lead': 'Cranes and lifting attachments for your span, capacity and duty. Price - based on your specification.',
    'c1.t': 'Overhead cranes', 'c1.d': 'Single and double girder, top running and underslung',
    'c2.t': 'Gantry cranes', 'c2.d': 'For open yards, warehouses and depots',
    'c3.t': 'Jib cranes', 'c3.d': 'Column and wall mounted, for workstations',
    'c4.t': 'Underslung cranes', 'c4.d': 'A light solution for workshops',
    'c5.t': 'Grabs', 'c5.d': 'Rope and motor driven, two jaw and multi jaw',
    'c6.t': 'Hoists', 'c6.d': 'Electric wire rope and chain hoists',
    'c7.t': 'Lifting beams', 'c7.d': 'For loads of any geometry, built to your spec',
    'c8.t': 'A custom task?', 'c8.d': 'We build to your drawings or design from scratch',
    'c8.btn': 'Discuss the task',
    'comp.h3': 'Crane components',
    'comp.lead': 'We machine every unit in house, from raw stock to finished part',
    'comp.i1': 'Rope drums', 'comp.i2': 'Crane wheels', 'comp.i3': 'Crane trolleys',
    'comp.i4': 'Winches', 'comp.i5': 'Gearboxes', 'comp.i6': 'Rope sheaves',
    'comp.i7': 'Couplings', 'comp.i8': 'Crane cabins',
    'met.h2': 'Metalworking and production',
    'met.lead': 'Machining and welding controlled by our engineers. Every part matches the drawing.',
    'm1.t': 'Turning', 'm1.d': 'shafts, axles, drums, wheels',
    'm2.t': 'Milling', 'm2.d': 'slots, keyways, mounting faces',
    'm3.t': 'Plasma cutting', 'm3.d': 'sheet cutting to your drawings',
    'm4.t': 'Bending', 'm4.d': 'sheet and profile shaped to spec',
    'm5.t': 'Welding', 'm5.d': 'load bearing structures and assemblies',
    'm6.t': 'Parts to drawings', 'm6.d': 'one off and batch production',
    'm7.t': 'Painting', 'm7.d': 'blasting, primer, RAL enamel',
    'met.vcap': 'Turning and milling area - our shop, unstaged',
    'met.pcap': 'Rope drums after groove machining',
    'svc.h2': 'Engineering and service',
    'svc.lead': 'We handle everything around the crane, from design to commissioning.',
    's1.t': 'Installation and commissioning', 's1.d': 'Installation, load tests and handover on your site',
    's2.t': 'Repair and upgrades', 's2.d': 'Repairs and modernization of existing cranes',
    's3.t': 'Technical inspection', 's3.d': 'Inspection of lifting equipment with a report',
    's4.t': 'Technical documentation', 's4.d': 'Crane passport, duplicates, manuals, defect reports',
    's5.t': 'Design and drawings', 's5.d': 'Structural calculations and working drawings',
    'cad.h2': 'Designed in 3D - built in steel',
    'cad.lead': 'Every unit is assembled in a CAD model first, then in the shop. Hover a card.',
    'cad.tag3d': '3D model', 'cad.tagreal': 'in steel',
    'cad.i1': 'Winch', 'cad.i2': 'Gearbox', 'cad.i3': 'Crane trolley',
    'sh.h2': 'The shop at work',
    'sh.lead': 'Filmed at our own sections - unstaged, no stock footage. Tap a clip to open the full section.',
    'sh.v1': 'Welding area', 'sh.m1': 'semi-automatic welding, certified welders',
    'sh.v2': 'Turning area', 'sh.m2': 'shafts, axles, drums, wheels',
    'sh.v3': 'Milling', 'sh.m3': 'gear-cutting and boring machines',
    'sh.v4': 'Plasma and laser cutting', 'sh.m4': 'CNC gantry machine',
    'sh.v5': 'Painting', 'sh.m5': 'paint booth, RAL enamel',
    'works.h2': 'Our work',
    'works.lead': 'Real projects and products of our own making, no stock photos.',
    'w1': 'Double-girder overhead crane', 'w2': 'Double-girder gantry crane',
    'w3': 'Lifting beam on site', 'w4': 'Column-mounted jib crane',
    'w5': 'Grab before shipment', 'w6': 'Grooved rope drums',
    'w7': 'Drum with bearing housing', 'w8': 'Welded steel structures',
    'w9': 'A batch of crane wheels', 'w10': 'Semi-gantry crane',
    'w11': 'Assembled crane trolley', 'w12': 'Crane operator cabin',
    'w13': 'Steel structures on site', 'w14': 'Sheave block assembly',
    'w15': 'Trolley on the crane bridge',
    'why.h2': 'Why CRANE ENGINEERING',
    'y1': 'Engineers with 10+ years of crane building experience',
    'y2': 'In house components: drums, wheels, gearboxes',
    'y3': 'Full cycle: design, drawings, steel, installation, tests',
    'y4': 'Complete documentation: passport, manuals, reports',
    'y5': 'Delivery and installation across Kazakhstan',
    'form.h2': 'Get a quote',
    'form.lead': 'Describe your task and we will prepare an offer based on your specification.',
    'form.direct': 'Or write to us directly:',
    'f.name': 'Your name', 'f.nameph': 'How should we address you',
    'f.phone': 'Phone or WhatsApp', 'f.phoneph': 'So we can reply',
    'f.what': 'What do you need',
    'opt.bridge': 'Overhead crane', 'opt.gantry': 'Gantry crane', 'opt.jib': 'Jib crane',
    'opt.beam': 'Underslung crane', 'opt.grab': 'Grab', 'opt.hoist': 'Hoist',
    'opt.traverse': 'Lifting beam', 'opt.parts': 'Components', 'opt.metal': 'Metalworking',
    'opt.service': 'Installation, repair, inspection', 'opt.other': 'Other',
    'f.msg': 'The task', 'f.msgph': 'Span, capacity, duty - anything you know',
    'f.send': 'Send request',
    'f.note': 'The request opens as an email to crane.engineering@mail.ru - just press Send in your mail app.',
    'f.thh': 'Thank you! The request is ready',
    'f.thp': 'An email draft has been opened - send it and we will reply during business hours.',
    'f.again': 'Fill in again',
    'ct.h2': 'Contacts', 'ct.city': 'Almaty · working across Kazakhstan',
    'ct.maillab': 'Email', 'ct.hourslab': 'Hours',
    'ct.hours': 'Mon-Fri 09:00-18:00 · Sat-Sun closed',
    'ct.phonelab': 'Phone',
    'ct.phwa': 'both numbers are on WhatsApp',
    'ct.wahint': 'message us on WhatsApp',
    'ct.mappin': 'Almaty', 'ct.qr': 'point your phone camera',
    'ft.tag': 'Cranes and lifting equipment · Almaty',
    'mb.call': 'Call', 'mb.mail': 'Email', 'mb.req': 'Request'
  }
};

const META_RU = {
  'meta.title': document.title,
  'meta.desc': document.querySelector('meta[name="description"]').getAttribute('content')
};

/* Русский словарь собирается из разметки */
const RU = {};
const RUPH = {};
document.querySelectorAll('[data-i18n]').forEach(function(el){
  if(!(el.dataset.i18n in RU)) RU[el.dataset.i18n] = el.textContent;
});
document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
  if(!(el.dataset.i18nPh in RUPH)) RUPH[el.dataset.i18nPh] = el.getAttribute('placeholder');
});

let LANG = 'ru';

/* Казахский словарь - отдельным файлом assets/lang/kk.js, грузится только по явному выбору.
   Версия файла берётся из ?v= самого script.js. */
const ASSET_V = (function(){
  try{ return new URL(document.currentScript.src).searchParams.get('v') || ''; }catch(e){ return ''; }
})();
let kkLoading = null;
function loadKK(){
  if(window.SITE_KK) return Promise.resolve();
  if(!kkLoading) kkLoading = new Promise(function(res, rej){
    const sc = document.createElement('script');
    sc.src = 'assets/lang/kk.js' + (ASSET_V ? '?v=' + ASSET_V : '');
    sc.onload = res;
    sc.onerror = function(){ kkLoading = null; rej(); };
    document.head.appendChild(sc);
  });
  return kkLoading;
}

function setLang(l){
  if(l === 'kk' && !I18N.kk){
    loadKK().then(function(){ I18N.kk = window.SITE_KK.ui; setLang('kk'); }, function(){});
    return;
  }
  if(l !== 'ru' && !I18N[l]) l = 'ru';
  LANG = l;
  const d = l === 'ru' ? null : I18N[l];
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const k = el.dataset.i18n;
    const v = l === 'ru' ? RU[k] : d[k];
    if(v != null) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(function(el){
    const k = el.dataset.i18nPh;
    const v = l === 'ru' ? RUPH[k] : d[k];
    if(v != null) el.setAttribute('placeholder', v);
  });
  document.documentElement.lang = l;
  document.title = l === 'ru' ? META_RU['meta.title'] : d['meta.title'];
  document.querySelector('meta[name="description"]').setAttribute('content',
    l === 'ru' ? META_RU['meta.desc'] : d['meta.desc']);
  document.querySelectorAll('.lang button').forEach(function(b){
    const on = b.dataset.lang === l;
    b.classList.toggle('is-active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  try{ localStorage.setItem('ce-lang', l); }catch(e){}
  window.dispatchEvent(new Event('lang-change'));
}

document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.lang); });
});

(function initLang(){
  let l = null;
  try{ l = new URLSearchParams(location.search).get('lang'); }catch(e){}
  if(!l){ try{ l = localStorage.getItem('ce-lang'); }catch(e){} }
  if(l && l !== 'ru' && (I18N[l] || l === 'kk')) setLang(l);
})();

/* ---------- шапка, меню, прогресс ---------- */
const hdr = document.getElementById('hdr');
const prog = document.getElementById('prog');
function onScroll(){
  hdr.classList.toggle('scrolled', window.scrollY > 12);
  const h = document.documentElement.scrollHeight - window.innerHeight;
  prog.style.transform = 'scaleX(' + (h > 0 ? window.scrollY / h : 0) + ')';
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
function closeMenu(){
  document.body.classList.remove('menu-open');
  burger.setAttribute('aria-expanded','false');
}
burger.addEventListener('click', function(){
  const open = document.body.classList.toggle('menu-open');
  burger.setAttribute('aria-expanded', open ? 'true' : 'false');
});
nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeMenu); });

/* ---------- reveal + счётчики ---------- */
function runCounter(el){
  const target = parseInt(el.getAttribute('data-count'), 10);
  const t0 = performance.now();
  const dur = 1300;
  function step(t){
    const p = Math.min((t - t0) / dur, 1);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * e);
    if(p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

if(RM){
  document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
}else{
  const io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('[data-count]').forEach(runCounter);
      io.unobserve(en.target);
    });
  }, {threshold:.15, rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el, i){
    el.style.transitionDelay = (i % 4) * 70 + 'ms';
    io.observe(el);
  });
}

/* ---------- цех в работе: ролики грузим и играем только когда карточка видна ---------- */
(function(){
  const cards = document.querySelectorAll('.shop-card video');
  if(!cards.length) return;
  if(RM){                                   // при «уменьшить движение» - только постеры
    cards.forEach(function(v){ v.setAttribute('controls',''); v.src = v.dataset.src; });
    return;
  }
  const vio = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      const v = en.target;
      if(en.isIntersecting){
        if(!v.src) v.src = v.dataset.src;   // байты качаем только по факту показа
        const pr = v.play();
        if(pr && pr.catch) pr.catch(function(){});
      }else if(!v.paused){
        v.pause();
      }
    });
  }, {threshold:.45});
  cards.forEach(function(v){ vio.observe(v); });
})();

/* ---------- интро hero ---------- */
window.addEventListener('load', function(){
  document.documentElement.classList.add('is-loaded');
});
setTimeout(function(){ document.documentElement.classList.add('is-loaded'); }, 900);

/* ---------- CAD: авто-перелистывание 3D -> металл ---------- */
if(!RM){
  const cads = document.querySelectorAll('.cad-card');
  cads.forEach(function(card, i){
    setTimeout(function(){
      setInterval(function(){ card.classList.toggle('show-real'); }, 5200);
    }, 1400 + i * 1700);
  });
}

/* ---------- галерея работ ---------- */
const track = document.getElementById('wTrack');
if(track){
  const wPrev = document.getElementById('wPrev'), wNext = document.getElementById('wNext');
  const step = function(){ return Math.min(track.clientWidth * .8, 660); };
  const maxScroll = function(){ return track.scrollWidth - track.clientWidth; };

  // своя анимация: нативный scrollBy со smooth не едет, пока на треке scroll-snap mandatory
  let anim = 0;
  function slide(delta){
    const from = track.scrollLeft;
    const to = Math.max(0, Math.min(maxScroll(), from + delta));
    if(to === from) return;
    cancelAnimationFrame(anim);
    if(RM){ track.scrollLeft = to; updateArrows(); return; }
    const t0 = performance.now(), dur = 420;
    track.classList.add('sliding');           // снимаем snap, иначе он тянет назад
    (function frame(t){
      const p = Math.min(1, (t - t0) / dur);
      const e = p < .5 ? 2*p*p : 1 - Math.pow(-2*p + 2, 2)/2;
      track.scrollLeft = from + (to - from) * e;
      if(p < 1) anim = requestAnimationFrame(frame);
      else { track.classList.remove('sliding'); updateArrows(); }
    })(t0);
  }

  // край помечаем классом, а не disabled: если замер соврёт, кнопка всё равно живая
  function updateArrows(){
    const m = maxScroll();
    wPrev.classList.toggle('is-off', track.scrollLeft <= 1);
    wNext.classList.toggle('is-off', track.scrollLeft >= m - 1);
  }
  track.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  window.addEventListener('load', updateArrows);
  updateArrows();

  wPrev.addEventListener('click', function(){ slide(-step()); });
  wNext.addEventListener('click', function(){ slide(step()); });
  let down = false, sx = 0, sl = 0, moved = false;
  track.addEventListener('pointerdown', function(e){
    if(e.pointerType !== 'mouse') return;
    down = true; moved = false; sx = e.clientX; sl = track.scrollLeft;
  });
  window.addEventListener('pointermove', function(e){
    if(!down) return;
    const dx = e.clientX - sx;
    if(Math.abs(dx) > 4){ moved = true; track.classList.add('dragging'); }
    track.scrollLeft = sl - dx;
  });
  function endDrag(){ down = false; track.classList.remove('dragging'); }
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur', endDrag);
  track.addEventListener('click', function(e){ if(moved) e.preventDefault(); }, true);
}

/* ---------- пресет продукта из карточек ---------- */
const whatSelect = document.getElementById('whatSelect');
document.querySelectorAll('[data-product]').forEach(function(a){
  a.addEventListener('click', function(){
    if(whatSelect) whatSelect.value = a.getAttribute('data-product');
  });
});

/* ---------- форма: заявка письмом ---------- */
const form = document.getElementById('leadForm');
const thanks = document.getElementById('thanks');
if(form){
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const msg = (fd.get('msg') || '').toString().trim();
    const sel = whatSelect ? whatSelect.options[whatSelect.selectedIndex].textContent : '';
    const LF = {
      ru: {s:'Заявка с сайта CRANE ENGINEERING', n:'Имя', p:'Контакт', w:'Интересует', m:'Задача', f:'Отправлено с сайта CRANE ENGINEERING'},
      kk: window.SITE_KK && window.SITE_KK.form,
      en: {s:'Request from the CRANE ENGINEERING website', n:'Name', p:'Contact', w:'Interested in', m:'Task', f:'Sent from the CRANE ENGINEERING website'}
    };
    const L = LF[LANG] || LF.ru;
    const lines = [
      L.n + ': ' + name,
      L.p + ': ' + (phone || '-'),
      L.w + ': ' + sel,
      '',
      L.m + ': ' + (msg || '-'),
      '',
      L.f
    ];
    const subject = L.s + (name ? ' - ' + name : '');
    // конверсия Google Ads: отправка заявки формой
    if(typeof window.ceConversion === 'function') window.ceConversion('AW-18454552384/qgoOCJuFy_kcEMC-6N9E');
    location.href = 'mailto:' + EMAIL +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(lines.join('\n'));
    form.hidden = true;
    const side = document.querySelector('.form-side');
    if(side) side.hidden = true;
    thanks.hidden = false;
    thanks.scrollIntoView({behavior: RM ? 'auto' : 'smooth', block:'center'});
  });
  document.getElementById('againBtn').addEventListener('click', function(){
    thanks.hidden = true;
    form.hidden = false;
    const side = document.querySelector('.form-side');
    if(side) side.hidden = false;
  });
}
