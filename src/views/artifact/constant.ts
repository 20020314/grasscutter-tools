/** 属性列表 */
export const stats = [
  { value: 0, label: '暴击率' },
  { value: 1, label: '暴击伤害' },
  { value: 2, label: '元素精通' },
  { value: 3, label: '攻击力%' },
  { value: 4, label: '生命值%' },
  { value: 5, label: '防御力%' },
  { value: 6, label: '攻击力' },
  { value: 7, label: '生命值' },
  { value: 8, label: '防御力' },
  { value: 9, label: '元素充能效率' },
  { value: 10, label: '雷元素伤害加成' },
  { value: 11, label: '火元素伤害加成' },
  { value: 12, label: '冰元素伤害加成' },
  { value: 13, label: '水元素伤害加成' },
  { value: 14, label: '岩元素伤害加成' },
  { value: 15, label: '风元素伤害加成' },
  { value: 16, label: '物理伤害加成' },
  { value: 17, label: '治疗加成' }
]

/** 各个部位对应的主属性列表 */
export const positionMainstats = [
  [{ value: 7, label: stats[7].label }],
  [{ value: 8, label: '攻击力' }],
  [
    { value: 3, label: '攻击力%' },
    { value: 4, label: '生命值%' },
    { value: 5, label: '防御力%' },
    { value: 2, label: '元素精通' },
    { value: 9, label: '元素充能效率' }
  ],
  [
    { value: 10, label: '雷元素伤害加成' },
    { value: 11, label: '火元素伤害加成' },
    { value: 12, label: '冰元素伤害加成' },
    { value: 13, label: '水元素伤害加成' },
    { value: 14, label: '岩元素伤害加成' },
    { value: 15, label: '风元素伤害加成' },
    { value: 16, label: '物理伤害加成' },
    { value: 3, label: '攻击力%' },
    { value: 4, label: '生命值%' },
    { value: 5, label: '防御力%' },
    { value: 2, label: '元素精通' }
  ],
  [
    { value: 0, label: '暴击率' },
    { value: 1, label: '暴击伤害' },
    { value: 3, label: '攻击力%' },
    { value: 4, label: '生命值%' },
    { value: 5, label: '防御力%' },
    { value: 2, label: '元素精通' },
    { value: 17, label: '治疗加成' }
  ]
]

/** 副属性 */
interface Substat {
  id: number
  value: number
}

/** 副属性各档位列表 */
export const substatGears: Substat[][] = [
  [
    { id: 501201, value: 0.0272000003606081 },
    { id: 501202, value: 0.031099999323487282 },
    { id: 501203, value: 0.03500000014901161 },
    { id: 501204, value: 0.03889999911189079 }
  ],
  [
    { id: 501221, value: 0.0544000007212162 },
    { id: 501222, value: 0.062199998646974564 },
    { id: 501223, value: 0.06989999860525131 },
    { id: 501224, value: 0.07769999653100967 }
  ],
  [
    { id: 501241, value: 16.31999969482422 },
    { id: 501242, value: 18.649999618530273 },
    { id: 501243, value: 20.979999542236328 },
    { id: 501244, value: 23.309999465942383 }
  ],
  [
    { id: 501061, value: 0.040800001472234726 },
    { id: 501062, value: 0.04659999907016754 },
    { id: 501063, value: 0.05249999836087227 },
    { id: 501064, value: 0.05829999968409538 }
  ],
  [
    { id: 501031, value: 0.040800001472234726 },
    { id: 501032, value: 0.04659999907016754 },
    { id: 501033, value: 0.05249999836087227 },
    { id: 501034, value: 0.05829999968409538 }
  ],
  [
    { id: 501091, value: 0.050999999046325684 },
    { id: 501092, value: 0.05829999968409538 },
    { id: 501093, value: 0.06560000032186508 },
    { id: 501094, value: 0.07289999723434448 }
  ],
  [
    { id: 501051, value: 13.619999885559082 },
    { id: 501052, value: 15.5600004196167 },
    { id: 501053, value: 17.510000228881836 },
    { id: 501054, value: 19.450000762939453 }
  ],
  [
    { id: 501021, value: 209.1300048828125 },
    { id: 501022, value: 239 },
    { id: 501023, value: 268.8800048828125 },
    { id: 501024, value: 298.75 }
  ],
  [
    { id: 501081, value: 16.200000762939453 },
    { id: 501082, value: 18.520000457763672 },
    { id: 501083, value: 20.829999923706055 },
    { id: 501084, value: 23.149999618530273 }
  ],
  [
    { id: 501231, value: 0.04529999941587448 },
    { id: 501232, value: 0.05180000141263008 },
    { id: 501233, value: 0.05829999968409538 },
    { id: 501234, value: 0.06480000168085098 }
  ]
]

