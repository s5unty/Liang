/** last changed: 2018.11.10 */

/**
 *
 * dict 包含所有声母，list 为其列表数组
 *
 * dict.{声母} 包含所有韵母，list 为其列表数组
 *
 * dict.{声母}.{韵母} 包含其汉字样例
 *                   [{生僻字 / 多音字}] 将不会在无拼音模式中出现
 *
 */

Shuang.resource.dict = {
  '': {
    ua: '要' 
  },
  b: {
    a: '薄'
  },
  c: {
    a: '菜'
  },
  d: {
    a: '荡'
  },
  f: {
    a: '范'
  },
  g: {
    a: '葛'
  },
  h: {
    a: '花'
  },
  j: {
    a: '紧'
  },
  k: {
    a: '苦'
  },
  l: {
    a: '落', m: '两'
  },
  m: {
    a: '莫'
  },
  n: {
    a: '孽'
  },
  p: {
    a: '蓬'
  },
  q: {
    a: '擎'
  },
  r: {
    a: '若'
  },
  s: {
    a: '苏', x: '双'
  },
  t: {
    a: '藤'
  },
  w: {
    a: '薇'
  },
  x: {
    a: '贤'
  },
  y: {
    a: '英'
  },
  z: {
    a: '著'
  }
}
Object.entries(Shuang.resource.dict).forEach(([sheng, yunList]) => Shuang.resource.dict[sheng].list = Object.keys(yunList))
Shuang.resource.dict.list = Object.keys(Shuang.resource.dict)
