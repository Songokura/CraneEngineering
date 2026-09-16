/* CRANE ENGINEERING - разделы каталога и металлообработки (модальные карточки) */
'use strict';

/* ---------- данные разделов ---------- */
const DETAILS = {
  /* ===== КРАНЫ ===== */
  bridge: {
    hero: 'assets/bridge-double-close.webp',
    ru: { t: 'Мостовые краны', lead: 'Основной кран цеха: перекрывает пролёт целиком и работает по всей площади под ним.' },
    en: { t: 'Overhead cranes', lead: 'The main crane of a workshop: spans the full bay and works across the whole area below.' },
    variants: [
      { p: 'assets/bridge-single-top.webp', ru: ['Однобалочный опорный', 'до 20 т, ходит по подкрановым путям'], en: ['Single-girder, top-running', 'up to 20 t, runs on runway rails'] },
      { p: 'assets/bridge-double-light.webp', ru: ['Двухбалочный опорный', 'до 200 т, большая высота подъёма'], en: ['Double-girder, top-running', 'up to 200 t, greater lifting height'] },
      { p: 'assets/bridge-susp-yellow.webp', ru: ['Подвесной', 'крепится к фермам, экономит высоту'], en: ['Underhung', 'fixed to roof trusses, saves headroom'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-200 т'], ['Пролёт', '4,5-34 м'], ['Высота подъёма', 'до 30 м'], ['Режим работы', 'А3-А6'], ['Управление', 'с пола, радио, из кабины']],
      en: [['Capacity', '0.5-200 t'], ['Span', '4.5-34 m'], ['Lifting height', 'up to 30 m'], ['Duty class', 'A3-A6'], ['Control', 'floor, radio, cabin']]
    },
    photos: [
      { src: 'assets/bridge-double-close.webp', ru: 'Двухбалочный опорный кран в пролёте', en: 'Double-girder top-running crane in the bay' },
      { src: 'assets/bridge-double-hall.webp', ru: 'Кран в новом производственном корпусе', en: 'Crane in a new production building' },
      { src: 'assets/bridge-double-coils.webp', ru: 'Работа с рулонами металла', en: 'Handling steel coils' },
      { src: 'assets/bridge-double-walkway.webp?v=20260907', ru: 'Площадка обслуживания вдоль моста', en: 'Service walkway along the bridge' },
      { src: 'assets/bridge-single-top.webp', ru: 'Однобалочный опорный кран', en: 'Single-girder top-running crane' },
      { src: 'assets/bridge-double-light.webp', ru: 'Кран над сборочным участком', en: 'Crane over the assembly area' }
    ]
  },
  gantry: {
    hero: 'assets/gantry-double.webp',
    ru: { t: 'Козловые краны', lead: 'Работают там, где нет здания: склады под открытым небом, полигоны, контейнерные площадки.' },
    en: { t: 'Gantry cranes', lead: 'For sites without a building: open storage yards, laydown areas, container terminals.' },
    variants: [
      { p: 'assets/gantry-single.webp', ru: ['Однобалочный', 'до 20 т, консоль за опору'], en: ['Single-girder', 'up to 20 t, cantilever past the leg'] },
      { p: 'assets/var-gantry-double.webp', ru: ['Двухбалочный', 'до 50 т, большие пролёты и высота'], en: ['Double-girder', 'up to 50 t, long spans and greater height'] },
      { p: 'assets/semi-gantry.webp', ru: ['Полукозловой', 'одна опора на полу, вторая по стене'], en: ['Semi-gantry', 'one leg on the floor, the other on a wall rail'] },
      { p: 'assets/crane-gantry-outdoor.webp', ru: ['Уличного исполнения', 'работа под открытым небом, до -40 °C'], en: ['Outdoor version', 'works in the open, down to -40 °C'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-50 т'], ['Пролёт', '8-40 м'], ['Вылет консоли', 'до 8 м'], ['Высота подъёма', 'до 16 м'], ['Исполнение', 'уличное, до -40 °C']],
      en: [['Capacity', '1-50 t'], ['Span', '8-40 m'], ['Cantilever', 'up to 8 m'], ['Lifting height', 'up to 16 m'], ['Design', 'outdoor, down to -40 °C']]
    },
    photos: [
      { src: 'assets/gantry-double.webp', ru: 'Двухбалочный козловой кран', en: 'Double-girder gantry crane' },
      { src: 'assets/gantry-single.webp', ru: 'Однобалочный козловой кран на площадке', en: 'Single-girder gantry crane on site' },
      { src: 'assets/semi-gantry.webp', ru: 'Полукозловой кран в цехе', en: 'Semi-gantry crane in a workshop' },
      { src: 'assets/semi-gantry-low.webp', ru: 'Опора полукозлового крана', en: 'Semi-gantry crane leg' },
      { src: 'assets/crane-gantry-outdoor.webp', ru: 'Монтаж козлового крана на объекте', en: 'Gantry crane erection on site' }
    ]
  },
  jib: {
    hero: 'assets/jib-column-shop.webp',
    ru: { t: 'Консольные краны', lead: 'Кран одного рабочего места: станок, сварочный пост, участок сборки. Ставится без перестройки цеха.' },
    en: { t: 'Jib cranes', lead: 'A crane for one workstation: a machine, a welding bay, an assembly spot. Installed without rebuilding the shop.' },
    variants: [
      { p: 'assets/var-jib-column.webp', ru: ['На колонне', 'поворот 180° или 360°'], en: ['Column-mounted', '180° or 360° slew'] },
      { p: 'assets/jib-wall.webp', ru: ['Настенный', 'крепится к колонне здания'], en: ['Wall-mounted', 'fixed to a building column'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-5 т'], ['Вылет стрелы', '2-8 м'], ['Угол поворота', '180° / 270° / 360°'], ['Привод', 'ручной или электрический'], ['Монтаж', 'на фундамент или к колонне']],
      en: [['Capacity', '0.25-5 t'], ['Jib reach', '2-8 m'], ['Slew angle', '180° / 270° / 360°'], ['Drive', 'manual or electric'], ['Mounting', 'foundation or building column']]
    },
    photos: [
      { src: 'assets/jib-column-shop.webp', ru: 'Кран на колонне у рабочего поста', en: 'Column-mounted jib crane at a workstation' },
      { src: 'assets/jib-column.webp', ru: 'Колонный консольный кран в цехе', en: 'Column jib crane in the shop' },
      { src: 'assets/jib-wall.webp', ru: 'Настенный консольный кран', en: 'Wall-mounted jib crane' },
      { src: 'assets/jib-wall-shop.webp', ru: 'Настенный кран над участком сборки', en: 'Wall jib crane over the assembly area' }
    ]
  },
  beam: {
    hero: 'assets/bridge-susp-yellow.webp',
    ru: { t: 'Кран-балки', lead: 'Лёгкий кран для цеха и мастерской: одна балка, таль, простая электрика.' },
    en: { t: 'Beam cranes', lead: 'A light crane for shops and workshops: one girder, a hoist, simple wiring.' },
    variants: [
      { p: 'assets/bridge-single-shop.webp', ru: ['Опорная', 'катится по подкрановым путям'], en: ['Top-running', 'rolls along runway rails'] },
      { p: 'assets/bridge-susp-blue.webp', ru: ['Подвесная', 'к перекрытию, гибкий токоподвод'], en: ['Underhung', 'from the roof, festoon power supply'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,5-10 т'], ['Пролёт', '3-16 м'], ['Высота подъёма', 'до 12 м'], ['Скорость подъёма', '4 / 8 м/мин'], ['Управление', 'пульт с пола или радио']],
      en: [['Capacity', '0.5-10 t'], ['Span', '3-16 m'], ['Lifting height', 'up to 12 m'], ['Hoisting speed', '4 / 8 m/min'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/bridge-single-shop.webp', ru: 'Однобалочная кран-балка в цехе', en: 'Single-girder beam crane in a shop' },
      { src: 'assets/bridge-susp-yellow.webp', ru: 'Подвесная кран-балка под перекрытием', en: 'Underhung beam crane below the roof' },
      { src: 'assets/bridge-susp-blue.webp', ru: 'Кран-балка с гибким токоподводом', en: 'Beam crane with festoon power supply' },
      { src: 'assets/bridge-susp-work.webp', ru: 'Монтаж подвесной кран-балки', en: 'Installing an underhung beam crane' },
      { src: 'assets/hoist-trolley.webp', ru: 'Таль на тележке в пролёте', en: 'Trolley-mounted hoist in the bay' }
    ]
  },
  grab: {
    hero: 'assets/grab-front.webp',
    ru: { t: 'Грейферы', lead: 'Захват для сыпучих грузов и лома - кран работает без стропальщика.' },
    en: { t: 'Grabs', lead: 'A bucket for bulk material and scrap - the crane works without a slinger.' },
    variants: [
      { p: 'assets/grab-clamshell.webp', ru: ['Канатный двухчелюстной', 'работает от лебёдок крана'], en: ['Rope-operated clamshell', 'driven by the crane winches'] },
      { p: 'assets/grab-multitine.webp', ru: ['Многочелюстной', 'лом, негабарит, порубочные остатки'], en: ['Multi-tine', 'scrap, oversized loads, timber waste'] },
      { p: 'assets/grab-front.webp', ru: ['Моторный', 'своя гидростанция на грейфере'], en: ['Motorised', 'own hydraulic unit on the grab'] }
    ],
    specs: {
      ru: [['Объём ковша', '0,3-5 м³'], ['Тип груза', 'песок, щебень, уголь, лом'], ['Число челюстей', '2-6'], ['Привод', 'канатный или гидравлический'], ['Подвес', 'под ваш кран или таль']],
      en: [['Bucket volume', '0.3-5 m³'], ['Material', 'sand, gravel, coal, scrap'], ['Tines', '2-6'], ['Drive', 'rope or hydraulic'], ['Suspension', 'matched to your crane or hoist']]
    },
    photos: [
      { src: 'assets/grab-front.webp', ru: 'Грейфер в сборе перед отгрузкой', en: 'Assembled grab before shipment' },
      { src: 'assets/grab-under-crane.webp', ru: 'Грейфер на мостовом кране', en: 'Grab on an overhead crane' },
      { src: 'assets/grab-clamshell.webp', ru: 'Двухчелюстной ковш крупным планом', en: 'Clamshell bucket, close-up' },
      { src: 'assets/grab-yellow-shop.webp', ru: 'Грейфер на приёмке в цехе', en: 'Grab at shop acceptance' },
      { src: 'assets/grab-multitine.webp', ru: 'Многочелюстной грейфер', en: 'Multi-tine grab' }
    ]
  },
  hoist: {
    hero: 'assets/hoist-rope.webp',
    ru: { t: 'Тали и тельферы', lead: 'Механизм подъёма: ставится на кран-балку, консольный кран или отдельную балку.' },
    en: { t: 'Hoists', lead: 'The lifting unit itself: fitted to a beam crane, a jib crane or a standalone girder.' },
    variants: [
      { p: 'assets/hoist-rope.webp', ru: ['Канатная электрическая', 'от 1 до 20 т, высокий ресурс'], en: ['Electric wire rope', '1 to 20 t, long service life'] },
      { p: 'assets/hoist-chain.webp', ru: ['Цепная электрическая', 'до 5 т, компактная'], en: ['Electric chain', 'up to 5 t, compact'] },
      { p: 'assets/hoist-trolley.webp', ru: ['С передвижной тележкой', 'ход вдоль балки'], en: ['With travelling trolley', 'moves along the girder'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '0,25-20 т'], ['Высота подъёма', '6-36 м'], ['Скорость подъёма', '2 / 4 / 8 м/мин'], ['Режим работы', 'М3-М6'], ['Управление', 'пульт или радио']],
      en: [['Capacity', '0.25-20 t'], ['Lifting height', '6-36 m'], ['Hoisting speed', '2 / 4 / 8 m/min'], ['Duty class', 'M3-M6'], ['Control', 'pendant or radio']]
    },
    photos: [
      { src: 'assets/hoist-rope.webp', ru: 'Канатная электрическая таль', en: 'Electric wire rope hoist' },
      { src: 'assets/hoist-shop-real.webp', ru: 'Сборка механизма подъёма в цехе', en: 'Assembling a hoisting unit in the shop' },
      { src: 'assets/hoist-chain.webp', ru: 'Цепная таль с пультом управления', en: 'Chain hoist with pendant control' },
      { src: 'assets/block-hook.webp', ru: 'Крюковая подвеска с канатными блоками', en: 'Hook block with rope sheaves' }
    ]
  },
  traverse: {
    hero: 'assets/traverse-long-shop.webp',
    ru: { t: 'Траверсы', lead: 'Захват под конкретный груз: держит длинномер и негабарит без перекоса и повреждений.' },
    en: { t: 'Lifting beams', lead: 'A device built for one specific load: holds long and oversized items level and undamaged.' },
    variants: [
      { p: 'assets/traverse-long-shop.webp', ru: ['Балочная линейная', 'длинномер, трубы, профиль'], en: ['Straight beam', 'long stock, pipes, profiles'] },
      { p: 'assets/traverse-4hooks.webp', ru: ['Под металлоконструкции', 'фермы, балки, панели'], en: ['For steel structures', 'trusses, girders, panels'] },
      { p: 'assets/traverse-chains.webp', ru: ['По вашему чертежу', 'считаем и варим под задачу'], en: ['To your drawing', 'calculated and welded for the job'] }
    ],
    specs: {
      ru: [['Грузоподъёмность', '1-100 т'], ['Длина', 'по вашему ТЗ'], ['Тип захвата', 'крюки, скобы, струбцины, магнит'], ['Расчёт', 'проверка на прочность и устойчивость'], ['Документы', 'паспорт и схема строповки']],
      en: [['Capacity', '1-100 t'], ['Length', 'to your specification'], ['Attachment', 'hooks, shackles, clamps, magnet'], ['Engineering', 'strength and stability check'], ['Documents', 'data sheet and rigging diagram']]
    },
    photos: [
      { src: 'assets/traverse-long-shop.webp', ru: 'Балочная траверса в цехе перед отгрузкой', en: 'Lifting beam in the shop before shipment' },
      { src: 'assets/traverse-6t.webp', ru: 'Траверса грузоподъёмностью 6 т', en: 'Lifting beam rated 6 t' },
      { src: 'assets/traverse-long-out.webp', ru: 'Длинномерная траверса на объекте', en: 'Long lifting beam on site' },
      { src: 'assets/traverse-chains.webp', ru: 'Траверса с цепными подвесами', en: 'Lifting beam with chain slings' },
      { src: 'assets/traverse-4hooks.webp', ru: 'Траверса на четыре крюка', en: 'Four-hook lifting beam' },
      { src: 'assets/traverse-under-crane.webp', ru: 'Траверса под мостовым краном', en: 'Lifting beam under an overhead crane' },
      { src: 'assets/traverse-hooks.webp', ru: 'Крюковые захваты траверсы', en: 'Hook attachments of the lifting beam' }
    ],
    video: { src: 'assets/welding.mp4', poster: 'assets/welding-poster.webp', ru: 'Сварка траверсы - наш цех, без постановки', en: 'Welding a lifting beam - our shop, unstaged' }
  },

  /* ===== МЕТАЛЛООБРАБОТКА ===== */
  turning: {
    hero: 'assets/drums-steel-pair.webp',
    ru: { t: 'Токарные работы', lead: 'Тела вращения для кранов и не только: валы, оси, барабаны, крановые колёса.' },
    en: { t: 'Turning', lead: 'Rotational parts for cranes and beyond: shafts, axles, drums, crane wheels.' },
    specs: {
      ru: [['Диаметр обработки', 'до 1000 мм'], ['Длина', 'до 3000 мм'], ['Материал', 'сталь, нержавейка, чугун, бронза'], ['Партия', 'от одной детали']],
      en: [['Turning diameter', 'up to 1000 mm'], ['Length', 'up to 3000 mm'], ['Material', 'steel, stainless, cast iron, bronze'], ['Batch', 'from a single part']]
    },
    photos: [
      { src: 'assets/drums-steel-pair.webp', ru: 'Канатные барабаны после нарезки ручьёв', en: 'Rope drums after groove machining' },
      { src: 'assets/drum-bearing.webp', ru: 'Барабан с подшипниковым узлом в сборе', en: 'Drum with the bearing housing assembled' },
      { src: 'assets/drums-red-flange.webp', ru: 'Пара барабанов с фланцами под редуктор', en: 'Pair of drums with gearbox flanges' },
      { src: 'assets/drum-raw.webp', ru: 'Барабан после токарной обработки', en: 'Drum after turning' },
      { src: 'assets/wheel-turning.webp', ru: 'Обточка кранового колеса', en: 'Machining a crane wheel' },
      { src: 'assets/wheel-red.webp', ru: 'Готовое крановое колесо', en: 'Finished crane wheel' },
      { src: 'assets/lathe-shaft.webp', ru: 'Точение вала в патроне', en: 'Turning a shaft in the chuck' }
    ],
    video: { src: 'assets/turning.mp4', poster: 'assets/turning-poster.webp', ru: 'Токарный и зубофрезерный участок - наш цех', en: 'Turning and gear-cutting area - our shop' }
  },
  milling: {
    hero: 'assets/wheels-geared.webp',
    ru: { t: 'Фрезерные работы', lead: 'Пазы, шпоночные канавки, посадочные места и плоскости под сборку узла.' },
    en: { t: 'Milling', lead: 'Slots, keyways, seats and mating faces for assembling the unit.' },
    specs: {
      ru: [['Размер стола', 'до 1600 × 500 мм'], ['Точность', 'до 0,05 мм'], ['Материал', 'сталь, чугун, цветные сплавы'], ['Работа', 'по чертежу или образцу']],
      en: [['Table size', 'up to 1600 × 500 mm'], ['Accuracy', 'to 0.05 mm'], ['Material', 'steel, cast iron, non-ferrous'], ['Input', 'drawing or sample part']]
    },
    photos: [
      { src: 'assets/wheels-geared.webp', ru: 'Колёсные блоки с зубчатыми венцами', en: 'Wheel units with gear rims' },
      { src: 'assets/wheel-sets.webp', ru: 'Колёсные пары после обработки', en: 'Wheel sets after machining' },
      { src: 'assets/coupling-flange.webp', ru: 'Зубчатая муфта в сборе', en: 'Assembled gear coupling' },
      { src: 'assets/coupling-shop.webp', ru: 'Муфта после расточки и фрезеровки', en: 'Coupling after boring and milling' },
      { src: 'assets/mill-cutter.webp', ru: 'Торцевая фреза в работе', en: 'Face mill in operation' },
      { src: 'assets/mill-head.webp', ru: 'Фрезерная головка над деталью', en: 'Milling head over the workpiece' }
    ],
    video: { src: 'assets/machining.mp4', poster: 'assets/machining-poster.webp', ru: 'Токарно-фрезерная и механическая обработка - наш цех', en: 'Turning, milling and machining - our shop' }
  },
  plasma: {
    hero: 'assets/plasma-cnc.webp',
    ru: { t: 'Плазменная резка', lead: 'Раскрой листа по вашим DXF: детали идут сразу в сборку без дополнительной подгонки.' },
    en: { t: 'Plasma cutting', lead: 'Sheet cut from your DXF: parts go straight to assembly with no extra fitting.' },
    specs: {
      ru: [['Толщина реза', 'до 40 мм'], ['Формат листа', 'до 1500 × 6000 мм'], ['Материал', 'сталь, нержавейка, алюминий'], ['Файлы', 'DXF, DWG или эскиз от руки']],
      en: [['Cutting thickness', 'up to 40 mm'], ['Sheet size', 'up to 1500 × 6000 mm'], ['Material', 'steel, stainless, aluminium'], ['Files', 'DXF, DWG or a hand sketch']]
    },
    photos: [
      { src: 'assets/plasma-torch.webp', ru: 'Плазменный резак по листу', en: 'Plasma torch cutting sheet' },
      { src: 'assets/plasma-sparks.webp', ru: 'Рез по стальному листу', en: 'Cutting a steel plate' },
      { src: 'assets/plasma-cnc.webp', ru: 'Раскрой на портальном станке', en: 'Nesting on a gantry machine' },
      { src: 'assets/steel-weldment.webp', ru: 'Детали раскроя в сборочном узле', en: 'Cut parts in an assembled unit' }
    ],
    video: { src: 'assets/plasma-cut.mp4', poster: 'assets/plasma-cut-poster.webp', ru: 'Плазменная и лазерная резка листа - наш цех', en: 'Plasma and laser sheet cutting - our shop' }
  },
  welding: {
    hero: 'assets/steel-stairs.webp',
    ru: { t: 'Сварочные работы', lead: 'Несущие металлоконструкции и узлы кранов - варят аттестованные сварщики по нашим картам.' },
    en: { t: 'Welding', lead: 'Load-bearing structures and crane assemblies, welded by certified welders to our procedures.' },
    specs: {
      ru: [['Способы', 'MIG/MAG, MMA, полуавтомат'], ['Металл', 'сталь, нержавейка, алюминий'], ['Толщина', '1-40 мм'], ['Контроль', 'визуальный, замер геометрии']],
      en: [['Processes', 'MIG/MAG, MMA, semi-automatic'], ['Metal', 'steel, stainless, aluminium'], ['Thickness', '1-40 mm'], ['Control', 'visual check, geometry measurement']]
    },
    photos: [
      { src: 'assets/steel-stairs.webp', ru: 'Сварная лестничная площадка в цехе', en: 'Welded stair platform in the shop' },
      { src: 'assets/steel-weldment.webp', ru: 'Крупная сварная конструкция на стапеле', en: 'Large weldment on the jig' },
      { src: 'assets/steel-stand.webp', ru: 'Сварная рама после сборки', en: 'Welded frame after assembly' },
      { src: 'assets/weld-sparks.webp', ru: 'Сварка профильной конструкции', en: 'Welding a profile structure' },
      { src: 'assets/weld-worker.webp', ru: 'Сварщик на сборочном участке', en: 'Welder at the assembly area' },
      { src: 'assets/steel-erection.webp', ru: 'Монтаж металлоконструкций на объекте', en: 'Erecting steel structures on site' }
    ],
    video: { src: 'assets/weld-shop.mp4', poster: 'assets/weld-shop-poster.webp', ru: 'Сварочный участок - наш цех, без постановки', en: 'Welding area - our shop, unstaged' }
  },
  bending: {
    hero: 'assets/bend-press.webp',
    ru: { t: 'Гибочные работы', lead: 'Лист и профиль под нужную геометрию: обечайки, косынки, короба, отбортовки.' },
    en: { t: 'Bending', lead: 'Sheet and profile to the required geometry: shells, gussets, boxes, flanges.' },
    specs: {
      ru: [['Длина гиба', 'до 3000 мм'], ['Толщина листа', 'до 12 мм'], ['Угол', 'по чертежу, с проверкой шаблоном'], ['Профиль', 'труба, уголок, полоса']],
      en: [['Bend length', 'up to 3000 mm'], ['Sheet thickness', 'up to 12 mm'], ['Angle', 'per drawing, template-checked'], ['Profile', 'tube, angle, flat bar']]
    },
    photos: [
      { src: 'assets/bend-press.webp', ru: 'Гибка листа на прессе', en: 'Sheet bending on a press brake' },
      { src: 'assets/bend-sheet.webp', ru: 'Формовка детали из листа', en: 'Forming a part from sheet' },
      { src: 'assets/bend-profile.webp', ru: 'Гиб по разметке', en: 'Bending to the marked line' }
    ]
  },
  painting: {
    hero: 'assets/paint-booth.webp',
    ru: { t: 'Малярные работы', lead: 'Пескоструй, грунт и финишное покрытие: кран уходит с объекта в цвете вашего ТЗ.' },
    en: { t: 'Painting', lead: 'Blasting, primer and top coat: the crane leaves in the colour your spec calls for.' },
    specs: {
      ru: [['Подготовка', 'обезжиривание, пескоструй'], ['Слои', 'грунт + 2 слоя эмали'], ['Покрытие', 'по RAL, включая сигнальные цвета'], ['Условия', 'цех и уличное исполнение']],
      en: [['Preparation', 'degreasing, abrasive blasting'], ['Layers', 'primer + two enamel coats'], ['Finish', 'RAL colours, safety colours included'], ['Duty', 'indoor and outdoor exposure']]
    },
    photos: [
      { src: 'assets/paint-booth.webp', ru: 'Окраска изделия в камере', en: 'Painting a part in the booth' },
      { src: 'assets/paint-steel.webp', ru: 'Покраска металлоконструкций', en: 'Coating steel structures' },
      { src: 'assets/paint-panel.webp', ru: 'Нанесение финишного слоя', en: 'Applying the top coat' }
    ],
    video: { src: 'assets/painting.mp4', poster: 'assets/painting-poster.webp', ru: 'Окрасочная камера: грунт и финишный слой', en: 'Paint booth: primer and top coat' }
  },
  drawings: {
    hero: 'assets/wheels-batch.webp',
    ru: { t: 'Детали по чертежам', lead: 'Единичные и серийные партии: даёте чертёж или образец - возвращаем готовую деталь.' },
    en: { t: 'Parts to drawing', lead: 'One-offs and batches: send a drawing or a sample - get the finished part back.' },
    specs: {
      ru: [['Приём заказа', 'чертёж, DXF, эскиз, образец'], ['Партия', 'от 1 шт.'], ['Что делаем', 'барабаны, колёса, блоки, редукторы'], ['Срок', 'от 3 рабочих дней']],
      en: [['Order input', 'drawing, DXF, sketch, sample'], ['Batch', 'from one piece'], ['What we make', 'drums, wheels, sheaves, gearboxes'], ['Lead time', 'from 3 working days']]
    },
    photos: [
      { src: 'assets/wheels-batch.webp', ru: 'Партия крановых колёс', en: 'Batch of crane wheels' },
      { src: 'assets/drums-yellow-row.webp', ru: 'Барабаны в сборе перед отгрузкой', en: 'Assembled drums before shipment' },
      { src: 'assets/blocks-batch.webp', ru: 'Партия канатных блоков', en: 'Batch of rope sheaves' },
      { src: 'assets/block-rope-close.webp', ru: 'Канатный блок с канатом', en: 'Rope sheave with the rope fitted' },
      { src: 'assets/coupling-white.webp', ru: 'Зубчатая муфта', en: 'Gear coupling' },
      { src: 'assets/trolley-yellow.webp', ru: 'Крановая тележка в сборе', en: 'Assembled crane trolley' },
      { src: 'assets/cabin-outside.webp', ru: 'Крановая кабина управления', en: 'Crane operator cabin' },
      { src: 'assets/cabin-inside.webp', ru: 'Пост управления внутри кабины', en: 'Control post inside the cabin' },
      { src: 'assets/gearbox.webp', ru: 'Крановый редуктор', en: 'Crane gearbox' }
    ]
  }
};

/* ---------- подписи интерфейса модалки ---------- */
const DL = {
  ru: { variants: 'Виды и исполнения', specs: 'Параметры', photos: 'Фотографии', video: 'Видео из цеха', soon: 'Съёмка этого участка в работе - добавим ролики, как будут готовы', cta: 'Получить расчёт', close: 'Закрыть' },
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

  // казахские подписи приходят из assets/lang/kk.js (грузит script.js по кнопке KZ) - вливаем один раз
  let kkMerged = false;
  function merge(dst, src) {
    for (const k in src) {
      const v = src[k];
      if (v === null || v === undefined) continue;
      if (k !== 'kk' && typeof v === 'object' && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);
      else dst[k] = v;
    }
  }
  function mergeKK() {
    if (kkMerged || !window.SITE_KK) return;
    merge(DETAILS, window.SITE_KK.details);
    DL.kk = window.SITE_KK.dl;
    kkMerged = true;
  }

  function render(key) {
    const d = DETAILS[key]; if (!d) return;
    mergeKK();
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
