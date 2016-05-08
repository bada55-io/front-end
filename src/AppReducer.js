import { combineReducers } from 'redux';
import ColorList from './components/ColorList/reducer';
import hello from './store/reducers/hello';


const rootReducer = combineReducers({
  ColorList,
  hello
});

export default rootReducer;