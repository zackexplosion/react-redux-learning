import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';

const initState = {
  text: 'world'
}
// reducer
function myApp(state = initState, action){
  console.log(state)
  switch(action.type){
  	case 'CHANGE_TEXT':
  	  return {
  	  	text: action.payload
  	  }
  	default:
  	  return initState;
  }
}


let store = createStore(myApp);

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));
