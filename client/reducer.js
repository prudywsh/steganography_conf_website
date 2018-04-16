const initialState = {
  showSideNav: false,
  showLoginModal: false,
  toasts: [{type: 'success', text: 'hello world'}, {type: 'error', text: 'hello world 2'}]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_NAV':
      return Object.assign({}, state, {
        showSideNav: action.value !== undefined ? action.value : !state.sideNavOpen
      })
    case 'TOGGLE_LOGIN_MODAL':
      return Object.assign({}, state, {
        showLoginModal: !state.showLoginModal
      })
    case 'CLOSE_TOAST':
      return Object.assign({}, state, {
        toasts: state.toasts.filter((e, i) => i !== action.key)
      })
    default:
      return state
  }
}

export default reducer