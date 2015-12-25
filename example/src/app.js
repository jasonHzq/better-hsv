import R from 'ramda';
import React from 'react';
import ReactDOM from 'react-dom';
import View from './container';
import betterHSV from 'better-hsv';

const {_hsv2rgb, hsv2rgb} = betterHSV;

const Tape = props => {
  const {h, s, l} = props;
  const TOTAL_RECT_NUM = 400;

  const getRects = hsv => {
    return R.repeat(0, TOTAL_RECT_NUM).map((_, i) => {
      const style = {
        backgroundColor: hsv(i/TOTAL_RECT_NUM*360, s/100, l/100)
      }

      return (
        <div className="rect" key={"rect" + i} style={style}>
        </div>
      );
    });
  }

  return (
    <div className="tape">
      <div className="inputs">
        <input type="number" value={h} className="h" onChange={props.changeH}/>
        saturation: <input type="number" value={s} className="s" onChange={props.changeS}/>
        value: <input type="number" value={l} className="l" onChange={props.changeL}/>
      </div>
      <div className="tap-container">
        {getRects(_hsv2rgb)}
      </div>
      <div className="tap-container">
        {getRects(hsv2rgb)}
      </div>
    </div>
  );
}

ReactDOM.render(<View><Tape/ ></View>, document.getElementById('app'));

