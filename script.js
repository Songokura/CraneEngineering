/* CRANE ENGINEERING - script */
'use strict';

/* =====================================================================
   ТЕЛЕФОН КОМПАНИИ.
   TODO: подставить WhatsApp, когда клиент даст номер.
   Формат: только цифры с кодом страны, без плюса и пробелов.
   При непустом PHONE кнопки "Позвонить" и "WhatsApp" включаются сами.
===================================================================== */
const PHONE = '';
const EMAIL = 'crane.engineering@mail.ru';

const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- i18n ---------- */
const I18N = {
  kk: {
    'meta.title': 'CRANE ENGINEERING - Алматыда 0,5-200 т жүк көтергіш крандар мен жабдық',
    'meta.desc': 'Көпірлі, мосы және консольді крандар, кран-балкалар, грейферлер мен тальдар өндірісі. Металл өңдеу, монтаждау, техникалық тексеру және құжаттама. Бүкіл Қазақстан бойынша.',
    'nav.catalog': 'Каталог', 'nav.metal': 'Металл өңдеу', 'nav.services': 'Қызметтер',
    'nav.works': 'Жұмыстар', 'nav.contacts': 'Байланыс', 'nav.cta': 'Өтінім',
    'hero.kicker': 'АЛМАТЫ · ӨЗ ӨНДІРІСІМІЗ · БҮКІЛ ҚАЗАҚСТАН БОЙЫНША',
    'hero.h1a': 'ЖҮК КӨТЕРГІШ', 'hero.h1b': 'КРАНДАР', 'hero.h1c': '0,5-200 т',
    'hero.lead': 'Көпірлі, мосы және консольді крандар, кран-балкалар, тальдар мен грейферлер - сызбадан сынаққа дейін. Дайындау, монтаждау және тексеру - бүкіл Қазақстан бойынша.',
    'cta.calc': 'Құнын есептеу', 'cta.short': 'Құнын есептеу', 'hero.btn2': 'Өнім каталогы',
    'trust.l1': 'жыл кран жасаудағы инженерлік тәжірибе',
    'trust.u2': ' т', 'trust.l2': 'макс. жүк көтергіштік, 0,5 т-дан бастап',
    'trust.b3': '3D', 'trust.l3': 'тораптардың жобасын өзіміз жасаймыз',
    'trust.b4': 'ҚР', 'trust.l4': 'бүкіл ел бойынша жеткізу және монтаждау',
    'mq': 'КӨПІРЛІ КРАНДАР · ҚАШАТТЫ КРАНДАР · КРАН-БАЛКАЛАР · ГРЕЙФЕРЛЕР · ТАЛЬДАР МЕН ТЕЛЬФЕРЛЕР · ТРАВЕРСАЛАР · МЕТАЛЛ КОНСТРУКЦИЯЛАР · ',
    'mq2': 'КӨПІРЛІ КРАНДАР · ҚАШАТТЫ КРАНДАР · КРАН-БАЛКАЛАР · ГРЕЙФЕРЛЕР · ТАЛЬДАР МЕН ТЕЛЬФЕРЛЕР · ТРАВЕРСАЛАР · МЕТАЛЛ КОНСТРУКЦИЯЛАР · ',
    'cat.h2': 'Өнім каталогы',
    'cat.lead': 'Аралығыңызға, тоннажға және жұмыс режиміне сай крандар мен жүк қармау құрылғылары. Бағасы - техникалық тапсырма бойынша.',
    'c1.t': 'Көпірлі крандар', 'c1.d': 'Бір және екі арқалықты, тіреуішті және аспалы',
    'c2.t': 'Мосы крандар', 'c2.d': 'Ашық алаңдарға, қоймалар мен полигондарға',
    'c3.t': 'Консольді крандар', 'c3.d': 'Бағаналы және қабырғалық - жұмыс орындарына',
    'c4.t': 'Кран-балкалар', 'c4.d': 'Цехтар мен шеберханаларға жеңіл шешім',
    'c5.t': 'Грейферлер', 'c5.d': 'Арқанды және моторлы, екі және көп жақты',
    'c6.t': 'Тальдар мен тельферлер', 'c6.d': 'Электрлік арқанды және шынжырлы',
    'c7.t': 'Траверсалар', 'c7.d': 'Кез келген жүк пішініне - тапсырмаңыз бойынша',
    'c7.badge': 'өз цехымыздан видео',
    'c8.t': 'Бейстандарт тапсырма ма?', 'c8.d': 'Сызбаңыз бойынша жасаймыз немесе нөлден жобалаймыз',
    'c8.btn': 'Тапсырманы талқылау',
    'comp.h3': 'Кран жинақтауыштары',
    'comp.lead': 'Тораптарды өзіміз жасаймыз - дайындамадан дайын бөлшекке дейін',
    'comp.i1': 'Арқан барабандары', 'comp.i2': 'Кран дөңгелектері', 'comp.i3': 'Кран арбашалары',
    'comp.i4': 'Жүкшығырлар', 'comp.i5': 'Редукторлар', 'comp.i6': 'Арқан блоктары',
    'met.h2': 'Металл өңдеу және өндіріс',
    'met.lead': 'Станок паркі мен дәнекерлеу - өз инженерлеріміздің бақылауында. Бөлшек - дәл сызба бойынша.',
    'm1.t': 'Токарлық жұмыстар', 'm1.d': 'біліктер, осьтер, барабандар, дөңгелектер',
    'm2.t': 'Фрезерлік жұмыстар', 'm2.d': 'ойықтар, шпонкалар, отырғызу беттері',
    'm3.t': 'Плазмалық кесу', 'm3.d': 'парақ металды сызба бойынша пішу',
    'm4.t': 'Металл ию', 'm4.d': 'парақ пен профильді қажет пішінге келтіру',
    'm5.t': 'Дәнекерлеу жұмыстары', 'm5.d': 'көтергіш металл конструкциялар мен тораптар',
    'm6.t': 'Сызба бойынша бөлшектер', 'm6.d': 'жеке және сериялық партиялар',
    'met.vcap': 'Траверса дәнекерлеу - өз цехымыздан кадр',
    'met.pcap': 'Кран дөңгелегін жону',
    'svc.h2': 'Инжиниринг және сервис',
    'svc.lead': 'Кранға қатысты бәрін мойнымызға аламыз: есептен іске қосуға дейін.',
    's1.t': 'Монтаждау және іске қосып-баптау', 's1.d': 'Нысаныңызда кранды монтаждау, сынау және тапсыру',
    's2.t': 'Жөндеу және жаңғырту', 's2.d': 'Тораптарды жөндеу және жұмыстағы крандарды жаңғырту',
    's3.t': 'Техникалық тексеру', 's3.d': 'Жүк көтергіш механизмдерді тексеру, қорытынды беру',
    's4.t': 'Техникалық құжаттама', 's4.d': 'Кран паспорты, телнұсқа, нұсқаулық, ақау ведомосы',
    's5.t': 'Есептер мен сызбалар', 's5.d': 'Металл конструкциялар есебі және жұмыс сызбалары',
    'cad.h2': 'Алдымен 3D модель - содан кейін металл',
    'cad.lead': 'Әр торап алдымен CAD-модельде, содан кейін цехта құрастырылады. Карточкаға меңзеңіз.',
    'cad.tag3d': '3D-модель', 'cad.tagreal': 'металда',
    'cad.i1': 'Жүкшығыр', 'cad.i2': 'Редуктор', 'cad.i3': 'Кран арбашасы',
    'works.h2': 'Орындалған жұмыстар',
    'works.lead': 'Өз өндірісіміздің нақты нысандары мен бұйымдары - сток фото жоқ.',
    'w1': 'Мосы кранды монтаждау', 'w2': 'Цех ауласындағы мосы кран',
    'w3': 'Жылжымалы шағын кран', 'w5': 'Көп жақты грейфер',
    'w6': 'Ойық кесілген арқан барабандары', 'w7': 'Тот баспайтын болат барабандар',
    'w9': 'Кран дөңгелектерінің партиясы', 'w10': 'Арқанды грейфер',
    'why.h2': 'Неліктен CRANE ENGINEERING',
    'y1': 'Кран жасауда 10+ жыл зауыттық тәжірибесі бар инженерлер',
    'y2': 'Жинақтауыштарды өзіміз жасаймыз: барабандар, дөңгелектер, редукторлар',
    'y3': 'Толық цикл: есеп, сызба, металл, монтаждау, сынақ',
    'y4': 'Құжаттама түгел: паспорт, нұсқаулықтар, ведомостар',
    'y5': 'Бүкіл Қазақстан бойынша жеткізу және монтаждау',
    'form.h2': 'Құн есебін алыңыз',
    'form.lead': 'Тапсырманы сипаттаңыз - ұсынысты техникалық тапсырмаңыз бойынша дайындап, поштаға жібереміз.',
    'form.direct': 'Немесе тікелей жазыңыз:',
    'f.name': 'Есіміңіз', 'f.nameph': 'Сізге қалай жүгінеміз',
    'f.phone': 'Телефон немесе WhatsApp', 'f.phoneph': 'Жауап беруіміз үшін',
    'f.what': 'Не қажет',
    'opt.bridge': 'Көпірлі кран', 'opt.gantry': 'Мосы кран', 'opt.jib': 'Консольді кран',
    'opt.beam': 'Кран-балка', 'opt.grab': 'Грейфер', 'opt.hoist': 'Таль / тельфер',
    'opt.traverse': 'Траверса', 'opt.parts': 'Жинақтауыштар', 'opt.metal': 'Металл өңдеу',
    'opt.service': 'Монтаждау, жөндеу, тексеру', 'opt.other': 'Басқа',
    'f.msg': 'Тапсырма', 'f.msgph': 'Аралық, тоннаж, жұмыс режимі - білгеніңіздің бәрі',
    'f.send': 'Өтінім жіберу',
    'f.note': 'Өтінім crane.engineering@mail.ru поштасына хат болып ашылады - поштада «Жіберу» батырмасын басыңыз.',
    'f.thh': 'Рахмет! Өтінім дайын',
    'f.thp': 'Хат поштаңызда ашылды - жіберіңіз, жұмыс уақытында жауап береміз.',
    'f.again': 'Қайта толтыру',
    'ct.h2': 'Байланыс', 'ct.city': 'Алматы · бүкіл Қазақстан бойынша жұмыс істейміз',
    'ct.maillab': 'Пошта', 'ct.hourslab': 'Жұмыс кестесі',
    'ct.hours': 'Дс-Жм 09:00-18:00 · Сб, Жс - демалыс',
    'ct.phonelab': 'Телефон', 'ct.call': 'Қоңырау шалу',
    'ct.soon': 'нөмір жақында пайда болады', 'ct.soon2': 'нөмір жақында пайда болады',
    'ct.mappin': 'Алматы',
    'ft.tag': 'Крандар мен жүк көтергіш жабдық · Алматы',
    'soon': 'жақында', 'soon2': 'жақында', 'mb.mail': 'Пошта', 'mb.req': 'Өтінім'
  },
  en: {
    'meta.title': 'CRANE ENGINEERING - overhead and gantry cranes 0.5-200 t, Almaty',
    'meta.desc': 'Manufacturing of overhead, gantry and jib cranes, hoists, grabs and lifting beams. Metalworking, installation, inspection and documentation across Kazakhstan.',
    'nav.catalog': 'Catalog', 'nav.metal': 'Metalworking', 'nav.services': 'Services',
    'nav.works': 'Our work', 'nav.contacts': 'Contacts', 'nav.cta': 'Request',
    'hero.kicker': 'ALMATY · IN-HOUSE PRODUCTION · ALL OVER KAZAKHSTAN',
    'hero.h1a': 'OVERHEAD AND GANTRY', 'hero.h1b': 'CRANES', 'hero.h1c': '0.5-200 t',
    'hero.lead': 'Overhead, gantry and jib cranes, hoists and grabs - from drawing to load tests. Manufacturing, installation and inspection across Kazakhstan.',
    'cta.calc': 'Get a quote', 'cta.short': 'Get a quote', 'hero.btn2': 'Product catalog',
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
    'c7.badge': 'live video from our shop',
    'c8.t': 'A custom task?', 'c8.d': 'We build to your drawings or design from scratch',
    'c8.btn': 'Discuss the task',
    'comp.h3': 'Crane components',
    'comp.lead': 'We machine every unit in house, from raw stock to finished part',
    'comp.i1': 'Rope drums', 'comp.i2': 'Crane wheels', 'comp.i3': 'Crane trolleys',
    'comp.i4': 'Winches', 'comp.i5': 'Gearboxes', 'comp.i6': 'Rope sheaves',
    'met.h2': 'Metalworking and production',
    'met.lead': 'Machining and welding controlled by our engineers. Every part matches the drawing.',
    'm1.t': 'Turning', 'm1.d': 'shafts, axles, drums, wheels',
    'm2.t': 'Milling', 'm2.d': 'slots, keyways, mounting faces',
    'm3.t': 'Plasma cutting', 'm3.d': 'sheet cutting to your drawings',
    'm4.t': 'Bending', 'm4.d': 'sheet and profile shaped to spec',
    'm5.t': 'Welding', 'm5.d': 'load bearing structures and assemblies',
    'm6.t': 'Parts to drawings', 'm6.d': 'one off and batch production',
    'met.vcap': 'Welding a lifting beam - our shop, unstaged',
    'met.pcap': 'Machining a crane wheel',
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
    'works.h2': 'Our work',
    'works.lead': 'Real projects and products of our own making, no stock photos.',
    'w1': 'Gantry crane installation', 'w2': 'Gantry crane in the yard',
    'w3': 'Mobile mini gantry', 'w5': 'Multi jaw grab',
    'w6': 'Grooved rope drums', 'w7': 'Stainless steel drums',
    'w9': 'A batch of crane wheels', 'w10': 'Rope grab',
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
    'ct.phonelab': 'Phone', 'ct.call': 'Call us',
    'ct.soon': 'number coming soon', 'ct.soon2': 'number coming soon',
    'ct.mappin': 'Almaty',
    'ft.tag': 'Cranes and lifting equipment · Almaty',
    'soon': 'soon', 'soon2': 'soon', 'mb.mail': 'Email', 'mb.req': 'Request'
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

function setLang(l){
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
}

document.querySelectorAll('.lang button').forEach(function(b){
  b.addEventListener('click', function(){ setLang(b.dataset.lang); });
});

(function initLang(){
  let l = null;
  try{ l = new URLSearchParams(location.search).get('lang'); }catch(e){}
  if(!l){ try{ l = localStorage.getItem('ce-lang'); }catch(e){} }
  if(l && l !== 'ru' && I18N[l]) setLang(l);
})();

/* ---------- телефонные кнопки ---------- */
function applyPhone(){
  if(!PHONE) return;
  document.querySelectorAll('[data-need-phone]').forEach(function(el){
    el.disabled = false;
    el.removeAttribute('aria-disabled');
    el.classList.remove('is-off');
    const soon = el.parentElement ? el.parentElement.querySelector('.soon') : null;
    if(soon) soon.hidden = true;
    const sub = el.querySelector('i');
    if(sub) sub.textContent = el.getAttribute('data-need-phone') === 'wa' ? 'WhatsApp' : 'Tel';
    el.addEventListener('click', function(){
      if(el.getAttribute('data-need-phone') === 'wa'){
        window.open('https://wa.me/' + PHONE, '_blank');
      }else{
        location.href = 'tel:+' + PHONE;
      }
    });
  });
}
applyPhone();

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
  const step = function(){ return Math.min(track.clientWidth * .8, 660); };
  document.getElementById('wPrev').addEventListener('click', function(){
    track.scrollBy({left:-step(), behavior: RM ? 'auto' : 'smooth'});
  });
  document.getElementById('wNext').addEventListener('click', function(){
    track.scrollBy({left:step(), behavior: RM ? 'auto' : 'smooth'});
  });
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
  window.addEventListener('pointerup', function(){
    down = false;
    track.classList.remove('dragging');
  });
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
    const L = {
      ru: {s:'Заявка с сайта CRANE ENGINEERING', n:'Имя', p:'Контакт', w:'Интересует', m:'Задача', f:'Отправлено с сайта CRANE ENGINEERING'},
      kk: {s:'CRANE ENGINEERING сайтынан өтінім', n:'Есімі', p:'Байланыс', w:'Қажеті', m:'Тапсырма', f:'CRANE ENGINEERING сайтынан жіберілді'},
      en: {s:'Request from the CRANE ENGINEERING website', n:'Name', p:'Contact', w:'Interested in', m:'Task', f:'Sent from the CRANE ENGINEERING website'}
    }[LANG];
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
