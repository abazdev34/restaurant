import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Menu from './components/Menu';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Биздин Ресторан</h1>
        <Menu />
      </div>
    </Provider>
  );
}

export default App;