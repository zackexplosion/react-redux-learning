// actions
export function changeText(e){
  console.log('changeText')
  console.log(e)
  return {
    type: 'CHANGE_TEXT',
    payload: e.target.value
  }
}

export function ajaxLoad(){
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
