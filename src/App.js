import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// actions
function changeText(e){
  console.log('changeText')
  console.log(e)
  return {
  	type: 'CHANGE_TEXT',
  	payload: e.target.value
  }
}

function ajaxLoad(){
  return dispatch => {
   dispatch({
     type: 'AJAX_LOAD',
     payload: 'loading'
   })
   fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a').then(r =>{
     return r.text()
   }).then(text =>{
     dispatch({
      type: 'AJAX_LOAD',
      payload: text
    })
   })
 }
}

class TextFiled extends Component {
  render(){
  	let onChange = this.props.actions.changeText;
  	return (<input type="text" onChange={onChange}/>)
  }
}

class App extends Component {
  render() {
  	let {actions, text} = this.props
    return (
      <div>
      <h1>Hello, {this.props.text}.</h1>
      這邊的輸入框應該會改變上面的內容<TextFiled actions={actions} text={text} />
      <hr />
      <h2 onClick={actions.ajaxLoad}> 下面開始應該是ajax 載入的內容(點我載入) </h2>
      {this.props.ajaxcontent}
      </div>
      );
  }
}

function mapStateToProps(state) {

  return {
  	text: state.text,
  	ajaxcontent: state.ajaxcontent
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators({
      changeText,
      ajaxLoad
    }, dispatch)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;