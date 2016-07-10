import React, { Component } from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions'

class TextFiled extends Component {
  render(){
    let { changeText, text} = this.props
  	return (
      <div>
        <h1>Hello, {text}.</h1>
        這邊的輸入框應該會改變上面的內容<input onChange={changeText} />
      </div>
    )
  }
}

class AjaxContent extends Component {
  render(){
    let { ajaxLoad, ajaxcontent} = this.props
    return(
      <div>
        <h2 onClick={ajaxLoad}> 下面開始應該是ajax 載入的內容(點我載入) </h2>
        {ajaxcontent}
      </div>
    )
  }
}

class App extends Component {
  render() {
  	// let {ajaxLoad, actions, text, ajaxcontent, changeText} = this.props
    return (
      <div>
        <TextFiled {...this.props} />
        <hr />
        <AjaxContent {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {

  return {
  	text: state.text,
  	ajaxcontent: state.ajaxcontent
  }
}

export default connect(mapStateToProps, actionCreators)(App)