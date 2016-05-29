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
      	<hr />
      	<TextFiled actions={actions} text={text} />
      </div>
    );
  }
}

function mapStateToProps(state) {

  return { text: state.text }
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators({changeText:changeText}, dispatch)
  }
}

App = connect(mapStateToProps, mapDispatchToProps)(App)

export default App;