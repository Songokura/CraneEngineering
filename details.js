/* CRANE ENGINEERING - разделы каталога и металлообработки (модальные карточки) */
'use strict';

/* ---------- схемы исполнений (единый стиль: жёлтая несущая, стальная обвязка) ---------- */
const SCH = {
  // мостовые
  bridgeSingle: '<svg viewBox="0 0 120 70"><path d="M8 14h104" class="s-rail"/><rect x="18" y="20" width="84" height="7" class="s-beam"/><path d="M18 20v-6h10v6M92 20v-6h10v6" class="s-steel"/><path d="M60 27v14" class="s-line"/><path d="M54 41h12v7H54z" class="s-steel-f"/><path d="M60 48v6" class="s-line"/><path d="M60 54a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  bridgeDouble: '<svg viewBox="0 0 120 70"><path d="M8 14h104" class="s-rail"/><rect x="18" y="19" width="84" height="6" class="s-beam"/><rect x="18" y="31" width="84" height="6" class="s-beam"/><path d="M18 19v-5h10v5M92 19v-5h10v5" class="s-steel"/><rect x="50" y="15" width="20" height="8" class="s-steel-f"/><path d="M60 37v8" class="s-line"/><path d="M54 45h12v7H54z" class="s-steel-f"/><path d="M60 52v4" class="s-line"/><path d="M60 56a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  bridgeSusp: '<svg viewBox="0 0 120 70"><path d="M8 10h104" class="s-rail"/><path d="M24 10v8M96 10v8" class="s-steel"/><rect x="18" y="18" width="84" height="7" class="s-beam"/><path d="M60 25v12" class="s-line"/><path d="M54 37h12v7H54z" class="s-steel-f"/><path d="M60 44v6" class="s-line"/><path d="M60 50a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  // козловые
  gantryPlain: '<svg viewBox="0 0 120 70"><rect x="20" y="14" width="80" height="7" class="s-beam"/><path d="M26 21 20 58M94 21l6 37M8 58h104" class="s-steel"/><path d="M60 21v12" class="s-line"/><path d="M54 33h12v7H54z" class="s-steel-f"/><path d="M60 40v6" class="s-line"/><path d="M60 46a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  gantryOne: '<svg viewBox="0 0 120 70"><rect x="8" y="14" width="92" height="7" class="s-beam"/><path d="M34 21 28 58M94 21l6 37M8 58h104" class="s-steel"/><path d="M22 21v10" class="s-line"/><path d="M16 31h12v7H16z" class="s-steel-f"/><path d="M22 38v5" class="s-line"/><path d="M22 43a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  gantryTwo: '<svg viewBox="0 0 120 70"><rect x="6" y="14" width="108" height="7" class="s-beam"/><path d="M38 21 32 58M82 21l6 37M8 58h104" class="s-steel"/><path d="M60 21v12" class="s-line"/><path d="M54 33h12v7H54z" class="s-steel-f"/><path d="M60 40v6" class="s-line"/><path d="M60 46a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  gantryMini: '<svg viewBox="0 0 120 70"><rect x="34" y="20" width="52" height="6" class="s-beam"/><path d="M40 26 36 54M80 26l4 28" class="s-steel"/><circle cx="35" cy="57" r="4" class="s-steel"/><circle cx="85" cy="57" r="4" class="s-steel"/><path d="M60 26v10" class="s-line"/><path d="M55 36h10v6H55z" class="s-steel-f"/><path d="M60 42v5" class="s-line"/><path d="M60 47a3 3 0 1 0 3 3" class="s-hook"/></svg>',
  // консольные
  jibColumn: '<svg viewBox="0 0 120 70"><rect x="26" y="12" width="9" height="46" class="s-steel-f"/><rect x="30" y="14" width="66" height="6" class="s-beam"/><path d="M32 34 60 20" class="s-steel"/><path d="M84 20v12" class="s-line"/><path d="M79 32h10v6H79z" class="s-steel-f"/><path d="M84 38v6" class="s-line"/><path d="M84 44a4 4 0 1 0 4 4" class="s-hook"/><path d="M16 58h32" class="s-rail"/></svg>',
  jibWall: '<svg viewBox="0 0 120 70"><path d="M18 8v54" class="s-rail"/><rect x="22" y="16" width="72" height="6" class="s-beam"/><path d="M22 40 52 22" class="s-steel"/><path d="M82 22v12" class="s-line"/><path d="M77 34h10v6H77z" class="s-steel-f"/><path d="M82 40v6" class="s-line"/><path d="M82 46a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  jibMobile: '<svg viewBox="0 0 120 70"><rect x="36" y="16" width="9" height="38" class="s-steel-f"/><rect x="40" y="18" width="52" height="6" class="s-beam"/><path d="M42 36 66 24" class="s-steel"/><path d="M82 24v10" class="s-line"/><path d="M77 34h10v6H77z" class="s-steel-f"/><path d="M82 40v5" class="s-line"/><path d="M82 45a4 4 0 1 0 4 4" class="s-hook"/><rect x="26" y="54" width="30" height="5" class="s-steel"/><circle cx="32" cy="62" r="4" class="s-steel"/><circle cx="50" cy="62" r="4" class="s-steel"/></svg>',
  // кран-балки
  beamSupport: '<svg viewBox="0 0 120 70"><path d="M10 18h100" class="s-rail"/><rect x="20" y="24" width="80" height="6" class="s-beam"/><path d="M20 24v-6h8v6M92 24v-6h8v6" class="s-steel"/><path d="M60 30v10" class="s-line"/><path d="M54 40h12v7H54z" class="s-steel-f"/><path d="M60 47v6" class="s-line"/><path d="M60 53a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  beamSusp: '<svg viewBox="0 0 120 70"><path d="M10 12h100" class="s-rail"/><path d="M28 12v8M92 12v8" class="s-steel"/><rect x="20" y="20" width="80" height="6" class="s-beam"/><path d="M60 26v12" class="s-line"/><path d="M54 38h12v7H54z" class="s-steel-f"/><path d="M60 45v6" class="s-line"/><path d="M60 51a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  beamManual: '<svg viewBox="0 0 120 70"><rect x="20" y="20" width="80" height="6" class="s-beam"/><path d="M20 20v-6h8v6M92 20v-6h8v6" class="s-steel"/><path d="M60 26v8" class="s-line"/><path d="M55 34h10v6H55z" class="s-steel-f"/><path d="M64 40v14" class="s-chain"/><path d="M60 40v6" class="s-line"/><path d="M60 46a4 4 0 1 0 4 4" class="s-hook"/></svg>',
  beamDouble: '<svg viewBox="0 0 120 70"><path d="M10 18h100" class="s-rail"/><rect x="20" y="24" width="80" height="6" class="s-beam"/><path d="M20 24v-6h8v6M92 24v-6h8v6" class="s-steel"/><path d="M40 30v10M80 30v10" class="s-line"/><path d="M34 40h12v7H34zM74 40h12v7H74z" class="s-steel-f"/><path d="M40 47v5M80 47v5" class="s-line"/><path d="M40 52a3 3 0 1 0 3 3M80 52a3 3 0 1 0 3 3" class="s-hook"/></svg>'
};

