export function toggleSideNav (value) {
  return {
    type: 'TOGGLE_SIDE_NAV',
    value
  }
}

export function toggleLoginModal () {
  return {
    type: 'TOGGLE_LOGIN_MODAL'
  }
}

export function closeToast (key) {
  return {
    type: 'CLOSE_TOAST',
    key
  }
}