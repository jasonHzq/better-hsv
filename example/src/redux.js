const reducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_H': {
      return {...state, h: action.paylaod}
    }
    case 'CHANGE_S': {
      return {...state, s: action.paylaod}
    }
    case 'CHANGE_L': {
      return {...state, l: action.paylaod}
    }
  }
}

export const actionCreators = {
  changeH: e => ({
    paylaod: e.target.value,
    type: 'CHANGE_H',
  }),
  changeS: e => ({
    paylaod: e.target.value,
    type: 'CHANGE_S'
  }),
  changeL: e => ({
    paylaod: e.target.value,
    type: 'CHANGE_L'
  })
}

export default reducer;
