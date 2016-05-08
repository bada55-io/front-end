import fetch from 'isomorphic-fetch'

export const REFRESH_LIST = 'REFRESH_LIST'
export function refreshList(list) {
  return { type: REFRESH_LIST, list }
}

export const RECEIVE_COLORS = 'RECEIVE_COLORS'
function receiveColors(filter, json) {
  return {
    type: RECEIVE_COLORS,
    filter,
    colors: json,
    receivedAt: Date.now()
  }
}

export const REQUEST_COLORS = 'REQUEST_COLORS'
function requestColors(filter) {
  return {
    type: REQUEST_COLORS,
    filter
  }
}


export function fetchColors(filter = '') {

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestColors(filter))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`//localhost:1337/colors/${filter}`, {
      mode: 'cors'
    })
      .then(response => response.json())
      .then(json =>

        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.

        dispatch(receiveColors(filter, json))
      )

      // In a real world app, you also want to
      // catch any error in the network call.
  }
}