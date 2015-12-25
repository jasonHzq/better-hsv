import {actionCreators} from './redux';
import React, {Children, Component, cloneElement} from 'react';
import createStore from './configureStore';
import reducer from './redux';

const mapObj = (obj, mapFn) => {
  return Object.keys(obj).reduce((res, key, i) => {
    return {...res, [key]: mapFn(obj[key], i, key)}
  }, {});
}

const bindDispatchToActionCreators = actionCreators => {
  return mapObj(actionCreators, ac => (...args) => store.dispatch(ac(...args)));
}

const initialState = {
  h: 80,
  s: 80,
  l: 80
}

const store = createStore(reducer, initialState);

class View extends Component {
  static displayName = 'View'

  state = { props: {} }

  componentDidMount() {
    this.handleChange();

    store.subscribe(this.handleChange);
  }

  render() {
    const child = Children.only(this.props.children);

    return <div className="view">{cloneElement(child, this.state.props)}</div>
  }

  mapStateToProps = (state) => {
    return {...state, ...bindDispatchToActionCreators(actionCreators)}
  }

  handleChange = () => {
    const state = store.getState();
    const props = this.mapStateToProps(state);

    this.setState({props});
  }
}

export default View;
