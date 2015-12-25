/*
 * @Project ..
 * @author zongquan.hzq
 * @description ..
 */

/*
 * @param hue 色度，0~360
 * @param saturation 饱和度， 0~1小数
 * @param value 明度 0~1小数
 * @output rgb数组
 */

const repeat = (val, num) => {
  let res = [];

  for(let i = 0; i < num ; ++i) {
    res[i] = val;
  }

  return res;
}

const produceOrder = (hue, saturation, value) => {
  const max = 255*value;
  const min = max*(1 - saturation);
  const midK = 1 - Math.abs((hue%120 - 60)/60);
  const mid = min + midK*(max - min);

  return [max, mid, min];
}

const rgb2str = (...args) => {
  return ['#', ...args.map(v => parseInt(v, 10).toString(16))].join('');
}

const _hsv2rgb = (hue, saturation, value) => {
  const {round} = Math;
  const side = parseInt(hue%360/60);

  if(!saturation) {
    return repeat(value, 3).map(round);
  }

  const indices = [[0, 1, 2], [1, 0, 2], [2, 0, 1], [2, 1, 0], [1, 2, 0], [0, 2, 1]][side];
  const vals = produceOrder(hue, saturation, value);

  return rgb2str(...repeat({}, 3).map((o, i) => vals[indices[i]]));
}

const hypot = (...args) => {
  return Math.sqrt(args.map(v => v*v).reduce((res, curr) => res + curr));
}

const hsv2rgb = (hue, saturation, value) => {
  const [max, mid ,min] = produceOrder(hue, saturation, value);
  const newValue = hypot(max, min, min)/hypot(max, min, mid)*value;

  return _hsv2rgb(hue, saturation, newValue);
}

const API = {
  hsv2rgb,
  _hsv2rgb,
  rgb2str,
};

export default API;
