import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

const initState = {
  text: 'world',
  ajaxcontent: 'waiting for load'
}
// reducer
function myApp(state = initState, action){
  // console.log(state)

  switch(action.type){
  	case 'CHANGE_TEXT':
  	  return {
  	  	...state,
  	  	text: action.payload
  	  }
  	case 'AJAX_LOAD':
  	  return {
  	  	...state,
  	  	ajaxcontent: action.payload
  	  }
  	default:
  	  return initState
  }
}


let store = createStore(myApp, applyMiddleware(thunk))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
