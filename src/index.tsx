import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StyledGlobal from './styled/StyledGlobal';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StyledGlobal />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
