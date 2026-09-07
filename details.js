/* CRANE ENGINEERING - разделы каталога и металлообработки (модальные карточки) */
'use strict';

/* ---------- данные разделов ---------- */
const DETAILS = {
  /* ===== КРАНЫ ===== */
  bridge: {
    hero: 'assets/bridge-double-close.webp',
    ru: { t: 'Мостовые краны', lead: 'Основной кран цеха: перекрывает пролёт целиком и работает по всей площади под ним.' },
    kk: { t: 'Көпірлі крандар', lead: 'Цехтың негізгі краны: аралықты толық жауып, астындағы бүкіл алаңда жұмыс істейді.' },
    en: { t: 'Overhead cranes', lead: 'The main crane of a workshop: spans the full bay and works across the whole area below.' },
    variants: [
      { p: 'assets/bridge-single-top.webp', ru: ['Однобалочный опорный', 'до 20 т, ходит по подкрановым путям'], kk: ['Бір арқалықты тіреуішті', '20 т-ға дейін, кран асты жолымен жүреді'], en: ['Single-girder, top-running', 'up to 20 t, runs on runway rails'] },
      { p: 'assets/bridge-double-light.webp', ru: ['Двухбалочный опорный', 'до 200 т, большая высота подъёма'], kk: ['Екі арқалықты тіреуішті', '200 т-ға дейін, көтеру биіктігі жоғары'], en: ['Double-girder, top-running', 'up to 200 t, greater lifting height'] },
      { p: 'assets/bridge-susp-yellow.webp', ru: ['Подвесной', 'крепится к фермам, экономит высоту'], kk: ['Аспалы', 'фермаға бекітіледі, биіктікті үнемдейді'], en: ['Underhung', 'fixed to roof trusses, saves headroom'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-200 т'], ['Пролёт', '4,5-34 м'], ['Высота подъёма', 'до 30 м'], ['Режим работы', 'А3-А6'], ['Управление', 'с пола, радио, из кабины']],
      kk: [['Жүк көтергіштік', '0,5-200 т'], ['Аралық', '4,5-34 м'], ['Көтеру биіктігі', '30 м дейін'], ['Жұмыс режимі', 'А3-А6'], ['Басқару', 'еденнен, радио, кабинадан']],
      en: [['Capacity', '0.5-200 t'], ['Span', '4.5-34 m'], ['Lifting height', 'up to 30 m'], ['Duty class', 'A3-A6'], ['Control', 'floor, radio, cabin']]
    },
    photos: [
      { src: 'assets/bridge-double-close.webp', ru: 'Двухбалочный опорный кран в пролёте', kk: 'Аралықтағы екі арқалықты тіреуішті кран', en: 'Double-girder top-running crane in the bay' },
      { src: 'assets/bridge-double-hall.webp', ru: 'Кран в новом производственном корпусе', kk: 'Жаңа өндірістік корпустағы кран', en: 'Crane in a new production building' },
      { src: 'assets/bridge-double-coils.webp', ru: 'Работа с рулонами металла', kk: 'Металл орамдарымен жұмыс', en: 'Handling steel coils' },
      { src: 'assets/bridge-double-walkway.webp?v=20260907', ru: 'Площадка обслуживания вдоль моста', kk: 'Көпір бойындағы қызмет көрсету алаңы', en: 'Service walkway along the bridge' },
      { src: 'assets/bridge-single-top.webp', ru: 'Однобалочный опорный кран', kk: 'Бір арқалықты тіреуішті кран', en: 'Single-girder top-running crane' },
      { src: 'assets/bridge-double-light.webp', ru: 'Кран над сборочным участком', kk: 'Құрастыру учаскесінің үстіндегі кран', en: 'Crane over the assembly area' }
    ]
  },
  gantry: {
    hero: 'assets/gantry-double.webp',
    ru: { t: 'Козловые краны', lead: 'Работают там, где нет здания: склады под открытым небом, полигоны, контейнерные площадки.' },
    kk: { t: 'Мосы крандар', lead: 'Ғимарат жоқ жерде жұмыс істейді: ашық аспан астындағы қоймалар, полигондар, контейнер алаңдары.' },
    en: { t: 'Gantry cranes', lead: 'For sites without a building: open storage yards, laydown areas, container terminals.' },
    variants: [
      { p: 'assets/gantry-single.webp', ru: ['Однобалочный', 'до 20 т, консоль за опору'], kk: ['Бір арқалықты', '20 т дейін, тіректен шығыңқы консоль'], en: ['Single-girder', 'up to 20 t, cantilever past the leg'] },
      { p: 'assets/var-gantry-double.webp', ru: ['Двухбалочный', 'до 50 т, большие пролёты и высота'], kk: ['Екі арқалықты', '50 т дейін, үлкен аралық пен биіктік'], en: ['Double-girder', 'up to 50 t, long spans and greater height'] },
      { p: 'assets/semi-gantry.webp', ru: ['Полукозловой', 'одна опора на полу, вторая по стене'], kk: ['Жартылай мосы', 'бір тірегі еденде, екіншісі қабырғада'], en: ['Semi-gantry', 'one leg on the floor, the other on a wall rail'] },
      { p: 'assets/crane-gantry-outdoor.webp', ru: ['Уличного исполнения', 'работа под открытым небом, до -40 °C'], kk: ['Далалық орындалуы', 'ашық аспан астында жұмыс, -40 °C дейін'], en: ['Outdoor version', 'works in the open, down to -40 °C'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-50 т'], ['Пролёт', '8-40 м'], ['Вылет консоли', 'до 8 м'], ['Высота подъёма', 'до 16 м'], ['Исполнение', 'уличное, до -40 °C']],
      kk: [['Жүк көтергіштік', '1-50 т'], ['Аралық', '8-40 м'], ['Консоль ұзындығы', '8 м дейін'], ['Көтеру биіктігі', '16 м дейін'], ['Орындалуы', 'далалық, -40 °C дейін']],
      en: [['Capacity', '1-50 t'], ['Span', '8-40 m'], ['Cantilever', 'up to 8 m'], ['Lifting height', 'up to 16 m'], ['Design', 'outdoor, down to -40 °C']]
    },
    photos: [
      { src: 'assets/gantry-double.webp', ru: 'Двухбалочный козловой кран', kk: 'Екі арқалықты мосы кран', en: 'Double-girder gantry crane' },
      { src: 'assets/gantry-single.webp', ru: 'Однобалочный козловой кран на площадке', kk: 'Алаңдағы бір арқалықты мосы кран', en: 'Single-girder gantry crane on site' },
      { src: 'assets/semi-gantry.webp', ru: 'Полукозловой кран в цехе', kk: 'Цехтегі жартылай мосы кран', en: 'Semi-gantry crane in a workshop' },
      { src: 'assets/semi-gantry-low.webp', ru: 'Опора полукозлового крана', kk: 'Жартылай мосы кранның тірегі', en: 'Semi-gantry crane leg' },
      { src: 'assets/crane-gantry-outdoor.webp', ru: 'Монтаж козлового крана на объекте', kk: 'Нысанда мосы кранды монтаждау', en: 'Gantry crane erection on site' }
    ]
  },
  jib: {
    hero: 'assets/jib-column-shop.webp',
    ru: { t: 'Консольные краны', lead: 'Кран одного рабочего места: станок, сварочный пост, участок сборки. Ставится без перестройки цеха.' },
    kk: { t: 'Консольді крандар', lead: 'Бір жұмыс орнының краны: станок, дәнекерлеу посты, құрастыру учаскесі. Цехты қайта құрмай орнатылады.' },
    en: { t: 'Jib cranes', lead: 'A crane for one workstation: a machine, a welding bay, an assembly spot. Installed without rebuilding the shop.' },
    variants: [
      { p: 'assets/var-jib-column.webp', ru: ['На колонне', 'поворот 180° или 360°'], kk: ['Бағанада', '180° немесе 360° бұрылыс'], en: ['Column-mounted', '180° or 360° slew'] },
      { p: 'assets/jib-wall.webp', ru: ['Настенный', 'крепится к колонне здания'], kk: ['Қабырғалық', 'ғимарат бағанасына бекітіледі'], en: ['Wall-mounted', 'fixed to a building column'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-5 т'], ['Вылет стрелы', '2-8 м'], ['Угол поворота', '180° / 270° / 360°'], ['Привод', 'ручной или электрический'], ['Монтаж', 'на фундамент или к колонне']],
      kk: [['Жүк көтергіштік', '0,25-5 т'], ['Стрела ұзындығы', '2-8 м'], ['Бұрылу бұрышы', '180° / 270° / 360°'], ['Жетек', 'қолмен немесе электрлі'], ['Монтаждау', 'іргетасқа немесе бағанаға']],
      en: [['Capacity', '0.25-5 t'], ['Jib reach', '2-8 m'], ['Slew angle', '180° / 270° / 360°'], ['Drive', 'manual or electric'], ['Mounting', 'foundation or building column']]
    },
    photos: [
      { src: 'assets/jib-column-shop.webp', ru: 'Кран на колонне у рабочего поста', kk: 'Жұмыс посты жанындағы бағаналы кран', en: 'Column-mounted jib crane at a workstation' },
      { src: 'assets/jib-column.webp', ru: 'Колонный консольный кран в цехе', kk: 'Цехтегі бағаналы консольді кран', en: 'Column jib crane in the shop' },
      { src: 'assets/jib-wall.webp', ru: 'Настенный консольный кран', kk: 'Қабырғалық консольді кран', en: 'Wall-mounted jib crane' },
      { src: 'assets/jib-wall-shop.webp', ru: 'Настенный кран над участком сборки', kk: 'Құрастыру учаскесі үстіндегі қабырғалық кран', en: 'Wall jib crane over the assembly area' }
    ]
  },
  beam: {
    hero: 'assets/bridge-susp-yellow.webp',
    ru: { t: 'Кран-балки', lead: 'Лёгкий кран для цеха и мастерской: одна балка, таль, простая электрика.' },
    kk: { t: 'Кран-балкалар', lead: 'Цех пен шеберханаға арналған жеңіл кран: бір арқалық, таль, қарапайым электрика.' },
    en: { t: 'Beam cranes', lead: 'A light crane for shops and workshops: one girder, a hoist, simple wiring.' },
    variants: [
      { p: 'assets/bridge-single-shop.webp', ru: ['Опорная', 'катится по подкрановым путям'], kk: ['Тіреуішті', 'кран асты жолымен домалайды'], en: ['Top-running', 'rolls along runway rails'] },
      { p: 'assets/bridge-susp-blue.webp', ru: ['Подвесная', 'к перекрытию, гибкий токоподвод'], kk: ['Аспалы', 'жабынға ілінеді, иілгіш ток өткізгіш'], en: ['Underhung', 'from the roof, festoon power supply'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-10 т'], ['Пролёт', '3-16 м'], ['Высота подъёма', 'до 12 м'], ['Скорость подъёма', '4 / 8 м/мин'], ['Управление', 'пульт с пола или радио']],
      kk: [['Жүк көтергіштік', '0,5-10 т'], ['Аралық', '3-16 м'], ['Көтеру биіктігі', '12 м дейін'], ['Көтеру жылдамдығы', '4 / 8 м/мин'], ['Басқару', 'еденнен пульт немесе радио']],
      en: [['Capacity', '0.5-10 t'], ['Span', '3-16 m'], ['Lifting height', 'up to 12 m'], ['Hoisting speed', '4 / 8 m/min'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/bridge-single-shop.webp', ru: 'Однобалочная кран-балка в цехе', kk: 'Цехтегі бір арқалықты кран-балка', en: 'Single-girder beam crane in a shop' },
      { src: 'assets/bridge-susp-yellow.webp', ru: 'Подвесная кран-балка под перекрытием', kk: 'Жабын астындағы аспалы кран-балка', en: 'Underhung beam crane below the roof' },
      { src: 'assets/bridge-susp-blue.webp', ru: 'Кран-балка с гибким токоподводом', kk: 'Иілгіш ток өткізгіші бар кран-балка', en: 'Beam crane with festoon power supply' },
      { src: 'assets/bridge-susp-work.webp', ru: 'Монтаж подвесной кран-балки', kk: 'Аспалы кран-балканы монтаждау', en: 'Installing an underhung beam crane' },
      { src: 'assets/hoist-trolley.webp', ru: 'Таль на тележке в пролёте', kk: 'Аралықтағы арбашадағы таль', en: 'Trolley-mounted hoist in the bay' }
    ]
  },
  grab: {
    hero: 'assets/grab-front.webp',
    ru: { t: 'Грейферы', lead: 'Захват для сыпучих грузов и лома - кран работает без стропальщика.' },
    kk: { t: 'Грейферлер', lead: 'Үйінді жүктер мен сынық металға арналған қармауыш - кран арқаншысыз жұмыс істейді.' },
    en: { t: 'Grabs', lead: 'A bucket for bulk material and scrap - the crane works without a slinger.' },
    variants: [
      { p: 'assets/grab-clamshell.webp', ru: ['Канатный двухчелюстной', 'работает от лебёдок крана'], kk: ['Арқанды екі жақты', 'кран жүкшығырларынан жұмыс істейді'], en: ['Rope-operated clamshell', 'driven by the crane winches'] },
      { p: 'assets/grab-multitine.webp', ru: ['Многочелюстной', 'лом, негабарит, порубочные остатки'], kk: ['Көп жақты', 'сынық, габаритсіз жүк, ағаш қалдықтары'], en: ['Multi-tine', 'scrap, oversized loads, timber waste'] },
      { p: 'assets/grab-front.webp', ru: ['Моторный', 'своя гидростанция на грейфере'], kk: ['Моторлы', 'грейфердің өз гидростанциясы'], en: ['Motorised', 'own hydraulic unit on the grab'] }
    ],
    specs: {
      ru: [['Объём ковша', '0,3-5 м³'], ['Тип груза', 'песок, щебень, уголь, лом'], ['Число челюстей', '2-6'], ['Привод', 'канатный или гидравлический'], ['Подвес', 'под ваш кран или таль']],
      kk: [['Шөміш көлемі', '0,3-5 м³'], ['Жүк түрі', 'құм, щебень, көмір, сынық'], ['Жақ саны', '2-6'], ['Жетек', 'арқанды немесе гидравликалық'], ['Аспа', 'сіздің кранға немесе тальге']],
      en: [['Bucket volume', '0.3-5 m³'], ['Material', 'sand, gravel, coal, scrap'], ['Tines', '2-6'], ['Drive', 'rope or hydraulic'], ['Suspension', 'matched to your crane or hoist']]
    },
    photos: [
      { src: 'assets/grab-front.webp', ru: 'Грейфер в сборе перед отгрузкой', kk: 'Жөнелту алдындағы жиналған грейфер', en: 'Assembled grab before shipment' },
      { src: 'assets/grab-under-crane.webp', ru: 'Грейфер на мостовом кране', kk: 'Көпірлі крандағы грейфер', en: 'Grab on an overhead crane' },
      { src: 'assets/grab-clamshell.webp', ru: 'Двухчелюстной ковш крупным планом', kk: 'Екі жақты шөміш жақыннан', en: 'Clamshell bucket, close-up' },
      { src: 'assets/grab-yellow-shop.webp', ru: 'Грейфер на приёмке в цехе', kk: 'Цехтегі қабылдаудағы грейфер', en: 'Grab at shop acceptance' },
      { src: 'assets/grab-multitine.webp', ru: 'Многочелюстной грейфер', kk: 'Көп жақты грейфер', en: 'Multi-tine grab' }
    ]
  },
  hoist: {
    hero: 'assets/hoist-rope.webp',
    ru: { t: 'Тали и тельферы', lead: 'Механизм подъёма: ставится на кран-балку, консольный кран или отдельную балку.' },
    kk: { t: 'Тальдар мен тельферлер', lead: 'Көтеру механизмі: кран-балкаға, консольді кранға немесе жеке арқалыққа орнатылады.' },
    en: { t: 'Hoists', lead: 'The lifting unit itself: fitted to a beam crane, a jib crane or a standalone girder.' },
    variants: [
      { p: 'assets/hoist-rope.webp', ru: ['Канатная электрическая', 'от 1 до 20 т, высокий ресурс'], kk: ['Электрлі арқанды', '1-ден 20 т-ға дейін, ресурсы жоғары'], en: ['Electric wire rope', '1 to 20 t, long service life'] },
      { p: 'assets/hoist-chain.webp', ru: ['Цепная электрическая', 'до 5 т, компактная'], kk: ['Электрлі шынжырлы', '5 т дейін, ықшам'], en: ['Electric chain', 'up to 5 t, compact'] },
      { p: 'assets/hoist-trolley.webp', ru: ['С передвижной тележкой', 'ход вдоль балки'], kk: ['Жылжымалы арбашалы', 'арқалық бойымен жүреді'], en: ['With travelling trolley', 'moves along the girder'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-20 т'], ['Высота подъёма', '6-36 м'], ['Скорость подъёма', '2 / 4 / 8 м/мин'], ['Режим работы', 'М3-М6'], ['Управление', 'пульт или радио']],
      kk: [['Жүк көтергіштік', '0,25-20 т'], ['Көтеру биіктігі', '6-36 м'], ['Көтеру жылдамдығы', '2 / 4 / 8 м/мин'], ['Жұмыс режимі', 'М3-М6'], ['Басқару', 'пульт немесе радио']],
      en: [['Capacity', '0.25-20 t'], ['Lifting height', '6-36 m'], ['Hoisting speed', '2 / 4 / 8 m/min'], ['Duty class', 'M3-M6'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/hoist-rope.webp', ru: 'Канатная электрическая таль', kk: 'Электрлі арқанды таль', en: 'Electric wire rope hoist' },
      { src: 'assets/hoist-shop-real.webp', ru: 'Сборка механизма подъёма в цехе', kk: 'Цехте көтеру механизмін құрастыру', en: 'Assembling a hoisting unit in the shop' },
      { src: 'assets/hoist-chain.webp', ru: 'Цепная таль с пультом управления', kk: 'Басқару пульті бар шынжырлы таль', en: 'Chain hoist with pendant control' },
      { src: 'assets/block-hook.webp', ru: 'Крюковая подвеска с канатными блоками', kk: 'Арқан блоктары бар ілмек аспасы', en: 'Hook block with rope sheaves' }
    ]
  },
  traverse: {
    hero: 'assets/traverse-long-shop.webp',
    ru: { t: 'Траверсы', lead: 'Захват под конкретный груз: держит длинномер и негабарит без перекоса и повреждений.' },
    kk: { t: 'Траверсалар', lead: 'Нақты жүкке арналған қармауыш: ұзын және габаритсіз жүкті қисайтпай, зақымдамай ұстайды.' },
    en: { t: 'Lifting beams', lead: 'A device built for one specific load: holds long and oversized items level and undamaged.' },
    variants: [
      { p: 'assets/traverse-long-shop.webp', ru: ['Балочная линейная', 'длинномер, трубы, профиль'], kk: ['Сызықты арқалықты', 'ұзын жүк, құбырлар, профиль'], en: ['Straight beam', 'long stock, pipes, profiles'] },
      { p: 'assets/traverse-4hooks.webp', ru: ['Под металлоконструкции', 'фермы, балки, панели'], kk: ['Металл конструкцияларға', 'фермалар, арқалықтар, панельдер'], en: ['For steel structures', 'trusses, girders, panels'] },
      { p: 'assets/traverse-chains.webp', ru: ['По вашему чертежу', 'считаем и варим под задачу'], kk: ['Сіздің сызбаңыз бойынша', 'тапсырмаға есептеп, дәнекерлейміз'], en: ['To your drawing', 'calculated and welded for the job'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-100 т'], ['Длина', 'по вашему ТЗ'], ['Тип захвата', 'крюки, скобы, струбцины, магнит'], ['Расчёт', 'проверка на прочность и устойчивость'], ['Документы', 'паспорт и схема строповки']],
      kk: [['Жүк көтергіштік', '1-100 т'], ['Ұзындығы', 'техникалық тапсырма бойынша'], ['Қармау түрі', 'ілмектер, қапсырмалар, струбциналар, магнит'], ['Есептеу', 'беріктік пен орнықтылыққа тексеру'], ['Құжаттар', 'паспорт және арқандау схемасы']],
      en: [['Capacity', '1-100 t'], ['Length', 'to your specification'], ['Attachment', 'hooks, shackles, clamps, magnet'], ['Engineering', 'strength and stability check'], ['Documents', 'data sheet and rigging diagram']]
    },
    photos: [
      { src: 'assets/traverse-long-shop.webp', ru: 'Балочная траверса в цехе перед отгрузкой', kk: 'Жөнелту алдында цехтегі арқалықты траверса', en: 'Lifting beam in the shop before shipment' },
      { src: 'assets/traverse-6t.webp', ru: 'Траверса грузоподъёмностью 6 т', kk: 'Жүк көтергіштігі 6 т траверса', en: 'Lifting beam rated 6 t' },
      { src: 'assets/traverse-long-out.webp', ru: 'Длинномерная траверса на объекте', kk: 'Нысандағы ұзын траверса', en: 'Long lifting beam on site' },
      { src: 'assets/traverse-chains.webp', ru: 'Траверса с цепными подвесами', kk: 'Шынжырлы аспалы траверса', en: 'Lifting beam with chain slings' },
      { src: 'assets/traverse-4hooks.webp', ru: 'Траверса на четыре крюка', kk: 'Төрт ілмекті траверса', en: 'Four-hook lifting beam' },
      { src: 'assets/traverse-under-crane.webp', ru: 'Траверса под мостовым краном', kk: 'Көпірлі кран астындағы траверса', en: 'Lifting beam under an overhead crane' },
      { src: 'assets/traverse-hooks.webp', ru: 'Крюковые захваты траверсы', kk: 'Траверсаның ілмекті қармауыштары', en: 'Hook attachments of the lifting beam' }
    ],
    video: { src: 'assets/welding.mp4', poster: 'assets/welding-poster.webp', ru: 'Сварка траверсы - наш цех, без постановки', kk: 'Траверса дәнекерлеу - өз цехымыз, қойылымсыз', en: 'Welding a lifting beam - our shop, unstaged' }
  },

  /* ===== МЕТАЛЛООБРАБОТКА ===== */
  turning: {
    hero: 'assets/drums-steel-pair.webp',
    ru: { t: 'Токарные работы', lead: 'Тела вращения для кранов и не только: валы, оси, барабаны, крановые колёса.' },
    kk: { t: 'Токарлық жұмыстар', lead: 'Кранға және басқаға арналған айналу денелері: біліктер, осьтер, барабандар, кран дөңгелектері.' },
    en: { t: 'Turning', lead: 'Rotational parts for cranes and beyond: shafts, axles, drums, crane wheels.' },
    specs: {
      ru: [['Диаметр обработки', 'до 1000 мм'], ['Длина', 'до 3000 мм'], ['Материал', 'сталь, нержавейка, чугун, бронза'], ['Партия', 'от одной детали']],
      kk: [['Өңдеу диаметрі', '1000 мм дейін'], ['Ұзындығы', '3000 мм дейін'], ['Материал', 'болат, тот баспайтын болат, шойын, қола'], ['Партия', 'бір бөлшектен бастап']],
      en: [['Turning diameter', 'up to 1000 mm'], ['Length', 'up to 3000 mm'], ['Material', 'steel, stainless, cast iron, bronze'], ['Batch', 'from a single part']]
    },
    photos: [
      { src: 'assets/drums-steel-pair.webp', ru: 'Канатные барабаны после нарезки ручьёв', kk: 'Ойығы кесілгеннен кейінгі арқан барабандары', en: 'Rope drums after groove machining' },
      { src: 'assets/drum-bearing.webp', ru: 'Барабан с подшипниковым узлом в сборе', kk: 'Мойынтіректі торабы жиналған барабан', en: 'Drum with the bearing housing assembled' },
      { src: 'assets/drums-red-flange.webp', ru: 'Пара барабанов с фланцами под редуктор', kk: 'Редукторға арналған фланецті барабандар жұбы', en: 'Pair of drums with gearbox flanges' },
      { src: 'assets/drum-raw.webp', ru: 'Барабан после токарной обработки', kk: 'Токарлық өңдеуден кейінгі барабан', en: 'Drum after turning' },
      { src: 'assets/wheel-turning.webp', ru: 'Обточка кранового колеса', kk: 'Кран дөңгелегін жону', en: 'Machining a crane wheel' },
      { src: 'assets/wheel-red.webp', ru: 'Готовое крановое колесо', kk: 'Дайын кран дөңгелегі', en: 'Finished crane wheel' },
      { src: 'assets/lathe-shaft.webp', ru: 'Точение вала в патроне', kk: 'Патронда білікті жону', en: 'Turning a shaft in the chuck' }
    ],
    video: { src: 'assets/turning.mp4', poster: 'assets/turning-poster.webp', ru: 'Токарный и зубофрезерный участок - наш цех', kk: 'Токарлық және тіс фрезерлеу учаскесі - өз цехымыз', en: 'Turning and gear-cutting area - our shop' }
  },
  milling: {
    hero: 'assets/wheels-geared.webp',
    ru: { t: 'Фрезерные работы', lead: 'Пазы, шпоночные канавки, посадочные места и плоскости под сборку узла.' },
    kk: { t: 'Фрезерлік жұмыстар', lead: 'Ойықтар, шпонка қуыстары, отырғызу беттері мен торап құрастыруға арналған жазықтықтар.' },
    en: { t: 'Milling', lead: 'Slots, keyways, seats and mating faces for assembling the unit.' },
    specs: {
      ru: [['Размер стола', 'до 1600 × 500 мм'], ['Точность', 'до 0,05 мм'], ['Материал', 'сталь, чугун, цветные сплавы'], ['Работа', 'по чертежу или образцу']],
      kk: [['Үстел өлшемі', '1600 × 500 мм дейін'], ['Дәлдік', '0,05 мм дейін'], ['Материал', 'болат, шойын, түсті қорытпалар'], ['Жұмыс', 'сызба немесе үлгі бойынша']],
      en: [['Table size', 'up to 1600 × 500 mm'], ['Accuracy', 'to 0.05 mm'], ['Material', 'steel, cast iron, non-ferrous'], ['Input', 'drawing or sample part']]
    },
    photos: [
      { src: 'assets/wheels-geared.webp', ru: 'Колёсные блоки с зубчатыми венцами', kk: 'Тісті тәждері бар дөңгелек блоктары', en: 'Wheel units with gear rims' },
      { src: 'assets/wheel-sets.webp', ru: 'Колёсные пары после обработки', kk: 'Өңдеуден кейінгі дөңгелек жұптары', en: 'Wheel sets after machining' },
      { src: 'assets/coupling-flange.webp', ru: 'Зубчатая муфта в сборе', kk: 'Жиналған тісті муфта', en: 'Assembled gear coupling' },
      { src: 'assets/coupling-shop.webp', ru: 'Муфта после расточки и фрезеровки', kk: 'Кескіштеу мен фрезерлеуден кейінгі муфта', en: 'Coupling after boring and milling' },
      { src: 'assets/mill-cutter.webp', ru: 'Торцевая фреза в работе', kk: 'Жұмыстағы шеткі фреза', en: 'Face mill in operation' },
      { src: 'assets/mill-head.webp', ru: 'Фрезерная головка над деталью', kk: 'Бөлшек үстіндегі фрезер басы', en: 'Milling head over the workpiece' }
    ],
    video: { src: 'assets/machining.mp4', poster: 'assets/machining-poster.webp', ru: 'Токарно-фрезерная и механическая обработка - наш цех', kk: 'Токарлық-фрезерлік және механикалық өңдеу - өз цехымыз', en: 'Turning, milling and machining - our shop' }
  },
  plasma: {
    hero: 'assets/plasma-cnc.webp',
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
      { src: 'assets/plasma-cnc.webp', ru: 'Раскрой на портальном станке', kk: 'Портальды станокта пішу', en: 'Nesting on a gantry machine' },
      { src: 'assets/steel-weldment.webp', ru: 'Детали раскроя в сборочном узле', kk: 'Құрастыру торабындағы пішілген бөлшектер', en: 'Cut parts in an assembled unit' }
    ],
    video: { src: 'assets/plasma-cut.mp4', poster: 'assets/plasma-cut-poster.webp', ru: 'Плазменная и лазерная резка листа - наш цех', kk: 'Парақ металды плазмалық және лазерлік кесу - өз цехымыз', en: 'Plasma and laser sheet cutting - our shop' }
  },
  welding: {
    hero: 'assets/steel-stairs.webp',
    ru: { t: 'Сварочные работы', lead: 'Несущие металлоконструкции и узлы кранов - варят аттестованные сварщики по нашим картам.' },
    kk: { t: 'Дәнекерлеу жұмыстары', lead: 'Көтергіш металл конструкциялар мен кран тораптарын аттестатталған дәнекерлеушілер біздің карталар бойынша дәнекерлейді.' },
    en: { t: 'Welding', lead: 'Load-bearing structures and crane assemblies, welded by certified welders to our procedures.' },
    specs: {
      ru: [['Способы', 'MIG/MAG, MMA, полуавтомат'], ['Металл', 'сталь, нержавейка, алюминий'], ['Толщина', '1-40 мм'], ['Контроль', 'визуальный, замер геометрии']],
      kk: [['Тәсілдер', 'MIG/MAG, MMA, жартылай автомат'], ['Металл', 'болат, тот баспайтын болат, алюминий'], ['Қалыңдығы', '1-40 мм'], ['Бақылау', 'көзбен шолу, геометрияны өлшеу']],
      en: [['Processes', 'MIG/MAG, MMA, semi-automatic'], ['Metal', 'steel, stainless, aluminium'], ['Thickness', '1-40 mm'], ['Control', 'visual check, geometry measurement']]
    },
    photos: [
      { src: 'assets/steel-stairs.webp', ru: 'Сварная лестничная площадка в цехе', kk: 'Цехтегі дәнекерленген баспалдақ алаңы', en: 'Welded stair platform in the shop' },
      { src: 'assets/steel-weldment.webp', ru: 'Крупная сварная конструкция на стапеле', kk: 'Стапельдегі ірі дәнекерленген конструкция', en: 'Large weldment on the jig' },
      { src: 'assets/steel-stand.webp', ru: 'Сварная рама после сборки', kk: 'Құрастырудан кейінгі дәнекерленген жақтау', en: 'Welded frame after assembly' },
      { src: 'assets/weld-sparks.webp', ru: 'Сварка профильной конструкции', kk: 'Профильді конструкцияны дәнекерлеу', en: 'Welding a profile structure' },
      { src: 'assets/weld-worker.webp', ru: 'Сварщик на сборочном участке', kk: 'Құрастыру учаскесіндегі дәнекерлеуші', en: 'Welder at the assembly area' },
      { src: 'assets/steel-erection.webp', ru: 'Монтаж металлоконструкций на объекте', kk: 'Нысанда металл конструкцияларды монтаждау', en: 'Erecting steel structures on site' }
    ],
    video: { src: 'assets/weld-shop.mp4', poster: 'assets/weld-shop-poster.webp', ru: 'Сварочный участок - наш цех, без постановки', kk: 'Дәнекерлеу учаскесі - өз цехымыз, қойылымсыз', en: 'Welding area - our shop, unstaged' }
  },
  bending: {
    hero: 'assets/bend-press.webp',
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
    hero: 'assets/paint-booth.webp',
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
    ],
    video: { src: 'assets/painting.mp4', poster: 'assets/painting-poster.webp', ru: 'Окрасочная камера: грунт и финишный слой', kk: 'Бояу камерасы: грунт және финиш қабаты', en: 'Paint booth: primer and top coat' }
  },
  drawings: {
    hero: 'assets/wheels-batch.webp',
    ru: { t: 'Детали по чертежам', lead: 'Единичные и серийные партии: даёте чертёж или образец - возвращаем готовую деталь.' },
    kk: { t: 'Сызба бойынша бөлшектер', lead: 'Жеке және сериялық партиялар: сызба немесе үлгі бересіз - дайын бөлшек қайтарамыз.' },
    en: { t: 'Parts to drawing', lead: 'One-offs and batches: send a drawing or a sample - get the finished part back.' },
    specs: {
      ru: [['Приём заказа', 'чертёж, DXF, эскиз, образец'], ['Партия', 'от 1 шт.'], ['Что делаем', 'барабаны, колёса, блоки, редукторы'], ['Срок', 'от 3 рабочих дней']],
      kk: [['Тапсырыс қабылдау', 'сызба, DXF, эскиз, үлгі'], ['Партия', '1 данадан бастап'], ['Не жасаймыз', 'барабандар, дөңгелектер, блоктар, редукторлар'], ['Мерзім', '3 жұмыс күнінен бастап']],
      en: [['Order input', 'drawing, DXF, sketch, sample'], ['Batch', 'from one piece'], ['What we make', 'drums, wheels, sheaves, gearboxes'], ['Lead time', 'from 3 working days']]
    },
    photos: [
      { src: 'assets/wheels-batch.webp', ru: 'Партия крановых колёс', kk: 'Кран дөңгелектерінің партиясы', en: 'Batch of crane wheels' },
      { src: 'assets/drums-yellow-row.webp', ru: 'Барабаны в сборе перед отгрузкой', kk: 'Жөнелту алдында жиналған барабандар', en: 'Assembled drums before shipment' },
      { src: 'assets/blocks-batch.webp', ru: 'Партия канатных блоков', kk: 'Арқан блоктарының партиясы', en: 'Batch of rope sheaves' },
      { src: 'assets/block-rope-close.webp', ru: 'Канатный блок с канатом', kk: 'Арқаны бар арқан блогы', en: 'Rope sheave with the rope fitted' },
      { src: 'assets/coupling-white.webp', ru: 'Зубчатая муфта', kk: 'Тісті муфта', en: 'Gear coupling' },
      { src: 'assets/trolley-yellow.webp', ru: 'Крановая тележка в сборе', kk: 'Жиналған кран арбашасы', en: 'Assembled crane trolley' },
      { src: 'assets/cabin-outside.webp', ru: 'Крановая кабина управления', kk: 'Кран басқару кабинасы', en: 'Crane operator cabin' },
      { src: 'assets/cabin-inside.webp', ru: 'Пост управления внутри кабины', kk: 'Кабина ішіндегі басқару посты', en: 'Control post inside the cabin' },
      { src: 'assets/gearbox.webp', ru: 'Крановый редуктор', kk: 'Кран редукторы', en: 'Crane gearbox' }
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
        const media = `<div class="dt-vimg"><img src="${v.p}" alt="${esc(c[0])}" loading="lazy" decoding="async"></div>`;
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
    const cta = e.target.closest('[data-dt-cta]');
    if (cta) {
      // тот же пресет продукта, что и у карточек: разделы металлообработки уходят в «Металлообработка»
      const sel = document.getElementById('whatSelect');
      if (sel) {
        const k = cta.getAttribute('data-product');
        sel.value = [...sel.options].some(o => o.value === k) ? k : 'metal';
      }
      close(); return;
    }
    if (e.target.closest('.dt-close') || e.target.classList.contains('dt-scrim')) { e.preventDefault(); close(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && openKey) close(); });

  // перерисовать открытую карточку при смене языка
  window.addEventListener('lang-change', () => { if (openKey) render(openKey); });
})();
