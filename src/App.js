import {compose, createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import AppReducer from './AppReducer';
import ColorApp from './containers/ColorApp';
import createTitle from './components/title';
import createHello from './components/hello';
import {fetchColors} from './components/ColorList/actions';

const store = createStore(AppReducer, {}, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
const setMode = (mode) => store.dispatch({ type: 'SET_MODE', mode });


store.dispatch(fetchColors('alpha'))
store.subscribe(() => {
  console.log('GET_STATE', store.getState());
});

export default React => ({ foo, ...props }) => {
  const Title = createTitle(React);
  const Hello = createHello(React);
  const helloProps = {
    ...props,
    actions: {
      setMode
    }
  };

  /*
  <Hello { ...helloProps } />
  <p>Content goes here: { foo }</p>
   */

  return (
    <Provider store={store}>
      <div className="content">
        <Title { ...props } />
        <ColorApp />
      </div>
    </Provider>
  );
};