/* ---------- данные разделов ---------- */
const DETAILS = {
  /* ===== КРАНЫ ===== */
  bridge: {
    hero: 'assets/crane-bridge-double.webp',
    ru: { t: 'Мостовые краны', lead: 'Основной кран цеха: перекрывает пролёт целиком и работает по всей площади под ним.' },
    kk: { t: 'Көпірлі крандар', lead: 'Цехтың негізгі краны: аралықты толық жауып, астындағы бүкіл алаңда жұмыс істейді.' },
    en: { t: 'Overhead cranes', lead: 'The main crane of a workshop: spans the full bay and works across the whole area below.' },
    variants: [
      { s: SCH.bridgeSingle, ru: ['Однобалочный опорный', 'до 20 т, ходит по подкрановым путям'], kk: ['Бір арқалықты тіреуішті', '20 т-ға дейін, кран асты жолымен жүреді'], en: ['Single-girder, top-running', 'up to 20 t, runs on runway rails'] },
      { s: SCH.bridgeDouble, ru: ['Двухбалочный опорный', 'до 200 т, большая высота подъёма'], kk: ['Екі арқалықты тіреуішті', '200 т-ға дейін, көтеру биіктігі жоғары'], en: ['Double-girder, top-running', 'up to 200 t, greater lifting height'] },
      { s: SCH.bridgeSusp, ru: ['Подвесной', 'крепится к фермам, экономит высоту'], kk: ['Аспалы', 'фермаға бекітіледі, биіктікті үнемдейді'], en: ['Underhung', 'fixed to roof trusses, saves headroom'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-200 т'], ['Пролёт', '4,5-34 м'], ['Высота подъёма', 'до 30 м'], ['Режим работы', 'А3-А6'], ['Управление', 'с пола, радио, из кабины']],
      kk: [['Жүк көтергіштік', '0,5-200 т'], ['Аралық', '4,5-34 м'], ['Көтеру биіктігі', '30 м дейін'], ['Жұмыс режимі', 'А3-А6'], ['Басқару', 'еденнен, радио, кабинадан']],
      en: [['Capacity', '0.5-200 t'], ['Span', '4.5-34 m'], ['Lifting height', 'up to 30 m'], ['Duty class', 'A3-A6'], ['Control', 'floor, radio, cabin']]
    },
    photos: [
      { src: 'assets/crane-bridge-double.webp', ru: 'Двухбалочный кран в пролёте цеха', kk: 'Цех аралығындағы екі арқалықты кран', en: 'Double-girder crane in a workshop bay' },
      { src: 'assets/shop-hall-2.webp', ru: 'Подкрановые пути по всей длине цеха', kk: 'Цехтың бүкіл ұзындығындағы кран асты жолдары', en: 'Runway rails along the full bay' },
      { src: 'assets/hook-load.webp', ru: 'Крюковая обойма над рабочей зоной', kk: 'Жұмыс аймағының үстіндегі ілмек блогы', en: 'Hook block over the working area' },
      { src: 'assets/crane-hall-orange.webp', ru: 'Кран над участком металлоконструкций', kk: 'Металл конструкциялар учаскесінің үстіндегі кран', en: 'Crane over the steel fabrication area' }
    ]
  },
  gantry: {
    hero: 'assets/crane-gantry-yard.webp',
    ru: { t: 'Козловые краны', lead: 'Работают там, где нет здания: склады под открытым небом, полигоны, контейнерные площадки.' },
    kk: { t: 'Мосы крандар', lead: 'Ғимарат жоқ жерде жұмыс істейді: ашық аспан астындағы қоймалар, полигондар, контейнер алаңдары.' },
    en: { t: 'Gantry cranes', lead: 'For sites without a building: open storage yards, laydown areas, container terminals.' },
    variants: [
      { s: SCH.gantryPlain, ru: ['Бесконсольный', 'вся зона работы между опорами'], kk: ['Консольсіз', 'жұмыс аймағы толығымен тіректер арасында'], en: ['Without cantilevers', 'the whole work area sits between the legs'] },
      { s: SCH.gantryOne, ru: ['Одноконсольный', 'вылет за опору с одной стороны'], kk: ['Бір консольді', 'бір жағында тіректен шығыңқы'], en: ['Single cantilever', 'reach beyond the leg on one side'] },
      { s: SCH.gantryTwo, ru: ['Двухконсольный', 'вылет с обеих сторон, шире зона'], kk: ['Екі консольді', 'екі жағында да шығыңқы, аймақ кеңірек'], en: ['Double cantilever', 'reach on both sides, wider coverage'] },
      { s: SCH.gantryMini, ru: ['Мини и передвижные', 'лёгкие, перевозятся между площадками'], kk: ['Шағын және жылжымалы', 'жеңіл, алаңдар арасында тасымалданады'], en: ['Mini and portable', 'light, moved between sites'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-50 т'], ['Пролёт', '8-40 м'], ['Вылет консоли', 'до 8 м'], ['Высота подъёма', 'до 16 м'], ['Исполнение', 'уличное, до -40 °C']],
      kk: [['Жүк көтергіштік', '1-50 т'], ['Аралық', '8-40 м'], ['Консоль ұзындығы', '8 м дейін'], ['Көтеру биіктігі', '16 м дейін'], ['Орындалуы', 'далалық, -40 °C дейін']],
      en: [['Capacity', '1-50 t'], ['Span', '8-40 m'], ['Cantilever', 'up to 8 m'], ['Lifting height', 'up to 16 m'], ['Design', 'outdoor, down to -40 °C']]
    },
    photos: [
      { src: 'assets/crane-gantry-yard.webp', ru: 'Козловой кран на контейнерной площадке', kk: 'Контейнер алаңындағы мосы кран', en: 'Gantry crane at a container yard' },
      { src: 'assets/crane-gantry-outdoor.webp', ru: 'Монтаж козлового крана на объекте', kk: 'Нысанда мосы кранды монтаждау', en: 'Gantry crane erection on site' },
      { src: 'assets/crane-gantry-blue.webp', ru: 'Козловой кран во дворе цеха', kk: 'Цех ауласындағы мосы кран', en: 'Gantry crane in a workshop yard' },
      { src: 'assets/crane-gantry-mobile.webp', ru: 'Передвижной мини-козловой кран', kk: 'Жылжымалы шағын мосы кран', en: 'Portable mini gantry crane' }
    ]
  },
  jib: {
    hero: 'assets/shop-hall-1.webp',
    ru: { t: 'Консольные краны', lead: 'Кран одного рабочего места: станок, сварочный пост, участок сборки. Ставится без перестройки цеха.' },
    kk: { t: 'Консольді крандар', lead: 'Бір жұмыс орнының краны: станок, дәнекерлеу посты, құрастыру учаскесі. Цехты қайта құрмай орнатылады.' },
    en: { t: 'Jib cranes', lead: 'A crane for one workstation: a machine, a welding bay, an assembly spot. Installed without rebuilding the shop.' },
    variants: [
      { s: SCH.jibColumn, ru: ['На колонне', 'поворот 180° или 360°'], kk: ['Бағанада', '180° немесе 360° бұрылыс'], en: ['Column-mounted', '180° or 360° slew'] },
      { s: SCH.jibWall, ru: ['Настенный', 'крепится к колонне здания'], kk: ['Қабырғалық', 'ғимарат бағанасына бекітіледі'], en: ['Wall-mounted', 'fixed to a building column'] },
      { s: SCH.jibMobile, ru: ['Передвижной', 'на тележке, без фундамента'], kk: ['Жылжымалы', 'арбашада, іргетассыз'], en: ['Portable', 'on a base frame, no foundation'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-5 т'], ['Вылет стрелы', '2-8 м'], ['Угол поворота', '180° / 270° / 360°'], ['Привод', 'ручной или электрический'], ['Монтаж', 'на фундамент или к колонне']],
      kk: [['Жүк көтергіштік', '0,25-5 т'], ['Стрела ұзындығы', '2-8 м'], ['Бұрылу бұрышы', '180° / 270° / 360°'], ['Жетек', 'қолмен немесе электрлі'], ['Монтаждау', 'іргетасқа немесе бағанаға']],
      en: [['Capacity', '0.25-5 t'], ['Jib reach', '2-8 m'], ['Slew angle', '180° / 270° / 360°'], ['Drive', 'manual or electric'], ['Mounting', 'foundation or building column']]
    },
    photos: [
      { src: 'assets/shop-hall-1.webp', ru: 'Рабочий пост под подъёмным оборудованием', kk: 'Көтергіш жабдық астындағы жұмыс посты', en: 'Workstation under lifting equipment' },
      { src: 'assets/hook-chains.webp', ru: 'Подвес с крюком на рабочем участке', kk: 'Жұмыс учаскесіндегі ілмекті аспа', en: 'Hook suspension at a work area' },
      { src: 'assets/shop-steel.webp', ru: 'Сборка металлоконструкций у поста', kk: 'Пост жанындағы металл конструкцияларды құрастыру', en: 'Steel assembly next to a workstation' }
    ]
  },
  beam: {
    hero: 'assets/crane-beam-single.webp',
    ru: { t: 'Кран-балки', lead: 'Лёгкий кран для цеха и мастерской: одна балка, таль, простая электрика.' },
    kk: { t: 'Кран-балкалар', lead: 'Цех пен шеберханаға арналған жеңіл кран: бір арқалық, таль, қарапайым электрика.' },
    en: { t: 'Beam cranes', lead: 'A light crane for shops and workshops: one girder, a hoist, simple wiring.' },
    variants: [
      { s: SCH.beamSupport, ru: ['Опорная', 'катится по подкрановым путям'], kk: ['Тіреуішті', 'кран асты жолымен домалайды'], en: ['Top-running', 'rolls along runway rails'] },
      { s: SCH.beamSusp, ru: ['Подвесная', 'подвешена к перекрытию'], kk: ['Аспалы', 'жабынға ілінеді'], en: ['Underhung', 'suspended from the roof structure'] },
      { s: SCH.beamManual, ru: ['Ручная', 'без электрики, до 5 т'], kk: ['Қолмен басқарылатын', 'электрикасыз, 5 т дейін'], en: ['Manual', 'no wiring, up to 5 t'] },
      { s: SCH.beamDouble, ru: ['С двумя талями', 'для длинномерных грузов'], kk: ['Екі тальді', 'ұзын жүктерге'], en: ['Twin hoist', 'for long loads'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-10 т'], ['Пролёт', '3-16 м'], ['Высота подъёма', 'до 12 м'], ['Скорость подъёма', '4 / 8 м/мин'], ['Управление', 'пульт с пола или радио']],
      kk: [['Жүк көтергіштік', '0,5-10 т'], ['Аралық', '3-16 м'], ['Көтеру биіктігі', '12 м дейін'], ['Көтеру жылдамдығы', '4 / 8 м/мин'], ['Басқару', 'еденнен пульт немесе радио']],
      en: [['Capacity', '0.5-10 t'], ['Span', '3-16 m'], ['Lifting height', 'up to 12 m'], ['Hoisting speed', '4 / 8 m/min'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/crane-beam-single.webp', ru: 'Однобалочная опорная кран-балка с талью', kk: 'Тальді бір арқалықты тіреуішті кран-балка', en: 'Single-girder top-running beam crane with hoist' },
      { src: 'assets/crane-jib-shop.webp', ru: 'Подвесная кран-балка под перекрытием цеха', kk: 'Цех жабыны астындағы аспалы кран-балка', en: 'Underhung beam crane below the roof' },
      { src: 'assets/hoist-trolley.webp', ru: 'Таль на тележке в пролёте', kk: 'Аралықтағы арбашадағы таль', en: 'Trolley-mounted hoist in the bay' }
    ]
  },
  grab: {
    hero: 'assets/grab-on-crane.webp',
    ru: { t: 'Грейферы', lead: 'Захват для сыпучих грузов и лома - кран работает без стропальщика.' },
    kk: { t: 'Грейферлер', lead: 'Үйінді жүктер мен сынық металға арналған қармауыш - кран арқаншысыз жұмыс істейді.' },
    en: { t: 'Grabs', lead: 'A bucket for bulk material and scrap - the crane works without a slinger.' },
    variants: [
      { p: 'assets/grab-rope.webp', ru: ['Канатный двухчелюстной', 'работает от лебёдок крана'], kk: ['Арқанды екі жақты', 'кран жүкшығырларынан жұмыс істейді'], en: ['Rope-operated clamshell', 'driven by the crane winches'] },
      { p: 'assets/grab-multitine.webp', ru: ['Многочелюстной', 'лом, негабарит, порубочные остатки'], kk: ['Көп жақты', 'сынық, габаритсіз жүк, ағаш қалдықтары'], en: ['Multi-tine', 'scrap, oversized loads, timber waste'] },
      { p: 'assets/grab-on-crane.webp', ru: ['Моторный', 'своя гидростанция на грейфере'], kk: ['Моторлы', 'грейфердің өз гидростанциясы'], en: ['Motorised', 'own hydraulic unit on the grab'] }
    ],
    specs: {
      ru: [['Объём ковша', '0,3-5 м³'], ['Тип груза', 'песок, щебень, уголь, лом'], ['Число челюстей', '2-6'], ['Привод', 'канатный или гидравлический'], ['Подвес', 'под ваш кран или таль']],
      kk: [['Шөміш көлемі', '0,3-5 м³'], ['Жүк түрі', 'құм, щебень, көмір, сынық'], ['Жақ саны', '2-6'], ['Жетек', 'арқанды немесе гидравликалық'], ['Аспа', 'сіздің кранға немесе тальге']],
      en: [['Bucket volume', '0.3-5 m³'], ['Material', 'sand, gravel, coal, scrap'], ['Tines', '2-6'], ['Drive', 'rope or hydraulic'], ['Suspension', 'matched to your crane or hoist']]
    },
    photos: [
      { src: 'assets/grab-on-crane.webp', ru: 'Грейфер на мостовом кране', kk: 'Көпірлі крандағы грейфер', en: 'Grab on an overhead crane' },
      { src: 'assets/grab-multitine.webp', ru: 'Многочелюстной грейфер', kk: 'Көп жақты грейфер', en: 'Multi-tine grab' },
      { src: 'assets/grab-rope.webp', ru: 'Канатный двухчелюстной грейфер', kk: 'Арқанды екі жақты грейфер', en: 'Rope-operated clamshell grab' }
    ]
  },
  hoist: {
    hero: 'assets/hoist-yellow.webp',
    ru: { t: 'Тали и тельферы', lead: 'Механизм подъёма: ставится на кран-балку, консольный кран или отдельную балку.' },
    kk: { t: 'Тальдар мен тельферлер', lead: 'Көтеру механизмі: кран-балкаға, консольді кранға немесе жеке арқалыққа орнатылады.' },
    en: { t: 'Hoists', lead: 'The lifting unit itself: fitted to a beam crane, a jib crane or a standalone girder.' },
    variants: [
      { p: 'assets/hoist-yellow.webp', ru: ['Канатная электрическая', 'от 1 до 20 т, высокий ресурс'], kk: ['Электрлі арқанды', '1-ден 20 т-ға дейін, ресурсы жоғары'], en: ['Electric wire rope', '1 to 20 t, long service life'] },
      { p: 'assets/hoist-chain.webp', ru: ['Цепная электрическая', 'до 5 т, компактная'], kk: ['Электрлі шынжырлы', '5 т дейін, ықшам'], en: ['Electric chain', 'up to 5 t, compact'] },
      { p: 'assets/hoist-trolley.webp', ru: ['С передвижной тележкой', 'ход вдоль балки'], kk: ['Жылжымалы арбашалы', 'арқалық бойымен жүреді'], en: ['With travelling trolley', 'moves along the girder'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-20 т'], ['Высота подъёма', '6-36 м'], ['Скорость подъёма', '2 / 4 / 8 м/мин'], ['Режим работы', 'М3-М6'], ['Управление', 'пульт или радио']],
      kk: [['Жүк көтергіштік', '0,25-20 т'], ['Көтеру биіктігі', '6-36 м'], ['Көтеру жылдамдығы', '2 / 4 / 8 м/мин'], ['Жұмыс режимі', 'М3-М6'], ['Басқару', 'пульт немесе радио']],
      en: [['Capacity', '0.25-20 t'], ['Lifting height', '6-36 m'], ['Hoisting speed', '2 / 4 / 8 m/min'], ['Duty class', 'M3-M6'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/hoist-yellow.webp', ru: 'Электрическая таль на балке', kk: 'Арқалықтағы электрлі таль', en: 'Electric hoist on a girder' },
      { src: 'assets/hoist-chain.webp', ru: 'Цепная таль с пультом управления', kk: 'Басқару пульті бар шынжырлы таль', en: 'Chain hoist with pendant control' },
      { src: 'assets/hoist-trolley.webp', ru: 'Таль на передвижной тележке', kk: 'Жылжымалы арбашадағы таль', en: 'Hoist on a travelling trolley' }
    ]
  },
  traverse: {
    hero: 'assets/traverse-yellow.webp',
    ru: { t: 'Траверсы', lead: 'Захват под конкретный груз: держит длинномер и негабарит без перекоса и повреждений.' },
    kk: { t: 'Траверсалар', lead: 'Нақты жүкке арналған қармауыш: ұзын және габаритсіз жүкті қисайтпай, зақымдамай ұстайды.' },
    en: { t: 'Lifting beams', lead: 'A device built for one specific load: holds long and oversized items level and undamaged.' },
    variants: [
      { p: 'assets/traverse-yellow.webp', ru: ['Балочная линейная', 'длинномер, трубы, профиль'], kk: ['Сызықты арқалықты', 'ұзын жүк, құбырлар, профиль'], en: ['Straight beam', 'long stock, pipes, profiles'] },
      { p: 'assets/shop-steel.webp', ru: ['Под металлоконструкции', 'фермы, балки, панели'], kk: ['Металл конструкцияларға', 'фермалар, арқалықтар, панельдер'], en: ['For steel structures', 'trusses, girders, panels'] },
      { p: 'assets/weld-sparks.webp', ru: ['По вашему чертежу', 'считаем и варим под задачу'], kk: ['Сіздің сызбаңыз бойынша', 'тапсырмаға есептеп, дәнекерлейміз'], en: ['To your drawing', 'calculated and welded for the job'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-100 т'], ['Длина', 'по вашему ТЗ'], ['Тип захвата', 'крюки, скобы, струбцины, магнит'], ['Расчёт', 'проверка на прочность и устойчивость'], ['Документы', 'паспорт и схема строповки']],
      kk: [['Жүк көтергіштік', '1-100 т'], ['Ұзындығы', 'техникалық тапсырма бойынша'], ['Қармау түрі', 'ілмектер, қапсырмалар, струбциналар, магнит'], ['Есептеу', 'беріктік пен орнықтылыққа тексеру'], ['Құжаттар', 'паспорт және арқандау схемасы']],
      en: [['Capacity', '1-100 t'], ['Length', 'to your specification'], ['Attachment', 'hooks, shackles, clamps, magnet'], ['Engineering', 'strength and stability check'], ['Documents', 'data sheet and rigging diagram']]
    },
    photos: [
      { src: 'assets/traverse-yellow.webp', ru: 'Балочная траверса на крюке крана', kk: 'Кран ілмегіндегі арқалықты траверса', en: 'Lifting beam on the crane hook' },
      { src: 'assets/shop-steel.webp', ru: 'Подъём металлоконструкции', kk: 'Металл конструкцияны көтеру', en: 'Lifting a steel structure' }
    ],
    video: { src: 'assets/welding.mp4', poster: 'assets/welding-poster.webp', ru: 'Сварка траверсы - наш цех, без постановки', kk: 'Траверса дәнекерлеу - өз цехымыз, қойылымсыз', en: 'Welding a lifting beam - our shop, unstaged' }
  },

  /* ===== МЕТАЛЛООБРАБОТКА ===== */
  turning: {
    ru: { t: 'Токарные работы', lead: 'Тела вращения для кранов и не только: валы, оси, барабаны, крановые колёса.' },
    kk: { t: 'Токарлық жұмыстар', lead: 'Кранға және басқаға арналған айналу денелері: біліктер, осьтер, барабандар, кран дөңгелектері.' },
    en: { t: 'Turning', lead: 'Rotational parts for cranes and beyond: shafts, axles, drums, crane wheels.' },
    specs: {
      ru: [['Диаметр обработки', 'до 1000 мм'], ['Длина', 'до 3000 мм'], ['Материал', 'сталь, нержавейка, чугун, бронза'], ['Партия', 'от одной детали']],
      kk: [['Өңдеу диаметрі', '1000 мм дейін'], ['Ұзындығы', '3000 мм дейін'], ['Материал', 'болат, тот баспайтын болат, шойын, қола'], ['Партия', 'бір бөлшектен бастап']],
      en: [['Turning diameter', 'up to 1000 mm'], ['Length', 'up to 3000 mm'], ['Material', 'steel, stainless, cast iron, bronze'], ['Batch', 'from a single part']]
    },
    photos: [
      { src: 'assets/wheel-turning.webp', ru: 'Обточка кранового колеса', kk: 'Кран дөңгелегін жону', en: 'Machining a crane wheel' },
      { src: 'assets/drums-machined.webp', ru: 'Барабаны с нарезанными ручьями', kk: 'Ойығы кесілген барабандар', en: 'Drums with machined rope grooves' },
      { src: 'assets/lathe-shaft.webp', ru: 'Точение вала в патроне', kk: 'Патронда білікті жону', en: 'Turning a shaft in the chuck' },
      { src: 'assets/lathe-shop.webp', ru: 'Токарный участок', kk: 'Токарлық учаске', en: 'Turning section' },
      { src: 'assets/wheel-finished.webp', ru: 'Готовое крановое колесо', kk: 'Дайын кран дөңгелегі', en: 'Finished crane wheel' }
    ]
  },
  milling: {
    ru: { t: 'Фрезерные работы', lead: 'Пазы, шпоночные канавки, посадочные места и плоскости под сборку узла.' },
    kk: { t: 'Фрезерлік жұмыстар', lead: 'Ойықтар, шпонка қуыстары, отырғызу беттері мен торап құрастыруға арналған жазықтықтар.' },
    en: { t: 'Milling', lead: 'Slots, keyways, seats and mating faces for assembling the unit.' },
    specs: {
      ru: [['Размер стола', 'до 1600 × 500 мм'], ['Точность', 'до 0,05 мм'], ['Материал', 'сталь, чугун, цветные сплавы'], ['Работа', 'по чертежу или образцу']],
      kk: [['Үстел өлшемі', '1600 × 500 мм дейін'], ['Дәлдік', '0,05 мм дейін'], ['Материал', 'болат, шойын, түсті қорытпалар'], ['Жұмыс', 'сызба немесе үлгі бойынша']],
      en: [['Table size', 'up to 1600 × 500 mm'], ['Accuracy', 'to 0.05 mm'], ['Material', 'steel, cast iron, non-ferrous'], ['Input', 'drawing or sample part']]
    },
    photos: [
      { src: 'assets/mill-cutter.webp', ru: 'Торцевая фреза в работе', kk: 'Жұмыстағы шеткі фреза', en: 'Face mill in operation' },
      { src: 'assets/mill-head.webp', ru: 'Фрезерная головка над деталью', kk: 'Бөлшек үстіндегі фрезер басы', en: 'Milling head over the workpiece' },
      { src: 'assets/mill-chips.webp', ru: 'Обработка с подачей СОЖ', kk: 'СМС беріп өңдеу', en: 'Machining with coolant' }
    ]
  },
  plasma: {
    ru: { t: 'Плазменная резка', lead: 'Раскрой листа по вашим DXF: детали идут сразу в сборку без дополнительной подгонки.' },
    kk: { t: 'Плазмалық кесу', lead: 'DXF файлыңыз бойынша парақ металды пішу: бөлшектер қосымша өңдеусіз құрастыруға түседі.' },
    en: { t: 'Plasma cutting', lead: 'Sheet cut from your DXF: parts go straight to assembly with no extra fitting.' },
    specs: {
      ru: [['Толщина реза', 'до 40 мм'], ['Формат листа', 'до 1500 × 6000 мм'], ['Материал', 'сталь, нержавейка, алюминий'], ['Файлы', 'DXF, DWG или эскиз от руки']],
      kk: [['Кесу қалыңдығы', '40 мм дейін'], ['Парақ форматы', '1500 × 6000 мм дейін'], ['Материал', 'болат, тот баспайтын болат, алюминий'], ['Файлдар', 'DXF, DWG немесе қолмен салынған эскиз']],
      en: [['Cutting thickness', 'up to 40 mm'], ['Sheet size', 'up to 1500 × 6000 mm'], ['Material', 'steel, stainless, aluminium'], ['Files', 'DXF, DWG or a hand sketch']]
    },
    photos: [
      { src: 'assets/plasma-torch.webp', ru: 'Плазменный резак по листу', kk: 'Парақ металды кесетін плазмалық кескіш', en: 'Plasma torch cutting sheet' },
      { src: 'assets/plasma-sparks.webp', ru: 'Рез по стальному листу', kk: 'Болат парақты кесу', en: 'Cutting a steel plate' },
      { src: 'assets/plasma-cnc.webp', ru: 'Раскрой на портальном станке', kk: 'Портальды станокта пішу', en: 'Nesting on a gantry machine' }
    ]
  },
  welding: {
    ru: { t: 'Сварочные работы', lead: 'Несущие металлоконструкции и узлы кранов - варят аттестованные сварщики по нашим картам.' },
    kk: { t: 'Дәнекерлеу жұмыстары', lead: 'Көтергіш металл конструкциялар мен кран тораптарын аттестатталған дәнекерлеушілер біздің карталар бойынша дәнекерлейді.' },
    en: { t: 'Welding', lead: 'Load-bearing structures and crane assemblies, welded by certified welders to our procedures.' },
    specs: {
      ru: [['Способы', 'MIG/MAG, MMA, полуавтомат'], ['Металл', 'сталь, нержавейка, алюминий'], ['Толщина', '1-40 мм'], ['Контроль', 'визуальный, замер геометрии']],
      kk: [['Тәсілдер', 'MIG/MAG, MMA, жартылай автомат'], ['Металл', 'болат, тот баспайтын болат, алюминий'], ['Қалыңдығы', '1-40 мм'], ['Бақылау', 'көзбен шолу, геометрияны өлшеу']],
      en: [['Processes', 'MIG/MAG, MMA, semi-automatic'], ['Metal', 'steel, stainless, aluminium'], ['Thickness', '1-40 mm'], ['Control', 'visual check, geometry measurement']]
    },
    photos: [
      { src: 'assets/weld-sparks.webp', ru: 'Сварка профильной конструкции', kk: 'Профильді конструкцияны дәнекерлеу', en: 'Welding a profile structure' },
      { src: 'assets/weld-worker.webp', ru: 'Сварщик на сборочном участке', kk: 'Құрастыру учаскесіндегі дәнекерлеуші', en: 'Welder at the assembly area' },
      { src: 'assets/shop-steel.webp', ru: 'Сборка балок перед сваркой', kk: 'Дәнекерлеу алдында арқалықтарды құрастыру', en: 'Fitting girders before welding' }
    ],
    video: { src: 'assets/welding.mp4', poster: 'assets/welding-poster.webp', ru: 'Сварка траверсы - наш цех, без постановки', kk: 'Траверса дәнекерлеу - өз цехымыз, қойылымсыз', en: 'Welding a lifting beam - our shop, unstaged' }
  },
  bending: {
    ru: { t: 'Гибочные работы', lead: 'Лист и профиль под нужную геометрию: обечайки, косынки, короба, отбортовки.' },
    kk: { t: 'Ию жұмыстары', lead: 'Парақ пен профильді қажет пішінге келтіру: обечайкалар, косынкалар, қораптар, жиектеу.' },
    en: { t: 'Bending', lead: 'Sheet and profile to the required geometry: shells, gussets, boxes, flanges.' },
    specs: {
      ru: [['Длина гиба', 'до 3000 мм'], ['Толщина листа', 'до 12 мм'], ['Угол', 'по чертежу, с проверкой шаблоном'], ['Профиль', 'труба, уголок, полоса']],
      kk: [['Ию ұзындығы', '3000 мм дейін'], ['Парақ қалыңдығы', '12 мм дейін'], ['Бұрыш', 'сызба бойынша, шаблонмен тексеріліп'], ['Профиль', 'құбыр, бұрыштама, жолақ']],
      en: [['Bend length', 'up to 3000 mm'], ['Sheet thickness', 'up to 12 mm'], ['Angle', 'per drawing, template-checked'], ['Profile', 'tube, angle, flat bar']]
    },
    photos: [
      { src: 'assets/bend-press.webp', ru: 'Гибка листа на прессе', kk: 'Парақты престе ию', en: 'Sheet bending on a press brake' },
      { src: 'assets/bend-sheet.webp', ru: 'Формовка детали из листа', kk: 'Парақтан бөлшек қалыптау', en: 'Forming a part from sheet' },
      { src: 'assets/bend-profile.webp', ru: 'Гиб по разметке', kk: 'Белгі бойынша ию', en: 'Bending to the marked line' }
    ]
  },
  painting: {
    ru: { t: 'Малярные работы', lead: 'Пескоструй, грунт и финишное покрытие: кран уходит с объекта в цвете вашего ТЗ.' },
    kk: { t: 'Малярлық жұмыстар', lead: 'Құмағын, грунт және финиш жабыны: кран нысанға техникалық тапсырмаңыздағы түспен кетеді.' },
    en: { t: 'Painting', lead: 'Blasting, primer and top coat: the crane leaves in the colour your spec calls for.' },
    specs: {
      ru: [['Подготовка', 'обезжиривание, пескоструй'], ['Слои', 'грунт + 2 слоя эмали'], ['Покрытие', 'по RAL, включая сигнальные цвета'], ['Условия', 'цех и уличное исполнение']],
      kk: [['Дайындау', 'майсыздандыру, құмағынмен өңдеу'], ['Қабаттар', 'грунт + 2 қабат эмаль'], ['Жабын', 'RAL бойынша, сигналдық түстерді қоса'], ['Жағдай', 'цехтық және далалық орындалу']],
      en: [['Preparation', 'degreasing, abrasive blasting'], ['Layers', 'primer + two enamel coats'], ['Finish', 'RAL colours, safety colours included'], ['Duty', 'indoor and outdoor exposure']]
    },
    photos: [
      { src: 'assets/paint-booth.webp', ru: 'Окраска изделия в камере', kk: 'Камерада бұйымды бояу', en: 'Painting a part in the booth' },
      { src: 'assets/paint-steel.webp', ru: 'Покраска металлоконструкций', kk: 'Металл конструкцияларды бояу', en: 'Coating steel structures' },
      { src: 'assets/paint-panel.webp', ru: 'Нанесение финишного слоя', kk: 'Финиш қабатын жағу', en: 'Applying the top coat' }
    ]
  },
  drawings: {
    ru: { t: 'Детали по чертежам', lead: 'Единичные и серийные партии: даёте чертёж или образец - возвращаем готовую деталь.' },
    kk: { t: 'Сызба бойынша бөлшектер', lead: 'Жеке және сериялық партиялар: сызба немесе үлгі бересіз - дайын бөлшек қайтарамыз.' },
    en: { t: 'Parts to drawing', lead: 'One-offs and batches: send a drawing or a sample - get the finished part back.' },
    specs: {
      ru: [['Приём заказа', 'чертёж, DXF, эскиз, образец'], ['Партия', 'от 1 шт.'], ['Что делаем', 'барабаны, колёса, блоки, редукторы'], ['Срок', 'от 3 рабочих дней']],
      kk: [['Тапсырыс қабылдау', 'сызба, DXF, эскиз, үлгі'], ['Партия', '1 данадан бастап'], ['Не жасаймыз', 'барабандар, дөңгелектер, блоктар, редукторлар'], ['Мерзім', '3 жұмыс күнінен бастап']],
      en: [['Order input', 'drawing, DXF, sketch, sample'], ['Batch', 'from one piece'], ['What we make', 'drums, wheels, sheaves, gearboxes'], ['Lead time', 'from 3 working days']]
    },
    photos: [
      { src: 'assets/drum-yellow.webp', ru: 'Канатный барабан в сборе', kk: 'Жиналған арқан барабаны', en: 'Assembled rope drum' },
      { src: 'assets/wheels-shop.webp', ru: 'Партия крановых колёс', kk: 'Кран дөңгелектерінің партиясы', en: 'Batch of crane wheels' },
      { src: 'assets/rope-block.webp', ru: 'Канатный блок', kk: 'Арқан блогы', en: 'Rope sheave block' },
      { src: 'assets/gearbox.webp', ru: 'Крановый редуктор', kk: 'Кран редукторы', en: 'Crane gearbox' },
      { src: 'assets/trolley-shop.webp', ru: 'Крановая тележка в сборе', kk: 'Жиналған кран арбашасы', en: 'Assembled crane trolley' }
    ]
  }
};

/* ---------- подписи интерфейса модалки ---------- */
const DL = {
  ru: { variants: 'Виды и исполнения', specs: 'Параметры', photos: 'Фотографии', video: 'Видео из цеха', soon: 'Съёмка этого участка в работе - добавим ролики, как будут готовы', cta: 'Получить расчёт', close: 'Закрыть' },
  kk: { variants: 'Түрлері мен орындалуы', specs: 'Параметрлер', photos: 'Фотосуреттер', video: 'Цехтан видео', soon: 'Бұл учаскенің түсірілімі дайындалуда - роликтер дайын болған соң қосамыз', cta: 'Құнын есептеу', close: 'Жабу' },
  en: { variants: 'Types and versions', specs: 'Specifications', photos: 'Photos', video: 'Shop footage', soon: 'Filming of this area is under way - clips will be added once ready', cta: 'Request a quote', close: 'Close' }
};

/* ---------- рендер и управление ---------- */
(function () {
  const modal = document.getElementById('detail');
  if (!modal) return;
  const body = modal.querySelector('.dt-body');
  const btnClose = modal.querySelector('.dt-close');
  let openKey = null, lastFocus = null;

  // при прокрутке зажигаем подложку под кнопкой закрытия, чтобы контент не лез под неё
  body.addEventListener('scroll', function(){
    modal.classList.toggle('is-scr', body.scrollTop > 8);
  }, { passive: true });

  const lang = () => document.documentElement.lang === 'kk' ? 'kk' : (document.documentElement.lang === 'en' ? 'en' : 'ru');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  function render(key) {
    const d = DETAILS[key]; if (!d) return;
    const L = lang(), tx = d[L] || d.ru, t = DL[L] || DL.ru;
    const hero = d.hero ? `<div class="dt-hero"><img src="${d.hero}" alt="${esc(tx.t)}" decoding="async"></div>` : '';

    let vars = '';
    if (d.variants && d.variants.length) {
      vars = `<h4 class="dt-h">${t.variants}</h4><div class="dt-vars">` + d.variants.map(v => {
        const c = v[L] || v.ru;
        const media = v.s ? `<div class="dt-sch">${v.s}</div>` : `<div class="dt-vimg"><img src="${v.p}" alt="${esc(c[0])}" loading="lazy" decoding="async"></div>`;
        return `<article class="dt-var">${media}<h5>${esc(c[0])}</h5><p>${esc(c[1])}</p></article>`;
      }).join('') + '</div>';
    }

    let specs = '';
    if (d.specs) {
      const rows = d.specs[L] || d.specs.ru;
      specs = `<h4 class="dt-h">${t.specs}</h4><dl class="dt-specs">` +
        rows.map(r => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('') + '</dl>';
    }

    let vid = `<h4 class="dt-h">${t.video}</h4>`;
    if (d.video) {
      vid += `<figure class="dt-video"><video src="${d.video.src}" poster="${d.video.poster}" muted loop playsinline preload="none" controls></video>
        <figcaption><i class="rec" aria-hidden="true"></i>${esc(d.video[L] || d.video.ru)}</figcaption></figure>`;
    } else {
      vid += `<p class="dt-soon"><span class="dt-soon-ic" aria-hidden="true"></span>${t.soon}</p>`;
    }

    let ph = '';
    if (d.photos && d.photos.length) {
      ph = `<h4 class="dt-h">${t.photos}</h4><div class="dt-photos">` + d.photos.map(p =>
        `<figure><img src="${p.src}" alt="${esc(p[L] || p.ru)}" loading="lazy" decoding="async"><figcaption>${esc(p[L] || p.ru)}</figcaption></figure>`
      ).join('') + '</div>';
    }

    body.innerHTML = `${hero}<div class="dt-in"><h3 class="dt-t">${esc(tx.t)}</h3><p class="dt-lead">${esc(tx.lead)}</p>
      ${vars}${specs}${vid}${ph}
      <div class="dt-cta"><a class="btn btn-y btn-lg" href="#zayavka" data-product="${key}" data-dt-cta>${t.cta}</a></div></div>`;
    btnClose.setAttribute('aria-label', t.close);
  }

  function open(key, src) {
    openKey = key; lastFocus = src || null;
    render(key);
    modal.hidden = false;
    modal.classList.remove('is-scr');
    body.scrollTop = 0;
    document.body.classList.add('dt-open');
    requestAnimationFrame(() => modal.classList.add('is-on'));
    btnClose.focus();
  }

  function close() {
    modal.classList.remove('is-on');
    document.body.classList.remove('dt-open');
    const v = body.querySelector('video'); if (v) v.pause();
    setTimeout(() => { modal.hidden = true; body.innerHTML = ''; }, 260);
    openKey = null;
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener('click', e => {
    const trig = e.target.closest('[data-detail]');
    if (trig) { e.preventDefault(); open(trig.getAttribute('data-detail'), trig); return; }
    if (e.target.closest('[data-dt-cta]')) { close(); return; }
    if (e.target.closest('.dt-close') || e.target.classList.contains('dt-scrim')) { e.preventDefault(); close(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && openKey) close(); });

  // перерисовать открытую карточку при смене языка
  window.addEventListener('lang-change', () => { if (openKey) render(openKey); });
})();
