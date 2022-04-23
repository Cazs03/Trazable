import { Provider } from 'react-redux';
import Main from './components/views/Main';
import UserStore from './redux/store/UserStore';

export default function App() {
  return (
    <div className="App">
      <Provider store={UserStore}>
        <Main />
      </Provider>
    </div>
  );
}
