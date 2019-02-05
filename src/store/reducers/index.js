import { combineReducers }  from 'redux';
import counter from './counter'

export default combineReducers({
  counter,
})

// because we are NOT naming our export, we are free to
// rename this export 'rootReducer' at import in the App.js file.