/** 圣遗物列表 */
export const artifacts = [
  {
    id: 97514,
    name: '辰砂往生录',
    img: 'artifact/chensha_120.png',
    description1: '攻击力提高18%。',
    description2:
      '施放元素爆发后，将产生持续16秒的「潜光」效果：攻击力提升8%；并在角色的生命值降低时，攻击力进一步提升10%，至多通过这种方式提升4次，每0.8秒至多触发一次。「潜光」效果将在角色退场时消失；持续期间再次施放元素爆发，将移除原有的「潜光」。'
  },
  {
    id: 98514,
    name: '来歆余响',
    img: 'artifact/yuxiang_120.png',
    description1: '攻击力提高18%。',
    description2:
      '普通攻击命中敌人时，有36%概率触发「幽谷祝祀」：普通攻击造成的伤害提高，伤害提高值为攻击力的70%，该效果将在普通攻击造成伤害后的0.05秒后清除。普通攻击未触发「幽谷祝祀」时，会使下次触发概率提升20%；0.2秒内至多判定1次触发与否。'
  },
  {
    id: 95514,
    name: '华馆梦醒形骸记',
    img: 'artifact/huaguan_120.png',
    description1: '防御力提高30%。',
    description2:
      '装备此圣遗物套装的角色在以下情况下，将获得「问答」效果：在场上用岩元素攻击命中敌人后获得一层，每0.3秒至多触发一次；在队伍后台中，每3秒获得一层。问答至多叠加4层，每层能提供6%防御力与6%岩元素伤害加成。每6秒,若未获得问答效果，将损失一层。'
  },
  {
    id: 96514,
    name: '海染砗磲',
    img: 'artifact/hairan_120.png',
    description1: '治疗加成提高15%。',
    description2:
      '装备此圣遗物套装的角色对队伍中的角色进行治疗时，将产生持续3秒的海染泡沫，记录治疗的生命值回复量（包括溢出值）。持续时间结束时，海染泡沫将会爆炸，对周围的敌人造成90%累计回复量的伤害（该伤害结算方式同感电、超导等元素反应，但不受元素精通、等级或反应伤害加成效果影响）。每3.5秒至多产生一个海染泡沫；海染泡沫至多记录30000点回复量，含溢出部分的治疗量；自己的队伍中同时至多存在一个海染泡沫。装备此圣遗物套装的角色处于队伍后台时；依然能触发该效果。'
  },
  {
    id: 94514,
    name: '绝缘之旗印',
    img: 'artifact/jueyuan_120.png',
    description1: '元素充能效率提高20%。',
    description2: '基于元素充能效率的25%，提高元素爆发造成的伤害。至多通过这种方式获得75%提升。'
  },
  {
    id: 93514,
    name: '追忆之注连',
    img: 'artifact/zhuiyi_120.png',
    description1: '攻击力提高18%。',
    description2:
      '释放元素战技时，如果角色的元素能量高于或等于15点，则会流失15点元素能量，使接下来的10秒内，普通攻击、重击、下落攻击造成的伤害提高50%，持续期间内效果不会再次触发。'
  },
  {
    id: 91514,
    name: '千岩牢固',
    img: 'artifact/qianyan_120.png',
    description1: '生命值提升20%',
    description2:
      '元素战技命中敌人后，使队伍中附近的所有角色攻击力提升20%，护盾强效提升30%，持续3秒。该效果每0.5秒至多触发一次。装备此圣遗物套装的角色处于队伍后台时，依然能触发该效果。'
  },
  {
    id: 92514,
    name: '苍白之火',
    img: 'artifact/cangbai_120.png',
    description1: '造成的物理伤害提高25%。',
    description2:
      '元素战技命中敌人后，攻击力提升9%。该效果持续7秒，至多叠加2层，每0.3秒至多触发一次。叠满2层时，2件套的效果提升100%。'
  },
  {
    id: 72514,
    name: '平息鸣雷的尊者',
    img: 'artifact/pinglei_120.png',
    description1: '雷元素抗性提高40%。',
    description2: '对处于雷元素影响下的敌人造成的伤害提升35%。'
  },
  {
    id: 80514,
    name: '炽烈的炎之魔女',
    img: 'artifact/monv_120.png',
    description1: '获得15%火元素伤害加成。',
    description2:
      '超载、燃烧反应造成的伤害提升40%，蒸发、融化反应的加成系数提高15%。施放元素战技后的10秒内，二件套的效果提高50%，该效果最多叠加3次。'
  },
  {
    id: 77514,
    name: '流浪大地的乐团',
    img: 'artifact/liulang_120.png',
    description1: '元素精通提高80点。',
    description2: '装备该圣遗物套装的角色为法器、弓箭角色时，角色重击造成的伤害提高35%。'
  },
  {
    id: 82514,
    name: '染血的骑士道',
    img: 'artifact/ranxue_120.png',
    description1: '造成的物理伤害提高25%。',
    description2: '击败敌人后的10秒内，施放重击时不消耗体力，且造成的伤害提升50%。'
  },
  {
    id: 74514,
    name: '被怜爱的少女',
    img: 'artifact/shaonv_120.png',
    description1: '角色造成的治疗效果提升15%。',
    description2: '施放元素战技或元素爆发后的10秒内，队伍中所有角色受治疗效果加成提高20%。'
  },
  {
    id: 75514,
    name: '角斗士的终幕礼',
    img: 'artifact/jiaodou_120.png',
    description1: '攻击力提高18%。',
    description2: '装备该圣遗物套装的角色为单手剑、双手剑、长柄武器角色时，角色普通攻击造成的伤害提高35%。'
  },
  {
    id: 73514,
    name: '渡过烈火的贤人',
    img: 'artifact/duhuo_120.png',
    description1: '火元素抗性提高40%。',
    description2: '对处于火元素影响下的敌人造成的伤害提升35%。'
  },
  {
    id: 88514,
    name: '悠古的磐岩',
    img: 'artifact/panyan_120.png',
    description1: '获得15%岩元素伤害加成。',
    description2:
      '获得元素反应形成的晶片时，队伍中所有角色获得35%对应元素伤害加成，持续10秒。同时只能通过该效果获得一种元素伤害加成。'
  },
  {
    id: 79514,
    name: '如雷的盛怒',
    img: 'artifact/rulei_120.png',
    description1: '获得15%雷元素伤害加成。',
    description2:
      '超载、感电、超导反应造成的伤害提升40%。触发这些元素反应时，元素战技冷却时间减少1秒。该效果每0.8秒最多触发一次。'
  },
  {
    id: 90514,
    name: '沉沦之心',
    img: 'artifact/chenlun_120.jpg',
    description1: '获得15%水元素伤害加成。',
    description2: '施放元素战技后的15秒内，普通攻击与重击造成的伤害提高30%。'
  },
  {
    id: 89514,
    name: '逆飞的流星',
    img: 'artifact/nifei_120.png',
    description1: '护盾强效提高35%。',
    description2: '处于护盾庇护下时，额外获得40%普通攻击和重击伤害加成。'
  },
  {
    id: 81514,
    name: '昔日宗室之仪',
    img: 'artifact/zongshi_120.png',
    description1: '元素爆发造成的伤害提升20％。',
    description2: '释放元素爆发后，队伍中所有角色攻击力提升20％，持续12秒，该效果不可叠加。'
  },
  {
    id: 76514,
    name: '翠绿之影',
    img: 'artifact/cuilv_120.png',
    description1: '获得15%风元素伤害加成。',
    description2: '扩散反应造成的伤害提升60%。根据扩散的元素类型，降低受到影响的敌人40%的对应元素抗性，持续10秒。'
  },
  {
    id: 71514,
    name: '冰风迷途的勇士',
    img: 'artifact/bingfeng_120.jpg',
    description1: '获得15%冰元素伤害加成。',
    description2: '攻击处于冰元素影响下的敌人时，暴击率提高20%；若敌人处于冻结状态下，则暴击率额外提高20%。'
  }
]
